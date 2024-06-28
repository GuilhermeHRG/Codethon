import React from 'react';
import Button from '../../components/Button/Button';

export default function Inscricao() {
  return (
    <section className="py-8 bg-[#E8BA56] text-center">
      <h2 className="text-2xl font-bold">Newsletter</h2>
      <p className="text-muted-foreground">+ de 500 leitores inscritos</p>
      <div className="flex justify-center mt-4">
        <input type="email" placeholder="Seu email principal" className="max-w-xs rounded p-1" />
      </div>
      <Button className="mt-4 bg-blue-600">Inscrever-se (Gratis)</Button>
    </section>
  );
}
