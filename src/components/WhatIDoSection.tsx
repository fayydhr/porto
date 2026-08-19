import { SERVICES } from "@/data/portfolio";
import { Globe, Smartphone, Database, Palette } from "lucide-react";

export default function WhatIDoSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "web":
        return <Globe className="w-10 h-10 stroke-[1.25]" />;
      case "smartphone":
        return <Smartphone className="w-10 h-10 stroke-[1.25]" />;
      case "database":
        return <Database className="w-10 h-10 stroke-[1.25]" />;
      case "design":
        return <Palette className="w-10 h-10 stroke-[1.25]" />;
      default:
        return <Globe className="w-10 h-10 stroke-[1.25]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 border-b border-black">
      <div className="px-6 sm:px-8 md:px-12 mb-10 sm:mb-12">
        <div className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-black inline-block"></span>
          <span>SERVICES & EXPERTISE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-black">
          WHAT I DO
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-b border-black divide-y md:divide-y-0 md:divide-x divide-black">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="p-8 sm:p-10 hover:bg-[#e8e8e8] transition-colors duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="text-black mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                {getIcon(service.iconName)}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-black/10">
              <ul className="space-y-1">
                {service.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 bg-black/40 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
