
import React from 'react';

export const HeroBanner = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://fortuneworldschool.com/uploads/slider/videos/1740726135_videofws.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Empowering Young Minds
          <span className="block text-4xl md:text-6xl text-energetic-red">Since 2012</span>
        </h1>
        
        <p className="font-nunito text-xl md:text-2xl mb-8 animate-fade-in animation-delay-300">
          Academic Excellence, Global Vision, Moral Integrity.
        </p>
        
        <a 
          href="#about"
          className="fortune-button inline-block animate-fade-in animation-delay-600"
        >
          Explore Our Journey
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
