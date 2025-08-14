// src/components/sections/ContactSection.jsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_SUBJECTS, CONTACT_INFO, BUSINESS_HOURS } from '../../utils/constants';

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Formspree configuration
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblkbrdk'; 

  const validateForm = () => {
    const newErrors = {};
    
    if (!contactForm.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!contactForm.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!contactForm.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (contactForm.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send form data to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
          _replyto: contactForm.email,
          _subject: `CardioPredict Contact: ${contactForm.subject}`,
          _captcha: false 
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        
        // Show success message for 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Show error message for 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('CardioPredict Inquiry');
    const body = encodeURIComponent('Hello,\n\nI would like to inquire about CardioPredict services.\n\nBest regards,');
    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`);
  };

  const handlePhoneClick = () => {
    window.open(`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`);
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-xl text-gray-400">
            Get in touch with our team of medical technology experts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-600 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <div>
                    <p className="text-green-300 font-medium">Message sent successfully!</p>
                    <p className="text-gray-300 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-600 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-red-300 font-medium">Failed to send message</p>
                    <p className="text-gray-300 text-sm">Please try again or contact us directly.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                <select
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                    errors.subject ? 'border-red-500' : 'border-gray-600'
                  }`}
                >
                  <option value="">Select a subject</option>
                  {CONTACT_SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Tell us how we can help you..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors"
                    onClick={handlePhoneClick}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-400 cursor-pointer hover:text-white transition-colors" onClick={handlePhoneClick}>
                      {CONTACT_INFO.phone}
                    </p>
                    <p className="text-gray-400">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors"
                    onClick={handleEmailClick}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400 cursor-pointer hover:text-white transition-colors" onClick={handleEmailClick}>
                      {CONTACT_INFO.email}
                    </p>
                    <p className="text-gray-400">Response within 4 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-gray-400">{CONTACT_INFO.address.street}</p>
                    <p className="text-gray-400">{CONTACT_INFO.address.city}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Emergency Notice</h3>
              <div className="bg-red-900/30 border border-red-600 rounded-lg p-4">
                <p className="text-red-300 font-medium mb-2">⚠️ Medical Emergency</p>
                <p className="text-gray-300 text-sm">
                  This tool is for risk assessment only. If you're experiencing chest pain, 
                  shortness of breath, or other cardiac symptoms, seek immediate medical attention 
                  by calling emergency services.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2">
                {BUSINESS_HOURS.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">{schedule.day}</span>
                    <span className="text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;