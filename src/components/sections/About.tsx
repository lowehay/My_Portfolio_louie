'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Twitter, MapPin, Calendar, Award, Zap, Target, Users, Heart, Instagram, Facebook } from 'lucide-react';

export function About() {
  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-zinc-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Story Behind
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> The Code</span>
          </motion.h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From curiosity to creation — my journey through pixels, passion, and purpose
          </p>
        </motion.div>

        {/* Enhanced Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 auto-rows-auto">
          
          {/* Origin Story - Large spanning card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:row-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              <h3 className="text-2xl font-semibold text-zinc-100">Where It All Began</h3>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                My obsession with computers started way before I knew what coding was. I&apos;d always wonder how they
                managed to achieve such effects.I&apos;d spend hours
                at local computer shops, not just playing games like GTA and Counter-Strike, but
                thinking about how the interfaces worked, why certain buttons felt better to click, and
                how animations made everything feel more alive and I&apos;d always wonder how they
                managed to achieve such effects.
              </p>
              <p>
                I had all these ideas about how games and websites should look, but I didn&apos;t know how 
                to make them real. I&apos;d sketch designs on paper, imagining better layouts for gaming 
                forums and cooler HUDs for games, frustrated that I couldn&apos;t bring them to life.
              </p>
              <p>
                When the pandemic hit, I finally had the time to start learning. What began as &ldquo;let me 
                figure out how to build a simple website&rdquo; turned into an obsession with React, animations, 
                and design systems. I went from copying YouTube tutorials to creating my own design 
                language, combining my gaming aesthetic with modern web experiences.
              </p>
            </div>
          </motion.div>

          {/* Profile Card - Wider and positioned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-zinc-700">
                <Image 
                  src="/me.png" 
                  alt="Louie Maravillosa"
                  fill
                  className="object-cover"
                  sizes="192px"
                  priority
                  onError={(e) => {
                    const fallback = document.createElement('div');
                    fallback.className = 'absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600';
                    fallback.innerHTML = `
                      <span class="text-4xl font-bold text-white">LM</span>
                    `;
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-zinc-100 mb-2">Louie Jae Maravillosa</h3>
            <p className="text-purple-400 mb-6 text-lg">Front-End Developer</p>
            
            <div className="space-y-3 text-lg text-zinc-400">
              <div className="flex items-center justify-center space-x-3">
                <MapPin size={20} />
                <span>Philippines</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Calendar size={20} />
                <span>1+ Years</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-zinc-800 rounded-full text-zinc-400 hover:text-purple-400 hover:bg-zinc-700 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline - Compact card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-zinc-100 mb-4">The Journey So Far</h3>
            <div className="space-y-4">
              {[
                { year: "2020", title: "Pandemic Pivot", desc: "Started learning HTML/CSS during lockdown" },
                { year: "2021", title: "First Portfolio", desc: "Launched personal website with simple yet aesthetically pleasing designs" },
                { year: "2022", title: "React Discovery", desc: "Fell in love with component-based design" },
                { year: "2023", title: "Design Systems", desc: "Created consistent design language across projects" },
                { year: "2024", title: "Motion Mastery", desc: "Specialized in Framer Motion and micro-interactions" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-purple-400 font-semibold text-sm">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-1.5" />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-zinc-100 text-sm">{item.title}</h4>
                    <p className="text-xs text-zinc-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Design Evolution - Compact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-zinc-100 mb-4">Design Evolution</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-zinc-100 text-sm mb-1">Gaming Aesthetic</h4>
                <p className="text-xs text-zinc-400">
                  Dark themes, neon accents, HUD-inspired layouts from gaming days
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 text-sm mb-1">Minimalist Shift</h4>
                <p className="text-xs text-zinc-400">
                  Less is more, focusing on typography and whitespace
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 text-sm mb-1">Motion & Emotion</h4>
                <p className="text-xs text-zinc-400">
                  Micro-animations creating emotional connections
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 text-sm mb-1">Modern Fusion</h4>
                <p className="text-xs text-zinc-400">
                  Gaming aesthetics + clean design principles
                </p>
              </div>
            </div>
          </motion.div>

          {/* Philosophy - Compact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">My Philosophy</h3>
            <div className="space-y-3">
              {[
                { icon: Heart, title: "User-First", desc: "Code serves human experience" },
                { icon: Zap, title: "Performance", desc: "Fast, fluid interactions" },
                { icon: Target, title: "Purpose", desc: "Technology with intention" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-100 text-sm">{item.title}</h4>
                    <p className="text-xs text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
