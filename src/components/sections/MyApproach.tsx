'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { RotateCcw, Eye, Sparkles, Target } from 'lucide-react';

const approachItems = [
  {
    title: "The Seer",
    subtitle: "Vision & Planning",
    color: "from-purple-900/50 to-purple-950/50",
    description: "I envision the complete user journey, mapping out intuitive flows and ensuring every interaction serves a purpose. My planning phase focuses on creating seamless experiences that delight users.",
    keywords: ["User Research", "Wireframing", "User Flows", "Information Architecture"]
  },
  {
    title: "The Architect",
    subtitle: "Design & Structure",
    color: "from-emerald-900/50 to-emerald-950/50",
    description: "I build robust, scalable architectures using modern frameworks. Every component is crafted with precision, ensuring maintainability and performance at every level.",
    keywords: ["Component Design", "Responsive Layout", "Performance", "Code Quality"]
  },
  {
    title: "The Alchemist",
    subtitle: "Refine & Polish",
    color: "from-amber-900/50 to-amber-950/50",
    description: "I transform functional interfaces into magical experiences through smooth animations, micro-interactions, and pixel-perfect attention to detail.",
    keywords: ["Animations", "Micro-interactions", "Polish", "User Delight"]
  }
];

export function MyApproach() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
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
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-amber-400 mb-6"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            My Approach
          </motion.h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A mystical journey through three transformative phases that bring digital dreams to life
          </p>
        </motion.div>

        {/* Enhanced layout with staggered cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {approachItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative group ${index % 3 === 1 ? 'lg:mt-16' : ''} ${index % 3 === 2 ? 'lg:-mt-12' : ''}`}
              style={{ perspective: '1200px' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced floating particles */}
              {hoveredCard === index && (
                <>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute pointer-events-none w-1 h-1 rounded-full"
                      style={{
                        left: `${10 + (i * 8) % 80}%`,
                        top: `${20 + (i * 12) % 60}%`,
                        background: `linear-gradient(45deg, ${item.color.includes('purple') ? '#a855f7' : item.color.includes('emerald') ? '#10b981' : '#f59e0b'}, transparent)`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.2, 0.5],
                      }}
                      transition={{
                        duration: 4 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </>
              )}

              {/* Enhanced glowing border effects */}
              <motion.div
                className={`absolute -inset-3 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 blur-2xl`}
                animate={{
                  opacity: hoveredCard === index ? [0, 0.4, 0] : 0,
                  scale: hoveredCard === index ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="relative w-[280px] h-[480px] mx-auto"
                style={{ transformStyle: 'preserve-3d' }}
                initial={false}
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                whileHover={{ 
                  rotateY: flippedCards[index] ? 0 : 180,
                  rotateX: 8,
                  scale: 1.05,
                  z: 20,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                  <div className={`relative w-full h-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700/20 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl transition-all duration-500 overflow-hidden`}>
                    {/* Animated cosmic background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 blur-3xl`}
                      animate={{
                        opacity: hoveredCard === index ? [0.1, 0.3, 0.1] : 0.1,
                        scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Mystical texture overlay */}
                    <div className="absolute inset-0 opacity-40 rounded-3xl" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='40' height='40' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
                      backgroundSize: '40px 40px',
                    }} />
                    
                    {/* Glowing orbs */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                        animate={{
                          scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                          opacity: hoveredCard === index ? [0.6, 1, 0.6] : 0.6,
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                      />
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                        animate={{
                          scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                          opacity: hoveredCard === index ? [0.6, 1, 0.6] : 0.6,
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center space-y-4 px-4">
                      {/* Smooth Roman Numeral */}
                      <motion.div 
                        className="text-7xl font-serif font-bold text-zinc-400/20 relative"
                        animate={{
                          color: hoveredCard === index ? 
                            (item.color.includes('purple') ? '#c084fc' : 
                             item.color.includes('emerald') ? '#34d399' : '#fbbf24') : '#a1a1aa',
                          textShadow: hoveredCard === index ? 
                            (item.color.includes('purple') ? '0 0 20px rgba(192, 132, 252, 0.3)' : 
                             item.color.includes('emerald') ? '0 0 20px rgba(52, 211, 153, 0.3)' : '0 0 20px rgba(251, 191, 36, 0.3)') : 'none',
                          scale: hoveredCard === index ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        {index === 0 ? 'I' : index === 1 ? 'II' : 'III'}
                        <motion.div
                          className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-lg"
                          animate={{
                            opacity: hoveredCard === index ? 0.3 : 0,
                            scale: hoveredCard === index ? 1 : 0.9,
                          }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </motion.div>

                      {/* Smooth mystical symbol */}
                      <motion.div 
                        className="relative w-28 h-28 mb-2"
                        animate={{
                          rotate: hoveredCard === index ? 180 : 0,
                          scale: hoveredCard === index ? 1.05 : 1,
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      >
                        {/* Subtle outer ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border opacity-20"
                          style={{ borderColor: item.color.includes('purple') ? '#c084fc' : item.color.includes('emerald') ? '#34d399' : '#fbbf24' }}
                          animate={{
                            scale: hoveredCard === index ? 1.05 : 1,
                            opacity: hoveredCard === index ? 0.4 : 0.2,
                            rotate: hoveredCard === index ? 90 : 0,
                          }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                        
                        {/* Inner mystical symbol */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {item.title === "The Seer" && (
                            <div className="relative">
                              <motion.div
                                className="w-20 h-20 rounded-full border border-purple-400/30 flex items-center justify-center backdrop-blur-sm"
                                animate={{
                                  borderColor: hoveredCard === index ? ['#c084fc', '#a855f7', '#c084fc'] : '#c084fc',
                                  boxShadow: hoveredCard === index ? 
                                    ['0 0 20px rgba(192, 132, 252, 0.2)', '0 0 40px rgba(192, 132, 252, 0.4)', '0 0 20px rgba(192, 132, 252, 0.2)'] : 
                                    '0 0 20px rgba(192, 132, 252, 0.1)',
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                              >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center">
                                  <Eye className="w-4 h-4 text-purple-300" />
                                </div>
                              </motion.div>
                              {/* Subtle glow effect */}
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                animate={{
                                  boxShadow: hoveredCard === index ? 
                                    '0 0 15px rgba(192, 132, 252, 0.2)' : 
                                    '0 0 8px rgba(192, 132, 252, 0.1)',
                                }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                              />
                            </div>
                          )}
                          {item.title === "The Architect" && (
                            <div className="relative">
                              <motion.div
                                className="w-16 h-16 border border-emerald-400/20 rounded-lg transform rotate-45 flex items-center justify-center backdrop-blur-sm"
                                animate={{
                                  borderColor: hoveredCard === index ? '#34d399' : 'transparent',
                                  rotate: hoveredCard === index ? 135 : 45,
                                  boxShadow: hoveredCard === index ? 
                                    '0 0 15px rgba(52, 211, 153, 0.15)' : 
                                    '0 0 8px rgba(52, 211, 153, 0.05)',
                                }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                              >
                                <div className="w-6 h-6 border border-emerald-400/40 rounded flex items-center justify-center">
                                  <Target className="w-3 h-3 text-emerald-300" />
                                </div>
                              </motion.div>
                            </div>
                          )}
                          {item.title === "The Alchemist" && (
                            <div className="relative">
                              <motion.div
                                className="w-16 h-16 rounded-full border border-amber-400/20 flex items-center justify-center backdrop-blur-sm"
                                animate={{
                                  borderColor: hoveredCard === index ? '#fbbf24' : 'transparent',
                                  boxShadow: hoveredCard === index ? 
                                    '0 0 15px rgba(251, 191, 36, 0.15)' : 
                                    '0 0 8px rgba(251, 191, 36, 0.05)',
                                }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                              >
                                <div className="relative">
                                  <Sparkles className="w-5 h-5 text-amber-300" />
                                  <motion.div
                                    className="absolute -inset-1 bg-gradient-to-r from-amber-400/15 to-transparent rounded-full blur-sm"
                                    animate={{
                                      scale: hoveredCard === index ? 1.1 : 1,
                                      opacity: hoveredCard === index ? 0.4 : 0.2,
                                    }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                  />
                                </div>
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </motion.div>

                      {/* Smooth title section */}
                      <div className="text-center space-y-1">
                        <motion.div 
                          className="text-lg font-serif text-zinc-200 tracking-wider uppercase"
                          animate={{
                            letterSpacing: hoveredCard === index ? '0.2em' : '0.15em',
                            color: hoveredCard === index ? '#f3f4f6' : '#d4d4d8',
                          }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {item.title}
                        </motion.div>
                        <motion.div 
                          className="text-xs text-zinc-400 font-mono"
                          animate={{
                            opacity: hoveredCard === index ? 0.9 : 0.6,
                          }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {item.subtitle}
                        </motion.div>
                      </div>

                      {/* Subtle corner decorations */}
                      <motion.div 
                        className="absolute top-4 left-4 w-3 h-3 border-l border-t border-zinc-600/40"
                        animate={{
                          borderColor: hoveredCard === index ? 
                            (item.color.includes('purple') ? '#c084fc' : 
                             item.color.includes('emerald') ? '#34d399' : '#fbbf24') : '#525252',
                          opacity: hoveredCard === index ? 0.8 : 0.4,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      <motion.div 
                        className="absolute top-4 right-4 w-3 h-3 border-r border-t border-zinc-600/40"
                        animate={{
                          borderColor: hoveredCard === index ? 
                            (item.color.includes('purple') ? '#c084fc' : 
                             item.color.includes('emerald') ? '#34d399' : '#fbbf24') : '#525252',
                          opacity: hoveredCard === index ? 0.8 : 0.4,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      <motion.div 
                        className="absolute bottom-4 left-4 w-3 h-3 border-l border-b border-zinc-600/40"
                        animate={{
                          borderColor: hoveredCard === index ? 
                            (item.color.includes('purple') ? '#c084fc' : 
                             item.color.includes('emerald') ? '#34d399' : '#fbbf24') : '#525252',
                          opacity: hoveredCard === index ? 0.8 : 0.4,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      <motion.div 
                        className="absolute bottom-4 right-4 w-3 h-3 border-r border-b border-zinc-600/40"
                        animate={{
                          borderColor: hoveredCard === index ? 
                            (item.color.includes('purple') ? '#c084fc' : 
                             item.color.includes('emerald') ? '#34d399' : '#fbbf24') : '#525252',
                          opacity: hoveredCard === index ? 0.8 : 0.4,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />

                      {/* Subtle divider */}
                      <motion.div 
                        className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"
                        animate={{
                          scaleX: hoveredCard === index ? 1.1 : 1,
                          opacity: hoveredCard === index ? 0.5 : 0.3,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      
                      {/* Reveal indicator */}
                      <motion.div 
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 text-zinc-400/70 text-xs select-none pointer-events-none"
                        animate={{
                          opacity: (hoveredCard === index || flippedCards[index]) ? 0.8 : 0.4,
                          y: (hoveredCard === index || flippedCards[index]) ? [0, -2, 0] : 0,
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <motion.div
                          animate={{ 
                            rotate: (hoveredCard === index || flippedCards[index]) ? 360 : 0,
                            scale: flippedCards[index] ? 0.8 : 1
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <RotateCcw size={12} />
                        </motion.div>
                        <span className="font-mono tracking-wider">
                          {flippedCards[index] ? 'BACK' : 'REVEAL'}
                        </span>
                      </motion.div>
                    </div>

                    {/* Interactive glow ring */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border border-white/10"
                      animate={{
                        borderColor: hoveredCard === index ? ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)'] : 'rgba(255,255,255,0.1)',
                        scale: hoveredCard === index ? [1, 1.02, 1] : 1,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <div className="relative w-full h-full bg-zinc-900/95 backdrop-blur-sm border border-zinc-600/50 rounded-2xl p-6 flex flex-col overflow-hidden">
                    {/* Subtle mystical glow effect */}
                    <motion.div
                      className="absolute -inset-px bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300"
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -inset-px bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-15 blur-xs transition-all duration-300"
                    />
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-3xl`} />
                    </motion.div>
                    
                    {/* Animated particles */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                      {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 12}%`,
                            top: `${30 + (i % 3) * 20}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                    
                    {/* Background with mystical texture */}
                    <div className="absolute inset-0 opacity-25 rounded-2xl bg-zinc-900/60" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                      backgroundSize: '100px 100px',
                      backgroundRepeat: 'repeat'
                    }} />
                    
                    {/* Reveal animation overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"
                      initial={{ y: '100%' }}
                      whileHover={{ y: '-100%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="flex justify-between items-center mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <motion.h3 
                          className="text-lg font-bold text-transparent bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text"
                          animate={{ 
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          style={{ backgroundSize: "200% 200%" }}
                        >
                          REVEALED
                        </motion.h3>
                        <motion.div 
                          className="text-xs text-zinc-400 font-mono"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {item.title}
                        </motion.div>
                      </motion.div>
                      
                      <motion.p 
                        className="text-zinc-300 text-sm leading-relaxed mb-4 flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {item.description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <h4 className="text-sm font-bold text-zinc-100 mb-2">Key Focus:</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.keywords.map((keyword, idx) => (
                            <motion.span 
                              key={idx} 
                              className="text-xs px-2 py-1 bg-zinc-800/80 rounded-full text-zinc-300 border border-zinc-700/50"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.5 }}
                              whileHover={{ 
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderColor: "rgba(255, 255, 255, 0.2)"
                              }}
                            >
                              {keyword}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Mobile Flip Icon Button - Outside Card */}
              <motion.button
                onClick={() => handleCardFlip(index)}
                className="md:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 z-20 border-2 border-zinc-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                aria-label={flippedCards[index] ? 'Flip back' : 'Flip to details'}
              >
                <RotateCcw size={16} className={flippedCards[index] ? 'rotate-180' : ''} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
