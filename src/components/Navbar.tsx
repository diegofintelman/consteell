import { useEffect, useState } from "react";
import logo from "@/assets/consteell-logo.png";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#porque", label: "Por que a Consteell" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f1a]/95 backdrop-blur-md border-b border-gold/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Consteell" className="h-10 w-auto md:h-12" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium uppercase tracking-wider text-white/85 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="rounded-sm bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-gold transition-transform hover:scale-105"
            >
              Orçamento
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <ul className="mx-5 mt-4 space-y-1 rounded-md border border-gold/20 bg-[#0f0f1a]/98 p-4 backdrop-blur">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-sm font-medium uppercase tracking-wider text-white/85 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-sm bg-gold px-3 py-3 text-center text-sm font-bold uppercase tracking-wider text-gold-foreground"
              >
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
