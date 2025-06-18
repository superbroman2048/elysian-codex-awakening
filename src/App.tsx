
import React from 'react';
import StickyBanner from './components/StickyBanner';
import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Facilities from './components/Facilities';
import CoCurricular from './components/CoCurricular';
import EventsNews from './components/EventsNews';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import CursorTrail from './components/CursorTrail';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <CursorTrail />
      <StickyBanner />
      <Navigation />
      <main>
        <HeroBanner />
        <AboutUs />
        <Academics />
        <Admissions />
        <Facilities />
        <CoCurricular />
        <EventsNews />
        <Gallery />
        <Testimonials />
        <ContactFooter />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
