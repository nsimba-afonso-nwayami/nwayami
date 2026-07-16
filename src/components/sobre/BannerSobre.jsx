"use client";

import BannerPage from "@/components/shared/BannerPage";
import bannerSobre from "@/assets/img/sobre.jpg";

export default function BannerSobre() {
  return (
    <BannerPage
      image={bannerSobre}
      currentPage="Quem Somos"
      title="Engenharia construída"
      highlight="com visão e excelência."
      description="Conheça a nossa história, os nossos valores e a experiência que faz da Nwayami um parceiro de confiança em engenharia, construção civil e manutenção predial."
    />
  );
}
