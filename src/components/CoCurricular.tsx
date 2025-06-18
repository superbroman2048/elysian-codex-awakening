
import React from 'react';

export const CoCurricular = () => {
  const activities = [
    'Music', 'Theatre', 'Dance', 'Art', 'Debate',
    'NCC', 'Yoga', 'Shooting', 'Taekwondo'
  ];

  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-charcoal-grey mb-4">
            Co-curricular & Sports
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center">
                  <h3 className="font-poppins text-xl font-semibold text-charcoal-grey">
                    {activity}
                  </h3>
                </div>
                <div className="flip-card-back text-white">
                  <h3 className="font-poppins text-xl font-semibold">
                    {activity} Excellence
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
