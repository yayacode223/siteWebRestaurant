import React from 'react';
import { TrendingUp, LayoutDashboard, Headset, CheckCircle } from 'lucide-react';

export function RestaurantPartner() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Augmentez vos revenus",
      description: "Accédez à une nouvelle clientèle et augmentez votre chiffre d'affaires",
      color: "bg-green-600"
    },
    {
      icon: LayoutDashboard,
      title: "Gestion simplifiée",
      description: "Interface professionnelle pour gérer vos commandes efficacement",
      color: "bg-yellow-400"
    },
    {
      icon: Headset,
      title: "Support dédié",
      description: "Une équipe à votre service pour vous accompagner",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Devenez Restaurateur Partenaire</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez le réseau de restaurants IkaPlat et développez votre activité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                {React.createElement(benefit.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Pourquoi nous rejoindre ?</h3>
              <ul className="space-y-4">
                {[
                  "Visibilité accrue auprès d'une clientèle digitale",
                  "Commission compétitive et transparente",
                  "Formation et accompagnement personnalisé",
                  "Outils de gestion et analytics avancés",
                  "Paiements sécurisés et réguliers"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors text-lg font-semibold">
                Devenir partenaire
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80" 
                alt="Restaurant" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold">
                +200 restaurants partenaires
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}