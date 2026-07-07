export interface Solution {
  code: string;
  icon: string;
  title: string;
  description: string;
  items?: string[];
}

export interface Project {
  tag: string;
  icon: string;
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

/* Pilares — produtos principais da NexoCore */
export const products: Solution[] = [
  {
    code: "P-01",
    icon: "qsms",
    title: "Gestão QSMS / SGI",
    description:
      "Plataforma integrada de Qualidade, Segurança, Meio Ambiente e Saúde, alinhada às normas ISO 9001, 14001 e 45001:",
    items: [
      "Auditorias e Não Conformidades",
      "Documentos, Normas e Assinatura Digital",
      "Treinamentos, ASOs e Controle de EPIs",
      "Indicadores, Planos de Ação e Alertas",
    ],
  },
  {
    code: "P-02",
    icon: "erp",
    title: "ERP Multiempresas",
    description:
      "Gestão integrada das operações e do backoffice, com visão consolidada de todas as empresas do grupo:",
    items: [
      "Funcionários, Folgas e Férias",
      "Financeiro (Contas a Pagar e Receber)",
      "Estoque, Curva ABC e Ordens de Compras",
      "Aprovações via E-mail e Alertas Automáticos",
    ],
  },
  {
    code: "P-03",
    icon: "frota",
    title: "Gestão Avançada de Frotas",
    description:
      "Controle total sobre veículos, máquinas e equipamentos operacionais — como módulo do ERP ou sistema isolado:",
    items: [
      "Manutenções Preventivas e Corretivas",
      "Abastecimentos, Horímetros e Tacógrafos",
      "Controle de Pneus, Seguros e IPVA",
      "Checklists Digitais e Diário de Bordo",
    ],
  },
  {
    code: "P-04",
    icon: "pcp",
    title: "Gestão e Planejamento de Produção",
    description:
      "PCP completo: da programação das ordens ao apontamento no chão de fábrica, com indicadores em tempo real:",
    items: [
      "Ordens de Produção e Apontamentos",
      "Planejamento de Capacidade e Cronogramas",
      "Controle de Paradas e Indicadores (OEE)",
      "Consumo de Materiais e Rastreabilidade",
    ],
  },
];

/* Serviços de engenharia que sustentam os produtos */
export const solutions: Solution[] = [
  {
    code: "S-01",
    icon: "web",
    title: "Desenvolvimento Web",
    description:
      "Sistemas empresariais, portais corporativos e plataformas personalizadas com arquitetura moderna e escalável.",
  },
  {
    code: "S-02",
    icon: "mobile",
    title: "Aplicativos Mobile",
    description:
      "Apps Android e iOS em React Native, com operação online e offline e sincronização automática em campo.",
  },
  {
    code: "S-03",
    icon: "integracao",
    title: "Integração de Sistemas",
    description:
      "Conexão entre ERPs, APIs, bancos de dados e plataformas de terceiros, com automação de processos ponta a ponta.",
  },
  {
    code: "S-04",
    icon: "bi",
    title: "Business Intelligence",
    description:
      "Dashboards, relatórios gerenciais e indicadores estratégicos para decisões baseadas em dados.",
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
    tag: "QSMS",
    icon: "qsms",
    title: "Sistema de Gestão Integrada",
    description:
      "Plataforma única para gestão da qualidade, segurança do trabalho e meio ambiente, com fluxos de auditoria e não conformidades.",
    metric: "3 normas em uma base",
  },
  {
    tag: "Frotas",
    icon: "frota",
    title: "Gestão de Frotas 360º",
    description:
      "Gestão completa de IPVA, seguros, manutenções, tacógrafos, controle de pneus, abastecimentos, checklists e diário de bordo com registro em campo offline.",
    metric: "Redução de ociosidade",
  },
  {
    tag: "PCP",
    icon: "pcp",
    title: "Planejamento de Produção",
    description:
      "Programação de ordens de produção, apontamentos no chão de fábrica e indicadores de eficiência integrados ao ERP.",
    metric: "Visão em tempo real",
  },
  {
    tag: "ERP",
    icon: "erp",
    title: "ERP e Suprimentos",
    description:
      "Gestão de estoque (Curva ABC e mínimo), fluxo financeiro, RH e ordens de compras automatizadas com alertas.",
    metric: "Integração Multiempresa",
  },
  {
    tag: "Documentos",
    icon: "documentos",
    title: "Aprovações e Conformidade",
    description:
      "Tramitação de documentos, controle de assinaturas digitais padrão ICP Brasil, e processos de aprovação.",
    metric: "Zero papel",
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
