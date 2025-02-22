import React, { useState } from 'react';
import { Star, MapPin, Clock, Search, Filter, ChevronDown } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: "Le Bamako",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 847,
    cuisine: "Traditionnelle",
    deliveryTime: "20-35",
    address: "Hamdallaye ACI 2000, Bamako",
    isOpen: true,
    popular: ["Tô sauce arachide", "Poulet braisé", "Alloco"]
  },
  {
    id: 2,
    name: "Chez Fatoumata",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 632,
    cuisine: "Malienne",
    deliveryTime: "25-40",
    address: "Badalabougou, Bamako",
    isOpen: true,
    popular: ["Thieboudienne", "Yassa", "Capitaine braisé"]
  },
  {
    id: 3,
    name: "Le Djoliba",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 523,
    cuisine: "Vegetarienne",
    deliveryTime: "30-45",
    address: "Quartier du Fleuve, Bamako",
    isOpen: false,
    popular: ["Poulet DG", "Attiéké poisson", "Dégué"]
  }
];

const cuisineTypes = ["Tous", "Traditionnelle", "Malienne", "Vegetarienne", "Fast-food"];
const sortOptions = ["Recommandés", "Note", "Temps de livraison", "Distance"];

export function Restaurants() {
  const [selectedCuisine, setSelectedCuisine] = useState("Tous");
  const [selectedSort, setSelectedSort] = useState("Recommandés");

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">Restaurants</h1>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un restaurant..."
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-64"
              />
            </div>
            <div className="flex space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-gray-300 hover:border-primary transition-colors">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <span>{selectedCuisine}</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-gray-300 hover:border-primary transition-colors">
                  <span>Trier par: {selectedSort}</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative h-48">
                <img 
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">{restaurant.rating}</span>
                </div>
                {!restaurant.isOpen && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Fermé</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{restaurant.name}</h3>
                  <span className="text-gray-600">{restaurant.priceRange}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="mr-4">{restaurant.cuisine}</span>
                  <span className="text-gray-300">•</span>
                  <span className="mx-4">{restaurant.reviews} avis</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.deliveryTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{restaurant.address}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Plats populaires :</p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.popular.map((dish, index) => (
                      <span 
                        key={index}
                        className="bg-yellow-100 px-3 py-1 rounded-full text-sm"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  className={`w-full mt-6 px-6 py-3 rounded-xl font-semibold transition-colors duration-200
                    ${restaurant.isOpen 
                      ? 'bg-primary text-white hover:bg-primary-dark' 
                      : 'bg-red-100 text-gray-600 cursor-not-allowed'}`}
                  disabled={!restaurant.isOpen}
                >
                  {restaurant.isOpen ? 'Voir le menu' : 'Restaurant fermé'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}