import { Star } from 'lucide-react';

export function PopularDishes() {
  const dishes = [
    {
      name: "Tô",
      description: "Plat traditionnel à base de farine de mil",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
      price: "2500 FCFA",
      rating: "4.8",
      time: "20-30 min"
    },
    {
      name: "Thieboudienne",
      description: "Riz au poisson et légumes",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
      price: "3000 FCFA",
      rating: "4.9",
      time: "25-35 min"
    },
    {
      name: "Poulet Yassa",
      description: "Poulet mariné aux oignons",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
      price: "3500 FCFA",
      rating: "4.7",
      time: "20-30 min"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Plats Populaires</h2>
          <p className="text-xl text-neutral max-w-2xl mx-auto">
            Découvrez nos plats les plus appréciés, préparés avec amour par nos restaurants partenaires
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-neutral-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {dish.time}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-neutral-light mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">{dish.price}</span>
                    <span className="flex items-center text-secondary">
                      <Star className="h-5 w-5 fill-current mr-1" />
                      {dish.rating}
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-primary text-white py-2 rounded-xl hover:bg-primary-dark transition-colors duration-200">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}