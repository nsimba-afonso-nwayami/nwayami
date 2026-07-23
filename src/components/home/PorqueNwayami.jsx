"use client";

import { motion } from "framer-motion";

export default function PorqueNwayami() {
  const reasons = [
    {
      icon: "fa-solid fa-shield-halved",
      title: "Segurança de Engenharia",
      desc: "Aplicamos normas rigorosas e controlo técnico em todas as fases do projeto.",
    },
    {
      icon: "fa-solid fa-ruler-combined",
      title: "Precisão Técnica",
      desc: "Execução orientada ao detalhe e à eficiência construtiva.",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Equipa Especializada",
      desc: "Profissionais experientes em construção e fiscalização.",
    },
    {
      icon: "fa-solid fa-clock",
      title: "Cumprimento de Prazos",
      desc: "Planeamento rigoroso para entregas consistentes.",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Soluções Inteligentes",
      desc: "Engenharia aplicada com inovação e eficiência.",
    },
    {
      icon: "fa-solid fa-headset",
      title: "Suporte Contínuo",
      desc: "Acompanhamento técnico durante todo o projeto.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Cabeçalho Animado */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
          >
            Engenharia com{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              rigor e confiança
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Entregamos soluções de engenharia e construção com foco em qualidade,
            segurança e execução responsável.
          </motion.p>
        </div>

        {/* Grid de Razões com Entrada em Cascata */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex gap-4 p-4 sm:p-5 rounded-xl transition-colors duration-300 hover:bg-neutral-50"
            >
              {/* Ícone */}
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-orange-500/10 group-hover:bg-orange-500 transition-colors duration-300">
                <i
                  className={`${item.icon} text-orange-500 group-hover:text-white text-sm transition-colors duration-300`}
                ></i>
              </div>

              {/* Conteúdo */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
