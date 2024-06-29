import React from "react";

export default function Newsletter() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#E8BA56] min-h-96 w-full">
      <div className="flex flex-col justify-center items-center gap-4 w-11/12 md:w-1/3">
        <h2 className="text-4xl md:text-5xl text-center font-bold">Assine nossa newsletter</h2>
        <p className="text-gray-700 text-xl">+ de 500 leitores inscritos</p>
        <input
          type="email"
          placeholder="Seu email principal"
          className="rounded-xl p-4 bg-white w-full text-xl"
        />
        <button className="bg-blue-600 text-white text-xl p-4 font-medium rounded-xl w-full hover:bg-blue-700">
          Inscrever-se (Gratis)
        </button>
      </div>
    </section>
  );
}
