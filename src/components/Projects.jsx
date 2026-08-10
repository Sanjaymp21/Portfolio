import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Eye,
  Sparkles,
  Layers,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export function Projects({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Pet Care',
    'Digital Management',
    'Sustainability and AI',
    'Health Technology'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on technical solutions covering web apps, AI utility, digital management, and empathetic design.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 scale-105'
                : 'glass-card text-slate-300 hover:text-white hover:border-cyan-500/30'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-white/10 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Card Top Banner / Visual Header */}
              <div className={`p-6 bg-gradient-to-br ${project.visualTheme} border-b border-white/5 relative overflow-hidden`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-black/40 text-cyan-300 border border-white/10">
                      {project.number}
                    </span>
                    <span className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900/60 text-slate-400 border border-white/5">
                    {project.status}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">

                <div className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Problem, Solution & Impact Framework */}
                  {(project.problem || project.solution || project.impact) && (
                    <div className="space-y-2 pt-1">
                      {project.problem && (
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-rose-500/20 space-y-1 text-xs">
                          <div className="flex items-center gap-1.5 font-mono text-rose-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                            <span>Problem:</span>
                          </div>
                          <p className="text-slate-300 pl-3 leading-relaxed">{project.problem}</p>
                        </div>
                      )}

                      {project.solution && (
                        <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/25 space-y-1 text-xs">
                          <div className="flex items-center gap-1.5 font-mono text-cyan-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                            <span>Solution:</span>
                          </div>
                          <p className="text-slate-200 pl-3 leading-relaxed">{project.solution}</p>
                        </div>
                      )}

                      {project.impact && (
                        <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/25 space-y-1 text-xs">
                          <div className="flex items-center gap-1.5 font-mono text-emerald-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>Impact:</span>
                          </div>
                          <p className="text-emerald-200/90 pl-3 leading-relaxed">{project.impact}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Disclaimer (if applicable) */}
                  {project.disclaimer && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{project.disclaimer}</span>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/80 text-cyan-300 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl glass-card text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                      title="View GitHub Profile / Repository"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    <button
                      disabled
                      className="p-2 rounded-xl bg-slate-800/60 text-slate-500 border border-white/5 cursor-not-allowed"
                      title="Live deployment in progress"
                      aria-label="Live demo coming soon"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
