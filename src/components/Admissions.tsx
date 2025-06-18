
import React from 'react';

export const Admissions = () => {
  return (
    <section id="admissions" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-charcoal-grey mb-4">
            The Path to Fortune
          </h2>
          <p className="font-nunito text-xl text-charcoal-grey/80">
            Begin your journey with us through our simple admission process
          </p>
        </div>

        {/* Admission Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center items-center space-x-4">
            {[
              { step: 1, title: 'Enquiry' },
              { step: 2, title: 'Tour' },
              { step: 3, title: 'Registration' },
              { step: 4, title: 'Test' },
              { step: 5, title: 'Admission' }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="bg-energetic-red text-white w-12 h-12 rounded-full flex items-center justify-center font-poppins font-bold">
                  {item.step}
                </div>
                <div className="ml-2 mr-4">
                  <span className="font-nunito font-semibold text-charcoal-grey">{item.title}</span>
                </div>
                {index < 4 && <div className="w-8 h-0.5 bg-energetic-red"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="text-center">
          <button className="fortune-button text-2xl px-12 py-6">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};
