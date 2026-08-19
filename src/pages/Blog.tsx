import { useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts.ts";
import { useReveal } from "../useReveal.ts";
import "./Blog.css";

export default function Blog() {
  useReveal();

  useEffect(() => {
    document.title = "Blog — NexoCore Tecnologia";
    return () => {
      document.title =
        "NexoCore Tecnologia — Gestão QSMS, ERP, Frotas e Planejamento de Produção";
    };
  }, []);

  return (
    <main className="section blog">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">// blog</span>
          <h2>Conteúdo técnico e novidades.</h2>
          <p>
            Artigos práticos sobre desenvolvimento, ferramentas e as tecnologias
            que usamos para construir software sob medida.
          </p>
        </div>

        <div className="blog__grid">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog__card glass reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="blog__card-top">
                <span className="blog__tag">{post.tag}</span>
                <span className="blog__read">{post.readTime}</span>
              </div>
              <h3 className="blog__card-title">{post.title}</h3>
              <p className="blog__card-excerpt">{post.excerpt}</p>
              <div className="blog__card-foot">
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span className="blog__more">
                  Ler post
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 8h8M8.5 4.5L12 8l-3.5 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
