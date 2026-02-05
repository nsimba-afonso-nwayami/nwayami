import { Routes, Route } from "react-router-dom";
//Site
import Home from "../pages/site/Home";
import Sobre from "../pages/site/Sobre";
import Servicos from "../pages/site/Servicos";
import ServicosManutencaoPredial from "../pages/site/ServicosManutencaoPredial";
import ServicosTecnologiaInformacao from "../pages/site/ServicosTecnologiaInformacao";
import ServicosConsultoria from "../pages/site/ServicosConsultoria";
import Projetos from "../pages/site/Projetos";
import NotFound from "../pages/site/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/servicos/manutencao-predial" element={<ServicosManutencaoPredial />} />
      <Route path="/servicos/tecnologia-informacao" element={<ServicosTecnologiaInformacao />} />
      <Route path="/servicos/consultoria" element={<ServicosConsultoria />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
