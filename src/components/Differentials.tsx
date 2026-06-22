import { differentials } from "../data/content.ts";
import "./Differentials.css";

export default function Differentials() {
  return (
    <section className="section differentials">
      <div className="shell differentials__inner">
        <div className="section-head reveal">
          <span className="eyebrow">// por que a NexoCore</span>
          <h2>Feito para ambientes corporativos exigentes.</h2>
          <p>
            Cada item abaixo é uma decisão de projeto, não um slogan — é como
            entregamos software que aguenta a operação real.
          </p>
        </div>

        <ul className="differentials__grid">
          {differentials.map((d, i) => (
            <li
              key={d}
              className="differentials__item reveal"
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              <span className="differentials__check" aria-hidden="true">
                ✓
              </span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
