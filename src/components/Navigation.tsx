
import React from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#academics', label: 'Academics' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-warm-beige shadow-lg' : 'bg-warm-beige/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://fortuneworldschool.com/assets/web/images/fw-logo.png" 
              alt="Fortune World School"
              className="h-12 w-auto"
              loading="lazy"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-poppins font-medium text-charcoal-grey hover:text-energetic-red transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-energetic-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="w-full h-0.5 bg-charcoal-grey"></span>
              <span className="w-full h-0.5 bg-charcoal-grey"></span>
              <span className="w-full h-0.5 bg-charcoal-grey"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
