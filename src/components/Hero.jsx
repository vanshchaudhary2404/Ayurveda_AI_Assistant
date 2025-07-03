import React from 'react';
import { Camera, MessageCircle, Sparkles, Shield } from 'lucide-react';

const Hero = ({ onModeSelect }) => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Ayurveda AI
            </span>
            <br />
            <span className="text-gray-700">Herbal Guidance</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the power of traditional Ayurvedic herbs with modern AI technology. 
            Identify herbs through images or get personalized recommendations based on your symptoms.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Ministry of AYUSH</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-medium text-gray-700">AI Powered</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            onClick={() => onModeSelect('image')}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-emerald-100 hover:border-emerald-200 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Camera className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Identify Herbs</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Upload or capture an image of any herb to get instant identification, 
              usage instructions, and health benefits.
            </p>
            
            <div className="flex items-center space-x-2 text-emerald-600 font-medium">
              <span>Start Identification</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
          
          <div 
            onClick={() => onModeSelect('symptom')}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-teal-100 hover:border-teal-200 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Symptom Analysis</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Describe your symptoms and get personalized Ayurvedic herb recommendations 
              with dosage and usage guidelines.
            </p>
            
            <div className="flex items-center space-x-2 text-teal-600 font-medium">
              <span>Get Recommendations</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;