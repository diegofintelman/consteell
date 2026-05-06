const stats = [
  { value: "+10", label: "anos de experiência" },
  { value: "+200", label: "obras entregues" },
  { value: "15+", label: "cidades atendidas" },
  { value: "100%", label: "estrutura galvanizada" },
];

export function SocialProof() {
  return (
    <section className="relative bg-gold py-6 lg:py-7">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_30px,rgba(15,15,26,0.04)_30px,rgba(15,15,26,0.04)_31px)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 text-gold-foreground lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center text-center lg:flex-row lg:gap-4 lg:text-left ${
              i > 0 ? "lg:border-l lg:border-[#0f0f1a]/25 lg:pl-8" : ""
            }`}
          >
            <span className="font-display text-3xl font-bold leading-none lg:text-4xl">{s.value}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wider lg:mt-0 lg:text-sm">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
