import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ServicosImg from "../../assets/img/servicos.jpg";

export default function Servicos() {
  return (
    <>
      <title>Serviços | Nwayami</title>

      {/* Header */}
      <Header />

      {/* Hero / Banner */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${ServicosImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 mb-4 uppercase">
            Nossos <span className="text-orange-500">Serviços</span>
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto">
            Soluções completas em manutenção predial, tecnologia de informação e
            consultoria, com foco em eficiência, segurança e inovação.
          </p>
        </div>
      </section>

      {/* Título e Parágrafo antes dos cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
          O que oferecemos
        </h2>
        <p className="text-neutral-700 text-lg md:text-xl max-w-3xl mx-auto">
          Na Nwayami, combinamos experiência e inovação para fornecer serviços
          especializados em manutenção predial, tecnologia de informação e
          consultoria. Cada projeto é cuidadosamente planejado para garantir
          máxima eficiência, segurança e valor para o seu negócio.
        </p>
      </section>

      {/* Seção Cards de Serviços */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1: Manutenção Predial */}
          <div className="bg-neutral-50 shadow-lg rounded-xl p-8 flex flex-col hover:shadow-2xl transition transform hover:-translate-y-2">
            <i className="fas fa-tools text-orange-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Manutenção Predial
            </h3>
            <p className="text-neutral-700 mb-4">
              Garantimos a funcionalidade e preservação de suas instalações,
              eliminando riscos e prolongando a vida útil dos seus ativos,
              oferecendo serviços como:
            </p>
            <ul className="list-disc list-inside text-neutral-700 mb-6 space-y-1">
              <li>Gestão e Manutenção de ETA</li>
              <li>Implementação de sistemas de canalização</li>
              <li>Manutenção e instalação elétrica de média e alta tensão</li>
              <li>Montagem e reparação de cancela</li>
              <li>Serviços de jardinagem</li>
              <li>Instalação e manutenção de AVAC</li>
              <li>Alvenaria e acabamento de interior</li>
              <li>
                Instalação e teste de sistemas de deteção e combate a incêndios
              </li>
              <li>Manutenção de piscinas</li>
              <li>Serralharia</li>
            </ul>
            <Link
              to="/projetos"
              className="mt-auto bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition text-center"
            >
              Ver Projetos
            </Link>
          </div>

          {/* Card 2: Tecnologia de Informação */}
          <div className="bg-neutral-50 shadow-lg rounded-xl p-8 flex flex-col hover:shadow-2xl transition transform hover:-translate-y-2">
            <i className="fas fa-network-wired text-orange-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Tecnologia de Informação
            </h3>
            <p className="text-neutral-700 mb-4">
              Transformamos processos com soluções digitais sob medida,
              aumentando sua produtividade e competitividade. Serviços incluem:
            </p>
            <ul className="list-disc list-inside text-neutral-700 mb-6 space-y-1">
              <li>Segurança eletrónica</li>
              <li>Sistema de video vigilância CCTV</li>
              <li>Sistema de monitoramento de velocidade (RADAR)</li>
              <li>
                Instalação e manutenção de rede informática e telecomunicação
              </li>
              <li>
                Instalação de controle de acesso RFID e fechaduras magnéticas
              </li>
              <li>Serviços de energia renováveis</li>
              <li>Instalação de software de arquitetura e desenho</li>
              <li>Criação de sites</li>
              <li>Criação de sistemas gestão web</li>
              <li>Criação de sistemas personalizados</li>
            </ul>
            <Link
              to="/projetos"
              className="mt-auto bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition text-center"
            >
              Ver Projetos
            </Link>
          </div>

          {/* Card 3: Consultoria */}
          <div className="bg-neutral-50 shadow-lg rounded-xl p-8 flex flex-col hover:shadow-2xl transition transform hover:-translate-y-2">
            <i className="fas fa-lightbulb text-orange-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Consultoria
            </h3>
            <p className="text-neutral-700 mb-6">
              Oferecemos estratégias personalizadas para impulsionar o
              crescimento e a eficiência do seu negócio, com consultoria em
              serviços de manutenção predial e tecnologia da informação.
            </p>
            <Link
              to="/projetos"
              className="mt-auto bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition text-center"
            >
              Ver Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="relative py-20 bg-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center text-neutral-50">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Precisa de um serviço especializado?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-neutral-100">
            Entre em contacto com a Nwayami e descubra soluções eficientes e
            confiáveis em manutenção predial, tecnologia da informação e
            consultoria.
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
