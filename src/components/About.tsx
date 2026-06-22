import "./About.css";

export default function About() {
  return (
    <section className="section about" id="empresa">
      <div className="shell about__grid">
        <div className="about__intro reveal">
          <span className="eyebrow">// quem somos</span>
          <h2>Conectando tecnologia, inovação e resultados.</h2>
        </div>

        <div className="about__body reveal">
          <p>
            Fundada em 2019, a <strong>NexoCore Tecnologia</strong> nasceu para
            desenvolver soluções que simplificam processos, integram
            informações e geram valor real para empresas de diversos segmentos.
          </p>
          <p>
            Atuamos em sistemas web, aplicativos mobile, plataformas
            corporativas e soluções personalizadas — sempre com foco em
            qualidade, segurança e inovação, do levantamento à operação.
          </p>

          <ul className="about__pillars">
            <li>
              <span className="about__pillar-k">Foco</span>
              Integrar dados que hoje vivem isolados em planilhas e sistemas
              legados.
            </li>
            <li>
              <span className="about__pillar-k">Método</span>
              Entender a operação antes de escrever a primeira linha de código.
            </li>
            <li>
              <span className="about__pillar-k">Entrega</span>
              Software que funciona em campo, online e offline.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
