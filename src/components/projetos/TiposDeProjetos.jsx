"use client";

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

  return (
    <section className="py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
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
        </div>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((item) => (
            <div
              key={item.title}
              className="group bg-neutral-50/60 rounded-2xl border border-neutral-200/80 p-6 sm:p-7 hover:border-orange-500/40 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
