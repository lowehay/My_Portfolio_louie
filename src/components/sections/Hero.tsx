'use client';

import { motion } from 'framer-motion';
import { TypewriterEffect } from '../ui/TypewriterEffect';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Floating glass elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm uppercase tracking-widest text-zinc-400 font-medium"
          >
            Welcome to my portfolio
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Louie Jae
            </span>
            <br />
            <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Maravillosa
            </span>
          </motion.h1>
          
          {/* Role with enhanced typewriter */}
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-zinc-400">I&apos;m a </span>
            <TypewriterEffect 
              text={[
                "Front-End Developer",
                "UI/UX Designer",
                "React Specialist",
                "Performance Optimizer",
                "Modern Web Architect"
              ]}
              className="inline-block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-medium"
              speed={80}
              pauseTime={1500}
            />
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I&#39;m a passionate Front-End Developer based in the Philippines, focused on building 
            responsive, single-page web applications with clean, modern interfaces that deliver 
            exceptional user experiences.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border border-zinc-600 text-zinc-300 rounded-xl font-medium hover:bg-zinc-800/50 hover:border-zinc-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
