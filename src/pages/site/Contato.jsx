import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContatoImg from "../../assets/img/contato.jpg";

export default function Contato() {
  return (
    <>
      <title>Contato | Nwayami</title>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${ContatoImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase">
            Fale Connosco
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Entre em contacto com a Nwayami e descubra soluções eficientes em
            manutenção predial e tecnologia da informação.
          </p>
        </div>
      </section>

      {/* Seção Contato */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-extrabold text-orange-500 mb-6">
              Envie uma mensagem
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-neutral-700 mb-1">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-neutral-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-neutral-700 mb-1">Telefone</label>
                <input
                  type="text"
                  placeholder="Seu telefone"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-neutral-700 mb-1">Mensagem</label>
                <textarea
                  rows="5"
                  placeholder="Descreva sua necessidade"
                  className="w-full resize-none border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4">
              <i className="fas fa-phone text-orange-500 text-3xl"></i>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Telefone / WhatsApp
                </h3>
                <a
                  href="https://wa.me/244972614886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-orange-500 transition"
                >
                  +244 972 614 886
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4">
              <i className="fas fa-map-marker-alt text-orange-500 text-3xl"></i>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Endereço</h3>
                <p className="text-neutral-700">
                  Centralidade do Kilamba Quarteirão F, edifício F27 apartamento
                  91, Luanda, Angola
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4">
              <i className="fas fa-clock text-orange-500 text-3xl"></i>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Horário de Atendimento
                </h3>
                <p className="text-neutral-700">Seg - Sex: 08:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa Nwayami - Luanda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7343727422167!2d13.25866857414194!3d-8.996571892629392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521feccbfcdc5b%3A0x39338cb33ba2f1ea!2sN.Wayami!5e0!3m2!1spt-PT!2sao!4v1770129007183!5m2!1spt-PT!2sao"
              className="w-full h-72 md:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-orange-500 text-center text-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Pronto para começar o seu projeto?
          </h2>
          <p className="mb-8">
            Fale connosco hoje mesmo e receba uma solução personalizada para o
            seu negócio.
          </p>

          <a
            href="https://wa.me/244972614886"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-50 text-orange-500 px-8 py-3 rounded-lg font-bold uppercase hover:bg-neutral-200 transition inline-flex items-center gap-2"
          >
            <i className="fab fa-whatsapp"></i>
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
