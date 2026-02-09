import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SEO from "../../components/SEO";
import WhatsAppButton from "../../components/WhatsAppButton";
import SolicitarImg from "../../assets/img/solicitar.jpg";
import { solicitarOrcamentoSchema } from "../../validations/solicitarOrcamentoSchema";

export default function SolicitarOrcamento() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(solicitarOrcamentoSchema),
    defaultValues: { servicos: [] }, // array de serviços
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Enviando solicitação...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Orçamento enviado:", data);

      toast.success("Solicitação enviada com sucesso!", { id: toastId });
      reset();
    } catch (error) {
      toast.error("Erro ao enviar. Tente novamente.", { id: toastId });
    }
  };

  // Todos os serviços
  const manutencaoPredial = [
    "Gestão e Manutenção de ETA",
    "Implementação de sistemas de canalização",
    "Manutenção e instalação elétrica de média e alta tensão",
    "Montagem de cancela",
    "Reparação de cancela",
    "Serviços de Jardinagem",
  ];

  const tecnologiaInfo = [
    "Segurança electrónica",
    "Sistema de video vigilância CCTV",
    "Sistema de monitoramento de velocidade (RADAR)",
    "Instalação e manutenção de rede informática e telecomunicação",
    "Instalação de controle de acesso RFID e fechaduras magnéticas",
    "Serviços de energia renováveis",
    "Criação de sites",
    "Criação de sistemas de gestão web",
    "Criação de sistemas personalizados",
  ];

  const consultoria = ["Manutenção Predial", "Tecnologia da Informação"];

  const todosServicos = [
    ...manutencaoPredial,
    ...tecnologiaInfo,
    ...consultoria,
  ];

  return (
    <>
      <SEO
        title="Solicitar Orçamento | Nwayami"
        description="Solicite um orçamento personalizado para serviços de manutenção predial, tecnologia da informação ou consultoria."
        keywords="solicitar orçamento Nwayami, orçamento manutenção predial, orçamento TI, orçamento consultoria"
        image="https://nwayami.vercel.app/seo/orcamento.jpg"
        url="https://nwayami.vercel.app/solicitar-orcamento"
      />

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
          <form
            className="bg-white shadow-lg rounded-2xl p-8 md:p-10 space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                      errors.nome
                        ? "border-red-500 focus:ring-red-400"
                        : "border-neutral-300 focus:ring-orange-500"
                    }`}
                    {...register("nome")}
                  />
                  {errors.nome && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.nome.message}
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-400"
                        : "border-neutral-300 focus:ring-orange-500"
                    }`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Telefone */}
                <div className="md:col-span-2">
                  <label className="block text-neutral-700 font-semibold mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="+244 900 000 000"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                      errors.telefone
                        ? "border-red-500 focus:ring-red-400"
                        : "border-neutral-300 focus:ring-orange-500"
                    }`}
                    {...register("telefone")}
                  />
                  {errors.telefone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.telefone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-6">
                Serviços de Interesse
              </h2>

              <div className="space-y-6">
                <Controller
                  name="servicos"
                  control={control}
                  render={({ field }) => (
                    <>
                      {/* Manutenção Predial */}
                      <div>
                        <h3 className="font-bold text-neutral-800 mb-3">
                          Manutenção Predial
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {manutencaoPredial.map((servico, i) => (
                            <label
                              key={i}
                              className="flex items-center gap-2 text-neutral-700"
                            >
                              <input
                                type="checkbox"
                                value={servico}
                                checked={field.value.includes(servico)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    field.onChange([...field.value, servico]);
                                  } else {
                                    field.onChange(
                                      field.value.filter((v) => v !== servico),
                                    );
                                  }
                                }}
                                className="accent-orange-500"
                              />
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
                          {tecnologiaInfo.map((servico, i) => (
                            <label
                              key={i}
                              className="flex items-center gap-2 text-neutral-700"
                            >
                              <input
                                type="checkbox"
                                value={servico}
                                checked={field.value.includes(servico)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    field.onChange([...field.value, servico]);
                                  } else {
                                    field.onChange(
                                      field.value.filter((v) => v !== servico),
                                    );
                                  }
                                }}
                                className="accent-orange-500"
                              />
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
                          {consultoria.map((servico, i) => (
                            <label
                              key={i}
                              className="flex items-center gap-2 text-neutral-700"
                            >
                              <input
                                type="checkbox"
                                value={servico}
                                checked={field.value.includes(servico)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    field.onChange([...field.value, servico]);
                                  } else {
                                    field.onChange(
                                      field.value.filter((v) => v !== servico),
                                    );
                                  }
                                }}
                                className="accent-orange-500"
                              />
                              {servico}
                            </label>
                          ))}
                        </div>
                      </div>

                      {errors.servicos && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.servicos.message}
                        </p>
                      )}
                    </>
                  )}
                />
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
                className={`w-full resize-none border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.mensagem
                    ? "border-red-500 focus:ring-red-400"
                    : "border-neutral-300 focus:ring-orange-500"
                }`}
                {...register("mensagem")}
              ></textarea>
              {errors.mensagem && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mensagem.message}
                </p>
              )}
            </div>

            {/* Botão enviar */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-orange-500 text-white px-10 py-4 rounded-lg font-bold uppercase hover:bg-orange-600 transition shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <WhatsAppButton phone="244972614886" size={64} />
      <Footer />
    </>
  );
}
