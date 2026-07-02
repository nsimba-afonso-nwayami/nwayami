import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Servicos from "@/components/home/Servicos";
import NumerosEmpresa from "@/components/home/NumerosEmpresa";
import Projetos from "@/components/home/Projetos";
import PorqueNwayami from "@/components/home/PorqueNwayami";
import CtaOrcamento from "@/components/home/CtaOrcamento";

// SEO GLOBAL DO SITE
export const metadata = {
  title: "Nwayami",
  description: "Site da empresa de manutenção predial e construção civil",
};

export default function Home() {
  return (
    <>
     <Hero />
     <Sobre />
     <Servicos />
     <NumerosEmpresa />
     <Projetos />
     <PorqueNwayami />
     <CtaOrcamento />
    </>
  );
}
