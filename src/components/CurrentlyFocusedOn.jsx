import React from 'react';
import { Target, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { currentlyFocusedOnData } from '../data/portfolioData';

export function CurrentlyFocusedOn() {
  return (
    <section id="focused-on" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Target className="w-3.5 h-3.5" />
            <span>Priority Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently <span className="text-gradient">Focused On</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Core technical domains where I am actively building projects, deepening architectural knowledge, and solving problems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* 4 Focus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentlyFocusedOnData.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-2.5 rounded-xl bg-slate-900/80 border border-white/5 group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active Focus
                </span>
                <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">2026</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
