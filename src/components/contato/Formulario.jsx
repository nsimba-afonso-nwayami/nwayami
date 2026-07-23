"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/validations/contactSchema";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const mensagem = `
        NOVO PEDIDO DE CONTACTO

        Nome: ${data.name}
        Email: ${data.email}
        Telefone: ${data.phone}
        Assunto: ${data.subject}

        Mensagem:
        ${data.message}
      `;

      const numero = "244924034804";

      toast.success("A redirecionar para o WhatsApp...");

      window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
      );

      reset();
    } catch (error) {
      toast.error("Não foi possível abrir o WhatsApp.");
    }
  };

  return (
    <section
      id="formulario"
      className="py-28 bg-neutral-50 text-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Entre em{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              contacto connosco
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-neutral-500 font-medium max-w-2xl mx-auto">
            Estamos disponíveis para responder às suas questões, analisar o seu
            projeto e apresentar a melhor solução para as suas necessidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Informações de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-neutral-800 tracking-tight">
                Informações de Contacto
              </h3>

              <p className="mt-3 text-neutral-500 leading-relaxed font-medium">
                Utilize qualquer um dos canais abaixo ou envie-nos uma mensagem
                através do formulário ao lado.
              </p>

              <div className="mt-10 space-y-6">
                {/* Item: Morada */}
                <div className="group flex gap-5 items-start p-2 rounded-xl transition-colors duration-300 hover:bg-neutral-50">
                  <div className="w-12 h-12 rounded-xl border border-neutral-200 bg-white text-orange-500 flex items-center justify-center shrink-0 shadow-xs group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors duration-300">
                    <i className="fa-solid fa-location-dot text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-700 text-sm uppercase tracking-wider">
                      Morada
                    </h4>
                    <p className="mt-1 text-neutral-600 font-medium leading-relaxed">
                      Luanda, Angola
                    </p>
                  </div>
                </div>

                {/* Item: Telefone */}
                <div className="group flex gap-5 items-start p-2 rounded-xl transition-colors duration-300 hover:bg-neutral-50">
                  <div className="w-12 h-12 rounded-xl border border-neutral-200 bg-white text-orange-500 flex items-center justify-center shrink-0 shadow-xs group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors duration-300">
                    <i className="fa-solid fa-phone text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-700 text-sm uppercase tracking-wider">
                      Telefone
                    </h4>
                    <p className="mt-1 text-neutral-600 font-medium">
                      +244 9XX XXX XXX
                    </p>
                  </div>
                </div>

                {/* Item: Email */}
                <div className="group flex gap-5 items-start p-2 rounded-xl transition-colors duration-300 hover:bg-neutral-50">
                  <div className="w-12 h-12 rounded-xl border border-neutral-200 bg-white text-orange-500 flex items-center justify-center shrink-0 shadow-xs group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors duration-300">
                    <i className="fa-solid fa-envelope text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-700 text-sm uppercase tracking-wider">
                      Email
                    </h4>
                    <p className="mt-1 text-neutral-600 font-medium break-all">
                      contacto@nwayami.ao
                    </p>
                  </div>
                </div>

                {/* Item: Horário */}
                <div className="group flex gap-5 items-start p-2 rounded-xl transition-colors duration-300 hover:bg-neutral-50">
                  <div className="w-12 h-12 rounded-xl border border-neutral-200 bg-white text-orange-500 flex items-center justify-center shrink-0 shadow-xs group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors duration-300">
                    <i className="fa-solid fa-clock text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-700 text-sm uppercase tracking-wider">
                      Horário de Atendimento
                    </h4>
                    <p className="mt-1 text-neutral-600 font-medium leading-relaxed">
                      Segunda a Sexta — 08:00 às 17:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-10 pt-8 border-t border-neutral-200">
                <h4 className="font-bold text-neutral-700 text-sm uppercase tracking-wider mb-4">
                  Siga-nos nas Redes
                </h4>

                <div className="flex gap-3">
                  {["facebook-f", "instagram", "linkedin-in", "whatsapp"].map(
                    (icon) => (
                      <motion.a
                        key={icon}
                        href="#"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 rounded-lg border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-300 shadow-xs"
                      >
                        <i className={`fa-brands fa-${icon} text-sm`}></i>
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Painel do Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit, () =>
                toast.error("Preencha corretamente os campos obrigatórios.")
              )}
              className="bg-white rounded-2xl border border-neutral-200/80 p-8 md:p-10 shadow-sm space-y-6"
            >
              {/* Título e Subtítulo do Formulário */}
              <div className="border-b border-neutral-100 pb-4">
                <h3 className="text-2xl text-center font-bold text-neutral-800 tracking-tight">
                  Envie uma mensagem
                </h3>
                <p className="mt-1.5 text-neutral-500 font-medium text-sm leading-relaxed text-center">
                  Preencha os seus dados abaixo e entraremos em contacto o mais breve possível.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    {...register("name")}
                    className="w-full h-14 px-5 rounded-xl border border-neutral-200 bg-neutral-50/50 outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 font-medium transition-all duration-200 text-neutral-800 text-sm placeholder:text-neutral-400"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm font-medium">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="E-mail profissional"
                    {...register("email")}
                    className="w-full h-14 px-5 rounded-xl border border-neutral-200 bg-neutral-50/50 outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 font-medium transition-all duration-200 text-neutral-800 text-sm placeholder:text-neutral-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <input
                    type="tel"
                    placeholder="Telefone / WhatsApp"
                    {...register("phone")}
                    className="w-full h-14 px-5 rounded-xl border border-neutral-200 bg-neutral-50/50 outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 font-medium transition-all duration-200 text-neutral-800 text-sm placeholder:text-neutral-400"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm font-medium">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Assunto do contacto"
                    {...register("subject")}
                    className="w-full h-14 px-5 rounded-xl border border-neutral-200 bg-neutral-50/50 outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 font-medium transition-all duration-200 text-neutral-800 text-sm placeholder:text-neutral-400"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm font-medium">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <textarea
                  rows={6}
                  placeholder="Descreva detalhadamente as necessidades do seu projeto ou questão..."
                  {...register("message")}
                  className="w-full p-5 rounded-xl border border-neutral-200 bg-neutral-50/50 outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 font-medium transition-all duration-200 text-neutral-800 text-sm placeholder:text-neutral-400 resize-none leading-relaxed"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm font-medium">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="group cursor-pointer w-full inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-colors duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/15"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>A enviar...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <i className="fa-solid fa-paper-plane text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"></i>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
