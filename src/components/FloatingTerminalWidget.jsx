import React, { useState } from 'react';
import { Terminal, Minus, ChevronRight, X, Sparkles, Code2, Check } from 'lucide-react';

export function FloatingTerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCommand, setActiveCommand] = useState('all');

  const commands = [
    { cmd: 'whoami', output: 'SANJAY M (B.Tech IT Undergrad @ BIT)' },
    { cmd: 'current_focus', output: 'AI & ML • Full Stack • Big Data Analytics' },
    { cmd: 'status', output: '⚡ Learning, Innovating & Building Scalable Digital Experiences' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-panel border border-cyan-500/40 text-cyan-300 hover:text-white shadow-xl shadow-cyan-500/15 hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300 font-mono text-xs cursor-pointer"
          aria-label="Open developer terminal widget"
        >
          <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
          <span className="font-semibold">$ sanjay.terminal</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      ) : (
        <div className="w-80 sm:w-96 rounded-2xl glass-panel border border-cyan-500/40 shadow-2xl overflow-hidden animate-scale-in text-xs font-mono">
          
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              <span className="text-[11px] text-slate-400 ml-1">developer_core.sh</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                title="Close terminal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 space-y-3 bg-slate-950/90 text-slate-300">
            
            {/* Quick Command Filter Tabs */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-white/5 text-[10px]">
              <button
                onClick={() => setActiveCommand('all')}
                className={`px-2 py-1 rounded transition-colors ${
                  activeCommand === 'all' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                [all]
              </button>
              {commands.map((c) => (
                <button
                  key={c.cmd}
                  onClick={() => setActiveCommand(c.cmd)}
                  className={`px-2 py-1 rounded transition-colors ${
                    activeCommand === c.cmd ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {c.cmd}
                </button>
              ))}
            </div>

            {/* Command Outputs */}
            <div className="space-y-2.5">
              {commands
                .filter((c) => activeCommand === 'all' || activeCommand === c.cmd)
                .map((c) => (
                  <div key={c.cmd} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-[11px]">
                      <ChevronRight className="w-3.5 h-3.5" />
                      <span>{c.cmd}</span>
                    </div>
                    <div className="pl-4 text-slate-300 text-[11px] leading-relaxed">
                      {c.output}
                    </div>
                  </div>
                ))}
            </div>

            {/* Terminal Live Cursor Line */}
            <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-500">
              <span className="text-emerald-400">&gt; ready</span>
              <span className="w-1.5 h-3.5 bg-cyan-400 animate-pulse"></span>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}
