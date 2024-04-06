import React from "react";

import HeroSection from "../components/ui/HeroSection";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";

import Trending from "../components/ui/Trending-section/Trending";

import StepSection from "../components/ui/Step-section/StepSection";

import SellerSection from "../components/ui/Live-auction/Seller-section/SellerSection";





const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection/>
      <Trending />
      <StepSection />
     
    </>
  );
};

export default Home;