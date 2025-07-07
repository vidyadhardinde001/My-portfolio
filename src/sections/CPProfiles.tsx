"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const profiles = [
  {
    title: 'LeetCode',
    rating: '1463',
    questionsSolved: '325',
    logo: '/assets/leetcode.svg',
    profileLink: 'https://leetcode.com/u/vidyadhardinde001/',
    bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-700',
    accentColor: 'bg-amber-500',
  },
  {
    title: 'CodeChef',
    rating: '1643',
    questionsSolved: '600+',
    logo: '/assets/codechef.png',
    profileLink: 'https://www.codechef.com/users/vidyadhar_2',
    bgColor: 'bg-gradient-to-br from-stone-50 to-stone-100',
    borderColor: 'border-red-300',
    textColor: 'text-red-700',
    accentColor: 'bg-red-500',
  },
  {
    title: 'HackerRank',
    rating: '5 Star MySQL',
    questionsSolved: 'NA',
    logo: '/assets/hackerrank.svg',
    profileLink: 'https://www.hackerrank.com/profile/vidyadhardinde01',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    borderColor: 'border-emerald-300',
    textColor: 'text-emerald-700',
    accentColor: 'bg-emerald-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      delay: 0.2,
    },
  },
};

const CPProfiles: React.FC = () => {
  return (
    <section 
      id="cpprofiles" 
      className="relative flex flex-col items-center justify-center py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating dots decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-amber-400 opacity-20" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-emerald-400 opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-red-400 opacity-20" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-20" variants={titleVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Coding Achievements
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My competitive programming progress across various platforms
          </p>
          <div className="w-16 h-1 mx-auto mt-6 bg-gradient-to-r from-amber-400 to-red-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative"
            >
              <motion.a
                href={profile.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${profile.bgColor} relative rounded-xl p-8 shadow-md flex flex-col items-center text-center border ${profile.borderColor} h-full group overflow-hidden`}
                variants={hoverVariants}
              >
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${profile.accentColor}`} />
                
                {/* Platform Logo */}
                <motion.div 
                  className="w-20 h-20 mb-6 flex items-center justify-center relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image 
                    src={profile.logo} 
                    alt={`${profile.title} logo`} 
                    width={80} 
                    height={80} 
                    className="object-contain"
                  />
                </motion.div>

                {/* Platform Title */}
                <h3 className={`text-2xl font-semibold mb-4 ${profile.textColor}`}>
                  {profile.title}
                </h3>

                {/* Stats */}
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-center px-4">
                    <span className="text-slate-600 font-medium">Rating:</span>
                    <span className="font-bold text-slate-800">{profile.rating}</span>
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <span className="text-slate-600 font-medium">Solved:</span>
                    <span className="font-bold text-slate-800">{profile.questionsSolved}</span>
                  </div>
                </div>

                {/* Visit button */}
                <motion.div
                  className={`mt-8 px-5 py-2 rounded-md ${profile.textColor} border ${profile.borderColor} bg-white text-sm font-medium shadow-sm`}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: profile.textColor.replace('text', 'bg'),
                    color: 'white',
                    borderColor: 'transparent'
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  View Profile
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CPProfiles;