import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, UtensilsCrossed, Gift, Clock, Users } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: "Ramadan Kareem",
    description: "Commandez votre repas de rupture du jeûne à l'avance et profitez de -20%",
    image: "https://images.unsplash.com/photo-1582801903534-ca53751bf8e3?auto=format&fit=crop&q=80",
    color: "from-accent/90 to-accent-dark/90",
    cta: "Pré-commander",
    icon: Clock
  },
  {
    id: 2,
    title: "Offre Famille Nombreuse",
    description: "4 plats commandés = 1 plat gratuit + livraison offerte",
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80",
    color: "from-primary/90 to-primary-dark/90",
    cta: "Commander pour la famille",
    icon: Users
  },
  {
    id: 3,
    title: "Bienvenue sur IkaPlat",
    description: "Profitez de -50% sur votre première commande avec le code MALI50",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    color: "from-secondary/90 to-secondary-dark/90",
    cta: "J'en profite",
    icon: Gift
  },
  {
    id: 4,
    title: "Menu du Jour",
    description: "Découvrez nos plats du jour à partir de 2500 FCFA",
    image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&q=80",
    color: "from-neutral-dark/90 to-black/90",
    cta: "Voir le menu",
    icon: UtensilsCrossed
  }
];

export function PromotionSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div 
        className="h-full transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {promotions.map((promo) => (
          <div 
            key={promo.id}
            className="w-full h-full flex-shrink-0 relative"
          >
            <img 
              src={promo.image}
              alt={promo.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} backdrop-blur-sm`}>
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-white text-center">
                <div className="inline-flex items-center justify-center mb-6">
                  {React.createElement(promo.icon, { 
                    className: "h-16 w-16 text-white/90" 
                  })}
                </div>
                <h2 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                  {promo.title}
                </h2>
                <p className="text-2xl mb-8 font-light">
                  {promo.description}
                </p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold inline-flex items-center group hover:scale-105 transform">
                  {promo.cta}
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-4 rounded-full text-white transition-all duration-200 hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-4 rounded-full text-white transition-all duration-200 hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`group relative ${currentSlide === index ? 'w-12' : 'w-3'} h-3 transition-all duration-300`}
          >
            <span className={`absolute inset-0 bg-white rounded-full transition-all duration-300 ${
              currentSlide === index ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
}