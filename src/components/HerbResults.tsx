import React from 'react';
import { Leaf, AlertTriangle, Pill, CheckCircle } from 'lucide-react';
import { HerbInfo, Mode } from '../App';

interface HerbResultsProps {
  results: HerbInfo[];
  mode: Mode;
}

const HerbResults: React.FC<HerbResultsProps> = ({ results, mode }) => {
  return (
    <div className="mt-8 space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {mode === 'image' ? 'Herb Identification Results' : 'Recommended Herbs'}
        </h3>
        <p className="text-gray-600">
          {mode === 'image' 
            ? 'Here\'s what we found about your herb image'
            : 'Based on your symptoms, here are the suggested Ayurvedic herbs'
          }
        </p>
      </div>
      
      <div className="grid gap-6">
        {results.map((herb, index) => (
          <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{herb.name}</h4>
                  <p className="text-sm text-gray-500 italic">{herb.scientificName}</p>
                </div>
              </div>
              
              {herb.confidence && (
                <div className="flex items-center space-x-1 bg-emerald-100 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    {herb.confidence}% match
                  </span>
                </div>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Common Uses</span>
                  </h5>
                  <ul className="space-y-1">
                    {herb.commonUses.map((use, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                    <Pill className="w-4 h-4 text-teal-600" />
                    <span>Available Forms</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {herb.form.map((form, i) => (
                      <span key={i} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-sm">
                        {form}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <h5 className="font-semibold text-amber-800 mb-2">
                    Recommended Dosage
                  </h5>
                  <p className="text-amber-700 text-sm">{herb.dosage}</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <h5 className="font-semibold text-red-800 mb-2 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Precautions</span>
                  </h5>
                  <ul className="space-y-1">
                    {herb.precautions.map((precaution, i) => (
                      <li key={i} className="text-red-700 text-sm flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        <span>{precaution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h5 className="font-semibold text-blue-800 mb-2">Important Disclaimer</h5>
            <p className="text-blue-700 text-sm leading-relaxed">
              This AI-powered tool is for educational purposes only and should not replace professional medical advice. 
              Always consult with a qualified Ayurvedic practitioner or healthcare provider before starting any herbal treatment, 
              especially if you have existing health conditions or are taking medications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbResults;