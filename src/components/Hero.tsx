import NetworkCanvas from "./NetworkCanvas.tsx";
import "./Hero.css";

const stats = [
  { value: "2019", label: "Fundada em" },
  { value: "Implantação guiada", label: "Do diagnóstico ao uso" },
  { value: "Online + Offline", label: "Aplicações" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <NetworkCanvas />
      <div className="hero__glow" aria-hidden="true" />

      <div className="shell hero__inner">
        <span className="eyebrow">// software house · Curitiba — PR</span>

        <h1 className="hero__title">
          ERP, QSMS e frotas sob medida para empresas que precisam{" "}
          <span className="hero__accent">controlar</span> a operação.
        </h1>

        <p className="hero__lead">
          Centralize processos, reduza planilhas paralelas e leve dados confiáveis
          do campo à diretoria com implantação guiada, módulos integrados e
          evolução sob demanda.
        </p>

        <div className="hero__actions">
          <a href="#contato" className="btn btn-primary">
            Agendar demonstração do ERP
          </a>
          <a href="#implantacao" className="btn btn-ghost">
            Ver módulos e implantação →
          </a>
        </div>

        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}