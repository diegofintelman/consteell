import about from "@/assets/about.jpg";

const milestones = [
  { year: "2014", text: "Fundação da Consteell" },
  { year: "2018", text: "100ª obra entregue" },
  { year: "2024", text: "Expansão para 15 cidades" },
];

export function About() {
  return (
    <section id="quem-somos" className="relative scroll-mt-24 bg-[#0c0c14] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-sm border-2 border-gold/40" aria-hidden />
            <div className="relative overflow-hidden rounded-sm">
              <img src={about} alt="Obra Consteell em execução" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden rounded-sm border border-gold/40 bg-navy px-5 py-4 shadow-gold sm:block">
              <p className="font-display text-3xl font-bold text-gold-shine">+10</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">anos no mercado</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Quem somos</span>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
              A Consteell — <span className="text-gold-shine">construindo com propósito</span>
            </h2>
            <div className="gold-divider mt-6 w-20" />

            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/80 lg:text-lg">
              <p>
                A Consteell nasceu da paixão pela construção de qualidade e do compromisso com a
                durabilidade real. Com mais de 10 anos de experiência no mercado, somos referência
                em Steel Frame e estruturas galvanizadas na região de Tatuí e interior de São Paulo.
              </p>
              <p>
                Atendemos diretamente no local do cliente — do projeto à entrega — com equipe
                própria, materiais de primeira linha e total transparência no processo construtivo.
              </p>
            </div>

            {/* Timeline */}
            <ol className="mt-10 grid gap-6 sm:grid-cols-3">
              {milestones.map((m, i) => (
                <li key={m.year} className="relative pl-6 sm:pl-0 sm:pt-6">
                  <span className="absolute left-0 top-0 h-full w-px bg-gold/40 sm:left-0 sm:top-0 sm:h-px sm:w-full" />
                  <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-gold sm:left-0 sm:top-0 sm:-translate-y-1/2" />
                  <p className="font-display text-2xl font-bold text-gold-shine">{m.year}</p>
                  <p className="mt-1 text-sm font-medium text-white/80">{m.text}</p>
                  {i < milestones.length - 1 && <span className="hidden" />}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
