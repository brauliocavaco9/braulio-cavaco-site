# Site — Bráulio Cavaco, Personal Trainer

Site de apresentação, candidaturas e loja de ebooks (venda por WhatsApp). Sem base de
dados, sem login, sem processador de pagamentos — o mais simples possível para o teu
volume actual, com espaço para crescer mais tarde.

## Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind
- **Resend** para receberes candidaturas e pedidos por email
- Catálogo de livros/packs como dados estáticos no código (`src/data/products.ts`)
- Nenhuma base de dados, autenticação ou processador de pagamentos — tudo entregue por ti, à mão, via WhatsApp

## Como funciona

- **Início / Sobre Mim** — apresentação da marca
- **Acompanhamento Online** — página + formulário de candidatura → chega-te por email
- **Acompanhamento Presencial** — página + formulário de pedido → chega-te por email
- **Livros** — mostra os 3 livros individuais e os 4 packs, cada um com botão
  "Comprar via WhatsApp" que abre uma conversa já com o nome do produto e o preço
- Combinas o pagamento (transferência, MB WAY, etc.) e envias o PDF directamente por
  WhatsApp depois de confirmares

## 1. Configurar o ambiente

```bash
npm install
cp .env.example .env
```

Preenche o `.env`:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — o teu número em formato internacional, sem "+"
  (ex: `351912345678`)
- `RESEND_API_KEY` — cria conta grátis em resend.com, gera uma chave
- `NOTIFY_EMAIL_TO` — o email onde queres receber candidaturas e pedidos

## 2. Correr localmente

```bash
npm run dev
```

Abre `http://localhost:3000`.

## 3. Editar preços, livros e packs

Tudo está em `src/data/products.ts` — cada produto tem título, descrição, preço,
estrutura e FAQ. Para adicionar um livro ou pack novo, copia um bloco existente e
ajusta os campos. Não precisas de tocar em mais nenhum ficheiro — a loja e as páginas
individuais são geradas automaticamente a partir desta lista.

## 4. Capas dos livros

Substitui os ficheiros de exemplo em `public/placeholders/` pelas capas reais
(mesmo nome de ficheiro, ou actualiza o campo `coverUrl` em `products.ts`).

## 5. Deploy — Cloudflare Pages (grátis, incluindo uso comercial)

1. Cria uma conta em [pages.cloudflare.com](https://pages.cloudflare.com) (grátis)
2. Liga o teu repositório do GitHub (ou faz upload directo do projecto)
3. Framework preset: **Next.js**
4. Define as variáveis de ambiente (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `RESEND_API_KEY`,
   `NOTIFY_EMAIL_TO`) no painel do projecto Cloudflare
5. Deploy automático a cada alteração

Nota técnica: como o site tem duas rotas de API (os formulários), a Cloudflare precisa
do adaptador `@cloudflare/next-on-pages` para as correr correctamente — isto já vem
preparado no projecto; só precisas de seguir os passos acima.

## Estrutura de pastas

```
src/app/                    páginas (App Router)
src/app/api/                as duas rotas de formulário (email via Resend)
src/components/             componentes reutilizáveis
src/data/products.ts        catálogo de livros e packs (editar aqui)
src/lib/mailer.ts           envio de email
```

## Próximos passos sugeridos

- Substituir os placeholders de capas em `public/placeholders/`
- Preencher a secção "Sobre Mim" com percurso e certificações reais
- Rever textos de FAQ e estrutura de cada produto/pack em `src/data/products.ts`
- Configurar domínio próprio na Cloudflare (grátis, com SSL automático)

## Se um dia quiseres automatizar (Stripe, contas de cliente, leitor protegido)

Esta versão foi propositadamente simplificada. Se um dia o volume de vendas justificar
automatizar pagamentos ou dar aos clientes uma área própria, esse trabalho já foi feito
antes numa versão mais completa do projecto — é só retomar a partir daí.
