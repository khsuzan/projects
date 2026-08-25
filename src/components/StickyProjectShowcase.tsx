import React from "react";
import type { Project } from "../data/projects";

interface StickyProjectShowcaseProps {
  projects: Project[];
}

export const StickyProjectShowcase: React.FC<StickyProjectShowcaseProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Selected Projects & Case Studies
          </h2>
          <p className="text-sm text-slate-600">
            Cross-platform mobile applications, multi-tenant web systems, and open-source software.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-16 border-t border-slate-200 first:border-t-0 first:pt-0"
            >
              {/* Left Column: STICKY Meta (ONLY Name, Tagline, Category, Stack Pills & Store/Demo Links) */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4 self-start">
                <div className="text-sm font-mono font-medium text-indigo-600">
                  Project 0{index + 1} — {project.category}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {project.name}
                </h3>

                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links & App Store Badges */}
                <div className="flex flex-wrap gap-2.5 pt-3">
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5"
                    >
                      App Store (iOS)
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors inline-flex items-center gap-1.5"
                    >
                      Google Play (Android)
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {!project.appStoreUrl && !project.playStoreUrl && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5"
                    >
                      View Live / Package
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
                      className="px-4 py-2 rounded-lg text-sm font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors inline-flex items-center gap-1.5"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: SCROLLING Detailed Specifications, Architecture & Solutions */}
              <div className="lg:col-span-7 space-y-8">
                {/* Project Description Overview */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                    Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metric Highlight */}
                  {project.metrics && (
                    <div className="pt-2 text-sm font-mono font-semibold text-indigo-700">
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* Tech Architecture Layers Table / Breakdown if available */}
                {project.techLayers && project.techLayers.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                      Tech Architecture Layers
                    </h4>
                    <div className="space-y-2">
                      {project.techLayers.map((tl, tIdx) => (
                        <div key={tIdx} className="text-sm text-slate-700 leading-relaxed flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                          <span className="font-semibold text-slate-900 min-w-[170px]">{tl.layer}:</span>
                          <span className="font-mono text-slate-600">{tl.techs}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Sub-systems Breakdown if available */}
                {project.subsystems && project.subsystems.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                      Core Sub-Systems & Feature Architecture
                    </h4>
                    <div className="space-y-4">
                      {project.subsystems.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2 border-l-2 border-indigo-600 pl-4 py-0.5">
                          <div className="text-sm font-bold text-slate-900">{sub.title}</div>
                          <p className="text-sm text-slate-600">{sub.description}</p>
                          <ul className="space-y-1.5 pt-1">
                            {sub.points.map((pt, pIdx) => (
                              <li key={pIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* The Engineering Solutions */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                      The Engineering Solution
                    </h4>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, cIdx) => (
                        <div
                          key={cIdx}
                          className="border-l-2 border-slate-300 pl-4 text-sm text-slate-700 leading-relaxed"
                        >
                          <span className="font-mono font-bold text-indigo-600 mr-2">
                            0{cIdx + 1}.
                          </span>
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Technical Accomplishments */}
                {project.accomplishments && project.accomplishments.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                      Key Technical Accomplishments
                    </h4>
                    <div className="space-y-2.5">
                      {project.accomplishments.map((acc, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                          <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                          <span>{acc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Capabilities & Impact fallback */}
                {(!project.accomplishments || project.accomplishments.length === 0) &&
                  project.architectureHighlights &&
                  project.architectureHighlights.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                        Key Capabilities & Impact
                      </h4>
                      <div className="space-y-2.5">
                        {project.architectureHighlights.map((arch, aIdx) => (
                          <div
                            key={aIdx}
                            className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                          >
                            <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                            <span>{arch}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
