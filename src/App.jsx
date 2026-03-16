import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        rafRef.current = null;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden animate-fade-in">
        {/* Animated gradient background */}
        <div 
          className="fixed inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 217, 255, 0.15), transparent 50%)`
          }}
        />
        
        {/* Grid overlay - hidden on mobile for better performance */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-5 hidden sm:block"
          style={{
            backgroundImage: 'linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;