import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SobreImg from "../../assets/img/sobre.jpg";
import SobreImg2 from "../../assets/img/sobre2.jpg";

export default function Sobre() {
  return (
    <>
      <title>Sobre nós | Nwayami</title>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${SobreImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 mb-4 uppercase">
            Sobre a <span className="text-orange-500">Nwayami</span>
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto">
            Soluções completas em manutenção predial e tecnologia da informação,
            com foco em qualidade, segurança e inovação.
          </p>
        </div>
      </section>

      {/* Seção Missão, Visão, Valores */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="bg-neutral-50 shadow-lg rounded-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <i className="fas fa-bullseye text-orange-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Missão</h3>
          <p className="text-neutral-700">
            Garantir soluções confiáveis em manutenção predial e TI, atendendo
            às necessidades dos nossos clientes com eficiência e qualidade.
          </p>
        </div>

        <div className="bg-neutral-50 shadow-lg rounded-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <i className="fas fa-eye text-orange-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Visão</h3>
          <p className="text-neutral-700">
            Ser referência nacional em serviços de manutenção e tecnologia,
            destacando-nos pela inovação, segurança e excelência.
          </p>
        </div>

        <div className="bg-neutral-50 shadow-lg rounded-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <i className="fas fa-heart text-orange-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Valores</h3>
          <p className="text-neutral-700">
            Integridade, responsabilidade, inovação e foco no cliente em todas
            as nossas soluções.
          </p>
        </div>
      </section>

      {/* Nossa Equipa / Diferenciais */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Nossa Equipa & Diferenciais
          </h2>
          <p className="text-neutral-700 text-lg md:text-xl mb-6">
            Contamos com profissionais especializados em manutenção predial e
            tecnologia da informação, garantindo soluções inovadoras, eficientes
            e seguras para cada projeto.
          </p>
          <ul className="list-disc list-inside text-neutral-700 mb-6">
            <li>Profissionais certificados e experientes</li>
            <li>Foco em inovação e segurança</li>
            <li>Atendimento personalizado para cada cliente</li>
            <li>Compromisso com qualidade e prazos</li>
          </ul>
          <Link
            to="/contato"
            className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2">
          <img
            src={SobreImg2}
            alt="Equipe Nwayami"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="relative py-20 bg-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center text-neutral-50">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pronto para iniciar o seu próximo projeto?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-neutral-100">
            Entre em contacto com a Nwayami e descubra soluções eficientes em
            manutenção predial e tecnologia da informação.
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

      {/* Footer */}
      <Footer />
    </>
  );
}
