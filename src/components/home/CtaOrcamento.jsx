"use client";

import Link from "next/link";

export default function CtaOrcamento() {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
          Precisa de um projeto de
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
            engenharia ou construção?
          </span>
        </h2>

        {/* Texto */}
        <p className="mt-8 text-neutral-600 text-lg leading-8 max-w-3xl mx-auto">
          Fale connosco e receba uma proposta técnica personalizada para o seu projeto.
          Garantimos qualidade, segurança e cumprimento rigoroso dos prazos.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            href="/contato"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-md font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </Link>

          <Link
            href="/projetos"
            className="border border-neutral-300 hover:border-orange-500 text-neutral-900 hover:text-orange-500 px-10 py-4 rounded-md font-bold transition-all duration-300"
          >
            Ver Projetos
          </Link>

        </div>

      </div>
    </section>
  );
}
