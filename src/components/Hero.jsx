import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Sparkles, 
  Code2, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Hero({ onNotify }) {
  const [activeCodeTab, setActiveCodeTab] = useState('developer.js');

  const codeSnippets = {
    'developer.js': `const developer = {
  name: "SANJAY M",
  role: "B.Tech IT Student",
  institution: "Bannari Amman Inst of Tech",
  graduation: 2029,
  passion: ["Software Engineering", "AI", "UI/UX"],
  currentFocus: "Building high-impact solutions",
  status: "Open to learning & collaboration",
  getMotivation: () => {
    return "Turning ideas into reliable digital realities.";
  }
};`,
    'skills.json': `{
  "programming": ["C", "Python", "JavaScript"],
  "web": ["HTML5", "CSS3", "JavaScript"],
  "design": ["UI/UX Prototyping", "Canva"],
  "certifications": ["AWS", "Python", "NPTEL"],
  "academicHighlights": {
    "10th": "96%",
    "12th": "90%"
  }
}`,
    'projects.ts': `interface Project {
  title: string;
  category: string;
  tech: string[];
}

const activeProjects: Project[] = [
  { title: "SST Groomers", category: "Pet Care" },
  { title: "PCDP V4", category: "Digital Attendance" },
  { title: "Recyclo-AI", category: "AI & E-Waste" },
  { title: "EndoJourney AI", category: "Health Tech" }
];`
  };

  const handleResumeClick = () => {
    if (onNotify) {
      onNotify("Resume download initiated!");
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Glowing Mesh Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-cyan-600/5 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status & Role Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-medium text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>{personalInfo.statusBadge}</span>
              </div>

              {/* Student Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.role}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white">
                Hi, I'm <span className="text-gradient font-black">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-cyan-200/90 dark:text-cyan-300 leading-snug">
                {personalInfo.heroHighlight}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            {/* Quick College & Location Tags */}
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{personalInfo.college}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Graduation: {personalInfo.expectedGraduation}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume */}
              <a
                href={personalInfo.resumePath}
                download="Sanjay-M-Resume.pdf"
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-200 glass-card border border-white/10 hover:border-cyan-500/50 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Abstract Developer Visual / Terminal Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-2xl glass-panel shadow-2xl border border-cyan-500/20 overflow-hidden relative group">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>sanjay-workspace</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    node v20.x
                  </span>
                </div>
              </div>

              {/* File Tabs */}
              <div className="flex items-center bg-slate-950/80 px-2 pt-2 border-b border-white/5 gap-1 overflow-x-auto text-xs font-mono">
                {Object.keys(codeSnippets).map((filename) => (
                  <button
                    key={filename}
                    onClick={() => setActiveCodeTab(filename)}
                    className={`px-3 py-1.5 rounded-t-lg transition-all flex items-center gap-1.5 ${
                      activeCodeTab === filename
                        ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>{filename}</span>
                  </button>
                ))}
              </div>

              {/* Code Content Area */}
              <div className="p-4 sm:p-5 bg-slate-950/90 font-mono text-xs leading-relaxed overflow-x-auto min-h-[290px] text-slate-300">
                <pre className="text-slate-300 font-mono">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Compiled Successfully</span>
                  </span>
                  <span className="text-slate-400">UTF-8 | LF</span>
                </div>
              </div>

              {/* Glowing Decorative Border Corner */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
