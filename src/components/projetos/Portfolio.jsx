"use client";

import { useState } from "react";
import Image from "next/image";

import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import Projeto1 from "@/assets/img/projeto1.jpg";
import Projeto2 from "@/assets/img/projeto2.jpg";
import Projeto3 from "@/assets/img/projeto3.jpg";

export default function Portfolio() {
  const categorias = ["Todos", "Construção", "Manutenção", "Reabilitação"];

  const [categoria, setCategoria] = useState("Todos");

  const projetos = [
    {
      image: Projeto1,
      category: "Construção",
      title: "Edifício Empresarial Atlântico",
      location: "Luanda, Angola",
      description:
        "Execução integral de um edifício corporativo de elevado padrão.",
    },
    {
      image: Projeto2,
      category: "Manutenção",
      title: "Centro Comercial Kilamba",
      location: "Luanda, Angola",
      description:
        "Serviços de manutenção preventiva e corretiva das instalações.",
    },
    {
      image: Projeto3,
      category: "Reabilitação",
      title: "Reabilitação de Escritórios",
      location: "Talatona, Angola",
      description:
        "Modernização completa de espaços administrativos e técnicos.",
    },
    {
      image: Projeto1,
      category: "Construção",
      title: "Condomínio Residencial",
      location: "Benguela, Angola",
      description:
        "Construção de edifícios residenciais com soluções modernas.",
    },
    {
      image: Projeto2,
      category: "Manutenção",
      title: "Hospital Provincial",
      location: "Huambo, Angola",
      description: "Plano anual de manutenção predial e equipamentos.",
    },
    {
      image: Projeto3,
      category: "Reabilitação",
      title: "Complexo Industrial",
      location: "Lobito, Angola",
      description: "Reabilitação estrutural e reforço de infraestruturas.",
    },
  ];

  const filtered =
    categoria === "Todos"
      ? projetos
      : projetos.filter((item) => item.category === categoria);

  return (
    <section className="py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Projetos que demonstram{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              a nossa experiência
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Conheça alguns dos projetos desenvolvidos nas áreas de construção
            civil, manutenção predial e reabilitação.
          </p>
        </div>

        {/* Filtros em Pílula */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-14">
          {categorias.map((item) => (
            <button
              key={item}
              onClick={() => setCategoria(item)}
              className={`cursor-pointer px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                categoria === item
                  ? "bg-orange-500 text-white shadow-xs shadow-orange-500/20"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid com LightGallery */}
        <LightGallery
          key={categoria}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector=".gallery-item"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((item) => (
              <a
                key={item.title}
                href={item.image.src}
                className="gallery-item group bg-white rounded-2xl border border-neutral-200/80 hover:border-orange-500/40 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
              >
                {/* Contentor da Imagem */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Gradient Overlay Sutil */}
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 via-transparent to-black/20" />

                  {/* Tag de Categoria */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-orange-500 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 shadow-xs">
                    {item.category}
                  </div>

                  {/* Botão de Expandir no Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-950/20">
                    <div className="w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-orange-500 text-base border border-white/20 transition-transform duration-300 group-hover:scale-110">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>

                {/* Corpo do Cartão */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Rodapé do Cartão */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-neutral-500">
                    <i className="fa-solid fa-location-dot text-orange-500 text-sm"></i>
                    <span>{item.location}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </LightGallery>
      </div>
    </section>
  );
}
