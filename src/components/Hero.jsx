import React from 'react';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-3 animate-fade-in">
              <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-xs md:text-sm transform -rotate-2 shadow-lg">
                OPEN TO NEW OPPORTUNITIES
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none tracking-tight">
              <span className="inline-block animate-slide-in-1 font-mono">
                {personalInfo.name.split(' ')[0].toUpperCase()}
              </span>
              <br />
              <span className="inline-block animate-slide-in-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                {personalInfo.name.split(' ').slice(1).join(' ').toUpperCase()}
              </span>
            </h1>
            
            <div className="space-y-4 mb-8 sm:mb-12 animate-fade-in-up">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Software engineering student passionate about building innovative and creative solutions to everyday problems. 
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 animate-fade-in-up-delay">
              <a 
                href="#contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-cyan-400 text-black font-bold text-base sm:text-lg hover:bg-cyan-300 transition-all duration-300 sm:transform sm:hover:scale-105 sm:hover:rotate-1 shadow-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                LET'S TALK
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 border-[3px] sm:border-4 border-cyan-400 text-cyan-400 font-bold text-base sm:text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 sm:transform sm:hover:scale-105 text-center"
              >
                VIEW WORK
              </a>
              <a 
                href="/resume.pdf"
                download
                className="px-6 sm:px-8 py-3 sm:py-4 border-[3px] sm:border-4 border-purple-500 text-purple-400 font-bold text-base sm:text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 sm:transform sm:hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                RESUME
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <img 
                src="/headshot.jpg" 
                alt="Jacob Roberts"
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl object-cover aspect-[2/3] border-2 sm:border-4 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              />
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl sm:rounded-3xl blur-2xl transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}