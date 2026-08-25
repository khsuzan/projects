import React, { useState } from "react";
import profilePic from "../assets/image.png";

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Avatar Image (Centered & Clickable) */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative inline-block group cursor-pointer focus:outline-hidden"
              title="Click to view full photo"
            >
              <img
                src={profilePic}
                alt="Kawsar Hossain Suzan"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md object-cover ring-1 ring-slate-200 group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 rounded-full bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Profile Headline */}
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            Kawsar Hossain Suzan
          </h1>

          <p className="text-base font-semibold text-indigo-600 mb-6">
            Cross-Platform Mobile (Flutter) & Full-Stack Developer
          </p>

          {/* Concise Profile Bio */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            I build high-performance mobile applications, scalable backends, and open-source tools. Experienced in dynamic inventory engines, high-concurrency event booking systems, AI integrations, and developer packages.
          </p>

          {/* Core Stack Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {["Flutter & Dart", "BLoC Clean Arch", "Node.js & Go", "React & TypeScript", "PostgreSQL & Redis", "AI & Open Source"].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 rounded bg-white text-slate-700 text-sm font-mono border border-slate-200"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Animated Scroll Down Arrow Button */}
          <div className="pt-4 flex justify-center">
            <a
              href="#projects"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 shadow-xs transition-colors animate-bounce focus:outline-hidden"
              title="Scroll to Projects"
              aria-label="Scroll to Projects"
            >
              <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-2xl p-3 shadow-2xl overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-md"
              title="Close preview"
            >
              ✕
            </button>

            {/* High-Res Full Image */}
            <img
              src={profilePic}
              alt="Kawsar Hossain Suzan"
              className="w-full h-auto max-h-[80vh] rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
