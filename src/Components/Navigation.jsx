import { UtensilsCrossed, Download } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary/95 backdrop-blur-md text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <UtensilsCrossed className="h-8 w-8" />
          <span className="text-2xl font-extrabold tracking-tight">IkaPlat</span>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className="font-medium hover:text-secondary transition-colors duration-200">Accueil</a>
          <a href="#opportunites" className="font-medium hover:text-secondary transition-colors duration-200">Opportunités</a>
          <a href="#faq" className="font-medium hover:text-secondary transition-colors duration-200">FAQ</a>
          <a href="#contact" className="font-medium hover:text-secondary transition-colors duration-200">Contact</a>
          <button className="bg-red-600 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-accent transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
            <Download className="h-5 w-5" />
            <span className="font-medium">Télécharger</span>
          </button>
        </div>
        <button 
          onClick={toggleMenu}
          className="md:hidden bg-primary-dark p-2 rounded-lg hover:bg-primary-light transition-colors duration-200"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-4 py-3 rounded-xl text-white hover:bg-primary-dark font-medium transition-colors duration-200">
            Accueil
          </a>
          <a href="#opportunites" className="block px-4 py-3 rounded-xl text-white hover:bg-primary-dark font-medium transition-colors duration-200">
            Opportunités
          </a>
          <a href="#faq" className="block px-4 py-3 rounded-xl text-white hover:bg-primary-dark font-medium transition-colors duration-200">
            FAQ
          </a>
          <a href="#contact" className="block px-4 py-3 rounded-xl text-white hover:bg-primary-dark font-medium transition-colors duration-200">
            Contact
          </a>
          <button className="w-full mt-2 bg-accent/90 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-accent transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
            <Download className="h-5 w-5" />
            <span className="font-medium">Télécharger</span>
          </button>
        </div>
      </div>
    </nav>
  );
}