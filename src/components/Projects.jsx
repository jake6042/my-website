import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [headerRef, headerInView] = useInView();
  const [footerRef, footerInView] = useInView();

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-6 py-2 sm:py-3 shadow-xl inline-block transform -rotate-1">
              FEATURED PROJECTS
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 mb-12 sm:mb-16 max-w-3xl">
            A selection of projects showcasing my technical skills, problem-solving approach, and passion for 
            building user-centric applications. Some projects include a live demo and source code.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isActive={activeProject === index}
              isAnyActive={activeProject !== null}
              onHover={(isHovering) => setActiveProject(isHovering ? index : null)}
            />
          ))}
        </div>

        <div
          ref={footerRef}
          className={`mt-8 sm:mt-12 p-6 sm:p-8 bg-zinc-900 border-2 sm:border-4 border-purple-500 transition-all duration-700 ease-out ${footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Github className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">MORE ON GITHUB</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                Check out my GitHub for more projects and experiments. 
                I maintain clean, documented code and follow best practices.
              </p>
              <a
                href="https://github.com/jake6042"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-purple-500 text-white font-bold hover:bg-purple-400 transition-colors text-sm sm:text-base"
              >
                Visit My GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}