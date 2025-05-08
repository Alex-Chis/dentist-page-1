
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-poppins font-bold text-dental-primary">
            DentalCare
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-medium text-dental-dark hover:text-dental-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-dental-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book Appointment
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-dental-primary"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-medium text-dental-dark hover:text-dental-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#booking" 
              className="bg-dental-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
