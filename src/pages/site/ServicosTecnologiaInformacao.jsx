import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SEO from "../../components/SEO";
import WhatsAppButton from "../../components/WhatsAppButton";
import ServicosTecnologiaBg from "../../assets/img/tecnologia.jpg";
import ServicosTecnologia1 from "../../assets/img/tecnologia1.jpg";
import ServicosTecnologia2 from "../../assets/img/tecnologia2.jpg";
import ServicosTecnologia3 from "../../assets/img/tecnologia3.jpg";

import LightGallery from "lightgallery/react";

// plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export default function ServicosTecnologiaInformacao() {
  return (
    <>
      <SEO
        title="Tecnologia de Informação | Nwayami"
        description="Soluções em tecnologia da informação para empresas: redes, suporte técnico, segurança digital e infraestrutura de TI."
        keywords="tecnologia da informação Angola, suporte técnico, redes de computadores, segurança digital, serviços de TI"
        image="https://nwayami.vercel.app/seo/ti.jpg"
        url="https://nwayami.vercel.app/tecnologia-da-informacao"
      />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${ServicosTecnologiaBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 mb-4 uppercase">
            Tecnologia de <span className="text-orange-500">Informação</span>
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto">
            Soluções digitais inteligentes para aumentar a produtividade,
            segurança e eficiência do seu negócio.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Soluções em Tecnologia
          </h2>
          <p className="text-neutral-700 text-lg md:text-xl mb-6">
            Transformamos processos com soluções digitais sob medida, aumentando
            a produtividade e competitividade da sua empresa. Atuamos em
            projetos de infraestrutura, segurança e sistemas tecnológicos.
          </p>

          <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
            <li>Segurança electrónica</li>
            <li>Sistema de videovigilância CCTV</li>
            <li>Sistema de monitoramento de velocidade (RADAR)</li>
            <li>Instalação e manutenção de redes informáticas</li>
            <li>Telecomunicações</li>
            <li>Controle de acesso RFID</li>
            <li>Fechaduras magnéticas</li>
            <li>Serviços de energia renováveis</li>
            <li>Instalação de software de arquitectura e desenho</li>
            <li>Criação de sites</li>
            <li>Criação de sistemas gestão web</li>
            <li>Criação de sistemas personalizados</li>
          </ul>

          <Link
            to="/solicitar-orcamento"
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
              href={ServicosTecnologia1}
              className="block overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={ServicosTecnologia1}
                alt="Serviço de tecnologia"
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </a>

            <a
              href={ServicosTecnologia2}
              className="block overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={ServicosTecnologia2}
                alt="Serviço de tecnologia"
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </a>

            <a
              href={ServicosTecnologia3}
              className="block overflow-hidden rounded-lg shadow-md col-span-2"
            >
              <img
                src={ServicosTecnologia3}
                alt="Serviço de tecnologia"
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </a>
          </LightGallery>
        </div>
      </section>

      {/* Por que escolher a Nwayami */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Por que escolher a Nwayami?
          </h2>
          <p className="text-neutral-700 mb-12 max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas seguras, eficientes e adaptadas às
            necessidades do seu negócio, com profissionais qualificados e foco
            em resultados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <i className="fas fa-shield-alt text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                Segurança
              </h3>
              <p className="text-neutral-700 text-sm">
                Sistemas protegidos com soluções modernas de segurança
                electrónica e monitoramento.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <i className="fas fa-network-wired text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                Infraestrutura Eficiente
              </h3>
              <p className="text-neutral-700 text-sm">
                Redes e sistemas configurados para alto desempenho e
                estabilidade.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <i className="fas fa-user-cog text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                Equipa Especializada
              </h3>
              <p className="text-neutral-700 text-sm">
                Profissionais qualificados e experientes em soluções
                tecnológicas.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <i className="fas fa-rocket text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                Soluções Modernas
              </h3>
              <p className="text-neutral-700 text-sm">
                Tecnologia actualizada para aumentar a produtividade e
                eficiência do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 bg-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center text-neutral-50">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Precisa de soluções tecnológicas eficientes?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-neutral-100">
            Entre em contacto com a Nwayami e descubra como podemos optimizar a
            infraestrutura tecnológica do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contato"
              className="bg-neutral-50 text-orange-500 px-10 py-4 rounded-lg font-bold uppercase shadow-lg hover:bg-neutral-200 transition"
            >
              Falar Connosco
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
