"use client";

import Link from "next/link";

export default function Servicos() {
  const services = [
    {
      icon: "fa-solid fa-building",
      title: "Construção Civil",
      description:
        "Execução de obras residenciais, comerciais e industriais com elevado padrão de qualidade, segurança e cumprimento rigoroso dos prazos.",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Manutenção Predial",
      description:
        "Serviços preventivos, corretivos e preditivos para edifícios, condomínios, empresas e instalações industriais.",
    },
    {
      icon: "fa-solid fa-compass-drafting",
      title: "Engenharia",
      description:
        "Desenvolvimento de projetos, estudos técnicos, dimensionamentos e acompanhamento completo de obras.",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Fiscalização de Obras",
      description:
        "Acompanhamento técnico permanente para assegurar qualidade, conformidade e eficiência durante toda a execução.",
    },
    {
      icon: "fa-solid fa-arrow-up-right-dots",
      title: "Reabilitação",
      description:
        "Recuperação, remodelação e modernização de edifícios, preservando a estrutura e aumentando o seu valor.",
    },
    {
      icon: "fa-solid fa-users-gear",
      title: "Consultoria",
      description:
        "Assessoria especializada para planeamento, gestão, viabilidade técnica e otimização de investimentos em engenharia.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Soluções completas para{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              construir, manter e evoluir
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Da construção civil à manutenção predial, oferecemos soluções
            integradas que garantem qualidade, segurança e desempenho em cada
            etapa do seu projeto.
          </p>
        </div>

        {/* Lista de Serviços */}
        <div className="border-t border-neutral-200">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/servicos"
              className="group flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-7 border-b border-neutral-200 hover:border-orange-500 transition-colors duration-300"
            >
              <div className="flex gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 self-end lg:self-center">
                <i
                  className={`${service.icon} text-2xl text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></i>

                <i className="fa-solid fa-arrow-right text-lg text-neutral-400 group-hover:text-orange-500 group-hover:translate-x-1.5 transition-all duration-300"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
