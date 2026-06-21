# components/BottomBar.tsx

```tsx
import { motion, AnimatePresence } from "framer-motion";
import { AnalysisMode } from "../types";
import { cn } from "../lib/utils";

interface BottomBarProps {
  visible: boolean;
  selectedCount: number;
  maxReached: boolean;
  hasBrief: boolean;
  isLoading: boolean;
  mode: AnalysisMode;
  onModeChange: (mode: AnalysisMode) => void;
  onUnselectAll: () => void;
  onGenerate: () => void;
  onRequestUpdate: () => void;
}

export function BottomBar({
  visible,
  selectedCount,
  maxReached,
  hasBrief,
  isLoading,
  mode,
  onModeChange,
  onUnselectAll,
  onGenerate,
  onRequestUpdate,
}: BottomBarProps) {
  const modes: { id: AnalysisMode; label: string; icon: string }[] = [
    { id: 'RAPIDO', label: 'Flash', icon: 'bolt' },
    { id: 'DETALLADO', label: 'Standard', icon: 'visibility' },
    { id: 'EXHAUSTIVO', label: 'Deep Audit', icon: 'microscope' },
  ];

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-4xl px-4 pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="p-8 bg-white border-4 border-[#0636A5] shadow-brutal flex flex-col md:flex-row items-center justify-between pointer-events-auto gap-12"
          >
            <div className="flex items-center gap-14">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Mesa de Auditoría</span>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-display text-[#0636A5] leading-none">{selectedCount}</span>
                  <span className="text-xs font-black text-[#FFEC01] mb-1 tracking-tighter" style={{ textShadow: '1px 1px 0 #0636A5' }}>{maxReached ? "LÍMITE" : "ACTIVOS"}</span>
                </div>
                {selectedCount > 0 && (
                  <button onClick={onUnselectAll} className="text-[9px] font-black text-red-600 uppercase tracking-widest hover:underline mt-2 text-left">DESELECCIONAR</button>
                )}
              </div>

              <div className="h-16 w-px bg-slate-100 hidden md:block" />

              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Protocolo Operativo</span>
                <div className="flex gap-2">
                  {modes.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => onModeChange(m.id)}
                      className={cn(
                        "flex flex-col items-center gap-1 px-5 py-3 transition-all border-2",
                        mode === m.id 
                          ? "bg-[#0636A5] border-[#0636A5] text-white" 
                          : "bg-slate-50 border-transparent text-slate-400 hover:border-slate-200"
                      )}
                    >
                      <span className="material-symbols-outlined text-lg">{m.icon}</span>
                      <span className="text-[9px] font-black uppercase">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => hasBrief ? onRequestUpdate() : onGenerate()}
              disabled={isLoading || selectedCount === 0}
              className={cn(
                "btn btn-primary h-20 min-w-[280px] text-2xl",
                selectedCount === 0 && "opacity-30 pointer-events-none"
              )}
            >
              {isLoading ? (
                <span className="material-symbols-outlined animate-spin text-3xl">sync</span>
              ) : (
                <span className="material-symbols-outlined text-3xl">shield</span>
              )}
              <span>
                {isLoading ? "PROCESANDO..." : hasBrief ? "RE-AUDITAR" : "AUDITAR DNA"}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```
