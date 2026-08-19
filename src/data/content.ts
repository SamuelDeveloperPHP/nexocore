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

export interface Segment {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export interface StackGroup {
  label: string;
  items: string[];
}


export interface TrustPillar {
  title: string;
  description: string;
}

export interface ImplementationStep {
  phase: string;
  title: string;
  description: string;
}

export interface PlatformEvidence {
  title: string;
  description: string;
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
      "Gestão integrada das operações e do backoffice — como ERP completo ou integrado ao ERP que você já usa, com visão consolidada do grupo:",
    items: [
      "Funcionários, Folgas e Férias",
      "Financeiro (Contas a Pagar e Receber)",
      "Estoque, Curva ABC e Ordens de Compras",
      "Integração via API com ERPs de mercado e sistemas legados",
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

export const segments: Segment[] = [
  {
    icon: "metalurgica",
    title: "Metalúrgica & Indústria",
    description:
      "Da ordem de produção ao apontamento no chão de fábrica, com rastreabilidade e indicadores em tempo real.",
    items: [
      "PCP e sequenciamento de ordens",
      "Apontamento de produção e OEE",
      "Rastreabilidade de lote e matéria-prima",
      "Estoque, Curva ABC e compras",
    ],
  },
  {
    icon: "construtora",
    title: "Construção & Obras",
    description:
      "Controle da operação em campo que o ERP financeiro não cobre — do canteiro ao escritório.",
    items: [
      "Diário de obra (RDO) e medições",
      "Controle de EPIs e QSMS em campo",
      "Checklists e inspeções offline",
      "Equipamentos e frota da obra",
    ],
  },
  {
    icon: "frota",
    title: "Logística & Transporte",
    description:
      "Gestão de frotas e operação de campo com captura offline e sincronização automática.",
    items: [
      "Frotas, manutenção e abastecimento",
      "Checklists e diário de bordo",
      "Entregas e romaneio em campo",
      "Tacógrafos e controle de pneus",
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


export const trustPillars: TrustPillar[] = [
  {
    title: "Diagnóstico antes da proposta",
    description:
      "Mapeamos processos, gargalos, integrações e prioridades antes de falar em módulo, prazo ou escopo.",
  },
  {
    title: "Demonstração com fluxos reais",
    description:
      "A conversa comercial é apoiada por telas, módulos e jornadas de uso para o gestor avaliar aderência ao processo.",
  },
  {
    title: "Implantação acompanhada",
    description:
      "Planejamento por etapas, ambiente de testes, treinamento de usuários-chave e suporte próximo na virada.",
  },
  {
    title: "Evolução sob demanda",
    description:
      "O sistema pode crescer com novas regras, relatórios, automações e integrações conforme a operação amadurece.",
  },
];

export const implementationSteps: ImplementationStep[] = [
  {
    phase: "01",
    title: "Diagnóstico operacional",
    description:
      "Entendimento dos setores, planilhas atuais, sistemas existentes, permissões, indicadores e pontos críticos.",
  },
  {
    phase: "02",
    title: "Parametrização dos módulos",
    description:
      "Configuração de cadastros, fluxos, regras de aprovação, perfis de acesso e relatórios necessários para a rotina.",
  },
  {
    phase: "03",
    title: "Migração e ambiente de testes",
    description:
      "Importação assistida de dados essenciais e validação em ambiente seguro antes da entrada oficial em operação.",
  },
  {
    phase: "04",
    title: "Treinamento da equipe",
    description:
      "Capacitação de usuários-chave, orientação por processo e material de apoio para reduzir dependência operacional.",
  },
  {
    phase: "05",
    title: "Acompanhamento pós-implantação",
    description:
      "Correções finas, suporte próximo e priorização de melhorias com base no uso real da plataforma.",
  },
];

export const platformEvidence: PlatformEvidence[] = [
  {
    title: "Dashboards gerenciais",
    description: "Indicadores de operação, pendências, custos, produção, frota ou conformidade em tempo real.",
  },
  {
    title: "Módulos integrados",
    description: "ERP, QSMS, frotas, estoque, compras, documentos, financeiro, PCP e relatórios em uma base única.",
  },
  {
    title: "Controle de acesso",
    description: "Perfis por setor, rastreabilidade de ações e separação de permissões por responsabilidade.",
  },
  {
    title: "Operação mobile e offline",
    description: "Coleta em campo, checklists, diário de bordo e sincronização quando a conexão estiver disponível.",
  },
  {
    title: "Integrações",
    description: "APIs, ERPs legados, bases de dados e automações para reduzir retrabalho entre sistemas.",
  },
  {
    title: "Relatórios sob medida",
    description: "Visões para diretoria, gestores e operação com filtros, histórico e apoio à tomada de decisão.",
  },
];

