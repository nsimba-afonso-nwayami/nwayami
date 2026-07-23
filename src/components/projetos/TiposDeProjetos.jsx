"use client";

import { motion } from "framer-motion";

export default function TiposDeProjetos() {
  const areas = [
    {
      icon: "fa-solid fa-building",
      title: "Construção Comercial",
      description:
        "Edifícios corporativos, centros comerciais, escritórios e espaços empresariais.",
    },
    {
      icon: "fa-solid fa-house",
      title: "Construção Residencial",
      description:
        "Moradias, condomínios e empreendimentos habitacionais de diferentes dimensões.",
    },
    {
      icon: "fa-solid fa-industry",
      title: "Obras Industriais",
      description:
        "Infraestruturas industriais com foco em eficiência, segurança e durabilidade.",
    },
    {
      icon: "fa-solid fa-school",
      title: "Infraestruturas Públicas",
      description:
        "Escolas, hospitais, edifícios públicos e equipamentos coletivos.",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Manutenção Predial",
      description:
        "Serviços preventivos, corretivos e programados para edifícios e instalações.",
    },
    {
      icon: "fa-solid fa-arrow-up-right-dots",
      title: "Reabilitação",
      description:
        "Modernização e recuperação de edifícios preservando o seu valor estrutural.",
    },
  ];

  // Variantes para entrada em cascata (stagger) dos cartões
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-white border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Áreas onde{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              criamos valor
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Atuamos em diferentes segmentos da engenharia e construção,
            oferecendo soluções adaptadas às necessidades de cada projeto.
          </p>
        </motion.div>

        {/* Grid de Áreas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {areas.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group bg-neutral-50/60 rounded-2xl border border-neutral-200/80 p-6 sm:p-7 hover:border-orange-500/40 hover:bg-white hover:shadow-lg transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Contentor do Ícone */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-lg sm:text-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-xs shrink-0 mb-5">
                  <i className={item.icon}></i>
                </div>

                {/* Título */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Descrição */}
                <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
