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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-neutral-900">
            Projetos que demonstram
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              a nossa experiência
            </span>
          </h2>

          <p className="mt-8 text-neutral-600 leading-8">
            Conheça alguns dos projetos desenvolvidos pela Nwayami nas áreas de
            construção civil, manutenção predial e reabilitação.
          </p>
        </div>

        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {categorias.map((item) => (
            <button
              key={item}
              onClick={() => setCategoria(item)}
              className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300
              ${
                categoria === item
                  ? "bg-orange-500 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-orange-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}

        <LightGallery
          key={categoria}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector=".gallery-item"
        >
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {filtered.map((item) => (
              <a
                key={item.title}
                href={item.image.src}
                className="gallery-item group block overflow-hidden rounded-2xl bg-white border border-neutral-200"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <i className="fa-solid fa-plus text-orange-500 text-xl"></i>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <span className="text-xs uppercase tracking-[3px] font-bold text-orange-500">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-neutral-900">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-4 text-neutral-500">
                    <i className="fa-solid fa-location-dot text-orange-500"></i>
                    {item.location}
                  </div>

                  <p className="mt-5 text-neutral-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </LightGallery>
      </div>
    </section>
  );
}
