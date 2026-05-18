import { MessageCircle } from "lucide-react";

interface CtaWhatsappProps {
  title: string;
  text?: string;
  buttonLabel?: string;
}

export function CtaWhatsapp({
  title,
  text,
  buttonLabel = "Solicitar Orçamento pelo WhatsApp",
}: CtaWhatsappProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2236] via-[#0a0e1a] to-[#0a0e1a]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#c8d0dc" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <div className="divider-steel mx-auto w-24" />
        <h2 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {text && (
          <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
            {text}
          </p>
        )}
        <a
          href="https://wa.me/5515998151587?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#0a0e1a] transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          {buttonLabel}
        </a>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#8c98a8]">
          Resposta direta com orientação inicial para o seu projeto
        </p>
      </div>
    </section>
  );
}
