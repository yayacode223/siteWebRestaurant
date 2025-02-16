import { Download, UtensilsCrossed, CreditCard, MapPin, ArrowRight } from 'lucide-react';
import React from 'react';

export function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Téléchargez l'application",
      description: "Disponible sur App Store et Google Play",
      icon: Download,
      color: "bg-green-600"
    },
    {
      step: "2",
      title: "Choisissez vos plats",
      description: "Large sélection de restaurants maliens",
      icon: UtensilsCrossed,
      color: "bg-yellow-400"
    },
    {
      step: "3",
      title: "Payez facilement",
      description: "Plusieurs moyens de paiement disponibles",
      icon: CreditCard,
      color: "bg-red-500"
    },
    {
      step: "4",
      title: "Suivez votre commande",
      description: "Livraison rapide à votre porte",
      icon: MapPin,
      color: "bg-green-600"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {React.createElement(step.icon, { className: "h-8 w-8 text-white" })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}