
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface GenesisPortalProps {
  userPath: string | null;
}

export const GenesisPortal = ({ userPath }: GenesisPortalProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getPersonalizedGreeting = () => {
    switch (userPath) {
      case 'student':
        return 'Welcome, Future World-Changer';
      case 'parent':
        return 'Welcome, Guardian of a Dream';
      case 'educator':
        return 'Welcome, Seeker of Knowledge';
      default:
        return 'Welcome, Traveler';
    }
  };

  const scrollToNextSection = () => {
    document.getElementById('living-archives')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bioluminescent-bg"></div>
      
      {/* Interactive Light Field */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-lunar-teal/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Personalized Greeting */}
        <h1 className="font-exo text-5xl md:text-7xl lg:text-8xl text-parchment-white mb-6 tracking-mind">
          <span className="elysian-text-glow animate-glow-pulse">
            {getPersonalizedGreeting()}
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="font-sora text-2xl md:text-3xl text-lunar-teal mb-12 leading-heart">
          Sculpting the Future, One Mind at a Time
        </p>
        
        {/* Interactive Elements Hint */}
        <div className="mb-16">
          <p className="font-sora text-parchment-white/70 mb-8">
            Move your cursor to illuminate the path ahead
          </p>
          
          {/* Hotspots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['Collaboration', 'Innovation', 'Joy'].map((word, index) => (
              <div
                key={word}
                className="group relative p-6 rounded-lg border border-lunar-teal/20 hover:border-lunar-teal/60 transition-all duration-500 cursor-pointer neural-glow"
                style={{
                  transform: `translate(${(mousePosition.x - window.innerWidth / 2) * (0.02 + index * 0.01)}px, ${(mousePosition.y - window.innerHeight / 2) * (0.02 + index * 0.01)}px)`
                }}
              >
                <h3 className="font-exo text-xl text-alchemic-gold tracking-mind group-hover:scale-110 transition-transform duration-300">
                  {word}
                </h3>
                <div className="absolute inset-0 bg-gradient-to-r from-lunar-teal/10 to-alchemic-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <button
          onClick={scrollToNextSection}
          className="elysian-button inline-flex items-center space-x-3 group"
        >
          <span>Begin the Ascent</span>
          <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-lunar-teal to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};
