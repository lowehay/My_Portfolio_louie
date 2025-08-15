'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';

// Component for animated section headers
const AnimatedSectionHeader = ({ icon, title }: { icon: React.ReactNode, title: string }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.h3 
      ref={ref}
      className="text-2xl font-bold mb-6 flex items-center gap-3"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.span 
        className="text-blue-400"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 }
        }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {icon}
      </motion.span>
      {title}
    </motion.h3>
  );
};

// Component for animated skill bars
const SkillBar = ({ skill, index }: { skill: { name: string, level: number }, index: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-zinc-300">{skill.name}</span>
        <motion.span 
          className="text-zinc-400 text-xs"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            hidden: { width: 0 },
            visible: { width: `${skill.level}%` }
          }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

// Main Resume component
export default function Resume() {
  const [mounted, setMounted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Refs for scroll to section
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Add print-specific styling
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body {
          background: white !important;
          color: black !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        /* Hide all interactive elements */
        button, a[href], input, .cosmic-particles, nav, svg, .print-hidden {
          display: none !important;
        }
        /* Project links specifically need to be hidden */
        a.text-blue-400, a[href="#"] {
          display: none !important;
        }
        /* Override container styles */
        .bg-zinc-900/60 {
          background: white !important;
          box-shadow: none !important;
          border: none !important;
          padding-top: 0 !important;
          margin-top: 0 !important;
        }
        /* Clean text colors for print */
        .text-zinc-300, .text-zinc-400, .text-zinc-200 {
          color: #333 !important;
        }
        /* Background elements */
        .bg-zinc-800, .bg-zinc-800/50, .bg-blue-900/50 {
          background-color: #f0f0f0 !important;
        }
        .from-blue-500, .to-purple-500, .text-blue-400, .text-blue-300 {
          color: #2563eb !important;
        }
        .border-zinc-800, .border-zinc-700 {
          border-color: #e5e7eb !important;
        }
        /* Improved spacing */
        section {
          page-break-inside: avoid !important;
          margin-bottom: 1rem !important;
          break-inside: avoid !important;
        }
        h3, h4 {
          break-after: avoid !important;
        }
        .resume-container {
          width: 100% !important;
          max-width: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!mounted) return null;

  // Function to scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    setIsGeneratingPDF(true);
    setTimeout(() => {
      // In a real implementation, this would use html2canvas and jsPDF or a similar library
      // to generate a PDF from the resume content
      alert('Resume downloaded successfully!');
      setIsGeneratingPDF(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Cosmic effects */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="stars">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Page content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/" 
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 print-hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Portfolio
          </Link>
          
          <div className="flex items-center gap-4 print-hidden">
            {/* Quick navigation */}
            <div className="hidden md:flex items-center gap-2 bg-zinc-800/40 rounded-lg p-1">
              <button 
                onClick={() => scrollToSection(experienceRef)}
                className="px-3 py-1.5 text-sm rounded-md hover:bg-blue-500/20 text-zinc-300 hover:text-blue-400 transition-all"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection(skillsRef)}
                className="px-3 py-1.5 text-sm rounded-md hover:bg-blue-500/20 text-zinc-300 hover:text-blue-400 transition-all"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection(educationRef)}
                className="px-3 py-1.5 text-sm rounded-md hover:bg-blue-500/20 text-zinc-300 hover:text-blue-400 transition-all"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection(projectsRef)}
                className="px-3 py-1.5 text-sm rounded-md hover:bg-blue-500/20 text-zinc-300 hover:text-blue-400 transition-all"
              >
                Projects
              </button>
            </div>
            
            <motion.button
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              disabled={isGeneratingPDF}
            >
              {isGeneratingPDF ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download PDF
                </>
              )}
            </motion.button>
          </div>
        </div>

        {/* Resume paper effect */}
        <motion.div 
          className="bg-zinc-900/60 backdrop-blur-lg rounded-xl border border-zinc-800 shadow-xl max-w-5xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Resume header */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 px-8 py-12 border-b border-zinc-800">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Louie Jae S. Maravillosa
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-400 mb-4">Front-End Developer & UI/UX Designer</h2>
              <p className="text-zinc-300 max-w-2xl leading-relaxed">
                Detail-oriented front-end developer with a passion for building high-quality,
                user-friendly digital experiences. Proficient in a range of technologies, with a focus
                on performance, accessibility, and design.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Sto Nino, South Cotabato, Philippines</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>louiejaemaravillosa24@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>09307735536</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resume content */}
          <div className="p-8">
            <div className="max-w-4xl mx-auto grid gap-10">
              {/* Work Experience */}
              <section ref={experienceRef}>
                <AnimatedSectionHeader 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  } 
                  title="Work Experience" 
                />

                <div className="space-y-8">
                  <motion.div 
                    className="relative border-l-2 border-zinc-800 pl-6 pb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-blue-400"></div>
                    <div>
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <h4 className="text-xl font-bold">Junior Web Developer</h4>
                        <span className="text-zinc-400 text-sm bg-zinc-800/50 px-3 py-1 rounded-full">
                          2024 - Present
                        </span>
                      </div>
                      <h5 className="text-blue-400 mb-3">Classify Inc.</h5>
                      <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                        <li>Develop responsive web applications using modern JavaScript frameworks</li>
                        <li>Implement UI components with React and Tailwind CSS</li>
                        <li>Collaborate with the design team to translate mockups into functional web interfaces</li>
                        <li>Optimize website performance and ensure cross-browser compatibility</li>
                        <li>Participate in code reviews and implement feedback from senior developers</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Skills */}
              <section ref={skillsRef}>
                <AnimatedSectionHeader 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  } 
                  title="Skills" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-blue-400">Technical Skills</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'React & Next.js', level: 95 },
                        { name: 'TypeScript', level: 90 },
                        { name: 'Tailwind CSS', level: 95 },
                        { name: 'Framer Motion', level: 85 },
                        { name: 'UI/UX Design', level: 80 },
                      ].map((skill, index) => (
                        <SkillBar key={index} skill={skill} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-blue-400">Additional Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'JavaScript (ES6+)', 'HTML5 & CSS3', 'Git & GitHub',
                        'Responsive Design', 'SASS/SCSS', 'Redux',
                        'Jest & Testing Library', 'GraphQL', 'Webpack',
                        'Figma & Adobe XD', 'Storybook', 'Performance Optimization',
                        'Accessibility (WCAG)', 'RESTful APIs', 'Vercel & Netlify'
                      ].map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-zinc-800 rounded-full text-sm text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section ref={educationRef}>
                <AnimatedSectionHeader 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  } 
                  title="Education" 
                />

                <div className="space-y-6">
                  <div className="relative border-l-2 border-zinc-800 pl-6 pb-2">
                    <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-blue-400"></div>
                    <div>
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <h4 className="text-xl font-bold">Bachelor of Science in Information Technology</h4>
                        <span className="text-zinc-400 text-sm bg-zinc-800/50 px-3 py-1 rounded-full">
                          2018 - 2022
                        </span>
                      </div>
                      <h5 className="text-blue-400 mb-2">STI Koronadal</h5>
                      <p className="text-zinc-300">
                        Specialized in Web Development and Front-End Technologies.
                      </p>
                    </div>
                  </div>

                  <div className="relative border-l-2 border-zinc-800 pl-6">
                    <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-blue-400"></div>
                    <div>
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <h4 className="text-xl font-bold">UI/UX Design Certification</h4>
                        <span className="text-zinc-400 text-sm bg-zinc-800/50 px-3 py-1 rounded-full">
                          2020
                        </span>
                      </div>
                      <h5 className="text-blue-400 mb-2">Interaction Design Foundation</h5>
                      <p className="text-zinc-300">
                        Completed advanced coursework in user interface design, user experience research, 
                        and interactive prototyping.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Notable Projects */}
              <section ref={projectsRef}>
                <AnimatedSectionHeader 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  } 
                  title="Notable Projects" 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700">
                    <h4 className="text-lg font-bold text-white mb-2">Cosmic Portfolio</h4>
                    <p className="text-zinc-300 mb-3">
                      Modern personal portfolio with cosmic theme featuring interactive animations and 3D elements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Next.js</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Framer Motion</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Tailwind CSS</span>
                    </div>
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  
                  <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700">
                    <h4 className="text-lg font-bold text-white mb-2">GalaxyUI Component Library</h4>
                    <p className="text-zinc-300 mb-3">
                      A cosmic-themed component library for React with 30+ customizable UI components.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">React</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Storybook</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">SCSS</span>
                    </div>
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>

        {/* Print instructions */}
        <div className="mt-8 text-center text-zinc-500 print:hidden">
          <p className="text-sm">
            This resume has been designed to be print-friendly. <br />
            Press <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">Ctrl/Cmd + P</kbd> to print or save as PDF.
          </p>
        </div>
      </div>
    </div>
  );
}
