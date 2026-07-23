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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Coluna de Texto Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              Porque empresas e clientes{" "}
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                confiam na Nwayami
              </span>
            </h2>

            <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
              A nossa atuação baseia-se na excelência técnica, transparência e
              compromisso. Trabalhamos para entregar projetos que unem
              qualidade, inovação e confiança em cada detalhe.
            </p>
          </div>

          {/* Lista de Diferenciais */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="group relative flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl bg-neutral-50/60 hover:bg-white border border-neutral-200/80 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Ícone */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center text-base sm:text-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-xs shrink-0 mt-0.5">
                  <i className={item.icon}></i>
                </div>

                {/* Conteúdo do Cartão */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-1 sm:mt-1.5 text-neutral-600 text-xs sm:text-sm leading-relaxed">
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
