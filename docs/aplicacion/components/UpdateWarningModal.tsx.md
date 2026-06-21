# components/UpdateWarningModal.tsx

```tsx
import { motion, AnimatePresence } from "framer-motion";

interface UpdateWarningModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function UpdateWarningModal({ open, onCancel, onConfirm }: UpdateWarningModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[600] flex items-center justify-center bg-black/70 backdrop-blur-md px-6"
          onClick={onCancel}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-4 border-[#0636A5] shadow-brutal max-w-lg w-full p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-4xl text-[#FFEC01]" style={{ textShadow: '2px 2px 0 #0636A5' }}>warning</span>
              <h3 className="text-3xl font-display text-[#0636A5] uppercase tracking-tight">ACTUALIZACIÓN DE PROTOCOLO</h3>
            </div>
            <p className="text-[13px] text-slate-500 font-bold uppercase leading-relaxed mb-10">
              ESTA ACCIÓN SOBRESCRIBIRÁ LA AUDITORÍA ACTUAL CON UN NUEVO ESCANEO DE PÍXELES. ¿DESEAS PROCEDER CON LA RE-VALORACIÓN DEL DNA DE MARCA?
            </p>
            <div className="flex gap-6">
              <button onClick={onCancel} className="btn btn-secondary flex-1 h-16 text-sm">DESCARTAR</button>
              <button onClick={onConfirm} className="btn btn-primary flex-1 h-16 text-sm">PROCEDER</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

```
