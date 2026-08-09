import React from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear() || 2026;

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo & Subtitle */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-lg tracking-wider text-white">
                SANJAY M
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                IT Developer
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300">
              Designed & Engineered by SANJAY M
            </p>
            <p className="text-[11px] text-cyan-400/90 font-mono">
              Building ideas into digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Email Sanjay M"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright Notice */}
          <div className="text-xs text-slate-400 font-mono">
            © 2026 SANJAY M. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
