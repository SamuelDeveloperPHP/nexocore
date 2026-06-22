import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    // Em produção, conectar a um endpoint/serviço de e-mail.
    setSent(true);
  };

  return (
    <section className="section contact" id="contato">
      <div className="contact__glow" aria-hidden="true" />
      <div className="shell contact__grid">
        <div className="contact__info reveal">
          <span className="eyebrow">// contato</span>
          <h2>Vamos transformar sua ideia em sistema?</h2>
          <p>
            Conte o desafio da sua operação. Respondemos com um diagnóstico
            inicial e os próximos passos — sem compromisso.
          </p>

          <ul className="contact__channels">
            <li>
              <span className="contact__k">E-mail</span>
              <a href="mailto:contato@nexocore.com.br">
                contato@nexocore.com.br
              </a>
            </li>
            <li>
              <span className="contact__k">WhatsApp</span>
              <a href="https://wa.me/5541988885871" target="_blank" rel="noreferrer">
                (41) 98888-5871
              </a>
            </li>
            <li>
              <span className="contact__k">Site</span>
              <a href="https://www.nexocore.com.br" target="_blank" rel="noreferrer">
                www.nexocore.com.br
              </a>
            </li>
            <li>
              <span className="contact__k">Local</span>
              Curitiba — Paraná
            </li>
          </ul>
        </div>

        <div className="glass contact__form reveal">
          {sent ? (
            <div className="contact__success">
              <h3>Recebemos seu contato.</h3>
              <p>
                Em breve um especialista da NexoCore retorna para entender seu
                projeto.
              </p>
            </div>
          ) : (
            <div className="contact__fields">
              <label>
                Nome
                <input type="text" placeholder="Seu nome" autoComplete="name" />
              </label>
              <label>
                E-mail corporativo
                <input
                  type="email"
                  placeholder="voce@empresa.com.br"
                  autoComplete="email"
                />
              </label>
              <label>
                Empresa
                <input type="text" placeholder="Nome da empresa" />
              </label>
              <label>
                Como podemos ajudar?
                <textarea
                  rows={4}
                  placeholder="Descreva o desafio ou o sistema que você precisa."
                />
              </label>
              <button
                type="button"
                className="btn btn-primary contact__submit"
                onClick={handleSubmit}
              >
                Solicitar demonstração
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
