import logo from "@/assets/consteell-logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a15] pt-16 pb-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logo} alt="Consteell" className="h-16 w-auto" />
            <p className="mt-4 max-w-sm font-display text-sm uppercase tracking-[0.15em] text-gold-shine">
              "A força do aço. A leveza do futuro."
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Especialistas em Steel Frame, estruturas galvanizadas, telhados em aço
              e calhas sob medida na região de Tatuí/SP.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Navegação</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#servicos", "Serviços"],
                ["#porque", "Por que a Consteell"],
                ["#quem-somos", "Quem Somos"],
                ["#contato", "Orçamento"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="text-white/70 transition-colors hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Contato</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5515998151587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074z" />
                  </svg>
                  (15) 99815-1587
                </a>
              </li>
              <li className="text-white/65">Região de Tatuí/SP</li>
              <li className="text-white/65">Atendemos o interior de SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/15 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© 2025 Consteell. Todos os direitos reservados.</p>
          <p className="uppercase tracking-widest">Steel Frame · Tatuí · SP</p>
        </div>
      </div>
    </footer>
  );
}
