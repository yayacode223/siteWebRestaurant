import React from 'react';
import { ArrowLeft, UtensilsCrossed, Shield, Upload, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RestaurantForm() {
  return (
    <div className="py-20 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
            <UtensilsCrossed className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Ouvrir un Restaurant</h1>
          <p className="text-xl text-gray-600">
            Développez votre activité en rejoignant la plateforme de livraison leader au Mali
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du restaurant
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de cuisine
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Malienne traditionnelle</option>
                  <option>Africaine</option>
                  <option>Fusion</option>
                  <option>Fast-food</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse du restaurant
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                placeholder="Rue, Quartier, Commune"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email professionnel
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horaires d'ouverture
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <input
                    type="time"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <span>à</span>
                  <input
                    type="time"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                    <label key={day} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-green-500 focus:ring-green-500" />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Capacité de service
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>1-10 commandes par heure</option>
                <option>11-20 commandes par heure</option>
                <option>21-30 commandes par heure</option>
                <option>Plus de 30 commandes par heure</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Documents requis
              </label>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Licence commerciale
                  </p>
                  <input type="file" className="hidden" accept="image/*,application/pdf" required />
                  <button type="button" className="mt-2 text-sm text-green-500 hover:text-green-600">
                    Télécharger
                  </button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Photos du restaurant (min. 3)
                  </p>
                  <input type="file" className="hidden" accept="image/*" multiple required />
                  <button type="button" className="mt-2 text-sm text-green-500 hover:text-green-600">
                    Télécharger
                  </button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Menu actuel (format PDF)
                  </p>
                  <input type="file" className="hidden" accept="application/pdf" required />
                  <button type="button" className="mt-2 text-sm text-green-500 hover:text-green-600">
                    Télécharger
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
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
                Vos informations professionnelles sont protégées et sécurisées
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors text-lg font-semibold"
            >
              Soumettre ma d'ouverture
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}