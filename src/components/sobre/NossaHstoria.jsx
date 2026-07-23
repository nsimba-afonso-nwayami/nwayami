"use client";

import Image from "next/image";
import Link from "next/link";

import SobreImg from "@/assets/img/sobre2.jpg";

export default function NossaHistoria() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <div className="relative w-full h-96 sm:h-112 lg:h-136 group">
            <div className="relative w-full h-full overflow-hidden rounded-2xl bg-neutral-100 shadow-xs border border-neutral-200/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5">
              <Image
                src={SobreImg}
                alt="Nwayami Engenharia - Nossa História"
                fill
                priority
                className="object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none"></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              Construindo soluções que
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                geram confiança
              </span>
            </h2>

            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              <p>
                A Nwayami Engenharia & Construção nasceu com o propósito de
                oferecer soluções completas em engenharia, construção civil,
                manutenção predial, fiscalização de obras e consultoria técnica.
              </p>

              <p>
                Ao longo da nossa trajetória, temos desenvolvido projetos
                orientados pela qualidade, inovação e responsabilidade,
                assegurando que cada obra seja executada com elevado rigor
                técnico e respeito pelos prazos estabelecidos.
              </p>

              <p className="text-neutral-500">
                Acreditamos que cada projeto representa um compromisso com os
                nossos clientes, parceiros e com o desenvolvimento sustentável,
                criando infraestruturas seguras, eficientes e preparadas para o
                futuro.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
              >
                Fale Connosco
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
