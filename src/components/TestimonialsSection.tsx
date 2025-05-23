
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
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
      content: "I've been coming to DentalCare for years and have always received exceptional treatment. The staff are friendly and professional, and Dr. Williams is incredibly skilled and gentle with treatments.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content: "After years of dental anxiety, I finally found a clinic where I feel completely comfortable. The team takes the time to explain procedures and ensure I'm at ease throughout my visit.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      content: "My children used to dread dental visits until we discovered DentalCare. Now they actually look forward to their checkups! The pediatric team is amazing with kids and creates a fun atmosphere.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "David Thompson",
      role: "Patient",
      content: "I had an emergency with a broken tooth and DentalCare fit me in immediately. They resolved the issue quickly and with minimal discomfort. I'm forever grateful for their prompt care!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxIndex = testimonials.length - 1;
  const testimonialRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (headingRef.current && descRef.current) {
            headingRef.current.classList.add('opacity-100', 'translate-y-0');
            headingRef.current.classList.remove('opacity-0', 'translate-y-10');
            
            setTimeout(() => {
              descRef.current?.classList.add('opacity-100', 'translate-y-0');
              descRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 300);
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
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={cn(
          "transition-all duration-300",
          index < rating 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-gradient-to-b from-dental-accent to-white relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="heading-lg mb-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            What Our <span className="text-dental-primary">Patients</span> Say
          </h2>
          <p 
            ref={descRef}
            className="text-gray-600 max-w-2xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Read what our satisfied patients have to say about their experience
            with our dental clinic and team of professionals.
          </p>
          <div className="w-24 h-1 bg-dental-primary mx-auto mt-6"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-12 -left-12 opacity-10">
            <Quote size={80} className="text-dental-primary" />
          </div>
          <div className="absolute -bottom-12 -right-12 opacity-10">
            <Quote size={80} className="text-dental-primary rotate-180" />
          </div>
          
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
                  <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 hover:shadow-dental-primary/10 transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-4 border-dental-secondary shadow-lg">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                        <div>
                          <h4 className="font-semibold text-xl text-dental-primary">{testimonial.name}</h4>
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
            className="absolute top-1/2 -left-5 md:-left-10 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg text-dental-primary hover:bg-dental-primary hover:text-white transition-colors disabled:opacity-50"
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 md:-right-10 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg text-dental-primary hover:bg-dental-primary hover:text-white transition-colors disabled:opacity-50"
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              className={cn(
                "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                currentIndex === index 
                  ? "bg-dental-primary w-8" 
                  : "bg-gray-300 hover:bg-dental-secondary"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
