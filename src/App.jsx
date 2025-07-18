//React file for UI/UX
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageUpload from './components/ImageUpload';
import SymptomInput from './components/SymptomInput';
import HerbResults from './components/HerbResults';
import Features from './components/Features';
import Footer from './components/Footer';

function App(){
  const [currentMode, setCurrentMode] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleModeSelect = (mode) => {
    setCurrentMode(mode);
    setResults([]);
  };

  const handleImageAnalysis = async (imageFile) => {
    setLoading(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResults = [
      {
        name: "Neem",
        scientificName: "Azadirachta indica",
        commonUses: ["Blood purification", "Skin conditions", "Antibacterial", "Immune support"],
        dosage: "1-2 grams daily",
        form: ["Powder", "Oil", "Fresh leaves"],
        precautions: ["Avoid during pregnancy", "May lower blood sugar"],
        confidence: 92
      }
    ];
    
    setResults(mockResults);
    setLoading(false);
  };

  const handleSymptomAnalysis = async (symptoms) => {
    setLoading(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockResults = [
      {
        name: "Tulsi",
        scientificName: "Ocimum sanctum",
        commonUses: ["Cough relief", "Respiratory support", "Stress reduction", "Immunity"],
        dosage: "5-10 fresh leaves daily",
        form: ["Tea", "Fresh leaves", "Powder"],
        precautions: ["May affect blood clotting", "Consult doctor if pregnant"]
      },
      {
        name: "Mulethi",
        scientificName: "Glycyrrhiza glabra",
        commonUses: ["Sore throat", "Digestive support", "Respiratory health"],
        dosage: "1-3 grams daily",
        form: ["Powder", "Tea", "Tablets"],
        precautions: ["Avoid with high blood pressure", "Limit long-term use"]
      }
    ];
    
    setResults(mockResults);
    setLoading(false);
  };

  const handleBack = () => {
    setCurrentMode(null);
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header />
      
      {!currentMode ? (
        <>
          <Hero onModeSelect={handleModeSelect} />
          <Features />
        </>
      ) : (
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleBack}
              className="mb-6 flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <span>← Back to Home</span>
            </button>
            
            {currentMode === 'image' && (
              <ImageUpload onImageAnalysis={handleImageAnalysis} loading={loading} />
            )}
            
            {currentMode === 'symptom' && (
              <SymptomInput onSymptomAnalysis={handleSymptomAnalysis} loading={loading} />
            )}
            
            {results.length > 0 && (
              <HerbResults results={results} mode={currentMode} />
            )}
          </div>
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
