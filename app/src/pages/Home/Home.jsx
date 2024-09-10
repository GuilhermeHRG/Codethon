import React from 'react';
import Button from "../../components/Button/Button";
import NoticiasLocais from "../NoticiasLocais/NoticiasLocais";
import ConteudoGostar from "../ConteudoGostar/ConteudoGostar";
import Inscricao from "../Inscricao/Inscricao";
import Weather from "./Weather"; // Adicione esta linha
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-900 text-white flex items-center justify-between px-4 py-2">
        <div className="flex items-center text-center">
          <button className="mr-4">
            <MenuIcon />
          </button>
          <h1 className="text-2xl font-bold">Explore Ivaí</h1>
        </div>
      </header>
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
            <Button className="mt-6 bg-red-700 md:w-1/6 hover:bg-red-700">Inscrever-se (Gratis)</Button>
          </div>
        </section>
        <NoticiasLocais />
        <ConteudoGostar />
        <Inscricao />
      </main>
      <Footer/>
      <Weather /> {/* Adicione esta linha */}
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
