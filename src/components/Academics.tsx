
import React from 'react';

export const Academics = () => {
  return (
    <section id="academics" className="py-20 bg-charcoal-grey relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="nexus-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-off-white mb-4">
            The Nexus of Knowledge
          </h2>
          <p className="font-nunito text-xl text-off-white/80 max-w-3xl mx-auto">
            Explore our comprehensive academic streams designed for future leaders
          </p>
        </div>

        {/* Subject Streams */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {['Science', 'Commerce', 'Humanities'].map((stream) => (
            <div key={stream} className="glass-card p-8 rounded-xl text-center">
              <h3 className="font-poppins text-2xl font-bold text-white mb-4">{stream}</h3>
              <p className="font-nunito text-white/80">
                Comprehensive curriculum designed to excel in {stream.toLowerCase()} fields
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Ticker */}
        <div className="bg-energetic-red p-4 rounded-lg overflow-hidden">
          <div className="animate-ticker text-white font-nunito text-lg whitespace-nowrap">
            🏆 Students Scored 100% in Mathematics & Computer Science • 
            🎯 CBSE Excellence Awards Winner • 
            📚 National Science Olympiad Champions • 
            🌟 100% Board Results Since 2015
          </div>
        </div>

        {/* Downloads */}
        <div className="text-center mt-12">
          <div className="space-x-4">
            <button className="fortune-button">Download Syllabus</button>
            <button className="fortune-button">Exam Pattern</button>
            <button className="fortune-button">CBSE Guidelines</button>
          </div>
        </div>
      </div>
    </section>
  );
};
