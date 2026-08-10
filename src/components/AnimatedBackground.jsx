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

  // Digital Data Flow & Technology Constellation Canvas Simulation
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
      radius: 190,
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

    // 1. Technology Constellation Nodes (React, Python, AI, Machine Learning, Big Data, Node.js, Cloud)
    const techConstellationLabels = ['React', 'Python', 'AI', 'Machine Learning', 'Big Data', 'Node.js', 'Cloud', 'System Design'];
    const nodeCount = isLowPower ? 22 : 44;
    let nodes = [];
    let dataPackets = [];

    const initNetwork = () => {
      nodes = [];
      dataPackets = [];

      for (let i = 0; i < nodeCount; i++) {
        const depth = Math.random() * 0.7 + 0.5; // 0.5 (deep) to 1.2 (near)
        const isTechNode = i < techConstellationLabels.length;

        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25 * depth,
          vy: (Math.random() - 0.5) * 0.25 * depth,
          depth,
          radius: isTechNode ? (Math.random() * 1.5 + 2.5) * depth : (Math.random() * 1.5 + 1.1) * depth,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          label: isTechNode ? techConstellationLabels[i] : null,
          color: isTechNode ? '6, 182, 212' : (Math.random() > 0.4 ? '6, 182, 212' : (Math.random() > 0.5 ? '59, 130, 246' : '168, 85, 247'))
        });
      }

      // Data packets that travel between connected nodes
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

    const maxConnectionDistance = 150;
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

      // Update node positions and natural cursor repulsion
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx * 60 * delta;
        node.y += node.vy * 60 * delta;
        node.pulse += node.pulseSpeed;

        // Boundary wrap
        if (node.x < -40) node.x = width + 40;
        if (node.x > width + 40) node.x = -40;
        if (node.y < -40) node.y = height + 40;
        if (node.y > height + 40) node.y = -40;

        // Cursor repulsion physics
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

      // Draw Synaptic Constellation Lines
      ctx.lineWidth = 0.75;
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
            const alpha = (1 - dist / maxConnectionDistance) * 0.22 * ((nodeA.depth + nodeB.depth) / 2);

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

      // Update and Draw Data Flow Packets
      for (let k = 0; k < dataPackets.length; k++) {
        const packet = dataPackets[k];
        const nodeA = nodes[packet.fromNode];
        const nodeB = nodes[packet.toNode];

        if (!nodeA || !nodeB) continue;

        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxConnectionDistSq) {
          packet.progress += packet.speed * 60 * delta;
          if (packet.progress >= 1) {
            packet.progress = 0;
            packet.fromNode = packet.toNode;
            packet.toNode = Math.floor(Math.random() * nodeCount);
          }

          const curX = nodeA.x + (nodeB.x - nodeA.x) * packet.progress - cameraOffsetX * nodeA.depth;
          const curY = nodeA.y + (nodeB.y - nodeA.y) * packet.progress - cameraOffsetY * nodeA.depth;

          ctx.beginPath();
          ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = packet.color;
          ctx.shadowColor = packet.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          packet.fromNode = Math.floor(Math.random() * nodeCount);
          packet.toNode = Math.floor(Math.random() * nodeCount);
          packet.progress = 0;
        }
      }

      // Draw Constellation Nodes & Tech Labels
      ctx.font = '10px monospace';
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const renderX = node.x - cameraOffsetX * node.depth;
        const renderY = node.y - cameraOffsetY * node.depth;

        const pulseAlpha = 0.35 + Math.sin(node.pulse) * 0.2;
        const nodeAlpha = Math.max(0.1, Math.min(0.75, pulseAlpha * node.depth));

        // Node Glow Ring
        ctx.beginPath();
        ctx.arc(renderX, renderY, node.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, ${nodeAlpha * 0.2})`;
        ctx.fill();

        // Node Core Dot
        ctx.beginPath();
        ctx.arc(renderX, renderY, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, ${nodeAlpha})`;
        ctx.shadowColor = `rgba(${node.color}, 0.7)`;
        ctx.shadowBlur = 7;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Technology Constellation Label (for key nodes)
        if (node.label && nodeAlpha > 0.3) {
          ctx.fillStyle = `rgba(165, 243, 252, ${nodeAlpha * 0.75})`;
          ctx.fillText(node.label, renderX + node.radius + 6, renderY + 3);
        }
      }

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

      {/* 5. Technology Constellation & Neural Canvas Simulation */}
      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-85 z-0"
        />
      )}

      {/* 6. Section Vignette & Cyber Contrast Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#03050d_95%)] opacity-85"></div>

      {/* 7. Subtle Non-Intrusive Cyber Scanner Beam */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent cyber-scan-line"></div>
    </div>
  );
}
