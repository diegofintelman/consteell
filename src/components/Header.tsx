import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-consteell.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/steel-frame", label: "Steel Frame" },
  { to: "/calhas-rufos", label: "Calhas e Rufos" },
  { to: "/fachadas", label: "Fachadas" },
  { to: "/obras", label: "Obras" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e1a]/95 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Consteell">
          <img
            src={logo}
            alt="Consteell"
            className="h-16 w-auto -my-3 md:h-20 md:-my-5"
            width={1280}
            height={512}
          />
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "text-white" }}
                activeOptions={{ exact: true }}
                className="text-xs font-medium uppercase tracking-[0.18em] text-[#c8d0dc] transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center xl:flex">
          <Link
            to="/contato"
            className="border border-[#c8d0dc] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#c8d0dc] transition-all hover:bg-[#c8d0dc] hover:text-[#0a0e1a]"
          >
            Solicitar Orçamento
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="text-[#c8d0dc] xl:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {scrolled && <div className="divider-steel absolute inset-x-0 bottom-0" />}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0a0e1a] border-l border-[#2d3748] p-6 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <img src={logo} alt="Consteell" className="h-14 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X className="h-6 w-6 text-[#c8d0dc]" />
            </button>
          </div>
          <ul className="mt-10 space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-white border-[#c8d0dc]" }}
                  className="block border-l-2 border-transparent px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#c8d0dc] transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <a
                href="https://wa.me/5515998151587"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#0a0e1a]"
              >
                <MessageCircle className="h-4 w-4" />
                Orçamento WhatsApp
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}
