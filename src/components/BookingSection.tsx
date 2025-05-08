
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const BookingSection = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const services = [
    "Regular Checkup",
    "Teeth Cleaning",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Dental Implants",
    "Emergency Care",
    "Pediatric Dentistry"
  ];
  
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", 
    "11:30 AM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };
  
  const validateStep = (currentStep: number) => {
    let newErrors: Partial<FormData> = {};
    let isValid = true;
    
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        isValid = false;
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        isValid = false;
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.service) {
        newErrors.service = 'Please select a service';
        isValid = false;
      }
      
      if (!formData.date) {
        newErrors.date = 'Date is required';
        isValid = false;
      }
      
      if (!formData.time) {
        newErrors.time = 'Time is required';
        isValid = false;
      }
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    } else {
      // Shake animation for errors
      const form = document.getElementById('booking-form');
      if (form) {
        form.classList.add('animate-shake');
        setTimeout(() => {
          form.classList.remove('animate-shake');
        }, 500);
      }
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(step)) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: "Appointment Booked!",
          description: "Your appointment has been scheduled. We'll send you a confirmation email shortly.",
          variant: "default",
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: ''
        });
        
        setIsSubmitting(false);
        setStep(1);
      }, 1500);
    }
  };
  
  return (
    <section id="booking" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Book Your Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our dental experts. We'll respond promptly
            to confirm your appointment.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      step >= i 
                        ? 'bg-dental-primary text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {i}
                  </div>
                  <span 
                    className={`text-sm ${
                      step >= i ? 'text-dental-primary' : 'text-gray-500'
                    }`}
                  >
                    {i === 1 ? 'Personal Info' : i === 2 ? 'Service & Date' : 'Confirm'}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 h-1 mt-4">
              <div 
                className="bg-dental-primary h-1 transition-all duration-300"
                style={{ width: `${(step - 1) * 50}%` }}
              ></div>
            </div>
          </div>
          
          <form id="booking-form" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="animate-fade-in-up">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="animate-fade-in-up">
                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Select Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`form-input ${errors.service ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>Preferred Date</span>
                      </div>
                    </label>
                    <input 
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`form-input ${errors.date ? 'border-red-500' : ''}`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>Preferred Time</span>
                      </div>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`form-input ${errors.time ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input min-h-[100px]"
                    placeholder="Tell us about your dental needs or concerns..."
                  ></textarea>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="animate-fade-in-up">
                <div className="bg-dental-accent rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-lg mb-4">Appointment Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 text-sm">Name</p>
                      <p className="font-medium">{formData.name}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm">Email</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm">Phone</p>
                      <p className="font-medium">{formData.phone}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm">Service</p>
                      <p className="font-medium">{formData.service}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm">Date</p>
                      <p className="font-medium">{formData.date}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm">Time</p>
                      <p className="font-medium">{formData.time}</p>
                    </div>
                  </div>
                  
                  {formData.message && (
                    <div className="mt-4">
                      <p className="text-gray-600 text-sm">Additional Information</p>
                      <p className="italic">{formData.message}</p>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="terms" className="text-gray-700">
                      I agree to the <a href="#" className="text-dental-primary">terms and conditions</a>
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    className={`btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
