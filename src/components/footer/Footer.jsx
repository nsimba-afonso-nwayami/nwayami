import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e descrição */}
        <div className="md:col-span-1">
          <h3 className="text-3xl font-bold text-orange-500 mb-4">NWAYAMI</h3>
          <p className="text-neutral-400 leading-relaxed">
            Soluções confiáveis em manutenção predial e construção. Garantimos
            qualidade, segurança e eficiência em cada projeto.
          </p>
          <div className="flex mt-6 space-x-4">
            {/* Redes sociais */}
            <a
              href="https://www.facebook.com/n.wayami/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-neutral-400 bg-neutral-800 rounded-full border border-neutral-700 shadow-md hover:text-neutral-50 hover:bg-orange-500 hover:border-orange-500 transform hover:scale-110 transition duration-300"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/n.wayami/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-neutral-400 bg-neutral-800 rounded-full border border-neutral-700 shadow-md hover:text-neutral-50 hover:bg-orange-500 hover:border-orange-500 transform hover:scale-110 transition duration-300"
            >
              <i className="fab fa-tiktok text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/n-wayami/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-neutral-400 bg-neutral-800 rounded-full border border-neutral-700 shadow-md hover:text-neutral-50 hover:bg-orange-500 hover:border-orange-500 transform hover:scale-110 transition duration-300"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="text-xl font-semibold text-orange-500 mb-4">
            Links Rápidos
          </h4>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Início
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-orange-500 transition">
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/quem-somos"
                className="hover:text-orange-500 transition"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-orange-500 transition">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-xl font-semibold text-orange-500 mb-4">
            Contato
          </h4>
          <div className="text-neutral-400 space-y-3">
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-orange-500"></i>
              Centralidade do Kilamba Quarteirão F, edifício F27 apartamento 91,
              Luanda, Angola
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-orange-500"></i>
              <a
                href="tel:+244972614886"
                className="hover:text-orange-500 transition"
              >
                +244 972 614 886
              </a>
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-orange-500"></i>
              <a
                href="tel:+244972614886"
                className="hover:text-orange-500 transition"
              >
                +244 972 614 886
              </a>
            </p>
            <p>
              <i className="fas fa-envelope mr-2 text-orange-500"></i>
              <a
                href="mailto:geral@nwayami.com"
                className="hover:text-orange-500 transition"
              >
                geral@nwayami.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div className="border-t border-neutral-800"></div>

      {/* Créditos e CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} N.WAYAMI. Todos os direitos
          reservados.
        </p>
        <Link
          to="/contato"
          className="mt-4 md:mt-0 inline-block bg-orange-500 text-neutral-50 px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Contato
        </Link>
      </div>
    </footer>
  );
}
