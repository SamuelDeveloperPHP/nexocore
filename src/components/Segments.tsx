import { segments } from "../data/content.ts";
import SolutionIcon from "./SolutionIcon.tsx";
import "./Segments.css";

export default function Segments() {
  return (
    <section className="section segments" id="setores">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">// setores atendidos</span>
          <h2>Feito para a sua operação, não genérico.</h2>
          <p>
            Cada setor tem um chão de fábrica, um canteiro ou uma estrada
            diferentes. Entregamos a camada de operação e o mobile offline que o
            ERP tradicional não cobre.
          </p>
        </div>

        <div className="segments__modes reveal">
          <div className="segments__mode">
            <span className="segments__badge">Integra ao seu TOTVS</span>
            <p>
              Já roda TOTVS? Somos a camada operacional e o app offline que
              conversam com o seu ERP — sem trocar o que já funciona.
            </p>
          </div>
          <div className="segments__mode">
            <span className="segments__badge segments__badge--alt">
              Ou opera como ERP completo
            </span>
            <p>
              Ainda não tem sistema? A mesma plataforma assume a gestão de ponta
              a ponta, no seu ritmo e sob medida.
            </p>
          </div>
        </div>

        <div className="segments__grid">
          {segments.map((s, i) => (
            <article
              key={s.title}
              className="glass segments__card reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="segments__icon">
                <SolutionIcon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul className="segments__list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
