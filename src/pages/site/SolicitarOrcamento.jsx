import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import SolicitarImg from "../../assets/img/solicitar.jpg";

export default function SolicitarOrcamento() {
  return (
    <>
      <title>Solicitar Orçamento | Nwayami</title>

      {/* Header */}
      <Header />

      {/* Hero / Capa */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${SolicitarImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase">
            Solicitar Orçamento
          </h1>
          <p className="text-neutral-200 mt-4">
            Preencha o formulário abaixo e entraremos em contacto consigo.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <form className="bg-white shadow-lg rounded-2xl p-8 md:p-10 space-y-8">
            {/* Dados pessoais */}
            <div>
              <h2 className="text-2xl text-center font-bold text-orange-500 mb-6">
                Dados Pessoais / Empresariais
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Nome do cliente ou empresa"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* Telefone */}
                <div className="md:col-span-2">
                  <label className="block text-neutral-700 font-semibold mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="+244 900 000 000"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-6">
                Serviços de Interesse
              </h2>

              <div className="space-y-6">
                {/* Manutenção Predial */}
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3">
                    Manutenção Predial
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Gestão e Manutenção de ETA",
                      "Implementação de sistemas de canalização",
                      "Manutenção e instalação elétrica de média e alta tensão",
                      "Montagem de cancela",
                      "Reparação de cancela",
                      "Serviços de Jardinagem",
                    ].map((servico, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 text-neutral-700"
                      >
                        <input type="checkbox" className="accent-orange-500" />
                        {servico}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tecnologia da Informação */}
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3">
                    Tecnologia de Informação
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Segurança electrónica",
                      "Sistema de video vigilância CCTV",
                      "Sistema de monitoramento de velocidade (RADAR)",
                      "Instalação e manutenção de rede informática e telecomunicação",
                      "Instalação de controle de acesso RFID e fechaduras magnéticas",
                      "Serviços de energia renováveis",
                    ].map((servico, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 text-neutral-700"
                      >
                        <input type="checkbox" className="accent-orange-500" />
                        {servico}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Consultoria */}
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3">
                    Consultoria
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Manutenção Predial", "Tecnologia da Informação"].map(
                      (servico, i) => (
                        <label
                          key={i}
                          className="flex items-center gap-2 text-neutral-700"
                        >
                          <input
                            type="checkbox"
                            className="accent-orange-500"
                          />
                          {servico}
                        </label>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mais informações */}
            <div>
              <label className="block text-neutral-700 font-semibold mb-2">
                Mais informações
              </label>
              <textarea
                rows="5"
                placeholder="Descreva o que precisa..."
                className="w-full resize-none border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            {/* Botão enviar */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full cursor-pointer bg-orange-500 text-white px-10 py-4 rounded-lg font-bold uppercase hover:bg-orange-600 transition shadow-lg"
              >
                Solicitar Orçamento
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />

      {/* Footer */}
      <Footer />
    </>
  );
}
