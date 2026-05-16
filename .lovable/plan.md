## Objetivo
Trocar a sede da empresa de **Tatuí/SP** para **Sorocaba/SP** em todo o site, e ajustar o discurso de cobertura para "Sorocaba e região".

## Alterações

### 1. `src/routes/__root.tsx` (JSON-LD + meta)
- `addressLocality`: `"Tatuí"` → `"Sorocaba"`.
- `areaServed`: reordenar com Sorocaba primeiro e remover Tatuí da lista. Lista final sugerida: `["Sorocaba", "Votorantim", "Itu", "Salto", "Itapetininga", "Cerquilho", "Tietê", "Boituva", "Capão Bonito", "Tatuí", "São Roque", "Araçoiaba da Serra"]` — manter cidades historicamente da região metropolitana de Sorocaba; manter Tatuí como atendida (não é a sede, mas faz parte da região).
- Title/og:title/twitter:title: `— Tatuí/SP` → `— Sorocaba/SP`.

### 2. Títulos e descrições das páginas
- `src/routes/steel-frame.tsx` (linha 12): `Tatuí/SP` → `Sorocaba/SP`.
- `src/routes/fachadas.tsx` (linha 11): `Tatuí/SP` → `Sorocaba/SP`.
- `src/routes/sobre.tsx` (linhas 11, 15, 65): `Tatuí/SP` / `Tatuí e interior de SP` → `Sorocaba/SP` / `Sorocaba e região`.
- `src/routes/contato.tsx` (linhas 24, 217): `Tatuí e região` / `Tatuí e interior de SP` → `Sorocaba e região`.
- `src/routes/index.tsx`:
  - linha 44: title `Tatuí/SP` → `Sorocaba/SP`.
  - linha 49: description `Atendemos Tatuí e interior de SP.` → `Atendemos Sorocaba e região.`
  - linha 154: card MapPin `t: "Região Interior SP", s: "Tatuí e cidades da região"` → `t: "Sorocaba e região", s: "Atendimento em toda a RMS"`.

### 3. Portfólio de obras (cidades fictícias nos cards)
Manter diversidade de cidades, apenas trocar a entrada "Tatuí/SP" por uma cidade da região de Sorocaba para reforçar o posicionamento:
- `src/routes/index.tsx` linha 503: `Tatuí/SP` → `Sorocaba/SP` (ou `Votorantim/SP`).
- `src/routes/obras.tsx` linha 38: idem.

### 4. `src/components/Footer.tsx`
- Linha 82: `Tatuí/SP — Interior de SP` → `Sorocaba/SP — Região Metropolitana`.
- Linha 112: `Steel Frame · Tatuí · SP` → `Steel Frame · Sorocaba · SP`.

## Fora de escopo
- Telefone, e-mail, links de WhatsApp, layout, cores e demais conteúdos permanecem inalterados.
- Imagens de obras não mudam.

## Verificação
- `rg -i "tatuí|tatui"` ao final para confirmar que só restam ocorrências intencionais (eventual menção de Tatuí na lista `areaServed`, se mantida).
