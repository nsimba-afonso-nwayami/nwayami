"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Bloqueia o scroll da página no mobile quando o menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || menuOpen
            ? "bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-20" : "h-24"
          }`}
        >
          
          {/* Logo Minimalista */}
          <Link href="/" className="flex flex-col justify-center group relative z-50">
            <h1 className="text-2xl font-bold text-neutral-50 tracking-tight leading-none transition-colors duration-300 group-hover:text-orange-500">
              Nwayami
            </h1>
          </Link>

          {/* Menu Único (Desliza no mobile, fixa-se no desktop) */}
          <nav
            className={`
              /* Estrutura Mobile */
              fixed right-0 top-0 w-full h-screen bg-neutral-900 border-l border-neutral-800 p-8 pt-32 
              flex flex-col gap-6 shadow-2xl transition-transform duration-500 ease-out transform z-40
              ${menuOpen ? "translate-x-0" : "translate-x-full"}

              /* Reset Completo para Desktop (lg:) */
              lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:border-0 lg:p-0 
              lg:flex-row lg:items-center lg:gap-8 lg:shadow-none lg:translate-x-0 lg:z-auto
            `}
          >
            {/* Header interno visível apenas no mobile */}
            <div className="flex flex-col gap-2 border-b border-neutral-800 pb-6 lg:hidden">
              <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
                Menu de Navegação
              </span>
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-neutral-300 hover:text-neutral-50 py-2 border-b border-neutral-800/30 transition-colors duration-300 lg:text-sm lg:font-medium lg:text-neutral-400 lg:border-0 lg:py-0"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA único adaptável */}
            <div className="mt-auto pt-8 lg:mt-0 lg:pt-0">
              <Link
                href="/contato"
                onClick={() => setMenuOpen(false)}
                className="w-full lg:w-auto inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-neutral-50 px-6 py-4 lg:py-3 rounded-md font-bold text-base lg:text-sm tracking-wide transition-all duration-300 shadow-md shadow-orange-500/5 hover:-translate-y-0.5"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </nav>

          {/* Botão Hamburger com Ícones do FontAwesome */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-xl text-neutral-50 hover:text-orange-500 focus:outline-none transition-colors duration-300"
            aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark text-orange-500" : "fa-bars"}`}></i>
          </button>
        </div>
      </header>

      {/* Backdrop sutil apenas para o ecrã mobile quando aberto */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-neutral-950/60 backdrop-blur-xs z-30 lg:hidden transition-opacity duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />
    </>
  );
}
