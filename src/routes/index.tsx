import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { PainSolution } from "@/components/PainSolution";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";

const SITE_URL = "https://consteell.com.br";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Consteell",
  description:
    "Especialista em Steel Frame, estruturas galvanizadas, telhados em aço e calhas sob medida.",
  telephone: "+5515998151587",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tatuí",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: ["Tatuí", "Itapetininga", "Sorocaba", "Cerquilho", "Tietê", "Boituva"],
  url: SITE_URL,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consteell | Steel Frame e Estruturas Galvanizadas em Tatuí e Interior de SP" },
      {
        name: "description",
        content:
          "A Consteell é especialista em Steel Frame, estruturas galvanizadas, telhados em aço e calhas sob medida. Atendemos Tatuí, Itapetininga, Sorocaba e região. Solicite orçamento gratuito.",
      },
      {
        name: "keywords",
        content:
          "steel frame Tatuí, estrutura galvanizada SP, telhado em aço interior SP, calha sob medida, construção leve, Ecoframe, obra rápida",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Consteell | Steel Frame e Estruturas Galvanizadas" },
      {
        property: "og:description",
        content:
          "Construção em Steel Frame com estruturas galvanizadas certificadas. Sem cupins, sem rachaduras, com garantia.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Consteell | Steel Frame e Estruturas Galvanizadas" },
      {
        name: "twitter:description",
        content: "Construção em Steel Frame com estruturas galvanizadas certificadas.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PainSolution />
        <Services />
        <WhyUs />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
