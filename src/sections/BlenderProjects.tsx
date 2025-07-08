"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Blender Project 1',
    videoUrl: '/blender/blend.mkv',
    category: '3D Animation'
  },
  {
    title: '2D Web Element',
    videoUrl: '/blender/blend-2.webm',
    category: 'Motion Graphics'
  },
  {
    title: 'Nintendo Switch',
    videoUrl: '/blender/blend-3.mp4',
    category: 'Product Visualization'
  },
  {
    title: 'Twin Bombers',
    videoUrl: '/blender/blend-4.mp4',
    category: '3D Animation'
  },
  {
    title: 'Blender Project 5',
    videoUrl: '/blender/blend-5.mp4',
    category: 'Experimental'
  },
  {
    title: 'Basic Robot Walkcycle',
    videoUrl: '/blender/blend-6.mp4',
    category: 'Character Animation'
  },
  {
    title: 'Blender Project 7',
    videoUrl: '/blender/blend-7.mp4',
    category: '3D Modeling'
  },
  {
    title: 'Blender Project 8',
    videoUrl: '/blender/blend-8.mp4',
    category: 'Visual Effects'
  },
  {
    title: 'Blender Project 9',
    videoUrl: '/blender/blend-9.mp4',
    category: 'Product Visualization'
  },
  {
    title: 'Blender Project 10',
    videoUrl: '/blender/blend-10.mp4',
    category: 'Motion Graphics'
  },
  {
    title: 'Blender Project 11',
    videoUrl: '/blender/blend-11.mp4',
    category: '3D Animation'
  },
  {
    title: 'Blender Project 12',
    videoUrl: '/blender/blend-12.mp4',
    category: 'Experimental'
  },
];

const BlenderProjects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects by category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle video selection
  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Auto-play videos when they're in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(e => console.log("Autoplay prevented:", e));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    // Capture the current refs in a variable for cleanup
    const currentVideos = videoRefs.current;

    currentVideos.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => {
      currentVideos.forEach(video => {
        if (video) observer.unobserve(video);
      });
    };
  }, [filteredProjects]);

  return (
    <section id="blender-projects" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-purple-500 opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">3D Art & Animation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my Blender projects showcasing 3D modeling, animation, and visual effects
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div 
                className="relative w-full h-64 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => handleVideoClick(project.videoUrl)}
              >
                {/* Video thumbnail with autoplay */}
                <video
                  ref={el => { videoRefs.current[index] = el; }}
                  src={project.videoUrl}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                
                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 group-hover:translate-y-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <span className="text-sm text-gray-300">{project.category}</span>
                </div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {selectedVideo && (
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                src={selectedVideo}
                className="w-full max-h-[80vh] rounded-lg shadow-2xl"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlenderProjects;