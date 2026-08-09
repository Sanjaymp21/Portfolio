import React from 'react';
import { Code2, Cpu, Layers, Palette, Sparkles, ArrowRight } from 'lucide-react';
import { whatIDoData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Cpu,
  Layers,
  Palette
};

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialization & Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What <span className="text-gradient">I Do</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Building digital solutions through software development, AI, and creative design.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIDoData.map((item) => {
            const Icon = iconMap[item.icon] || Code2;

            return (
              <div
                key={item.id}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900/80 text-cyan-300 border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Active Pill */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Core Discipline</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
