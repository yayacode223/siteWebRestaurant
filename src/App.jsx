import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './Pages/HomePage';
import { DeliveryForm } from './Pages/DeliveryForm';
import { RestaurantForm } from './Pages/RestaurantForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devenir-livreur" element={<DeliveryForm />} />
          <Route path="/ouvrir-restaurant" element={<RestaurantForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App