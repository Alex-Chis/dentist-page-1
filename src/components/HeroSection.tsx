
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Calendar, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
      
      // Add depth effect to content
      if (heroRef.current) {
        const scrollPosition = window.pageYOffset;
        const heroElements = heroRef.current.querySelectorAll('.hero-animate');
        
        heroElements.forEach((element, index) => {
          const el = element as HTMLElement;
          const speed = 0.1 + (index * 0.05);
          el.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger entrance animation
    const entranceTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(entranceTimer);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Premium background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop')", 
          transform: `translateY(${offset}px)`,
          backgroundPosition: 'center 50%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-dental-primary/10 rounded-full filter blur-[120px] animate-float"></div>
      <div className="absolute left-20 bottom-1/4 w-64 h-64 bg-dental-secondary/20 rounded-full filter blur-[80px] animate-pulse-gentle"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge - Premium touch */}
          <span 
            className={cn(
              "inline-block py-2 px-4 mb-6 rounded-full backdrop-blur-md border border-white/20 text-dental-secondary font-medium tracking-wider uppercase text-sm transition-all duration-1000 transform hero-animate",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Trusted by 10,000+ Patients
          </span>
          
          {/* Main headline - More impactful */}
          <h1 
            className={cn(
              "heading-xl text-white mb-8 leading-tight transition-all duration-1000 delay-300 transform hero-animate",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Experience <span className="text-dental-secondary font-bold">Exceptional</span> Dental Care for Your Perfect Smile
          </h1>
          
          {/* Description with social proof */}
          <p 
            className={cn(
              "text-xl text-white/90 mb-10 leading-relaxed max-w-2xl transition-all duration-1000 delay-500 transform hero-animate",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Our award-winning dental clinic combines advanced technology with 
            personalized care to deliver treatments that transform lives. 
            Join thousands of satisfied patients who trust us with their smiles.
          </p>
          
          {/* Dual CTA with enhanced styling */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-5 mb-16 transition-all duration-1000 delay-700 transform hero-animate",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <a 
              href="#booking" 
              className="btn-primary group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg shadow-xl shadow-dental-primary/20 hover:shadow-dental-primary/40 transition-all duration-500"
            >
              <Calendar size={18} className="transition-transform duration-500 group-hover:scale-110" />
              <span className="relative z-10 font-medium">Book Your Appointment</span>
              <span className="absolute inset-0 bg-gradient-to-br from-dental-primary to-dental-primary/80 transform transition-transform duration-500 group-hover:scale-105"></span>
            </a>
            <a 
              href="tel:+1234567890" 
              className="btn-secondary group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg"
            >
              <PhoneCall size={18} className="transition-transform duration-500 group-hover:rotate-12" />
              <span className="relative z-10 font-medium">Call Us Now</span>
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-105"></span>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div 
            className={cn(
              "flex flex-wrap gap-8 items-center transition-all duration-1000 delay-900 transform hero-animate",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="flex items-center gap-2 text-white/80">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-500"></div>
                ))}
              </div>
              <span className="text-sm">Trusted by 10,000+ patients</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm">4.9/5 from 500+ reviews</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 group"
        aria-label="Scroll to services"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-light mb-2 text-dental-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore Our Services</span>
          <div className="w-12 h-12 rounded-full border border-dental-secondary/30 backdrop-blur-md flex items-center justify-center group-hover:border-dental-secondary/80 transition-all duration-300 group-hover:scale-110">
            <ArrowDown size={20} className="text-dental-secondary" />
          </div>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
