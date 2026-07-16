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
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}

        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Um processo estruturado para
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              garantir resultados consistentes.
            </span>
          </h2>

          <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl mx-auto">
            Cada projeto segue uma metodologia cuidadosamente planeada,
            assegurando qualidade, transparência e eficiência desde o primeiro
            contacto até à entrega final.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid lg:grid-cols-4 gap-10 relative">

          {processo.map((item, index) => (

            <div
              key={item.title}
              className="relative text-center group"
            >
              {/* Linha */}

              {index < processo.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[58%] w-full h-px bg-neutral-300"></div>
              )}

              {/* Ícone */}

              <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">

                <i
                  className={`${item.icon} text-2xl text-orange-500 group-hover:text-white transition`}
                ></i>

              </div>

              {/* Conteúdo */}

              <h3 className="mt-8 text-2xl font-bold text-neutral-900">
                {item.title}
              </h3>

              <p className="mt-5 text-neutral-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
