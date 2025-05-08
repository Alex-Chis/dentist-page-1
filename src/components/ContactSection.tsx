
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you! We'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need to reach us? Our friendly team is here to help.
            Reach out through any of these channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-dental-accent p-8 rounded-xl shadow-md mb-8 hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dental-primary rounded-full p-3 text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-700">123 Dental Care Street</p>
                    <p className="text-gray-700">Healthcare City, HC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dental-primary rounded-full p-3 text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                    <p className="text-gray-700">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dental-primary rounded-full p-3 text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-700">info@dentalcare.com</p>
                    <p className="text-gray-700">appointment@dentalcare.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986790265967!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1652813661364!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental clinic location"
              ></iframe>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-semibold text-xl mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="contact-name" className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="contact-email" className="block text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="contact-subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="contact-message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input min-h-[150px]"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
