import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b-4 border-cyan-400 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">
          {'jacobroberts.dev'}
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <a href="#about" className="text-white hover:text-cyan-400 font-bold transition-colors">
            ABOUT
          </a>
          <a href="#projects" className="text-white hover:text-cyan-400 font-bold transition-colors">
            PROJECTS
          </a>
          <a href="#skills" className="text-white hover:text-cyan-400 font-bold transition-colors">
            SKILLS
          </a>
          <a href="#contact" className="text-white hover:text-cyan-400 font-bold transition-colors">
            CONTACT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-cyan-400 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t-2 border-cyan-400">
          <div className="flex flex-col py-4">
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className="text-white hover:text-cyan-400 hover:bg-zinc-900 font-bold transition-colors px-6 py-4 border-b border-zinc-800"
            >
              ABOUT
            </a>
            <a 
              href="#projects" 
              onClick={handleLinkClick}
              className="text-white hover:text-cyan-400 hover:bg-zinc-900 font-bold transition-colors px-6 py-4 border-b border-zinc-800"
            >
              PROJECTS
            </a>
            <a 
              href="#skills" 
              onClick={handleLinkClick}
              className="text-white hover:text-cyan-400 hover:bg-zinc-900 font-bold transition-colors px-6 py-4 border-b border-zinc-800"
            >
              SKILLS
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="text-white hover:text-cyan-400 hover:bg-zinc-900 font-bold transition-colors px-6 py-4"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}