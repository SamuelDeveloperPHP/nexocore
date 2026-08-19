export type GanttLib = {
  name: string;
  license: string;
  note: string;
  href: string;
  stack: string;
  permissive: boolean;
};

export type LibGroup = {
  framework: string;
  libs: GanttLib[];
};

export type PostSource = { label: string; href: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  dateLabel: string;
  tag: string;
  readTime: string;
  intro: string;
  groups: LibGroup[];
  sources: PostSource[];
};

export const posts: Post[] = [
  {
    slug: "gantt-free",
    title: "Gantt Free: bibliotecas de Gantt gratuitas",
    excerpt:
      "Catálogo das principais bibliotecas de gráfico de Gantt open source e gratuitas, organizadas por tecnologia, com a licença de cada uma e o link oficial.",
    date: "2026-08-19",
    dateLabel: "19 de agosto de 2026",
    tag: "Open source",
    readTime: "4 min de leitura",
    intro:
      "Bibliotecas para construir gráficos de Gantt sem custo de licença — organizadas por tecnologia, com a licença de cada uma e o link oficial. Para código proprietário, prefira as permissivas (MIT, BSD, Apache) e evite GPL/AGPL em componentes servidos ao navegador.",
    groups: [
      {
        framework: "Vanilla JS",
        libs: [
          {
            name: "Frappe Gantt",
            license: "MIT",
            note: "Leve, SVG, sem dependências. Ótimo ponto de partida.",
            href: "https://github.com/frappe/gantt",
            stack: "SVG",
            permissive: true,
          },
          {
            name: "DHTMLX Gantt Community",
            license: "MIT v10+",
            note: "O mais completo grátis: dependências, baselines, export. A v9 e anteriores são GPLv2.",
            href: "https://github.com/DHTMLX/gantt",
            stack: "Vanilla",
            permissive: true,
          },
          {
            name: "jsGantt-improved",
            license: "BSD-3",
            note: "Simples e sem dependências, ainda mantido.",
            href: "https://github.com/jsGanttImproved/jsgantt-improved",
            stack: "Vanilla",
            permissive: true,
          },
          {
            name: "jQueryGantt (Twproject)",
            license: "MIT",
            note: "Editor com workflow e dependências. Requer jQuery.",
            href: "https://github.com/robicch/jQueryGantt",
            stack: "jQuery",
            permissive: true,
          },
          {
            name: "vis-timeline",
            license: "Apache-2.0",
            note: "Linha do tempo interativa (não é Gantt puro, mas cobre cronogramas).",
            href: "https://github.com/visjs/vis-timeline",
            stack: "Vanilla",
            permissive: true,
          },
          {
            name: "Mermaid",
            license: "MIT",
            note: "Gantt a partir de texto (→ SVG). Só exibição, ideal para documentação.",
            href: "https://github.com/mermaid-js/mermaid",
            stack: "Estático",
            permissive: true,
          },
          {
            name: "ApexCharts",
            license: "MIT",
            note: "Gantt-like via rangeBar. Bom quando já se usa a lib para gráficos.",
            href: "https://github.com/apexcharts/apexcharts.js",
            stack: "Charts",
            permissive: true,
          },
        ],
      },
      {
        framework: "React",
        libs: [
          {
            name: "gantt-task-react",
            license: "MIT",
            note: "Popular e direto ao ponto, ótimo para casos mais leves.",
            href: "https://github.com/MaTeMaTuK/gantt-task-react",
            stack: "React",
            permissive: true,
          },
          {
            name: "SVAR React Gantt",
            license: "MIT core",
            note: "Performático (milhares de tarefas), TypeScript. Recursos avançados no PRO pago.",
            href: "https://github.com/svar-widgets/react-gantt",
            stack: "React",
            permissive: true,
          },
        ],
      },
      {
        framework: "Vue",
        libs: [
          {
            name: "HyVueGantt",
            license: "MIT",
            note: "Evolução moderna do vue-ganttastic, em TypeScript, com slots e temas.",
            href: "https://github.com/Xeyos88/HyVueGantt",
            stack: "Vue 3",
            permissive: true,
          },
          {
            name: "Jordium Gantt Vue3",
            license: "MIT",
            note: "Virtualização para 10k+ tarefas, visão de recursos, dark mode.",
            href: "https://github.com/nelson820125/jordium-gantt-vue3",
            stack: "Vue 3",
            permissive: true,
          },
          {
            name: "vue-ganttastic",
            license: "MIT",
            note: "Barras móveis e customizável. Manutenção fraca hoje.",
            href: "https://github.com/zunnzunn/vue-ganttastic",
            stack: "Vue 3",
            permissive: true,
          },
          {
            name: "SVAR Vue Gantt",
            license: "MIT core",
            note: "Núcleo aberto e rápido; agendamento avançado no PRO pago.",
            href: "https://github.com/svar-widgets/vue-gantt",
            stack: "Vue",
            permissive: true,
          },
        ],
      },
      {
        framework: "Angular",
        libs: [
          {
            name: "ngx-gantt",
            license: "MIT",
            note: "Componente Gantt nativo para Angular, mantido pela Worktile.",
            href: "https://github.com/worktile/ngx-gantt",
            stack: "Angular",
            permissive: true,
          },
        ],
      },
      {
        framework: "Svelte",
        libs: [
          {
            name: "SVAR Svelte Gantt",
            license: "MIT core",
            note: "Leve, rápido e interativo; núcleo aberto com PRO pago opcional.",
            href: "https://github.com/svar-widgets/gantt",
            stack: "Svelte",
            permissive: true,
          },
        ],
      },
      {
        framework: "Freemium & hospedado",
        libs: [
          {
            name: "Syncfusion Gantt",
            license: "Condicional",
            note: 'Muito completo. "Community License" grátis, mas com condições de faturamento/porte.',
            href: "https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart",
            stack: "Multi",
            permissive: false,
          },
          {
            name: "Bryntum Gantt",
            license: "Comercial",
            note: "Referência em recursos, mas comercial — só avaliação gratuita (trial).",
            href: "https://bryntum.com/products/gantt/",
            stack: "Multi",
            permissive: false,
          },
          {
            name: "Google Charts Gantt",
            license: "Hospedado",
            note: "Grátis, porém hospedado no Google — conflita com self-host e CSP restrita.",
            href: "https://developers.google.com/chart/interactive/docs/gallery/ganttchart",
            stack: "Cloud",
            permissive: false,
          },
        ],
      },
    ],
    sources: [
      {
        label: "Webix — Top 5 Free JS Gantt 2026",
        href: "https://blog.webix.com/best-free-javascript-gantt-chart-libraries/",
      },
      {
        label: "AnyChart — guia 2025–2026",
        href: "https://www.anychart.com/blog/2025/11/05/best-javascript-gantt-chart-libraries/",
      },
      {
        label: "SVAR — React Gantt",
        href: "https://svar.dev/blog/top-react-gantt-charts/",
      },
      {
        label: "DHTMLX — Community MIT",
        href: "https://dhtmlx.com/blog/meet-dhtmlx-gantt-community-edition-mit-license/",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
