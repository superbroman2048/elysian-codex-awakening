import React, { useEffect, useState } from 'react';

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newDot = { x: e.clientX, y: e.clientY, id: trailId++ };
      
      setTrail(prev => {
        const newTrail = [...prev, newDot];
        // Keep only last 10 dots
        if (newTrail.length > 10) {
          return newTrail.slice(-10);
        }
        return newTrail;
      });

      // Remove dot after animation
      setTimeout(() => {
        setTrail(prev => prev.filter(dot => dot.id !== newDot.id));
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="fixed w-2 h-2 bg-energetic-red rounded-full pointer-events-none z-50 animate-pulse"
          style={{
            left: dot.x - 4,
            top: dot.y - 4,
            opacity: 1 - (index / trail.length),
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
