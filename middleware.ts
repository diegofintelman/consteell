export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const accept = request.headers.get("accept") || "";

  // Se o agente solicitar explicitamente Markdown
  if (accept.includes("text/markdown")) {
    const origin = url.origin;
    const llmsUrl = new URL("/llms-full.txt", origin);

    try {
      const response = await fetch(llmsUrl.toString());
      if (response.ok) {
        const content = await response.text();
        // Estimativa aproximada de tokens (1 token ~= 4 caracteres)
        const tokenCount = Math.round(content.length / 4);

        return new Response(content, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "x-markdown-tokens": tokenCount.toString(),
          },
        });
      }
    } catch (error) {
      console.error("Erro ao carregar o llms-full.txt no middleware:", error);
    }
  }

  // Permite que a requisição siga normalmente para o roteador do Vercel
  return new Response(null, {
    headers: {
      "x-middleware-next": "1",
    },
  });
}

export const config = {
  // Executar middleware em todas as páginas para permitir negociação de Markdown global
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
