# components/Sidebar.tsx

```tsx
import { useState } from "react";
import { BoldRenderer } from "./BoldRenderer";
import { cn } from "../lib/utils";
import { getFullExternalConsultancyPrompt } from "../lib/prompts";
import { Flow } from "flow-sdk";
import type { MediaItem } from "../types";
import { PROJECT_FILES_SNAPSHOT } from "../lib/source-snapshot";

interface SidebarProps {
  media: MediaItem[];
  brief: string | null;
  isLoading: boolean;
  error: string | null;
  hasMedia: boolean;
  generationPrompt: string;
  isGeneratingImage: boolean;
  businessReport: string | null;
  isBusinessLoading: boolean;
  useAuditForGen: boolean;
  onUseAuditForGenChange: (val: boolean) => void;
  onGenerationPromptChange: (val: string) => void;
  onReimagine: () => void;
  onExpertAnalysis: () => void;
  onSendToPrompt: (text: string) => void;
  onDismissError: () => void;
  onSetBrief: (val: string) => void;
}

export function Sidebar({
  media,
  brief,
  isLoading,
  error,
  hasMedia,
  generationPrompt,
  isGeneratingImage,
  businessReport,
  isBusinessLoading,
  useAuditForGen,
  onUseAuditForGenChange,
  onGenerationPromptChange,
  onReimagine,
  onExpertAnalysis,
  onSendToPrompt,
  onDismissError,
  onSetBrief,
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState<'audit' | 'expert'>('audit');
  const [copied, setCopied] = useState<string | null>(null);
  const [isEditingAudit, setIsEditingAudit] = useState(false);
  const [editBuffer, setEditBuffer] = useState("");
  const [isExporting, setIsExporting] = useState<'idle' | 'busy' | 'done'>('idle');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleExport = (content: string, filename: string) => {
    const uint8 = new TextEncoder().encode(content);
    const b64 = btoa(String.fromCharCode(...uint8));
    Flow.download({ 
      base64: b64, 
      mimeType: 'text/markdown', 
      filename 
    });
  };

  const handleProjectBackup = () => {
    const projectData = {
      appName: "DosRuedas Brand Intelligence",
      exportDate: new Date().toISOString(),
      branding: {
        primary: "#0636A5",
        accent: "#FFEC01"
      },
      analysis: {
        auditBrief: brief,
        expertConsultancy: businessReport,
        lastGenerationPrompt: generationPrompt
      },
      assets: media.map(m => ({
        id: m.id,
        name: m.alt,
        note: m.note,
        mediaId: m.mediaId,
        source: m.source
      }))
    };

    const jsonString = JSON.stringify(projectData, null, 2);
    const uint8 = new TextEncoder().encode(jsonString);
    const b64 = btoa(String.fromCharCode(...uint8));
    
    Flow.download({
      base64: b64,
      mimeType: 'application/json',
      filename: `dosruedas-analysis-backup-${new Date().getTime()}.json`
    });
  };

  const handleSourceCodeExport = async () => {
    setIsExporting('busy');
    try {
      // Consolidamos el snapshot actual para la descarga
      const codeSnapshot = {
        projectName: "DosRuedas Brand Intelligence",
        version: "1.2.0",
        exportTimestamp: new Date().toISOString(),
        files: PROJECT_FILES_SNAPSHOT
      };

      const jsonString = JSON.stringify(codeSnapshot, null, 2);
      const uint8 = new TextEncoder().encode(jsonString);
      const b64 = btoa(String.fromCharCode(...uint8));
      
      await Flow.download({
        base64: b64,
        mimeType: 'application/json',
        filename: `dosruedas-source-snapshot-${new Date().getTime()}.json`
      });
      setIsExporting('done');
      setTimeout(() => setIsExporting('idle'), 3000);
    } catch (err) {
      console.error("Export failed", err);
      setIsExporting('idle');
    }
  };

  const splitAudit = (text: string) => {
    const marker = "## PROMPT TÉCNICO DE CORRECCIÓN";
    const index = text.indexOf(marker);
    if (index === -1) return { analysis: text, prompt: "" };
    return {
      analysis: text.substring(0, index).trim(),
      prompt: text.substring(index + marker.length).trim()
    };
  };

  const { analysis, prompt } = splitAudit(brief || "");

  return (
    <aside className="w-[480px] h-full flex flex-col z-40 bg-white border-l-4 border-[#0636A5] shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">
      {/* Sidebar Header */}
      <div className="p-10 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-[#0636A5] uppercase tracking-[0.3em] mb-1">Cromática Intelligence</span>
            <h3 className="text-4xl text-[#0636A5] font-display uppercase tracking-tight">BRAND AUDIT</h3>
          </div>
          <div className="w-14 h-14 bg-[#0636A5] flex items-center justify-center text-[#FFEC01] border-2 border-[#0636A5]">
            <span className="material-symbols-outlined text-3xl">palette</span>
          </div>
        </div>
        
        <div className="flex bg-slate-200/50 p-1 rounded-none border-2 border-[#0636A5]">
          <button 
            onClick={() => setActiveTab('audit')}
            className={cn(
              "flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-all",
              activeTab === 'audit' ? "bg-[#0636A5] text-white" : "text-slate-400 hover:text-[#0636A5]"
            )}
          >
            Auditoría Color
          </button>
          <button 
            onClick={() => setActiveTab('expert')}
            className={cn(
              "flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-all",
              activeTab === 'expert' ? "bg-[#0636A5] text-white" : "text-slate-400 hover:text-[#0636A5]"
            )}
          >
            Consultoría
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
        {activeTab === 'audit' ? (
          <div className="space-y-10">
            {/* Visual DNA Prompt */}
            <section className="bg-slate-50 p-8 border-4 border-[#0636A5] shadow-brutal space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0636A5] text-2xl">edit_note</span>
                  <h4 className="text-[#0636A5] text-xl font-display uppercase">Texto y Tipografía</h4>
                </div>
                {brief && (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={useAuditForGen} 
                      onChange={(e) => onUseAuditForGenChange(e.target.checked)}
                      className="w-4 h-4 accent-[#0636A5]"
                    />
                    <span className="text-[9px] font-black text-[#0636A5] uppercase tracking-tighter">Acoplar Color Audit</span>
                  </label>
                )}
              </div>

              <textarea
                value={generationPrompt}
                onChange={(e) => onGenerationPromptChange(e.target.value)}
                placeholder="Ingresa aquí los textos o tipografía requerida..."
                className="w-full h-32 p-5 bg-white border-2 border-[#0636A5] text-[12px] font-bold outline-none resize-none focus:bg-slate-50 transition-all placeholder:text-slate-300"
              />
              <button 
                onClick={onReimagine} 
                disabled={isGeneratingImage || !hasMedia} 
                className="btn btn-primary w-full h-16 text-lg"
              >
                {isGeneratingImage ? <span className="animate-spin material-symbols-outlined text-2xl">refresh</span> : <span>Ejecutar Ajuste de Color</span>}
              </button>
            </section>

            {/* Audit Results */}
            {isLoading ? (
              <div className="py-24 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 border-8 border-[#0636A5] border-t-[#FFEC01] rounded-full animate-spin mb-8" />
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0636A5]">Escaneando Colorimetría...</p>
              </div>
            ) : brief ? (
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b-4 border-[#FFEC01] pb-2">
                  <h4 className="text-sm font-black text-[#0636A5] uppercase tracking-widest">DNA Report: Diagnóstico</h4>
                  <div className="flex gap-2">
                    <button onClick={() => { setEditBuffer(brief); setIsEditingAudit(true); }} className="w-8 h-8 border-2 border-[#0636A5] flex items-center justify-center text-[#0636A5] hover:bg-[#FFEC01]">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button onClick={() => handleExport(brief, 'dosruedas-auditoria-color.md')} className="w-8 h-8 border-2 border-[#0636A5] flex items-center justify-center text-[#0636A5] hover:bg-[#FFEC01]">
                      <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>
                </div>

                {isEditingAudit ? (
                  <div className="space-y-4">
                    <textarea 
                      value={editBuffer} 
                      onChange={(e) => setEditBuffer(e.target.value)}
                      className="w-full h-80 p-5 border-4 border-[#0636A5] text-[11px] font-bold font-mono outline-none bg-slate-50"
                    />
                    <div className="flex gap-3">
                      <button onClick={() => setIsEditingAudit(false)} className="flex-1 py-3 text-[10px] font-black uppercase border-2 border-[#0636A5]">Cancelar</button>
                      <button onClick={() => { onSetBrief(editBuffer); setIsEditingAudit(false); }} className="flex-1 py-3 text-[10px] font-black uppercase bg-[#0636A5] text-white">Aplicar</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-8 border-2 border-[#0636A5] bg-slate-50 shadow-sm relative group">
                      <button 
                        onClick={() => handleCopy(analysis, 'analysis')}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 flex items-center justify-center bg-white border-2 border-[#0636A5] text-[#0636A5] hover:bg-slate-100"
                      >
                        <span className="material-symbols-outlined text-xl">
                          {copied === 'analysis' ? 'done' : 'content_copy'}
                        </span>
                      </button>
                      <div className="text-[12px] text-slate-600 font-bold whitespace-pre-wrap">
                        <BoldRenderer text={analysis} />
                      </div>
                    </div>

                    {prompt && (
                      <section className="space-y-4">
                        <div className="flex items-center gap-3 px-2">
                          <span className="material-symbols-outlined text-[#0636A5] text-xl">terminal</span>
                          <h4 className="text-[10px] font-black text-[#0636A5] uppercase tracking-[0.2em]">Prompt Técnico de Corrección</h4>
                        </div>
                        <div className="relative">
                          <textarea
                            readOnly
                            value={prompt}
                            className="prompt-display-box w-full h-40 text-[11px] leading-relaxed cursor-text resize-none focus:outline-none"
                          />
                          <button 
                            onClick={() => handleCopy(prompt, 'prompt')}
                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border border-[#FFEC01]/30 p-2 text-[#FFEC01] transition-all flex items-center gap-2"
                          >
                            <span className="material-symbols-outlined text-lg">
                              {copied === 'prompt' ? 'done' : 'content_copy'}
                            </span>
                            <span className="text-[8px] font-black uppercase tracking-widest">
                              {copied === 'prompt' ? 'Copiado' : 'Copiar Prompt'}
                            </span>
                          </button>
                        </div>
                      </section>
                    )}
                  </>
                )}
              </div>
            ) : (
              <div className="py-32 flex flex-col items-center justify-center text-center opacity-10">
                <span className="material-symbols-outlined text-[120px] text-[#0636A5]">colorize</span>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mt-8">Carga activos para iniciar auditoría</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-12">
            {/* Consultoría Tab */}
            <section className="space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-[#0636A5] uppercase tracking-widest">Maestro IA Externa</h4>
                <button 
                  onClick={() => handleCopy(getFullExternalConsultancyPrompt(), 'external')}
                  className="flex items-center gap-2 text-[#0636A5] hover:text-[#FFEC01] transition-colors bg-white px-3 py-1 border-2 border-[#0636A5]"
                >
                  <span className="material-symbols-outlined text-base">
                    {copied === 'external' ? 'done' : 'content_copy'}
                  </span>
                  <span className="text-[10px] font-black uppercase">{copied === 'external' ? 'COPIADO' : 'COPIAR PROMPT'}</span>
                </button>
              </div>
              <div className="prompt-display-box text-[11px] max-h-[220px] overflow-y-auto custom-scrollbar">
                {getFullExternalConsultancyPrompt()}
              </div>
            </section>

            <div className="h-px bg-slate-100" />

            <section className="space-y-8">
              <div className="bg-[#0636A5] p-10 shadow-brutal border-t-8 border-[#FFEC01]">
                <h4 className="text-white text-2xl mb-4 font-display uppercase">Engine Estratégico</h4>
                <button 
                  onClick={onExpertAnalysis}
                  disabled={isBusinessLoading}
                  className="btn btn-primary w-full h-16 text-lg"
                >
                  {isBusinessLoading ? <span className="animate-spin material-symbols-outlined text-2xl">refresh</span> : <span className="material-symbols-outlined text-2xl">analytics</span>}
                  <span>Ejecutar Consultoría</span>
                </button>
              </div>

              {businessReport && (
                <div className="space-y-10">
                  <div className="p-8 bg-white border-2 border-[#0636A5] shadow-sm relative group">
                    <button 
                      onClick={() => handleCopy(businessReport, 'business')}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 flex items-center justify-center bg-white border-2 border-[#0636A5] text-[#0636A5] hover:bg-slate-100"
                    >
                      <span className="material-symbols-outlined text-xl">
                        {copied === 'business' ? 'done' : 'content_copy'}
                      </span>
                    </button>
                    <div className="text-[12px] leading-relaxed text-slate-600 font-bold whitespace-pre-wrap">
                      <BoldRenderer text={businessReport} />
                    </div>
                  </div>
                  <button onClick={() => handleExport(businessReport, 'dosruedas-consultoria.md')} className="btn btn-secondary w-full h-14 text-sm">
                    <span className="material-symbols-outlined">download</span>
                    <span>Descargar Reporte (.md)</span>
                  </button>
                </div>
              )}
            </section>

            {/* Backup Section */}
            <section className="pt-10 border-t-4 border-slate-100 space-y-6">
              <div className="bg-slate-50 p-6 border-2 border-dashed border-[#0636A5]">
                <div className="flex flex-col gap-2 mb-4">
                  <h4 className="text-[11px] font-black text-[#0636A5] uppercase tracking-widest">Respaldo de Inteligencia</h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight leading-tight">
                    Descarga un archivo JSON con los briefs, reportes y notas de activos actuales.
                  </p>
                </div>
                <button 
                  onClick={handleProjectBackup}
                  className="w-full py-4 text-[10px] font-black uppercase bg-white border-2 border-[#0636A5] text-[#0636A5] hover:bg-[#FFEC01] flex items-center justify-center gap-3 transition-all shadow-sm active:translate-y-px"
                >
                  <span className="material-symbols-outlined text-lg">database</span>
                  <span>EXPORTAR DATOS (.JSON)</span>
                </button>
              </div>

              {/* Botón de Emergencia para Código Fuente */}
              <div className="bg-white p-6 border-4 border-red-600 shadow-brutal relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-600 translate-x-10 -translate-y-10 rotate-45 opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-600 text-lg">terminal</span>
                    <h4 className="text-[11px] font-black text-red-600 uppercase tracking-widest">Recuperación de Código</h4>
                  </div>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tight leading-tight">
                    Obtén el snapshot completo de lib/source-snapshot.ts para restaurar la aplicación manualmente si es necesario.
                  </p>
                </div>
                <button 
                  onClick={handleSourceCodeExport}
                  disabled={isExporting !== 'idle'}
                  className={cn(
                    "w-full py-4 text-[10px] font-black uppercase flex items-center justify-center gap-3 transition-all border-2",
                    isExporting === 'idle' ? "bg-red-600 text-white border-red-600 hover:bg-white hover:text-red-600" :
                    isExporting === 'busy' ? "bg-slate-100 text-slate-400 border-slate-200" :
                    "bg-green-600 text-white border-green-600"
                  )}
                >
                  <span className={cn("material-symbols-outlined text-lg", isExporting === 'busy' && "animate-spin")}>
                    {isExporting === 'idle' ? 'file_download' : isExporting === 'busy' ? 'sync' : 'done_all'}
                  </span>
                  <span>{isExporting === 'idle' ? 'DESCARGAR SNAPSHOT DE CÓDIGO' : isExporting === 'busy' ? 'GENERANDO ARCHIVO...' : 'SNAPSHOT DESCARGADO'}</span>
                </button>
              </div>
            </section>
          </div>
        )}
      </div>

      {error && (
        <div className="mx-10 mb-10 p-5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest flex justify-between items-center shadow-brutal animate-bounce border-2 border-white">
          <span>{error}</span>
          <button onClick={onDismissError} className="material-symbols-outlined text-xl">close</button>
        </div>
      )}
    </aside>
  );
}
```
