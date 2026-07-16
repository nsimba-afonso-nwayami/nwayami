"use client";

import Link from "next/link";

import bannerSobre from "@/assets/img/sobre.jpg";

export default function BannerSobre() {
  return (
    <section
      className="relative h-[65vh] min-h-125 flex items-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bannerSobre.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950/80 via-neutral-950/60 to-neutral-950/75" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-20 lg:pt-24">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-neutral-300 mb-6">
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Início
            </Link>

            <i className="fa-solid fa-angle-right text-xs text-orange-500"></i>

            <span className="text-white">Quem Somos</span>
          </div>

          {/* Título */}
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight">
            Engenharia construída
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              com visão e excelência.
            </span>
          </h1>

          {/* Texto */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Conheça a nossa história, os nossos valores e a experiência que faz
            da Nwayami um parceiro de confiança em engenharia, construção civil
            e manutenção predial.
          </p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="absolute bottom-0 left-0 w-full border-b border-white/10"></div>
    </section>
  );
}
