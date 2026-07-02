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
      className="relative py-32 overflow-hidden bg-cover bg-center bg-fixed md:bg-fixed lg:bg-fixed"
      style={{
        backgroundImage: `url(${numerosBg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950/85 via-neutral-950/60 to-neutral-950/85" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight">
            Resultados que refletem a confiança
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              dos nossos clientes.
            </span>
          </h2>

          <p className="mt-8 text-neutral-300 text-lg leading-8">
            Cada projeto entregue representa o nosso compromisso permanente com
            qualidade, inovação e excelência técnica.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {numeros.map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-5xl lg:text-6xl font-bold text-orange-500">
                {item.value}
              </h3>

              <p className="mt-5 text-neutral-200 uppercase tracking-wider text-sm">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            Solicitar Orçamento
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
