import React from 'react';
import { Sparkles, Cpu, Layers, Code2, Network } from 'lucide-react';

export function DeveloperCore3D() {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto pointer-events-none flex items-center justify-center select-none" aria-hidden="true">
      {/* 1. Ambient Background Core Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>

      {/* 2. Outer Holographic Equatorial Orbit Rings */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/20 core-orbit-1"></div>
      <div className="absolute inset-4 rounded-full border border-dashed border-blue-500/20 core-orbit-2"></div>
      <div className="absolute inset-8 rounded-full border border-purple-500/20 core-orbit-3"></div>

      {/* 3. Glass 3D Sphere Housing */}
      <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full glass-panel border border-cyan-400/35 shadow-[0_0_50px_rgba(6,182,212,0.25)] flex items-center justify-center overflow-hidden backdrop-blur-xl core-sphere-float">
        
        {/* Specular glass reflections */}
        <div className="absolute top-2 left-6 w-32 h-16 bg-gradient-to-b from-white/20 to-transparent rounded-full -rotate-45 blur-sm pointer-events-none"></div>
        <div className="absolute bottom-4 right-8 w-24 h-10 bg-gradient-to-t from-cyan-400/15 to-transparent rounded-full rotate-45 blur-sm pointer-events-none"></div>

        {/* 4. Inside the Sphere: Orbiting AI Nodes, Code Symbols & Data */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Center Neural AI Core */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] animate-pulse">
            <Cpu className="w-8 h-8 animate-spin-slow" />
          </div>

          {/* Floating Floating Code Symbols & Nodes */}
          {/* Node 1: Code Tag */}
          <div className="absolute top-[18%] left-[22%] px-2 py-0.5 rounded bg-slate-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 shadow-md animate-float-slow">
            &lt;AI/&gt;
          </div>

          {/* Node 2: Lambda / ML */}
          <div className="absolute top-[24%] right-[18%] px-2 py-0.5 rounded bg-slate-950/80 border border-blue-500/40 text-[10px] font-mono text-blue-300 shadow-md animate-float-reverse">
            λ_weights
          </div>

          {/* Node 3: Binary packet */}
          <div className="absolute bottom-[22%] left-[18%] px-2 py-0.5 rounded bg-slate-950/80 border border-purple-500/40 text-[10px] font-mono text-purple-300 shadow-md animate-float-reverse">
            0101_v2
          </div>

          {/* Node 4: Neural Sync */}
          <div className="absolute bottom-[18%] right-[20%] px-2 py-0.5 rounded bg-slate-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 shadow-md animate-float-slow">
            sync_ok ✓
          </div>

          {/* Synaptic Connection Rays */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-45"></div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent -rotate-45"></div>
          </div>

        </div>

      </div>
    </div>
  );
}
