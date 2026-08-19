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
            [ 04 CASE STUDIES ]
          </span>
        </div>
      </div>

      {/* 2x2 Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-black">
        {PROJECTS.map((project, index) => {
          const isRightBorder = index % 2 === 0;
          const isBottomBorder = index < 2;

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group block cursor-pointer transition-all duration-300 border-black ${
                isRightBorder ? "md:border-r" : ""
              } ${isBottomBorder ? "border-b" : index === 2 ? "border-b md:border-b-0" : ""}`}
            >
              {/* Image Preview Container (4/3 aspect ratio) */}
              <div className="img-hover aspect-[4/3] border-b border-black bg-[#f3f3f4] p-4 sm:p-6 md:p-8 flex items-center justify-center relative">
                <div className="w-full h-full relative overflow-hidden border border-black shadow-xs">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover filter grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-mono px-2 py-0.5 tracking-wider uppercase">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="p-6 sm:p-8 flex justify-between items-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <div>
                  <span className="text-xs font-mono tracking-widest block mb-1 text-neutral-500 group-hover:text-neutral-300 font-bold">
                    {project.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
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
