import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './Pages/HomePage';
import { DeliveryForm } from './Pages/DeliveryForm';
import { RestaurantForm } from './Pages/RestaurantForm';
import { Restaurants } from './Pages/Restaurants';
import { Support } from './Pages/Support';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/devenir-livreur" element={<DeliveryForm />} />
          <Route path="/ouvrir-restaurant" element={<RestaurantForm />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App