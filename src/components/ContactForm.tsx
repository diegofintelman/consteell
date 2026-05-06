import { useState, type FormEvent } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz-jb_vdFx-cRoPNfwIfnQB83G3OLa8sj9asvwd6yv_gR1fJZgH5ZbSiGHsdXAjOZqA/exec";
const WHATSAPP = "5515998151587";

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function ContactForm() {
  const [form, setForm] = useState({ nome: "", telefone: "", cidade: "", mensagem: "" });
  const [loading, setLoading] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: k === "telefone" ? maskPhone(v) : v }));

  const goWhatsapp = () => {
    const msg = `Olá Jonatas! Vim pelo site da Consteell.
Nome: ${form.nome}
Telefone: ${form.telefone}
Cidade: ${form.cidade}
Solicitação: ${form.mensagem}`;
    window.location.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.telefone || !form.cidade || !form.mensagem) return;
    setLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(form),
      });
    } catch {
      /* never block the lead */
    } finally {
      goWhatsapp();
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative scroll-mt-24 overflow-hidden bg-navy-deep py-20 lg:py-28">
      <div className="absolute inset-0 bg-trellis opacity-50" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Orçamento</span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            Solicite seu <span className="text-gold-shine">orçamento gratuito</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
          <p className="mt-5 text-base text-white/75 lg:text-lg">
            Preencha o formulário — entraremos em contato pelo WhatsApp em até 1 hora útil.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 rounded-sm border border-gold/30 bg-navy/80 p-6 backdrop-blur sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome completo" required>
              <input
                required
                value={form.nome}
                onChange={(e) => update("nome", e.target.value)}
                className="input"
                placeholder="Seu nome"
              />
            </Field>
            <Field label="Telefone / WhatsApp" required>
              <input
                required
                inputMode="tel"
                value={form.telefone}
                onChange={(e) => update("telefone", e.target.value)}
                className="input"
                placeholder="(15) 99999-9999"
              />
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Cidade" required>
              <input
                required
                value={form.cidade}
                onChange={(e) => update("cidade", e.target.value)}
                className="input"
                placeholder="Ex: Tatuí"
              />
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Descrição da solicitação" required>
              <textarea
                required
                rows={5}
                value={form.mensagem}
                onChange={(e) => update("mensagem", e.target.value)}
                className="input resize-none"
                placeholder="Ex: Preciso de cobertura em aço para galpão de 200m² em Tatuí. Gostaria de saber prazo e valor."
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-gold transition-all hover:scale-[1.01] hover:bg-[#f0d05f] disabled:opacity-70"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-gold-foreground/30 border-t-gold-foreground" />
                Enviando...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Enviar e Falar com a Consteell no WhatsApp
              </>
            )}
          </button>

          <p className="mt-4 text-center text-xs text-white/55">
            Resposta rápida garantida. Seus dados são confidenciais.
          </p>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: rgba(15, 15, 26, 0.7);
          border: 1px solid rgba(232, 197, 71, 0.2);
          color: #fff;
          padding: 0.875rem 1rem;
          border-radius: 2px;
          font-size: 0.95rem;
          transition: all .2s;
          outline: none;
        }
        .input::placeholder { color: rgba(255,255,255,0.4); }
        .input:focus { border-color: #e8c547; box-shadow: 0 0 0 3px rgba(232, 197, 71, 0.15); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gold">
        {label} {required && <span className="text-red-400">*</span>}
      </span>
      {children}
    </label>
  );
}
