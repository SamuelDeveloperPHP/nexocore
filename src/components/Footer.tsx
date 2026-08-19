import { useLocation } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const isBlog = useLocation().pathname.startsWith("/blog");

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__cta reveal">
          <h2>Pronto para digitalizar e otimizar seus processos?</h2>
          <p>
            A NexoCore desenvolve soluções inteligentes para empresas que buscam
            inovação, eficiência e crescimento sustentável.
          </p>
          <div className="footer__cta-actions">
            {!isBlog && (
              <a href="/#contato" className="btn btn-primary">
                Solicitar demonstração
              </a>
            )}
            <a href="/#contato" className="btn btn-ghost">
              Falar com um especialista
            </a>
          </div>
        </div>

        <hr className="rule footer__rule" />

        <div className="footer__bottom">
          <div className="footer__brand">
            <span className="footer__mark" aria-hidden="true" />
            <span className="footer__brand-text">Nexo<span className="footer__accent">Core</span> Tecnologia LTDA</span>
          </div>
          <p className="footer__copy">
            © {year} NexoCore Tecnologia. Curitiba — Paraná, Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
