
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop')", 
          transform: `translateY(${offset}px)`,
          backgroundPosition: 'center 50%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span 
            className={`inline-block text-dental-secondary font-medium mb-4 tracking-wider uppercase text-lg transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Premium Dental Experience
          </span>
          <h1 
            className={`heading-xl text-white mb-6 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Your Smile, <span className="text-dental-secondary italic">Our Passion</span>
          </h1>
          <p 
            className={`text-xl text-white/90 mb-8 leading-relaxed max-w-2xl transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Experience exceptional dental care in a comfortable and modern environment. 
            Our team of experts is dedicated to providing the highest quality treatments,
            tailored to your unique needs.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#booking" 
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Book Appointment</span>
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
            <a 
              href="#services" 
              className="btn-secondary group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <span className="absolute inset-0 bg-dental-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-light mb-2 text-dental-secondary">Discover More</span>
          <div className="w-10 h-10 rounded-full border border-dental-secondary flex items-center justify-center">
            <ArrowDown size={20} className="text-dental-secondary" />
          </div>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
