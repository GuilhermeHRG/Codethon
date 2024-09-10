import React from 'react';
import Button from '../../components/Button/Button';

export default function Inscricao() {
  return (
    <section className="py-8 bg-gray-200 text-center">
      <h2 className="text-2xl font-bold">Newsletter</h2>
      <p className="text-muted-foreground">+ de 500 leitores inscritos</p>
      <div className="flex justify-center mt-4">
        <input type="email" placeholder="Seu email" className="max-w-xs rounded py-2 px-3" />
      </div>
      <Button className="mt-4 bg-green-500 font-semibold">Inscrever-se <strong>(Gratis)</strong></Button>
    </section>
  );
}
