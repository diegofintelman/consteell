import { useState } from "react";
import { MessageCircle } from "lucide-react";

interface CtaWhatsappProps {
  title: string;
  text?: string;
  buttonLabel?: string;
}

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function CtaWhatsapp({
  title,
  text,
  buttonLabel = "Enviar e Falar no WhatsApp",
}: CtaWhatsappProps) {
  const [form, setForm] = useState({ nome: "", telefone: "", endereco: "" });

  const update = (k: keyof typeof form, v: string) =>
    setForm((s) => ({ ...s, [k]: k === "telefone" ? maskPhone(v) : v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nome = form.nome.trim().slice(0, 100);
    const telefone = form.telefone.trim().slice(0, 20);
    const endereco = form.endereco.trim().slice(0, 200);
    if (!nome || !telefone || !endereco) return;

    const msg =
      `Olá, vim do site e gostaria de um orçamento.\n` +
      `Nome: ${nome}\n` +
      `Telefone: ${telefone}\n` +
      `Endereço do serviço: ${endereco}`;
    window.open(
      `https://wa.me/5515998151587?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

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

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 grid max-w-2xl gap-4 border border-[#2d3748] bg-[#111827]/80 p-6 text-left backdrop-blur-sm md:p-8"
        >
          <Field label="Nome *">
            <input
              required
              maxLength={100}
              value={form.nome}
              onChange={(e) => update("nome", e.target.value)}
              className="cta-input"
              placeholder="Seu nome completo"
            />
          </Field>
          <Field label="Telefone / WhatsApp *">
            <input
              required
              inputMode="tel"
              maxLength={20}
              value={form.telefone}
              onChange={(e) => update("telefone", e.target.value)}
              className="cta-input"
              placeholder="(15) 99999-9999"
            />
          </Field>
          <Field label="Endereço do local do serviço *">
            <input
              required
              maxLength={200}
              value={form.endereco}
              onChange={(e) => update("endereco", e.target.value)}
              className="cta-input"
              placeholder="Rua, número, bairro, cidade"
            />
          </Field>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0a0e1a] transition-transform hover:scale-[1.02] md:text-sm"
          >
            <MessageCircle className="h-5 w-5" />
            {buttonLabel}
          </button>

          <style>{`
            .cta-input {
              width: 100%;
              background: #0a0e1a;
              border: 1px solid #2d3748;
              color: #f0f4f8;
              padding: 0.75rem 1rem;
              font-size: 0.875rem;
              transition: border-color .2s;
            }
            .cta-input::placeholder { color: #5a6573; }
            .cta-input:focus { outline: none; border-color: #c8d0dc; }
          `}</style>
        </form>

        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#8c98a8]">
          Resposta direta com orientação inicial para o seu projeto
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8d0dc]">
        {label}
      </span>
      {children}
    </label>
  );
}
