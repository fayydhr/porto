"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Increment progress smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout1 = setTimeout(() => {
        setIsSlidingOut(true);
      }, 400);

      const timeout2 = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 1100);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [progress, onComplete]);

  if (isDone) return null;

  return (
    <aside
      aria-label="Loading Screen"
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-black text-white p-6 sm:p-12 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isSlidingOut ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-neutral-400 uppercase border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white inline-block"></span>
          <span className="text-white font-bold">FAYYDHR®</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>INITIALIZING EXPERIENCE</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center my-auto py-8 text-center">
        {/* Brand Typography */}
        <div className="inline-block px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-4">
          SYSTEMS & PRODUCT ENGINEERING
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter uppercase font-mono text-white mb-4">
          fayydhr<span className="text-neutral-500 text-4xl sm:text-5xl">®</span>
        </h1>

        <p className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase">
          MUHAMMAD FAYYADH RAHINDA • 2026
        </p>

        {/* Progress Bar Line */}
        <div className="w-48 sm:w-64 h-[2px] bg-neutral-800 mt-10 overflow-hidden relative">
          <div
            className="h-full bg-white transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-neutral-400 border-t border-neutral-800 pt-4">
        <span>ARCHITECTING SYSTEMS</span>
        <span className="text-white font-bold text-sm sm:text-base">
          {progress.toString().padStart(3, "0")}%
        </span>
      </div>
    </aside>
  );
}
