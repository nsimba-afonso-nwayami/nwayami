"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Servico1 from "@/assets/img/servico1.jpg";
import Servico2 from "@/assets/img/servico2.jpg";
import Servico3 from "@/assets/img/servico3.jpg";

export default function NossosServicos() {
  const services = [
    {
      image: Servico1,
      title: "Construção Civil",
      description:
        "Executamos projetos residenciais, comerciais e industriais com elevado rigor técnico, garantindo qualidade e rigor nos prazos.",
      benefits: [
        "Obras residenciais e comerciais",
        "Gestão completa da execução",
        "Controlo rigoroso da qualidade",
        "Cumprimento dos prazos",
      ],
    },
    {
      image: Servico2,
      title: "Engenharia",
      description:
        "Desenvolvemos soluções técnicas completas para diferentes tipos de empreendimentos, desde estudos preliminares à execução.",
      benefits: [
        "Projetos de engenharia",
        "Dimensionamento técnico",
        "Acompanhamento especializado",
        "Soluções inovadoras",
      ],
    },
    {
      image: Servico3,
      title: "Manutenção Predial",
      description:
        "Serviços de manutenção preventiva, corretiva e preditiva para preservar o desempenho e aumentar a durabilidade das estruturas.",
      benefits: [
        "Manutenção preventiva",
        "Intervenções corretivas",
        "Inspeções periódicas",
        "Maior durabilidade",
      ],
    },
    {
      image: Servico1,
      title: "Consultoria Técnica",
      description:
        "Apoiamos empresas e investidores com análises técnicas e planeamento estratégico orientados para maior eficiência.",
      benefits: [
        "Estudos de viabilidade",
        "Planeamento técnico",
        "Apoio à decisão",
        "Otimização de investimentos",
      ],
    },
    {
      image: Servico2,
      title: "Fiscalização de Obras",
      description:
        "Acompanhamento permanente das obras para assegurar conformidade técnica, segurança e qualidade em todas as fases.",
      benefits: [
        "Controlo de qualidade",
        "Fiscalização técnica",
        "Gestão de conformidade",
        "Redução de riscos",
      ],
    },
    {
      image: Servico3,
      title: "Reabilitação de Edifícios",
      description:
        "Recuperamos e modernizamos edifícios existentes, preservando a sua estrutura e aumentando o seu valor patrimonial.",
      benefits: [
        "Remodelação integral",
        "Recuperação estrutural",
        "Modernização de espaços",
        "Valorização do património",
      ],
    },
  ];

  return (
    <section className="py-24 bg-neutral-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Soluções integradas para{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              todas as fases do projeto
            </span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Atuamos do planeamento à manutenção, oferecendo rigor técnico e
            excelência para empresas e clientes particulares.
          </p>
        </motion.div>

        {/* Grelha de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl border border-neutral-200/80 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Imagem do Cartão */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 via-transparent to-black/10" />
                </div>

                {/* Conteúdo */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Lista de Benefícios */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <div className="pt-4 border-t border-neutral-100">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <i className="fa-solid fa-check text-orange-500 text-[10px] shrink-0"></i>
                        <span className="text-xs text-neutral-600 font-medium truncate">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
