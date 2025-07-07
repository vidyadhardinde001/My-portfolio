"use client";
import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

// Importing icons
import ClipboardIcon from "@/assets/resume copy.png";
import GithubIcon from "@/assets/github.png";
import LinkedinIcon from "@/assets/linkedin.png";
import InstagramIcon from "@/assets/insta copy.png";
import EmailIcon from "@/assets/email.png";
import ProfilePic from "@/assets/pfp.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Typewriter effect
  const [text] = useTypewriter({
    words: ['3D Artist', 'Developer', 'Competitive Programmer', 'UI/UX Designer', 'Blender Artist'],
    loop: Infinity,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'cpprofiles', label: 'CP Profiles' },
    { id: 'projects', label: 'Projects' },
    { id: 'blender-projects', label: '3D Art' }
  ];

  // Social links
  const socialLinks = [
    { icon: ClipboardIcon, alt: 'Resume', href: '/assets/resume.pdf', target: '_blank' },
    { icon: GithubIcon, alt: 'GitHub', href: 'https://github.com/vidyadhardinde001' },
    { icon: LinkedinIcon, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/vidyadhar-dinde-447371252/' },
    { icon: InstagramIcon, alt: 'Instagram', href: 'https://www.instagram.com/_vidyadhar_d/' },
    { icon: EmailIcon, alt: 'Email', href: 'mailto:vidyadhardinde@gmail.com' }
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden h-screen w-full flex items-center justify-center"
    >
      {/* Main Navigation Bar - Desktop */}
      <motion.nav
        className="fixed top-8 left-0 right-0 mx-auto w-max hidden md:flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-2 z-50 border border-gray-200 dark:border-white/10 shadow-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <ul className="flex space-x-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-gray-800 dark:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm uppercase tracking-wider transition-colors relative group px-3 py-1.5"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-4/5"></span>
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Floating Social Bar - Desktop */}
      <motion.div
        className="fixed top-1/2 right-8 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
          >
            <Link
              href={link.href}
              target={link.target || '_self'}
              rel="noopener noreferrer"
              className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:bg-blue-100/80 dark:hover:bg-white/20 transition-all duration-300"
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={20}
                height={20}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                {link.alt}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Profile Picture - Mobile */}
      <motion.div
        className="fixed top-4 right-4 z-50 md:hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 hover:border-blue-400/50 transition-all duration-300">
          <Image
            src={ProfilePic}
            alt="Profile"
            width={40}
            height={40}
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/bg-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-6 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div className="text-center">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97]
              }}
            >
              <span className="block text-xl sm:text-2xl font-light text-blue-200 mb-2 tracking-widest">
                HELLO, I&apos;M
              </span>
              <span className="relative inline-block">
                <span className="font-semibold bg-gradient-to-r opacity-80 from-white to-white bg-clip-text text-transparent">
                  Vidyadhar Dinde
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.div
              className="max-w-2xl mx-auto text-2xl sm:text-3xl md:text-4xl text-white/90 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              I am a
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-4 text-5xl sm:text-5xl md:text-4xl font-bold text-blue-300 h-14 sm:h-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-glow-gradient bg-[length:100%_100%] animate-glow-x bg-clip-text">
              {text}
            </span>
            <Cursor cursorColor="#60a5fa" />
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all border border-white/20 hover:border-white/40 hover:scale-[1.02]"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-white/60 text-xs mb-2 font-light tracking-wider">SCROLL TO EXPLORE</div>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1 hover:border-blue-400 transition-colors">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};