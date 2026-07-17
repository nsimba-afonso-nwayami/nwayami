"use client";

export default function Formulario() {
  return (
    <section id="formulario" className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}

        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            Entre em
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              contacto connosco.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Estamos disponíveis para responder às suas questões, analisar o seu
            projeto e apresentar a melhor solução para as suas necessidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Informações */}

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-neutral-200 p-10 h-full">
              <h3 className="text-2xl font-bold text-neutral-900">
                Informações de Contacto
              </h3>

              <p className="mt-4 text-neutral-600 leading-8">
                Utilize qualquer um dos canais abaixo ou envie-nos uma mensagem
                através do formulário.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900">Morada</h4>

                    <p className="mt-2 text-neutral-600 leading-7">
                      Luanda, Angola
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-phone"></i>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900">Telefone</h4>

                    <p className="mt-2 text-neutral-600">+244 9XX XXX XXX</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900">Email</h4>

                    <p className="mt-2 text-neutral-600">contacto@nwayami.ao</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-clock"></i>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900">Horário</h4>

                    <p className="mt-2 text-neutral-600 leading-7">
                      Segunda a Sexta
                      <br />
                      08:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes */}

              <div className="mt-12 pt-8 border-t border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-5">
                  Redes Sociais
                </h4>

                <div className="flex gap-4">
                  {["facebook-f", "instagram", "linkedin-in", "whatsapp"].map(
                    (icon) => (
                      <a
                        key={icon}
                        href="#"
                        className="w-12 h-12 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                      >
                        <i className={`fa-brands fa-${icon}`}></i>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}

          <div className="lg:col-span-3">
            <form className="bg-white rounded-3xl border border-neutral-200 p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="h-14 px-5 rounded-xl border border-neutral-200 outline-none focus:border-orange-500 transition"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 px-5 rounded-xl border border-neutral-200 outline-none focus:border-orange-500 transition"
                />

                <input
                  type="tel"
                  placeholder="Telefone"
                  className="h-14 px-5 rounded-xl border border-neutral-200 outline-none focus:border-orange-500 transition"
                />

                <input
                  type="text"
                  placeholder="Assunto"
                  className="h-14 px-5 rounded-xl border border-neutral-200 outline-none focus:border-orange-500 transition"
                />
              </div>

              <textarea
                rows={7}
                placeholder="Escreva a sua mensagem..."
                className="w-full mt-6 p-5 rounded-xl border border-neutral-200 outline-none focus:border-orange-500 transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer mt-8 w-full inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                Enviar Mensagem
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
