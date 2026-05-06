const pains = [
  "Estruturas que racham com o tempo",
  "Madeira que apodrece e atrai cupins",
  "Obras que atrasam e encarecem",
  "Telhados que vazam na primeira chuva",
];

const solutions = [
  "Aço galvanizado: resistência para décadas",
  "Zero cupins, zero mofo, zero manutenção cara",
  "Montagem ágil com cronograma cumprido",
  "Telhado em aço com vedação total garantida",
];

export function PainSolution() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-28">
      <div className="absolute inset-0 bg-trellis opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Por que mudar</span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            Sua construção merece mais do que <span className="text-gold-shine">promessas</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-2 lg:gap-0">
          {/* Pain */}
          <div className="rounded-sm border border-red-500/20 bg-[#1a0f15] p-8 lg:rounded-r-none lg:border-r-0 lg:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-red-500/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">A dor da construção tradicional</span>
            </div>
            <ul className="space-y-4">
              {pains.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-red-500/15 text-red-400">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="text-base text-white/80 lg:text-lg">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagonal divider */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold to-transparent lg:block" />

          {/* Solution */}
          <div className="relative rounded-sm border border-gold/30 bg-navy p-8 lg:rounded-l-none lg:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-gold/15 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-gold">A solução Consteell</span>
            </div>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gold/20 text-gold">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-white lg:text-lg">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
