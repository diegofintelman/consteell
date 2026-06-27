import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import {
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  Loader2,
} from "lucide-react";

const SITE_URL = "https://consteell.lovable.app";
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz-jb_vdFx-cRoPNfwIfnQB83G3OLa8sj9asvwd6yv_gR1fJZgH5ZbSiGHsdXAjOZqA/exec";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Consteell — Steel Frame, Calhas e Fachadas" },
      {
        name: "description",
        content:
          "Fale com a Consteell. Atendimento direto pelo WhatsApp para orçamento de telhado em steel frame, calhas, rufos e fachadas em Sorocaba e região.",
      },
      { property: "og:title", content: "Fale com a Consteell" },
      {
        property: "og:description",
        content: "Atendimento direto pelo WhatsApp para orçamento técnico.",
      },
      { property: "og:url", content: `${SITE_URL}/contato` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contato` }],
  }),
  component: ContatoPage,
});

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    servico: "Steel Frame",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((s) => ({ ...s, [k]: k === "telefone" ? maskPhone(v) : v }));

  const goWhatsapp = () => {
    const text = encodeURIComponent(
      `Olá Jonatas! Vim pelo site da Consteell.
Nome: ${form.nome}
Telefone: ${form.telefone}
Cidade: ${form.cidade}
Serviço: ${form.servico}
Solicitação: ${form.mensagem}`,
    );
    window.location.href = `https://wa.me/5515997738668?text=${text}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.warn("Falha API, redirecionando ao WhatsApp:", err);
    }
    setTimeout(goWhatsapp, 1500);
  };

  return (
    <>
      <PageHero
        crumb="Contato"
        title="Fale com a Consteell"
        subtitle="Envie sua necessidade para nossa equipe. Quanto mais detalhes você informar, mais precisa será a orientação inicial."
      />

      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-3 lg:px-8">
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="border border-[#2d3748] bg-[#111827] p-8 lg:col-span-2"
          >
            <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
              Solicitar Orçamento
            </h2>
            <div className="divider-steel mt-3 w-16" />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Nome completo *">
                <input
                  required
                  value={form.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="WhatsApp / Telefone *">
                <input
                  required
                  inputMode="tel"
                  placeholder="(15) 99999-9999"
                  value={form.telefone}
                  onChange={(e) => update("telefone", e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="Cidade *">
                <input
                  required
                  value={form.cidade}
                  onChange={(e) => update("cidade", e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="Tipo de serviço *">
                <select
                  required
                  value={form.servico}
                  onChange={(e) => update("servico", e.target.value)}
                  className="form-input"
                >
                  <option>Steel Frame</option>
                  <option>Calhas</option>
                  <option>Rufos</option>
                  <option>Fachadas</option>
                  <option>Outro</option>
                </select>
              </Field>
            </div>

            <Field className="mt-5" label="Descrição da solicitação *">
              <textarea
                required
                rows={5}
                placeholder="Descreva sua necessidade: tipo de obra, medidas aproximadas, localização e qualquer detalhe relevante para orçamento."
                value={form.mensagem}
                onChange={(e) => update("mensagem", e.target.value)}
                className="form-input resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={loading}
              className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0a0e1a] transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <MessageCircle className="h-5 w-5" />
              )}
              {loading ? "Enviando…" : "Enviar e Falar no WhatsApp"}
            </button>
            <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-[#8c98a8]">
              Resposta direta pelo WhatsApp
            </p>

            <style>{`
              .form-input {
                width: 100%;
                background: #0a0e1a;
                border: 1px solid #2d3748;
                color: #f0f4f8;
                padding: 0.75rem 1rem;
                font-size: 0.875rem;
                transition: border-color .2s;
              }
              .form-input:focus {
                outline: none;
                border-color: #c8d0dc;
              }
            `}</style>
          </form>

          {/* INFO */}
          <aside className="space-y-4">
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="(15) 99773-8668"
              href="https://wa.me/5515997738668?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
            />
            <ContactCard
              icon={Phone}
              label="Telefone"
              value="(15) 99773-8668"
              href="tel:+5515997738668"
            />
            <ContactCard
              icon={Instagram}
              label="Instagram"
              value="@consteell__"
              href="https://www.instagram.com/consteell__/"
            />
            <ContactCard
              icon={MapPin}
              label="Região atendida"
              value="Sorocaba e região"
            />
            <ContactCard
              icon={Clock}
              label="Atendimento"
              value="Seg a Sex 8h–18h · Sáb 8h–12h"
            />
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#c8d0dc]">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 border border-[#2d3748] bg-[#111827] p-5 transition-all hover:border-[#c8d0dc]/40 hover:bg-card-hover">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-[#c8d0dc]" />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c98a8]">
          {label}
        </p>
        <p className="mt-1 text-sm text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
