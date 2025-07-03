import React, { useState } from 'react';
import { MessageCircle, Loader2, Send } from 'lucide-react';

const SymptomInput = ({ onSymptomAnalysis, loading }) => {
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptoms.trim()) {
      onSymptomAnalysis(symptoms);
    }
  };

  const commonSymptoms = [
    'Cough and cold',
    'Digestive issues',
    'Stress and anxiety',
    'Skin problems',
    'Joint pain',
    'Headache',
    'Insomnia',
    'Fatigue'
  ];

  const handleSymptomClick = (symptom) => {
    setSymptoms(prev => prev ? `${prev}, ${symptom}` : symptom);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Describe Your Symptoms
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
            What symptoms are you experiencing?
          </label>
          <div className="relative">
            <textarea
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="For example: I have a persistent cough, sore throat, and feeling tired..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
              disabled={loading}
            />
            <MessageCircle className="absolute top-3 right-3 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Common symptoms (click to add):
          </p>
          <div className="flex flex-wrap gap-2">
            {commonSymptoms.map((symptom) => (
              <button
                key={symptom}
                type="button"
                onClick={() => handleSymptomClick(symptom)}
                className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm hover:bg-teal-200 transition-colors"
                disabled={loading}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading || !symptoms.trim()}
          className="w-full bg-teal-600 text-white py-4 rounded-xl font-medium hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Analyzing Symptoms...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Get Herb Recommendations</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default SymptomInput;