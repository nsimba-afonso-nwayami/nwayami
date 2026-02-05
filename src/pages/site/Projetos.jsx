import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import projetoBg from "../../assets/img/projeto.jpg";

import ServicosTecnologia1 from "../../assets/img/tecnologia1.jpg";
import ServicosTecnologia2 from "../../assets/img/tecnologia2.jpg";
import ServicosTecnologia3 from "../../assets/img/tecnologia3.jpg";
import ServicosManutencao1 from "../../assets/img/manutencao1.jpg";
import ServicosManutencao2 from "../../assets/img/manutencao2.jpg";
import ServicosManutencao3 from "../../assets/img/manutencao3.jpg";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Projetos() {
  return (
    <>
      <title>Projetos | Nwayami</title>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${projetoBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-50 uppercase">
            Nossos Projetos
          </h1>
          <p className="text-neutral-300 mt-4 max-w-2xl mx-auto">
            Conheça alguns dos trabalhos realizados pela Nwayami em manutenção
            predial e tecnologia da informação.
          </p>
        </div>
      </section>

      {/* Projetos de Manutenção */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Projetos de Manutenção Predial
          </h2>
          <p className="text-neutral-700 mb-12 max-w-3xl mx-auto">
            Trabalhos realizados em manutenção e conservação de edifícios,
            garantindo segurança, eficiência e durabilidade.
          </p>

          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              ServicosManutencao1,
              ServicosManutencao2,
              ServicosManutencao3,
            ].map((img, index) => (
              <a
                key={index}
                href={img}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img}
                  alt={`Projeto Manutenção ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <i className="fas fa-search-plus text-orange-500 text-5xl"></i>
                </div>
              </a>
            ))}
          </LightGallery>
        </div>
      </section>

      {/* Projetos de Tecnologia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Projetos de Tecnologia da Informação
          </h2>
          <p className="text-neutral-700 mb-12 max-w-3xl mx-auto">
            Implementações tecnológicas e soluções digitais para melhorar a
            segurança, conectividade e produtividade dos nossos clientes.
          </p>

          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              ServicosTecnologia1,
              ServicosTecnologia2,
              ServicosTecnologia3,
            ].map((img, index) => (
              <a
                key={index}
                href={img}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img}
                  alt={`Projeto Tecnologia ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <i className="fas fa-search-plus text-orange-500 text-5xl"></i>
                </div>
              </a>
            ))}
          </LightGallery>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500 text-center text-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Precisa de um projeto semelhante?
          </h2>
          <p className="mb-8">
            Entre em contacto connosco e solicite um orçamento para o seu
            próximo projeto.
          </p>

          <Link
            to="/solicitar-orcamento"
            className="bg-neutral-50 text-orange-500 px-8 py-3 rounded-lg font-bold uppercase hover:bg-neutral-200 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />

      {/* Footer */}
      <Footer />
    </>
  );
}
