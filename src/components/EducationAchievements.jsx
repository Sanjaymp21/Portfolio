import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  ShieldCheck, 
  Cloud, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  Calendar,
  MapPin
} from 'lucide-react';
import { achievementsData, certificationsData, educationData } from '../data/portfolioData';

const certIcons = {
  Cloud,
  Terminal,
  Award
};

const achIcons = {
  ShieldCheck,
  Medal: Trophy,
  Trophy,
  CheckCircle2
};

export function EducationAchievements() {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Academic milestones, student leadership contributions, and verified technical certifications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Education & Academic Highlights Row */}
        <div className="mb-14">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* College Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {educationData.degree}
                    </h3>
                  </div>
                </div>

                <p className="text-lg font-medium text-slate-200">
                  {educationData.institution}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    Graduation: {educationData.graduation}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-white/5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    {educationData.location}
                  </span>
                </div>
              </div>

              {/* Academic Scores Badges */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center space-y-1">
                  <span className="text-xs font-mono text-slate-400">10th Standard</span>
                  <div className="text-3xl font-black text-cyan-300">96%</div>
                  <span className="text-[11px] text-emerald-400 font-medium">Academic Distinction</span>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-center space-y-1">
                  <span className="text-xs font-mono text-slate-400">12th Standard</span>
                  <div className="text-3xl font-black text-blue-300">90%</div>
                  <span className="text-[11px] text-emerald-400 font-medium">Academic Distinction</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Leadership & Achievements Cards */}
        <div className="mb-14 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span>Leadership & Key Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.slice(0, 3).map((ach) => (
              <div
                key={ach.id}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 relative flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform">
                      {ach.id === 'spl' ? (
                        <ShieldCheck className="w-5 h-5" />
                      ) : (
                        <Trophy className="w-5 h-5 text-amber-400" />
                      )}
                    </div>
                    {ach.score && (
                      <span className="text-sm font-black font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {ach.score}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-cyan-400 font-bold tracking-wider">
                      {ach.category}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {ach.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {ach.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900/80 text-slate-300 border border-white/5">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Certifications */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Technical Certifications</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certificationsData.map((cert) => {
              const Icon = certIcons[cert.icon] || Award;
              return (
                <div
                  key={cert.title}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 relative flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {cert.tag}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-cyan-400 font-mono">
                        {cert.issuer}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
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
