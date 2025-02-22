import { UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <UtensilsCrossed className="h-8 w-8" />
              <span className="text-2xl font-bold">IkaPlat</span>
            </div>
            <p className="text-gray-400">
              La meilleure application de livraison de cuisine malienne.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Opportunités</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/devenir-livreur" className="hover:text-white">Devenir Livreur</Link>
              </li>
             <li>
              <Link to="/ouvrir-restaurant" className="hover:text-white">Ouvrir un Restaurant</Link></li>
              <li><a href="#" className="hover:text-white">Partenariats</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Aide</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li>
                <Link to="/support" className="hover:text-white">Support</Link>
                </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Télécharger</h4>
            <div className="space-y-4">
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                     alt="Google Play" 
                     className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
                     alt="App Store" 
                     className="h-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 IkaPlat. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}