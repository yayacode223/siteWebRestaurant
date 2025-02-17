import React from 'react';
import { ArrowLeft, Bike, Shield, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DeliveryForm() {
  return (
    <div className="py-20 bg-gradient-to-br from-red-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
            <Bike className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Devenir Livreur Partenaire</h1>
          <p className="text-xl text-gray-600">
            Rejoignez l'équipe IkaPlat et commencez à gagner de l'argent en livrant des repas
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de véhicule
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>Moto</option>
                <option>Scooter</option>
                <option>Vélo</option>
                <option>Voiture</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zone de livraison préférée
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>Commune I</option>
                <option>Commune II</option>
                <option>Commune III</option>
                <option>Commune IV</option>
                <option>Commune V</option>
                <option>Commune VI</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Disponibilité
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Matin', 'Après-midi', 'Soir', 'Week-end'].map((period) => (
                  <label key={period} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500 focus:ring-red-500" />
                    <span>{period}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Documents requis
              </label>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Carte d'identité (recto-verso)
                  </p>
                  <input type="file" className="hidden" accept="image/*,application/pdf" required />
                  <button type="button" className="mt-2 text-sm text-red-500 hover:text-red-600">
                    Télécharger
                  </button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Permis de conduire
                  </p>
                  <input type="file" className="hidden" accept="image/*,application/pdf" required />
                  <button type="button" className="mt-2 text-sm text-red-500 hover:text-red-600">
                    Télécharger
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="text-sm">
                <label className="font-medium text-gray-700">
                  J'accepte les conditions
                </label>
                <p className="text-gray-500">
                  En soumettant ce formulaire, j'accepte les conditions générales et la politique de confidentialité d'IkaPlat.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Shield className="h-6 w-6 text-gray-400" />
              <p className="text-sm text-gray-600">
                Vos informations personnelles sont protégées et sécurisées
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-colors text-lg font-semibold"
            >
              Soumettre ma candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}