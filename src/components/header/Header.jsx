import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-900 border-b border-neutral-800 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-neutral-50"
        >
          NWA<span className="text-orange-500">YAMI</span>
        </Link>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl text-neutral-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <i
            className={`fas transition-all duration-200
              ${menuOpen ? "fa-times text-orange-500 rotate-90 scale-110" : "fa-bars rotate-0 scale-100"}
            `}
          ></i>
        </button>

        {/* Menu */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            bg-neutral-900 md:bg-transparent
            flex flex-col md:flex-row
            items-center gap-6
            px-6 md:p-0
            overflow-hidden
            transition-all duration-200 ease-linear
            md:overflow-visible md:max-h-full md:opacity-100 md:translate-y-0
            ${menuOpen ? "max-h-96 opacity-100 translate-y-0 py-6" : "max-h-0 opacity-0 -translate-y-2 py-0"}
          `}
        >
          {/* Links */}
          <Link
            to="/"
            className="uppercase tracking-wide text-neutral-50 hover:text-orange-500 transition-colors duration-200"
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className="uppercase tracking-wide text-neutral-50 hover:text-orange-500 transition-colors duration-200"
          >
            Sobre
          </Link>
          <Link
            to="/servicos"
            className="uppercase tracking-wide text-neutral-50 hover:text-orange-500 transition-colors duration-200"
          >
            Serviços
          </Link>
          <Link
            to="/projetos"
            className="uppercase tracking-wide text-neutral-50 hover:text-orange-500 transition-colors duration-200"
          >
            Projetos
          </Link>
          <Link
            to="/contato"
            className="uppercase tracking-wide text-neutral-50 hover:text-orange-500 transition-colors duration-200"
          >
            Contato
          </Link>

          {/* CTA */}
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 mt-4 md:mt-0">
            <Link
              to="/contato"
              className="border border-orange-500 text-orange-500 font-bold uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-neutral-50 transition-colors duration-200 flex items-center justify-center w-full md:w-auto"
            >
              <i className="fas fa-envelope"></i>
              Fale Connosco
            </Link>

            <a
              href="https://wa.me/244972614886"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-neutral-50 font-bold uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center w-full md:w-auto"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
