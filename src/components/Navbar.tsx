import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#empresa", label: "Empresa" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#stack", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="shell nav__inner">
        <a href="#top" className="nav__brand" aria-label="NexoCore — início">
          <span className="nav__mark" aria-hidden="true">
            <span className="nav__node" />
            <span className="nav__node" />
            <span className="nav__node" />
          </span>
          Nexo<span className="nav__brand-accent">Core</span>
        </a>

        <nav className="nav__links" aria-label="Navegação principal">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn btn-primary nav__cta">
          Solicitar orçamento
        </a>

        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__drawer">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
