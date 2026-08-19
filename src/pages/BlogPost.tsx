import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../data/posts.ts";
import { useReveal } from "../useReveal.ts";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  useReveal();

  useEffect(() => {
    if (post) document.title = `${post.title} — NexoCore`;
    return () => {
      document.title =
        "NexoCore Tecnologia — Gestão QSMS, ERP, Frotas e Planejamento de Produção";
    };
  }, [post]);

  if (!post) {
    return (
      <main className="section post post--empty">
        <div className="shell">
          <span className="eyebrow">// 404</span>
          <h2>Post não encontrado</h2>
          <p>O conteúdo que você procura não existe ou foi movido.</p>
          <Link to="/blog" className="btn btn-ghost">
            Voltar ao blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section post">
      <div className="shell post__shell">
        <Link to="/blog" className="post__back">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M12 8H4M7.5 4.5L4 8l3.5 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Blog
        </Link>

        <header className="post__head">
          <div className="post__meta">
            <span className="post__tag">{post.tag}</span>
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span className="post__dot" aria-hidden="true">
              ·
            </span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="post__title">{post.title}</h1>
          <p className="post__intro">{post.intro}</p>
          <div className="post__legend">
            <span className="post__legend-item">
              <i className="post__dotmark post__dotmark--ok" /> Permissiva (MIT /
              BSD)
            </span>
            <span className="post__legend-item">
              <i className="post__dotmark post__dotmark--warn" /> Copyleft ou
              comercial
            </span>
          </div>
        </header>

        <div className="post__body">
          {post.groups.map((group) => (
            <section key={group.framework} className="post__group">
              <div className="post__group-head">
                <h2>{group.framework}</h2>
                <span className="post__count">{group.libs.length}</span>
                <span className="post__group-rule" />
              </div>

              <ul className="post__libs">
                {group.libs.map((lib) => (
                  <li key={lib.name}>
                    <a
                      className={`post__lib ${lib.permissive ? "" : "post__lib--warn"}`}
                      href={lib.href}
                      target="_blank"
                      rel="noopener"
                    >
                      <span className="post__lib-main">
                        <span className="post__lib-name">
                          {lib.name}
                          <svg
                            className="post__lib-arrow"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            aria-hidden="true"
                          >
                            <path
                              d="M4 10L10 4M5 4h5v5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="post__lib-note">{lib.note}</span>
                      </span>
                      <span className="post__lib-meta">
                        <span
                          className={`post__chip ${lib.permissive ? "" : "post__chip--warn"}`}
                        >
                          {lib.license}
                        </span>
                        <span className="post__stack">{lib.stack}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="post__foot">
          <p className="post__note">
            <strong>Sobre licenças:</strong> para código proprietário, prefira as
            permissivas — <strong>MIT</strong>, <strong>BSD</strong> e{" "}
            <strong>Apache-2.0</strong>. Evite <strong>GPL/AGPL</strong> em
            componentes servidos ao navegador. Confirme sempre a licença e o
            status de manutenção no repositório antes de adotar em produção.
          </p>
          <p className="post__sources">
            Fontes:{" "}
            {post.sources.map((s, i) => (
              <span key={s.href}>
                <a href={s.href} target="_blank" rel="noopener">
                  {s.label}
                </a>
                {i < post.sources.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          <Link to="/blog" className="btn btn-ghost">
            ← Ver todos os posts
          </Link>
        </footer>
      </div>
    </main>
  );
}
