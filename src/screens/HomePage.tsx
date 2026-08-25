import React, { useState, useEffect } from "react";
import { getProjects, type Project } from "../data/projects";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { StickyProjectShowcase } from "../components/StickyProjectShowcase";
import { ProjectDrawer } from "../components/ProjectDrawer";
import { TechMatrix } from "../components/TechMatrix";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const HomePage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="pt-16">
        {/* Profile-Centric Hero Section */}
        <Hero />

        {/* Sticky Scroll Projects Showcase */}
        <StickyProjectShowcase projects={projects} />

        {/* Technical Capabilities Matrix */}
        <TechMatrix />

        {/* Dedicated Contact Box Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Technical Spec Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default HomePage;
