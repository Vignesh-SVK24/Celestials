import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { getImageUrl } from '../utils/image';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#e8e4df] text-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-serif tracking-tight mb-4 uppercase">Our Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col group"
            >
              <a 
                href={project.link !== '#' ? project.link : undefined}
                target={project.link !== '#' ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-full aspect-[4/5] overflow-hidden mb-8 bg-black/5 block cursor-pointer"
              >
                <img 
                  src={getImageUrl(project.image)} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                />
              </a>
              <h3 className="text-3xl font-serif mb-3 font-medium">{project.title}</h3>
              <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">{project.technologies.join(', ')}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 font-serif italic">{project.description}</p>
              
              <div className="flex gap-6 mt-auto">
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.2em] uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                    View
                  </a>
                )}
                {project.github !== '#' && (
                  <a href={project.github} className="text-xs font-bold tracking-[0.2em] uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
