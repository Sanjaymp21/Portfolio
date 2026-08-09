import React from 'react';
import { FileDown, FileText, CheckCircle2, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function ResumeCTA({ onNotify }) {
  const handleDownload = () => {
    if (onNotify) {
      onNotify("Downloading Sanjay-M-Resume.pdf");
    }
  };

  return (
    <section className="py-14 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 relative overflow-hidden text-center shadow-2xl">
          
          {/* Background Decorative Gradients */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
              <FileText className="w-4 h-4" />
              <span>Curriculum Vitae</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Want to know more about my <span className="text-gradient">skills and experience?</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Get an in-depth view of my technical projects, computer science coursework, 
              certifications, and academic history.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={personalInfo.resumePath}
                download="Sanjay-M-Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-slate-200 glass-card hover:border-cyan-500/50 hover:text-white transition-all w-full sm:w-auto text-sm"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Preview Document</span>
              </a>
            </div>

            {/* Quick helper tip */}
            <p className="text-[11px] font-mono text-slate-400 pt-2">
              Ready for recruitment, internships, and technical collaboration inquiries.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
