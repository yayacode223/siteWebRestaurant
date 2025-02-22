import React from 'react';
import { ArrowLeft, MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Support() {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
            <MessageSquare className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Support Client</h1>
          <p className="text-xl text-gray-600">
            Notre équipe est là pour vous aider 24h/24 et 7j/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <Phone className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Par téléphone</h2>
            <p className="text-gray-600 mb-4">
              Notre équipe est disponible pour vous aider
            </p>
            <div className="space-y-2">
              <p className="font-medium">Numéro: +223 XX XX XX XX</p>
              <p className="text-sm text-gray-500">
                Lun-Dim: 8h00 - 22h00
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <Mail className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Par email</h2>
            <p className="text-gray-600 mb-4">
              Envoyez-nous vos questions
            </p>
            <div className="space-y-2">
              <p className="font-medium">support@ikaplat.ml</p>
              <p className="text-sm text-gray-500">
                Réponse sous 24h
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Problème avec une commande</option>
                <option>Question sur la livraison</option>
                <option>Problème avec l'application</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="h-6 w-6 text-gray-400" />
              <p className="text-sm text-gray-600">
                Nous nous efforçons de répondre à toutes les demandes sous 24h
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}