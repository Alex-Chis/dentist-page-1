
import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (imageRef.current) {
            imageRef.current.classList.add('translate-x-0', 'opacity-100');
            imageRef.current.classList.remove('-translate-x-10', 'opacity-0');
          }
          
          if (contentRef.current) {
            contentRef.current.classList.add('translate-x-0', 'opacity-100');
            contentRef.current.classList.remove('translate-x-10', 'opacity-0');
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 relative bg-white" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-32 h-32 bg-dental-accent rounded-br-full opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-dental-accent rounded-tl-full opacity-70"></div>
      
      <div className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div 
            ref={imageRef} 
            className="relative transition-all duration-1000 -translate-x-10 opacity-0"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1974&auto=format&fit=crop" 
                alt="Modern dental clinic" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-dental-primary p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-white text-lg font-medium leading-relaxed">
                Over 15 years of excellence in dental care
              </p>
            </div>
            
            <div className="absolute -top-8 -left-8 bg-dental-secondary p-6 rounded-full shadow-lg hidden lg:flex items-center justify-center">
              <span className="text-4xl font-bold text-white">98%</span>
              <span className="text-white text-sm ml-1">satisfaction</span>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="transition-all duration-1000 delay-300 translate-x-10 opacity-0"
          >
            <span className="text-dental-primary font-medium uppercase tracking-wider">About Us</span>
            <h2 className="heading-lg mb-6 mt-2">Why Choose Our <span className="text-dental-primary">Dental Clinic</span>?</h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              At DentalCare, we combine advanced technology with compassionate care to deliver exceptional dental services. 
              Our state-of-the-art facility and experienced team ensure that your dental health is in the best hands possible.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-dental-primary mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={24} className="animate-pulse-border" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Dental Team</h3>
                  <p className="text-gray-600 leading-relaxed">Our dentists bring years of experience and specialized training to provide exceptional care that ensures your comfort and satisfaction.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-dental-primary mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={24} className="animate-pulse-border" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">State-of-the-Art Facility</h3>
                  <p className="text-gray-600 leading-relaxed">Our clinic is equipped with the latest dental technology for precise diagnosis, effective treatments, and comfortable patient experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-dental-primary mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={24} className="animate-pulse-border" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Patient-Centered Approach</h3>
                  <p className="text-gray-600 leading-relaxed">We prioritize your comfort and satisfaction throughout every step of your dental journey with personalized care and attention.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-dental-primary mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={24} className="animate-pulse-border" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Care</h3>
                  <p className="text-gray-600 leading-relaxed">From preventive care to complex procedures, we provide all the dental services you need in one convenient location.</p>
                </div>
              </div>
            </div>
            
            <a href="#booking" className="btn-primary inline-flex items-center group">
              <span>Schedule a Consultation</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
