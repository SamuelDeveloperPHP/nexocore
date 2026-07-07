import { products, solutions } from "../data/content.ts";
import SolutionIcon from "./SolutionIcon.tsx";
import "./Solutions.css";

export default function Solutions() {
  return (
    <section className="section solutions" id="solucoes">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">// nossas soluções</span>
          <h2>Software para todo o ciclo da operação.</h2>
          <p>
            Gestão QSMS, ERP, frotas e planejamento de produção — da captura de
            dados em campo ao painel da diretoria, cada camada conversa com a
            próxima.
          </p>
        </div>

        <div className="solutions__products">
          {products.map((p, i) => (
            <article
              key={p.code}
              className="glass solutions__card solutions__card--product reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="solutions__top">
                <span className="solutions__icon">
                  <SolutionIcon name={p.icon} />
                </span>
                <span className="solutions__code">{p.code}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.items && (
                <ul className="solutions__list">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="solutions__grid">
          {solutions.map((s, i) => (
            <article
              key={s.code}
              className="glass solutions__card reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="solutions__top">
                <span className="solutions__icon solutions__icon--sm">
                  <SolutionIcon name={s.icon} />
                </span>
                <span className="solutions__code">{s.code}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
