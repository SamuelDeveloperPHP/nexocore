# NexoCore Tecnologia — Landing Page

Landing page de portfólio em **React + TypeScript (Vite)**, com componentes `.tsx`.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse o endereço que o Vite exibir (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── App.tsx                 # Monta todas as seções
├── main.tsx                # Entry point
├── styles.css              # Tokens de design + estilos globais
├── useReveal.ts            # Animação reveal-on-scroll
├── data/
│   └── content.ts          # Todo o conteúdo (soluções, projetos, stack...)
└── components/
    ├── NetworkCanvas.tsx   # Malha de nós animada (assinatura visual)
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Solutions.tsx
    ├── Differentials.tsx
    ├── Portfolio.tsx
    ├── StackTestimonials.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Personalização rápida

- **Conteúdo** (textos, projetos, stack, depoimentos): `src/data/content.ts`.
- **Cores e tipografia**: variáveis CSS no topo de `src/styles.css` (`:root`).
- **Screenshots reais**: na seção Portfólio (`Portfolio.tsx`), os mockups em CSS
  podem ser trocados por `<img>` apontando para imagens reais dos sistemas.
- **Formulário de contato**: `Contact.tsx` apenas marca como enviado; conecte
  `handleSubmit` a um endpoint, EmailJS ou serviço equivalente.
- **Links**: ajuste o número do WhatsApp em `Contact.tsx` (`https://wa.me/55...`).

## Acessibilidade e qualidade

- Responsivo até mobile.
- Foco de teclado visível.
- Respeita `prefers-reduced-motion` (desliga animações).
