"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFileText, FiClock, FiCode, FiCheckCircle, FiTrendingUp, FiLink, FiX } from 'react-icons/fi';

const projectData = [
  {
    title: 'RoomRadar',
    subtitle: 'PG Accommodation Finder',
    status: 'In Progress',
    videoUrl: '/videos/sd.mp4',
    pdfUrl: '/assets/roomradar.pdf',
    githubUrl: 'https://github.com/vidyadhardinde001/CNmain',
    projectUrl: 'https://roomradar-demo.com',
    metrics: [
      { label: 'Status', value: 'Development', icon: <FiTrendingUp className="text-blue-500" />, status: 'progress' },
      { label: 'Description', value: 'Android App for finding PG accommodations near Walchand College of Engineering with real-time availability tracking.', icon: <FiFileText className="text-green-500" /> },
      { label: 'Tech Stack', value: 'Android Studio | Java | Firebase', icon: <FiCode className="text-purple-500" /> },
      { label: 'Duration', value: '3 months', icon: <FiClock className="text-yellow-500" /> },
    ],
    accentColor: 'bg-blue-500',
  },
  {
    title: 'Siddhivinayak Engineers',
    subtitle: 'Corporate Website',
    status: 'Completed',
    videoUrl: '/videos/sd.mp4',
    pdfUrl: '/assets/SE.pdf',
    githubUrl: 'https://github.com/vidyadhardinde001/SDofficial',
    projectUrl: 'https://siddhivinayakengineers.co.in/',
    metrics: [
      { label: 'Status', value: 'Deployed', icon: <FiCheckCircle className="text-green-500" />, status: 'success' },
      { label: 'Description', value: 'SEO-optimized website for Siddhivinayak Engineers with modern web development techniques.', icon: <FiFileText className="text-green-500" /> },
      { label: 'Tech Stack', value: 'ReactJS | TailwindCSS | TypeScript | MongoDB | NextJS | NodeJS', icon: <FiCode className="text-purple-500" /> },
      { label: 'Duration', value: '2 months', icon: <FiClock className="text-yellow-500" /> },
    ],
    accentColor: 'bg-emerald-500',
  },
  {
    title: 'IngredientIQ',
    subtitle: 'Packed Food Analyzer',
    status: 'Completed',
    videoUrl: '/videos/iq.mp4',
    pdfUrl: '/assets/ingredientiq.pdf',
    githubUrl: 'https://github.com/vidyadhardinde001/ingredientiq2',
    projectUrl: 'https://the-ingredientiq.netlify.app/',
    metrics: [
      { label: 'Status', value: 'Deployed', icon: <FiCheckCircle className="text-green-500" />, status: 'success' },
      { label: 'Description', value: 'A food ingredient analysis tool that provides nutritional insights and health concerns for packaged food items. Designed the UI, integrated product API and OpenAI API, implemented nutritional charts, and added barcode scanning functionality.', icon: <FiFileText className="text-green-500" /> },
      { label: 'Tech Stack', value: 'ReactJS | TailwindCSS | TypeScript | MongoDB | NextJS | NodeJS', icon: <FiCode className="text-purple-500" /> },
      { label: 'Duration', value: '2 months', icon: <FiClock className="text-yellow-500" /> },
    ],
    accentColor: 'bg-purple-500',
  },
];

const ProjectsSection = () => {
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);
  const [isHoveringVideo, setIsHoveringVideo] = useState<number | null>(null);

  const handleVideoClick = (index: number) => {
    setExpandedVideo(expandedVideo === index ? null : index);
  };

  return (
    <section id="projects" className="px-4 py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-sm font-semibold text-blue-600 mb-2">PORTFOLIO</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my notable projects, showcasing my skills and experience in development.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Project Header */}
            <div className={`${project.accentColor} h-2 w-full`}></div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                  <p className="text-gray-600">{project.subtitle}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4 mb-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="mr-3 mt-1">
                      {metric.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{metric.label}</p>
                      <p className={`text-base ${
                        metric.status === 'success' 
                          ? 'text-green-600 font-medium' 
                          : metric.status === 'progress' 
                            ? 'text-blue-600 font-medium' 
                            : 'text-gray-800'
                      }`}>
                        {metric.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Video Section */}
              <div className="mb-6 px-6">
                <motion.div
                  className={`relative rounded-xl overflow-hidden bg-gray-200 aspect-video flex items-center justify-center ${
                    isHoveringVideo === index
                      ? `${project.accentColor.replace('bg-', 'ring-')} opacity-70 ring-4`
                      : 'ring-2 ring-transparent'
                  }`}
                  initial={false}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setIsHoveringVideo(index)}
                  onHoverEnd={() => setIsHoveringVideo(null)}
                  onClick={() => handleVideoClick(index)}
                >
                  {project.videoUrl ? (
                    <>
                      <video 
                        src={project.videoUrl} 
                        controls={expandedVideo === index}
                        autoPlay={expandedVideo === index}
                        loop={expandedVideo === index}
                        muted
                        className="w-full h-full object-cover cursor-pointer"
                        onError={(e) => {
                          const target = e.target as HTMLVideoElement;
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="text-gray-500 text-center p-4">
                                <p>Video failed to load</p>
                                <p class="text-sm">Please check the video file exists at: ${project.videoUrl}</p>
                              </div>
                            `;
                          }
                        }}
                      />
                      {expandedVideo !== index && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHoveringVideo === index ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-8 h-8 text-gray-800 ml-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <div className="text-gray-500 text-center p-4">
                      <p>Project Demo Video</p>
                      <p className="text-sm">Video coming soon</p>
                    </div>
                  )}
                </motion.div>
                
                {/* Video title/status when not expanded */}
                {expandedVideo !== index && (
                  <motion.p 
                    className="text-xs text-center mt-2 text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHoveringVideo === index ? 0 : 1 }}
                  >
                    Click to {isHoveringVideo === index ? '' : 'expand and '}play demo
                  </motion.p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 pt-0">
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  <FiGithub /> Code
                </motion.a>
                
                {project.projectUrl && (
                  <motion.a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors text-sm font-medium"
                  >
                    <FiLink /> Live Demo
                  </motion.a>
                )}
                
                <motion.a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <FiFileText /> Details
                </motion.a>
                
                {project.videoUrl && (
                  <motion.a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium"
                    download
                  >
                    <FiExternalLink /> Download Video
                  </motion.a>
                )}
              </div>
            </div>

            {/* Expanded Video Modal */}
            {expandedVideo === index && (
              <motion.div 
                className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative w-full max-w-4xl">
                  <button
                    onClick={() => setExpandedVideo(null)}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                  <video 
                    src={project.videoUrl} 
                    controls
                    autoPlay
                    loop
                    className="w-full rounded-lg shadow-xl"
                  />
                  <div className="mt-2 text-center text-white">
                    <p className="font-medium">{project.title} Demo</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <p className="text-gray-600 mb-4">Want to see more of my work?</p>
        <motion.a
          href="https://github.com/vidyadhardinde001"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
        >
          Visit My GitHub
          <FiExternalLink className="ml-2" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;