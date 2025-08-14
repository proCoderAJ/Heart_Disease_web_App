// src/components/layout/Footer.jsx
import React from 'react';
import { Heart, Mail, Phone, MapPin, ExternalLink, Github, Twitter, Linkedin, Facebook, Shield, Users, Award, Clock, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

const Footer = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('CardioPredict Inquiry');
    const body = encodeURIComponent('Hello,\n\nI would like to inquire about CardioPredict services.\n\nBest regards,');
    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`);
  };

  const handlePhoneClick = () => {
    window.open(`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInternalLink = (page) => {
    // For now, we'll show an alert with the page info
    // In a real app, you'd navigate to actual pages
    const pageInfo = {
      'privacy-policy': {
        title: 'Privacy Policy',
        content: 'Your privacy is important to us. We collect only necessary data for heart disease prediction and never share your personal information with third parties.'
      },
      'terms-of-service': {
        title: 'Terms of Service',
        content: 'By using CardioPredict, you agree to our terms of service. This tool is for informational purposes only and should not replace professional medical advice.'
      },
      'medical-disclaimer': {
        title: 'Medical Disclaimer',
        content: 'CardioPredict is not a substitute for professional medical advice. Always consult with healthcare professionals for medical decisions.'
      },
      'api-documentation': {
        title: 'API Documentation',
        content: 'Access our comprehensive API documentation for integrating CardioPredict into your applications.'
      },
      'data-security': {
        title: 'Data Security',
        content: 'We implement industry-standard security measures to protect your health data. All information is encrypted and stored securely.'
      },
      'help-center': {
        title: 'Help Center',
        content: 'Find answers to frequently asked questions and get support for using CardioPredict effectively.'
      },
      'medical-partners': {
        title: 'Medical Partners',
        content: 'Learn about our partnerships with leading medical institutions and healthcare providers worldwide.'
      },
      'research': {
        title: 'Research & Studies',
        content: 'Explore our latest research findings and clinical studies on cardiovascular health prediction.'
      },
      'careers': {
        title: 'Careers',
        content: 'Join our team of medical technology experts and help advance cardiovascular health through AI.'
      },
      'press': {
        title: 'Press & Media',
        content: 'Access press releases, media resources, and information for journalists covering CardioPredict.'
      }
    };

    const info = pageInfo[page];
    if (info) {
      alert(`${info.title}\n\n${info.content}\n\nThis would open a detailed page in a real application.`);
    }
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold text-white">CardioPredict</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Advancing cardiovascular health through AI-powered risk assessment and personalized care recommendations. 
              Our mission is to make heart health accessible to everyone through cutting-edge technology.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm">50K+ Users</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">95% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={handleEmailClick}>
                <Mail className="w-4 h-4" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={handlePhoneClick}>
                <Phone className="w-4 h-4" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <div 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors"
                onClick={() => handleExternalLink('https://facebook.com/cardiopredict')}
                title="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div 
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors"
                onClick={() => handleExternalLink('https://twitter.com/cardiopredict')}
                title="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div 
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors"
                onClick={() => handleExternalLink('https://linkedin.com/company/cardiopredict')}
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors"
                onClick={() => handleExternalLink('https://github.com/proCoderAJ')}
                title="View on GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('privacy-policy')}
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('terms-of-service')}
                >
                  Terms of Service
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('medical-disclaimer')}
                >
                  Medical Disclaimer
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('api-documentation')}
                >
                  API Documentation
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('data-security')}
                >
                  Data Security
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support & Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('help-center')}
                >
                  Help Center
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('medical-partners')}
                >
                  Medical Partners
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('research')}
                >
                  Research & Studies
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('careers')}
                >
                  Careers
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  onClick={() => handleInternalLink('press')}
                >
                  Press & Media
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Global Reach
              </h4>
              <p className="text-gray-400 text-sm">
                Serving users in 50+ countries with localized heart health assessments and multilingual support.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Certifications
              </h4>
              <p className="text-gray-400 text-sm">
                FDA-cleared, CE-marked, and ISO 13485 certified medical device software for clinical use.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Security Standards
              </h4>
              <p className="text-gray-400 text-sm">
                SOC 2 Type II compliant with end-to-end encryption and regular security audits.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 CardioPredict. All rights reserved. This tool is for informational purposes only and should not replace professional medical advice.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Patent Pending • FDA Cleared • HIPAA Compliant
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <span className="text-gray-400">Version 1.0.0</span>
              <span className="text-gray-400 hidden md:inline">•</span>
              <span className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</span>
              <span className="text-gray-400 hidden md:inline">•</span>
              <span className="text-gray-400">Build #2025.01.13</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;