const paths: Record<string, JSX.Element> = {
  // QSMS — escudo com check (qualidade, segurança, meio ambiente, saúde)
  qsms: (
    <>
      <path d="M12 3l7.5 3v5.2c0 4.6-3.1 7.9-7.5 9.8-4.4-1.9-7.5-5.2-7.5-9.8V6L12 3z" />
      <path d="M8.8 12.2l2.2 2.2 4.2-4.6" />
    </>
  ),
  // ERP — camadas integradas
  erp: (
    <>
      <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5L12 21l9-4.5" />
    </>
  ),
  // Frotas — caminhão
  frota: (
    <>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4.5L21 13.5V16h-8" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
    </>
  ),
  // PCP — fábrica + fluxo de produção
  pcp: (
    <>
      <path d="M3 20V9.5l5.5 3.5V9.5l5.5 3.5V4h7v16H3z" />
      <path d="M7 16h2M12 16h2M17 16h1" />
    </>
  ),
  // Desenvolvimento web — código
  web: (
    <>
      <path d="M8.5 6.5L3 12l5.5 5.5" />
      <path d="M15.5 6.5L21 12l-5.5 5.5" />
    </>
  ),
  // Mobile — smartphone com sinal de sync
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
      <path d="M10.8 18.2h2.4" />
    </>
  ),
  // Integração — nós conectados
  integracao: (
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <path d="M6 8.6V13a5 5 0 0 0 5 5h4.4" />
    </>
  ),
  // BI — gráfico de barras
  bi: (
    <>
      <path d="M4 20h16" />
      <path d="M7.5 20v-6" />
      <path d="M12 20V6" />
      <path d="M16.5 20v-9" />
    </>
  ),
};

export default function SolutionIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.web}
    </svg>
  );
}
