// src/pages/NoticiasLocais/NoticiasLocais.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const noticias = [
  {
    id: 1,
    titulo: "Descoberta Arqueológica Surpreendente Revela Civilização Perdida",
    autor: "João Silva",
    descricao:
      "Uma equipe de arqueólogos fez uma descoberta incrível em uma região remota do mundo...",
    data: "28 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+1",
  },
  {
    id: 2,
    titulo: "Tecnologia de Inteligência Artificial Revoluciona a Indústria",
    autor: "Maria Fernandes",
    descricao:
      "A inteligência artificial está transformando várias indústrias ao redor do mundo...",
    data: "27 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+2",
  },
  {
    id: 3,
    titulo: "Novo Tratamento para Doenças Raras é Descoberto",
    autor: "Carlos Almeida",
    descricao:
      "Cientistas anunciaram um novo tratamento promissor para doenças raras...",
    data: "26 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+3",
  },
  // Adicione mais notícias conforme necessário, até 12 notícias
  {
    id: 4,
    titulo: "Estudo Revela os Benefícios do Exercício Regular",
    autor: "Ana Oliveira",
    descricao:
      "Um novo estudo mostra que o exercício regular traz inúmeros benefícios para a saúde...",
    data: "25 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+4",
  },
  {
    id: 5,
    titulo: "Economia Global em Recuperação",
    autor: "Lucas Silva",
    descricao:
      "A economia global está mostrando sinais de recuperação após a pandemia...",
    data: "24 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+5",
  },
  {
    id: 6,
    titulo: "Avanços na Energia Renovável",
    autor: "Fernanda Costa",
    descricao:
      "Novos avanços na energia renovável estão impulsionando a transição para uma economia verde...",
    data: "23 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+6",
  },
  {
    id: 7,
    titulo: "Desenvolvimento Sustentável nas Cidades",
    autor: "Rafael Pereira",
    descricao:
      "Iniciativas de desenvolvimento sustentável estão transformando as cidades...",
    data: "22 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+7",
  },
  {
    id: 8,
    titulo: "Educação Online Ganha Popularidade",
    autor: "Beatriz Lima",
    descricao:
      "A educação online está se tornando cada vez mais popular, oferecendo flexibilidade e acesso...",
    data: "21 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+8",
  },
  {
    id: 9,
    titulo: "Mudanças Climáticas e Seus Impactos",
    autor: "Marcos Souza",
    descricao:
      "Estudos recentes destacam os impactos das mudanças climáticas em diferentes regiões...",
    data: "20 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+9",
  },
  {
    id: 10,
    titulo: "Tecnologia 5G e o Futuro da Conectividade",
    autor: "Juliana Martins",
    descricao:
      "A tecnologia 5G está prometendo revolucionar a conectividade em todo o mundo...",
    data: "19 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+10",
  },
  {
    id: 11,
    titulo: "Saúde Mental em Foco",
    autor: "Pedro Santos",
    descricao:
      "A importância da saúde mental está ganhando destaque na sociedade atual...",
    data: "18 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+11",
  },
  {
    id: 12,
    titulo: "Inovações na Agricultura Moderna",
    autor: "Laura Rocha",
    descricao:
      "Inovações na agricultura estão ajudando a aumentar a produtividade e a sustentabilidade...",
    data: "17 de junho de 2024",
    foto: "https://via.placeholder.com/600?text=Noticia+12",
  },
];

export default function NoticiasLocais() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center bg-white mx-8 md:mx-16 my-16">
      <header className="flex flex-col gap-2 text-center mb-8">
        <h2 className="text-2xl md:text-5xl font-bold">NOTICIAS LOCAIS</h2>
        <p className="text-muted-foreground">
          Explore as últimas notícias da região de Ivaiporã, PR. Fique
          informado!
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4 px-4 w-11/12">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="bg-gray-300 h-40 rounded overflow-hidden cursor-pointer hover:opacity-75"
            onClick={() => navigate(`/noticia/${noticia.id}`)}
          >
            <img
              src={noticia.foto}
              alt={noticia.titulo}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button className="bg-blue-600 text-white text-xl p-4 font-medium rounded-xl hover:bg-blue-700">
        Ver todas as noticias
      </button>
    </section>
  );
}
