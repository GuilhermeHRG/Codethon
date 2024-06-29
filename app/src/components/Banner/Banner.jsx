import React from "react";
import bg from "../../assets/bg.svg";
function Banner() {
  return (
    <section
      className="flex items-center w-full bg-center bg-cover bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col gap-4 w-11/12 md:w-1/2 text-white mx-4 md:mx-20">
        <header>
          <h1 className="text-4xl md:text-7xl font-bold">
            Novo aplicativo de realidade aumentada promete revolucionar o
            turismo
          </h1>
        </header>
        <p className="text-xl md:text-3xl text-justify w-10/12">
          Levamos educação política a qualquer pessoa, em qualquer lugar, de
          forma fácil e gratuita, sempre com respeito pela pluralidade de
          ideias.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-xl text-xl md:text-2xl font-medium w-1/2">
          Inscrever-se (Gratis)
        </button>
      </div>
    </section>
  );
}

export default Banner;
