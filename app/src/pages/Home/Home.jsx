import React from 'react';
import Button from "../../components/Button/Button";
import NoticiasLocais from "../NoticiasLocais/NoticiasLocais";
import ConteudoGostar from "../ConteudoGostar/ConteudoGostar";
import Inscricao from "../Inscricao/Inscricao";
import Weather from "./Weather"; // Adicione esta linha

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#3b82f6] text-white flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <button className="mr-4">
            <MenuIcon />
          </button>
          <h1 className="text-2xl font-bold">Explore Ivaí</h1>
        </div>
        <input type="search" placeholder="O que você procura?" className="max-w-xs rounded p-1" />
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
            <Button className="mt-6 bg-blue-600 md:w-1/6 hover:bg-blue-700">Inscrever-se (Gratis)</Button>
          </div>
        </section>
        <NoticiasLocais />
        <ConteudoGostar />
        <Inscricao />
      </main>
      <footer className="bg-[#3b82f6] text-white py-8 text-center">
        <h2 className="text-2xl font-bold">Explore vale do ivaí</h2>
        <div className="mt-4">
          <p>Av. Brasil, 1250</p>
          <p>(43) 99999-9999</p>
          <p>exploreivai@gmail.com</p>
        </div>
        <p className="mt-4 text-sm">© 2024 Explore Vale do Ivaí. Todos os direitos reservados.</p>
      </footer>
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
