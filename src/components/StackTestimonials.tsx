import { stack, testimonials } from "../data/content.ts";
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

      <section className="section testimonials">
        <div className="shell">
          <span className="eyebrow reveal">// depoimentos</span>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <figure
                key={t.author}
                className="glass testimonials__card reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="testimonials__quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
