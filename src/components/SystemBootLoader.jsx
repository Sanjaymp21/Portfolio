import React, { useState, useEffect } from 'react';
import { Terminal, Check, Cpu, Sparkles, ArrowRight } from 'lucide-react';

export function SystemBootLoader({ onComplete }) {
  const [step, setStep] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const bootSteps = [
    { text: "Initializing Developer Environment...", icon: Cpu },
    { text: "Loading Core Skills & Tech Stack", icon: Check },
    { text: "Mounting Featured Project Modules", icon: Check },
    { text: "Synthesizing AI & Data Architectures", icon: Sparkles },
    { text: "System Ready", icon: Check }
  ];

  useEffect(() => {
    // Fast boot sequence (1.5 seconds total)
    const timer1 = setTimeout(() => setStep(1), 300);
    const timer2 = setTimeout(() => setStep(2), 650);
    const timer3 = setTimeout(() => setStep(3), 1050);
    const timer4 = setTimeout(() => setStep(4), 1400);
    const timer5 = setTimeout(() => {
      setIsFading(true);
      setTimeout(onComplete, 450);
    }, 1750);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#03050c] transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Grid & Center Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Boot Card */}
      <div className="relative z-10 w-full max-w-md mx-4 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl space-y-6">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs font-mono text-slate-400 ml-2">sanjay.dev/kernel</span>
          </div>
          <button
            onClick={handleSkip}
            className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            <span>Skip</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Boot Logs */}
        <div className="space-y-3 font-mono text-xs">
          {bootSteps.slice(0, step + 1).map((s, idx) => {
            const Icon = s.icon;
            const isLatest = idx === step;
            const isDone = idx < step || step === 4;

            return (
              <div
                key={idx}
                className={`flex items-center justify-between transition-all duration-300 ${
                  isLatest ? 'text-cyan-300 font-semibold' : 'text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-cyan-500/80">&gt;</span>
                  <span>{s.text}</span>
                </div>
                <div>
                  {isDone ? (
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                      <Check className="w-3.5 h-3.5" />
                      <span>OK</span>
                    </span>
                  ) : (
                    <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, (step + 1) * 20)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>AI Environment Boot</span>
            <span>{Math.min(100, (step + 1) * 20)}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
