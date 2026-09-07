"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Project, PROJECTS } from "@/data/portfolio";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 border-b border-black">
      {/* Section Header */}
      <div className="px-6 sm:px-8 md:px-12 mb-10 sm:mb-12 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-black">
            SELECTED WORK
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#5d5f5f] uppercase tracking-wider">
            [ {PROJECTS.length.toString().padStart(2, "0")} CASE STUDIES ]
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-black">
        {PROJECTS.map((project, index) => {
          const isOddTotal = PROJECTS.length % 2 !== 0;
          const isLastItem = index === PROJECTS.length - 1;
          const isFullWidth = isOddTotal && isLastItem;
          const isRightCol = index % 2 === 1;

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group block cursor-pointer transition-all duration-300 border-black ${
                isFullWidth
                  ? "col-span-1 md:col-span-2 border-t md:border-t"
                  : !isRightCol
                  ? "md:border-r border-b"
                  : "border-b"
              }`}
            >
              {/* Image Preview Container */}
              <div
                className={`img-hover border-b border-black bg-[#f3f3f4] p-4 sm:p-6 md:p-8 flex items-center justify-center relative ${
                  isFullWidth ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                <div className="w-full h-full relative overflow-hidden border border-black shadow-xs">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={isFullWidth ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover filter grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-mono px-2 py-0.5 tracking-wider uppercase">
                    {project.category}
                  </div>
                  {project.playStoreUrl ? (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-mono font-bold px-2.5 py-1 tracking-wider uppercase flex items-center gap-1.5 border border-black shadow-xs transition-colors z-10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      PUBLISHED ON PLAY STORE
                    </a>
                  ) : project.status ? (
                    <div className="absolute top-3 right-3 bg-black/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 tracking-wider uppercase border border-white/20">
                      {project.status}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="p-6 sm:p-8 flex justify-between items-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono tracking-widest text-neutral-500 group-hover:text-neutral-300 font-bold">
                      {project.number}
                    </span>
                    {project.status && (
                      <span className="text-[10px] font-mono px-2 py-0.5 font-bold uppercase bg-emerald-500 text-black">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-neutral-500 group-hover:text-neutral-300 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono uppercase tracking-wider hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW DETAILS
                  </span>
                  <div className="w-9 h-9 rounded-full border border-current flex items-center justify-center transform group-hover:translate-x-1.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
