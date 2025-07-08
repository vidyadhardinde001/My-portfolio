"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MediaType = 'video' | 'image';

interface Project {
  title: string;
  mediaUrl: string;
  category: string;
  type: MediaType;
}

const projects: Project[] = [
  {
    title: 'Blender Project 1',
    mediaUrl: '/blender/blend.mkv',
    category: '3D Animation',
    type: 'video'
  },
  {
    title: '2D Web Element',
    mediaUrl: '/blender/chair and stool.jpg',
    category: 'Motion Graphics',
    type: 'image'
  },
  {
    title: 'Nintendo Switch',
    mediaUrl: '/blender/blend-3.mp4',
    category: 'Product Visualization',
    type: 'video'
  },
  {
    title: 'Blender Project 1',
    mediaUrl: '/blender/blend-4.mp4',
    category: '3D Animation',
    type: 'video'
  },
  {
    title: '2D Web Element',
    mediaUrl: '/blender/starship.png',
    category: 'Motion Graphics',
    type: 'image'
  },
  {
    title: 'Blender Project 1',
    mediaUrl: '/blender/blend-6.mp4',
    category: '3D Animation',
    type: 'video'
  },
  {
    title: '2D Web Element',
    mediaUrl: '/blender/japanestboards.jpg',
    category: 'Motion Graphics',
    type: 'image'
  },

  // Add more projects with proper type definitions...
];

const BlenderProjects = () => {
  const [selectedMedia, setSelectedMedia] = useState<{url: string, type: MediaType} | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects by category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle media selection
  const handleMediaClick = (mediaUrl: string, type: MediaType) => {
    setSelectedMedia({ url: mediaUrl, type });
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  // Auto-play videos when they're in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && video.tagName === 'VIDEO') {
            video.play().catch(e => console.log("Autoplay prevented:", e));
          } else if (video.tagName === 'VIDEO') {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    const currentMediaElements = videoRefs.current;

    currentMediaElements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      currentMediaElements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, [filteredProjects]);

  // Detect media type from URL (fallback)
  const getMediaType = (url: string): MediaType => {
    const videoExtensions = ['.mp4', '.webm', '.mkv', '.mov'];
    const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    return videoExtensions.includes(extension) ? 'video' : 'image';
  };

  return (
    <section id="blender-projects" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background elements... */}

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header... */}

        {/* Projects grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div 
                className="relative w-full h-64 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => handleMediaClick(project.mediaUrl, project.type)}
              >
                {/* Render media based on type */}
                {project.type === 'video' ? (
                  <video
                    ref={el => { videoRefs.current[index] = el; }}
                    src={project.mediaUrl}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={project.mediaUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                
                {/* Overlay and info... */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Media modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                {/* Close icon... */}
              </button>
              
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.url}
                  className="w-full max-h-[80vh] rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt="Full size media"
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlenderProjects;