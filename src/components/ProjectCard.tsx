import React from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, isFeatured }) => {
  const getGlowClass = (cat: string) => {
    switch (cat) {
      case "ai":
        return "glow-card-violet border-violet-500/20";
      case "iot":
      case "mobile":
        return "glow-card-emerald border-emerald-500/20";
      default:
        return "glow-card-cyan border-cyan-500/20";
    }
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case "ai":
        return { label: "AI & Speech", color: "bg-violet-500/10 text-violet-300 border-violet-500/30" };
      case "mobile":
        return { label: "Mobile (Flutter)", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" };
      case "iot":
        return { label: "IoT & Telemetry", color: "bg-teal-500/10 text-teal-300 border-teal-500/30" };
      default:
        return { label: "Full-Stack Web", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30" };
    }
  };

  const badge = getCategoryBadge(project.category);

  return (
    <div
      onClick={() => onSelect(project)}
      className={`group relative rounded-2xl glass-panel p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${getGlowClass(
        project.category
      )} ${isFeatured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              {project.icon}
            </span>
            <div>
              <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <span className="text-xs text-zinc-400 font-medium block">
                {project.tagline}
              </span>
            </div>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${badge.color}`}>
            {badge.label}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Metrics Highlight Badge */}
        {project.metrics && (
          <div className="mb-5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
            <span>{project.metrics}</span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-zinc-200">
        <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
          View Technical Case Study
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        {project.isFeatured && (
          <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            ★ Featured
          </span>
        )}
      </div>
    </div>
  );
};
