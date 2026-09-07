"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Calendar, Layers, Code2 } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#f9f9f9] border-2 border-black shadow-2xl overflow-y-auto flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex justify-between items-center p-5 sm:p-6 bg-[#f9f9f9] border-b-2 border-black">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold bg-black text-white px-2.5 py-1">
              PROJ {project.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Title & Subtitle */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#5d5f5f] mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Project Image Preview */}
          <div className="relative aspect-[16/9] w-full border border-black overflow-hidden bg-neutral-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover filter grayscale contrast-105"
            />
          </div>

          {/* Grid Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 border border-black bg-[#f3f3f4]">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-neutral-500" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  TIMELINE
                </span>
                <span className="text-xs font-mono font-bold">{project.year}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4 text-neutral-500" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  CATEGORY
                </span>
                <span className="text-xs font-mono font-bold">{project.category}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${project.status === "IN PRODUCTION" ? "bg-emerald-500" : "bg-yellow-400"}`}></div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  STATUS
                </span>
                <span className="text-xs font-mono font-bold">{project.status ?? "COMPLETED / PRODUCTION"}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] font-bold">
              PROJECT OVERVIEW
            </h4>
            <p className="text-base text-neutral-800 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] font-bold">
              KEY ARCHITECTURAL HIGHLIGHTS
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-black mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] font-bold">
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono uppercase px-3 py-1.5 bg-white border border-black font-semibold text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Module Breakdown */}
          {project.moduleBreakdown && project.moduleBreakdown.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] font-bold">
                MODULE BREAKDOWN
              </h4>
              <div className="border border-black overflow-hidden">
                <table className="w-full text-xs font-mono">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="text-left px-4 py-2 uppercase tracking-wider font-bold w-1/3">Modul</th>
                      <th className="text-left px-4 py-2 uppercase tracking-wider font-bold">Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.moduleBreakdown.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#f3f3f4]"}>
                        <td className="px-4 py-2.5 font-bold border-r border-black border-b border-neutral-200 uppercase">{row.module}</td>
                        <td className="px-4 py-2.5 text-neutral-700 border-b border-neutral-200">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-black flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider border border-black hover:bg-white hover:text-black transition-colors"
              >
                <span>VISIT LIVE SYSTEM</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider border border-black hover:bg-black hover:text-white transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-6 py-3 text-xs font-mono uppercase text-neutral-500 hover:text-black hover:underline"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
