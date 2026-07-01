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
      {/* Detalhe de linha fina no topo integrado à paleta */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-orange-500 via-orange-600 to-amber-400"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Bloco Institucional / Logo Clean */}
        <div className="space-y-6">
          <div className="flex flex-col justify-center group">
            <h2 className="text-2xl font-bold tracking-tight uppercase leading-none transition-colors duration-300 group-hover:text-orange-500">
              Nwayami
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-neutral-400 mt-1 transition-colors duration-300 group-hover:text-neutral-300">
              Engenharia & Construção
            </p>
          </div>

          <p className="text-neutral-400 text-sm leading-7 font-medium">
            Desenvolvemos soluções em engenharia, construção civil,
            reabilitação e consultoria, garantindo qualidade, segurança e
            compromisso em cada projeto corporativo ou residencial.
          </p>
        </div>

        {/* Links de Navegação */}
        <div>
          <h3 className="text-xs uppercase tracking-[3px] font-bold text-orange-500 mb-6">
            Navegação
          </h3>

          <nav className="flex flex-col gap-3.5">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-400 hover:text-neutral-50 text-sm transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Nossos Serviços */}
        <div>
          <h3 className="text-xs uppercase tracking-[3px] font-bold text-orange-500 mb-6">
            Serviços
          </h3>

          <div className="flex flex-col gap-3.5 text-neutral-400 text-sm font-medium">
            {services.map((service) => (
              <p key={service} className="hover:text-neutral-300 transition-colors duration-300">
                {service}
              </p>
            ))}
          </div>
        </div>

        {/* Informações de Contacto Clean */}
        <div>
          <h3 className="text-xs uppercase tracking-[3px] font-bold text-orange-500 mb-6">
            Contactos
          </h3>

          <div className="space-y-4 text-neutral-400 text-sm font-medium">
            <div className="flex items-center gap-3 group">
              <i className="fa-solid fa-location-dot text-orange-500 w-4 text-center"></i>
              <p className="transition-colors duration-300 group-hover:text-neutral-200">Luanda, Angola</p>
            </div>

            <div className="flex items-center gap-3 group">
              <i className="fa-solid fa-phone text-orange-500 w-4 text-center"></i>
              <p className="transition-colors duration-300 group-hover:text-neutral-200">+244 900 000 000</p>
            </div>

            <div className="flex items-center gap-3 group">
              <i className="fa-solid fa-envelope text-orange-500 w-4 text-center"></i>
              <p className="truncate transition-colors duration-300 group-hover:text-neutral-200">contacto@nwayami.ao</p>
            </div>
          </div>

          {/* Redes Sociais Clean */}
          <div className="flex gap-4 mt-8">
            {["facebook-f", "instagram", "linkedin-in"].map((icon, index) => (
              <Link
                key={index}
                href="#"
                className="text-neutral-400 hover:text-orange-500 transition-colors duration-300"
                aria-label={`Link para ${icon}`}
              >
                <i className={`fa-brands fa-${icon} text-base`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800/60 bg-neutral-950/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide">
          <p className="text-neutral-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-bold text-neutral-300">Nwayami Engenharia & Construção</span>. Todos os direitos reservados.
          </p>

          <p className="text-neutral-500 flex items-center gap-1.5 font-medium">
            Desenvolvido com excelência
          </p>
        </div>
      </div>
    </footer>
  );
}