'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Facebook, Instagram } from 'lucide-react';

export function About() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-blue-500/15 via-transparent to-transparent blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-xl" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${(i * 5.26) % 100}%`,
              top: `${(i * 7.14) % 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + (i % 5) * 0.4,
              repeat: Infinity,
              delay: (i % 7) * 0.43,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-zinc-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left Content - 3/5 width */}
          <div className="lg:col-span-3">
            {/* Main Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-zinc-100 mb-6">
                Crafting Digital Experiences with
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Purpose</span>
              </h3>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                I&apos;m a passionate Front-End Developer from the Philippines, dedicated to creating 
                immersive web experiences that blend cutting-edge technology with intuitive design.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My approach combines technical excellence with creative problem-solving, 
                ensuring every pixel serves a purpose and every interaction feels natural.
              </p>
            </motion.div>

            {/* Core Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h4 className="text-2xl font-semibold text-zinc-100 mb-6">Core Strengths</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React & Next.js",
                  "TypeScript Mastery",
                  "Responsive Design",
                  "Performance Optimization",
                  "UI/UX Excellence",
                  "Clean Architecture"
                ].map((strength, index) => (
                  <motion.div
                    key={index}
                    className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/30 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                      <span className="text-zinc-200 font-medium">{strength}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Proficiency */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-zinc-100 mb-6">Tech Stack Proficiency</h4>
              <div className="space-y-4">
                {[
                  { name: "React", level: 85 },
                  { name: "TypeScript", level: 75 },
                  { name: "Next.js", level: 80 },
                  { name: "Tailwind CSS", level: 75 },
                  { name: "Django", level: 90 },
                  { name: "Figma", level: 80 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">{skill.name}</span>
                      <span className="text-zinc-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Profile - 2/5 width */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Spotlight Profile Container */}
              <div className="relative">
                {/* Main spotlight glow */}
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-blue-500/20 to-transparent blur-3xl scale-150" />
                
                {/* Profile Image Container */}
                <div className="relative">
                  {/* Outer ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-purple-500/30"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Inner ring */}
                  <motion.div
                    className="absolute inset-4 rounded-full border border-blue-500/30"
                    animate={{
                      scale: [1, 0.9, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Profile Image */}
                  <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-2 border-zinc-700/50 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40" />
                    
                    <Image 
                      src="/me.png" 
                      alt="Louie Maravillosa"
                      fill
                      className="object-cover"
                      sizes="320px"
                      priority
                      onError={(e) => {
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/60 to-blue-900/60';
                        fallback.innerHTML = `
                          <div class="text-center">
                            <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                              <span class="text-4xl font-bold text-white">LM</span>
                            </div>
                            <p class="text-zinc-200 text-lg font-semibold">Louie Maravillosa</p>
                          </div>
                        `;
                        e.currentTarget.parentElement?.appendChild(fallback);
                      }}
                    />
                    
                    {/* Spotlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20" />
                  </div>
                </div>

                {/* Profile Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center mt-8"
                >
                  <h3 className="text-3xl font-bold text-zinc-100 mb-2">Louie Maravillosa</h3>
                  <p className="text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold mb-2">
                    Front-End Developer
                  </p>
                  <p className="text-zinc-400 text-lg">Based in Philippines</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-6 mt-6">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-800/50 backdrop-blur-sm rounded-full text-zinc-300 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 border border-zinc-700/50"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-800/50 backdrop-blur-sm rounded-full text-zinc-300 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 border border-zinc-700/50"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook size={20} />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-800/50 backdrop-blur-sm rounded-full text-zinc-300 hover:text-pink-400 hover:bg-pink-500/20 transition-all duration-300 border border-zinc-700/50"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
