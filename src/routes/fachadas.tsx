import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { Palette, Shield, Sparkles, Building2 } from "lucide-react";
import foto1 from "@/assets/fachadas/foto-1.jpg";
import foto2 from "@/assets/fachadas/foto-2.jpg";
import foto3 from "@/assets/fachadas/foto-3.jpg";
import foto4 from "@/assets/fachadas/foto-4.jpg";
import foto5 from "@/assets/fachadas/foto-5.jpg";

const galleryImages = [foto1, foto2, foto3, foto4, foto5];

const SITE_URL = "https://consteell.lovable.app";

export const Route = createFileRoute("/fachadas")({
  head: () => ({
    meta: [
      { title: "Fachadas com Acabamento Profissional | Consteell — Sorocaba/SP" },
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
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
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
              className="border border-[#2d3748] bg-[#0a0e1a] p-7 transition-all hover:border-[#c8d0dc]/40 hover:bg-card-hover"
            >
              <Icon className="h-9 w-9 text-[#c8d0dc]" />
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wider text-white">
                {t}
              </h3>
              <div className="mt-3 h-px w-10 bg-[#c8d0dc]/40" />
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="mx-auto mb-10 max-w-7xl px-5 lg:px-8">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-steel-gradient md:text-3xl">
              Obras Realizadas
            </h2>
            <div className="divider-steel mt-4 w-20" />
          </div>
          <div
            className="group relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
              {[...galleryImages, ...galleryImages].map((src, i) => (
                <div
                  key={i}
                  className="relative h-64 w-80 shrink-0 overflow-hidden border border-[#2d3748] bg-[#0a0e1a] md:h-72 md:w-96"
                >
                  <img
                    src={src}
                    alt={`Fachada Consteell ${(i % galleryImages.length) + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
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
