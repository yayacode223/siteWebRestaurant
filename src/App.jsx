import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PopularDishes } from './components/PopularDishes';
import { PaymentMethods } from './components/PaymentMethods';
import { HowItWorks } from './components/HowItWorks';
import { RestaurantPartner } from './components/RestaurantPartner';
import { DeliveryPartner } from './components/DeliveryPartner';
import { Partnerships } from './components/Partnerships';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <PopularDishes />
      <PaymentMethods />
      <HowItWorks />
      <RestaurantPartner />
      <DeliveryPartner />
      <Partnerships />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App