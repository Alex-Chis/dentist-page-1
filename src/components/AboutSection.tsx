
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1974&auto=format&fit=crop" 
                alt="Modern dental clinic" 
                className="w-full h-auto"
              />
            </div>
            <div 
              className="absolute -bottom-8 -right-8 bg-dental-primary p-6 rounded-lg shadow-lg hidden md:block"
              style={{ maxWidth: '200px' }}
            >
              <p className="text-white text-lg font-medium">
                Over 15 years of excellence in dental care
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="heading-lg mb-6">Why Choose Our Dental Clinic?</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-dental-primary rounded-full p-1 text-white mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Expert Dental Team</h3>
                  <p className="text-gray-600">Our dentists bring years of experience and specialized training to provide exceptional care.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-primary rounded-full p-1 text-white mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">State-of-the-Art Facility</h3>
                  <p className="text-gray-600">Our clinic is equipped with the latest dental technology for precise and comfortable treatments.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-primary rounded-full p-1 text-white mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Patient-Centered Approach</h3>
                  <p className="text-gray-600">We prioritize your comfort and satisfaction throughout every step of your dental journey.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-primary rounded-full p-1 text-white mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Comprehensive Care</h3>
                  <p className="text-gray-600">From preventive care to complex procedures, we provide all the dental services you need.</p>
                </div>
              </div>
            </div>
            
            <a href="#booking" className="btn-primary inline-block">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
