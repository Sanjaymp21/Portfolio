import React, { useState } from 'react';
import { Sparkles, Brain, Cpu, Database, Layers, X } from 'lucide-react';

export function AIBadgeOrb() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed top-24 right-4 sm:right-8 z-30 pointer-events-auto">
      <div 
        onClick={() => setExpanded(!expanded)}
        className="group relative cursor-pointer"
      >
        {/* Glow Ring Behind */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-md group-hover:blur-lg transition-all duration-300"></div>

        {!expanded ? (
          /* Minimal Compact AI Orb Badge */
          <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-500/40 text-cyan-300 shadow-xl group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300">
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Brain className="w-3 h-3 animate-pulse" />
            </div>
            <span className="text-[11px] font-mono font-bold tracking-wider text-white">AI Explorer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
        ) : (
          /* Expanded Identity Card */
          <div className="relative w-64 p-4 rounded-2xl glass-panel border border-cyan-500/40 shadow-2xl space-y-3 animate-scale-in text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold font-mono">
                <Brain className="w-4 h-4" />
                <span>AI Explorer</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Active Focus
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="text-[11px] font-mono text-slate-400">Current Domains:</div>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-slate-200">
                <span className="px-2 py-1 rounded bg-slate-900/80 border border-cyan-500/20 text-cyan-300 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-cyan-400" /> AI
                </span>
                <span className="px-2 py-1 rounded bg-slate-900/80 border border-blue-500/20 text-blue-300 flex items-center gap-1">
                  <Brain className="w-3 h-3 text-blue-400" /> ML
                </span>
                <span className="px-2 py-1 rounded bg-slate-900/80 border border-purple-500/20 text-purple-300 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-purple-400" /> Full Stack
                </span>
                <span className="px-2 py-1 rounded bg-slate-900/80 border border-emerald-500/20 text-emerald-300 flex items-center gap-1">
                  <Database className="w-3 h-3 text-emerald-400" /> Big Data
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>Sanjay M • 2026</span>
              <span className="text-cyan-400">Click to collapse</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
