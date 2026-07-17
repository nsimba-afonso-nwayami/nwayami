"use client";

import BannerPage from "@/components/shared/BannerPage";
import bannerContato from "@/assets/img/contato.jpg";

export default function BannerContato() {
  return (
    <BannerPage
      image={bannerContato}
      currentPage="Contato"
      title="Estamos prontos para"
      highlight="ouvir o seu projeto."
      description="Fale connosco e descubra como a Nwayami pode contribuir para o sucesso do seu empreendimento com soluções de engenharia, construção e manutenção adaptadas às suas necessidades."
    />
  );
}
