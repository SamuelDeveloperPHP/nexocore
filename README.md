# NexoCore Tecnologia — Landing Page

Landing page de portfólio da **NexoCore Tecnologia LTDA**, construída em **React + TypeScript** com **Vite**. Tema escuro, glassmorphism e uma malha de nós animada que representa a integração de sistemas — o core do trabalho da NexoCore.

---

## Stack

- **React 18** + **TypeScript**
- **Vite** (build e dev server)
- CSS puro com sistema de tokens (variáveis CSS), sem dependências de UI
- Fontes via Google Fonts: Space Grotesk, Inter e JetBrains Mono

---

## Como rodar

Pré-requisito: **Node.js 18+** instalado.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
```

O Vite mostra o endereço local no terminal (geralmente `http://localhost:5173`).

### Build de produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve a build localmente para conferência
```

A pasta `dist/` é estática e pode ser publicada em qualquer hospedagem (Vercel, Netlify, AWS S3, VPS com Nginx, etc.).

---

## Estrutura do projeto

```
nexocore/
├── index.html              # HTML raiz + fontes
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx             # Monta todas as seções na ordem
    ├── main.tsx            # Entry point do React
    ├── styles.css          # Tokens de design + estilos globais
    ├── useReveal.ts        # Hook de animação reveal-on-scroll
    ├── data/
    │   └── content.ts      # TODO o conteúdo textual do site
    └── components/
        ├── NetworkCanvas.tsx     # Malha de nós animada (assinatura visual)
        ├── Navbar.tsx            # Navegação fixa + menu mobile
        ├── Hero.tsx              # Seção de abertura
        ├── About.tsx             # Quem somos
        ├── Solutions.tsx         # Nossas soluções
        ├── Differentials.tsx     # Diferenciais
        ├── Portfolio.tsx         # Projetos (mockups em CSS)
        ├── StackTestimonials.tsx # Stack tecnológica + depoimentos
        ├── Contact.tsx           # Contato + formulário
        └── Footer.tsx            # CTA final + rodapé
```

Cada componente tem seu próprio arquivo `.css` ao lado, mantendo estilos isolados por seção.

---

## Personalização

### Conteúdo (textos, projetos, stack, depoimentos)

Tudo que é texto fica centralizado em **`src/data/content.ts`**. Edite ali para atualizar soluções, projetos do portfólio, tecnologias e depoimentos — sem precisar mexer no layout.

### Cores e tipografia

As variáveis de design ficam no topo de **`src/styles.css`**, dentro de `:root`. Principais tokens:

| Variável          | Uso                          | Valor       |
| ----------------- | ---------------------------- | ----------- |
| `--bg`            | Fundo principal              | `#0a0f1f`   |
| `--accent`        | Azul tecnológico             | `#3b82f6`   |
| `--accent-bright` | Azul de destaque             | `#60a5fa`   |
| `--accent-cyan`   | Ciano (detalhes/indicadores) | `#22d3ee`   |
| `--ink`           | Texto principal              | `#f3f6ff`   |

Para trocar as fontes, ajuste o `<link>` do Google Fonts em `index.html` e as variáveis `--font-display`, `--font-body` e `--font-mono`.

### Screenshots reais dos sistemas

A seção **Portfólio** usa mockups feitos em CSS como placeholder. Quando tiver imagens reais dos sistemas, abra `src/components/Portfolio.tsx` e substitua o bloco `portfolio__shot` por uma imagem:

```tsx
<div className="portfolio__shot">
  <img src="/screenshots/sgi.png" alt="Tela do SGI" />
  <span className="portfolio__tag">{p.tag}</span>
</div>
```

Coloque as imagens numa pasta `public/` para o Vite servi-las.

### Formulário de contato

O formulário em `src/components/Contact.tsx` hoje apenas exibe a mensagem de sucesso (`handleSubmit`). Para enviar de verdade, conecte a um serviço de e-mail/endpoint, por exemplo **EmailJS**, **Formspree** ou uma API própria.

### Links de contato

Em `Contact.tsx`, ajuste:

- **WhatsApp**: troque `https://wa.me/` por `https://wa.me/55XXXXXXXXXXX` (DDI + DDD + número).
- **E-mail** e **site**: já apontam para `contato@nexocore.com.br` e `www.nexocore.com.br`.

---

## Acessibilidade e qualidade

- Layout **responsivo** até telas de celular.
- **Foco de teclado visível** em links, botões e campos.
- Respeita **`prefers-reduced-motion`**: usuários com essa preferência ativada não recebem as animações.
- HTML semântico (`header`, `main`, `section`, `footer`, `figure`).

---

## Seções da página

1. **Hero** — proposta de valor + malha de nós animada
2. **Quem somos** — história e pilares da empresa
3. **Soluções** — Web, Mobile, Integrações, BI e Sistemas de Gestão
4. **Diferenciais** — por que escolher a NexoCore
5. **Portfólio** — SGI, Diário de Bordo, Frotas, ERP, Apps em campo
6. **Stack tecnológica** — frontend, backend, banco de dados e infraestrutura
7. **Depoimentos**
8. **Contato** — canais + formulário
9. **CTA final + rodapé**

---

© NexoCore Tecnologia LTDA — Curitiba, Paraná, Brasil.