// src/components/sections/HeroSection.jsx
import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';

const HeroSection = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <Heart className="w-8 h-8 text-white/20" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-red-400 animate-bounce" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          CardioPredict
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          Advanced AI-powered heart disease risk assessment using machine learning algorithms with 95%+ accuracy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveSection('predict')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Assessment <ChevronRight className="inline w-5 h-5 ml-2" />
          </button>
          <button
            onClick={() => setActiveSection('about')}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;