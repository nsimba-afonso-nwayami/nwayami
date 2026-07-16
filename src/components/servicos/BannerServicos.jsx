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
      description="Serviços de engenharia, construção civil, manutenção predial e consultoria, executados com qualidade e rigor técnico."
    />
  );
}
