import { projects } from "../data/content.ts";
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
                <div className="portfolio__shot-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="portfolio__shot-body">
                  <div className="portfolio__shot-rowbig" />
                  <div className="portfolio__shot-cards">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="portfolio__shot-line" />
                  <div className="portfolio__shot-line short" />
                </div>
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
