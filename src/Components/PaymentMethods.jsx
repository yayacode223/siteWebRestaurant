import { Smartphone, Banknote, CreditCard } from 'lucide-react';
import React from 'react';

export function PaymentMethods() {
  const payments = [
    {
      name: "Orange Money",
      icon: Smartphone,
      description: "Paiement rapide via Orange Money",
      color: "bg-orange-500"
    },
    {
      name: "Moov Money",
      icon: Smartphone,
      description: "Transfert via Moov Money",
      color: "bg-blue-500"
    },
    {
      name: "Espèces",
      icon: Banknote,
      description: "Paiement à la livraison",
      color: "bg-green-600"
    },
    {
      name: "Carte Bancaire",
      icon: CreditCard,
      description: "Visa, Mastercard, etc.",
      color: "bg-gray-700"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Moyens de Paiement Acceptés</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {payments.map((payment, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className={`${payment.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {React.createElement(payment.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{payment.name}</h3>
              <p className="text-gray-600">{payment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}