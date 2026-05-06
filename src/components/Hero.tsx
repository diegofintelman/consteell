import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [hero1, hero2, hero3, hero4, hero5];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0 -z-20 bg-navy-deep">
        {slides.map((src, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${(i * 24) / slides.length}s`,
              animationDuration: `${slides.length * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#0f0f1a]/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f0f1a]/80 via-[#0f0f1a]/40 to-[#0f0f1a]" />
      <div className="absolute inset-0 -z-10 bg-diagonal-lines" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-gold/10 px-4 py-2 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Steel Frame · Tatuí e Região
            </span>
          </div>

          <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-wide text-white sm:text-5xl lg:text-7xl">
            Construa com a <span className="text-gold-shine">força do aço</span>.
            <br />
            <span className="text-3xl font-light normal-case tracking-normal text-white/85 sm:text-4xl lg:text-5xl">
              Sem cupins. Sem rachaduras. Para sempre.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Steel Frame, estruturas galvanizadas e telhados em aço com precisão técnica
            e acabamento premium. Da estrutura ao telhado — a Consteell entrega completo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-gold transition-all hover:scale-[1.02] hover:bg-[#f0d05f]"
            >
              Solicitar Orçamento Gratuito
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-sm border-2 border-white/80 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-gold hover:text-gold"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-8 right-5 hidden animate-float items-center gap-3 rounded-sm border border-gold/40 bg-[#0f0f1a]/85 px-5 py-3 backdrop-blur md:flex lg:right-8">
          <svg className="h-7 w-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">Garantia</p>
            <p className="text-sm font-bold text-white">Estrutura com Garantia</p>
          </div>
        </div>
      </div>

      {/* Diagonal cut bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </section>
  );
}
