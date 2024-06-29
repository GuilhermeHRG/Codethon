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
        <section className="relative">
          <div className="w-full h-[400px]">
            <img src="../assets/bg.svg" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-4">
            <h2 className="text-4xl font-bold md:w-1/2">
              Novo aplicativo de realidade aumentada promete revolucionar o turismo
            </h2>
            <p className="mt-4">
              Levamos educação política a qualquer pessoa, em qualquer lugar, de forma fácil e gratuita, sempre com
              respeito pela pluralidade de ideias.
            </p>
            <Button className="mt-6 bg-blue-600 md:w-1/6 hover:bg-blue-700">Inscrever-se (Gratis)</Button>
          </div>
        </section>
        
        <LocalNews />
        
        <LikeContent />
        
        <Newsletter />
      </main>
      <Footer />
      <Weather /> {/* Adicione esta linha */}
    </div>
  );
}
