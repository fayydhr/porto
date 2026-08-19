"use client";

import { useState } from "react";
import { EXPERIENCES } from "@/data/portfolio";
import { Plus, Minus, Briefcase, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Sticky Column */}
        <div className="col-span-1 md:col-span-4 p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-black">
          <div className="md:sticky md:top-28">
            <div className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] mb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER HISTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              EXPERIENCE
            </h2>
            <p className="hidden md:block text-sm text-[#5d5f5f] mt-4 leading-relaxed max-w-xs">
              Selected professional engagements across full-stack ERP architecture, AI engineering, corporate systems, and freelance development.
            </p>
          </div>
        </div>

        {/* Right List Column */}
        <div className="col-span-1 md:col-span-8 divide-y divide-black">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                onClick={() => toggleExpand(exp.id)}
                className={`group p-6 sm:p-8 md:p-10 cursor-pointer transition-all duration-300 ${
                  isExpanded
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white bg-transparent text-black"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono font-bold mt-1.5 opacity-60 group-hover:opacity-100">
                      {exp.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono uppercase tracking-wider opacity-85 mt-1.5">
                        <span className="font-bold">{exp.company}</span>
                        <span className="opacity-40">•</span>
                        <span className="flex items-center gap-1 opacity-75">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0 pt-2 md:pt-0 border-t md:border-t-0 border-current/10 shrink-0">
                    <span className="text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold">
                      {exp.period}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-current flex items-center justify-center text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                      {isExpanded ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-white/20 animate-in fade-in slide-in-from-top-2 duration-200 space-y-4">
                    {/* Bullet Points */}
                    <div className="space-y-2.5 max-w-3xl">
                      {exp.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Badges */}
                    <div className="pt-3 flex flex-wrap gap-2 border-t border-white/10">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono uppercase px-2.5 py-1 bg-white/10 border border-white/20 text-neutral-200 rounded-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
