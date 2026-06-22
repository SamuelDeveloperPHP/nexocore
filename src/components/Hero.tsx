import NetworkCanvas from "./NetworkCanvas.tsx";
import "./Hero.css";

const stats = [
  { value: "2019", label: "Fundada em" },
  { value: "Sob medida", label: "Cada projeto" },
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
          Tecnologia que <span className="hero__accent">conecta</span> processos
          e impulsiona resultados.
        </h1>

        <p className="hero__lead">
          Desenvolvemos sistemas web, aplicativos mobile e soluções
          corporativas sob medida para integrar informações, reduzir retrabalho
          e acelerar o crescimento do seu negócio.
        </p>

        <div className="hero__actions">
          <a href="#contato" className="btn btn-primary">
            Solicitar orçamento
          </a>
          <a href="#portfolio" className="btn btn-ghost">
            Conhecer projetos →
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
