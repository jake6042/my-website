import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code2, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ProjectCard({ project, isActive, isAnyActive, onHover }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cardRef, cardInView] = useInView();
  
  const hasImages = project.hasImage && project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const openLightbox = (e) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (hasMultipleImages && e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      } else if (hasMultipleImages && e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, hasMultipleImages, project.images]);
  return (
    <div
      ref={cardRef}
      className={`group relative p-1 bg-white transition-all duration-700 ease-out md:hover:scale-[1.02] hover:shadow-2xl${isAnyActive && !isActive ? ' opacity-50 scale-[0.99]' : ''}${cardInView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-12'}`}
      style={isHovered ? {
        background: `linear-gradient(to right, ${project.color}aa, ${project.color})`,
        boxShadow: `0 25px 50px -12px ${project.color}50`
      } : undefined}
      onMouseEnter={() => { setIsHovered(true); onHover(true); }}
      onMouseLeave={() => { setIsHovered(false); onHover(false); }}
    >
      <div className={`bg-zinc-900 w-full h-full relative ${isLightboxOpen ? 'blur-sm' : ''}`}>
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        <div className={hasImages ? "grid md:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 lg:gap-12" : "max-w-5xl mx-auto"}>
          {/* Project Info */}
          <div className={!hasImages ? "mb-6 sm:mb-8" : ""}>
            <div className="mb-4 sm:mb-6">
              <h3 className={`font-black text-white mb-2 ${!hasImages ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' : 'text-2xl sm:text-3xl md:text-4xl'}`}>
                {project.title}
              </h3>
              <p className={`text-gray-400 font-bold ${!hasImages ? 'text-lg sm:text-xl md:text-2xl' : 'text-base sm:text-lg md:text-xl'}`}>
                {project.tagline}
              </p>
            </div>

            <p className={`text-gray-300 mb-4 sm:mb-6 leading-relaxed ${!hasImages ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
              {project.description}
            </p>

            <div className={`mb-4 sm:mb-6 ${!hasImages ? 'grid sm:grid-cols-2 gap-4 sm:gap-6' : 'space-y-3 sm:space-y-4'}`}>
              <div>
                <h4 className="text-cyan-400 font-bold mb-1 sm:mb-2 text-sm sm:text-base">THE CHALLENGE</h4>
                <p className={`text-gray-300 ${!hasImages ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>{project.problem}</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-bold mb-1 sm:mb-2 text-sm sm:text-base">THE SOLUTION</h4>
                <p className={`text-gray-300 ${!hasImages ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>{project.solution}</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-bold mb-1 sm:mb-2 text-sm sm:text-base">MY ROLE</h4>
                <p className={`text-gray-300 font-bold ${!hasImages ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>{project.role}</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-bold mb-1 sm:mb-2 text-sm sm:text-base">IMPACT</h4>
                <p className={`text-gray-300 ${!hasImages ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>{project.metrics}</p>
              </div>
            </div>

            {/* Key Features - Show inline for no-image layout */}
            {!hasImages && (
              <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-black border-2 border-gray-700">
                <h4 className="text-sm sm:text-base font-bold text-cyan-400 mb-2 sm:mb-3">KEY FEATURES</h4>
                <ul className="grid sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2">
                  {project.features.map((feature, fi) => (
                    <li key={fi} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-cyan-400 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-4 sm:mb-6">
              <h4 className="text-xs sm:text-sm font-bold text-gray-400 mb-2 sm:mb-3">TECH STACK</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-black border-2 border-gray-700 text-xs sm:text-sm font-bold text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              {project.hasLiveUrl && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-colors text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE DEMO
                </a>
              )}
              {project.hasGithubUrl && project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2 sm:py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-colors text-sm sm:text-base"
                >
                  <Github className="w-4 h-4" />
                  VIEW CODE
                </a>
              )}
            </div>
          </div>

          {/* Project Visual - Only show if hasImage is true */}
          {hasImages && (
          <div className="relative order-first md:order-last">
            <div 
              className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 border-2 sm:border-4 border-gray-700 overflow-hidden relative cursor-pointer"
              onClick={hasImages ? openLightbox : undefined}
            >
              {hasImages ? (
                <>
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.placeholder-icon').style.display = 'flex';
                    }}
                  />
                  <div className="placeholder-icon absolute inset-0 hidden items-center justify-center">
                    <Code2 className="w-24 h-24 text-gray-700" />
                  </div>
                  
                  {/* Expand Icon */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/60 backdrop-blur-sm p-1.5 sm:p-2 rounded-full border-2 border-white">
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  
                  {hasMultipleImages && (
                    <>
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all border-2 border-white hover:border-cyan-400 z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all border-2 border-white hover:border-cyan-400 z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/80 backdrop-blur-sm px-2 sm:px-3 py-1 border-2 border-cyan-400">
                        <p className="text-xs sm:text-sm text-cyan-400 font-bold">
                          {currentImageIndex + 1} / {project.images.length}
                        </p>
                      </div>
                      
                      {/* Dot Indicators */}
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-cyan-400 w-4 sm:w-6'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-24 h-24 text-gray-700" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm">
                    <p className="text-xs text-gray-400 font-mono">
                      // No project images available
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Key Features - Show below image for image layout */}
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-black border-2 border-gray-700">
              <h4 className="text-xs sm:text-sm font-bold text-cyan-400 mb-2">KEY FEATURES</h4>
              <ul className="space-y-1">
                {project.features.map((feature, fi) => (
                  <li key={fi} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-cyan-400 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          )}
        </div>
      </div>
      </div>

      {/* Expanded Image View - Overlay within card */}
      {isLightboxOpen && hasImages && (
        <div className="absolute inset-0 bg-black/95 flex items-center justify-center z-50 p-4 md:p-8">
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/80 hover:bg-black text-white p-2 md:p-3 rounded-full border-2 border-white hover:border-red-500 shadow-2xl z-10"
            aria-label="Close expanded view"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Navigation Arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
                }}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-3 md:p-4 rounded-full border-2 border-white hover:border-cyan-400 shadow-2xl z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
                }}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-3 md:p-4 rounded-full border-2 border-white hover:border-cyan-400 shadow-2xl z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </>
          )}

          {/* Image */}
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain border-4 border-cyan-400 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image Counter */}
          {hasMultipleImages && (
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 border-2 border-cyan-400 shadow-2xl">
              <p className="text-sm md:text-lg text-cyan-400 font-bold">
                {currentImageIndex + 1} / {project.images.length}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}