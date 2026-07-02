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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Coluna da Esquerda: Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-3 text-orange-500 font-bold uppercase tracking-[3px] text-xs">
                Sobre a Nwayami
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
                Engenharia que transforma{" "}
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
                  desafios em resultados.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
              <p>
                A Nwayami Engenharia & Construção atua no desenvolvimento de soluções completas para projetos de engenharia, construção civil, fiscalização, consultoria e reabilitação de edifícios.
              </p>
              <p className="text-base text-neutral-500">
                Trabalhamos lado a lado com os nossos clientes, garantindo qualidade, inovação, segurança e cumprimento rigoroso dos prazos, transformando cada projeto num investimento sólido e duradouro.
              </p>
            </div>

            {/* Indicadores Minimalistas */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-4 border-t border-neutral-200">
              {stats.map((item) => (
                <div key={item.label} className="group relative pt-4 border-t-2 border-neutral-200 hover:border-orange-500 transition-colors duration-300">
                  <div className="flex items-center gap-3 text-neutral-400 group-hover:text-orange-500 transition-colors duration-300 mb-2">
                    <i className={`${item.icon} text-base`}></i>
                    <p className="text-xs uppercase tracking-wider font-bold text-neutral-500">
                      {item.label}
                    </p>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                    {item.number}
                  </h3>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/quem-somos"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-neutral-50 px-8 py-4 rounded-md font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              >
                Conheça a Empresa
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>

          {/* Coluna da Direita: Imagem Limpa */}
          <div className="relative w-full h-125 lg:h-162.5 group">
            <div className="relative w-full h-full overflow-hidden rounded-2xl bg-neutral-200 shadow-sm border border-neutral-100 transition-all duration-500 hover:shadow-xl hover:shadow-orange-950/5 hover:-translate-y-1">
              <Image
                src={sobre2}
                alt="Estrutura Nwayami Engenharia"
                fill
                priority={true}
                className="object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay sutil industrial quase impercetível */}
              <div className="absolute inset-0 bg-orange-950/5 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
