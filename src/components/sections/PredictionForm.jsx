// src/components/sections/PredictionForm.jsx
import React, { useState } from 'react';
import { HeartDiseasePredictor } from '../../models/HeartDiseasePredictor';
import { validateFormData, processFormData, getInitialFormData } from '../../utils/formValidation';
import { FORM_FIELDS } from '../../utils/constants';
import ResultsPanel from '../ui/ResultsPanel';

const PredictionForm = ({ onPrediction }) => {
  const [formData, setFormData] = useState(getInitialFormData());
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Validate form
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    // Process form data
    const processedData = processFormData(formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const predictor = new HeartDiseasePredictor();
    const predictionResult = predictor.calculateRisk(processedData);
    
    setResult(predictionResult);
    onPrediction(predictionResult);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear errors for this field
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const renderFormField = (fieldName, fieldConfig) => {
    if (fieldConfig.type === 'select') {
      return (
        <select
          name={fieldName}
          value={formData[fieldName]}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        >
          {fieldConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={fieldConfig.type}
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        required
        min={fieldConfig.min}
        max={fieldConfig.max}
        step={fieldConfig.step}
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        placeholder={fieldConfig.placeholder}
      />
    );
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Health Risk Assessment</h2>
          <p className="text-xl text-gray-400">Complete the form below for your personalized heart disease risk analysis</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
            {errors.general && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-600 rounded-lg">
                <p className="text-red-300 font-medium">❌ {errors.general}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(FORM_FIELDS).map(([fieldName, fieldConfig]) => (
                  <div key={fieldName}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {fieldConfig.label}
                    </label>
                    {renderFormField(fieldName, fieldConfig)}
                    {errors[fieldName] && (
                      <p className="text-red-400 text-sm mt-1">{errors[fieldName]}</p>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Analyzing...
                  </div>
                ) : (
                  'Analyze Heart Disease Risk'
                )}
              </button>
            </form>
          </div>

          <div className="lg:sticky lg:top-24">
            <ResultsPanel result={result} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;