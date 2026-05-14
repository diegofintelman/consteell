import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const SITE_URL = "https://consteell.lovable.app";

export const Route = createFileRoute("/obras")({
  head: () => ({
    meta: [
      { title: "Obras Executadas | Consteell — Steel Frame, Calhas e Fachadas" },
      {
        name: "description",
        content:
          "Conheça obras realizadas pela Consteell em Steel Frame, calhas, rufos e fachadas no interior de São Paulo.",
      },
      { property: "og:title", content: "Obras Executadas pela Consteell" },
      {
        property: "og:description",
        content: "Galeria de obras em steel frame, calhas, rufos e fachadas.",
      },
      { property: "og:url", content: `${SITE_URL}/obras` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/obras` }],
  }),
  component: ObrasPage,
});

const filters = ["Todos", "Steel Frame", "Calhas e Rufos", "Fachadas"] as const;
type Filter = (typeof filters)[number];

const obras = [
  { img: hero1, tag: "Steel Frame", c: "Tatuí/SP", desafio: "Cobertura residencial com vão amplo.", solucao: "Estrutura sob medida em perfis galvanizados." },
  { img: hero2, tag: "Calhas e Rufos", c: "Sorocaba/SP", desafio: "Galpão com escoamento ineficiente.", solucao: "Calha de cocho dimensionada e condutores reforçados." },
  { img: hero3, tag: "Steel Frame", c: "Itapetininga/SP", desafio: "Ampliação comercial com prazo curto.", solucao: "Steel frame pré-dimensionado e montagem rápida." },
  { img: hero4, tag: "Calhas e Rufos", c: "Cerquilho/SP", desafio: "Infiltração entre telhado e platibanda.", solucao: "Rufos sob medida e pingadeiras de proteção." },
  { img: hero5, tag: "Fachadas", c: "Boituva/SP", desafio: "Frente comercial sem identidade.", solucao: "Acabamento externo com painéis metálicos." },
  { img: hero1, tag: "Steel Frame", c: "Tietê/SP", desafio: "Cobertura para empreendimento comercial.", solucao: "Perfis galvanizados com instalação técnica." },
  { img: hero2, tag: "Calhas e Rufos", c: "Capão Bonito/SP", desafio: "Captação inadequada em telhado existente.", solucao: "Substituição completa por calhas sob medida." },
  { img: hero3, tag: "Fachadas", c: "Avaré/SP", desafio: "Fachada deteriorada por intempéries.", solucao: "Revestimento metálico com proteção estrutural." },
  { img: hero4, tag: "Steel Frame", c: "Itararé/SP", desafio: "Galpão industrial leve e resistente.", solucao: "Estrutura modular em aço galvanizado." },
];

function ObrasPage() {
  const [active, setActive] = useState<Filter>("Todos");
  const list = active === "Todos" ? obras : obras.filter((o) => o.tag === active);

  return (
    <>
      <PageHero
        crumb="Obras"
        title="Obras Executadas"
        subtitle="Conheça projetos realizados pela Consteell. Cada solução pensada conforme a necessidade real da obra."
      />

      <section className="bg-[#0a0e1a] py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                  active === f
                    ? "border-[#c8d0dc] bg-[#c8d0dc] text-[#0a0e1a]"
                    : "border-[#2d3748] text-[#c8d0dc] hover:border-[#c8d0dc]/60"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1a] pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((o, i) => (
              <article
                key={i}
                className="group relative overflow-hidden border border-[#2d3748] bg-[#111827] transition-all hover:border-[#c8d0dc]/40"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={o.img}
                    alt={`${o.tag} — ${o.c}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="border border-[#c8d0dc]/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#c8d0dc]">
                      {o.tag}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#8c98a8]">
                      {o.c}
                    </span>
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-wider text-[#8c98a8]">
                    Desafio
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{o.desafio}</p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-[#8c98a8]">
                    Solução
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{o.solucao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaWhatsapp
        title="Sua Obra Pode Ser a Próxima"
        text="Envie detalhes da sua necessidade. A equipe Consteell analisa e indica a melhor solução."
      />
    </>
  );
}
