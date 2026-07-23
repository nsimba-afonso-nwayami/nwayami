"use client";

import Link from "next/link";

export default function MapaCta() {
  return (
    <section className="py-28 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Estamos prontos para{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              receber o seu projeto
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-neutral-500 font-medium max-w-2xl mx-auto">
            Visite-nos ou entre em contacto. Será um prazer conhecer o seu
            projeto e apresentar a melhor solução para as suas necessidades.
          </p>
        </div>

        {/* Mapa */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow duration-300">
          <iframe
            title="Localização da N.Wayami no Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.0764751663473!2d13.25866857414194!3d-8.996571892629392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521feccbfcdc5b%3A0x39338cb33ba2f1ea!2sN.Wayami!5e1!3m2!1spt-PT!2sao!4v1784299332672!5m2!1spt-PT!2sao"
            width="100%"
            height="480"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full border-0 block grayscale-[15%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Card CTA */}
        <div className="mt-12">
          <div className="bg-neutral-50 border border-neutral-200/80 rounded-3xl p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 uppercase tracking-widest text-orange-500 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Vamos conversar
              </span>

              <h3 className="text-3xl lg:text-4xl font-bold text-neutral-800 tracking-tight">
                Tem um projeto em mente?
              </h3>

              <p className="text-neutral-500 font-medium leading-relaxed">
                Solicite um orçamento sem compromisso. A nossa equipa está
                preparada para analisar as suas necessidades e apresentar uma
                proposta personalizada.
              </p>
            </div>

            <Link
              href="#formulario"
              className="group w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/10 shrink-0 text-sm tracking-wide"
            >
              Fale Connosco
              <i className="fa-solid fa-arrow-up text-xs transition-transform duration-300 group-hover:-translate-y-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
