"use client";

export default function ComoTrabalhamos() {
  const etapas = [
    {
      icon: "fa-solid fa-magnifying-glass",
      title: "Levantamento",
      description:
        "Compreendemos as necessidades do cliente, analisamos o local e reunimos todas as informações técnicas necessárias.",
    },
    {
      icon: "fa-solid fa-compass-drafting",
      title: "Planeamento",
      description:
        "Definimos a estratégia de execução, recursos, cronograma e soluções técnicas adequadas para cada projeto.",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Execução",
      description:
        "A nossa equipa executa cada etapa com rigor técnico, qualidade, segurança e acompanhamento permanente.",
    },
    {
      icon: "fa-solid fa-circle-check",
      title: "Entrega",
      description:
        "Concluímos o projeto assegurando conformidade, qualidade final e total satisfação do cliente.",
    },
  ];

  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabeçalho */}

        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Como desenvolvemos
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              cada projeto.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            Cada serviço segue um processo estruturado que garante organização,
            eficiência e excelência desde o primeiro contacto até à entrega.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Linha central */}

          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-neutral-300"></div>

          <div className="space-y-16">
            {etapas.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="relative grid lg:grid-cols-2 gap-10 items-center"
                >
                  {/* Card */}

                  <div
                    className={`${left ? "lg:pr-16" : "lg:order-2 lg:pl-16"}`}
                  >
                    <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:border-orange-500 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-2xl">
                        <i className={item.icon}></i>
                      </div>

                      <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-neutral-600 leading-8">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Espaço vazio */}

                  <div className="hidden lg:block"></div>

                  {/* Nó da Timeline */}

                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow"></div>

                      <div
                        className={`absolute top-1/2 h-px bg-orange-300 ${
                          left ? "right-5 w-16" : "left-5 w-16"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
