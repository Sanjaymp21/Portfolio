import React from 'react';
import { Milestone, Calendar, CheckCircle2, Sparkles, Rocket, Compass } from 'lucide-react';
import { journeyData } from '../data/portfolioData';

export function Journey() {
  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Milestone className="w-3.5 h-3.5" />
            <span>Growth & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            A timeline of my learning, projects, and technology growth.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Glowing Line (hidden on small mobile, visible sm+) */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/40 to-cyan-500/10 sm:-translate-x-1/2"></div>

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-16">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12 group`}
                >
                  {/* Timeline Center Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/30 group-hover:scale-125 group-hover:border-cyan-300 transition-all duration-300 z-20">
                    {index === 0 ? (
                      <Compass className="w-4 h-4" />
                    ) : index === 1 ? (
                      <Sparkles className="w-4 h-4 text-cyan-300" />
                    ) : (
                      <Rocket className="w-4 h-4 text-blue-400" />
                    )}
                  </div>

                  {/* Card Container (Half-width on desktop) */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className={`glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/40 group-hover:shadow-xl group-hover:shadow-cyan-500/10 transition-all duration-300 ${
                      isEven ? 'sm:mr-6' : 'sm:ml-6'
                    }`}>
                      
                      {/* Year & Status Badge */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-xl sm:text-2xl font-black font-mono text-cyan-400 tracking-wider">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        {item.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer on Opposite Side for balanced layout */}
                  <div className="hidden sm:block sm:w-1/2"></div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
