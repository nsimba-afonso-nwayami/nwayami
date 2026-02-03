import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | Nwayami</title>

      {/* Header */}
      <Header />

      {/* 404 */}
      <section className="min-h-[80vh] flex items-center justify-center bg-linear-to-r from-neutral-900 to-neutral-800 px-6">
        <div className="max-w-3xl text-center">
          <span className="inline-block mb-6 px-5 py-2 text-xs font-semibold rounded-full bg-orange-500 text-neutral-900 uppercase">
            Erro 404
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-50 mb-4">
            Página não encontrada
          </h1>

          <p className="text-neutral-300 text-base md:text-lg mb-8">
            A página que você tentou acessar não existe ou foi movida. Mas não
            se preocupe — a Nwayami continua pronta para oferecer soluções em
            manutenção predial e tecnologia da informação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/"
              className="px-8 py-3 bg-orange-500 text-neutral-50 font-bold uppercase rounded-lg text-base shadow-lg hover:bg-orange-600 transition transform hover:-translate-y-1"
            >
              Voltar para Home
            </Link>

            <Link
              to="/contato"
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold uppercase rounded-lg text-base hover:bg-orange-500 hover:text-neutral-50 transition transform hover:-translate-y-1"
            >
              Entrar em Contacto
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
