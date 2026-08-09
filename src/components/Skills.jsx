import React from 'react';
import { 
  Code2, 
  Layout, 
  Palette, 
  Terminal, 
  Braces, 
  FileCode, 
  Paintbrush, 
  Sparkles, 
  PenTool, 
  Layers,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const skillIcons = {
  FileCode,
  Terminal,
  Braces,
  Layout,
  Paintbrush,
  Sparkles,
  PenTool,
  Layers
};

const categoryIcons = {
  'Programming': Code2,
  'Web Development': Layout,
  'Design': Palette
};

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Curated foundation in programming languages, web standards, and user experience design.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* 3 Main Skill Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category) => {
            const CategoryIcon = categoryIcons[category.category] || Code2;
            
            return (
              <div
                key={category.category}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/40 relative flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List in this Category */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => {
                      const Icon = skillIcons[skill.icon] || Sparkles;
                      
                      return (
                        <div
                          key={skill.name}
                          className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/90 transition-all duration-200 flex items-center justify-between group/item"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/item:text-cyan-300 group-hover/item:bg-cyan-500/20 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-200 group-hover/item:text-white">
                                {skill.name}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono">
                                {skill.tag}
                              </div>
                            </div>
                          </div>

                          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Card Footer subtle indicator */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Verified Competency</span>
                  <span className="text-cyan-400">{category.skills.length} core skills</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
