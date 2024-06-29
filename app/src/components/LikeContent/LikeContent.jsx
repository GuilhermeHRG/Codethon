import React from "react";
import image from '../../assets/noticia1.jpg'

export default function LikeContent() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-full my-16 mx-8">
        <header className="text-center mb-8">
          <h2 className="text-2xl md:text-5xl font-bold">Conteúdos que você pode gostar</h2>
        </header>

        <div className="flex flex-wrap justify-center items-center gap-4 w-11/12">
          <div className="flex flex-col flex-1 gap-4 bg-white p-4 rounded-xl border-2 border-gray-300">
            <img
              src={image}
              alt="Content"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 font-bold">What was the Diretas Já movement?</h3>
            <p className="text-muted-foreground">19/06/2024 | By Juliana Luz Cerqueira</p>
          </div>
          <div className="flex flex-col flex-1 gap-4 bg-white p-4 rounded-xl border-2 border-gray-300">
            <img
              src={image}
              alt="Content"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 font-bold">
              What is the Development Bank of Latin America (CAF)?
            </h3>
            <p className="text-muted-foreground">
              18/06/2024 | By Carolina Labossière Ulloa Rath
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-4 bg-white p-4 rounded-xl border-2 border-gray-300">
            <img
              src={image}
              alt="Content"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 font-bold">
              The National Culture Plan and the right to culture in Brazil today
            </h3>
            <p className="text-muted-foreground">14/06/2024 | By Bruno Félix Segatto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
