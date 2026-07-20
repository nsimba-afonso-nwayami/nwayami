"use client";

export default function AreasAtuacao() {
  const areas = [
    {
      icon: "fa-solid fa-building",
      title: "Construção Civil",
    },
    {
      icon: "fa-solid fa-compass-drafting",
      title: "Engenharia",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Manutenção Predial",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Fiscalização de Obras",
    },
    {
      icon: "fa-solid fa-users-gear",
      title: "Consultoria Técnica",
    },
    {
      icon: "fa-solid fa-arrow-up-right-dots",
      title: "Reabilitação de Edifícios",
    },
    {
      icon: "fa-solid fa-industry",
      title: "Infraestruturas",
    },
    {
      icon: "fa-solid fa-city",
      title: "Obras Comerciais",
    },
    {
      icon: "fa-solid fa-house",
      title: "Obras Residenciais",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}

        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Soluções para diferentes setores
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              da engenharia e construção
            </span>
          </h2>

          <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl mx-auto">
            Atuamos em diversas áreas da engenharia, oferecendo soluções
            integradas desde o planeamento até à execução e manutenção,
            assegurando qualidade, inovação e elevado rigor técnico.
          </p>

        </div>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {areas.map((area) => (

            <div
              key={area.title}
              className="group p-8 rounded-2xl border border-neutral-200 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">

                <i
                  className={`${area.icon} text-2xl text-orange-500 group-hover:text-white transition-colors`}
                ></i>

              </div>

              <h3 className="mt-8 text-2xl font-bold text-neutral-900">
                {area.title}
              </h3>

              <div className="mt-6 flex items-center gap-2 text-orange-500 font-semibold">

                <span>Área de Especialização</span>

                <i className="fa-solid fa-arrow-right text-sm"></i>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
