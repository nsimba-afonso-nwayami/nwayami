import BannerSobre from "@/components/sobre/BannerSobre";
import NossaHstoria from "@/components/sobre/NossaHstoria";
import MissaoVisaoValores from "@/components/sobre/MissaoVisaoValores";
import AreasAtuacao from "@/components/sobre/AreasAtuacao";
import NossoProcesso from "@/components/sobre/NossoProcesso";
import PorqueWayamiSobre from "@/components/sobre/PorqueWayamiSobre";
import Compromissos from "@/components/sobre/Compromissos";
import CtaOrcamento from "@/components/home/CtaOrcamento";

// SEO
export const metadata = {
  title: "Quem somos | Nwayami",
  description: "Site da empresa de manutenção predial e construção civil",
};

export default function QuemSomos() {
  return (
    <>
      <BannerSobre />
      <NossaHstoria />
      <MissaoVisaoValores />
      <AreasAtuacao />
      <NossoProcesso />
      <PorqueWayamiSobre />
      <Compromissos />
      <CtaOrcamento />
    </>
  );
}
