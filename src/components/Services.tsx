type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Steel Frame",
    desc: "Estrutura leve, resistente e certificada. Ideal para residências, comércios e galpões com agilidade na execução.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 42V18l18-12 18 12v24" />
        <path d="M6 42h36M14 42V24h20v18M14 32h20M24 24v18" />
      </svg>
    ),
  },
  {
    title: "Estruturas Galvanizadas Ecoframe",
    desc: "Livre-se de cupins e rachaduras com perfis galvanizados de alta durabilidade. Design exclusivo, não propaga fogo.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l16 6v12c0 10-7 18-16 22-9-4-16-12-16-22V10l16-6z" />
        <path d="M18 24l4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Telhados em Aço",
    desc: "Coberturas metálicas com vedação total, estética moderna e resistência comprovada às intempéries.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 26L24 10l20 16" />
        <path d="M8 26v16h32V26M16 42V30h16v12" />
      </svg>
    ),
  },
  {
    title: "Calhas sob Medida",
    desc: "Calhas fabricadas na medida certa para sua obra, com instalação precisa e acabamento impecável.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16h40v8c0 2-2 4-4 4H8c-2 0-4-2-4-4v-8z" />
        <path d="M4 16l6-6h28l6 6M20 32v8M28 32v8" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 bg-[#0c0c14] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Serviços</span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            O que a Consteell <span className="text-gold-shine">constrói</span> para você
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-sm border border-gold/15 bg-navy p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
            >
              <div className="absolute inset-0 bg-trellis opacity-30 transition-opacity group-hover:opacity-60" />
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold via-[#f5d76e] to-gold transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-gold-foreground">
                  <div className="h-8 w-8">{s.icon}</div>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
