
import React, { useEffect } from 'react';

export const CursorTrail = () => {
  useEffect(() => {
    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX - 4 + 'px';
      trail.style.top = e.clientY - 4 + 'px';
      
      document.body.appendChild(trail);
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 500);
    };

    let throttleTimer: number | null = null;
    const throttledCreateTrail = (e: MouseEvent) => {
      if (throttleTimer === null) {
        throttleTimer = window.setTimeout(() => {
          createTrail(e);
          throttleTimer = null;
        }, 50);
      }
    };

    document.addEventListener('mousemove', throttledCreateTrail);
    
    return () => {
      document.removeEventListener('mousemove', throttledCreateTrail);
      if (throttleTimer) {
        clearTimeout(throttleTimer);
      }
    };
  }, []);

  return null;
};
