import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import HeroImg1 from "../../assets/img/hero1.jpg";
import HeroImg2 from "../../assets/img/hero2.jpg";
import HeroImg3 from "../../assets/img/hero3.jpg";
import SobreImg2 from "../../assets/img/sobre2.jpg";
import Parallax from "../../assets/img/parallax.jpg";
import ProjetoImg1 from "../../assets/img/projeto1.jpg";
import ProjetoImg2 from "../../assets/img/projeto2.jpg";
import ProjetoImg3 from "../../assets/img/projeto3.jpg";
import ProjetoImg4 from "../../assets/img/projeto4.jpg";
import ClienteBgImg from "../../assets/img/clientebg.jpg";
import ClienteImg1 from "../../assets/img/cliente1.png";
import ClienteImg2 from "../../assets/img/cliente2.png";
import ClienteImg3 from "../../assets/img/cliente3.png";
import ClienteImg4 from "../../assets/img/cliente4.png";
import ClienteImg5 from "../../assets/img/cliente5.png";
import ClienteImg6 from "../../assets/img/cliente6.png";
import ClienteImg7 from "../../assets/img/cliente7.png";
import ClienteImg8 from "../../assets/img/cliente8.png";
import ClienteImg9 from "../../assets/img/cliente8.png";
import VideoDepoimento from "../../assets/video/depoimentos.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Home() {
  return (
    <>
      <title>Nwayami | Soluções em Manutenção Predial e TI</title>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[90vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="h-full relative"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={HeroImg1}
                alt="Hero 1"
                className="w-full h-full object-cover brightness-75"
              />

              <div className="absolute inset-0 hero-overlay"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                  Manutenção Predial Confiável
                </h1>
                <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                  Garantimos qualidade, segurança e eficiência em cada projeto.
                </p>
                <Link
                  to="/solicitar-orcamento"
                  className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={HeroImg2}
                alt="Hero 2"
                className="w-full h-full object-cover brightness-75"
              />

              <div className="absolute inset-0 hero-overlay"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                  Projetos de Construção Profissionais
                </h1>
                <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                  Transformamos suas ideias em estruturas seguras e duráveis.
                </p>
                <Link
                  to="/solicitar-orcamento"
                  className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={HeroImg3}
                alt="Hero 3"
                className="w-full h-full object-cover brightness-75"
              />

              <div className="absolute inset-0 hero-overlay"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                  Serviços de Manutenção Industrial
                </h1>
                <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                  Soluções rápidas e eficientes para qualquer tipo de
                  edificação.
                </p>
                <Link
                  to="/solicitar-orcamento"
                  className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* sobre */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center gap-8">
        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Sobre a Nwayami
          </h2>
          <p className="text-neutral-800 text-lg md:text-xl mb-6">
            Na Nwayami, oferecemos soluções confiáveis em manutenção predial e
            tecnologia de informação. Garantimos eficiência, segurança e
            inovação em cada projeto, adaptando-nos às necessidades do seu
            negócio.
          </p>
          <Link
            to="/sobre"
            className="inline-block bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
          >
            Saiba Mais
          </Link>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2">
          <img
            src={SobreImg2}
            alt="Sobre a Nwayami"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Serviços */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Título da Seção */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 text-center mb-4">
          Nossos Serviços
        </h2>
        <p className="text-center text-neutral-700 mb-12 max-w-3xl mx-auto">
          Oferecemos soluções completas e confiáveis para manutenção predial e
          tecnologia de informação, garantindo eficiência, segurança e inovação
          em cada projeto.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Manutenção Predial */}
          <div className="bg-neutral-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <i className="fas fa-tools text-orange-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              Manutenção Predial
            </h3>
            <p className="text-neutral-700 mb-4">
              Oferecemos serviços especializados de manutenção predial,
              garantindo a conservação e o bom funcionamento de todos os
              sistemas e estruturas do seu imóvel.
            </p>
            <Link
              to="/servicos/manutencao-predial"
              className="mt-auto bg-orange-500 text-neutral-50 px-6 py-2 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Card 2: Tecnologia de Informação */}
          <div className="bg-neutral-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <i className="fas fa-network-wired text-orange-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              Tecnologia de Informação
            </h3>
            <p className="text-neutral-700 mb-4">
              Oferecemos otimização da infraestrutura digital da sua empresa,
              melhorando a conectividade e segurança dos sistemas. Atuamos em
              redes, suporte técnico e proteção de dados.
            </p>
            <Link
              to="/servicos/tecnologia-informacao"
              className="mt-auto bg-orange-500 text-neutral-50 px-6 py-2 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Card 3: Consultoria */}
          <div className="bg-neutral-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <i className="fas fa-lightbulb text-orange-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              Consultoria
            </h3>
            <p className="text-neutral-700 mb-4">
              Oferecemos soluções personalizadas para gestão eficaz da
              manutenção predial e TI, ajudando a identificar necessidades,
              implementar melhorias e otimizar processos com foco em eficiência
              e segurança.
            </p>
            <Link
              to="/servicos/consultoria"
              className="mt-auto bg-orange-500 text-neutral-50 px-6 py-2 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Parallax */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${Parallax})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay escura */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Conteúdo */}
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-50 mb-4 uppercase">
            Soluções Industriais e Digitais
          </h2>
          <p className="text-neutral-200 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Conectamos manutenção predial e tecnologia da informação para
            oferecer eficiência, segurança e inovação em cada projeto.
          </p>
          <Link
            to="/solicitar-orcamento"
            className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>

      {/* Seção Projetos */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-neutral-700 mb-12 max-w-3xl mx-auto">
            Confira alguns dos projetos realizados pela Nwayami, unindo
            manutenção predial e tecnologia da informação com qualidade,
            segurança e inovação.
          </p>

          {/* Galeria */}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {/* Projeto 1 */}
            <a
              href={ProjetoImg1}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={ProjetoImg1}
                alt="Projeto 1"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <i className="fas fa-search-plus text-orange-500 text-5xl"></i>
              </div>
            </a>

            {/* Projeto 2 */}
            <a
              href={ProjetoImg2}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={ProjetoImg2}
                alt="Projeto 2"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <i className="fas fa-search-plus text-orange-500 text-5xl"></i>
              </div>
            </a>

            {/* Projeto 3 */}
            <a
              href={ProjetoImg3}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={ProjetoImg3}
                alt="Projeto 3"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <i className="fas fa-search-plus text-orange-500 text-5xl"></i>
              </div>
            </a>

            {/* Projeto 4 */}
            <a
              href={ProjetoImg4}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={ProjetoImg4}
                alt="Projeto 4"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <i className="fas fa-search-plus text-orange-500 text-5xl"></i>
              </div>
            </a>
          </LightGallery>
        </div>
      </section>

      {/* Seção Clientes & Parceiros */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: `url(${ClienteBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 text-center mb-4">
            Clientes & Parceiros
          </h2>
          <p className="text-neutral-300 text-center mb-12 max-w-3xl mx-auto">
            Empresas que confiam na Nwayami para soluções em manutenção predial
            e tecnologia da informação, construindo parcerias sólidas e
            duradouras.
          </p>

          {/* Swiper Logos */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="flex items-center"
          >
            {[
              ClienteImg1,
              ClienteImg2,
              ClienteImg3,
              ClienteImg4,
              ClienteImg5,
              ClienteImg6,
              ClienteImg7,
              ClienteImg8,
              ClienteImg9,
            ].map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`Cliente ${index + 1}`}
                    className="max-h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Depoimentos de Clientes
          </h2>
          <p className="text-neutral-700 mb-12 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços em manutenção
            predial e tecnologia da informação.
          </p>

          {/* Player de vídeo com capa */}
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <video
              src={VideoDepoimento}
              poster={SobreImg2} // imagem de capa
              controls
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Seção Contato & Localização */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Contato & Localização
          </h2>
          <p className="text-neutral-700 mb-12 max-w-3xl mx-auto">
            Entre em contacto connosco ou visite-nos. Estamos prontos para
            oferecer soluções eficientes em manutenção predial e tecnologia da
            informação.
          </p>

          {/* Cards de contato */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Telefone / WhatsApp */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-phone text-orange-500 text-4xl mb-4 group-hover:text-orange-600 transition"></i>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Telefone / WhatsApp
              </h3>
              <a
                href="https://wa.me/244900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-orange-500 transition"
              >
                +244 972 614 886
              </a>
            </div>

            {/* Endereço */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-map-marker-alt text-orange-500 text-4xl mb-4 group-hover:text-orange-600 transition"></i>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Endereço
              </h3>
              <p className="text-neutral-700 text-center">
                Centralidade do Kilamba Quarteirão F, edifício F27 apartamento
                91, <br /> Luanda, Angola
              </p>
            </div>

            {/* Horário */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-clock text-orange-500 text-4xl mb-4 group-hover:text-orange-600 transition"></i>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Horário de Atendimento
              </h3>
              <p className="text-neutral-700 text-center">
                Seg - Sex: 08:00 - 17:00 <br />
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa Nwayami - Luanda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7343727422167!2d13.25866857414194!3d-8.996571892629392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521feccbfcdc5b%3A0x39338cb33ba2f1ea!2sN.Wayami!5e0!3m2!1spt-PT!2sao!4v1770129007183!5m2!1spt-PT!2sao"
              className="w-full h-64 md:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="relative py-20 bg-orange-500">
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center text-neutral-50">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pronto para iniciar o seu próximo projeto?
          </h2>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-neutral-100">
            Entre em contacto com a Nwayami e descubra soluções eficientes em
            manutenção predial e tecnologia da informação, feitas à medida das
            necessidades do seu negócio.
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
