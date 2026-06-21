# components/MoodboardCard.tsx

```tsx
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import type { MediaItem } from "../types";

interface MoodboardCardProps {
  item: MediaItem;
  index: number;
  isSelected: boolean;
  onToggleSelection: () => void;
  onRemove: () => void;
  onUpdateNote: (note: string) => void;
  onSendToPrompt: (text: string) => void;
}

export function MoodboardCard({
  item,
  index,
  isSelected,
  onToggleSelection,
  onRemove,
  onUpdateNote,
  onSendToPrompt,
}: MoodboardCardProps) {
  const [isCommenting, setIsCommenting] = useState(false);
  const [draft, setDraft] = useState(item.note || "");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isCommenting) inputRef.current?.focus();
  }, [isCommenting]);

  const handleSave = () => {
    onUpdateNote(draft);
    setIsCommenting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "relative break-inside-avoid mb-8 bg-white border-2 transition-all group overflow-hidden",
        isSelected ? "border-[#FFEC01] shadow-brutal translate-x-[-4px] translate-y-[-4px]" : "border-[#0636A5] shadow-neo"
      )}
    >
      {/* Checkbox Overlay */}
      <div className="absolute top-4 left-4 z-20">
        <button
          onClick={onToggleSelection}
          className={cn(
            "w-7 h-7 border-2 transition-all flex items-center justify-center",
            isSelected ? "bg-[#0636A5] border-[#0636A5]" : "bg-white/90 border-slate-300"
          )}
        >
          {isSelected && <span className="material-symbols-outlined text-white text-base">check</span>}
        </button>
      </div>

      {/* Action Overlay */}
      <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {item.note && (
          <button 
            onClick={() => onSendToPrompt(item.note!)} 
            className="w-10 h-10 bg-[#FFEC01] border-2 border-[#0636A5] flex items-center justify-center text-[#0636A5] hover:bg-white transition-colors"
          >
            <span className="material-symbols-outlined text-xl">magic_button</span>
          </button>
        )}
        <button 
          onClick={() => setIsCommenting(true)} 
          className="w-10 h-10 bg-white border-2 border-[#0636A5] flex items-center justify-center text-[#0636A5] hover:bg-[#FFEC01] transition-colors"
        >
          <span className="material-symbols-outlined text-xl">sticky_note_2</span>
        </button>
        <button 
          onClick={onRemove} 
          className="w-10 h-10 bg-white border-2 border-red-600 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-xl">delete</span>
        </button>
      </div>

      {/* Media Content */}
      <div className="relative aspect-auto bg-slate-100">
        <img
          src={item.url}
          alt={item.alt}
          className="w-full h-auto cursor-pointer block grayscale group-hover:grayscale-0 transition-all duration-500"
          onClick={onToggleSelection}
        />
        {item.source === 'upload' && (
          <div className="absolute bottom-3 left-3 bg-[#0636A5] text-white px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest border border-[#FFEC01]">
            Audit Ready
          </div>
        )}
      </div>

      {/* Note Section */}
      {(item.note || isCommenting) && (
        <div className="p-5 bg-slate-50 border-t-2 border-[#0636A5]">
          {isCommenting ? (
            <div className="space-y-4">
              <textarea
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && e.ctrlKey) handleSave(); }}
                className="w-full text-xs p-3 bg-white border-2 border-slate-200 outline-none min-h-[100px] font-medium"
                placeholder="Agregar hallazgo visual..."
              />
              <div className="flex justify-end gap-4">
                <button onClick={() => setIsCommenting(false)} className="text-[10px] font-black text-slate-400 hover:text-slate-600 uppercase">DESCARTAR</button>
                <button onClick={handleSave} className="text-[10px] font-black text-[#0636A5] hover:underline uppercase tracking-widest">GUARDAR NOTA</button>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0636A5] text-base mt-0.5" style={{ color: '#0636A5' }}>verified</span>
              <p className="text-[11px] text-slate-600 font-bold italic leading-relaxed m-0 flex-1">{item.note}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
```
