import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#setores", label: "Setores" },
  { href: "#app", label: "App" },
  { href: "#empresa", label: "Empresa" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#stack", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

const posts = [
  {
    href: "https://claude.ai/code/artifact/616b5228-4513-480f-b375-0991da295e1a",
    label: "Gantt Free",
    note: "Bibliotecas de Gantt gratuitas",
  },
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

          <div className="nav__posts">
            <button
              type="button"
              className="nav__posts-trigger"
              aria-haspopup="true"
            >
              Posts
              <svg
                className="nav__caret"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                aria-hidden="true"
              >
                <path
                  d="M1 1l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="nav__posts-panel" role="menu">
              {posts.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  role="menuitem"
                  className="nav__post"
                >
                  <span className="nav__post-title">{p.label}</span>
                  <span className="nav__post-note">{p.note}</span>
                </a>
              ))}
            </div>
          </div>
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

          <span className="nav__drawer-label">Posts</span>
          {posts.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="nav__drawer-post"
              onClick={() => setOpen(false)}
            >
              {p.label}
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
