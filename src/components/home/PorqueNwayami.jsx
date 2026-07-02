"use client";

export default function PorqueNwayami() {
  const reasons = [
    {
      icon: "fa-solid fa-shield-halved",
      title: "Segurança de Engenharia",
      desc: "Aplicamos normas rigorosas e controlo técnico em todas as fases do projeto.",
    },
    {
      icon: "fa-solid fa-ruler-combined",
      title: "Precisão Técnica",
      desc: "Execução orientada ao detalhe e à eficiência construtiva.",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Equipa Especializada",
      desc: "Profissionais experientes em construção e fiscalização.",
    },
    {
      icon: "fa-solid fa-clock",
      title: "Cumprimento de Prazos",
      desc: "Planeamento rigoroso para entregas consistentes.",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Soluções Inteligentes",
      desc: "Engenharia aplicada com inovação e eficiência.",
    },
    {
      icon: "fa-solid fa-headset",
      title: "Suporte Contínuo",
      desc: "Acompanhamento técnico durante todo o projeto.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER simples e forte */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-orange-500 uppercase tracking-[3px] font-bold text-xs">
            Porquê a Nwayami
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Engenharia com
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              rigor e confiança
            </span>
          </h2>

          <p className="mt-8 text-neutral-600 text-lg leading-8">
            Entregamos soluções de engenharia e construção com foco em qualidade,
            segurança e execução responsável.
          </p>
        </div>

        {/* GRID LIMPO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {reasons.map((item) => (
            <div
              key={item.title}
              className="group flex gap-5"
            >

              {/* ÍCONE SIMPLES */}
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-orange-500/10 group-hover:bg-orange-500 transition">
                <i className={`${item.icon} text-orange-500 group-hover:text-white text-sm`}></i>
              </div>

              {/* TEXTO */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>

                <p className="mt-2 text-neutral-600 text-sm leading-6">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
