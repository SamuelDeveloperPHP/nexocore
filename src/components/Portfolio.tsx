import { projects } from "../data/content.ts";
import SolutionIcon from "./SolutionIcon.tsx";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">// portfólio</span>
          <h2>Projetos que já estão em produção.</h2>
          <p>
            Uma seleção de sistemas que desenvolvemos para integrar operação,
            conformidade e gestão.
          </p>
        </div>

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="portfolio__card reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="portfolio__shot" aria-hidden="true">
                <span className="portfolio__icon">
                  <SolutionIcon name={p.icon} />
                </span>
                <span className="portfolio__tag">{p.tag}</span>
              </div>

              <div className="portfolio__meta">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="portfolio__metric">{p.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
