import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";

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
    </>
  );
}
