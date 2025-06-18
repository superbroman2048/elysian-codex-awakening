
import React from 'react';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-charcoal-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-off-white mb-4">
            Gallery
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative group cursor-pointer">
              <div className="w-full h-48 bg-gray-600 rounded-lg"></div>
              <div className="absolute inset-0 bg-energetic-red/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-poppins">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
