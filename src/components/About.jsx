import React from 'react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-zinc-900 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 sm:mb-12 text-center">
          <span className="inline-block transform -rotate-1 bg-gradient-to-r from-purple-500 to-pink-500 text-black px-4 sm:px-6 py-2 sm:py-3 shadow-xl">
            ABOUT ME
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <img 
                src="/jimmy.jpg" 
                alt="Jimmy the cat"
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl object-cover aspect-[3/4] border-2 sm:border-4 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              />
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-2xl transform -translate-x-4 translate-y-4"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed order-1 lg:order-2">
            <p>
              Hey! My name's Jacob, and I'm a Software Engineering student at Western Governors University with a strong passion for 
              building creative solutions and exploring emerging technologies like machine learning and AI.
            </p>
            <p>
              My journey in tech started with simple batch file and Scratch games on my dad's office computer, and has evolved into building production-ready 
              applications that solve real problems. I love the challenge of turning complex problems into elegant, 
              user-friendly solutions.
            </p>
            <p className="text-cyan-400 font-bold">
              What I bring to the table:
            </p>
            <ul className="list-none space-y-3 ml-3 sm:ml-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span>
                  <strong className="text-white">Problem solver:</strong> I thrive on debugging, optimization, and finding creative solutions
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span>
                  <strong className="text-white">Fast learner:</strong> Always exploring new frameworks, tools, and best practices
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span>
                  <strong className="text-white">Team player:</strong> Experience collaborating with others and delivering production-ready solutions
                </span>
              </li>
            </ul>
            <p>
              When I'm not coding, you'll find me playing Guitar Hero, making music, or hanging out with my cat, Jimmy! 🐈‍⬛
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}