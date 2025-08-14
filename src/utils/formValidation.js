// src/utils/formValidation.js

export const validateFormData = (formData) => {
  const errors = {};
  const missingFields = [];

  // Check for empty required fields
  Object.entries(formData).forEach(([key, value]) => {
    if (!value && value !== 0) {
      missingFields.push(key);
    }
  });

  if (missingFields.length > 0) {
    errors.general = 'Please fill in all required fields';
    errors.missingFields = missingFields;
  }

  // Validate specific field ranges
  if (formData.age && (formData.age < 1 || formData.age > 120)) {
    errors.age = 'Age must be between 1 and 120';
  }

  if (formData.restingBP && (formData.restingBP < 80 || formData.restingBP > 200)) {
    errors.restingBP = 'Blood pressure must be between 80 and 200 mmHg';
  }

  if (formData.cholesterol && (formData.cholesterol < 100 || formData.cholesterol > 600)) {
    errors.cholesterol = 'Cholesterol must be between 100 and 600 mg/dl';
  }

  if (formData.maxHR && (formData.maxHR < 60 || formData.maxHR > 220)) {
    errors.maxHR = 'Max heart rate must be between 60 and 220 bpm';
  }

  if (formData.oldpeak && (formData.oldpeak < 0 || formData.oldpeak > 10)) {
    errors.oldpeak = 'ST Depression must be between 0 and 10';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const processFormData = (formData) => {
  const processedData = {};
  
  Object.entries(formData).forEach(([key, value]) => {
    if (key === 'oldpeak') {
      processedData[key] = parseFloat(value);
    } else {
      processedData[key] = parseInt(value);
    }
  });

  return processedData;
};

export const getInitialFormData = () => ({
  age: '',
  sex: '',
  chestPain: '',
  restingBP: '',
  cholesterol: '',
  fastingBS: '',
  restingECG: '',
  maxHR: '',
  exerciseAngina: '',
  oldpeak: '',
  stSlope: ''
});