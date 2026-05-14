import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { Waves, Shield, ArrowDown, GitBranch, Check } from "lucide-react";

const SITE_URL = "https://consteell.lovable.app";

export const Route = createFileRoute("/calhas-rufos")({
  head: () => ({
    meta: [
      { title: "Calhas e Rufos sob Medida | Consteell — Interior de SP" },
      {
        name: "description",
        content:
          "Proteção contra infiltrações com calhas, rufos, pingadeiras e condutores. Fabricação e instalação sob medida para qualquer tipo de cobertura.",
      },
      { property: "og:title", content: "Calhas e Rufos sob Medida | Consteell" },
      {
        property: "og:description",
        content: "Calhas, rufos, pingadeiras e condutores sob medida.",
      },
      { property: "og:url", content: `${SITE_URL}/calhas-rufos` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/calhas-rufos` }],
  }),
  component: CalhasRufosPage,
});

const products = [
  {
    icon: Waves,
    t: "Calhas",
    d: "Captação e condução da água da chuva para evitar acúmulo, infiltração e danos à estrutura. Fabricamos em diferentes formatos conforme o telhado.",
  },
  {
    icon: Shield,
    t: "Rufos",
    d: "Vedação metálica entre o telhado e a parede, platibanda ou outras estruturas. Bloqueia a entrada de água em pontos críticos.",
  },
  {
    icon: ArrowDown,
    t: "Pingadeiras",
    d: "Proteção para muros, platibandas e vergas. Direciona o escoamento da água e evita manchas e infiltrações em fachadas.",
  },
  {
    icon: GitBranch,
    t: "Condutores",
    d: "Tubulações metálicas que recebem a água das calhas e direcionam até o ponto de descarte com segurança.",
  },
];

function CalhasRufosPage() {
  return (
    <>
      <PageHero
        crumb="Calhas e Rufos"
        title="Calhas e Rufos sob Medida"
        subtitle="Proteção contra infiltrações, escoamento correto e acabamento limpo."
      />

      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-base leading-relaxed text-gray-300 md:text-lg">
            Quando a captação e o escoamento são mal resolvidos, a obra paga com
            manchas, infiltrações, trincas, umidade e manutenção recorrente. A
            Consteell fabrica e instala calhas, rufos, pingadeiras e
            acabamentos metálicos sob medida para cada tipo de cobertura.
          </p>
        </div>
      </section>

      <section className="bg-[#111827] py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:px-8">
          {products.map(({ icon: Icon, t, d }) => (
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

      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Por que escolher a Consteell para Calhas e Rufos
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 text-sm text-gray-300">
            {[
              "Fabricação sob medida — sem improviso",
              "Materiais resistentes à corrosão",
              "Dimensionamento técnico do escoamento",
              "Instalação alinhada e com acabamento limpo",
              "Atendimento direto e orçamento claro",
            ].map((i) => (
              <li
                key={i}
                className="flex items-start gap-3 border border-[#2d3748] bg-[#111827] px-5 py-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c8d0dc]" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaWhatsapp
        title="Pedir Orçamento de Calhas e Rufos"
        text="Envie medidas, fotos do telhado e localização da obra. Respondemos com orientação técnica direta."
        buttonLabel="Falar pelo WhatsApp"
      />
    </>
  );
}
