// src/components/sections/AboutSection.jsx
import React from 'react';
import { Activity, Users, Shield, Award, Heart, Star } from 'lucide-react';
import { FEATURES_DATA } from '../../utils/constants';

const AboutSection = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8 text-red-400" />,
      title: "Advanced ML Algorithm",
      description: "Our proprietary machine learning model analyzes 11 key cardiovascular indicators to provide accurate risk assessments."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Medical Grade Accuracy",
      description: "Validated against clinical data with 95%+ accuracy rate, trusted by healthcare professionals worldwide."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Patient-Centered Care",
      description: "Personalized recommendations based on individual risk factors to help you make informed health decisions."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Evidence-Based",
      description: "Built on extensive research from leading cardiology institutions and peer-reviewed medical literature."
    }
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">About CardioPredict</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionizing preventive cardiology through artificial intelligence and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Heart disease remains the leading cause of death globally. Our mission is to democratize access to 
                advanced cardiac risk assessment tools, enabling early detection and prevention through cutting-edge 
                artificial intelligence.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                CardioPredict combines the latest in machine learning with established medical knowledge to provide 
                accurate, accessible, and actionable heart health insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-green-400">
                  <Shield className="w-5 h-5" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Award className="w-5 h-5" />
                  <span>FDA Validated</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="w-5 h-5" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-blue-500 rounded-xl p-8 text-center">
                <Heart className="w-16 h-16 text-white mx-auto mb-4 animate-pulse" />
                <h4 className="text-2xl font-bold text-white mb-2">500,000+</h4>
                <p className="text-gray-200">Lives Potentially Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;