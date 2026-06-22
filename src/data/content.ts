export interface Solution {
  code: string;
  title: string;
  description: string;
  items?: string[];
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  metric: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const solutions: Solution[] = [
  {
    code: "S-01",
    title: "Desenvolvimento Web",
    description:
      "Sistemas empresariais, ERPs, portais corporativos e plataformas personalizadas com arquitetura moderna e escalável.",
  },
  {
    code: "S-02",
    title: "Aplicativos Mobile",
    description:
      "Apps Android e iOS em React Native, com operação online e offline e sincronização automática em campo.",
  },
  {
    code: "S-03",
    title: "Integração de Sistemas",
    description:
      "Conexão entre ERPs, APIs, bancos de dados e plataformas de terceiros, com automação de processos ponta a ponta.",
  },
  {
    code: "S-04",
    title: "Business Intelligence",
    description:
      "Dashboards, relatórios gerenciais e indicadores estratégicos para decisões baseadas em dados.",
  },
  {
    code: "S-05",
    title: "Sistemas de Gestão",
    description:
      "Plataformas corporativas para áreas operacionais e de conformidade:",
    items: [
      "Gestão da Qualidade",
      "Segurança do Trabalho",
      "Meio Ambiente",
      "Gestão de Frotas",
      "Controle de Ativos",
      "Controle de Estoque",
      "Gestão Documental",
    ],
  },
];

export const differentials: string[] = [
  "Soluções 100% personalizadas",
  "Desenvolvimento sob medida",
  "Arquitetura escalável",
  "Segurança da informação",
  "Suporte especializado",
  "Experiência corporativa",
  "Integração com sistemas legados",
  "Aplicações online e offline",
];

export const projects: Project[] = [
  {
    tag: "SGI",
    title: "Sistema de Gestão Integrada",
    description:
      "Plataforma única para gestão da qualidade, segurança do trabalho e meio ambiente, com fluxos de auditoria e não conformidades.",
    metric: "3 normas em uma base",
  },
  {
    tag: "Operação",
    title: "Diário de Bordo Digital",
    description:
      "Controle operacional de veículos, máquinas e equipamentos com registro em campo e sincronização offline.",
    metric: "100% offline-first",
  },
  {
    tag: "Frotas",
    title: "Gestão de Frotas",
    description:
      "Abastecimentos, checklists, manutenções e indicadores operacionais centralizados em um só painel.",
    metric: "Custo por km rastreado",
  },
  {
    tag: "ERP",
    title: "ERP Corporativo",
    description:
      "Sistema multiempresa para gestão administrativa e operacional, com permissões por unidade.",
    metric: "Multiempresa",
  },
  {
    tag: "Mobile",
    title: "Apps Corporativos em Campo",
    description:
      "Coleta de dados em campo com formulários dinâmicos e sincronização automática ao reconectar.",
    metric: "Sync automático",
  },
];

export const stack: StackGroup[] = [
  { label: "Frontend", items: ["React", "React Native", "TypeScript", "Next.js"] },
  { label: "Backend", items: ["PHP", "Laravel", "Node.js"] },
  { label: "Banco de dados", items: ["MySQL", "PostgreSQL", "SQLite"] },
  { label: "Infraestrutura", items: ["Linux", "Docker", "GitHub", "AWS", "VPS"] },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "A NexoCore transformou nossos processos operacionais, reduzindo retrabalho e aumentando a produtividade.",
    author: "Diretoria de Operações",
    role: "Indústria — cliente NexoCore",
  },
  {
    quote:
      "Profissionalismo, qualidade técnica e um suporte que responde de verdade quando precisamos.",
    author: "Coordenação de TI",
    role: "Empresa de serviços — cliente NexoCore",
  },
];
