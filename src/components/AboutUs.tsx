
import React, { useState } from 'react';
import { X } from 'lucide-react';

export const AboutUs = () => {
  const [showPrincipalMessage, setShowPrincipalMessage] = useState(false);

  const principalMessage = `"The whole purpose of education is to turn mirrors into windows." – Sydney J. Harris

Welcome to Fortune World School! Inspired by the words of Sydney J. Harris, we believe that education should be a window to new vistas and new opportunities for each child. Being the Principal of this school, I am enthusiastic about sharing with you how we strive to make learning a rewarding experience beyond the four walls of the classroom.

At Fortune World School, it is our endeavour to create an environment in which education would be the leading doorway to wider horizons. We are committed to providing a stimulating, invigorating, and supportive learning environment that will help foster inquiry, creativity, critical thinking, and lifelong learning among students. Our objective is to transform "mirrors" of knowledge into "windows" that open up a vista of opportunities.

Our curriculum is intended to inspire and engage on a very high level of critical thinking, creativity, and solution-finding for real-life problems. Our highly esteemed faculty members-merchants of passion and experience in teaching-will ensure that each student travels his or her unique educational journey to be prepared and equipped to enter the future with confidence and curiosity.

We also acknowledge the importance of growth and development through a more holistic approach. We support our academic programs with extracurricular activities, such as sports, arts, community service, and character-building activities, which further develop the many talents of our students. Fortune World School is inclusive and respectful, having welcomed students from different walks of life. We ensure the environment set forth is nurturing, where every child feels valued and well-equipped to work with his peers and build a strong supportive network that contributes toward his success.

Thank you for being a part of the Fortune World School family. We look forward to a year that is full of discovery, growth, and achievement.

Principal
Sonal Srivastava`;

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-warm-beige to-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-charcoal-grey mb-4">
            The Fortune Legacy
          </h2>
          <p className="font-nunito text-xl text-charcoal-grey/80 max-w-3xl mx-auto">
            Discover our journey of educational excellence and commitment to nurturing young minds
          </p>
        </div>

        {/* Interactive Helix Timeline */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Card 1: Our Story */}
            <div className="helix-card">
              <h3 className="font-poppins text-2xl font-bold text-energetic-red mb-4">Our Story</h3>
              <p className="font-nunito text-charcoal-grey leading-relaxed">
                Since 2012, Fortune World School has been at the forefront of educational innovation in Noida. 
                Our journey began with a vision to create an institution that combines academic rigor with 
                character development, preparing students not just for examinations, but for life itself.
              </p>
            </div>

            {/* Card 2: Principal's Message */}
            <div className="helix-card">
              <div className="flex items-center mb-4">
                <img 
                  src="https://fortuneworldschool.com/assets/web/images/principal.jpg"
                  alt="Principal Sonal Srivastava"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-energetic-red">Principal's Message</h3>
                  <p className="font-nunito text-charcoal-grey/70">Sonal Srivastava</p>
                </div>
              </div>
              <p className="font-nunito text-charcoal-grey mb-4">
                "The whole purpose of education is to turn mirrors into windows."
              </p>
              <button 
                onClick={() => setShowPrincipalMessage(true)}
                className="text-energetic-red font-poppins font-semibold hover:underline"
              >
                Read Full Message
              </button>
            </div>

            {/* Card 3: Mission */}
            <div className="helix-card">
              <h3 className="font-poppins text-2xl font-bold text-energetic-red mb-4">Our Mission</h3>
              <p className="font-nunito text-charcoal-grey leading-relaxed">
                To provide quality education that nurtures intellectual curiosity, emotional intelligence, 
                and social responsibility, preparing our students to become global citizens and leaders of tomorrow.
              </p>
            </div>

            {/* Card 4: Vision */}
            <div className="helix-card">
              <h3 className="font-poppins text-2xl font-bold text-energetic-red mb-4">Our Vision</h3>
              <p className="font-nunito text-charcoal-grey leading-relaxed">
                To be recognized as a premier educational institution that transforms lives through 
                innovative teaching methodologies, holistic development, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-poppins font-bold text-energetic-red mb-2">100%</div>
            <div className="font-nunito text-charcoal-grey">Board Results</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-poppins font-bold text-energetic-red mb-2">4 Acre</div>
            <div className="font-nunito text-charcoal-grey">Campus</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-poppins font-bold text-energetic-red mb-2">25+</div>
            <div className="font-nunito text-charcoal-grey">Activities</div>
          </div>
        </div>
      </div>

      {/* Principal Message Modal */}
      {showPrincipalMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowPrincipalMessage(false)}
              className="absolute top-4 right-4 text-charcoal-grey hover:text-energetic-red"
            >
              <X size={24} />
            </button>
            <div className="mb-6">
              <img 
                src="https://fortuneworldschool.com/assets/web/images/principal.jpg"
                alt="Principal Sonal Srivastava"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-poppins text-2xl font-bold text-center text-energetic-red">
                Message from Principal
              </h3>
            </div>
            <div className="font-nunito text-charcoal-grey leading-relaxed whitespace-pre-line">
              {principalMessage}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
