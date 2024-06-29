import React from "react";
import { useNavigate } from "react-router-dom";

export default function LikeContent() {
  const navigate = useNavigate();

  const navigateToNoticia = (id) => {
    navigate(`/noticia/${id}`); // Substitua `/noticia/${id}` com o caminho desejado
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <header className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Conteúdos que você pode gostar</h2>
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            Explore artigos e histórias que podem te interessar!
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {/* Card 1 */}
          <div
            onClick={() => navigateToNoticia(1)}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 cursor-pointer"
          >
            <img
              src="https://img.freepik.com/fotos-gratis/colagem-criativa-do-planeta-marte-com-astronauta_23-2149488968.jpg?t=st=1719669731~exp=1719673331~hmac=13313c171262dacaaa08e90a27645a59ed3042442ed7bbe33aa59b6291938a4b&w=1060"
              alt="A Era da Exploração Espacial"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              A Era da Exploração Espacial
            </h3>
            <p className="text-sm text-gray-500 mt-2">19/06/2024 | Por Ana Beatriz Oliveira</p>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => navigateToNoticia(2)}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 cursor-pointer"
          >
            <img
              src="https://img.freepik.com/vetores-gratis/fundo-do-sistema-solar_1284-12725.jpg?t=st=1719669804~exp=1719673404~hmac=b70a3ca275487d583f063cc8a5839eb3dfc622e7ef9be2c865f5c7723fac22ec&w=740"
              alt="Explorando o Sistema Solar"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              Explorando o Sistema Solar
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              18/06/2024 | Por Carlos Silva
            </p>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => navigateToNoticia(3)}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 cursor-pointer"
          >
            <img
              src="https://img.freepik.com/fotos-premium/um-casal-esta-no-topo-de-um-penhasco-com-a-terra-ao-fundo_7023-8795.jpg?w=1060"
              alt="O Futuro da Vida em Outros Planetas"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              O Futuro da Vida em Outros Planetas
            </h3>
            <p className="text-sm text-gray-500 mt-2">14/06/2024 | Por Mariana Costa</p>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => navigateToNoticia(4)}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 cursor-pointer"
          >
            <img
              src="https://img.freepik.com/fotos-gratis/exploracao-do-campo-estelar-da-natureza-com-telescopio-gerado-por-ia_188544-26097.jpg?t=st=1719669910~exp=1719673510~hmac=27696af05ad5bc28c434b473be46742291a85b064931ca72d1f64b3b44457fb4&w=1060"
              alt="Avanços na Astronomia"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              Avanços na Astronomia
            </h3>
            <p className="text-sm text-gray-500 mt-2">10/06/2024 | Por Felipe Mendes</p>
          </div>

          
        </div>
      </div>
    </section>
  );
}
