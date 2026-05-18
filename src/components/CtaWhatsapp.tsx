import { useState } from "react";
import { Loader2, MessageCircle } from "lucide-react";

interface CtaWhatsappProps {
  title: string;
  text?: string;
  buttonLabel?: string;
}

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxPvx9ZUyrRMZIf6XcoUUz-puB_WE5Azb5vUQGO3Wh7PJqsp6L3JlFyx-enKRV8iqTT/exec";

// Máscara (DD) XXXXX-XXXX — sem o +55 (prefixo é visual e fixo)
function maskPhoneBR(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

type Status = "idle" | "loading" | "success" | "error";

export function CtaWhatsapp({
  title,
  text,
  buttonLabel = "Enviar e Falar no WhatsApp",
}: CtaWhatsappProps) {
  const [form, setForm] = useState({ nome: "", telefone: "", endereco: "" });
  const [status, setStatus] = useState<Status>("idle");

  const update = (k: keyof typeof form, v: string) =>
    setForm((s) => ({ ...s, [k]: k === "telefone" ? maskPhoneBR(v) : v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    const nome = form.nome.trim().slice(0, 100);
    const telefoneFmt = form.telefone.trim(); // (DD) XXXXX-XXXX
    const endereco = form.endereco.trim().slice(0, 200);
    const digits = telefoneFmt.replace(/\D/g, "");

    if (!nome || digits.length < 10 || !endereco) {
      setStatus("error");
      return;
    }

    const telefoneFinal = `+55 ${telefoneFmt}`; // +55 (DD) XXXXX-XXXX

    setStatus("loading");

    const payload = {
      Nome: nome,
      Telefone: telefoneFinal,
      "Endereço": endereco,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
    } catch (err) {
      console.warn("Falha no envio do lead:", err);
      setStatus("error");
    }

    const msg =
      `Olá, vim do site e gostaria de um orçamento.\n` +
      `Nome: ${nome}\n` +
      `Telefone: ${telefoneFinal}\n` +
      `Endereço do serviço: ${endereco}`;
    setTimeout(() => {
      window.open(
        `https://wa.me/5515998151587?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }, 800);
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
            <div className="flex items-stretch">
              <span
                aria-hidden="true"
                className="inline-flex select-none items-center border border-r-0 border-[#2d3748] bg-[#1a2236] px-3 text-sm font-semibold text-[#c8d0dc]"
              >
                +55
              </span>
              <input
                required
                inputMode="tel"
                maxLength={16}
                value={form.telefone}
                onChange={(e) => update("telefone", e.target.value)}
                className="cta-input"
                placeholder="(15) 99999-9999"
              />
            </div>
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
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0a0e1a] transition-transform hover:scale-[1.02] disabled:opacity-70 md:text-sm"
          >
            {status === "loading" ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <MessageCircle className="h-5 w-5" />
            )}
            {status === "loading" ? "Enviando…" : buttonLabel}
          </button>

          {status === "success" && (
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Enviado! Abrindo o WhatsApp…
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              Verifique os campos e tente novamente.
            </p>
          )}

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
