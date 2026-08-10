import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Database, Cloud, Code2, Sparkles, Terminal, Layers } from 'lucide-react';

export function AnimatedBackground({ activeSection = 'home' }) {
  const canvasRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  // Check device capabilities
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4)) {
        setIsLowPower(true);
      }
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Track scroll for cinematic section transitions
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse for 3D parallax and cursor lighting
  useEffect(() => {
    if (isMobile) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationId;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMouseOffset({ x: currentX, y: currentY });
      animationId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  // Digital Data Flow & Neural Space Simulation Canvas
  useEffect(() => {
    if (isMobile) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates in canvas space
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
      active: false
    };

    const handleCanvasMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleCanvasMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNetwork();
    };

    window.addEventListener('mousemove', handleCanvasMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleCanvasMouseLeave);
    window.addEventListener('resize', handleResize);

    // 1. Network Nodes & Data Streams
    const nodeCount = isLowPower ? 20 : 42;
    let nodes = [];
    let dataPackets = [];

    // 2. Orbiting Tech Nodes (AI, DB, Cloud, Code)
    const orbits = [
      { angle: 0, speed: 0.003, radiusX: 320, radiusY: 120, label: 'AI', color: '6, 182, 212' },
      { angle: Math.PI * 0.5, speed: 0.0025, radiusX: 380, radiusY: 140, label: 'DB', color: '59, 130, 246' },
      { angle: Math.PI, speed: 0.0035, radiusX: 280, radiusY: 100, label: 'Cloud', color: '168, 85, 247' },
      { angle: Math.PI * 1.5, speed: 0.002, radiusX: 420, radiusY: 160, label: 'Dev', color: '16, 185, 129' }
    ];

    const initNetwork = () => {
      nodes = [];
      dataPackets = [];

      for (let i = 0; i < nodeCount; i++) {
        const depth = Math.random() * 0.7 + 0.5; // 0.5 (deep) to 1.2 (near)
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3 * depth,
          vy: (Math.random() - 0.5) * 0.3 * depth,
          depth,
          radius: (Math.random() * 1.5 + 1.2) * depth,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          color: Math.random() > 0.4 ? '6, 182, 212' : (Math.random() > 0.5 ? '59, 130, 246' : '168, 85, 247')
        });
      }

      // Initialize data flow packets that travel between connected nodes
      for (let k = 0; k < (isLowPower ? 8 : 16); k++) {
        dataPackets.push({
          fromNode: Math.floor(Math.random() * nodeCount),
          toNode: Math.floor(Math.random() * nodeCount),
          progress: Math.random(),
          speed: Math.random() * 0.008 + 0.004,
          color: Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.9)' : 'rgba(59, 130, 246, 0.9)'
        });
      }
    };

    initNetwork();

    const maxConnectionDistance = 145;
    const maxConnectionDistSq = maxConnectionDistance * maxConnectionDistance;
    let lastTime = performance.now();

    const render = (currentTime) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Camera 3D Parallax offset based on mouse
      const cameraOffsetX = (mouse.x - width / 2) * 0.025;
      const cameraOffsetY = (mouse.y - height / 2) * 0.025;

      // Update and draw network nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx * 60 * delta;
        node.y += node.vy * 60 * delta;
        node.pulse += node.pulseSpeed;

        // Boundary wrap
        if (node.x < -30) node.x = width + 30;
        if (node.x > width + 30) node.x = -30;
        if (node.y < -30) node.y = height + 30;
        if (node.y > height + 30) node.y = -30;

        // Natural cursor repulsion physics
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouse.radius * mouse.radius && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouse.radius) * 1.8 * node.depth;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }
      }

      // Draw Synaptic Connection Lines
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        const renderAX = nodeA.x - cameraOffsetX * nodeA.depth;
        const renderAY = nodeA.y - cameraOffsetY * nodeA.depth;

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxConnectionDistance) * 0.2 * ((nodeA.depth + nodeB.depth) / 2);

            const renderBX = nodeB.x - cameraOffsetX * nodeB.depth;
            const renderBY = nodeB.y - cameraOffsetY * nodeB.depth;

            ctx.beginPath();
            ctx.moveTo(renderAX, renderAY);
            ctx.lineTo(renderBX, renderBY);
            ctx.strokeStyle = `rgba(${nodeA.color}, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Update and Draw Data Flow Packets (Light pulses traveling along pathways)
      for (let k = 0; k < dataPackets.length; k++) {
        const packet = dataPackets[k];
        const nodeA = nodes[packet.fromNode];
        const nodeB = nodes[packet.toNode];

        if (!nodeA || !nodeB) continue;

        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const distSq = dx * dx + dy * dy;

        // If nodes are close enough to be connected
        if (distSq < maxConnectionDistSq) {
          packet.progress += packet.speed * 60 * delta;
          if (packet.progress >= 1) {
            packet.progress = 0;
            packet.fromNode = packet.toNode;
            packet.toNode = Math.floor(Math.random() * nodeCount);
          }

          const curX = nodeA.x + (nodeB.x - nodeA.x) * packet.progress - cameraOffsetX * nodeA.depth;
          const curY = nodeA.y + (nodeB.y - nodeA.y) * packet.progress - cameraOffsetY * nodeA.depth;

          // Packet glow dot
          ctx.beginPath();
          ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = packet.color;
          ctx.shadowColor = packet.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          // If nodes separated, pick new connected targets
          packet.fromNode = Math.floor(Math.random() * nodeCount);
          packet.toNode = Math.floor(Math.random() * nodeCount);
          packet.progress = 0;
        }
      }

      // Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const renderX = node.x - cameraOffsetX * node.depth;
        const renderY = node.y - cameraOffsetY * node.depth;

        const pulseAlpha = 0.35 + Math.sin(node.pulse) * 0.2;
        const nodeAlpha = Math.max(0.1, Math.min(0.75, pulseAlpha * node.depth));

        // Outer glow
        ctx.beginPath();
        ctx.arc(renderX, renderY, node.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, ${nodeAlpha * 0.2})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(renderX, renderY, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, ${nodeAlpha})`;
        ctx.shadowColor = `rgba(${node.color}, 0.7)`;
        ctx.shadowBlur = 7;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw 3D Orbiting Technology Nodes in Upper Space
      const orbitCenterX = width * 0.5 - cameraOffsetX * 0.5;
      const orbitCenterY = height * 0.28 - cameraOffsetY * 0.5;

      orbits.forEach((orbit) => {
        orbit.angle += orbit.speed * 60 * delta;
        const orbX = orbitCenterX + Math.cos(orbit.angle) * orbit.radiusX;
        const orbY = orbitCenterY + Math.sin(orbit.angle) * orbit.radiusY;
        const orbDepth = (Math.sin(orbit.angle) + 1.2) * 0.5; // Depth factor 0.1 to 1.1

        // Orbit Trail Node
        ctx.beginPath();
        ctx.arc(orbX, orbY, 3.5 * orbDepth, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${orbit.color}, ${0.5 * orbDepth})`;
        ctx.shadowColor = `rgba(${orbit.color}, 0.8)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleCanvasMouseMove);
      window.removeEventListener('mouseleave', handleCanvasMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isLowPower]);

  // Section mood color profiles
  const getSectionAtmosphere = () => {
    switch (activeSection) {
      case 'about':
      case 'what-i-do':
        return 'from-[#040817] via-[#030612] to-[#020308]'; // Structured Deep Tech
      case 'skills':
      case 'focused-on':
        return 'from-[#030a1c] via-[#020715] to-[#020309]'; // Cyan Data Matrix
      case 'journey':
        return 'from-[#030718] via-[#040816] to-[#020308]'; // Ascending Timeline
      case 'projects':
        return 'from-[#04091e] via-[#030614] to-[#020308]'; // Engineering Studio
      case 'certifications':
      case 'achievements':
        return 'from-[#040819] via-[#030513] to-[#020308]'; // Credential Space
      case 'contact':
        return 'from-[#050b22] via-[#030718] to-[#020308]'; // Neural Convergence
      default:
        return 'from-[#050816] via-[#040612] to-[#020308]'; // Digital Universe
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#03050c]" aria-hidden="true">
      
      {/* 1. Deep Space Cosmic Canvas with Dynamic Section Atmosphere */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${getSectionAtmosphere()} transition-colors duration-1000`}
        style={{
          filter: `hue-rotate(${scrollProgress * 20}deg)`
        }}
      ></div>

      {/* 2. Holographic Energy Rings (Upper Third Celestial Visual) */}
      {!isMobile && (
        <div 
          className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none opacity-40 holo-rings-container"
          style={{
            transform: `translate(-50%, calc(-20% + ${mouseOffset.y * 20}px)) rotateX(75deg)`
          }}
        >
          {/* Inner ring */}
          <div className="absolute inset-16 rounded-full border border-cyan-400/25 animate-spin-slow shadow-[0_0_30px_rgba(6,182,212,0.15)]"></div>
          {/* Middle dashed ring */}
          <div className="absolute inset-8 rounded-full border-2 border-dashed border-blue-500/20 animate-spin-reverse"></div>
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-pulse-glow shadow-[0_0_40px_rgba(168,85,247,0.1)]"></div>
          {/* Center Energy Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
      )}

      {/* 3. Fluid Volumetric Nebula & Aurora Waves with 3D Parallax */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        
        {/* Top Cyan Light Nebula */}
        <div 
          className="absolute -top-[10%] left-[10%] w-[680px] h-[680px] rounded-full bg-gradient-to-br from-cyan-500/20 via-cyan-600/10 to-transparent blur-[140px] orb-float-1 transform-gpu"
          style={{
            transform: `translate3d(${mouseOffset.x * -25}px, ${mouseOffset.y * -25 + scrollProgress * -80}px, 0)`
          }}
        ></div>
        
        {/* Mid-Right Electric Blue Nebula */}
        <div 
          className="absolute top-[32%] -right-[8%] w-[720px] h-[720px] rounded-full bg-gradient-to-bl from-blue-600/18 via-indigo-600/12 to-transparent blur-[150px] orb-float-2 transform-gpu"
          style={{
            transform: `translate3d(${mouseOffset.x * -40}px, ${mouseOffset.y * -40 + scrollProgress * -120}px, 0)`
          }}
        ></div>
        
        {/* Mid-Left Purple AI Nebula */}
        <div 
          className="absolute top-[62%] -left-[10%] w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-purple-600/16 via-fuchsia-600/10 to-transparent blur-[140px] orb-float-3 transform-gpu"
          style={{
            transform: `translate3d(${mouseOffset.x * -20}px, ${mouseOffset.y * -20 + scrollProgress * -90}px, 0)`
          }}
        ></div>
        
        {/* Bottom Cyan Deep Space Glow */}
        <div 
          className="absolute -bottom-[10%] right-[15%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-cyan-500/16 via-blue-500/10 to-transparent blur-[150px] orb-float-4 transform-gpu"
          style={{
            transform: `translate3d(${mouseOffset.x * -30}px, ${mouseOffset.y * -30}px, 0)`
          }}
        ></div>
      </div>

      {/* 4. 3D Perspective Cyber Plane at Floor Base */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[60vh] cyber-perspective-grid opacity-35 pointer-events-none"
        style={{
          transform: `perspective(600px) rotateX(68deg) translateY(${mouseOffset.y * 15}px)`
        }}
      ></div>

      {/* 5. Neural Network & Digital Data Flow Canvas Simulation */}
      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-85 z-0"
        />
      )}

      {/* 6. Floating Abstract Developer Workspace Elements (Layered Depth) */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          
          {/* Card 1: React Component Blueprint (Top Left) */}
          <div 
            className="absolute top-[16%] left-[6%] float-code-1 opacity-20 hover:opacity-45 transition-all duration-300"
            style={{ transform: `translate3d(${mouseOffset.x * -15}px, ${mouseOffset.y * -15}px, 0)` }}
          >
            <div className="p-3 rounded-xl bg-slate-950/70 border border-cyan-500/25 shadow-[0_0_20px_rgba(6,182,212,0.12)] backdrop-blur-md font-mono text-[11px] text-cyan-300 space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] pb-1 border-b border-white/5 font-semibold">
                <Code2 className="w-3 h-3" />
                <span>Component.tsx</span>
              </div>
              <div className="text-slate-400">&lt;<span className="text-cyan-300">SoftwareEngineer</span></div>
              <div className="pl-3 text-blue-300">stack=<span className="text-emerald-300">&#123;["AI", "React", "Python"]&#125;</span></div>
              <div className="text-slate-400">/&gt;</div>
            </div>
          </div>

          {/* Card 2: Terminal Stream (Mid Right) */}
          <div 
            className="absolute top-[36%] right-[8%] float-code-2 opacity-20 hover:opacity-45 transition-all duration-300"
            style={{ transform: `translate3d(${mouseOffset.x * -35}px, ${mouseOffset.y * -35}px, 0)` }}
          >
            <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-500/25 shadow-[0_0_20px_rgba(59,130,246,0.12)] backdrop-blur-md font-mono text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 text-blue-400 text-[10px] pb-1 border-b border-white/5 font-semibold">
                <Terminal className="w-3 h-3" />
                <span>neural_kernel.sh</span>
              </div>
              <div className="text-slate-300">$ model.compile(<span className="text-cyan-300">optimizer='adam'</span>)</div>
              <div className="text-emerald-400 text-[10px]">✓ Tensor cores active: 100%</div>
            </div>
          </div>

          {/* Card 3: Database & Vector Schema (Lower Left) */}
          <div 
            className="absolute top-[60%] left-[8%] float-code-3 opacity-20 hover:opacity-45 transition-all duration-300"
            style={{ transform: `translate3d(${mouseOffset.x * -20}px, ${mouseOffset.y * -20}px, 0)` }}
          >
            <div className="p-3 rounded-xl bg-slate-950/70 border border-purple-500/25 shadow-[0_0_20px_rgba(168,85,247,0.12)] backdrop-blur-md font-mono text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 text-purple-400 text-[10px] pb-1 border-b border-white/5 font-semibold">
                <Database className="w-3 h-3" />
                <span>vector_db.json</span>
              </div>
              <div className="text-slate-400">&#123; <span className="text-purple-300">"dimensions"</span>: 1536, <span className="text-purple-300">"status"</span>: <span className="text-emerald-400">"indexed"</span> &#125;</div>
            </div>
          </div>

          {/* Card 4: Cloud Architecture Node (Lower Right) */}
          <div 
            className="absolute top-[82%] right-[12%] float-code-4 opacity-20 hover:opacity-45 transition-all duration-300"
            style={{ transform: `translate3d(${mouseOffset.x * -30}px, ${mouseOffset.y * -30}px, 0)` }}
          >
            <div className="p-3 rounded-xl bg-slate-950/70 border border-cyan-500/25 shadow-[0_0_20px_rgba(6,182,212,0.12)] backdrop-blur-md font-mono text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] pb-1 border-b border-white/5 font-semibold">
                <Cloud className="w-3 h-3" />
                <span>distributed_system</span>
              </div>
              <div className="text-slate-300">cluster.scale(<span className="text-cyan-300">replicas=3</span>) <span className="text-emerald-400">⚡ Live</span></div>
            </div>
          </div>

        </div>
      )}

      {/* 7. Section Vignette & Cyber Contrast Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#03050d_95%)] opacity-85"></div>

      {/* 8. Subtle Non-Intrusive Cyber Scanner Beam */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent cyber-scan-line"></div>
    </div>
  );
}
