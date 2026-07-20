"use client";

export default function ComoExecutamos() {
  const etapas = [
    {
      icon: "fa-solid fa-clipboard-list",
      title: "Levantamento",
      description:
        "Analisamos o local, compreendemos as necessidades do cliente e recolhemos todas as informações técnicas necessárias.",
    },
    {
      icon: "fa-solid fa-drafting-compass",
      title: "Planeamento",
      description:
        "Definimos o plano de execução, cronograma, recursos e metodologia para garantir eficiência em todas as fases.",
    },
    {
      icon: "fa-solid fa-building",
      title: "Execução",
      description:
        "A nossa equipa executa cada etapa seguindo elevados padrões de qualidade, segurança e rigor técnico.",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Fiscalização",
      description:
        "Acompanhamos continuamente a obra para assegurar conformidade, desempenho e cumprimento dos requisitos.",
    },
    {
      icon: "fa-solid fa-key",
      title: "Entrega",
      description:
        "Concluímos o projeto realizando todos os testes, validações e entrega formal ao cliente.",
    },
  ];

  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}

        <div className="max-w-3xl mx-auto text-center mb-24">

          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            Como executamos
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              cada projeto
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Trabalhamos com um processo estruturado que garante qualidade,
            segurança e cumprimento rigoroso dos prazos.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Linha */}

          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-neutral-300"></div>

          <div className="space-y-20">

            {etapas.map((item, index) => {

              const left = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="relative grid lg:grid-cols-2 items-center gap-12"
                >

                  {/* Card Esquerda */}

                  <div
                    className={`${
                      left ? "lg:pr-20" : "lg:order-2 lg:pl-20"
                    }`}
                  >
                    <div className="bg-white border border-neutral-200 rounded-2xl p-8 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1">

                      <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
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

                  {/* Nó central */}

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">

                    <div className="relative">

                      <div className="w-5 h-5 rounded-full bg-orange-500 border-4 border-white"></div>

                      <div
                        className={`absolute top-1/2 ${
                          left
                            ? "right-5 w-20"
                            : "left-5 w-20"
                        } h-px bg-orange-300`}
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
