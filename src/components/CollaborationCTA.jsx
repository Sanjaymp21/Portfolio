import React from 'react';
import { Sparkles, MessageSquare, FolderGit2, ArrowRight, Handshake } from 'lucide-react';

export function CollaborationCTA() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Large Premium CTA Card */}
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 shadow-2xl shadow-cyan-500/10">

          {/* Background glowing orbs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Handshake className="w-4 h-4" />
              <span>Let's Collaborate</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Let's Build Something <span className="text-gradient">Meaningful Together</span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Open for learning opportunities, collaborations, internships, and software development projects.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect With Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-200 glass-card hover:border-cyan-500/50 hover:text-white transition-all w-full sm:w-auto text-sm sm:text-base cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                <span>View My Projects</span>
              </button>
            </div>

            {/* Footer subtext */}
            <p className="text-[11px] font-mono text-slate-400 pt-2">
              Based in Tamil Nadu, India • Ready for remote & global opportunities
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
