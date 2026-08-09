import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  Calendar, 
  MapPin,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Hero({ onNotify }) {
  const handleResumeClick = () => {
    if (onNotify) {
      onNotify("Resume download initiated!");
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center overflow-hidden"
    >
      {/* Background Soft Glowing Ambient Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[38rem] h-[38rem] bg-blue-600/12 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-44 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Subtle Abstract Floating Tech Accent Dots/Nodes in Background */}
      <div className="absolute right-[12%] top-[30%] w-2.5 h-2.5 rounded-full bg-cyan-400/40 shadow-lg shadow-cyan-400/50 animate-float pointer-events-none"></div>
      <div className="absolute right-[22%] top-[55%] w-2 h-2 rounded-full bg-blue-400/40 shadow-lg shadow-blue-400/50 animate-float pointer-events-none" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute right-[8%] top-[65%] w-3 h-3 rounded-full bg-cyan-300/30 shadow-lg shadow-cyan-300/50 animate-float pointer-events-none" style={{ animationDelay: '3.2s' }}></div>
      <div className="absolute right-[18%] top-[20%] w-1.5 h-1.5 rounded-full bg-indigo-400/40 shadow-lg shadow-indigo-400/50 animate-float pointer-events-none" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-7 text-left">
          
          {/* Badges: Status + Subtitle */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Open to learning and collaboration</span>
            </div>

            {/* Small Subtitle */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>B.Tech Information Technology Student</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Hi, I'm <span className="text-gradient font-black">SANJAY M</span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-200/90 leading-tight">
              An aspiring software developer building meaningful digital solutions.
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            I am passionate about software development, artificial intelligence, web technologies, and user experience design. I enjoy turning ideas into practical and user-friendly digital products.
          </p>

          {/* Information Row */}
          <div className="pt-2 pb-1 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-white/10">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Bannari Amman Institute of Technology</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-white/10">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Graduation: 2029</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-white/10">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>

          {/* Action Buttons: Primary, Secondary, Third */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            {/* Primary: View My Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary: Download Resume */}
            <a
              href={personalInfo.resumePath}
              download="Sanjay-M-Resume.pdf"
              onClick={handleResumeClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-slate-200 glass-card border border-white/10 hover:border-cyan-500/50 hover:text-white hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-200 text-sm sm:text-base"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            {/* Third: Contact Me */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-slate-300 hover:text-cyan-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
