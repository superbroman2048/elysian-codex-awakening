
import React from 'react';

export const Facilities = () => {
  const facilities = [
    'Smart Classrooms',
    'Science & Robotics Labs', 
    'Library',
    'Sports Complex',
    'Infirmary',
    'School Buses',
    'Cafeteria'
  ];

  return (
    <section id="facilities" className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-charcoal-grey mb-4">
            A World of Opportunity
          </h2>
          <p className="font-nunito text-xl text-charcoal-grey/80">
            State-of-the-art facilities designed for holistic development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div key={facility} className="fortune-card text-center">
              <h3 className="font-poppins text-xl font-semibold text-charcoal-grey mb-4">
                {facility}
              </h3>
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <p className="font-nunito text-charcoal-grey/70">
                Modern {facility.toLowerCase()} equipped with latest technology
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
