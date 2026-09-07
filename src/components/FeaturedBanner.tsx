"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio";

interface FeaturedBannerProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedBanner({ onSelectProject }: FeaturedBannerProps) {
  const featured = PROJECTS.find((p) => p.id === "garam-dua-musim-erp") ?? PROJECTS[0];

  return (
    <section className="border-b border-black overflow-hidden relative">
      {/* Infinite Marquee Ticker */}
      <div className="border-b border-black py-3 bg-black text-white overflow-hidden select-none">
        <div className="animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-xs font-mono font-bold uppercase tracking-[0.25em] mx-6 flex items-center gap-6"
            >
              <span>FEATURED PROJECT</span>
              <span className="text-neutral-500">•</span>
              <span>ENTERPRISE ERP LOGISTICS</span>
              <span className="text-neutral-500">•</span>
              <span>2026 ARCHITECTURE</span>
              <span className="text-neutral-500">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Featured Banner Showcase */}
      <div
        onClick={() => onSelectProject(featured)}
        className="w-full h-[55vh] md:h-[75vh] relative img-hover cursor-pointer group bg-neutral-900"
      >
        <Image
          src={featured.image}
          alt="Featured Project - ERP Business System"
          fill
          priority
          sizes="100vw"
          className="object-cover filter grayscale contrast-110 brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
        />

        {/* Center Giant Headline */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-xs font-mono text-white/80 uppercase tracking-widest mb-3 bg-black/60 px-3 py-1 border border-white/20">
            FLAGSHIP CASE STUDY
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-9xl font-extrabold text-white uppercase tracking-tighter drop-shadow-2xl">
            GARAM DUA MUSIM ERP
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-mono text-xs uppercase font-bold tracking-wider transform group-hover:scale-105 transition-transform">
            <span>INSPECT CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
