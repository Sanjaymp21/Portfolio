import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { EducationAchievements } from './components/EducationAchievements';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Toast } from './components/Toast';

export function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const activeSection = useActiveSection([
    'home',
    'about',
    'skills',
    'projects',
    'achievements',
    'contact'
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleNotify = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 relative selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Background Cyber Mesh Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0"></div>
      
      {/* Background Ambient Color Spots */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar 
          activeSection={activeSection} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero onNotify={handleNotify} />
          <About />
          <Skills />
          <Projects onSelectProject={setSelectedProject} />
          <EducationAchievements />
          <ResumeCTA onNotify={handleNotify} />
          <Contact onNotify={handleNotify} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Utilities */}
        <ScrollToTop />
        
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
