"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowUpRight, Copy, Check } from "lucide-react";

interface ContactSectionProps {
  onOpenModal: () => void;
  onShowToast: (msg: string) => void;
}

export default function ContactSection({
  onOpenModal,
  onShowToast,
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast("Email copied: " + PERSONAL_INFO.email);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 lg:py-40 px-6 sm:px-8 md:px-12 border-b border-black bg-[#f9f9f9] flex flex-col items-center justify-center text-center relative"
    >
      <div className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-black inline-block"></span>
        <span>GET IN TOUCH</span>
      </div>

      <h2 className="text-4xl sm:text-7xl lg:text-[100px] font-extrabold uppercase tracking-tight text-black leading-[0.95] mb-8 sm:mb-12">
        LET&apos;S WORK
        <br />
        TOGETHER.
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <button
          onClick={onOpenModal}
          className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-black text-white px-8 py-4 border border-black hover:bg-transparent hover:text-black transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
        >
          <span>GET IN TOUCH</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleCopy}
          className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-transparent text-black px-6 py-4 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "EMAIL COPIED!" : "COPY DIRECT EMAIL"}</span>
        </button>
      </div>

      {/* Social Links Row */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#5d5f5f]">
        {PERSONAL_INFO.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black hover:underline transition-colors flex items-center gap-1"
          >
            <span>{social.name}</span>
            <span className="text-[10px] opacity-60">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
