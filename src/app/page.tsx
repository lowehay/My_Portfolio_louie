'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WorkExperience } from '@/components/sections/WorkExperience';
import { Projects } from '@/components/sections/Projects';
import { MyApproach } from '@/components/sections/MyApproach';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  const scrollYValue = useTransform(scrollY, (value) => value || 0);

  const [particles, setParticles] = useState<
  { left: string; top: string; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      duration: 12 + Math.random() * 6,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      
      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      {/* Enhanced dark background with glassmorphism effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Dynamic scrolling spotlights */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: useTransform(scrollYValue, (value) => 
            `radial-gradient(circle at 50% ${50 + value * 0.1}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          ),
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: useTransform(scrollYValue, (value) => 
            `radial-gradient(circle at ${50 + value * 0.05}% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)`
          ),
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="fixed inset-0 overflow-hidden z-0">
        {particles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-zinc-500/30 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Enhanced glassmorphism navigation */}
        <motion.nav
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/20 hover:shadow-blue-500/10 transition-all duration-300 hover:border-white/20">
            <motion.div 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              LM
            </motion.div>
            
            <motion.div 
              className="hidden md:flex items-center gap-4 lg:gap-6 text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a 
                href="#home" 
                onClick={(e) => handleScroll(e, '#home')} 
                className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a 
                href="#about" 
                onClick={(e) => handleScroll(e, '#about')} 
                className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a 
                href="#experience" 
                onClick={(e) => handleScroll(e, '#experience')} 
                className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')} 
                className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a 
                href="#approach" 
                onClick={(e) => handleScroll(e, '#approach')} 
                className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Approach
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a 
                href="#testimonials" 
                onClick={(e) => handleScroll(e, '#testimonials')} 
                className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')} 
                className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            </motion.div>
            
            {/* Floating glass orb */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <p className="md:hidden text-center text-xs text-zinc-400 mt-1 animate-pulse">
              ← Swipe menu →
            </p>

            {/* Mobile Swipeable Menu - shows partial items & swipe indicator */}
            <div className="relative md:hidden w-full max-w-[240px]">
              {/* Swipe hint arrows */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <div className="bg-gradient-to-r from-zinc-950 to-transparent h-full w-6" />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <div className="bg-gradient-to-l from-zinc-950 to-transparent h-full w-6" />
              </div>

              {/* Swipeable container */}
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-2 pl-1 pr-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Approach', href: '#approach' },
                  { name: 'Testimonials', href: '#testimonials' },
                  { name: 'Contact', href: '#contact' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-sm text-zinc-300 hover:text-white transition-colors whitespace-nowrap snap-start min-w-[100px] max-w-[110px] text-center px-3 py-2 hover:bg-white/5 rounded-full border border-zinc-700/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>



        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <WorkExperience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="approach">
            <MyApproach />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <Footer />
          </section>
        </main>
      </div>
    </div>
  );
}
