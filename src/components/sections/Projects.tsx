'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Learning Management System",
    description: "Comprehensive LMS platform for educational institutions with course management, student tracking, and interactive learning modules.",
    image: "/elms.png",
    tags: ["Django", "Bootstrap", "PostgreSQL", "JavaScript", "AWS"],
    github: "https://github.com/Classify-Incorporated/classedge",
    live: "https://lms-demo.vercel.app",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Advanced AI platform for generating marketing content, blog posts, and social media captions.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Python", "OpenAI", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(147, 51, 234, 0.3)"
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard for monitoring business metrics with real-time data visualization.",
    image: "/api/placeholder/400/300",
    tags: ["Vue.js", "D3.js", "WebSocket", "Express", "MySQL"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and instant transfers.",
    image: "/api/placeholder/400/300",
    tags: ["React Native", "Firebase", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-orange-500 to-red-500",
    glowColor: "rgba(249, 115, 22, 0.3)"
  },
  {
    id: 5,
    title: "Project Management Tool",
    description: "Collaborative project management platform with real-time updates and team analytics.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "GraphQL", "Prisma", "Tailwind", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-indigo-500 to-purple-500",
    glowColor: "rgba(79, 70, 229, 0.3)"
  },
  {
    id: 6,
    title: "NFT Marketplace",
    description: "Decentralized NFT marketplace with smart contract integration and gas optimization.",
    image: "/api/placeholder/400/300",
    tags: ["Solidity", "Web3.js", "React", "IPFS", "Hardhat"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.3)"
  }
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge solutions that push boundaries and deliver exceptional user experiences
          </p>
        </motion.div>

        {/* Staggered masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative group ${index % 3 === 1 ? 'lg:mt-12' : ''} ${index % 3 === 2 ? 'lg:-mt-8' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Floating background elements */}
              <motion.div
                className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 blur-2xl`}
                animate={{
                  opacity: hoveredProject === project.id ? [0, 0.3, 0] : 0,
                  scale: hoveredProject === project.id ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main card container */}
              <motion.div
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  scale: 1.08,
                  z: 50,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Glassmorphism card with border glow */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />
                  </div>

                  {/* Enhanced image container */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Image container with enhanced display */}
                    <div className="relative h-56 overflow-hidden bg-zinc-900/50">
                      {/* Actual project image with loading state */}
                      {!imageErrors.has(project.id) && project.image !== "/api/placeholder/400/300" ? (
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={() => {
                            setImageErrors(prev => new Set(prev).add(project.id));
                          }}
                        />
                      ) : (
                        /* Enhanced Eye icon placeholder when no image */
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="relative"
                            animate={{
                              rotateY: hoveredProject === project.id ? [0, 360] : 0,
                              scale: hoveredProject === project.id ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          >
                            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-30 blur-2xl`} />
                            <div className={`absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br ${project.gradient} opacity-60 flex items-center justify-center shadow-2xl`}>
                              <Eye className={`w-12 h-12 text-white/80`} />
                            </div>
                            <motion.div
                              className={`absolute inset-0 w-24 h-24 rounded-full border-2 border-white/20`}
                              animate={{
                                rotate: [0, 360],
                                borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.2)'],
                              }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                          </motion.div>
                        </div>
                      )}
                      
                      {/* Animated gradient overlay for both image and placeholder */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 0.3 : 0 }}
                      />
                      
                      {/* Subtle scanlines effect */}
                      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.1)_0,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_2px)]" />
                      
                      {/* Corner glow effect */}
                      <motion.div
                        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      />
                    </div>

                    {/* Hover overlay with enhanced buttons */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        backdropFilter: hoveredProject === project.id ? 'blur(8px)' : 'blur(0px)'
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center gap-6">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: 10,
                            backgroundColor: 'rgba(255, 255, 255, 0.25)'
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={24} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: -10,
                            backgroundColor: 'rgba(255, 255, 255, 0.25)'
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={24} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-lg text-zinc-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-zinc-100/10 py-1 px-2 rounded-full text-zinc-400 text-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced view all section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex flex-col items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.p
              className="text-zinc-400 text-lg mb-2"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Ready to explore more?
            </motion.p>
            <motion.a
              href="https://github.com/LouieJae"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <Github size={24} className="relative z-10" />
              <span className="relative z-10">Explore Full Portfolio</span>
              <motion.div
                className="absolute -right-2 -top-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
