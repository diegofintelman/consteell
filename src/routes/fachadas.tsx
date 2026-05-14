import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { Palette, Shield, Sparkles, Building2 } from "lucide-react";

const SITE_URL = "https://consteell.lovable.app";

export const Route = createFileRoute("/fachadas")({
  head: () => ({
    meta: [
      { title: "Fachadas com Acabamento Profissional | Consteell — Tatuí/SP" },
      {
        name: "description",
        content:
          "Soluções para valorizar, proteger e modernizar a frente do seu imóvel. Fachadas com acabamento técnico e visual diferenciado.",
      },
      { property: "og:title", content: "Fachadas com Acabamento Profissional" },
      {
        property: "og:description",
        content: "Acabamento, proteção e identidade visual para a frente do seu imóvel.",
      },
      { property: "og:url", content: `${SITE_URL}/fachadas` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/fachadas` }],
  }),
  component: FachadasPage,
});

function FachadasPage() {
  return (
    <>
      <PageHero
        crumb="Fachadas"
        title="Fachadas com Acabamento Profissional"
        subtitle="Soluções para valorizar, proteger e modernizar a frente do seu imóvel."
      />

      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-base leading-relaxed text-gray-300 md:text-lg">
            A fachada é o primeiro contato com o imóvel — define percepção de
            valor, transmite cuidado e protege a estrutura contra a ação do
            tempo. A Consteell entrega soluções de acabamento externo unindo
            estética, durabilidade e execução técnica.
          </p>
        </div>
      </section>

      <section className="bg-[#111827] py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:px-8">
          {[
            {
              icon: Palette,
              t: "Identidade Visual",
              d: "Acabamento que reforça a identidade da construção e do negócio, com soluções pensadas para o estilo do imóvel.",
            },
            {
              icon: Shield,
              t: "Proteção Estrutural",
              d: "Materiais e técnicas que protegem a alvenaria contra umidade, intempéries e desgaste prematuro.",
            },
            {
              icon: Sparkles,
              t: "Valorização do Imóvel",
              d: "Fachada bem executada amplia percepção de valor, ideal para imóveis residenciais e comerciais.",
            },
            {
              icon: Building2,
              t: "Aplicação Versátil",
              d: "Atendemos residências, comércios, prédios e empreendimentos com soluções adequadas a cada tipologia.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="border border-[#2d3748] bg-[#0a0e1a] p-8 transition-all hover:border-[#c8d0dc]/40 hover:bg-card-hover"
            >
              <Icon className="h-10 w-10 text-[#c8d0dc]" />
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wider text-white">
                {t}
              </h3>
              <div className="mt-3 h-px w-10 bg-[#c8d0dc]/40" />
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaWhatsapp
        title="Solicitar Avaliação para Fachada"
        text="Envie fotos da fachada atual e detalhes da obra. A equipe analisa e indica a melhor solução."
        buttonLabel="Falar pelo WhatsApp"
      />
    </>
  );
}
