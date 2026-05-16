## Objetivo
Deixar a logo da Consteell maior e mais visível no header, mantendo a altura atual da navbar inalterada.

## Como
A logo hoje está em `src/components/Header.tsx` com `h-10 md:h-12` dentro de um `<header>` que tem padding vertical `py-5` (topo) / `py-3` (scrolled). Esse padding define a altura da navbar — se eu só aumentar a `h-` da imagem, a navbar cresce junto.

Solução: permitir que a logo "estoure" verticalmente o padding do header sem empurrar os outros elementos, usando uma altura maior na imagem + `my-[-Xpx]` (margem negativa vertical) para compensar. A altura efetiva do header continua determinada pelo botão/menu ao lado, que mantém o mesmo tamanho.

### Alterações em `src/components/Header.tsx`
- Trocar `h-10 w-auto md:h-12` da `<img>` por algo como `h-14 md:h-16 w-auto -my-2 md:-my-3`.
- Aplicar a mesma altura maior no logo do drawer mobile (consistência visual).
- Garantir que o container do link (`<Link>`) não imponha `overflow-hidden` (não impõe hoje).

### Verificação
- Screenshot em mobile (375px), tablet (768px) e desktop (1280px) — estado topo e estado "scrolled".
- Confirmar visualmente que a altura total do header não mudou (comparar com o estado anterior) e que a logo aparece nitidamente maior.

## Fora de escopo
- Nenhuma mudança em cores, fontes, links de navegação ou outras páginas.
- Sem regerar o arquivo da logo.
