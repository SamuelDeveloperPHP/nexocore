import { implementationSteps, platformEvidence, stack, trustPillars } from "../data/content.ts";
import "./StackTestimonials.css";

export default function StackTestimonials() {
  return (
    <>
      <section className="section stack" id="stack">
        <div className="shell">
          <div className="section-head reveal">
            <span className="eyebrow">// stack tecnológica</span>
            <h2>Ferramentas escolhidas para durar.</h2>
            <p>
              Tecnologias maduras e amplamente suportadas, do frontend à
              infraestrutura.
            </p>
          </div>

          <div className="stack__grid">
            {stack.map((g, i) => (
              <div
                key={g.label}
                className="glass stack__card reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="stack__label">{g.label}</h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it}>
                      <code>{it}</code>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof" id="implantacao">
        <div className="shell">
          <div className="section-head proof__head reveal">
            <span className="eyebrow">// segurança para sua implantação</span>
            <h2>Confiança construída com método e evidência.</h2>
            <p>
              Para contratar um ERP, o gestor precisa enxergar processo, risco,
              suporte e aderência. A NexoCore apresenta isso com diagnóstico,
              demonstração dos fluxos e um plano claro de implantação.
            </p>
          </div>

          <div className="proof__pillars">
            {trustPillars.map((pillar, i) => (
              <article
                key={pillar.title}
                className="glass proof__pillar reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="proof__pillar-index">0{i + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="proof__split">
            <div className="glass proof__panel proof__timeline reveal">
              <span className="eyebrow">// método de implantação</span>
              <h3>Como o projeto sai do diagnóstico e entra em operação.</h3>
              <ol>
                {implementationSteps.map((step) => (
                  <li key={step.phase}>
                    <span className="proof__phase">{step.phase}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="glass proof__panel proof__evidence reveal">
              <span className="eyebrow">// o que avaliar na demonstração</span>
              <h3>Telas, módulos e critérios para reduzir risco de compra.</h3>
              <div className="proof__evidence-grid">
                {platformEvidence.map((item) => (
                  <article key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
