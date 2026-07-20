"use client";

export default function Compromissos() {
  const compromissos = [
    {
      icon: "fa-solid fa-shield-halved",
      title: "Segurança",
      description:
        "Executamos cada projeto seguindo boas práticas de segurança, protegendo pessoas, património e o ambiente de trabalho.",
    },
    {
      icon: "fa-solid fa-award",
      title: "Qualidade",
      description:
        "Mantemos elevados padrões de qualidade em todas as etapas, desde o planeamento até à entrega final da obra.",
    },
    {
      icon: "fa-solid fa-leaf",
      title: "Sustentabilidade",
      description:
        "Promovemos soluções responsáveis, privilegiando métodos construtivos eficientes e o uso consciente dos recursos.",
    },
    {
      icon: "fa-solid fa-clipboard-check",
      title: "Conformidade Técnica",
      description:
        "Trabalhamos de acordo com as normas técnicas e procedimentos adequados, assegurando rigor e fiabilidade em cada intervenção.",
    },
  ];

  return (
    <section className="py-28 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}

        <div className="max-w-4xl mx-auto text-center mb-20">

          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Os compromissos que orientam
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              cada decisão que tomamos
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            Mais do que executar projetos, assumimos o compromisso de atuar com
            responsabilidade, transparência e excelência técnica em todas as
            as nossas intervenções.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {compromissos.map((item) => (

            <div
              key={item.title}
              className="group relative bg-white border border-neutral-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500"
            >

              {/* Linha superior */}

              <div className="absolute top-0 left-8 w-12 h-1 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24"></div>

              {/* Ícone */}

              <div className="mt-4 w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">

                <i
                  className={`${item.icon} text-2xl text-orange-500 group-hover:text-white transition-colors`}
                ></i>

              </div>

              {/* Conteúdo */}

              <h3 className="mt-8 text-2xl font-bold text-neutral-900">
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
