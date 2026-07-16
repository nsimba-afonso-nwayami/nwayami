"use client";

import BannerPage from "@/components/shared/BannerPage";
import bannerServicos from "@/assets/img/servicos.jpg";

export default function BannerServicos() {
  return (
    <BannerPage
      image={bannerServicos}
      currentPage="Serviços"
      title="Soluções completas em"
      highlight="engenharia e construção."
      description="Disponibilizamos serviços especializados em construção civil, engenharia, manutenção predial, fiscalização, consultoria técnica e reabilitação de edifícios, sempre com foco na qualidade, segurança e excelência em cada projeto."
    />
  );
}
