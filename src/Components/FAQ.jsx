import React from 'react'; 
import { HelpCircle, Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);
  
  const faqs = [
    {
      question: "Comment fonctionne la livraison ?",
      answer: "Nos livreurs partenaires récupèrent votre commande au restaurant et vous la livrent à l'adresse indiquée. Vous pouvez suivre votre commande en temps réel sur l'application."
    },
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Nous nous efforçons de livrer toutes les commandes en moins de 30 minutes. Le temps exact dépend de votre localisation et du restaurant choisi."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements en espèces à la livraison, Orange Money, Moov Money, et les cartes bancaires via l'application."
    },
    {
      question: "Comment devenir partenaire restaurateur ?",
      answer: "Remplissez le formulaire dans la section 'Ouvrir un Restaurant'. Notre équipe vous contactera sous 48h pour discuter des modalités du partenariat."
    },
    {
      question: "Quelle est la zone de livraison ?",
      answer: "Nous livrons dans toutes les communes de Bamako. Les frais de livraison varient selon la distance."
    },
    {
      question: "Comment contacter le support client ?",
      answer: "Vous pouvez nous contacter 24/7 via l'application, par téléphone au +223 XX XX XX XX, ou par email à support@ikaplat.ml."
    }
  ];

  return (
    <div id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
            <HelpCircle className="h-8 w-8 text-gray-600" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-gray-600" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button className="mt-4 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-semibold">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}