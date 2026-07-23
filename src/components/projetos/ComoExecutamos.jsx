"use client";

import { motion } from "framer-motion";

export default function ComoExecutamos() {
  const etapas = [
    {
      icon: "fa-solid fa-clipboard-list",
      title: "Levantamento",
      description:
        "Analisamos o local, compreendemos as necessidades do cliente e recolhemos todas as informações técnicas necessárias.",
    },
    {
      icon: "fa-solid fa-drafting-compass",
      title: "Planeamento",
      description:
        "Definimos o plano de execução, cronograma, recursos e metodologia para garantir eficiência em todas as fases.",
    },
    {
      icon: "fa-solid fa-building",
      title: "Execução",
      description:
        "A nossa equipa executa cada etapa seguindo elevados padrões de qualidade, segurança e rigor técnico.",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Fiscalização",
      description:
        "Acompanhamos continuamente a obra para assegurar conformidade, desempenho e cumprimento dos requisitos.",
    },
    {
      icon: "fa-solid fa-key",
      title: "Entrega",
      description:
        "Concluímos o projeto realizando todos os testes, validações e entrega formal ao cliente.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Como executamos{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              cada projeto
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Trabalhamos com um processo estruturado que garante qualidade,
            segurança e cumprimento rigoroso dos prazos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha Central Vertical para Desktop com Animação de Crescimento */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden lg:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-0.5 bg-neutral-200 origin-top"
          />

          {/* Linha Lateral Vertical para Mobile e Tablet */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="lg:hidden absolute left-5 top-6 bottom-6 w-0.5 bg-neutral-200 origin-top"
          />

          <div className="space-y-8 sm:space-y-12">
            {etapas.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center pl-10 lg:pl-0"
                >
                  {/* Nó de Ancoragem para Mobile */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="lg:hidden absolute left-5 top-8 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-orange-500 z-10"
                  />

                  {/* Cartão de Conteúdo */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: left ? -35 : 35,
                      y: 15,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`${
                      left
                        ? "lg:pr-12 lg:text-right"
                        : "lg:order-2 lg:pl-12 lg:text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="group bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-7 hover:border-orange-500/40 hover:shadow-lg transition-colors duration-300 relative"
                    >
                      {/* Ícone Alinhado */}
                      <div
                        className={`flex items-center mb-4 ${
                          left ? "lg:justify-end" : "justify-start"
                        }`}
                      >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-lg sm:text-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-xs shrink-0">
                          <i className={item.icon}></i>
                        </div>
                      </div>

                      {/* Título */}
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Descrição */}
                      <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Espaço para manter a alternância no Desktop */}
                  <div className="hidden lg:block" />

                  {/* Nó Central da Timeline no Desktop */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10"
                  >
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-orange-500 shadow-xs" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
