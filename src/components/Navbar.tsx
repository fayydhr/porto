"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-40 bg-[#f9f9f9]/95 backdrop-blur-md border-b border-black transition-all duration-300 ${
          isScrolled ? "py-3 shadow-xs" : "py-4 md:py-5"
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-12 mx-auto">
          {/* Logo */}
          <Link
            href="#"
            className="text-2xl md:text-3xl font-bold tracking-tight text-black hover:opacity-80 transition-opacity flex items-center gap-1 font-mono uppercase"
          >
            {PERSONAL_INFO.brand}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-[#5d5f5f] hover:text-black transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={onOpenContact}
              className="ml-2 text-xs font-semibold uppercase tracking-wider bg-black text-white px-5 py-2.5 border border-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center justify-center p-2 border border-black hover:bg-black hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-xs flex flex-col justify-end transition-opacity">
          <div className="bg-[#f9f9f9] border-t-2 border-black p-6 space-y-6 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center border-b border-black pb-4">
              <span className="text-xl font-bold font-mono tracking-tight">
                {PERSONAL_INFO.brand}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border border-black hover:bg-black hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-wider text-black hover:pl-2 transition-all flex items-center justify-between border-b border-black/10 pb-2"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-neutral-400 font-mono">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center text-sm font-bold uppercase tracking-wider bg-black text-white py-3.5 border border-black hover:bg-white hover:text-black transition-colors"
              >
                LET&apos;S TALK — SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
