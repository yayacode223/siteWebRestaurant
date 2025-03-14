import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Smartphone, LogIn } from 'lucide-react';

export function SignupPage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Logique d'inscription
    console.log('Nom:', name);
    console.log('Numéro de téléphone:', phoneNumber);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center bg-primary/10 p-3 sm:p-4 rounded-full">
            <LogIn className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-3 sm:mt-4">Inscription</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Rejoignez-nous et commencez votre expérience</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">Nom complet</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                placeholder="Votre nom complet"
                required
              />
            </div>
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">Numéro de téléphone</label>
            <div className="relative">
              <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                placeholder="Votre numéro de téléphone"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
          >
            <LogIn className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            S'inscrire
          </button>
        </form>
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Déjà un compte ?{' '}
            <Link to="/login" className="text-primary hover:underline font-semibold">
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}