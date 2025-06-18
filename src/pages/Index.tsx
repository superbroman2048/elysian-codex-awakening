
import { useState, useEffect } from 'react';
import { StickyBanner } from '@/components/StickyBanner';
import { Navigation } from '@/components/Navigation';
import { HeroBanner } from '@/components/HeroBanner';
import { AboutUs } from '@/components/AboutUs';
import { Academics } from '@/components/Academics';
import { Admissions } from '@/components/Admissions';
import { Facilities } from '@/components/Facilities';
import { CoCurricular } from '@/components/CoCurricular';
import { EventsNews } from '@/components/EventsNews';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { ContactFooter } from '@/components/ContactFooter';
import { BackToTop } from '@/components/BackToTop';
import { CursorTrail } from '@/components/CursorTrail';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Interactive Cursor Trail */}
      <CursorTrail />
      
      {/* Sticky Banner */}
      <StickyBanner />
      
      {/* Main Navigation */}
      <Navigation scrolled={scrolled} />
      
      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <HeroBanner />
        
        {/* About Us - Interactive Helix */}
        <AboutUs />
        
        {/* Academics - Cerebral Nexus */}
        <Academics />
        
        {/* Admissions */}
        <Admissions />
        
        {/* Facilities */}
        <Facilities />
        
        {/* Co-curricular & Sports */}
        <CoCurricular />
        
        {/* Events & News */}
        <EventsNews />
        
        {/* Gallery */}
        <Gallery />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Contact & Footer */}
        <ContactFooter />
      </main>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Index;
