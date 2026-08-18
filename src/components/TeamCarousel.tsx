import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, wrap } from 'framer-motion';
import { members } from '../data/members';
import type { TeamMember } from '../data/members';
import { MoveLeft, MoveRight } from 'lucide-react';
import { getImageUrl } from '../utils/image';

interface TeamCarouselProps {
  onMemberSelect: (member: TeamMember) => void;
}

export default function TeamCarousel({ onMemberSelect }: TeamCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap the index
  const activeIndex = wrap(0, members.length, page);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const activeMember = members[activeIndex];

  // We want to show left, center, right.
  const leftIndex = wrap(0, members.length, page - 1);
  const rightIndex = wrap(0, members.length, page + 1);

  return (
    <section id="team" className="py-24 md:py-32 bg-black text-white relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif mb-2">Our Team</h2>
          <p className="text-gray-400 tracking-widest text-xs uppercase">Meet the Crew</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => paginate(-1)}
            className="p-3 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous member"
          >
            <MoveLeft size={24} strokeWidth={1} />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="p-3 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next member"
          >
            <MoveRight size={24} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[60vh] flex items-center justify-center perspective-[1000px]">
        {/* Left Member */}
        <div 
          className="absolute left-0 md:left-10 z-0 hidden md:block w-1/4 h-3/4 opacity-60 cursor-pointer"
          onClick={() => paginate(-1)}
        >
          <motion.div
            key={page - 1}
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full h-full"
          >
            <div className="w-full h-full rounded-[100%] overflow-hidden">
              <img src={getImageUrl(members[leftIndex].image)} alt={members[leftIndex].name} className="w-full h-full object-cover grayscale brightness-75" />
            </div>
          </motion.div>
        </div>

        {/* Center Active Member */}
        <div className="relative z-10 w-3/4 md:w-1/3 h-full cursor-pointer group" onClick={() => onMemberSelect(activeMember)}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, scale: 0.8, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: direction > 0 ? -100 : 100, position: 'absolute' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full h-full absolute inset-0"
            >
              <div className="w-full h-full rounded-[100%] md:rounded-[100px] overflow-hidden relative border border-white/10 group-hover:border-white/30 transition-colors">
                <img src={getImageUrl(activeMember.image)} alt={activeMember.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs tracking-widest uppercase border border-white/20">View Profile</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Member */}
        <div 
          className="absolute right-0 md:right-10 z-0 hidden md:block w-1/4 h-3/4 opacity-60 cursor-pointer"
          onClick={() => paginate(1)}
        >
          <motion.div
            key={page + 1}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full h-full"
          >
            <div className="w-full h-full rounded-[100%] overflow-hidden">
              <img src={getImageUrl(members[rightIndex].image)} alt={members[rightIndex].name} className="w-full h-full object-cover grayscale brightness-75" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Active Member Info */}
      <div className="mt-12 md:mt-16 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-4xl font-serif mb-2">{activeMember.name}</h3>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">{activeMember.role}</p>
            <p className="max-w-xl mx-auto text-sm text-gray-300 font-light leading-relaxed italic">"{activeMember.bio}"</p>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-12 flex items-center gap-4">
          <div className="text-sm font-serif tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')} <span className="text-gray-600 mx-2">/</span> 06
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden gap-8 mt-8">
          <button onClick={() => paginate(-1)} className="text-white hover:text-gray-400 transition-colors uppercase text-xs tracking-widest p-2">Prev</button>
          <button onClick={() => paginate(1)} className="text-white hover:text-gray-400 transition-colors uppercase text-xs tracking-widest p-2">Next</button>
        </div>
      </div>
    </section>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
