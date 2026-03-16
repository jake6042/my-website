import React from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6">
          LET'S BUILD
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            SOMETHING GREAT
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm currently seeking full-time software engineering opportunities starting April 2026. 
          Whether it's a full-stack role, frontend position, or an exciting startup opportunity, 
          I'd love to chat!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex flex-col items-center gap-2 p-6 sm:p-8 bg-zinc-900 border-2 sm:border-4 border-white hover:border-cyan-400 transition-all duration-300 sm:transform sm:hover:scale-110"
          >
            <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:text-cyan-400 transition-colors" />
            <span className="font-bold text-white group-hover:text-cyan-400 text-sm sm:text-base">EMAIL ME</span>
            <span className="text-xs sm:text-sm text-gray-400 break-all">{personalInfo.email}</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 p-6 sm:p-8 bg-zinc-900 border-2 sm:border-4 border-white hover:border-cyan-400 transition-all duration-300 sm:transform sm:hover:scale-110"
          >
            <Github className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:text-cyan-400 transition-colors" />
            <span className="font-bold text-white group-hover:text-cyan-400 text-sm sm:text-base">GITHUB</span>
            <span className="text-xs sm:text-sm text-gray-400">{personalInfo.githubUsername}</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 p-6 sm:p-8 bg-zinc-900 border-2 sm:border-4 border-white hover:border-cyan-400 transition-all duration-300 sm:transform sm:hover:scale-110"
          >
            <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:text-cyan-400 transition-colors" />
            <span className="font-bold text-white group-hover:text-cyan-400 text-sm sm:text-base">LINKEDIN</span>
            <span className="text-xs sm:text-sm text-gray-400 break-all">{personalInfo.linkedinUsername}</span>
          </a>
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-black">
          <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">READY TO CONTRIBUTE</h3>
          <p className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
            Looking for a motivated developer who loves clean code, continuous learning, and building great products? Let's talk!
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold hover:bg-gray-900 transition-colors text-sm sm:text-base"
          >
            <Download className="w-5 h-5" />
            DOWNLOAD RESUME
          </a>
        </div>

        <p className="mt-8 sm:mt-12 text-gray-500 font-mono text-xs sm:text-sm px-4">
          © 2026 • Built with React & Tailwind CSS •{' '}
          <a
            href="https://github.com/jake6042/my-website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors underline underline-offset-2"
          >
            <Github className="w-3 h-3" />
            View on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}