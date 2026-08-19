"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f9f9f9] border-t border-black">
      <div className="flex flex-col w-full px-6 sm:px-8 md:px-12 py-16 sm:py-24 gap-12 max-w-7xl mx-auto">
        {/* Upper footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-black pb-8">
          <div>
            <Link
              href="#"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-black hover:opacity-80 transition-opacity font-mono"
            >
              {PERSONAL_INFO.brand}
            </Link>
            <p className="text-xs font-mono uppercase tracking-widest text-[#5d5f5f] mt-2">
              MUHAMMAD FAYYADH RAHINDA • PORTFOLIO
            </p>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-8">
            {PERSONAL_INFO.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono uppercase tracking-wider text-[#5d5f5f] hover:text-black transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Lower footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#5d5f5f]">
          <span>
            © {new Date().getFullYear()} MUHAMMAD FAYYADH RAHINDA. ALL RIGHTS RESERVED.
          </span>

          <button
            onClick={scrollToTop}
            className="hover:text-black transition-colors flex items-center gap-1.5 font-bold uppercase tracking-wider cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
