import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  ChevronDown,
  MessageCircle,
  Wrench,
  Settings,
  Phone,
  MapPin,
  Home as HomeIcon,
  Droplets,
  Building2,
  AlertTriangle,
  Check,
  X as XIcon,
  Waves,
  Shield,
  ArrowDown,
  GitBranch,
  MessageSquare,
  Search,
  FileText,
  CheckCircle,
  Ruler,
  Eye,
  Layers,
  Clock,
  ArrowRight,
} from "lucide-react";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const SITE_URL = "https://consteell.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Consteell | Telhado em Steel Frame, Calhas, Rufos e Fachadas — Sorocaba/SP",
      },
      {
        name: "description",
        content:
          "Soluções sob medida em telhado em steel frame, calhas, rufos e fachadas. Execução técnica, acabamento profissional e orçamento pelo WhatsApp. Atendemos Sorocaba e região.",
      },
      {
        property: "og:title",
        content:
          "Consteell | Telhado em Steel Frame, Calhas, Rufos e Fachadas",
      },
      {
        property: "og:description",
        content:
          "Soluções sob medida em telhado em steel frame, calhas, rufos e fachadas. Execução técnica e acabamento profissional.",
      },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: HomePage,
});

const slides = [hero1, hero2, hero3, hero4, hero5];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden py-32 lg:py-28"
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * 5}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-diagonal-lines opacity-60" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c8d0dc]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#8c98a8] md:text-xs">
                Estrutura Metálica Certificada
              </span>
              <span className="h-px w-10 bg-[#c8d0dc]" />
            </div>

            <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-[1.05] tracking-wide text-steel-gradient sm:text-4xl md:text-5xl">
              Telhados, Calhas, Rufos e Fachadas com Execução Técnica e Acabamento Profissional
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
              A Consteell desenvolve soluções sob medida para proteger, valorizar
              e dar mais durabilidade à sua obra — com foco em estrutura metálica,
              escoamento eficiente e acabamento externo de alto padrão.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#8c98a8]">
              <ShieldCheck className="h-4 w-4 text-[#c8d0dc]" />
              <span>
                Atendimento para obras residenciais, comerciais, industriais e construtoras.
              </span>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5515998151587?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0a0e1a] transition-all hover:bg-[#c8d0dc]"
              >
                <MessageCircle className="h-4 w-4" />
                Orçamento pelo WhatsApp
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-3 border border-[#c8d0dc] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c8d0dc] transition-all hover:bg-[#c8d0dc]/10"
              >
                Conhecer Nossos Serviços
              </a>
            </div>
          </div>
        </div>

        <a
          href="#autoridade"
          aria-label="Rolar para baixo"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#c8d0dc] animate-bounce-slow"
        >
          <ChevronDown className="h-7 w-7" />
        </a>
      </section>

      {/* AUTORIDADE */}
      <section id="autoridade" className="relative bg-authority py-12 clip-diagonal-bottom">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#2d3748] px-0 lg:grid-cols-4">
          {[
            { icon: Wrench, t: "Obras sob Medida", s: "Projetos adaptados à necessidade de cada cliente" },
            { icon: Settings, t: "Execução Técnica", s: "Instalação com planejamento e precisão técnica" },
            { icon: Phone, t: "Atendimento Direto", s: "Orçamento claro do início ao fim" },
            { icon: MapPin, t: "Sorocaba e Região", s: "Atendimento em toda a região metropolitana" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="bg-authority px-6 py-8 text-center">
              <Icon className="mx-auto h-7 w-7 text-[#c8d0dc]" />
              <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wider text-white">
                {t}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="relative bg-[#0a0e1a] py-24">
        <div className="absolute inset-0 bg-trellis opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#8c98a8]">
              Soluções Consteell
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl lg:text-5xl">
              Soluções Completas para Cobertura, Escoamento e Acabamento
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
            <p className="mt-6 text-base leading-relaxed text-gray-300">
              Da estrutura do telhado à proteção contra infiltrações — a Consteell
              entrega serviços essenciais para obras que exigem resistência,
              funcionalidade e visual bem acabado.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: HomeIcon,
                t: "Telhado em Steel Frame",
                d: "Estruturas metálicas leves, resistentes e feitas sob medida para coberturas mais duráveis, limpas e eficientes.",
                cta: "Conhecer solução",
                to: "/steel-frame" as const,
              },
              {
                icon: Droplets,
                t: "Calhas e Rufos",
                d: "Peças desenvolvidas para captar, conduzir e bloquear a água da chuva, reduzindo riscos de infiltrações, manchas, trincas e danos na obra.",
                cta: "Solicitar orçamento",
                to: "/calhas-rufos" as const,
              },
              {
                icon: Building2,
                t: "Fachadas",
                d: "Soluções para acabamento e valorização externa, pensadas para unir estética, proteção e identidade visual da construção.",
                cta: "Ver possibilidades",
                to: "/fachadas" as const,
              },
            ].map(({ icon: Icon, t, d, cta, to }) => (
              <Link
                key={t}
                to={to}
                className="group relative border border-[#2d3748] bg-[#111827] p-8 transition-all duration-300 hover:border-[#c8d0dc]/40 hover:bg-card-hover"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8d0dc] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Icon className="h-10 w-10 text-[#c8d0dc]" />
                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wider text-white">
                  {t}
                </h3>
                <div className="mt-3 h-px w-10 bg-[#c8d0dc]/40 transition-all group-hover:w-20" />
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{d}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c8d0dc]">
                  {cta} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DOR E SOLUÇÃO */}
      <section className="relative bg-[#111827] py-24 clip-diagonal-bottom">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Uma Obra Bem Protegida Começa nos Detalhes que Quase Ninguém Vê
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
            <p className="mt-6 text-base leading-relaxed text-gray-300">
              Telhado mal dimensionado, calha inadequada, rufo mal instalado e
              fachada sem acabamento técnico não são apenas problemas visuais.
              São pontos de risco para infiltrações, retrabalho, desperdício e
              perda de valor da construção. A Consteell atua nesses detalhes:
              estrutura, vedação, escoamento e acabamento.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="border-l-2 border-red-900/50 bg-[#0a0e1a] p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-red-400/80" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Sem execução técnica
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-400">
                {[
                  "Infiltrações por escoamento incorreto",
                  "Madeiramento apodrecendo e atraindo cupins",
                  "Rachaduras por movimentação estrutural",
                  "Fachada deteriorando sem proteção adequada",
                  "Retrabalho recorrente e custo crescente",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-2 border-[#c8d0dc]/40 bg-[#0a0e1a] p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#c8d0dc]" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Com a Consteell
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {[
                  "Aço galvanizado certificado: décadas de resistência",
                  "Zero cupins, zero apodrecimento, zero improvisação",
                  "Escoamento correto calculado para cada obra",
                  "Fachada com acabamento que protege e valoriza",
                  "Solução sob medida com execução limpa e precisa",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c8d0dc]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STEEL FRAME DESTAQUE */}
      <section className="relative overflow-hidden bg-[#0a0e1a] py-24">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${hero3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/95 to-[#0a0e1a]/60" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#8c98a8]">
              Solução Principal
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl lg:text-5xl">
              Telhado em Steel Frame: Mais Leve, Mais Resistente, Mais Eficiente
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
                "Estrutura leve e resistente com perfis galvanizados",
                "Perfis feitos sob medida para cada projeto",
                "Menor desperdício e mais previsibilidade",
                "Aplicável em residências, comércios, galpões e empreendimentos",
                "Execução focada em segurança, alinhamento e durabilidade",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c8d0dc]" />
                  {i}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5515998151587"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-[#c8d0dc] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c8d0dc] transition-all hover:bg-[#c8d0dc] hover:text-[#0a0e1a]"
            >
              <MessageCircle className="h-4 w-4" />
              Quero Orçamento para Steel Frame
            </a>
          </div>
          <div className="relative hidden lg:block">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${hero1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 border border-[#c8d0dc]/30" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b border-r border-[#c8d0dc]" />
            <div className="absolute -top-3 -left-3 h-24 w-24 border-l border-t border-[#c8d0dc]" />
          </div>
        </div>
      </section>

      {/* CALHAS RUFOS */}
      <section className="relative bg-[#0a0e1a] py-24 bg-diagonal-lines">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Proteção Contra Infiltrações Começa com Calhas e Rufos Bem Executados
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
            <p className="mt-6 text-base leading-relaxed text-gray-300">
              Quando a captação e o escoamento são mal resolvidos, a obra paga
              com manchas, infiltrações, trincas, umidade e manutenção
              recorrente. A Consteell fabrica e instala calhas, rufos,
              pingadeiras e acabamentos metálicos sob medida para cada tipo de
              cobertura.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Waves, t: "Calhas", d: "Captação e condução da água da chuva" },
              { icon: Shield, t: "Rufos", d: "Proteção entre telhado e parede" },
              { icon: ArrowDown, t: "Pingadeiras", d: "Proteção de muros e platibandas" },
              { icon: GitBranch, t: "Condutores", d: "Direcionamento seguro até o descarte" },
            ].map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="border border-[#2d3748] bg-[#111827] p-6 transition-all hover:border-[#c8d0dc]/40 hover:bg-card-hover"
              >
                <Icon className="h-8 w-8 text-[#c8d0dc]" />
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wider text-white">
                  {t}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/calhas-rufos"
              className="inline-flex items-center gap-3 border border-[#c8d0dc] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c8d0dc] transition-all hover:bg-[#c8d0dc] hover:text-[#0a0e1a]"
            >
              Falar com a Equipe sobre Calhas e Rufos
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="relative bg-[#111827] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#8c98a8]">
              Processo
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Como Funciona o Atendimento
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
          </div>

          <div className="relative mt-16">
            <div className="absolute left-1/2 top-12 hidden h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c8d0dc]/40 to-transparent lg:block" />
            <div className="grid gap-10 lg:grid-cols-5">
              {[
                { n: "1", icon: MessageSquare, t: "Entendimento da Necessidade", d: "A equipe coleta informações: medidas, fotos, local e objetivo do serviço." },
                { n: "2", icon: Search, t: "Avaliação Técnica", d: "Analisamos a melhor solução para cobertura, escoamento ou fachada." },
                { n: "3", icon: FileText, t: "Orçamento sob Medida", d: "O cliente recebe proposta alinhada ao escopo, materiais e prazo estimado." },
                { n: "4", icon: Wrench, t: "Fabricação e Instalação", d: "Peças produzidas conforme a necessidade e instaladas com atenção ao acabamento." },
                { n: "5", icon: CheckCircle, t: "Entrega e Orientação", d: "Orientações de uso, cuidados e manutenção ao final de cada serviço." },
              ].map(({ n, icon: Icon, t, d }) => (
                <div key={n} className="relative text-center">
                  <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 font-display text-7xl font-bold text-steel-gradient opacity-15">
                    {n}
                  </span>
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center border border-[#c8d0dc]/40 bg-[#0a0e1a]">
                    <Icon className="h-6 w-6 text-[#c8d0dc]" />
                  </div>
                  <h3 className="mt-5 font-display text-sm font-bold uppercase tracking-wider text-white">
                    {t}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-400">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-[#0a0e1a] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Por que Escolher a Consteell
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
          </div>

          <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Ruler, t: "Soluções sob Medida", d: "Cada obra tem medidas e desafios próprios. Nada improvisado." },
              { icon: Eye, t: "Visão Técnica", d: "Execução que considera funcionalidade, segurança e acabamento." },
              { icon: Layers, t: "Acabamento Profissional", d: "Peças bem alinhadas e instalação limpa mudam o resultado final." },
              { icon: Phone, t: "Atendimento Direto", d: "Contato claro, orçamento objetivo e acompanhamento próximo." },
              { icon: Clock, t: "Foco em Durabilidade", d: "Soluções que protegem a obra e reduzem retrabalho a longo prazo." },
            ].map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="relative border border-[#2d3748] bg-[#111827] p-6 transition-all hover:border-[#c8d0dc]/40 hover:bg-card-hover"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8d0dc]/60 to-transparent" />
                <Icon className="h-7 w-7 text-[#c8d0dc]" />
                <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-white">
                  {t}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS */}
      <section className="bg-[#0a0e1a] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-steel-gradient md:text-4xl">
              Obras Executadas pela Consteell
            </h2>
            <div className="divider-steel mx-auto mt-6 w-24" />
            <p className="mt-6 text-base leading-relaxed text-gray-300">
              Veja exemplos de telhados, calhas, rufos e fachadas com execução
              técnica e acabamento profissional.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: hero1, tag: "Steel Frame", c: "Votorantim/SP", d: "Cobertura residencial sob medida com perfis galvanizados." },
              { img: hero2, tag: "Calhas", c: "Sorocaba/SP", d: "Captação e escoamento para galpão industrial." },
              { img: hero3, tag: "Steel Frame", c: "Itapetininga/SP", d: "Estrutura metálica para ampliação comercial." },
              { img: hero4, tag: "Rufos", c: "Cerquilho/SP", d: "Proteção entre telhado e parede em obra residencial." },
              { img: hero5, tag: "Fachada", c: "Boituva/SP", d: "Acabamento externo com painéis metálicos." },
              { img: hero1, tag: "Steel Frame", c: "Tietê/SP", d: "Cobertura para empreendimento comercial." },
            ].map((o, i) => (
              <article
                key={i}
                className="group relative overflow-hidden border border-[#2d3748] bg-[#111827]"
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
                  <p className="mt-3 text-sm text-gray-400">{o.d}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/obras"
              className="inline-flex items-center gap-3 border border-[#c8d0dc] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c8d0dc] transition-all hover:bg-[#c8d0dc] hover:text-[#0a0e1a]"
            >
              Ver todas as obras
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaWhatsapp
        title="Sua Obra Precisa de uma Solução sob Medida?"
        text="Envie fotos, medidas ou detalhes do projeto para a equipe da Consteell. Vamos analisar sua necessidade e indicar o melhor caminho para telhado, calhas, rufos ou fachadas."
      />
    </>
  );
}
