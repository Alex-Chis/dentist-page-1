
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "I've been coming to DentalCare for years and have always received excellent treatment. The staff are friendly and professional, and Dr. Williams is incredibly skilled and gentle.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content: "After years of dental anxiety, I finally found a clinic where I feel comfortable. The team takes the time to explain procedures and ensure I'm at ease throughout my visit.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      content: "My children used to dread dental visits until we discovered DentalCare. Now they actually look forward to their checkups! The pediatric team is amazing with kids.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "David Thompson",
      role: "Patient",
      content: "I had an emergency with a broken tooth and DentalCare fit me in immediately. They resolved the issue quickly and with minimal discomfort. Forever grateful!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxIndex = Math.ceil(testimonials.length / 1) - 1;
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Adjust based on your transition duration
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-dental-accent">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our satisfied patients have to say about their experience
            with our dental clinic.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={testimonialRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-700 mb-5 italic">"{testimonial.content}"</p>
                        <div>
                          <h4 className="font-semibold text-dental-dark">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-5 md:-left-10 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md text-dental-primary hover:bg-dental-primary hover:text-white transition-colors disabled:opacity-50"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 md:-right-10 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md text-dental-primary hover:bg-dental-primary hover:text-white transition-colors disabled:opacity-50"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              className={cn(
                "w-3 h-3 rounded-full mx-1 transition-colors",
                currentIndex === index ? "bg-dental-primary" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
