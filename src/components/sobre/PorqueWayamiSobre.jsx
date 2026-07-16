"use client";

export default function PorqueWayamiSobre() {
  const diferenciais = [
    {
      icon: "fa-solid fa-users",
      title: "Equipa Qualificada",
      description:
        "Profissionais experientes e preparados para responder aos desafios de cada projeto.",
    },
    {
      icon: "fa-solid fa-calendar-check",
      title: "Cumprimento de Prazos",
      description:
        "Planeamento rigoroso e acompanhamento contínuo para garantir entregas dentro do prazo.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Segurança",
      description:
        "Aplicação das melhores práticas e normas de segurança em todas as fases da execução.",
    },
    {
      icon: "fa-solid fa-award",
      title: "Qualidade Garantida",
      description:
        "Compromisso permanente com elevados padrões técnicos e controlo de qualidade.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Soluções Integradas",
      description:
        "Da consultoria ao projeto, execução e manutenção, reunimos todas as competências num único parceiro.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Atendimento Personalizado",
      description:
        "Cada cliente recebe uma solução adaptada às suas necessidades e objetivos.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">

          {/* Texto */}

          <div className="sticky top-28">
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Porque empresas e clientes
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
                confiam na Nwayami.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              A nossa atuação baseia-se na excelência técnica, transparência e
              compromisso. Trabalhamos para entregar projetos que unem
              qualidade, inovação e confiança em cada detalhe.
            </p>

          </div>

          {/* Lista */}

          <div className="space-y-5">

            {diferenciais.map((item) => (

              <div
                key={item.title}
                className="group flex gap-6 p-6 rounded-2xl border border-neutral-200 hover:border-orange-500 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">

                  <i
                    className={`${item.icon} text-xl text-orange-500 group-hover:text-white transition-colors`}
                  ></i>

                </div>

                <div>

                  <h3 className="text-xl font-bold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-neutral-600 leading-7">
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
