
import { useState } from 'react';

export const LivingArchives = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const historyNodes = [
    { id: 'founding', year: '2010', title: 'The Founding Vision', story: 'Born from a dream to revolutionize education through empathy and innovation.' },
    { id: 'expansion', year: '2015', title: 'Global Expansion', story: 'Opened our doors to international minds, creating a truly diverse learning ecosystem.' },
    { id: 'innovation', year: '2020', title: 'Digital Transformation', story: 'Pioneered hybrid learning environments that blend physical and digital realms.' }
  ];

  const philosophyNodes = [
    { id: 'empathy', title: 'Radical Empathy', description: 'Understanding and embracing diverse perspectives as the foundation of all learning.' },
    { id: 'innovation', title: 'Fearless Innovation', description: 'Encouraging bold thinking and creative problem-solving in every discipline.' },
    { id: 'growth', title: 'Limitless Growth', description: 'Believing that every mind has infinite potential waiting to be unlocked.' }
  ];

  return (
    <section id="living-archives" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-exo text-4xl md:text-5xl text-parchment-white mb-6 tracking-mind elysian-text-glow">
            The Living Archives
          </h2>
          <p className="font-sora text-xl text-lunar-teal max-w-3xl mx-auto leading-heart">
            Explore the intertwined strands of our history and philosophy, 
            forming the DNA of educational excellence.
          </p>
        </div>

        {/* DNA Helix Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Helix Container */}
          <div className="relative h-96 overflow-hidden">
            {/* Left Strand - History */}
            <div className="absolute left-0 top-0 w-1/2 h-full">
              <h3 className="font-exo text-2xl text-alchemic-gold mb-8 text-center tracking-mind">
                Our History
              </h3>
              <div className="relative h-full">
                {historyNodes.map((node, index) => (
                  <div
                    key={node.id}
                    className={`absolute left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-500 ${
                      activeNode === node.id ? 'scale-110' : 'hover:scale-105'
                    }`}
                    style={{ top: `${(index + 1) * 25}%` }}
                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  >
                    <div className="elysian-card text-center p-4 max-w-xs">
                      <div className="text-alchemic-gold font-exo text-lg mb-2 tracking-mind">
                        {node.year}
                      </div>
                      <h4 className="text-parchment-white font-sora font-semibold mb-2">
                        {node.title}
                      </h4>
                      {activeNode === node.id && (
                        <p className="text-lunar-teal text-sm font-sora animate-fadeIn">
                          {node.story}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Strand - Philosophy */}
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <h3 className="font-exo text-2xl text-alchemic-gold mb-8 text-center tracking-mind">
                Our Philosophy
              </h3>
              <div className="relative h-full">
                {philosophyNodes.map((node, index) => (
                  <div
                    key={node.id}
                    className={`absolute right-1/2 transform translate-x-1/2 cursor-pointer transition-all duration-500 ${
                      activeNode === node.id ? 'scale-110' : 'hover:scale-105'
                    }`}
                    style={{ top: `${(index + 1) * 30}%` }}
                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  >
                    <div className="elysian-card text-center p-4 max-w-xs">
                      <h4 className="text-parchment-white font-sora font-semibold mb-2">
                        {node.title}
                      </h4>
                      {activeNode === node.id && (
                        <p className="text-lunar-teal text-sm font-sora animate-fadeIn">
                          {node.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M100 50 Q200 100 300 50 Q200 150 100 200 Q200 250 300 200"
                  stroke="url(#helixGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#61E8E1" />
                    <stop offset="50%" stopColor="#F4D03F" />
                    <stop offset="100%" stopColor="#61E8E1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="elysian-button">
            Discover Our Complete Story
          </button>
        </div>
      </div>
    </section>
  );
};
