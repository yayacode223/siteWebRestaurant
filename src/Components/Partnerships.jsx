import React from 'react';
import { Handshake, TrendingUp, Users, Globe } from 'lucide-react';

export function Partnerships() {
  const partnerTypes = [
    {
      icon: Globe,
      title: "Entreprises",
      description: "Solutions de restauration pour vos employés",
      benefits: ["Tarifs préférentiels", "Facturation simplifiée", "Service dédié"]
    },
    {
      icon: Users,
      title: "Événements",
      description: "Service traiteur pour vos événements",
      benefits: ["Menu personnalisé", "Livraison ponctuelle", "Service professionnel"]
    },
    {
      icon: Handshake,
      title: "Institutions",
      description: "Partenariats stratégiques",
      benefits: ["Collaboration sur mesure", "Impact social", "Visibilité accrue"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Partenariats</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Développons ensemble l'avenir de la livraison de repas au Mali
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnerTypes.map((type, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {React.createElement(type.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <ul className="space-y-3">
                {type.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Pourquoi collaborer avec IkaPlat ?</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  IkaPlat est le leader de la livraison de repas au Mali. Notre expertise et notre réseau nous permettent d'offrir des solutions sur mesure à nos partenaires.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="bg-green-600 p-1 rounded-full">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <span>+50 000 clients actifs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-green-600 p-1 rounded-full">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <span>Présence dans toutes les communes de Bamako</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-green-600 p-1 rounded-full">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <span>Technologies innovantes</span>
                  </li>
                </ul>
              </div>
              <button className="mt-8 bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors text-lg font-semibold">
                Proposer un partenariat
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="Partenariat" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white px-6 py-3 rounded-full font-bold">
                Rejoignez-nous
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}