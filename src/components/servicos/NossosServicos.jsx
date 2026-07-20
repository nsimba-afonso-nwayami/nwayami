"use client";

import Image from "next/image";

import Servico1 from "@/assets/img/servico1.jpg";
import Servico2 from "@/assets/img/servico2.jpg";
import Servico3 from "@/assets/img/servico3.jpg";

export default function NossosServicos() {
  const services = [
    {
      image: Servico1,
      icon: "fa-solid fa-building",
      title: "Construção Civil",
      description:
        "Executamos projetos residenciais, comerciais e industriais com elevado rigor técnico, garantindo qualidade, segurança e cumprimento dos prazos estabelecidos.",
      benefits: [
        "Obras residenciais e comerciais",
        "Gestão completa da execução",
        "Controlo rigoroso da qualidade",
        "Cumprimento dos prazos",
      ],
    },
    {
      image: Servico2,
      icon: "fa-solid fa-compass-drafting",
      title: "Engenharia",
      description:
        "Desenvolvemos soluções técnicas completas para diferentes tipos de empreendimentos, desde estudos preliminares até ao acompanhamento da execução.",
      benefits: [
        "Projetos de engenharia",
        "Dimensionamento técnico",
        "Acompanhamento especializado",
        "Soluções inovadoras",
      ],
    },
    {
      image: Servico3,
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Manutenção Predial",
      description:
        "Prestamos serviços de manutenção preventiva, corretiva e preditiva para preservar o desempenho e aumentar a vida útil das infraestruturas.",
      benefits: [
        "Manutenção preventiva",
        "Intervenções corretivas",
        "Inspeções periódicas",
        "Maior durabilidade dos edifícios",
      ],
    },
    {
      image: Servico1,
      icon: "fa-solid fa-users-gear",
      title: "Consultoria Técnica",
      description:
        "Apoiamos empresas e investidores com análises técnicas, planeamento estratégico e soluções orientadas para maior eficiência e rentabilidade.",
      benefits: [
        "Estudos de viabilidade",
        "Planeamento técnico",
        "Apoio à decisão",
        "Otimização de investimentos",
      ],
    },
    {
      image: Servico2,
      icon: "fa-solid fa-helmet-safety",
      title: "Fiscalização de Obras",
      description:
        "Garantimos o acompanhamento permanente das obras para assegurar conformidade técnica, segurança e qualidade durante todas as fases do projeto.",
      benefits: [
        "Controlo de qualidade",
        "Fiscalização técnica",
        "Gestão de conformidade",
        "Redução de riscos",
      ],
    },
    {
      image: Servico3,
      icon: "fa-solid fa-arrow-up-right-dots",
      title: "Reabilitação de Edifícios",
      description:
        "Recuperamos e modernizamos edifícios existentes, preservando a sua estrutura e aumentando o seu desempenho, segurança e valorização.",
      benefits: [
        "Remodelação",
        "Recuperação estrutural",
        "Modernização de espaços",
        "Valorização do património",
      ],
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center mb-24">

          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Soluções completas para todas as fases
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              do seu projeto
            </span>
          </h2>

          <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl mx-auto">
            Atuamos desde o planeamento até à execução e manutenção,
            oferecendo soluções integradas para empresas, instituições e
            clientes particulares.
          </p>

        </div>

        <div className="space-y-32">

          {services.map((service, index) => (

            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Imagem */}

              <div className="relative h-125 rounded-3xl overflow-hidden group">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 to-transparent"></div>

              </div>

              {/* Conteúdo */}

              <div>

                <div className="w-18 h-18 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                  <i
                    className={`${service.icon} text-3xl text-orange-500`}
                  ></i>

                </div>

                <h3 className="mt-8 text-4xl font-bold text-neutral-900">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-10">

                  {service.benefits.map((benefit) => (

                    <div
                      key={benefit}
                      className="flex items-center gap-3"
                    >

                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">

                        <i className="fa-solid fa-check text-white text-xs"></i>

                      </div>

                      <span className="text-neutral-700 font-medium">
                        {benefit}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
