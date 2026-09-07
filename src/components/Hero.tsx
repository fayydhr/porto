"use client";

import Image from "next/image";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-[85vh] lg:min-h-[90vh] grid grid-cols-1 md:grid-cols-12 border-b border-black">
      {/* Left Column: Metadata & Hero Title */}
      <div className="col-span-1 md:col-span-7 flex flex-col justify-between p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-black relative">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap justify-between items-center text-xs font-mono tracking-widest text-[#5d5f5f] uppercase gap-2 mb-8 md:mb-12 border-b border-black/10 pb-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            BASED IN INDONESIA
          </span>
          <span className="hidden sm:inline">MOBILE DEVELOPER</span>
          <span className="font-bold text-black">{PERSONAL_INFO.year}</span>
        </div>

        {/* Hero Title & Pitch */}
        <div className="my-auto py-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 border border-black/15 text-[11px] font-mono uppercase tracking-wider mb-6">
            <Code2 className="w-3.5 h-3.5" />
            <span>Flutter & Mobile Architecture</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[112px] font-extrabold uppercase tracking-tighter leading-[0.92] text-black mb-6">
            MOBILE
            <br />
            DEVELOPER
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl max-w-xl text-[#3d3d3d] font-normal leading-relaxed">
            {PERSONAL_INFO.subtitle}
          </p>
        </div>

        {/* Bottom Hero Indicators */}
        <div className="pt-8 border-t border-black/10 flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold tracking-wider hover:underline"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Available for Q1/Q2 Projects</span>
          </div>
        </div>
      </div>

      {/* Right Column: Hero Portrait Image */}
      <div className="col-span-1 md:col-span-5 img-hover bg-white h-[450px] md:h-auto min-h-[450px] relative overflow-hidden group">
        <Image
          src="/images/Gemini_Generated_Image_l8mja1l8mja1l8mj.jpeg"
          alt="Muhammad Fayyadh Rahinda - Portrait"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover filter grayscale contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
        
        {/* Editorial overlay badge */}
        <div className="absolute bottom-4 right-4 bg-black text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border border-white/20">
          FIG. 01 — PORTRAIT / 2026
        </div>
      </div>
    </section>
  );
}
