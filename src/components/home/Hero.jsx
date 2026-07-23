"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroBg1 from "@/assets/img/hero1.jpg";
import heroBg2 from "@/assets/img/hero2.jpg";
import heroBg3 from "@/assets/img/hero3.jpg";

export default function Hero() {
  const slides = [
    {
      image: heroBg1,
      title: "Construímos projetos que",
      titleHighlight: "transformam o futuro",
      desc: "Soluções completas em engenharia de grande porte, infraestrutura e construção civil com o selo de excelência Nwayami.",
    },
    {
      image: heroBg2,
      title: "Rigor técnico, precisão",
      titleHighlight: "e máxima segurança",
      desc: "Do planejamento à entrega: fiscalização atenta, reabilitação inteligente e consultoria especializada para o mercado corporativo.",
    },
    {
      image: heroBg3,
      title: "Sua visão de engenharia",
      titleHighlight: "materializada com maestria",
      desc: "Garantimos o cumprimento rigoroso de prazos e padrões de sustentabilidade, gerando valor real para cada metro quadrado.",
    },
  ];

  return (
    <section className="relative h-screen min-h-175 w-full bg-neutral-900 text-neutral-50 overflow-hidden">
      {/* Slider Cinematográfico */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={"fade"}
        slidesPerView={1}
        loop
        speed={1400}
        grabCursor={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-12! h-0.75! rounded-none! bg-neutral-600! opacity-40 transition-all duration-300 [&.swiper-pagination-bullet-active]:bg-orange-500! [&.swiper-pagination-bullet-active]:w-16! [&.swiper-pagination-bullet-active]:opacity-100"></span>`;
          },
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative w-full h-full overflow-hidden"
          >
            {/* Imagem com Efeito Zoom Progressivo (Ken Burns) */}
            <div className="absolute inset-0 w-full h-full scale-100 animate-[subtle-zoom_7s_ease-out_infinite]">
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>

            {/* Overlays de Proteção Visual */}
            <div className="absolute inset-0 bg-neutral-950/70 z-10"></div>
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent opacity-50 z-10"></div>

            {/* Conteúdo Dinâmico Centralizado */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
              <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex justify-center">
                <div className="max-w-4xl space-y-6 flex flex-col items-center">
                  {/* Título Reduzido & Proporcional */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 leading-[1.15] tracking-tight">
                    {slide.title}{" "}
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-orange-600 to-amber-400">
                      {slide.titleHighlight}
                    </span>
                  </h1>

                  {/* Descrição Centrada */}
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal mx-auto">
                    {slide.desc}
                  </p>

                  {/* Grupo de Ações (CTAs) */}
                  <div className="flex flex-wrap justify-center gap-4 pt-2">
                    <Link
                      href="/contato"
                      className="bg-orange-500 hover:bg-orange-600 text-neutral-50 px-7 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all duration-300 shadow-md shadow-orange-500/10 hover:-translate-y-0.5"
                    >
                      Solicitar Orçamento
                    </Link>

                    <Link
                      href="/projetos"
                      className="border border-neutral-700 bg-neutral-900/40 hover:bg-neutral-50 hover:border-neutral-50 text-neutral-50 hover:text-neutral-900 px-7 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all duration-300 backdrop-blur-xs"
                    >
                      Ver Portfólio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos Globais Customizados */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          0% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1.08);
          }
        }
        .swiper-pagination {
          text-align: center !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 3rem !important;
          width: 100% !important;
        }
      `}</style>
    </section>
  );
}
