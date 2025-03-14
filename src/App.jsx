import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { SignupPage } from './Pages/SignupPage';
import { DeliveryForm } from './Pages/DeliveryForm';
import { RestaurantForm } from './Pages/RestaurantForm';
import { Restaurants } from './Pages/Restaurants';
import { RestaurantDashboard } from './Pages/RestaurantDashboard';
import { Support } from './Pages/Support';
import { Footer } from './components/Footer';

function App() {
  const location = useLocation(); // Utilisez useLocation pour obtenir la route actuelle

  // Déterminez si la route actuelle est le dashboard
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-white">
      {/* Afficher la navigation uniquement si ce n'est pas le dashboard */}
      {!isDashboard && <Navigation />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/dashboard" element={<RestaurantDashboard />} />
        <Route path="/devenir-livreur" element={<DeliveryForm />} />
        <Route path="/ouvrir-restaurant" element={<RestaurantForm />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      {/* Afficher le footer uniquement si ce n'est pas le dashboard */}
      {!isDashboard && <Footer />}
    </div>
  );
}

// Enveloppez App avec Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}