import { useState, useEffect, useRef } from 'react';

// A custom hook to track scroll progress within an element
const useScrollProgress = (ref: React.RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const scrollableHeight = scrollHeight - clientHeight;
      if (scrollableHeight > 0) {
        setProgress(scrollTop / scrollableHeight);
      }
    };

    element.addEventListener('scroll', handleScroll, { passive: true });
    return () => element.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};

export const LivingArchives = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(scrollRef);

  const historyNodes = [
    { id: 'founding', year: '2010', title: 'The Founding Vision', story: 'Born from a dream to revolutionize education through empathy and innovation.' },
    { id: 'expansion', year: '2015', title: 'Global Expansion', story: 'Opened our doors to international minds, creating a diverse learning ecosystem.' },
    { id: 'innovation', year: '2020', title: 'Digital Transformation', story: 'Pioneered hybrid learning that blends physical and digital realms.' },
    { id: 'future', year: '2025', title: 'The Next Horizon', story: 'Venturing into personalized AI mentorship and sustainable campus initiatives.' }
  ];

  const philosophyNodes = [
    { id: 'empathy', title: 'Radical Empathy', description: 'Understanding diverse perspectives as the foundation of all learning.' },
    { id: 'innovation', title: 'Fearless Innovation', description: 'Encouraging bold thinking and creative problem-solving.' },
    { id: 'growth', title: 'Limitless Growth', description: 'Believing that every mind has infinite potential waiting to be unlocked.' },
    { id: 'synergy', title: 'Creative Synergy', description: 'Fostering collaboration between the arts, sciences, and humanities.' }
  ];

  return (
    <section id="living-archives" className="min-h-screen py-24 bg-abyssal-blue relative overflow-hidden flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="font-exo text-4xl md:text-5xl text-parchment-white mb-4 tracking-mind elysian-text-glow">
          The Living Archives
        </h2>
        <p className="font-sora text-lg text-lunar-teal max-w-2xl mx-auto leading-heart">
          Scroll to witness the DNA of our institution unfold.
        </p>
      </div>

      <div className="w-full h-[60vh] flex-grow" style={{ perspective: '1000px' }}>
        <div ref={scrollRef} className="h-full w-full relative overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
          <div className="relative h-[250vh] w-full">
            {historyNodes.map((node, index) => {
              const nodeProgress = (index + 0.5) / historyNodes.length;
              const rotation = -180 + (scrollProgress * 360);
              const yPos = index * 55; // Spacing
              return (
                <div
                  key={node.id}
                  className="absolute w-1/2 p-4 transition-opacity duration-300"
                  style={{
                    top: `${yPos}vh`,
                    left: '0%',
                    opacity: Math.max(0, 1 - Math.abs(scrollProgress - nodeProgress) * 4),
                    transform: `translateX(-50%) rotateY(${rotation}deg) translateX(150%) rotateY(${-rotation}deg)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="elysian-card text-right">
                    <div className="text-alchemic-gold font-exo text-lg mb-2">{node.year}</div>
                    <h4 className="text-parchment-white font-sora font-semibold">{node.title}</h4>
                    <p className="text-lunar-teal/80 text-sm font-sora">{node.story}</p>
                  </div>
                </div>
              );
            })}

            {philosophyNodes.map((node, index) => {
              const nodeProgress = (index + 0.5) / philosophyNodes.length;
              const rotation = (scrollProgress * 360);
              const yPos = index * 60; // Spacing
              return (
                <div
                  key={node.id}
                  className="absolute w-1/2 p-4 transition-opacity duration-300"
                  style={{
                    top: `${yPos}vh`,
                    right: '0%',
                     opacity: Math.max(0, 1 - Math.abs(scrollProgress - nodeProgress) * 4),
                    transform: `translateX(50%) rotateY(${rotation}deg) translateX(-150%) rotateY(${-rotation}deg)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="elysian-card text-left">
                     <h4 className="text-parchment-white font-sora font-semibold mb-2">{node.title}</h4>
                     <p className="text-lunar-teal/80 text-sm font-sora">{node.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
