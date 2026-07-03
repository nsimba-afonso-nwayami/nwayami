"use client";

import Image from "next/image";
import Link from "next/link";

import SobreImg from "@/assets/img/sobre2.jpg";

export default function NossaHistoria() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Imagem */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={SobreImg}
                alt="Nwayami Engenharia"
                className="w-full h-162.5 object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Card flutuante */}
            <div className="absolute -bottom-8 right-8 bg-white shadow-xl rounded-2xl px-8 py-6">
              <h3 className="text-4xl font-bold text-orange-500">
                15+
              </h3>

              <p className="text-neutral-600 text-sm uppercase tracking-[2px] mt-1">
                Anos de Experiência
              </p>
            </div>

          </div>

          {/* Conteúdo */}
          <div>

            <span className="uppercase tracking-[3px] text-orange-500 font-bold text-xs">
              Nossa História
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Construindo soluções que
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
                geram confiança.
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-neutral-600 leading-8 text-lg">

              <p>
                A Nwayami Engenharia & Construção nasceu com o propósito de
                oferecer soluções completas em engenharia, construção civil,
                manutenção predial, fiscalização de obras e consultoria
                técnica.
              </p>

              <p>
                Ao longo da nossa trajetória, temos desenvolvido projetos
                orientados pela qualidade, inovação e responsabilidade,
                assegurando que cada obra seja executada com elevado rigor
                técnico e respeito pelos prazos estabelecidos.
              </p>

              <p>
                Acreditamos que cada projeto representa um compromisso com os
                nossos clientes, parceiros e com o desenvolvimento sustentável,
                criando infraestruturas seguras, eficientes e preparadas para o
                futuro.
              </p>

            </div>

            <div className="mt-10">
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                Fale Connosco

                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
