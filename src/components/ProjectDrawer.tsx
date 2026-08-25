import React, { useEffect } from "react";
import type { Project } from "../data/projects";

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose }) => {
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
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-over Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-slate-200 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-md z-10">
            <div>
              <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider block">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold text-slate-900">{project.name}</h2>
              <p className="text-xs font-medium text-slate-600 mt-0.5">{project.tagline}</p>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Body Content */}
          <div className="p-6 md:p-8 space-y-8 flex-1">
            {/* Overview */}
            <section>
              <h3 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                Project Overview
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {project.description}
              </p>
            </section>

            {/* Performance Metrics */}
            {project.metrics && (
              <section className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                <h3 className="text-xs uppercase tracking-wider font-mono font-semibold text-indigo-700 mb-1">
                  ⚡ Impact Metric
                </h3>
                <p className="text-sm font-semibold text-slate-900 font-mono">
                  {project.metrics}
                </p>
              </section>
            )}

            {/* Engineering Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <section>
                <h3 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  Engineering Solutions
                </h3>
                <ul className="space-y-2.5">
                  {project.challenges.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-3"
                    >
                      <span className="font-mono text-indigo-600 font-bold text-xs mt-0.5">0{idx + 1}.</span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Key Capabilities & Impact */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <section>
                <h3 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Key Capabilities & Impact
                </h3>
                <ul className="space-y-2.5">
                  {project.architectureHighlights.map((arch, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-3"
                    >
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="leading-relaxed">{arch}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Full Tech Stack */}
            <section>
              <h3 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-900 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <div className="p-6 md:p-8 border-t border-slate-200 bg-white flex items-center gap-4 sticky bottom-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors text-center flex items-center justify-center gap-2 shadow-sm"
              >
                View Project / Package
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors text-center flex items-center gap-2"
              >
                View Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
