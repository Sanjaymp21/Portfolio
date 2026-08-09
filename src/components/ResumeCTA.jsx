import React from 'react';
import { FileDown, FileText, CheckCircle2, Sparkles, ExternalLink, ArrowRight, UserCheck, GraduationCap, Code2, Award, Info } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function ResumeCTA({ onNotify }) {
  const handleDownload = () => {
    if (onNotify) {
      onNotify("Downloading Sanjay-M-Resume.pdf");
    }
  };

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <FileText className="w-4 h-4" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Want to know more about my <span className="text-gradient">skills and experience?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get an in-depth view of my technical projects, computer science coursework, 
            certifications, and academic history.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Resume Interactive Preview Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Resume Document Mockup Preview */}
          <div className="lg:col-span-6 glass-panel rounded-2xl border border-cyan-500/30 p-6 sm:p-7 space-y-5 shadow-2xl relative group overflow-hidden">
            {/* Header snippet */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>SANJAY M</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                    Resume Preview
                  </span>
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  B.Tech IT • Bannari Amman Inst of Tech (2029)
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Resume Highlights snapshot */}
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic Distinctions</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  10th Standard: 96% | 12th Standard: 90% | B.Tech IT Student (2029)
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-blue-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Key Technical Skills</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  C, Python, JavaScript, Go, React, Next.js, Node.js, Express, UI/UX, AI/ML
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Leadership & Certifications</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  School SPL Leader | AWS Certified | Python | NPTEL Coursework
                </p>
              </div>
            </div>

            {/* Document Bottom Tag */}
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-cyan-400">
                <Sparkles className="w-3 h-3" />
                <span>PDF Format • Single Page</span>
              </span>
              <span>Updated 2026</span>
            </div>
          </div>

          {/* Right: Actions and recruitment callout */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Download Official Resume
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ready for internships, software engineering roles, and technical collaborations. Download a concise, formatted copy of my resume.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={personalInfo.resumePath}
                  download="Sanjay-M-Resume.pdf"
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 glass-card hover:border-cyan-500/40 hover:text-white transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Preview PDF</span>
                </a>
              </div>

              {/* Note about placing the PDF */}
              <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-[11px] font-mono text-slate-400">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Place your resume PDF inside <code className="text-cyan-300">public/assets/Sanjay-M-Resume.pdf</code> to update the document.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
