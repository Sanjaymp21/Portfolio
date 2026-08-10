import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Cpu,
  Wrench,
  Sparkles,
  Compass,
  ArrowUpRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { skillsData, currentlyExploringData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

const categoryHeaderIcons = {
  "Programming Languages": Code2,
  "Frontend Development": Layout,
  "Full Stack / Backend Technologies": Server,
  "AI & Technology": Cpu,
  "Design & Tools": Wrench
};

export function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = [
    'All',
    'Languages',
    'Frontend',
    'Full Stack & Backend',
    'AI & Tech',
    'Design & Tools'
  ];

  const displayedCategories = activeFilter === 'All'
    ? skillsData
    : skillsData.filter(cat => cat.shortTitle === activeFilter);

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background Ambient Color Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Technology Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A collection of languages, frameworks, tools, and technologies I use to build digital solutions.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Quick Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${activeFilter === option
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-slate-300 hover:text-white hover:border-cyan-500/30'
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Technology Categories Container */}
        <div className="space-y-16">
          {displayedCategories.map((group) => {
            const HeaderIcon = categoryHeaderIcons[group.category] || Code2;

            return (
              <div key={group.category} className="space-y-6">

                {/* Category Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-sm">
                      <HeaderIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-400 hidden sm:block">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900/80 text-cyan-400 border border-white/5 w-fit">
                    {group.technologies.length} Technologies
                  </span>
                </div>

                {/* Individual Technology Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative p-5 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Top Row: Icon + Glow Accent */}
                      <div className="flex items-start justify-between mb-4">
                        {/* Gradient Icon Container */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} border border-white/10 flex items-center justify-center ${tech.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                          <TechIcon name={tech.iconKey} className="w-6 h-6" />
                        </div>

                        {/* Subtle Corner Arrow / Node */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <span className="p-1 rounded-md text-cyan-400">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      {/* Content: Name + One-line description */}
                      <div className="space-y-1.5">
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                          {tech.description}
                        </p>
                      </div>

                      {/* Bottom Subtle Shimmer Border Accent */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                        <span>Active Stack</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 group-hover:animate-ping"></span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Highlighted Section: "Currently Exploring" */}
        <div className="mt-20 lg:mt-28">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 relative overflow-hidden shadow-2xl">

            {/* Ambient Background Gradient for the Exploring Box */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-8">

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>Continuous Growth</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Currently <span className="text-gradient">Exploring</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                    Expanding my computer science depth with advanced paradigms, artificial intelligence architectures, and distributed systems.
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-cyan-300">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Research & Upskilling</span>
                </div>
              </div>

              {/* Exploring Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {currentlyExploringData.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                          <TechIcon name={item.iconKey} className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium whitespace-nowrap">
                          {item.tag}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>{item.status || "Active Focus"}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Continuous Growth</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
