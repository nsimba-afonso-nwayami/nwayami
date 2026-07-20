"use client";

export default function MissaoVisaoValores() {
  const items = [
    {
      icon: "fa-solid fa-bullseye",
      title: "Missão",
      description:
        "Desenvolver soluções inovadoras em engenharia, construção civil e manutenção predial, entregando projetos com qualidade, segurança e elevado rigor técnico, contribuindo para o crescimento sustentável dos nossos clientes e da sociedade.",
    },
    {
      icon: "fa-solid fa-eye",
      title: "Visão",
      description:
        "Ser uma referência no setor da engenharia e construção em Angola, reconhecida pela excelência, inovação, compromisso e confiança em cada projeto realizado.",
    },
    {
      icon: "fa-solid fa-gem",
      title: "Valores",
      description:
        "Ética, integridade, compromisso, inovação, segurança, sustentabilidade, respeito pelas pessoas e foco permanente na qualidade e satisfação dos nossos clientes.",
    },
  ];

  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Os princípios que orientam
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              cada projeto que executamos
            </span>
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group grid lg:grid-cols-[80px_1fr] gap-8 items-start p-8 rounded-2xl border border-neutral-200 bg-white hover:border-orange-500 transition-all duration-300"
            >
              {/* Ícone */}
              <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <i
                  className={`${item.icon} text-2xl text-orange-500 group-hover:text-white transition-colors`}
                ></i>
              </div>

              {/* Texto */}
              <div>
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
    </section>
  );
}
