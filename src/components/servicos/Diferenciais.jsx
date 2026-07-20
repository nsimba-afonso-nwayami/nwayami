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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho central */}

        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            Diferenciais que fazem
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              a diferença em cada projeto
            </span>
          </h2>

          <p className="mt-8 text-lg text-neutral-600 leading-8">
            Mais do que executar obras, entregamos soluções sustentadas por
            conhecimento técnico, planeamento e compromisso.
          </p>
        </div>

        <div className="divide-y divide-neutral-200">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="group grid lg:grid-cols-[90px_1fr_60px] gap-8 items-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition">
                <i
                  className={`${item.icon} text-2xl text-orange-500 group-hover:text-white`}
                ></i>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>

                <p className="mt-4 text-neutral-600 leading-8 max-w-3xl">
                  {item.description}
                </p>
              </div>

              <div className="hidden lg:flex justify-end">
                <i className="fa-solid fa-arrow-right text-2xl text-neutral-300 group-hover:text-orange-500 group-hover:translate-x-2 transition-all"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
