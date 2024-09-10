import React from 'react';

export default function ConteudoGostar() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold">CONTEUDO QUE VOCÊ PODE GOSTAR</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4 xl:px-4 max-sm:px-6  ">
        <div className="bg-white p-4 rounded shadow max-w-sm">
          <img src="../assets/noticia1.jpg" alt="Conteudo" className="w-full h-40 object-cover rounded" />
          <h3 className="mt-4 font-bold">O que foi o Diretas Já?</h3>
          <p className="text-muted-foreground">19/06/2024 | Por Juliana Luz Cerqueira</p>
        </div>
        <div className="bg-white p-4 rounded shadow max-w-sm">
          <img src="../assets/noticia1.jpg" alt="Conteudo" className="w-full h-40 object-cover rounded" />
          <h3 className="mt-4 font-bold">O que é o Banco de Desenvolvimento da América Latina (CAF)</h3>
          <p className="text-muted-foreground">18/06/2024 | Por Carolina Labossière Ulloa Rath</p>
        </div>
        <div className="bg-white p-4 rounded shadow max-w-sm">
          <img src="../assets/noticia1.jpg" alt="Conteudo" className="w-full h-40 object-cover rounded" />
          <h3 className="mt-4 font-bold">O Plano Nacional de Cultura e o direito à cultura no Brasil atual</h3>
          <p className="text-muted-foreground">14/06/2024 | Por Bruno Félix Segatto</p>
        </div>
      </div>
      
    </section>
  );
}
