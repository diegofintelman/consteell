import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { Check, Home, Building, Factory, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import residencial1 from "@/assets/steel-frame/residencial-1.jpg";
import residencial2 from "@/assets/steel-frame/residencial-2.jpg";
import residencial3 from "@/assets/steel-frame/residencial-3.jpg";
import residencial4 from "@/assets/steel-frame/residencial-4.jpg";
import residencial5 from "@/assets/steel-frame/residencial-5.jpg";
import comercial1 from "@/assets/steel-frame/comercial-1.jpg";
import comercial2 from "@/assets/steel-frame/comercial-2.jpg";
import comercial3 from "@/assets/steel-frame/comercial-3.jpg";
import industrial1 from "@/assets/steel-frame/industrial-1.jpg";
import industrial2 from "@/assets/steel-frame/industrial-2.jpg";

const aplicacoes = [
  {
    icon: Home,
    t: "Residencial",
    d: "Cobertura para casas, sobrados e ampliações.",
    imgs: [residencial1, residencial2, residencial3, residencial4, residencial5],
  },
  {
    icon: Building,
    t: "Comercial",
    d: "Lojas, escritórios, salões e empreendimentos.",
    imgs: [comercial1, comercial2, comercial3],
  },
  {
    icon: Factory,
    t: "Industrial",
    d: "Galpões, depósitos e parques industriais.",
    imgs: [industrial1, industrial2],
  },
];


const SITE_URL = "https://consteell.lovable.app";

export const Route = createFileRoute("/steel-frame")({
  head: () => ({
    meta: [
      { title: "Telhado em Steel Frame sob Medida | Consteell — Sorocaba/SP" },
      {
        name: "description",
        content:
          "Estrutura metálica galvanizada para coberturas residenciais, comerciais e industriais. Leve, resistente e durável. Solicite orçamento.",
      },
      { property: "og:title", content: "Telhado em Steel Frame | Consteell" },
      {
        property: "og:description",
        content: "Estrutura metálica galvanizada para coberturas. Leve, resistente, durável.",
      },
      { property: "og:url", content: `${SITE_URL}/steel-frame` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/steel-frame` }],
  }),
  component: SteelFramePage,
});

const faq = [
  {
    q: "O que é um telhado em Steel Frame?",
    a: "É uma cobertura cuja estrutura é formada por perfis de aço galvanizado dimensionados sob medida. Substitui o madeiramento tradicional com mais leveza, precisão e durabilidade.",
  },
  {
    q: "Quais as vantagens em relação ao madeiramento?",
    a: "Não apodrece, não atrai cupins, tem maior padronização dimensional, menor desperdício de obra e vida útil consideravelmente maior.",
  },
  {
    q: "Serve para qualquer tipo de obra?",
    a: "Sim — é aplicado em residências, comércios, galpões e empreendimentos comerciais e industriais. Cada projeto é dimensionado conforme vão e carga.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você envia medidas, fotos e localização da obra. A equipe analisa, orienta e apresenta proposta com escopo, materiais e prazo estimado.",
  },
];

function SteelFramePage() {
  return (
    <>
      <PageHero
        crumb="Steel Frame"
        title="Telhado em Steel Frame"
        subtitle="Estrutura metálica sob medida para cobertura mais leve, resistente e durável."
      />

      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#8c98a8]">
              O que é
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Estrutura de Aço Galvanizado para Coberturas
            </h2>
            <div className="divider-steel mt-6 w-24" />
            <p className="mt-6 text-base leading-relaxed text-gray-300">
              O telhado em steel frame utiliza perfis de aço galvanizado para
              formar uma estrutura precisa, estável e durável. É a alternativa
              moderna ao madeiramento tradicional — indicada para quem busca
              montagem mais limpa, melhor padronização e maior previsibilidade
              na execução.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-300">
              {[
                "Perfis galvanizados resistentes à corrosão",
                "Dimensionamento sob medida para cada obra",
                "Montagem mais rápida e limpa",
                "Maior previsibilidade de prazo e custo",
                "Vida útil prolongada com baixa manutenção",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c8d0dc]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[#2d3748] bg-[#111827] p-8">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
              Steel Frame x Madeiramento
            </h3>
            <div className="mt-6 space-y-4 text-sm">
              {[
                ["Vida útil", "Décadas com manutenção mínima", "Suscetível a apodrecimento"],
                ["Cupins", "Imune", "Alvo natural"],
                ["Padronização", "Perfil milimétrico", "Variação de peças"],
                ["Desperdício", "Mínimo, sob medida", "Sobra significativa"],
                ["Peso", "Leve", "Pesado e instável"],
              ].map(([k, sf, md]) => (
                <div
                  key={k}
                  className="grid grid-cols-3 gap-3 border-b border-[#2d3748] py-3 last:border-0"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8c98a8]">
                    {k}
                  </div>
                  <div className="text-xs text-[#c8d0dc]">{sf}</div>
                  <div className="text-xs text-gray-500">{md}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111827] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Aplicações
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Home, t: "Residencial", d: "Cobertura para casas, sobrados e ampliações." },
              { icon: Building, t: "Comercial", d: "Lojas, escritórios, salões e empreendimentos." },
              { icon: Factory, t: "Industrial", d: "Galpões, depósitos e parques industriais." },
            ].map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="border border-[#2d3748] bg-[#0a0e1a] p-8 text-center transition-all hover:border-[#c8d0dc]/40 hover:bg-card-hover"
              >
                <Icon className="mx-auto h-10 w-10 text-[#c8d0dc]" />
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wider text-white">
                  {t}
                </h3>
                <p className="mt-3 text-sm text-gray-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Perguntas Frequentes
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
          </div>
          <div className="mt-12 space-y-3">
            {faq.map((f, i) => (
              <FaqItem key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      <CtaWhatsapp
        title="Pronto para Orçar seu Telhado em Steel Frame?"
        text="Envie medidas, fotos ou plantas. A equipe Consteell analisa e responde com orientação técnica direta."
        buttonLabel="Quero Orçamento de Steel Frame"
      />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2d3748] bg-[#111827]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#c8d0dc] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-[#2d3748] px-6 py-5 text-sm leading-relaxed text-gray-400">
          {a}
        </div>
      )}
    </div>
  );
}
