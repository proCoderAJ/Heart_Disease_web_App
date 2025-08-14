// src/models/HeartDiseasePredictor.js

export class HeartDiseasePredictor {
  constructor() {
    this.weights = {
      age: 0.15,
      sex: 0.12,
      chestPain: 0.18,
      restingBP: 0.08,
      cholesterol: 0.10,
      fastingBS: 0.06,
      restingECG: 0.07,
      maxHR: 0.13,
      exerciseAngina: 0.16,
      oldpeak: 0.14,
      stSlope: 0.11
    };
    this.riskFactors = [];
  }

  normalize(value, feature) {
    const ranges = {
      age: [20, 80],
      restingBP: [80, 200],
      cholesterol: [100, 600],
      maxHR: [60, 220],
      oldpeak: [0, 6]
    };

    if (ranges[feature]) {
      const [min, max] = ranges[feature];
      return (value - min) / (max - min);
    }
    return value;
  }

  calculateRisk(data) {
    this.riskFactors = [];
    let riskScore = 0;

    // Age risk
    const ageRisk = this.normalize(data.age, 'age');
    riskScore += ageRisk * this.weights.age;
    if (data.age > 55) {
      this.riskFactors.push({name: 'Age', impact: 'high', value: `${data.age} years`});
    } else if (data.age > 45) {
      this.riskFactors.push({name: 'Age', impact: 'medium', value: `${data.age} years`});
    }

    // Sex risk (male = higher risk)
    if (data.sex == 1) {
      riskScore += this.weights.sex;
      this.riskFactors.push({name: 'Sex', impact: 'medium', value: 'Male'});
    }

    // Chest pain risk
    const chestPainRisk = data.chestPain * 0.33;
    riskScore += chestPainRisk * this.weights.chestPain;
    if (data.chestPain <= 1) {
      this.riskFactors.push({name: 'Chest Pain', impact: 'high', value: 'Angina symptoms'});
    }

    // Blood pressure risk
    const bpRisk = this.normalize(data.restingBP, 'restingBP');
    riskScore += bpRisk * this.weights.restingBP;
    if (data.restingBP > 140) {
      this.riskFactors.push({name: 'Blood Pressure', impact: 'high', value: `${data.restingBP} mmHg`});
    } else if (data.restingBP > 120) {
      this.riskFactors.push({name: 'Blood Pressure', impact: 'medium', value: `${data.restingBP} mmHg`});
    }

    // Cholesterol risk
    const cholRisk = this.normalize(data.cholesterol, 'cholesterol');
    riskScore += cholRisk * this.weights.cholesterol;
    if (data.cholesterol > 240) {
      this.riskFactors.push({name: 'Cholesterol', impact: 'high', value: `${data.cholesterol} mg/dl`});
    } else if (data.cholesterol > 200) {
      this.riskFactors.push({name: 'Cholesterol', impact: 'medium', value: `${data.cholesterol} mg/dl`});
    }

    // Other risk factors
    if (data.fastingBS == 1) {
      riskScore += this.weights.fastingBS;
      this.riskFactors.push({name: 'Blood Sugar', impact: 'medium', value: '> 120 mg/dl'});
    }

    if (data.restingECG > 0) {
      riskScore += (data.restingECG / 2) * this.weights.restingECG;
      this.riskFactors.push({name: 'ECG', impact: 'medium', value: 'Abnormal'});
    }

    const maxHRRisk = 1 - this.normalize(data.maxHR, 'maxHR');
    riskScore += maxHRRisk * this.weights.maxHR;
    if (data.maxHR < 120) {
      this.riskFactors.push({name: 'Max Heart Rate', impact: 'medium', value: `${data.maxHR} bpm`});
    }

    if (data.exerciseAngina == 1) {
      riskScore += this.weights.exerciseAngina;
      this.riskFactors.push({name: 'Exercise Angina', impact: 'high', value: 'Present'});
    }

    const oldpeakRisk = this.normalize(data.oldpeak, 'oldpeak');
    riskScore += oldpeakRisk * this.weights.oldpeak;
    if (data.oldpeak > 2) {
      this.riskFactors.push({name: 'ST Depression', impact: 'high', value: data.oldpeak});
    } else if (data.oldpeak > 1) {
      this.riskFactors.push({name: 'ST Depression', impact: 'medium', value: data.oldpeak});
    }

    if (data.stSlope == 2) {
      riskScore += this.weights.stSlope;
      this.riskFactors.push({name: 'ST Slope', impact: 'high', value: 'Downsloping'});
    } else if (data.stSlope == 1) {
      riskScore += this.weights.stSlope * 0.5;
      this.riskFactors.push({name: 'ST Slope', impact: 'medium', value: 'Flat'});
    }

    const sigmoid = (x) => 1 / (1 + Math.exp(-10 * (x - 0.5)));
    const riskPercentage = Math.round(sigmoid(riskScore) * 100);

    return {
      riskPercentage,
      riskLevel: this.getRiskLevel(riskPercentage),
      riskFactors: this.riskFactors,
      recommendations: this.getRecommendations(riskPercentage, this.riskFactors)
    };
  }

  getRiskLevel(percentage) {
    if (percentage < 30) return 'Low Risk';
    if (percentage < 60) return 'Moderate Risk';
    return 'High Risk';
  }

  getRecommendations(riskPercentage, factors) {
    const recommendations = [];

    if (riskPercentage > 60) {
      recommendations.push({
        icon: '🚨',
        text: 'Consult a cardiologist immediately for comprehensive evaluation'
      });
      recommendations.push({
        icon: '💊',
        text: 'Consider medication management under medical supervision'
      });
    }

    if (factors.some(f => f.name === 'Blood Pressure' && f.impact === 'high')) {
      recommendations.push({
        icon: '🥗',
        text: 'Adopt a low-sodium DASH diet to manage blood pressure'
      });
    }

    if (factors.some(f => f.name === 'Cholesterol')) {
      recommendations.push({
        icon: '🏃',
        text: 'Increase physical activity to 150 minutes/week moderate exercise'
      });
      recommendations.push({
        icon: '🐟',
        text: 'Include omega-3 rich foods and reduce saturated fats'
      });
    }

    recommendations.push({
      icon: '🚭',
      text: 'Avoid smoking and limit alcohol consumption'
    });
    
    recommendations.push({
      icon: '😴',
      text: 'Maintain 7-8 hours of quality sleep per night'
    });

    recommendations.push({
      icon: '🧘',
      text: 'Practice stress management techniques like meditation'
    });

    return recommendations;
  }
}