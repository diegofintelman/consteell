import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";

const SITE_URL = "https://consteell.lovable.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Consteell",
  description:
    "Especialista em telhado em steel frame, estruturas galvanizadas, calhas, rufos e fachadas.",
  telephone: "+5515998151587",
  url: SITE_URL,
  sameAs: ["https://www.instagram.com/consteell_/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    "Sorocaba",
    "Votorantim",
    "Itu",
    "Salto",
    "São Roque",
    "Araçoiaba da Serra",
    "Itapetininga",
    "Cerquilho",
    "Tietê",
    "Boituva",
    "Capão Bonito",
    "Tatuí",
  ],
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0e1a] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-steel-gradient">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold uppercase tracking-wider text-white">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-[#c8d0dc] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c8d0dc] transition-all hover:bg-[#c8d0dc] hover:text-[#0a0e1a]"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0e1a] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold uppercase tracking-wider text-white">
          A página não carregou
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Algo deu errado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0a0e1a]"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border border-[#c8d0dc] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c8d0dc] hover:bg-[#c8d0dc] hover:text-[#0a0e1a]"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Consteell | Steel Frame, Calhas, Rufos e Fachadas — Sorocaba/SP" },
      { name: "author", content: "Consteell" },
      { name: "theme-color", content: "#0a0e1a" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Consteell" },
      { property: "og:title", content: "Consteell | Steel Frame, Calhas, Rufos e Fachadas — Sorocaba/SP" },
      { name: "twitter:title", content: "Consteell | Steel Frame, Calhas, Rufos e Fachadas — Sorocaba/SP" },
      { name: "description", content: "Consteell: O Futuro em Aço is a corporate website for lead generation." },
      { property: "og:description", content: "Consteell: O Futuro em Aço is a corporate website for lead generation." },
      { name: "twitter:description", content: "Consteell: O Futuro em Aço is a corporate website for lead generation." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/1je80SdfDpZC92pr9uMyY3BAd1d2/social-images/social-1778939377359-13.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/1je80SdfDpZC92pr9uMyY3BAd1d2/social-images/social-1778939377359-13.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
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
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0a0e1a] text-[#f0f4f8]">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <WhatsappFloat />
      </div>
    </QueryClientProvider>
  );
}
