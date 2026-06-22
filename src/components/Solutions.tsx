import { solutions } from "../data/content.ts";
import "./Solutions.css";

export default function Solutions() {
  return (
    <section className="section solutions" id="solucoes">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">// nossas soluções</span>
          <h2>Software para todo o ciclo da operação.</h2>
          <p>
            Da captura de dados em campo ao painel da diretoria — construímos
            cada camada para conversar com a próxima.
          </p>
        </div>

        <div className="solutions__grid">
          {solutions.map((s, i) => (
            <article
              key={s.code}
              className={`glass solutions__card reveal ${
                s.items ? "solutions__card--wide" : ""
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="solutions__code">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              {s.items && (
                <ul className="solutions__list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
