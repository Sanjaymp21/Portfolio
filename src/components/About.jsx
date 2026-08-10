import React from 'react';
import {
  GraduationCap,
  Code2,
  Cpu,
  Palette,
  Target,
  Sparkles,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

const iconMap = {
  GraduationCap,
  Code2,
  Cpu,
  Palette
};

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Bio Text & Career Goal Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-stretch">

          {/* Main Bio Text */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {aboutData.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Bannari Amman Inst of Tech
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> B.Tech IT (2029)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Career Goal Highlight Box */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-28 h-28 text-cyan-400" />
            </div>

            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold">
                Career Goal & Vision
              </h3>
              <blockquote className="text-lg sm:text-xl font-semibold text-slate-100 italic leading-snug">
                "{personalInfo.careerGoal}"
              </blockquote>
            </div>

            <div className="pt-6 relative z-10">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>Core Focus</span>
                <span className="text-cyan-400 font-semibold">Reliability & UX</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Code2;
            return (
              <div
                key={pillar.id}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-white/5">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
