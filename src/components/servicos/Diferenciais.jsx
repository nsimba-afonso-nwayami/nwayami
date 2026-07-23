"use client";

export default function Diferenciais() {
  const diferenciais = [
    {
      icon: "fa-solid fa-user-gear",
      title: "Equipa Especializada",
      description:
        "Profissionais qualificados em engenharia, construção civil e manutenção predial, preparados para atuar em projetos de diferentes dimensões.",
    },
    {
      icon: "fa-solid fa-clock",
      title: "Cumprimento de Prazos",
      description:
        "Planeamento rigoroso, gestão eficiente e acompanhamento permanente para garantir entregas dentro dos prazos estabelecidos.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Segurança em Todas as Etapas",
      description:
        "Aplicação de procedimentos técnicos e boas práticas para assegurar ambientes de trabalho seguros e conformes.",
    },
    {
      icon: "fa-solid fa-sliders",
      title: "Soluções Personalizadas",
      description:
        "Cada projeto é desenvolvido de acordo com as necessidades específicas do cliente e dos objetivos do investimento.",
    },
    {
      icon: "fa-solid fa-cubes",
      title: "Materiais de Elevada Qualidade",
      description:
        "Selecionamos materiais e equipamentos que garantem maior durabilidade, desempenho e eficiência.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Acompanhamento Técnico",
      description:
        "Supervisão contínua desde o planeamento até à entrega final, assegurando qualidade em todas as fases da execução.",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Diferenciais que fazem{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              a diferença em cada projeto
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Mais do que executar obras, entregamos soluções sustentadas por
            conhecimento técnico, planeamento e compromisso.
          </p>
        </div>

        {/* Lista de Diferenciais */}
        <div className="divide-y divide-neutral-200/80">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="group grid grid-cols-1 lg:grid-cols-[72px_1fr_40px] gap-6 lg:gap-8 items-center py-7 sm:py-8 transition-all duration-300"
            >
              {/* Ícone */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                <i className={item.icon}></i>
              </div>

              {/* Conteúdo */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Seta indicativa no Desktop */}
              <div className="hidden lg:flex justify-end text-neutral-300 text-lg group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-300">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
