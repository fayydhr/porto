"use client";

import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-black text-white px-4 py-3 border border-neutral-700 shadow-2xl flex items-center gap-3 text-xs font-mono">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="font-semibold">{message}</span>
        <button
          onClick={onClose}
          aria-label="Dismiss toast"
          className="ml-2 hover:opacity-70 text-neutral-400 hover:text-white"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
