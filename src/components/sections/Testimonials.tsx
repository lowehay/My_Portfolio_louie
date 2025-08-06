'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';


const testimonials = {
  en: [
    {
      name: "Royd Catalunes",
      role: "Back-end Developer",
      company: "Classfiy",
      content: "Louie is excellent at his work. He's very precise and knows how to build responsive and clean interfaces. He contributed a lot to our projects.",
      rating: 5
    },
    {
      name: "Charles Alegre",
      role: "Back-end Developer",
      company: "Classfiy",
      content: "Louie is great at creating user-friendly interfaces. He made our system easier to understand and more visually appealing.",
      rating: 5
    },
    {
      name: "Burleign Ponce",
      role: "Quality Assurance",
      company: "Classfiy",
      content: "Louie is professional and reliable. Not only can he code well, but he also understands good design and user experience.",
      rating: 5
    }
  ],
  tl: [
    {
      name: "Royd Catalunes",
      role: "Back-end Developer",
      company: "Classfiy",
      content: "Magaling si Louie sa trabaho niya. Maayos siya gumawa ng responsive at malinis na interface. Malaki ang naitulong niya sa mga project namin.",
      rating: 5
    },
    {
      name: "Charles Alegre",
      role: "Back-end Developer",
      company: "Classfiy",
      content: "Magaling si Louie gumawa ng user-friendly interface. Mas madali naming naiintindihan at nagustuhan ng users ang sistema.",
      rating: 5
    },
    {
      name: "Burleign Ponce",
      role: "Quality Assurance",
      company: "Classfiy",
      content: "Propesyonal at maaasahan si Louie. Marunong siya sa coding at may magandang sense sa design para sa user experience.",
      rating: 5
    }
  ],
  hil: [
    {
      name: "Royd Catalunes",
      role: "Back-end Developer",
      company: "Classfiy",
      content: "Si Louie maayo gid magtrabaho. He's very precise and knows how to build responsive and visually clean interfaces. Daku ang nabulig niya sa amon mga project.",
      rating: 5
    },
    {
      name: "Charles Alegre",
      role: "Back-end Developer",
      company: "Classfiy",
      content: "Maayo gid si Louie maghimo sang user-friendly interface. He made our system easier to understand and visually appealing sa users.",
      rating: 5
    },
    {
      name: "Burleign Ponce",
      role: "Quality Assurance",
      company: "Classfiy",
      content: "Professional kag masaligan si Louie. Not only maayo siya mag-code, but he also understands good design para sa user experience.",
      rating: 5
    }
  ]
};

export function Testimonials() {
  const [language, setLanguage] = useState<'en' | 'tl' | 'hil'>('hil');

  const tabs = [
    { label: "English", value: "en" },
    { label: "Tagalog", value: "tl" },
    { label: "Hiligaynon", value: "hil" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
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
            Voices of Trust
          </motion.h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Authentic testimonials from colleagues and collaborators who've experienced my work firsthand
          </p>
        </motion.div>

        {/* Enhanced language selector */}
        <motion.div 
          className="mt-8 flex justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.value}
              onClick={() => setLanguage(tab.value as 'en' | 'tl' | 'hil')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                language === tab.value
                  ? "bg-gradient-to-r from-purple-500/20 to-emerald-500/20 text-white border border-purple-500/30"
                  : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 border border-zinc-700/50"
              }`}
            >
              <span className="relative z-10">{tab.label}</span>
              {language === tab.value && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-emerald-500/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {testimonials[language].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group flex"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 via-emerald-600/10 to-amber-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative bg-zinc-900/80 backdrop-blur-md border border-zinc-700/30 rounded-2xl p-8 hover:border-zinc-600/50 transition-all duration-300 overflow-hidden flex flex-col flex-grow">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 rounded-2xl" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='60' height='60' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px',
                }} />

                {/* Floating stars */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/60"
                      style={{
                        left: `${20 + (i * 10) % 60}%`,
                        top: `${15 + (i * 12) % 70}%`,
                      }}
                      animate={{
                        y: [-3, 3, -3],
                        x: [-2, 2, -2],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.3, 0.8],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Enhanced rating stars */}
                  <motion.div 
                    className="flex mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg 
                        key={i} 
                        className="w-5 h-5 text-amber-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatDelay: 3 + i * 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </motion.div>
                  
                  {/* Quote with enhanced styling */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex-grow"
                  >
                    <div className="relative mb-6">
                      <motion.div
                        className="absolute -top-2 -left-2 text-6xl text-purple-500/20 font-serif"
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        &quot;
                      </motion.div>
                      <p className="text-zinc-300 leading-relaxed text-lg relative z-10">
                        {testimonial.content}
                      </p>
                      <motion.div
                        className="absolute -bottom-2 -right-2 text-6xl text-purple-500/20 font-serif transform rotate-180"
                        animate={{ rotate: [175, 185, 175] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        &quot;
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="border-t border-zinc-700/50 pt-4 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-bold text-zinc-100 text-lg mb-1">{testimonial.name}</p>
                    <p className="text-sm text-zinc-400">
                      <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                        {testimonial.role}
                      </span>
                      <span className="text-zinc-500 mx-2">•</span>
                      <span className="text-zinc-300">{testimonial.company}</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
