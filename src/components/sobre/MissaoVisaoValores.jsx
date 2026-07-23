"use client";

import { motion } from "framer-motion";

export default function MissaoVisaoValores() {
  const items = [
    {
      icon: "fa-solid fa-bullseye",
      title: "Missão",
      description:
        "Desenvolver soluções inovadoras em engenharia, construção civil e manutenção predial, entregando projetos com qualidade, segurança e elevado rigor técnico, contribuindo para o crescimento sustentável dos nossos clientes e da sociedade.",
    },
    {
      icon: "fa-solid fa-eye",
      title: "Visão",
      description:
        "Ser uma referência no setor da engenharia e construção em Angola, reconhecida pela excelência, inovação, compromisso e confiança em cada projeto realizado.",
    },
    {
      icon: "fa-solid fa-gem",
      title: "Valores",
      description:
        "Ética, integridade, compromisso, inovação, segurança, sustentabilidade, respeito pelas pessoas e foco permanente na qualidade e satisfação dos nossos clientes.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden">
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
            Os princípios que orientam{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              cada projeto que executamos
            </span>
          </h2>
        </motion.div>

        {/* Grelha de 3 Cartões */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group p-6 sm:p-8 bg-white rounded-2xl border border-neutral-200/80 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-start"
            >
              {/* Ícone */}
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 mb-6 shrink-0">
                <i
                  className={`${item.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}
                ></i>
              </div>

              {/* Texto */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
