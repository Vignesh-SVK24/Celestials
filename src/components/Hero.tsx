import React from 'react';
import { motion } from 'framer-motion';

import { getImageUrl } from '../utils/image';

export default function Hero() {
  const title = "CELESTIAL";
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-center bg-black overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between h-full z-10">
        
        {/* Text Content */}
        <div className="flex-1 w-full md:pr-10 mt-12 md:mt-0 z-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-xs tracking-[0.3em] text-gray-400 mb-6 font-medium"
          >
            PORTFOLIO
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.9] -ml-2 mb-6 text-white flex">
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{ 
                  duration: 0.8, 
                  ease: [0.2, 0.65, 0.3, 0.9], 
                  delay: 1.2 + (index * 0.05) 
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-2xl md:text-4xl font-serif mb-8 text-gray-300"
          >
            CREW OF SIX
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed mb-12"
          >
            Six minds. One vision. Infinite possibilities.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex gap-6 items-center"
          >
            <a href="#team" className="text-xs tracking-[0.15em] border-b border-white pb-1 hover:text-gray-300 transition-colors uppercase">
              MEET THE TEAM
            </a>
            <a href="#portfolio" className="text-xs tracking-[0.15em] border-b border-transparent hover:border-white pb-1 text-gray-400 hover:text-white transition-colors uppercase">
              VIEW PORTFOLIO
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full h-[40vh] md:h-[70vh] relative">
          <motion.div
            initial={{ scale: 1.1, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="w-full h-full relative"
          >
            <motion.div 
              className="w-full h-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img 
                src={getImageUrl('/hero-celestial.jpg')} 
                alt="Celestial Crew of Six" 
                className="w-full h-full object-cover object-center rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500 rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
        
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-[0.2em] text-gray-500 rotate-90 origin-left translate-y-8 -translate-x-3 mb-8 absolute left-1/2 uppercase">SCROLL</span>
        <motion.div 
          className="w-[1px] h-16 bg-white/20 relative overflow-hidden mt-20"
        >
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
