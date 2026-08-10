import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export function Contact({ onNotify }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onNotify) {
      onNotify("Email address copied to clipboard!");
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-gradient">Something Together</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Feel free to connect with me for learning, collaboration, internships, and software development opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">

          {/* Email Card */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/50 relative flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Email Address
                </span>
                <h3 className="text-base font-bold text-white mt-1 break-all">
                  {personalInfo.email}
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Direct inquiries for internships, discussions, or project collaboration.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl glass-card text-slate-300 hover:text-cyan-400 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/50 relative flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  GitHub Profile
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  github.com/Sanjaymp21
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Explore source code, active repositories, experiments, and technical contributions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/50 relative flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                  LinkedIn Network
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  Sanjay M
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Connect for professional networking, tech updates, and career opportunities.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto" />
              </a>
            </div>
          </div>

        </div>

        {/* Availability & Location Callout */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-wrap items-center justify-around gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Status: Available for Internships</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
