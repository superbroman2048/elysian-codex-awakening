
import { useState, useEffect } from 'react';
import { GenesisPortal } from '@/components/GenesisPortal';
import { PersonalizationModal } from '@/components/PersonalizationModal';
import { ControlCog } from '@/components/ControlCog';
import { LivingArchives } from '@/components/LivingArchives';
import { FloatingParticles } from '@/components/FloatingParticles';
import { CerebralNexus } from '@/components/CerebralNexus';

const Index = () => {
  const [userPath, setUserPath] = useState<string | null>(null);
  const [showPersonalization, setShowPersonalization] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if user has already personalized their experience
    const savedPath = localStorage.getItem('elysian-user-path');
    if (savedPath) {
      setUserPath(savedPath);
      setShowPersonalization(false);
      setIsInitialized(true);
    }
  }, []);

  const handlePathSelection = (path: string) => {
    setUserPath(path);
    localStorage.setItem('elysian-user-path', path);
    setShowPersonalization(false);
    setTimeout(() => setIsInitialized(true), 1000);
  };

  return (
    <div className="min-h-screen bg-abyssal-blue relative overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Control Cog */}
      <ControlCog />
      
      {/* Personalization Modal */}
      {showPersonalization && (
        <PersonalizationModal onPathSelect={handlePathSelection} />
      )}
      
      {/* Main Content */}
      {isInitialized && (
        <div className="relative z-10">
          {/* Chapter I: The Genesis Portal */}
          <GenesisPortal userPath={userPath} />
          
          {/* Chapter II: The Living Archives */}
          <LivingArchives />
          <CerebralNexus />


          
          {/* Disclaimer Footer */}
          <footer className="border-t border-lunar-teal/20 bg-abyssal-blue/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-8">
              <div className="text-center">
                <p className="text-lunar-teal/70 text-sm font-sora">
                  An AI Summer Camp creation by a digital architect in training. 
                  This is a conceptual vision, not the official school website.
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                  <a href="#" className="text-lunar-teal hover:text-alchemic-gold transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-lunar-teal hover:text-alchemic-gold transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="#" className="text-lunar-teal hover:text-alchemic-gold transition-colors duration-300">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
