import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col text-center md:text-left">
          <span className="text-xl font-serif font-bold tracking-widest mb-1">CELESTIAL</span>
          <span className="text-xs text-gray-500 tracking-[0.2em] uppercase">CREW OF SIX</span>
        </div>

        <div className="text-xs text-gray-500 tracking-widest">
          &copy; 2026 CELESTIAL CREW
        </div>

        <button 
          onClick={scrollToTop}
          className="text-xs tracking-[0.2em] uppercase hover:text-gray-400 transition-colors flex items-center gap-2 group"
        >
          BACK TO TOP 
          <span className="group-hover:-translate-y-1 transition-transform">↑</span>
        </button>

      </div>
    </footer>
  );
}
