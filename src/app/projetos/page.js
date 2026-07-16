import BannerProjetos from "@/components/projetos/BannerProjetos";
import Portfolio from "@/components/projetos/Portfolio";
import CtaOrcamento from "@/components/home/CtaOrcamento";

// SEO
export const metadata = {
  title: "Nossos Projetos  | Nwayami",
  description: "Site da empresa de manutenção predial e construção civil",
};

export default function Projetos() {
  return (
    <>
      <BannerProjetos />
      <Portfolio />
      <CtaOrcamento />
    </>
  );
}
