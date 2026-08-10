import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  ShieldCheck, 
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Users
} from 'lucide-react';
import { achievementsData, educationData } from '../data/portfolioData';

const achIcons = {
  ShieldCheck,
  Trophy,
  Award
};

export function EducationAchievements() {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>Academic & Leadership Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Academic milestones, foundational excellence, and student leadership contributions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Education & Academic Highlights Featured Box */}
        <div className="mb-14">
          <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-cyan-500/30 relative overflow-hidden shadow-2xl">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* College Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {educationData.degree}
                    </h3>
                  </div>
                </div>

                <p className="text-lg sm:text-xl font-medium text-slate-200">
                  {educationData.institution}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-300 pt-1">
                  <span className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-white/10">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>Expected Graduation: <strong className="text-white">2029</strong></span>
                  </span>
                  <span className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-white/10">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>{educationData.location}</span>
                  </span>
                </div>
              </div>

              {/* Academic Scores Badges */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-500/30 text-center space-y-1.5 shadow-lg relative overflow-hidden group hover:border-cyan-400/50 transition-all">
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">10th Standard</div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">96%</div>
                  <span className="inline-block text-[11px] text-emerald-400 font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Academic Distinction
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 border border-blue-500/30 text-center space-y-1.5 shadow-lg relative overflow-hidden group hover:border-blue-400/50 transition-all">
                  <div className="text-xs font-mono text-blue-300 uppercase tracking-wider font-semibold">12th Standard</div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">90%</div>
                  <span className="inline-block text-[11px] text-emerald-400 font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Academic Distinction
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Leadership & Key Achievements Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
              <span>Leadership & Key Achievements</span>
            </h3>
            <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 hidden sm:inline-block">
              Proven Track Record
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((ach) => {
              const Icon = achIcons[ach.icon] || Trophy;
              const isSPL = ach.id === 'spl';

              return (
                <div
                  key={ach.id}
                  className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/40 relative flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110 ${
                        isSPL 
                          ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                          : 'bg-amber-500/15 text-amber-400 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      {ach.score ? (
                        <span className="text-base font-black font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {ach.score}
                        </span>
                      ) : (
                        <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Elected Role</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="text-[11px] uppercase font-mono text-cyan-400 font-bold tracking-wider">
                        {ach.category}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                        {ach.title}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {ach.organization}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {ach.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {ach.highlights.map((h, i) => (
                        <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-white/5">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
