import React from 'react';
import { X, ExternalLink, AlertCircle, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-2xl rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
              Project #{project.number}
            </span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem, Solution & Impact Story Framework */}
          {(project.problem || project.solution || project.impact) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.problem && (
                <div className="p-4 rounded-xl bg-slate-900/90 border border-rose-500/20 space-y-1.5">
                  <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    Problem
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-1.5">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.impact && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Impact
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Medical / Educational Disclaimer (if applicable) */}
          {project.disclaimer && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5 text-amber-300">Important Disclaimer:</strong>
                {project.disclaimer}
              </div>
            </div>
          )}

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Key Features & Architectural Highlights
            </h4>
            <div className="space-y-2">
              {project.keyPoints?.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-cyan-300 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              <button
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-800/80 text-slate-400 border border-slate-700 cursor-not-allowed"
                title="Live deployment in progress"
              >
                <ExternalLink className="w-4 h-4 opacity-50" />
                <span>Live Demo (Coming Soon)</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
