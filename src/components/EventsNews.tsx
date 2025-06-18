
import React from 'react';

export const EventsNews = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-charcoal-grey mb-4">
            Events & News
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="fortune-card">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-poppins text-xl font-semibold text-charcoal-grey mb-2">
                Event Headline {i + 1}
              </h3>
              <p className="font-nunito text-charcoal-grey/70 mb-4">
                Short description of the event or news...
              </p>
              <span className="inline-block bg-energetic-red text-white px-3 py-1 rounded-full text-sm">
                #AnnualDay
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="fortune-button">
            Download Academic Calendar
          </button>
        </div>
      </div>
    </section>
  );
};
