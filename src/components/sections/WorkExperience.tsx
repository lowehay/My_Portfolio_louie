'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Front-End Developer",
    company: "Classify Inc.",
    period: "July 2024 - Present",
    description: "Leading front-end development initiatives, implementing modern React applications with TypeScript and Next.js. Focused on creating responsive, user-friendly interfaces with smooth animations.",
    type: "Regular"
  },
  {
    role: "Junior Web Developer",
    company: "Classify Inc.",
    period: "February 2024 - July 2024",
    description: "Developed and maintained web applications using React and Django. Collaborated on UI/UX improvements and implemented responsive designs across multiple projects.",
    type: "Job Order"
  },
  {
    role: "Full Stack Developer (OJT)",
    company: "Classify Inc.",
    period: "September 2023 - January 2024",
    description: "Completed comprehensive training in full-stack development. Gained hands-on experience with React, PHP, and database management while contributing to real projects.",
    type: "OJT"
  }
];

export function WorkExperience() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-amber-400 mb-6"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Professional Journey
          </motion.h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A chronological exploration of my evolution through different roles and responsibilities at Classify Inc.
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/50 via-emerald-500/50 to-amber-500/50"></div>
          <div className="block md:hidden absolute left-4 w-0.5 h-full bg-gradient-to-b from-purple-500/50 via-emerald-500/50 to-amber-500/50"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex md:items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Enhanced timeline dot with glow */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-6 h-6 rounded-full border-2 border-zinc-900 flex items-center justify-center ${
                    exp.type === 'Regular' ? 'bg-purple-500' :
                    exp.type === 'Job Order' ? 'bg-emerald-500' :
                    'bg-amber-500'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      exp.type === 'Regular' ? 'bg-purple-300' :
                      exp.type === 'Job Order' ? 'bg-emerald-300' :
                      'bg-amber-300'
                    }`} />
                  </div>
                  <div className={`absolute inset-0 rounded-full ${
                    exp.type === 'Regular' ? 'bg-purple-500' :
                    exp.type === 'Job Order' ? 'bg-emerald-500' :
                    'bg-amber-500'
                  } blur-md opacity-50 animate-pulse`} />
                </motion.div>

                {/* Enhanced card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-12 md:pl-0`}>
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-emerald-600/20 to-amber-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-zinc-900/80 backdrop-blur-md border border-zinc-700/30 rounded-2xl p-8 hover:border-zinc-600/50 transition-all duration-300 overflow-hidden">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-5 rounded-2xl" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='60' height='60' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px',
                      }} />
                      
                      {/* Floating particles */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {Array.from({ length: 6 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{
                              left: `${15 + (i * 12) % 70}%`,
                              top: `${20 + (i * 15) % 60}%`,
                              background: `linear-gradient(45deg, ${
                                exp.type === 'Regular' ? '#c084fc' :
                                exp.type === 'Job Order' ? '#34d399' :
                                '#fbbf24'
                              }, transparent)`,
                            }}
                            animate={{
                              y: [-5, 5, -5],
                              x: [-3, 3, -3],
                              opacity: [0.3, 0.8, 0.3],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 3 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </motion.div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.span 
                            className={`px-3 py-1.5 text-xs font-medium rounded-full backdrop-blur-sm ${
                              exp.type === 'Regular' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                              exp.type === 'Job Order' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                              'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {exp.type}
                          </motion.span>
                          <motion.div
                            className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-600 to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        <motion.h3 
                          className="text-2xl font-bold text-zinc-100 mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          {exp.role}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-lg bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent font-medium mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          {exp.company}
                        </motion.p>
                        
                        <motion.p 
                          className="text-sm text-zinc-400 mb-4 font-mono tracking-wide"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          {exp.period}
                        </motion.p>
                        
                        <motion.p 
                          className="text-zinc-300 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          {exp.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
