"use client";

import Link from "next/link";

export default function CtaOrcamento() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">

        {/* Título */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
          Precisa de um projeto de{" "}
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
            engenharia ou construção?
          </span>
        </h2>

        {/* Texto */}
        <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Fale connosco e receba uma proposta técnica personalizada para o seu projeto.
          Garantimos qualidade, segurança e cumprimento rigoroso dos prazos.
        </p>

        {/* Botoes CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          
          <Link
            href="/contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
          >
            Solicitar Orçamento
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>

          <Link
            href="/projetos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-neutral-300 hover:border-orange-500 text-neutral-900 hover:text-orange-500 bg-white px-7 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver Projetos
          </Link>

        </div>

      </div>
    </section>
  );
}
