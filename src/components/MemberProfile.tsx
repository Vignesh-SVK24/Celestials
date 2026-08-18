import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Globe, Mail } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import type { TeamMember } from '../data/members';

interface MemberProfileProps {
  member: TeamMember;
  onClose: () => void;
}

export default function MemberProfile({ member, onClose }: MemberProfileProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#f5f0eb] text-black overflow-y-auto overflow-x-hidden"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-50 p-4 bg-black text-white rounded-full hover:bg-black/80 transition-colors"
        aria-label="Close profile"
      >
        <X size={24} />
      </button>

      <div className="container mx-auto px-6 md:px-12 py-24 min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Image (Arch shaped on desktop) */}
        <div className="lg:w-2/5 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="w-full aspect-[3/4] rounded-t-full rounded-b-xl overflow-hidden relative"
          >
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Social Links Desktop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex gap-6 items-center text-gray-500"
          >
            {member.linkedin !== '#' && <a href={member.linkedin} className="hover:text-black hover:scale-110 transition-all"><FaLinkedinIn size={20} /></a>}
            {member.instagram !== '#' && <a href={member.instagram} className="hover:text-black hover:scale-110 transition-all"><FaInstagram size={20} /></a>}
            {member.github !== '#' && <a href={member.github} className="hover:text-black hover:scale-110 transition-all"><FaGithub size={20} /></a>}
            {member.portfolio !== '#' && <a href={member.portfolio} className="hover:text-black hover:scale-110 transition-all"><Globe size={20} /></a>}
            {member.email && <a href={member.email} className="hover:text-black hover:scale-110 transition-all"><Mail size={20} /></a>}
          </motion.div>
        </div>

        {/* Right: Info */}
        <div className="lg:w-3/5 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">{member.role}</p>
            <h2 className="text-5xl md:text-7xl font-serif mb-12">{member.name}</h2>

            {/* Social Links Mobile */}
            <div className="flex lg:hidden gap-6 items-center text-gray-500 mb-12">
              {member.linkedin !== '#' && <a href={member.linkedin} className="hover:text-black transition-colors"><FaLinkedinIn size={20} /></a>}
              {member.instagram !== '#' && <a href={member.instagram} className="hover:text-black transition-colors"><FaInstagram size={20} /></a>}
              {member.github !== '#' && <a href={member.github} className="hover:text-black transition-colors"><FaGithub size={20} /></a>}
              {member.portfolio !== '#' && <a href={member.portfolio} className="hover:text-black transition-colors"><Globe size={20} /></a>}
              {member.email && <a href={member.email} className="hover:text-black transition-colors"><Mail size={20} /></a>}
            </div>

            <div className="space-y-16">
              {/* About */}
              <section>
                <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 border-b border-black/10 pb-4">About Me</h3>
                <p className="text-lg leading-relaxed text-gray-700 font-serif italic">{member.bio}</p>
              </section>

              {/* Skills */}
              <section>
                <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 border-b border-black/10 pb-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 border border-black/20 rounded-full text-sm font-medium tracking-wide">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Experience */}
              <section>
                <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 border-b border-black/10 pb-4">Experience</h3>
                <div className="space-y-8">
                  {member.experience.map((exp, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-sm font-bold text-gray-400">{exp.year}</div>
                      <div className="md:col-span-3">
                        <h4 className="font-serif text-xl font-bold mb-2">{exp.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 border-b border-black/10 pb-4">Achievements</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700 font-serif text-lg">
                  {member.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </section>

              {/* Projects */}
              {member.projects.length > 0 && (
                <section>
                  <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 border-b border-black/10 pb-4">Selected Projects</h3>
                  <div className="space-y-12">
                    {member.projects.map((proj, i) => (
                      <div key={i} className="border border-black/10 p-8 rounded-xl bg-white/50">
                        <h4 className="font-serif text-2xl font-bold mb-4">{proj.title}</h4>
                        <p className="text-gray-600 mb-6">{proj.description}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {proj.technologies.map((tech, j) => (
                            <span key={j} className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-black/5 rounded-full">{tech}</span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          {proj.link !== '#' && <a href={proj.link} className="text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-500 transition-colors">View Project</a>}
                          {proj.github !== '#' && <a href={proj.github} className="text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-500 transition-colors">GitHub</a>}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
