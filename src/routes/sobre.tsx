import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { Compass, Target, Users } from "lucide-react";

const SITE_URL = "https://consteell.lovable.app";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Consteell | Steel Frame, Calhas e Fachadas — Sorocaba/SP" },
      {
        name: "description",
        content:
          "Conheça a Consteell: soluções técnicas para telhados, calhas, rufos e fachadas com execução sob medida e acabamento profissional na região de Sorocaba/SP e cidades vizinhas.",
      },
      { property: "og:title", content: "Sobre a Consteell" },
      {
        property: "og:description",
        content: "Soluções técnicas para obras que exigem resistência, proteção e acabamento.",
      },
      { property: "og:url", content: `${SITE_URL}/sobre` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/sobre` }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHero
        crumb="Sobre"
        title="Sobre a Consteell"
        subtitle="Soluções técnicas para obras que exigem resistência, proteção e acabamento."
      />

      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-base leading-relaxed text-gray-300 md:text-lg">
            A Consteell nasceu para atender obras que precisam de soluções bem
            executadas em telhados, calhas, rufos e fachadas. Nosso trabalho une
            análise prática, fabricação sob medida e instalação cuidadosa para
            entregar mais segurança, durabilidade e valorização ao imóvel.
          </p>
        </div>
      </section>

      <section className="bg-[#111827] py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: Compass,
              t: "Nossa Atuação",
              d: "Atendimento técnico em telhados, estruturas metálicas, escoamento de águas pluviais e acabamentos de fachada para obras de qualquer porte.",
            },
            {
              icon: Target,
              t: "Nosso Compromisso",
              d: "Execução limpa, prazos claros, acompanhamento direto do início ao fim e materiais que garantem a durabilidade da obra.",
            },
            {
              icon: Users,
              t: "Quem Atendemos",
              d: "Construtoras, engenheiros, arquitetos, condomínios, comércios, indústrias e proprietários de imóveis em Sorocaba e toda a região.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="border border-[#2d3748] bg-[#0a0e1a] p-8 transition-all hover:border-[#c8d0dc]/40 hover:bg-card-hover"
            >
              <Icon className="h-8 w-8 text-[#c8d0dc]" />
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wider text-white">
                {t}
              </h3>
              <div className="mt-3 h-px w-10 bg-[#c8d0dc]/40" />
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Linha do Tempo
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
          </div>

          <div className="relative mt-16">
            <div className="absolute left-1/2 top-12 hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c8d0dc]/40 to-transparent lg:block" />
            <div className="grid gap-10 lg:grid-cols-3">
              {[
                { y: "2014", t: "Fundação da Consteell", d: "Início das atividades com foco em soluções metálicas para construção." },
                { y: "2018", t: "100ª Obra Entregue", d: "Marco que consolidou a estrutura técnica e comercial da empresa." },
                { y: "2024", t: "Expansão Regional", d: "Atendimento em mais de 15 cidades no interior de São Paulo." },
              ].map((m) => (
                <div key={m.y} className="relative text-center">
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center border border-[#c8d0dc]/40 bg-[#111827]">
                    <span className="font-display text-2xl font-bold text-steel-gradient">
                      {m.y}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-white">
                    {m.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaWhatsapp
        title="Quer falar com a equipe Consteell?"
        text="Envie sua necessidade pelo WhatsApp e receba orientação técnica direta."
      />
    </>
  );
}
