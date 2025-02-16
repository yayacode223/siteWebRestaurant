import React from 'react';
import { ChefHat, Clock, Smartphone } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: ChefHat,
      title: "Cuisine Authentique",
      description: "Les meilleurs restaurants de cuisine malienne traditionnelle",
      color: "bg-secondary"
    },
    {
      icon: Clock,
      title: "Livraison Express",
      description: "Vos plats livrés en moins de 30 minutes en un temps record!",
      color: "bg-accent"
    },
    {
      icon: Smartphone,
      title: "Application Simple",
      description: "Une interface intuitive pour commander facilement",
      color: "bg-primary"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Pourquoi choisir IkaPlat ?</h2>
        <p className="text-xl text-neutral text-center mb-12 max-w-2xl mx-auto">
          Découvrez une nouvelle façon de savourer la cuisine malienne, alliant tradition et modernité
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl -z-10" />
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-200`}>
                  {React.createElement(feature.icon, { className: "h-8 w-8 text-white" })}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
                <p className="text-neutral text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}