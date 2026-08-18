import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 md:py-48 bg-black text-white flex items-center justify-center text-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] font-serif leading-[1.1] mb-6 sm:mb-8">
          LET'S BUILD SOMETHING GREAT
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-2xl font-serif italic mb-10 sm:mb-16">
          "Have an idea, project or collaboration in mind?"
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <a href="mailto:hello@example.com" className="group flex flex-col items-center gap-2">
            <span className="text-sm tracking-[0.2em] font-medium uppercase group-hover:text-gray-400 transition-colors">EMAIL US</span>
            <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#" className="group flex flex-col items-center gap-2">
            <span className="text-sm tracking-[0.2em] font-medium uppercase group-hover:text-gray-400 transition-colors">LINKEDIN</span>
            <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#" className="group flex flex-col items-center gap-2">
            <span className="text-sm tracking-[0.2em] font-medium uppercase group-hover:text-gray-400 transition-colors">INSTAGRAM</span>
            <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#" className="group flex flex-col items-center gap-2">
            <span className="text-sm tracking-[0.2em] font-medium uppercase group-hover:text-gray-400 transition-colors">GITHUB</span>
            <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
