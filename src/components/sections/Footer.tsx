'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold text-zinc-100 mb-2">
              Let&apos;s Create Something Amazing
            </h3>
            <p className="text-zinc-400">
              Ready to bring your ideas to life with modern web development
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            <a href="mailto:yourname@gmail.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-sm"
          >
            <p>&copy; 2024 Louie Jae Maravillosa. Crafted with passion and code.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
