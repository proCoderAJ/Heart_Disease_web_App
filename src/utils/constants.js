// src/utils/constants.js

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'predict', label: 'Predict' },
  { id: 'about', label: 'About' },
  { id: 'stats', label: 'Statistics' },
  { id: 'contact', label: 'Contact' }
];

export const FORM_FIELDS = {
  age: {
    label: '👤 Age',
    type: 'number',
    placeholder: 'Enter your age',
    min: 1,
    max: 120
  },
  sex: {
    label: '⚧ Sex',
    type: 'select',
    options: [
      { value: '', label: 'Select sex' },
      { value: '1', label: 'Male' },
      { value: '0', label: 'Female' }
    ]
  },
  chestPain: {
    label: '💓 Chest Pain Type',
    type: 'select',
    options: [
      { value: '', label: 'Select type' },
      { value: '0', label: 'Typical Angina' },
      { value: '1', label: 'Atypical Angina' },
      { value: '2', label: 'Non-Anginal Pain' },
      { value: '3', label: 'Asymptomatic' }
    ]
  },
  restingBP: {
    label: '🩺 Resting Blood Pressure',
    type: 'number',
    placeholder: 'mmHg',
    min: 80,
    max: 200
  },
  cholesterol: {
    label: '🧪 Cholesterol Level',
    type: 'number',
    placeholder: 'mg/dl',
    min: 100,
    max: 600
  },
  fastingBS: {
    label: '🍭 Fasting Blood Sugar',
    type: 'select',
    options: [
      { value: '', label: 'Select level' },
      { value: '0', label: '≤ 120 mg/dl' },
      { value: '1', label: '> 120 mg/dl' }
    ]
  },
  restingECG: {
    label: '📊 Resting ECG',
    type: 'select',
    options: [
      { value: '', label: 'Select result' },
      { value: '0', label: 'Normal' },
      { value: '1', label: 'ST-T Wave Abnormality' },
      { value: '2', label: 'Left Ventricular Hypertrophy' }
    ]
  },
  maxHR: {
    label: '💓 Max Heart Rate',
    type: 'number',
    placeholder: 'bpm',
    min: 60,
    max: 220
  },
  exerciseAngina: {
    label: '⚠️ Exercise Induced Angina',
    type: 'select',
    options: [
      { value: '', label: 'Select option' },
      { value: '0', label: 'No' },
      { value: '1', label: 'Yes' }
    ]
  },
  oldpeak: {
    label: '📈 ST Depression',
    type: 'number',
    placeholder: '0.0 - 10.0',
    min: 0,
    max: 10,
    step: 0.1
  },
  stSlope: {
    label: '📐 ST Slope',
    type: 'select',
    options: [
      { value: '', label: 'Select slope' },
      { value: '0', label: 'Upsloping' },
      { value: '1', label: 'Flat' },
      { value: '2', label: 'Downsloping' }
    ]
  }
};

export const FEATURES_DATA = [
  {
    icon: '💡',
    title: "Advanced ML Algorithm",
    description: "Our proprietary machine learning model analyzes 11 key cardiovascular indicators to provide accurate risk assessments."
  },
  {
    icon: '🛡️',
    title: "Medical Grade Accuracy",
    description: "Validated against clinical data with 95%+ accuracy rate, trusted by healthcare professionals worldwide."
  },
  {
    icon: '👥',
    title: "Patient-Centered Care",
    description: "Personalized recommendations based on individual risk factors to help you make informed health decisions."
  },
  {
    icon: '🏆',
    title: "Evidence-Based",
    description: "Built on extensive research from leading cardiology institutions and peer-reviewed medical literature."
  }
];

export const STATISTICS_DATA = [
  { icon: '📈', number: "95.2%", label: "Prediction Accuracy", color: "text-green-400" },
  { icon: '👥', number: "500K+", label: "Assessments Completed", color: "text-blue-400" },
  { icon: '⭐', number: "98.7%", label: "User Satisfaction", color: "text-yellow-400" },
  { icon: '🕐', number: "24/7", label: "Available Support", color: "text-purple-400" },
  { icon: '🛡️', number: "100%", label: "Data Security", color: "text-green-400" },
  { icon: '🏆', number: "15+", label: "Medical Partnerships", color: "text-red-400" }
];

export const CONTACT_SUBJECTS = [
  'General Inquiry',
  'Medical Partnership',
  'Technical Support',
  'Feedback',
  'Research Collaboration'
];

export const CONTACT_INFO = {
  phone: '+91 (555) 123-HEART',
  email: 'support@cardiopredict.com',
  address: {
    street: '123 Vishnupuri',
    city: 'Kanpur, CSA 14582'
  }
};

export const BUSINESS_HOURS = [
  { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM PST' },
  { day: 'Saturday', hours: '9:00 AM - 5:00 PM PST' },
  { day: 'Sunday', hours: 'Emergency Support Only' }
];