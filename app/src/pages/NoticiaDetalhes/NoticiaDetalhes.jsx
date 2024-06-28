// src/pages/NoticiaDetalhes/NoticiaDetalhes.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

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

export default function NoticiaDetalhes() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) {
    return <div className="p-4">Notícia não encontrada</div>;
  }

  return (
    <div className="px-4 py-6 md:px-6 lg:py-16 md:py-12">
      <div className="mb-4">
        <Link to="/" className="text-blue-600 hover:underline">
          {"<< Voltar para Home"}
        </Link>
      </div>
      <article className="prose prose-gray mx-auto dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            {noticia.titulo}
          </h1>
          <p className="text-muted-foreground">
            Por {noticia.autor}, {noticia.data}
          </p>
        </div>
        <img
          src={noticia.foto}
          alt={noticia.titulo}
          className="aspect-video overflow-hidden rounded-lg object-cover"
        />
        <p>{noticia.descricao}</p>
      </article>
    </div>
  );
}
