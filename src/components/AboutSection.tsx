import { PERSONAL_INFO } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-12 border-b border-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-black inline-block"></span>
          <span>PHILOSOPHY & PROFILE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-bold tracking-tight uppercase max-w-5xl leading-[1.05] text-black mb-12 sm:mb-16">
          I BUILD DIGITAL PRODUCTS THAT MAKE AN IMPACT.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pt-10 border-t border-black">
          {PERSONAL_INFO.aboutStatements.map((item) => (
            <div key={item.label} className="space-y-2 group">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#5d5f5f] block font-semibold">
                {item.label}
              </span>
              <p className="text-base sm:text-lg font-medium text-black whitespace-pre-line leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
