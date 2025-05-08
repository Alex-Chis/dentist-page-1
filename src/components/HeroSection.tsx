
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop')", 
          transform: `translateY(${offset}px)`,
          backgroundPosition: 'center 50%'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
            Your Smile, Our Passion
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Experience exceptional dental care in a comfortable and modern environment. 
            Our team of experts is dedicated to providing the highest quality treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a href="#booking" className="btn-primary">
              Book Appointment
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={30} />
      </a>
    </section>
  );
};

export default HeroSection;
