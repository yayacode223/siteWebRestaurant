import { Search } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-neutral-dark text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80"
          alt="Food background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/60 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-40 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
              La cuisine malienne
              <span className="block text-secondary mt-2">livrée chez vous</span>
            </h1>
            <p className="text-xl mb-6 text-gray-200 font-light leading-relaxed drop-shadow-md">
              Découvrez IkaPlat, l'application qui vous permet de commander vos plats traditionnels maliens préférés en quelques clics.
            </p>
            <div className="relative w-full max-w-lg flex items-center bg-white rounded-full shadow-xl overflow-hidden border border-white/30 focus-within:ring-2 focus-within:ring-primary">
              <input
                type="text"
                placeholder="Rechercher un plat..."
                className="w-full px-6 py-4 text-neutral-dark focus:outline-none placeholder-gray-500"
              />
              <button className="p-4 bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all">
                <Search size={24} />
              </button>
            </div>
            <button className="mt-6 px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transform transition-all duration-300 hover:scale-105">
              Commander maintenant
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full h-24 fill-white preserve-3d">
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
