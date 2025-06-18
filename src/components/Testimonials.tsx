
import React from 'react';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-charcoal-grey mb-4">
            Testimonials
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <p className="font-nunito text-lg text-charcoal-grey mb-6 italic">
              "Fortune World School has provided my child with an excellent foundation for learning and growth."
            </p>
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h4 className="font-poppins font-semibold text-charcoal-grey">Parent Name</h4>
            <p className="font-nunito text-charcoal-grey/70">Parent of Class 8 Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};
