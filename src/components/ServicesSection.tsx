
import React, { useEffect, useRef } from 'react';
import { Shield, Smile, FileImage, Globe, PhoneCall, Users } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="service-card opacity-0 translate-y-10 transition-all duration-700 ease-out group hover:border-dental-primary"
    >
      <div className="mb-6 text-dental-primary group-hover:scale-110 transform transition-transform duration-300">
        <div className="w-16 h-16 rounded-full bg-dental-accent flex items-center justify-center group-hover:bg-dental-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      <h3 className="heading-sm mb-3 group-hover:text-dental-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 overflow-hidden h-0.5">
        <div className="w-full h-full bg-dental-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield size={28} />,
      title: "Regular Checkups",
      description: "Comprehensive dental examinations to maintain oral health and prevent future problems."
    },
    {
      icon: <Smile size={28} />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our range of cosmetic treatments including teeth whitening and veneers."
    },
    {
      icon: <Globe size={28} />,
      title: "Orthodontics",
      description: "Straighten your teeth with our modern orthodontic treatments including invisible aligners."
    },
    {
      icon: <FileImage size={28} />,
      title: "Dental Implants",
      description: "Restore missing teeth with durable, natural-looking implants for a complete smile."
    },
    {
      icon: <PhoneCall size={28} />,
      title: "Emergency Care",
      description: "Immediate dental care when you need it most with our responsive emergency services."
    },
    {
      icon: <Users size={28} />,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly and comfortable environment."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add('opacity-100', 'translate-y-0');
          titleRef.current?.classList.remove('opacity-0', 'translate-y-10');
          
          setTimeout(() => {
            descRef.current?.classList.add('opacity-100', 'translate-y-0');
            descRef.current?.classList.remove('opacity-0', 'translate-y-10');
          }, 200);
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
    <section id="services" className="py-24 bg-dental-accent relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="section-container relative">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 
            ref={titleRef}
            className="heading-lg mb-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Our <span className="text-dental-primary">Premium</span> Services
          </h2>
          <p 
            ref={descRef}
            className="text-gray-600 max-w-2xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
          >
            We offer a comprehensive range of dental services to meet all your oral health needs,
            from routine checkups to specialized treatments, all with exceptional care and attention to detail.
          </p>
          <div className="w-24 h-1 bg-dental-primary mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
