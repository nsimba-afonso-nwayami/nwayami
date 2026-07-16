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

          {/* Linha */}

          <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-300"></div>

          <div className="space-y-14">

            {etapas.map((item) => (

              <div
                key={item.title}
                className="relative flex gap-8"
              >

                {/* Ícone */}

                <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-orange-500 flex items-center justify-center shrink-0">

                  <i
                    className={`${item.icon} text-2xl text-orange-500`}
                  ></i>

                </div>

                {/* Card */}

                <div className="flex-1 bg-white border border-neutral-200 rounded-2xl p-8 hover:border-orange-500 transition-all duration-300">

                  <h3 className="text-2xl font-bold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-neutral-600 leading-8">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
