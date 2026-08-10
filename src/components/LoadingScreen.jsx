import React, { useState, useEffect } from 'react';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const duration = 2600; // 2.6 seconds
    const intervalTime = 20; // 50 updates per second
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Smooth fade out and scale transition
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 200);

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 750);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03050c] overflow-hidden select-none transition-all duration-700 ease-out ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-hidden="true"
    >
      {/* 1. Background Cyber Mesh Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      {/* 2. Soft Ambient Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>

      {/* 3. Subtle Floating Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[25%] left-[20%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-float-slow"></div>
        <div className="absolute top-[35%] right-[25%] w-2 h-2 rounded-full bg-blue-400/40 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-float-reverse"></div>
        <div className="absolute bottom-[30%] left-[30%] w-1.5 h-1.5 rounded-full bg-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[25%] right-[20%] w-1 h-1 rounded-full bg-cyan-300/50 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-float-reverse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 4. Center Branding Typography */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-5 max-w-sm sm:max-w-md w-full">
        
        {/* Name Heading with Metallic Glow */}
        <div className="space-y-1.5 animate-scale-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(6,182,212,0.35)]">
            SANJAY <span className="text-gradient font-black">M</span>
          </h1>
          
          <p className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.32em] text-cyan-300/80 uppercase">
            Loading Experience
          </p>
        </div>

        {/* 5. Smooth Progress Bar */}
        <div className="w-full max-w-[260px] sm:max-w-[320px] space-y-2 pt-2">
          {/* Progress Track */}
          <div className="w-full h-1 sm:h-1.5 rounded-full bg-slate-900/90 border border-white/10 overflow-hidden relative shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Progress Status Text & Percentage */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Initializing workspace...</span>
            </span>
            <span className="text-cyan-400 font-semibold">{Math.round(progress)}%</span>
          </div>
        </div>

      </div>

      {/* 6. Subtle Cyber Bottom Baseline */}
      <div className="absolute bottom-6 font-mono text-[10px] text-slate-600 tracking-wider">
        DEVELOPER PORTFOLIO • 2026
      </div>
    </div>
  );
}
