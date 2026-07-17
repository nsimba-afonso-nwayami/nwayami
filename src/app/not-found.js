import Link from "next/link";

// SEO
export const metadata = {
  title: "Página não encontrada | Nwayami",
  description: "A página que procura não existe ou foi movida.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Elementos decorativos */}

      <div className="pointer-events-none absolute -top-60 -left-60 w-130 h-130 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-60 -right-60 w-130 h-130 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]" />

      {/* Conteúdo */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="min-h-screen flex items-center justify-center pt-36 pb-20">

          <div className="max-w-3xl mx-auto text-center">

            {/* Ícone */}

            <div className="mx-auto w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

              <i className="fa-solid fa-compass text-4xl text-orange-500"></i>

            </div>

            {/* Badge */}

            <span className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 uppercase tracking-[3px] text-xs font-bold text-orange-500">
              Erro 404
            </span>

            {/* Título */}

            <h1 className="mt-8 text-4xl lg:text-5xl font-bold leading-tight text-white">
              O caminho que procura
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
                não existe.
              </span>
            </h1>

            {/* Texto */}

            <p className="mt-8 text-base lg:text-lg leading-8 text-neutral-400 max-w-2xl mx-auto">
              A página pode ter sido removida, alterada ou o endereço introduzido
              não está correto. Continue a navegar e descubra os serviços e
              projetos desenvolvidos pela Nwayami.
            </p>

            {/* Botões */}

            <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fa-solid fa-house"></i>
                Página Inicial
              </Link>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-neutral-700 hover:border-orange-500 text-neutral-200 hover:text-white transition-all duration-300"
              >
                <i className="fa-solid fa-paper-plane"></i>
                Solicitar Orçamento
              </Link>

            </div>

            {/* Link */}

            <Link
              href="/projetos"
              className="mt-12 inline-flex items-center gap-2 text-neutral-400 hover:text-orange-500 transition-colors"
            >
              Explorar os nossos projetos
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
