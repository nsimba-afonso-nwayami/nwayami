"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Projetos", href: "/projetos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-20" : "h-24"
        }`}
      >
        
        {/* Logo Minimalista & Clean */}
        <Link href="/" className="flex flex-col justify-center group">
          <h1 className="text-2xl font-bold text-neutral-50 tracking-tight leading-none transition-colors duration-300 group-hover:text-orange-500">
            Nwayami
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-neutral-400 mt-1 transition-colors duration-300 group-hover:text-neutral-300">
            Engenharia & Construção
          </p>
        </Link>

        {/* Navigation */}
        <nav
          className={`
            absolute left-0 top-full w-full bg-neutral-900 border-t border-neutral-800 px-6 py-6
            flex flex-col gap-4 shadow-xl
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
              className="text-sm font-medium text-neutral-400 hover:text-neutral-50 lg:py-2 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}

          {/* Botão de CTA Clean */}
          <Link
            href="/contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 lg:mt-0 bg-orange-500 hover:bg-orange-600 text-neutral-50 px-6 py-3 rounded-md font-bold text-sm tracking-wide transition-all duration-300 shadow-md shadow-orange-500/5 hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden w-10 h-10 flex items-center justify-center border text-xl rounded-md transition-all duration-300 focus:outline-none ${
            isScrolled || menuOpen
              ? "bg-neutral-900 border-neutral-800 text-orange-500 hover:bg-neutral-800"
              : "bg-black/10 border-white/10 text-neutral-50 hover:bg-black/30"
          }`}
          aria-label="Abrir Menu"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
    </header>
  );
}
