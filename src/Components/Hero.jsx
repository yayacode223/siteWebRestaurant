import { Search, ArrowRight, ShoppingCart, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-neutral-dark text-white overflow-hidden">
      {/* Image de fond avec effet de dégradé */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80"
          alt="Food background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/60 mix-blend-multiply" />
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
          La cuisine malienne
          <span className="block text-secondary mt-2">livrée chez vous</span>
        </h1>
        <p className="text-xl mb-8 text-gray-200 font-light leading-relaxed drop-shadow-md max-w-2xl mx-auto">
          Découvrez IkaPlat, l'application qui vous permet de commander vos plats traditionnels maliens préférés en quelques clics.
        </p>

        {/* Barre de recherche améliorée */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden border border-white/30 focus-within:ring-2 focus-within:ring-primary">
            <div className="pl-6 pr-4 text-gray-500">
              <Search size={24} />
            </div>
            <input
              type="text"
              placeholder="Rechercher un plat, un restaurant..."
              className="w-full px-4 py-4 text-neutral-dark focus:outline-none placeholder-gray-500"
            />
            <button className="p-4 bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all">
              <ArrowRight size={24} />
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-300">
            Essayez "Poulet braisé", "Thieboudienne", ou "Alloco"...
          </p>
        </div>

        {/* Bouton d'action amélioré */}
        <button className="mt-8 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 mx-auto">
          <ShoppingCart size={24} />
          <span>Commander maintenant</span>
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full h-24 fill-white preserve-3d">
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}