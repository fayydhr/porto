"use client";

import { useState, useEffect } from "react";
import { X, Send, Copy, Check, Mail, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export default function ContactModal({
  isOpen,
  onClose,
  onShowToast,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Stack Web App",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast("Thank you! Your message inquiry has been recorded.");
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#f9f9f9] border-2 border-black shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b-2 border-black pb-4 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5d5f5f] block">
              START A PROJECT CONVERSATION
            </span>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-black">
              LET&apos;S TALK
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Email Copy Bar */}
        <div className="mb-6 p-3.5 bg-[#f3f3f4] border border-black flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono truncate">
            <Mail className="w-4 h-4 shrink-0 text-[#5d5f5f]" />
            <span className="font-bold truncate text-black">{PERSONAL_INFO.email}</span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-[11px] font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
          </button>
        </div>

        {/* Form or Confirmation */}
        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">MESSAGE RECEIVED</h4>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto">
              Thank you for reaching out! Muhammad Fayyadh will respond to your inquiry within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                Your Name / Organization
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Graham, Studio Co."
                className="w-full px-4 py-2.5 bg-white border border-black text-sm text-black focus:outline-hidden focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                Email Address
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 bg-white border border-black text-sm text-black focus:outline-hidden focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                Project Scope
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-black text-sm text-black focus:outline-hidden focus:ring-2 focus:ring-black"
              >
                <option value="Full Stack Web App">Full Stack Web App (Next.js / Node)</option>
                <option value="Enterprise Architecture / ERP">Enterprise Architecture / ERP</option>
                <option value="Mobile App (React Native)">Mobile App (React Native)</option>
                <option value="UI/UX & Frontend Engineering">UI/UX & Frontend Engineering</option>
                <option value="Consulting / Freelance">Consulting / Freelance</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                Project Details
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your goals, timeline, and requirements..."
                className="w-full px-4 py-2.5 bg-white border border-black text-sm text-black focus:outline-hidden focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-black text-white text-xs font-mono uppercase font-bold tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND INQUIRY</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
