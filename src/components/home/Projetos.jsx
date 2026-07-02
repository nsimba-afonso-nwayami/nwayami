"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import servico1 from "@/assets/img/servico1.jpg";
import servico2 from "@/assets/img/servico2.jpg";
import servico3 from "@/assets/img/servico3.jpg";
import servico4 from "@/assets/img/servico1.jpg";
import servico5 from "@/assets/img/servico2.jpg";
import servico6 from "@/assets/img/servico3.jpg";

// LightGallery (assumindo que já tens instalado)
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
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Projetos que definem
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              a nossa engenharia
            </span>
          </h2>

          <p className="mt-8 text-neutral-600 text-lg leading-8">
            Cada projeto representa o nosso compromisso com qualidade,
            inovação e execução rigorosa em engenharia e construção civil.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1.2}
          navigation
          loop
          speed={1500}
          grabCursor={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
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
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition"></div>

                    {/* badge */}
                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                      Projeto {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-orange-500 transition">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-neutral-600 leading-7 text-sm">
                      {project.desc}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-orange-500 font-semibold text-sm">
                      Ver detalhes
                      <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
                    </div>
                  </div>
                </a>
              </LightGallery>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver Todos os Projetos
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

      </div>
    </section>
  );
}
