const items = [
  {
    title: "Materiais Certificados",
    desc: "Trabalhamos exclusivamente com aço galvanizado certificado — sem atalhos, sem material de segunda linha.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="10" />
        <path d="M24 14v-6M24 40v-6M14 24H8M40 24h-6M16 16l-4-4M36 36l-4-4M16 32l-4 4M36 12l-4 4" />
      </svg>
    ),
  },
  {
    title: "Execução Ágil",
    desc: "Nossa equipe técnica entrega no prazo combinado. Sua obra não para por causa da estrutura.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 4L8 28h12l-2 16 18-24H24l2-16z" />
      </svg>
    ),
  },
  {
    title: "Projeto Técnico Incluso",
    desc: "Cada obra começa com projeto estrutural detalhado, garantindo segurança e conformidade técnica.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8h32v32H8z" />
        <path d="M8 16h32M16 8v32M8 24h32M8 32h32M24 8v32M32 8v32" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section id="porque" className="relative scroll-mt-24 overflow-hidden bg-navy-deep py-20 lg:py-28">
      <div className="absolute inset-0 bg-diagonal-lines" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Por que a Consteell</span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            A estrutura que <span className="text-gold-shine">sustenta</span>.<br />
            O compromisso que <span className="text-gold-shine">permanece</span>.
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/5 text-gold">
                <div className="h-10 w-10">{it.icon}</div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white">{it.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Slogan band */}
        <div className="relative mt-20 overflow-hidden rounded-sm border border-gold/30 bg-[#0a0a15] py-12">
          <div className="absolute inset-0 bg-trellis opacity-40" />
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="relative text-center font-display text-2xl font-bold uppercase tracking-[0.15em] text-gold-shine sm:text-3xl lg:text-4xl">
            "A força do aço. A leveza do futuro."
          </p>
        </div>
      </div>
    </section>
  );
}
