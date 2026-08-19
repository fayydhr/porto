"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import FeaturedBanner from "@/components/FeaturedBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import Toast from "@/components/Toast";
import { Project } from "@/data/portfolio";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Editorial Loading Screen */}
      <LoadingScreen />

      {/* Top Navbar */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <WhatIDoSection />
        <FeaturedBanner onSelectProject={(p) => setSelectedProject(p)} />
        <ContactSection
          onOpenModal={() => setContactModalOpen(true)}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
