import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TeamCarousel from '../components/TeamCarousel';
import MemberProfile from '../components/MemberProfile';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import type { TeamMember } from '../data/members';

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* We add an AnimatePresence here for the MemberProfile full-screen modal */}
        <TeamCarousel onMemberSelect={(member) => setSelectedMember(member)} />
        <AnimatePresence>
          {selectedMember && (
            <MemberProfile 
              member={selectedMember} 
              onClose={() => setSelectedMember(null)} 
            />
          )}
        </AnimatePresence>
        
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
