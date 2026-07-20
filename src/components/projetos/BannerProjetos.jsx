"use client";

import BannerPage from "@/components/shared/BannerPage";
import bannerProjetos from "@/assets/img/projetos.jpg";

export default function BannerProjetos() {
  return (
    <BannerPage
      image={bannerProjetos}
      currentPage="Projetos"
      title="Projetos que refletem"
      highlight="qualidade e inovação"
      description="Conheça alguns dos projetos que demonstram a nossa experiência, rigor técnico e compromisso com a excelência."
    />
  );
}
