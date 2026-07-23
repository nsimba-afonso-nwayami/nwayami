"use client";

export default function NossoProcesso() {
  const processo = [
    {
      icon: "fa-solid fa-lightbulb",
      title: "Planeamento",
      description:
        "Analisamos as necessidades, definimos objetivos e estudamos a melhor solução para cada projeto.",
    },
    {
      icon: "fa-solid fa-compass-drafting",
      title: "Projeto",
      description:
        "Desenvolvemos projetos técnicos detalhados com foco na eficiência, segurança e inovação.",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Execução",
      description:
        "Executamos cada obra com elevado rigor técnico, controlo de qualidade e cumprimento dos prazos.",
    },
    {
      icon: "fa-solid fa-key",
      title: "Entrega",
      description:
        "Concluímos cada projeto garantindo excelência, funcionalidade e satisfação do cliente.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Um processo estruturado para{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              garantir resultados consistentes
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Cada projeto segue uma metodologia cuidadosamente planeada,
            assegurando qualidade, transparência e eficiência desde o primeiro
            contacto até à entrega final.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha Contínua de Conexão (Visível apenas em ecrãs grandes) */}
          <div
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-neutral-200 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {processo.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white sm:bg-transparent border border-neutral-200/80 sm:border-transparent hover:bg-white hover:border-neutral-200/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Ícone */}
                <div className="relative mb-5 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center text-orange-500 text-xl group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                    <i className={item.icon}></i>
                  </div>
                </div>

                {/* Conteúdo */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
