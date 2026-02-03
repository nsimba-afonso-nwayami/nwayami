import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroImg1 from "../../assets/img/hero1.jpg";
import HeroImg2 from "../../assets/img/hero2.jpg";
import HeroImg3 from "../../assets/img/hero3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <>
      <title>Nwayami</title>
      {/*Header */}
      <Header />

      <section className="relative w-full h-[90vh]">
        <Swiper
          modules={[Autoplay, Pagination,]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={HeroImg1}
                alt="Hero 1"
                className="w-full h-full object-cover brightness-75"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                  Manutenção Predial Confiável
                </h1>
                <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                  Garantimos qualidade, segurança e eficiência em cada projeto.
                </p>
                <Link
                  to="/contato"
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

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                  Projetos de Construção Profissionais
                </h1>
                <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                  Transformamos suas ideias em estruturas seguras e duráveis.
                </p>
                <Link
                  to="/contato"
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

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                  Serviços de Manutenção Industrial
                </h1>
                <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                  Soluções rápidas e eficientes para qualquer tipo de
                  edificação.
                </p>
                <Link
                  to="/contato"
                  className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/*Footer */}
      <Footer />
    </>
  );
}
