import React, { useEffect } from 'react';
import { CheckCircle, Info, X } from 'lucide-react';

export function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl glass-panel shadow-2xl border border-cyan-500/30 text-white bg-slate-900/90 animate-bounce-short">
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-blue-400 shrink-0" />
      )}
      <span className="text-sm font-medium text-slate-200">{message}</span>
      <button
        onClick={onClose}
        className="p-1 hover:bg-white/10 rounded-md transition-colors text-slate-400 hover:text-white ml-2"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
