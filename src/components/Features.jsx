import React from 'react';
import { Brain, Camera, Shield, Zap, Users, BookOpen } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recognition',
      description: 'Advanced machine learning models trained on thousands of Ayurvedic herbs for accurate identification.'
    },
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'Simply capture or upload a photo of any herb to get instant identification and detailed information.'
    },
    {
      icon: Shield,
      title: 'Trusted Information',
      description: 'All herb data is sourced from authentic Ayurvedic texts and verified by qualified practitioners.'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get comprehensive herb information and personalized recommendations in seconds.'
    },
    {
      icon: Users,
      title: 'Personalized Guidance',
      description: 'Receive customized herb suggestions based on your specific symptoms and health concerns.'
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Learn about traditional Ayurvedic wisdom and how to incorporate herbs into your daily life.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Ayurveda AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of ancient wisdom and modern technology 
            for comprehensive herbal guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;