import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { posts } from "../data/posts.ts";
import "./Navbar.css";

const sections = [
  { id: "solucoes", label: "Soluções" },
  { id: "setores", label: "Setores" },
  { id: "app", label: "App" },
  { id: "empresa", label: "Empresa" },
  { id: "portfolio", label: "Portfólio" },
  { id: "stack", label: "Tecnologias" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Âncoras de seção: na home o navegador resolve; em outra rota, navega
  // para a home (SPA) e então rola até a seção.
  function goToSection(e: MouseEvent, id: string) {
    setOpen(false);
    if (location.pathname === "/") return;
    e.preventDefault();
    navigate("/");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="shell nav__inner">
        <Link to="/" className="nav__brand" aria-label="NexoCore — início">
          <span className="nav__mark" aria-hidden="true">
            <span className="nav__node" />
            <span className="nav__node" />
            <span className="nav__node" />
          </span>
          Nexo<span className="nav__brand-accent">Core</span>
        </Link>

        <nav className="nav__links" aria-label="Navegação principal">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={(e) => goToSection(e, s.id)}
            >
              {s.label}
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
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  role="menuitem"
                  className="nav__post"
                >
                  <span className="nav__post-title">
                    {p.title.split(":")[0]}
                  </span>
                  <span className="nav__post-note">
                    {p.title.split(":")[1]?.trim() ?? p.tag}
                  </span>
                </Link>
              ))}
              <Link to="/blog" className="nav__posts-all">
                Ver todos os posts →
              </Link>
            </div>
          </div>
        </nav>

        <a
          href="/#contato"
          className="btn btn-primary nav__cta"
          onClick={(e) => goToSection(e, "contato")}
        >
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
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={(e) => goToSection(e, s.id)}
            >
              {s.label}
            </a>
          ))}

          <span className="nav__drawer-label">Posts</span>
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="nav__drawer-post"
              onClick={() => setOpen(false)}
            >
              {p.title.split(":")[0]}
            </Link>
          ))}
          <Link
            to="/blog"
            className="nav__drawer-post"
            onClick={() => setOpen(false)}
          >
            Ver todos os posts
          </Link>

          <a
            href="/#contato"
            className="btn btn-primary"
            onClick={(e) => goToSection(e, "contato")}
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
