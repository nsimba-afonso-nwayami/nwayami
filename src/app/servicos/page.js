import BannerServicos from "@/components/servicos/BannerServicos";
import NossosServicos from "@/components/servicos/NossosServicos";
import ComoTrabalhamos from "@/components/servicos/ComoTrabalhamos";
import Diferenciais from "@/components/servicos/Diferenciais";
import CtaOrcamento from "@/components/home/CtaOrcamento";

// SEO
export const metadata = {
  title: "Nossos Serviços  | Nwayami",
  description: "Site da empresa de manutenção predial e construção civil",
};

export default function Servicos() {
  return (
    <>
      <BannerServicos />
      <NossosServicos />
      <ComoTrabalhamos />
      <Diferenciais />
      <CtaOrcamento />
    </>
  );
}
