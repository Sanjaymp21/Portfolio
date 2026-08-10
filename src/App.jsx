import React, { useState, useEffect } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SystemBootLoader } from './components/SystemBootLoader';
import { AIBadgeOrb } from './components/AIBadgeOrb';
import { FloatingTerminalWidget } from './components/FloatingTerminalWidget';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { Skills } from './components/Skills';
import { CurrentlyFocusedOn } from './components/CurrentlyFocusedOn';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Certifications } from './components/Certifications';
import { EducationAchievements } from './components/EducationAchievements';
import { LearningInsights } from './components/LearningInsights';
import { GithubActivity } from './components/GithubActivity';
import { ResumeCTA } from './components/ResumeCTA';
import { CollaborationCTA } from './components/CollaborationCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Toast } from './components/Toast';
import { NotFound } from './components/NotFound';

export function App() {
  const [is404, setIs404] = useState(false);
  const [isBooting, setIsBooting] = useState(() => {
    return !sessionStorage.getItem('sanjay_booted');
  });

  const handleBootComplete = () => {
    sessionStorage.setItem('sanjay_booted', 'true');
    setIsBooting(false);
  };

  // Check URL pathname for 404 testing or unknown path
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/' && path !== '' && !path.endsWith('index.html')) {
      setIs404(true);
    }
  }, []);

  const activeSection = useActiveSection([
    'home',
    'about',
    'what-i-do',
    'skills',
    'journey',
    'projects',
    'certifications',
    'achievements',
    'github',
    'contact'
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleNotify = (msg) => {
    setToastMessage(msg);
  };

  if (is404) {
    return (
      <NotFound
        onBackHome={() => {
          window.history.pushState({}, '', '/');
          setIs404(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#03050c] text-slate-100 relative selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* 1. Fast Optional AI System Boot Sequence */}
      {isBooting && <SystemBootLoader onComplete={handleBootComplete} />}

      {/* 2. High-End Immersive AI Developer Digital Universe Background */}
      <AnimatedBackground activeSection={activeSection} />

      {/* 3. Floating AI Explorer Identity Element */}
      <AIBadgeOrb />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          activeSection={activeSection}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero onNotify={handleNotify} />
          <About />
          <WhatIDo />
          <Skills />
          <CurrentlyFocusedOn />
          <Journey />
          <Projects onSelectProject={setSelectedProject} />
          <Certifications />
          <EducationAchievements />
          <LearningInsights />
          <GithubActivity />
          <ResumeCTA onNotify={handleNotify} />
          <CollaborationCTA />
          <Contact onNotify={handleNotify} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Utilities */}
        <ScrollToTop />
        <FloatingTerminalWidget />

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Toast Alert */}
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    </div>
  );
}

export default App;
