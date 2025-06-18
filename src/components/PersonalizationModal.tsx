
import { useState } from 'react';

interface PersonalizationModalProps {
  onPathSelect: (path: string) => void;
}

export const PersonalizationModal = ({ onPathSelect }: PersonalizationModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation after component mounts
  useState(() => {
    setTimeout(() => setIsVisible(true), 500);
  });

  const paths = [
    {
      id: 'student',
      title: 'I am a Future World-Changer',
      subtitle: 'Student',
      description: 'Discover your potential and shape tomorrow',
      icon: '🚀'
    },
    {
      id: 'parent',
      title: 'I am a Guardian of a Dream',
      subtitle: 'Parent',
      description: 'Nurture the next generation of innovators',
      icon: '🌱'
    },
    {
      id: 'educator',
      title: 'I am a Seeker of Knowledge',
      subtitle: 'Educator/Visitor',
      description: 'Explore the future of education',
      icon: '🔍'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-abyssal-blue">
      {/* Mandala Animation Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 relative">
          {/* Geometric Mandala Pattern */}
          <div className={`absolute inset-0 transition-all duration-2000 ease-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="w-full h-full border-2 border-alchemic-gold rounded-full animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 -mt-16 -ml-16 border border-lunar-teal rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 bg-gradient-to-r from-lunar-teal to-alchemic-gold rounded-full animate-pulse">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 transition-all duration-1000 delay-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Inspirational Quote */}
        <div className="text-center mb-12">
          <h1 className="font-exo text-3xl md:text-4xl text-parchment-white mb-4 elysian-text-glow tracking-mind">
            "The mind is not a vessel to be filled,<br />but a fire to be kindled."
          </h1>
          <p className="font-sora text-lunar-teal text-lg">
            Please wait while we light the spark...
          </p>
        </div>

        {/* Path Selection */}
        <div className="text-center mb-8">
          <h2 className="font-exo text-2xl text-alchemic-gold mb-8 tracking-mind">
            What path do you seek?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {paths.map((path) => (
              <button
                key={path.id}
                onClick={() => onPathSelect(path.id)}
                className="elysian-card group text-center p-8 hover:scale-105 transition-all duration-500"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {path.icon}
                </div>
                <h3 className="font-exo text-lg text-parchment-white mb-2 tracking-mind">
                  {path.title}
                </h3>
                <p className="text-lunar-teal text-sm mb-3">
                  {path.subtitle}
                </p>
                <p className="font-sora text-parchment-white/70 text-sm">
                  {path.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
