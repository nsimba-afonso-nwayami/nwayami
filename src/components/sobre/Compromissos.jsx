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
    <section className="py-24 bg-neutral-50 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Os compromissos que orientam{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              cada decisão que tomamos
            </span>
          </h2>

          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Mais do que executar projetos, assumimos o compromisso de atuar com
            responsabilidade, transparência e excelência técnica em todas as
            nossas intervenções.
          </p>
        </div>

        {/* Cards de Compromissos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {compromissos.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col overflow-hidden bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-7 hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Linha Accent Superior com Transição */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-neutral-200 group-hover:bg-orange-500 transition-colors duration-300" />

              {/* Ícone */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-lg sm:text-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-xs mt-2 shrink-0">
                <i className={item.icon}></i>
              </div>

              {/* Conteúdo do Cartão */}
              <h3 className="mt-5 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
