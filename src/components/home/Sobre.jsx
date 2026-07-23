"use client";

import Image from "next/image";
import Link from "next/link";

import sobre2 from "@/assets/img/sobre2.jpg";

export default function Sobre() {
  const stats = [
    {
      number: "50+",
      label: "Projetos Executados",
      icon: "fa-solid fa-building",
    },
    {
      number: "100%",
      label: "Compromisso",
      icon: "fa-solid fa-award",
    },
    {
      number: "24/7",
      label: "Suporte Técnico",
      icon: "fa-solid fa-headset",
    },
    {
      number: "360°",
      label: "Soluções Integradas",
      icon: "fa-solid fa-compass-drafting",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 text-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda: Conteúdo */}
          <div className="space-y-6">
            <div className="space-y-3">
              {/* Título Reduzido & Padronizado */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Engenharia que transforma{" "}
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                  desafios em resultados
                </span>
              </h2>
            </div>

            {/* Descrição Ajustada */}
            <div className="space-y-3 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>
                A Nwayami Engenharia & Construção atua no desenvolvimento de
                soluções completas para projetos de engenharia, construção
                civil, fiscalização, consultoria e reabilitação de edifícios.
              </p>
              <p className="text-neutral-500">
                Trabalhamos lado a lado com os nossos clientes, garantindo
                qualidade, inovação, segurança e cumprimento rigoroso dos
                prazos, transformando cada projeto num investimento sólido e
                duradouro.
              </p>
            </div>

            {/* Indicadores Ajustados */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-4 border-t border-neutral-200">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="group relative pt-3 border-t-2 border-neutral-200 hover:border-orange-500 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2.5 text-neutral-400 group-hover:text-orange-500 transition-colors duration-300 mb-1.5">
                    <i className={`${item.icon} text-sm`}></i>
                    <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500">
                      {item.label}
                    </p>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                    {item.number}
                  </h3>
                </div>
              ))}
            </div>

            {/* Botão com Padding Ajustado */}
            <div className="pt-2">
              <Link
                href="/quem-somos"
                className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-neutral-50 px-7 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                Conheça a Empresa
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>

          {/* Coluna da Direita: Imagem */}
          <div className="relative w-full h-100 sm:h-120 lg:h-140 group">
            <div className="relative w-full h-full overflow-hidden rounded-2xl bg-neutral-200 shadow-xs border border-neutral-200/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5">
              <Image
                src={sobre2}
                alt="Estrutura Nwayami Engenharia"
                fill
                priority={true}
                className="object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
