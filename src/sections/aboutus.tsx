import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Blender Project 1',
    videoUrl: 'https://link-to-your-video-1.mp4', // Add your video URLs here
    pdfUrl: '/assets/project1.pdf', // PDF path
  },
  {
    title: 'Blender Project 2',
    videoUrl: 'https://link-to-your-video-2.mp4',
    pdfUrl: '/assets/project2.pdf',
  },
  {
    title: 'Blender Project 3',
    videoUrl: 'https://link-to-your-video-3.mp4',
    pdfUrl: '/assets/project3.pdf',
  },
  // Add more projects as needed
];

const BlenderProjects: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">My Blender Projects</h1>
      <div className="flex flex-col space-y-8">
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center overflow-hidden w-full"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-60 h-40 bg-gray-200 m-2 rounded-lg shadow-lg overflow-hidden"
                initial={{ x: rowIndex % 2 === 0 ? -1000 : 1000 }} // Start from left or right
                animate={{
                  x: 0,
                  transition: {
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'reverse',
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.video
                  src={project.videoUrl}
                  controls
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="p-2">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    View PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlenderProjects;
