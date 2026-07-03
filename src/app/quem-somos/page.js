import BannerSobre from "@/components/sobre/BannerSobre";
import NossaHstoria from "@/components/sobre/NossaHstoria";

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
    </>
  );
}
