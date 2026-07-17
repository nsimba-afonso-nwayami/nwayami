import BannerContato from "@/components/contato/BannerContato";
import Formulario from "@/components/contato/Formulario";
import MapaCta from "@/components/contato/MapaCta";

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
      <MapaCta />
    </>
  );
}
