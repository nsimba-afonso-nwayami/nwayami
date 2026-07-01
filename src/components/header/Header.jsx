"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Projetos", href: "/projetos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto h-24 px-6 md:px-8 flex items-center justify-between">
        
        {/* Logo Premium */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
            <i className="fa-solid fa-helmet-safety text-neutral-900 text-lg animate-pulse"></i>
          </div>
          <div>
            <h1 className="text-xl font-black text-neutral-50 tracking-wide uppercase leading-none">
              Nwayami
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[4px] text-orange-500 mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
              Engenharia & Construção
            </p>
          </div>
        </Link>

        {/* Desktop & Mobile Navigation */}
        <nav
          className={`
            absolute left-0 top-full w-full bg-neutral-900 border-t border-neutral-800 px-6 py-6
            flex flex-col gap-4 shadow-2xl shadow-black/50
            transition-all duration-300 ease-in-out origin-top

            ${
              menuOpen
                ? "opacity-100 scale-y-100 visible"
                : "opacity-0 scale-y-95 invisible pointer-events-none lg:pointer-events-auto"
            }

            lg:static lg:scale-y-100 lg:opacity-100 lg:visible lg:w-auto lg:bg-transparent lg:border-0 lg:p-0 lg:shadow-none
            lg:flex-row lg:items-center lg:gap-8
          `}
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="relative text-sm font-medium text-neutral-400 hover:text-neutral-50 lg:py-2 transition-colors duration-300 group"
            >
              {item.name}
              {/* Linha de hover premium com a cor de reforço */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full hidden lg:block"></span>
            </Link>
          ))}

          {/* Botão de Call-to-Action Premium */}
          <Link
            href="/contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 lg:mt-0 bg-orange-500 hover:bg-orange-600 text-neutral-50 px-6 py-3 rounded-md font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/10 hover:shadow-orange-600/30 hover:-translate-y-0.5"
          >
            <i className="fa-solid fa-file-invoice text-neutral-900 text-xs bg-amber-400 p-1 rounded-sm"></i>
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Botão Mobile Alternador */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-neutral-800 text-orange-500 text-xl rounded-md bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 focus:outline-none"
          aria-label="Abrir Menu"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
    </header>
  );
}
