import SolutionIcon from "./SolutionIcon.tsx";
import "./MobileApp.css";

const features = [
  {
    icon: "offline",
    title: "100% offline-first",
    text: "Captura dados sem sinal e sincroniza sozinho quando a conexão volta.",
  },
  {
    icon: "integracao",
    title: "Conecta ao ERP que você usa",
    text: "Integração via API com ERPs de mercado e sistemas legados — sem retrabalho de digitação.",
  },
  {
    icon: "documentos",
    title: "Checklists e assinaturas em campo",
    text: "Apontamentos, inspeções, fotos e assinaturas coletados na origem do dado.",
  },
  {
    icon: "mobile",
    title: "Android e iOS",
    text: "App híbrido em React Native, uma base de código para as duas plataformas.",
  },
];

export default function MobileApp() {
  return (
    <section className="section appflag" id="app">
      <div className="shell appflag__inner">
        <div className="appflag__copy reveal">
          <span className="eyebrow">// aplicativo em campo</span>
          <h2>O dado nasce no campo. Seu app também.</h2>
          <p className="appflag__lead">
            Chão de fábrica, canteiro e estrada quase nunca têm Wi-Fi — mas é ali
            que a operação acontece. Nosso app híbrido registra tudo offline e
            sincroniza automaticamente com o seu ERP quando a conexão volta.
          </p>

          <ul className="appflag__features">
            {features.map((f) => (
              <li key={f.title}>
                <span className="appflag__icon">
                  <SolutionIcon name={f.icon} />
                </span>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <a href="#contato" className="btn btn-primary appflag__cta">
            Quero ver funcionando
          </a>
        </div>

        <div className="appflag__device reveal" aria-hidden="true">
          <div className="appflag__phone">
            <span className="appflag__notch" />
            <div className="appflag__screen">
              <div className="appflag__appbar">
                <span className="appflag__dot" />
                <span className="appflag__appname">Checklist — Frota</span>
                <span className="appflag__offline">offline</span>
              </div>

              <div className="appflag__sync">
                <span className="appflag__syncbar">
                  <span />
                </span>
                <span className="appflag__synctxt">3 registros na fila de envio</span>
              </div>

              <ul className="appflag__tasks">
                <li className="is-done">
                  <span className="appflag__check" />
                  Nível de óleo
                </li>
                <li className="is-done">
                  <span className="appflag__check" />
                  Pneus e calibragem
                </li>
                <li>
                  <span className="appflag__check" />
                  Tacógrafo
                </li>
                <li>
                  <span className="appflag__check" />
                  Assinatura do motorista
                </li>
              </ul>

              <div className="appflag__footer">
                <span className="appflag__pill">Sincronizar agora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
