import React from 'react';
import { Hero } from '../components/Hero';
import { PromotionSlider } from '../components/PromotionSlider';
import { Features } from '../components/Features';
import { PopularDishes } from '../components/PopularDishes';
import { TopRestaurants } from '../components/TopRestaurants';
import { PaymentMethods } from '../components/PaymentMethods';
import { HowItWorks } from '../components/HowItWorks';
import { RestaurantPartner } from '../components/RestaurantPartner';
import { DeliveryPartner } from '../components/DeliveryPartner';
import { Partnerships } from '../components/Partnerships';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <PopularDishes />
      <TopRestaurants />
      <PaymentMethods />
      <HowItWorks />
      <RestaurantPartner />
      <DeliveryPartner />
      <Partnerships />
      <PromotionSlider />
      <FAQ />
      <Contact />
    </>
  );
}