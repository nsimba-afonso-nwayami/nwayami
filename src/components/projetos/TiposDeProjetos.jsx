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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}

        <div className="max-w-3xl mx-auto text-center mb-20">

          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            Áreas onde
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              criamos valor
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Atuamos em diferentes segmentos da engenharia e construção,
            oferecendo soluções adaptadas às necessidades de cada projeto.
          </p>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {areas.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:border-orange-500 hover:bg-white hover:-translate-y-2"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-2xl transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">

                <i className={item.icon}></i>

              </div>

              <h3 className="mt-8 text-2xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors">

                {item.title}

              </h3>

              <p className="mt-5 text-neutral-600 leading-8">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
