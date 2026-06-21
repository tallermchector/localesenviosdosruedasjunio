# App.tsx

```tsx
import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flow } from "flow-sdk";
import { CORPORATE_STYLES } from "./lib/styles";
import { 
  buildAuditPrompt, 
  buildSystemInstruction, 
  buildReimaginePrompt, 
  buildExpertBusinessPrompt 
} from "./lib/prompts";
import type { MediaItem, AnalysisMode } from "./types";
import { MoodboardCard } from "./components/MoodboardCard";
import { BottomBar } from "./components/BottomBar";
import { Sidebar } from "./components/Sidebar";
import { UpdateWarningModal } from "./components/UpdateWarningModal";

export default function App() {
  // Inject Corporate Branding Styles
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'corporate-theme';
    style.textContent = CORPORATE_STYLES;
    document.head.appendChild(style);

    const fontLink = document.createElement('link');
    fontLink.id = 'google-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(fontLink);

    return () => {
      document.getElementById('corporate-theme')?.remove();
      document.getElementById('google-fonts')?.remove();
    };
  }, []);

  // State Management
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [isProcessingFiles, setIsProcessingFiles] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedUrls, setSelectedUrls] = useState<Set<string>>(new Set());
  
  // Intelligence States
  const [brief, setBrief] = useState<string | null>(null);
  const [originalBrief, setOriginalBrief] = useState<string | null>(null);
  const [isBriefLoading, setIsBriefLoading] = useState(false);
  const [analysisMode, setAnalysisMode] = useState<AnalysisMode>('RAPIDO');
  const [useAuditForGen, setUseAuditForGen] = useState(true);

  const [businessReport, setBusinessReport] = useState<string | null>(null);
  const [isBusinessLoading, setIsBusinessLoading] = useState(false);

  // Generation States
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generationPrompt, setGenerationPrompt] = useState("");
  const [showUpdateWarning, setShowUpdateWarning] = useState(false);

  // Selection Logic
  const toggleSelection = (url: string) => {
    setSelectedUrls((prev) => {
      const next = new Set(prev);
      if (next.has(url)) {
        next.delete(url);
      } else {
        if (next.size < 5) next.add(url);
        else setError("Máximo de 5 activos alcanzado.");
      }
      return next;
    });
  };

  const handleSendToPrompt = useCallback((text: string) => {
    setGenerationPrompt(prev => {
      const trimmed = prev.trim();
      return trimmed ? `${trimmed}\n\n${text}` : text;
    });
  }, []);

  // Media Actions
  const processFiles = async (files: File[]) => {
    setIsProcessingFiles(true);
    setError(null);
    try {
      for (const f of files) {
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve) => {
          reader.onload = () => resolve((reader.result as string).split(',')[1]);
          reader.readAsDataURL(f);
        });
        const b64 = await base64Promise;
        const { mediaId } = await Flow.upload({ 
          base64: b64, 
          mimeType: f.type as any, 
          name: f.name 
        });
        
        const dataUrl = `data:${f.type};base64,${b64}`;
        const newItem: MediaItem = { 
          id: crypto.randomUUID(), 
          mediaId, 
          type: "image", 
          url: dataUrl, 
          alt: f.name, 
          source: "upload" 
        };
        
        setMedia(prev => [newItem, ...prev]);
        setSelectedUrls(prev => prev.size < 5 ? new Set(prev).add(dataUrl) : prev);
      }
    } catch (err) {
      setError("Error cargando archivos.");
    } finally {
      setIsProcessingFiles(false);
    }
  };

  const handleSelectFromCollections = async () => {
    setError(null);
    try {
      const selectedItems = await Flow.media.selectMultiple({ 
        filter: "image", 
        maxCount: 5 
      });
      
      if (selectedItems.length === 0) return;

      const newMediaItems: MediaItem[] = selectedItems.map(s => ({
        id: crypto.randomUUID(),
        mediaId: s.mediaId,
        type: "image" as const,
        url: `data:${s.mimeType};base64,${s.base64}`,
        alt: s.name,
        source: "upload" as const
      }));

      setMedia(prev => [...newMediaItems, ...prev]);
      setSelectedUrls(prev => {
        const next = new Set(prev);
        for (const item of newMediaItems) {
          if (next.size < 5) next.add(item.url);
        }
        return next;
      });
    } catch (err) {
      setError("Error al acceder a la galería.");
    }
  };

  // Intelligence Actions
  const handleExpertAnalysis = async () => {
    setIsBusinessLoading(true);
    setError(null);
    try {
      const { text } = await Flow.generate.text(buildExpertBusinessPrompt(), {
        systemInstruction: buildSystemInstruction()
      });
      setBusinessReport(text);
    } catch (err) {
      setError("Error en consultoría estratégica.");
    } finally {
      setIsBusinessLoading(false);
    }
  };

  const generateAudit = async () => {
    const selection = media.filter(m => selectedUrls.has(m.url));
    if (selection.length === 0) {
      setError("Selecciona activos para auditar.");
      return;
    }
    setIsBriefLoading(true);
    setError(null);
    try {
      const { text } = await Flow.generate.text(buildAuditPrompt(selection, analysisMode), {
        images: selection.map(m => ({ 
          base64: m.url.split(",")[1], 
          mimeType: "image/png" 
        })),
        systemInstruction: buildSystemInstruction(),
      });
      setBrief(text);
      setOriginalBrief(text);
    } catch (err) {
      setError("Fallo en el escaneo de activos.");
    } finally {
      setIsBriefLoading(false);
    }
  };

  const handleReimagine = async () => {
    const selection = media.filter(m => selectedUrls.has(m.url));
    if (selection.length === 0 || !selection[0].mediaId) {
      setError("Selecciona una imagen base.");
      return;
    }
    setIsGeneratingImage(true);
    setError(null);
    try {
      const auditToUse = (useAuditForGen && brief) ? brief : undefined;
      const result = await Flow.generate.image({
        prompt: buildReimaginePrompt(generationPrompt, auditToUse),
        referenceImageMediaIds: [selection[0].mediaId],
        modelDisplayName: "🍌 Nano Banana Pro",
        aspectRatio: "1:1"
      });
      
      const newUrl = `data:${result.mimeType};base64,${result.base64}`;
      setMedia(prev => [{
        id: crypto.randomUUID(),
        mediaId: result.mediaId,
        type: "image",
        url: newUrl,
        alt: "Activo Generado",
        source: "upload",
        note: `DNA: ${generationPrompt || 'Alineación DosRuedas'}`
      }, ...prev]);
      
      setSelectedUrls(new Set([newUrl]));
    } catch (err) {
      setError("Error generando activo.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="h-screen w-full flex bg-[#FFFFFF] overflow-hidden select-none corporate-grid">
      <div className="flex-1 min-w-0 relative h-full flex flex-col">
        {/* Header with prominence on Gallery Selection */}
        <header className="z-30 w-full pt-10 px-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <h1 className="text-4xl text-[#0636A5] font-display tracking-tight uppercase">ENVÍOS DOSRUEDAS</h1>
              <div className="flex items-center gap-2">
                <span className="pulse-dot"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0636A5]/60">Mar del Plata Node // Brand Audit</span>
              </div>
            </div>
            
            <div className="h-10 w-px bg-[#0636A5]/10 mx-2" />
            
            <div className="flex gap-3">
              <button onClick={handleSelectFromCollections} className="btn btn-primary h-12 shadow-brutal px-8">
                <span className="material-symbols-outlined">photo_library</span>
                <span>SELECCIONAR GALERÍA</span>
              </button>
              
              <button onClick={() => fileInputRef.current?.click()} className="btn btn-outline h-12">
                <span className="material-symbols-outlined">upload_file</span>
                <span>Subir</span>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  multiple 
                  accept="image/*" 
                  onChange={(e) => processFiles(Array.from(e.target.files || []))} 
                />
              </button>
            </div>
          </div>
          
          {media.length > 0 && (
            <button 
              onClick={() => { 
                setMedia([]); 
                setBrief(null); 
                setBusinessReport(null); 
                setSelectedUrls(new Set()); 
              }} 
              className="text-[10px] font-black text-red-600 hover:bg-red-50 px-4 py-2 rounded border-2 border-red-200 uppercase tracking-widest transition-all"
            >
              LIMPIAR MESA
            </button>
          )}
        </header>

        {/* Workspace */}
        <main className="flex-1 pt-12 pb-48 h-full overflow-y-auto px-10 custom-scrollbar">
          {media.length > 0 ? (
            <div className="masonry-grid">
              <AnimatePresence>
                {media.map((item, idx) => (
                  <MoodboardCard
                    key={item.id}
                    item={item}
                    index={idx}
                    isSelected={selectedUrls.has(item.url)}
                    onToggleSelection={() => toggleSelection(item.url)}
                    onRemove={() => { 
                      setMedia(m => m.filter(i => i.id !== item.id)); 
                      setSelectedUrls(u => { const n = new Set(u); n.delete(item.url); return n; }); 
                    }}
                    onUpdateNote={(note) => {
                      setMedia(prev => prev.map(m => m.id === item.id ? { ...m, note } : m));
                    }}
                    onSendToPrompt={handleSendToPrompt}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
              <div className="bg-[#0636A5] text-[#FFFFFF] px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-2 border-[#0636A5]">
                Official Design Authority
              </div>
              <h2 className="text-7xl text-[#0636A5] mb-8 leading-[0.9] font-display uppercase">INTELIGENCIA DE MARCA DOSRUEDAS</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-16 max-w-2xl">
                Auditoría técnica de activos visuales para alineación con el DNA #0636A5 y optimización de conversión en Mar del Plata.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                <button onClick={handleSelectFromCollections} className="p-12 bg-white border-4 border-[#0636A5] shadow-brutal text-left group hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-6xl text-[#FFEC01] mb-6 group-hover:scale-110 transition-transform block" style={{ textShadow: '2px 2px 0 #0636A5' }}>photo_library</span>
                  <h4 className="text-3xl text-[#0636A5] font-display uppercase mb-2">Abrir Galería</h4>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">Seleccionar activos existentes para auditoría estratégica</p>
                </button>
                <div className="p-12 bg-[#0636A5] text-white border-4 border-[#0636A5] shadow-brutal text-left">
                  <span className="material-symbols-outlined text-6xl text-[#FFEC01] mb-6 block">shield</span>
                  <h4 className="text-3xl font-display uppercase mb-2 text-[#FFEC01]">Protocolo DNA</h4>
                  <p className="text-[10px] text-white/40 font-black uppercase tracking-widest leading-relaxed">Análisis de colorimetría #0636A5 y #FFEC01 activo</p>
                </div>
              </div>
            </div>
          )}
        </main>

        <BottomBar
          visible={media.length > 0}
          selectedCount={selectedUrls.size}
          maxReached={selectedUrls.size === 5}
          hasBrief={!!brief}
          isLoading={isBriefLoading}
          mode={analysisMode}
          onModeChange={setAnalysisMode}
          onUnselectAll={() => setSelectedUrls(new Set())}
          onGenerate={generateAudit}
          onRequestUpdate={() => { 
            if (brief !== originalBrief) setShowUpdateWarning(true); 
            else generateAudit(); 
          }}
        />
      </div>

      <Sidebar
        media={media}
        brief={brief}
        isLoading={isBriefLoading}
        error={error}
        hasMedia={media.length > 0}
        generationPrompt={generationPrompt}
        isGeneratingImage={isGeneratingImage}
        businessReport={businessReport}
        isBusinessLoading={isBusinessLoading}
        useAuditForGen={useAuditForGen}
        onUseAuditForGenChange={setUseAuditForGen}
        onGenerationPromptChange={setGenerationPrompt}
        onReimagine={handleReimagine}
        onExpertAnalysis={handleExpertAnalysis}
        onSendToPrompt={handleSendToPrompt}
        onDismissError={() => setError(null)}
        onSetBrief={setBrief}
      />

      <UpdateWarningModal 
        open={showUpdateWarning} 
        onCancel={() => setShowUpdateWarning(false)} 
        onConfirm={() => { setShowUpdateWarning(false); generateAudit(); }} 
      />
    </div>
  );
}
```
