import React from 'react';
import { BookOpen, Layers, Cpu, Code2, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { learningInsightsData } from '../data/portfolioData';

const insightIcons = {
  Layers,
  Cpu,
  Code2,
  Sparkles
};

export function LearningInsights() {
  return (
    <section id="insights" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Notes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learning & <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Exploring concepts, building mental models, and synthesizing lessons learned across engineering and AI.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningInsightsData.map((item) => {
            const Icon = insightIcons[item.icon] || BookOpen;

            return (
              <div
                key={item.title}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top bar: Icon + Topic */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900/80 text-cyan-300 border border-white/5">
                      {item.topic}
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

                {/* Bottom Status Button / Badge */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>In Progress</span>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-400 border border-white/5 font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
