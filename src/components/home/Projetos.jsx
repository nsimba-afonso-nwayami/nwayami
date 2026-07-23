"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import servico1 from "@/assets/img/servico1.jpg";
import servico2 from "@/assets/img/servico2.jpg";
import servico3 from "@/assets/img/servico3.jpg";
import servico4 from "@/assets/img/servico1.jpg";
import servico5 from "@/assets/img/servico2.jpg";
import servico6 from "@/assets/img/servico3.jpg";

// LightGallery
import LightGallery from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function Projetos() {
  const projects = [
    {
      image: servico1,
      title: "Complexo Residencial Talatona",
      desc: "Construção de edifício multifamiliar com foco em eficiência estrutural e conforto térmico.",
    },
    {
      image: servico2,
      title: "Centro Comercial Luanda Sul",
      desc: "Projeto comercial de grande escala com soluções modernas de engenharia e segurança.",
    },
    {
      image: servico3,
      title: "Reabilitação Industrial",
      desc: "Modernização completa de instalações industriais com reforço estrutural e técnico.",
    },
    {
      image: servico4,
      title: "Edifício Corporativo",
      desc: "Construção de sede empresarial com design contemporâneo e alta eficiência energética.",
    },
    {
      image: servico5,
      title: "Infraestrutura Urbana",
      desc: "Execução de obras de infraestrutura com foco em durabilidade e sustentabilidade.",
    },
    {
      image: servico6,
      title: "Projeto de Engenharia Integrada",
      desc: "Solução completa de engenharia desde o planeamento até à execução final.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Projetos que definem{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              a nossa engenharia
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Cada projeto representa o nosso compromisso com qualidade,
            inovação e execução rigorosa em engenharia e construção civil.
          </p>
        </div>

        {/* Swiper Ajustado */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.3}
          loop
          speed={1500}
          grabCursor={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            540: { slidesPerView: 2.2, spaceBetween: 20 },
            768: { slidesPerView: 3.2, spaceBetween: 24 },
            1100: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <LightGallery
                speed={500}
                plugins={[lgZoom, lgThumbnail]}
                elementClassNames="h-full"
              >
                <a
                  href={project.image.src}
                  className="group block bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-neutral-200/80 hover:-translate-y-1 h-full"
                >
                  {/* Image com altura reduzida para proporcionalidade */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/25 transition-colors duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-neutral-600 leading-relaxed text-xs sm:text-sm line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                </a>
              </LightGallery>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
          >
            Ver Todos os Projetos
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
        </div>

      </div>
    </section>
  );
}