
import React from 'react';

export const ContactFooter = () => {
  return (
    <section id="contact" className="py-20 bg-charcoal-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-off-white mb-4">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="text-off-white">
            <h3 className="font-poppins text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <p className="font-nunito">
                <strong>Address:</strong> Sector 110, Noida, Uttar Pradesh
              </p>
              <p className="font-nunito">
                <strong>Phone:</strong> +91 XXX XXX XXXX
              </p>
              <p className="font-nunito">
                <strong>Email:</strong> info@fortuneworldschool.com
              </p>
              <p className="font-nunito">
                <strong>Office Hours:</strong> Mon-Sat, 8:00 AM - 4:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="font-poppins text-2xl font-semibold text-charcoal-grey mb-6">Inquiry Form</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg font-nunito"
              />
              <input
                type="text"
                placeholder="Class"
                className="w-full p-3 border border-gray-300 rounded-lg font-nunito"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full p-3 border border-gray-300 rounded-lg font-nunito"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg font-nunito"
              ></textarea>
              <button type="submit" className="fortune-button w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-600 mt-20 pt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="https://fortuneworldschool.com/assets/web/images/fw-logo.png" 
                alt="Fortune World School"
                className="h-10 w-auto mr-4"
                loading="lazy"
              />
              <span className="font-nunito text-off-white">
                © 2024 Fortune World School. Educational Excellence Since 2012.
              </span>
            </div>
            <div className="text-off-white/70 font-nunito text-sm">
              Created by Atharv Mishra - AI Summer Camp Project
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
