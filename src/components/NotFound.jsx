import React from 'react';
import { Home, ArrowLeft, Sparkles, Rocket } from 'lucide-react';

export function NotFound({ onBackHome }) {
  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden selection:bg-cyan-500 selection:text-black">
      {/* Background Cyber Mesh Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0"></div>
      
      {/* Glowing background orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-2xl">
        
        {/* Large 404 number */}
        <div className="relative">
          <span className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
            404
          </span>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Oops! This page doesn't exist.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Keep exploring technology and building new ideas 🚀
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={onBackHome || (() => window.location.href = '/')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all text-sm cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back Home</span>
          </button>
        </div>

      </div>
    </div>
  );
}
