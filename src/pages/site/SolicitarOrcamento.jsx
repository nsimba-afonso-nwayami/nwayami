import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ContatoImg from "../../assets/img/contato.jpg";

export default function SolicitarOrcamento() {
  return (
    <>
      <title>Solicitar Orçamento | Nwayami</title>

      {/* Header */}
      <Header />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />

      {/* Footer */}
      <Footer />
    </>
  );
}
