// src/components/sections/StatisticsSection.jsx
import React from 'react';
import { TrendingUp, Users, Star, Clock, Shield, Award } from 'lucide-react';
import { STATISTICS_DATA } from '../../utils/constants';

const StatisticsSection = () => {
  const stats = [
    { icon: <TrendingUp className="w-8 h-8" />, number: "95.2%", label: "Prediction Accuracy", color: "text-green-400" },
    { icon: <Users className="w-8 h-8" />, number: "500K+", label: "Assessments Completed", color: "text-blue-400" },
    { icon: <Star className="w-8 h-8" />, number: "98.7%", label: "User Satisfaction", color: "text-yellow-400" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Available Support", color: "text-purple-400" },
    { icon: <Shield className="w-8 h-8" />, number: "100%", label: "Data Security", color: "text-green-400" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Medical Partnerships", color: "text-red-400" }
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Platform Statistics</h2>
          <p className="text-xl text-gray-400">
            Trusted by healthcare professionals and patients worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`flex justify-center mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Research & Validation</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Clinical Trials</h4>
              <p className="text-gray-400">Validated across 50,000+ patient records from leading medical institutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Peer Review</h4>
              <p className="text-gray-400">Published in 12 peer-reviewed medical journals and conferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Recognition</h4>
              <p className="text-gray-400">Winner of Healthcare Innovation Award 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;