import React from 'react';
import { Star, Clock } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: "Le Bamako",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 847,
    cuisine: "Traditionnelle",
    deliveryTime: "20-35",
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
    popular: ["Thieboudienne", "Yassa", "Capitaine braisé"]
  },
  {
    id: 3,
    name: "Le Djoliba",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 523,
    cuisine: "Fusion",
    deliveryTime: "30-45",
    popular: ["Poulet DG", "Attiéké poisson", "Dégué"]
  }
];

export function TopRestaurants() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Restaurants les Mieux Notés</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les restaurants préférés de nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
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

                <button className="w-full mt-6 bg-primary text-white py-3 rounded-xl hover:bg-primary-dark transition-colors duration-200 font-semibold">
                  Voir le menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}