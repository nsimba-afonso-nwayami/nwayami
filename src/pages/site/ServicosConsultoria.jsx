import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SEO from "../../components/SEO";
import WhatsAppButton from "../../components/WhatsAppButton";
import ServicosConsultoriaBg from "../../assets/img/consultoria.jpg";

export default function ServicosConsultoria() {
  return (
    <>
      <SEO
        title="Consultoria | Nwayami"
        description="Consultoria especializada em manutenção predial e tecnologia da informação para otimizar processos e reduzir custos."
        keywords="consultoria empresarial Angola, consultoria TI, consultoria manutenção predial, otimização de processos"
        image="https://nwayami.vercel.app/seo/consultoria.jpg"
        url="https://nwayami.vercel.app/consultoria"
      />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${ServicosConsultoriaBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 mb-4 uppercase">
            Consultoria <span className="text-orange-500">Especializada</span>
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto">
            Estratégias inteligentes para otimizar processos, reduzir custos e
            aumentar a eficiência do seu negócio.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-6">
            Consultoria em Manutenção e Tecnologia
          </h2>
          <p className="text-neutral-700 text-lg mb-8">
            Oferecemos estratégias personalizadas para impulsionar o crescimento
            e a eficiência do seu negócio. A nossa consultoria ajuda a
            identificar necessidades, otimizar processos e implementar soluções
            eficazes em manutenção predial e tecnologia da informação.
          </p>

          <Link
            to="/solicitar-orcamento"
            className="inline-block bg-orange-500 text-neutral-50 px-8 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Lista de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-neutral-50 shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Áreas de Consultoria
            </h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Gestão de manutenção predial</li>
              <li>Planeamento e otimização de processos</li>
              <li>Infraestrutura tecnológica</li>
              <li>Segurança de sistemas</li>
              <li>Redução de custos operacionais</li>
              <li>Estratégias de eficiência energética</li>
            </ul>
          </div>

          <div className="bg-neutral-50 shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Benefícios para o seu negócio
            </h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Maior eficiência operacional</li>
              <li>Redução de falhas e riscos</li>
              <li>Melhor aproveitamento de recursos</li>
              <li>Planeamento estratégico de longo prazo</li>
              <li>Suporte técnico especializado</li>
              <li>Decisões baseadas em análise técnica</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Por que escolher a Nwayami */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Por que escolher a Nwayami?
          </h2>
          <p className="text-neutral-700 mb-12 max-w-3xl mx-auto">
            Oferecemos consultoria estratégica baseada em experiência técnica,
            inovação e foco em resultados reais para o seu negócio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <i className="fas fa-chart-line text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                Foco em Resultados
              </h3>
              <p className="text-neutral-700 text-sm">
                Estratégias orientadas para desempenho e crescimento.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <i className="fas fa-cogs text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                Soluções Personalizadas
              </h3>
              <p className="text-neutral-700 text-sm">
                Consultoria adaptada às necessidades do seu negócio.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <i className="fas fa-user-tie text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                Especialistas
              </h3>
              <p className="text-neutral-700 text-sm">
                Equipa qualificada em manutenção e tecnologia.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <i className="fas fa-lightbulb text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                Inovação
              </h3>
              <p className="text-neutral-700 text-sm">
                Soluções modernas para otimizar processos e recursos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-20 bg-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center text-neutral-50">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Precisa de orientação estratégica?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-neutral-100">
            Fale com a Nwayami e descubra como a nossa consultoria pode melhorar
            a eficiência, segurança e resultados do seu negócio.
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
