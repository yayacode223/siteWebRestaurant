import React from 'react';
import { Clock, Wallet, Calendar, Shield } from 'lucide-react';

export function DeliveryPartner() {
  const benefits = [
    {
      icon: Clock,
      title: "Horaires Flexibles",
      description: "Travaillez selon vos disponibilités",
      color: "bg-green-600"
    },
    {
      icon: Wallet,
      title: "Revenus Attractifs",
      description: "Gagnez jusqu'à 150 000 FCFA par mois",
      color: "bg-yellow-500"
    },
    {
      icon: Calendar,
      title: "Paiements Hebdomadaires",
      description: "Recevez vos gains chaque jour",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Devenez Livreur Partenaire</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez l'équipe IkaPlat et profitez de la liberté d'être votre propre patron
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1665789318391-6057c533005e?auto=format&fit=crop&q=80" 
                alt="Livreur" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white px-6 py-3 rounded-full font-bold">
                +50 livreurs actifs
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Comment devenir livreur ?</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Inscrivez-vous en ligne",
                    description: "Remplissez le formulaire d'inscription"
                  },
                  {
                    step: "2",
                    title: "Fournissez vos documents",
                    description: "Carte d'identité, permis de conduire, etc."
                  },
                  {
                    step: "3",
                    title: "Formation gratuite",
                    description: "Apprenez les bases du service de livraison"
                  },
                  {
                    step: "4",
                    title: "Commencez à livrer",
                    description: "Recevez vos premières commandes"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors text-lg font-semibold">
                Postuler maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}