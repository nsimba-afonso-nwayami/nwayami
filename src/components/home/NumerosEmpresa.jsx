"use client";

import Link from "next/link";
import numerosBg from "@/assets/img/numeros.jpg";

export default function NumerosEmpresa() {
  const numeros = [
    { value: "50+", title: "Projetos Executados" },
    { value: "15+", title: "Anos de Experiência" },
    { value: "100%", title: "Compromisso com a Qualidade" },
    { value: "24/7", title: "Suporte Técnico" },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${numerosBg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950/85 via-neutral-950/60 to-neutral-950/85" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Resultados que refletem a confiança{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              dos nossos clientes
            </span>
          </h2>

          <p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Cada projeto entregue representa o nosso compromisso permanente com
            qualidade, inovação e excelência técnica.
          </p>
        </div>

        {/* Números em Destaque */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mt-12 sm:mt-14">
          {numeros.map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 tracking-tight">
                {item.value}
              </h3>

              <p className="mt-2 sm:mt-3 text-neutral-300 uppercase tracking-wider text-xs sm:text-sm font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Botão CTA */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-orange-500/10"
          >
            Solicitar Orçamento
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
        </div>

      </div>
    </section>
  );
}
