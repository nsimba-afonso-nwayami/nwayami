"use client";

export default function AreasAtuacao() {
  const areas = [
    {
      icon: "fa-solid fa-building",
      title: "Construção Civil",
      description:
        "Edificações de alta complexidade com rigor técnico e acabamentos de padrão elevado.",
    },
    {
      icon: "fa-solid fa-compass-drafting",
      title: "Engenharia",
      description:
        "Cálculos estruturais e projetos integrados otimizados para máxima eficiência.",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Manutenção Predial",
      description:
        "Planos preventivos e corretivos para preservação do valor patrimonial dos ativos.",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Fiscalização de Obras",
      description:
        "Garantia de conformidade com normas, controlo de custos e gestão contínua de risco.",
    },
    {
      icon: "fa-solid fa-users-gear",
      title: "Consultoria Técnica",
      description:
        "Auditorias, pareceres especializados e estudos de viabilidade técnica e financeira.",
    },
    {
      icon: "fa-solid fa-arrow-up-right-dots",
      title: "Reabilitação de Edifícios",
      description:
        "Recuperação de estruturas antigas e modernização de instalações obsoletas.",
    },
    {
      icon: "fa-solid fa-industry",
      title: "Infraestruturas",
      description:
        "Obras de arte, vias de circulação e saneamento de larga escala e elevada resistência.",
    },
    {
      icon: "fa-solid fa-city",
      title: "Obras Comerciais",
      description:
        "Espaços corporativos e retail desenhados para otimizar fluxos e identidade visual.",
    },
    {
      icon: "fa-solid fa-house",
      title: "Obras Residenciais",
      description:
        "Habitações personalizadas focadas no conforto térmico, acústico e funcionalidade.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Soluções para diferentes setores{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              da engenharia e construção
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Atuamos transversalmente em múltiplos segmentos, entregando precisão
            técnica, inovação e sustentabilidade em cada etapa do projeto.
          </p>
        </div>

        {/* Grid 3x3 Ajustado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group relative bg-neutral-50/60 hover:bg-white p-5 sm:p-6 rounded-xl border border-neutral-200/80 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Topo do Card com Ícone e Seta */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center text-base sm:text-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-xs shrink-0">
                    <i className={area.icon}></i>
                  </div>
                  <i className="fa-solid fa-arrow-up-right text-neutral-300 group-hover:text-orange-500 transition-colors duration-300 text-xs sm:text-sm"></i>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                  {area.title}
                </h3>

                <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Indicador sutil de detalhe */}
              <div className="mt-5 pt-3.5 border-t border-neutral-200/60 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-neutral-400 group-hover:text-neutral-600 transition-colors">
                <span>Especialidade Técnica</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-orange-500 transition-colors"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
