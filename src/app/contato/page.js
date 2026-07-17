import BannerContato from "@/components/contato/BannerContato";
import Formulario from "@/components/contato/Formulario";

// SEO
export const metadata = {
  title: "Contato | Nwayami",
  description: "Site da empresa de manutenção predial e construção civil",
};

export default function Contato() {
  return (
    <>
      <BannerContato />
      <Formulario />
    </>
  );
}
