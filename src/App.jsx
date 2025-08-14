// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

// Layout Components
import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';
import Toast from './components/layouts/Toast';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import StatisticsSection from './components/sections/StatisticsSection';
import ContactSection from './components/sections/ContactSection';
import PredictionForm from './components/sections/PredictionForm';

// Styles
import './styles/globals.css';

const CardioPredict = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handlePrediction = (result) => {
    setPredictionResult(result);
    showToast('Analysis completed successfully!', 'success');
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection setActiveSection={setActiveSection} />;
      case 'predict':
        return <PredictionForm onPrediction={handlePrediction} />;
      case 'about':
        return <AboutSection />;
      case 'stats':
        return <StatisticsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Heart className="w-6 h-6 text-red-500" />
          </div>
        ))}
      </div>

      <main className="relative z-10">
        {renderSection()}
      </main>

      <Footer />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
};

export default CardioPredict;