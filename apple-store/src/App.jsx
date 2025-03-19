import { useState } from "react";
import Header from "./Header/header.jsx";
import HeroSection from "../src/HeroSection/heroSection.jsx";
import Offer from "../src/Offer/offer.jsx";
import BestSeller from "../src/BestSeller/bestSeller.jsx";

function App() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <Offer />
      <BestSeller />
    </div>
  );
}

export default App;
