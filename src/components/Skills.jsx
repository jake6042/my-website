import React from 'react';
import { skills } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

function SkillCard({ category, items, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`bg-black border-2 sm:border-4 border-gray-800 p-4 sm:p-6 hover:border-purple-500 transition-all duration-500 ease-out sm:hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: inView ? `${index * 80}ms` : '0ms' }}
    >
      <h3 className="text-xl sm:text-2xl font-black text-purple-400 mb-3 sm:mb-4 pb-2 border-b-2 border-purple-400">
        {category}
      </h3>
      <div className="space-y-2">
        {items.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="text-white font-bold py-2 px-3 bg-zinc-900 hover:bg-zinc-800 transition-colors text-sm sm:text-base"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [headerRef, headerInView] = useInView();
  const [footerRef, footerInView] = useInView();

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 text-center sm:text-right">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-black px-4 sm:px-6 py-2 sm:py-3 shadow-xl inline-block transform rotate-1">
              TECHNICAL SKILLS
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 mb-12 sm:mb-16 max-w-3xl mx-auto sm:mx-0 sm:ml-auto text-center sm:text-right">
            Technologies and tools I've used in real projects, from personal builds to team collaborations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard key={index} category={category} items={items} index={index} />
          ))}
        </div>

        <div
          ref={footerRef}
          className={`mt-8 sm:mt-12 p-4 sm:p-6 bg-zinc-900 border-l-2 sm:border-l-4 border-cyan-400 transition-all duration-700 ease-out ${footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm sm:text-base text-gray-300">
            <strong className="text-cyan-400">Always learning:</strong> Currently exploring FPGA development with Vivado, and iOS/iPadOS development in Swift
          </p>
        </div>
      </div>
    </section>
  );
}
