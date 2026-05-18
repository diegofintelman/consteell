import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo-consteell.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/steel-frame", label: "Steel Frame" },
  { to: "/calhas-rufos", label: "Calhas e Rufos" },
  { to: "/fachadas", label: "Fachadas" },
  { to: "/obras", label: "Obras" },
  { to: "/contato", label: "Contato" },
] as const;

export function Footer() {
  return (
    <footer className="relative bg-[#060a12] pt-20 pb-8">
      <div className="divider-steel absolute inset-x-0 top-0" />
      <div className="absolute inset-x-0 top-0 h-10 clip-diagonal-top bg-[#0a0e1a]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logo} alt="Consteell" className="h-14 w-auto" />
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#c8d0dc]">
              A Força do Aço, Leveza do Futuro
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Especializada em telhado em steel frame, calhas, rufos e fachadas.
              Atendemos obras residenciais, comerciais e corporativas com foco em
              qualidade, durabilidade e acabamento profissional.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navegação
            </h4>
            <div className="divider-steel mt-3 w-12" />
            <ul className="mt-5 space-y-2.5 text-sm">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-400 transition-colors hover:text-[#c8d0dc]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Fale Conosco
            </h4>
            <div className="divider-steel mt-3 w-12" />
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+5515998151587"
                  className="flex items-center gap-3 transition-colors hover:text-[#c8d0dc]"
                >
                  <Phone className="h-4 w-4 text-[#c8d0dc]" />
                  (15) 99815-1587
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5515998151587?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-[#c8d0dc]"
                >
                  <MessageCircle className="h-4 w-4 text-[#c8d0dc]" />
                  WhatsApp Consteell
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#c8d0dc]" />
                Sorocaba/SP — Região Metropolitana
              </li>
              <li>
                <a
                  href="https://www.instagram.com/consteell_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-[#c8d0dc]"
                >
                  <Instagram className="h-4 w-4 text-[#c8d0dc]" />
                  @consteell_
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Atendimento
            </h4>
            <div className="divider-steel mt-3 w-12" />
            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              <li>Seg a Sex: 8h–18h</li>
              <li>Sábado: 8h–12h</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[#2d3748] pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2025 Consteell. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.2em]">Steel Frame · Sorocaba · SP</p>
        </div>
      </div>
    </footer>
  );
}
