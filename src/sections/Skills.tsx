"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers, FiFilm, FiPenTool, FiGitBranch, FiCpu, FiBox } from 'react-icons/fi';

const skillsData = [
  { 
    title: 'Blender', 
    description: '3D Modeling', 
    icon: <FiBox className="w-6 h-6" />, 
    color: 'from-orange-500 to-orange-600',
    delay: 0.1
  },
  { 
    title: 'After Effects', 
    description: 'Motion Graphics', 
    icon: <FiFilm className="w-6 h-6" />, 
    color: 'from-purple-500 to-purple-700',
    delay: 0.2
  },
  { 
    title: 'C++', 
    description: 'Programming', 
    icon: <FiCpu className="w-6 h-6" />, 
    color: 'from-blue-500 to-blue-700',
    delay: 0.3
  },
  { 
    title: 'Competitive', 
    description: '3-star @ Codechef', 
    icon: <FiCpu className="w-6 h-6" />, 
    color: 'from-blue-500 to-blue-700',
    delay: 0.3
  },
  { 
    title: 'Java', 
    description: 'Core', 
    icon: <FiCode className="w-6 h-6" />, 
    color: 'from-red-500 to-red-700',
    delay: 0.4
  },
  { 
    title: 'Figma', 
    description: 'UI/UX Design', 
    icon: <FiPenTool className="w-6 h-6" />, 
    color: 'from-cyan-400 to-cyan-600',
    delay: 0.6
  },
  { 
    title: 'Illustrator', 
    description: 'Graphic Design', 
    icon: <FiPenTool className="w-6 h-6" />, 
    color: 'from-yellow-500 to-yellow-700',
    delay: 0.7
  },
  { 
    title: 'Git', 
    description: 'Version Control', 
    icon: <FiGitBranch className="w-6 h-6" />, 
    color: 'from-orange-600 to-orange-800',
    delay: 0.8
  },
  { 
    title: 'MySQL', 
    description: 'Database', 
    icon: <FiDatabase className="w-6 h-6" />, 
    color: 'from-blue-600 to-blue-800',
    delay: 0.9
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-12 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            My Skills
          </h2>
          <p className="text-md text-gray-600 max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: skill.delay * 0.5 }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ 
                y: -5,
                scale: 1.03,
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative h-full bg-white rounded-lg p-5 flex flex-col items-center text-center border border-gray-100 hover:border-transparent transition-all duration-200">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`mb-3 p-3 rounded-full bg-gradient-to-br ${skill.color} text-white shadow-md`}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800">{skill.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;