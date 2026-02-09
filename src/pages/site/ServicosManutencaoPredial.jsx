import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SEO from "../../components/SEO";
import WhatsAppButton from "../../components/WhatsAppButton";
import ServicosManutencaoBg from "../../assets/img/manutencao.jpg";
import ServicosManutencao1 from "../../assets/img/manutencao1.jpg";
import ServicosManutencao2 from "../../assets/img/manutencao2.jpg";
import ServicosManutencao3 from "../../assets/img/manutencao3.jpg";

import LightGallery from "lightgallery/react";

// plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export default function ServicosManutencaoPredial() {
  return (
    <>
      <SEO
        title="Manutenção Predial | Nwayami"
        description="Serviços completos de manutenção predial em Angola: elétrica, hidráulica, climatização, pintura e reparos gerais."
        keywords="manutenção predial Angola, manutenção de edifícios, serviços elétricos, serviços hidráulicos, manutenção preventiva"
        image="https://nwayami.vercel.app/seo/manutencao.jpg"
        url="https://nwayami.vercel.app/manutencao-predial"
      />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${ServicosManutencaoBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 mb-4 uppercase">
            Manutenção <span className="text-orange-500">Predial</span>
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto">
            Serviços especializados para garantir segurança, funcionalidade e
            preservação das suas instalações.
          </p>
        </div>
      </section>

      {/* Sobre o serviço */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-6">
            Soluções completas para o seu imóvel
          </h2>
          <p className="text-neutral-700 text-lg mb-6">
            Garantimos a funcionalidade e preservação de suas instalações,
            eliminando riscos e prolongando a vida útil dos seus ativos.
            Oferecemos serviços especializados com profissionais qualificados e
            foco em segurança, eficiência e qualidade.
          </p>

          <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
            <li>Gestão e manutenção de ETA</li>
            <li>Sistemas de canalização</li>
            <li>Instalações elétricas de média e alta tensão</li>
            <li>Montagem e reparação de cancelas</li>
            <li>Serviços de jardinagem</li>
            <li>Instalação e manutenção de AVAC</li>
            <li>Alvenaria e acabamentos interiores</li>
            <li>Sistemas de deteção e combate a incêndios</li>
            <li>Manutenção de piscinas</li>
            <li>Serralharia</li>
          </ul>

          <Link
            to="/contato"
            className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Galeria */}
        <div className="md:w-1/2">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-2 gap-4"
          >
            <a
              href={ServicosManutencao1}
              className="block overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={ServicosManutencao1}
                alt="Serviço de manutenção"
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </a>

            <a
              href={ServicosManutencao2}
              className="block overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={ServicosManutencao2}
                alt="Serviço de manutenção"
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </a>

            <a
              href={ServicosManutencao3}
              className="block overflow-hidden rounded-lg shadow-md col-span-2"
            >
              <img
                src={ServicosManutencao3}
                alt="Serviço de manutenção"
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </a>
          </LightGallery>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-10">
            Por que escolher a Nwayami?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <i className="fas fa-user-cog text-orange-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Equipa Especializada</h3>
              <p className="text-neutral-700">
                Profissionais qualificados e experientes em diversos tipos de
                manutenção predial.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <i className="fas fa-shield-alt text-orange-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Segurança Garantida</h3>
              <p className="text-neutral-700">
                Trabalhamos com normas técnicas e equipamentos adequados para
                garantir total segurança.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <i className="fas fa-clock text-orange-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Rapidez e Eficiência</h3>
              <p className="text-neutral-700">
                Atendimento ágil e soluções eficientes para reduzir custos e
                evitar paradas desnecessárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center text-neutral-50">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Precisa de manutenção para o seu imóvel?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-neutral-100">
            Entre em contacto com a Nwayami e receba um orçamento rápido e sem
            compromisso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/solicitar-orcamento"
              className="bg-neutral-50 text-orange-500 px-10 py-4 rounded-lg font-bold uppercase shadow-lg hover:bg-neutral-200 transition"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/2449972614886"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-neutral-50 text-neutral-50 px-10 py-4 rounded-lg font-bold uppercase hover:bg-neutral-50 hover:text-orange-500 transition flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />

      {/* Footer */}
      <Footer />
    </>
  );
}
