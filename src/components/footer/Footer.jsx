import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Projetos", href: "/projetos" },
    { name: "Contato", href: "/contato" },
  ];

  const services = [
    "Construção Civil",
    "Engenharia",
    "Fiscalização",
    "Consultoria",
    "Reabilitação",
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-50 border-t border-neutral-800 relative overflow-hidden">
      {/* Detalhe de linha industrial no topo */}
      <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-orange-500 via-orange-600 to-amber-400"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Bloco Institucional / Logo */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-9 h-9 bg-linear-to-br from-orange-500 to-orange-600 rounded-md shadow-md shadow-orange-500/10">
              <i className="fa-solid fa-helmet-safety text-neutral-900 text-sm"></i>
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-wide uppercase leading-none">
                Nwayami
              </h2>
              <p className="text-[9px] font-bold uppercase tracking-[3px] text-orange-500 mt-1 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-amber-400 inline-block"></span>
                Engenharia & Construção
              </p>
            </div>
          </div>

          <p className="text-neutral-400 text-sm leading-7">
            Desenvolvemos soluções em engenharia, construção civil,
            reabilitação e consultoria, garantindo qualidade, segurança e
            compromisso em cada projeto corporativo ou residencial.
          </p>
        </div>

        {/* Links de Navegação */}
        <div>
          <h3 className="text-xs uppercase tracking-[2px] font-bold text-orange-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-orange-600 inline-block rounded-sm"></span>
            Navegação
          </h3>

          <nav className="flex flex-col gap-3.5">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-400 hover:text-neutral-50 text-sm flex items-center gap-0 hover:gap-2 transition-all duration-300 group"
              >
                <i className="fa-solid fa-chevron-right text-[10px] text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Nossos Serviços */}
        <div>
          <h3 className="text-xs uppercase tracking-[2px] font-bold text-orange-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-orange-600 inline-block rounded-sm"></span>
            Serviços
          </h3>

          <div className="flex flex-col gap-3.5 text-neutral-400 text-sm">
            {services.map((service) => (
              <p key={service} className="flex items-center gap-2.5">
                <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                {service}
              </p>
            ))}
          </div>
        </div>

        {/* Informações de Contacto */}
        <div>
          <h3 className="text-xs uppercase tracking-[2px] font-bold text-orange-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-orange-600 inline-block rounded-sm"></span>
            Contactos
          </h3>

          <div className="space-y-4 text-neutral-400 text-sm">
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700/50 group-hover:border-orange-500 transition-colors">
                <i className="fa-solid fa-location-dot text-orange-500 text-xs"></i>
              </div>
              <p className="leading-relaxed mt-0.5">Luanda, Angola</p>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700/50 group-hover:border-orange-500 transition-colors">
                <i className="fa-solid fa-phone text-orange-500 text-xs"></i>
              </div>
              <p>+244 900 000 000</p>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700/50 group-hover:border-orange-500 transition-colors">
                <i className="fa-solid fa-envelope text-orange-500 text-xs"></i>
              </div>
              <p className="truncate">contacto@nwayami.ao</p>
            </div>
          </div>

          {/* Redes Sociais Premium */}
          <div className="flex gap-3 mt-6">
            {["facebook-f", "instagram", "linkedin-in"].map((icon, index) => (
              <Link
                key={index}
                href="#"
                className="w-9 h-9 rounded bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-md"
              >
                <i className={`fa-brands fa-${icon} text-sm`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide">
          <p className="text-neutral-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-neutral-200">Nwayami Engenharia & Construção</span>. Todos os direitos reservados.
          </p>

          <p className="text-neutral-500 flex items-center gap-1.5">
            Desenvolvido com excelência
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
