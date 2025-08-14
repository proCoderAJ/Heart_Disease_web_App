// src/components/ui/ResultsPanel.jsx
import React, { useState, useEffect } from 'react';

const ResultsPanel = ({ result }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (result?.riskPercentage) {
      let start = 0;
      const end = result.riskPercentage;
      const duration = 1500;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setAnimatedPercentage(Math.round(start));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [result]);

  const getRiskColor = (percentage) => {
    if (percentage < 30) return 'text-green-400';
    if (percentage < 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRiskBorderColor = (percentage) => {
    if (percentage < 30) return 'border-green-400';
    if (percentage < 60) return 'border-yellow-400';
    return 'border-red-400';
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
      <h3 className="text-2xl font-bold text-center text-yellow-400 mb-6">Risk Assessment</h3>
      
      {/* Risk Meter */}
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          <div className={`w-full h-full rounded-full border-8 ${result ? getRiskBorderColor(result.riskPercentage) : 'border-gray-600'} flex items-center justify-center bg-gray-900`}>
            <div className="text-center">
              <div className={`text-4xl font-bold ${result ? getRiskColor(result.riskPercentage) : 'text-gray-400'}`}>
                {result ? `${animatedPercentage}%` : '--'}
              </div>
              <div className="text-gray-400 text-sm">Risk Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Factors */}
      <div className="bg-gray-900 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Risk Factors Analysis</h4>
        {result?.riskFactors?.length > 0 ? (
          <div className="space-y-3">
            {result.riskFactors.map((factor, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                <span className="text-gray-300">{factor.name}: {factor.value}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  factor.impact === 'high' ? 'bg-red-600 text-white' :
                  factor.impact === 'medium' ? 'bg-yellow-600 text-black' :
                  'bg-green-600 text-white'
                }`}>
                  {factor.impact.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">Complete the assessment to see risk factors</p>
        )}
      </div>

      {/* Recommendations */}
      <div className="bg-gray-900 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-4">💡 Health Recommendations</h4>
        {result?.recommendations?.length > 0 ? (
          <div className="space-y-3">
            {result.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <span className="text-xl">{rec.icon}</span>
                <span className="text-gray-300">{rec.text}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Personalized recommendations will appear after assessment</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPanel;