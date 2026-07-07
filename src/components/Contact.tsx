import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Anti-spam: campo isca (honeypot) + marca de tempo de abertura do formulário.
  const [honeypot, setHoneypot] = useState("");
  const [startedAt] = useState(() => Date.now());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha nome, e-mail e mensagem.");
      return;
    }

    // Bot preencheu o honeypot: finge sucesso, não envia nada.
    if (honeypot) {
      setSent(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/send_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          honeypot,
          elapsed: Date.now() - startedAt,
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
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
              <a href="mailto:contato@nexocoretecnologia.com.br">
                contato@nexocoretecnologia.com.br
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
              <a href="https://www.nexocoretecnologia.com.br" target="_blank" rel="noreferrer">
                www.nexocoretecnologia.com.br
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
              {/* Honeypot: invisível para humanos, atrai bots. Não remova. */}
              <input
                type="text"
                name="website"
                className="contact__hp"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
              <label>
                Nome
                <input 
                  type="text" 
                  name="name"
                  placeholder="Seu nome" 
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                E-mail corporativo
                <input
                  type="email"
                  name="email"
                  placeholder="voce@empresa.com.br"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Empresa
                <input 
                  type="text" 
                  name="company"
                  placeholder="Nome da empresa" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </label>
              <label>
                Como podemos ajudar?
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva o desafio ou o sistema que você precisa."
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <button
                type="button"
                className="btn btn-primary contact__submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Solicitar demonstração"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
