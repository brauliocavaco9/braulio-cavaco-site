# Site — Bráulio Cavaco, Personal Trainer

Site de apresentação e loja de ebooks, 100% estático. Toda a venda e todo o contacto
(livros, acompanhamento online, acompanhamento presencial) é feito por WhatsApp, com
mensagem já preenchida em cada botão — a pessoa só precisa de clicar em enviar.

## Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind, exportado como HTML estático
- Catálogo de livros/packs como dados estáticos (`src/data/products.ts`)
- Testemunhos como dados estáticos (`src/data/testimonials.ts`)
- Sem base de dados, sem login, sem processador de pagamentos, sem servidor —
  apenas ficheiros HTML/CSS/JS

## Como funciona

- **Início / Sobre Mim** — apresentação da marca
- **Acompanhamento Online** — explica o método e os planos (Treino+Nutrição, Apenas
  Treino); cada botão abre o WhatsApp com uma mensagem já escrita a identificar o plano
- **Acompanhamento Presencial** — botão de WhatsApp com mensagem pronta
- **Livros** — 3 livros individuais + 4 packs, cada um com botão "Comprar via WhatsApp"
  já preenchido com o nome do produto e o preço
- Combinas o pagamento (transferência, MB WAY, etc.) e envias o PDF directamente por
  WhatsApp depois de confirmares

## 1. Configurar o ambiente

```bash
npm install
cp .env.example .env
```

Preenche `NEXT_PUBLIC_WHATSAPP_NUMBER` no `.env` com o teu número em formato
internacional, sem "+" (ex: `351912345678`).

## 2. Correr localmente

```bash
npm run dev
```

Abre `http://localhost:3000`.

## 3. Editar preços, livros e packs

Tudo está em `src/data/products.ts` — cada produto tem título, descrição, preço,
estrutura e FAQ. Para adicionar um livro ou pack novo, copia um bloco existente e
ajusta os campos.

## 4. Editar testemunhos

Tudo está em `src/data/testimonials.ts` — copia um bloco existente para adicionar mais.

## 5. Capas e fotos

Substitui os ficheiros em `public/placeholders/` e `public/braulio-cavaco.jpg` pelas
imagens reais (mesmo nome de ficheiro, ou actualiza as referências em `products.ts`
e nas páginas).

## 6. Deploy — Cloudflare Pages (grátis, incluindo uso comercial)

Como o site é 100% estático, não precisa de nenhum adaptador nem função de servidor.

No painel da Cloudflare (Workers & Pages → Create → Pages → Connect to Git):

- **Framework preset:** None (ou Next.js Static Export, se aparecer)
- **Build command:** `npm run build`
- **Build output directory:** `out`

Variável de ambiente a definir no painel do projecto:

| Nome | Valor |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | o teu número, ex. `351912345678` |

## Estrutura de pastas

```
src/app/                    páginas (App Router)
src/components/             componentes reutilizáveis
src/components/shared/WhatsAppCTA.tsx   botão de WhatsApp com mensagem pronta
src/data/products.ts        catálogo de livros e packs (editar aqui)
src/data/testimonials.ts    testemunhos (editar aqui)
```

## Próximos passos sugeridos

- Configurar domínio próprio na Cloudflare (grátis, com SSL automático). Quando o
  fizeres, actualiza o domínio em três sítios: `metadataBase` em `src/app/layout.tsx`,
  e os endereços em `public/robots.txt` e `public/sitemap.xml` (estão todos a usar
  `brauliocavaco.pt` como referência provisória)
- Se um dia sentires que perdes muito tempo a repetir as mesmas perguntas no WhatsApp
  para o Acompanhamento Online, é fácil voltar a pôr um formulário de candidatura
  antes do contacto — só pedir.
