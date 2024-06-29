import React from 'react';
import Button from "../../components/Button/Button";
import Weather from "./Weather"; // Adicione esta linha

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import LocalNews from "../../components/LocalNews/LocalNews";
import LikeContent from "../../components/LikeContent/LikeContent";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <main className="flex-1">
        <LocalNews />
        
        <LikeContent />
        
        <Newsletter />
      </main>
      <Footer />
      <Weather /> 
    </div>
  );
}
