import React from 'react';
import { ExternalLink, GitBranch, Star, Code2, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo, githubShowcaseData } from '../data/portfolioData';

export function GithubActivity() {
  return (
    <section id="github" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <GithubIcon className="w-4 h-4" />
            <span>Open Source & Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            GitHub <span className="text-gradient">Activity & Repositories</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Explore verified open-source repositories, developer experiments, and active projects on GitHub.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* GitHub Header Profile Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-white shadow-lg shadow-cyan-500/10">
              <GithubIcon className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl font-bold text-white">Sanjaymp21</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Profile
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Aspiring Software Developer • IT Undergrad @ Bannari Amman Inst of Tech
              </p>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all text-sm whitespace-nowrap"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {githubShowcaseData.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-cyan-400" />
                    <span className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  ></span>
                  <span>{repo.language}</span>
                </div>

                <span className="px-2 py-0.5 rounded bg-slate-900 text-[11px] text-cyan-400 border border-white/5">
                  Public Repo
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
