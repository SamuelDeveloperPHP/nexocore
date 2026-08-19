import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import WhatsApp from "./WhatsApp.tsx";

export default function Layout() {
  const { pathname } = useLocation();

  // Sobe ao topo ao trocar de rota (a menos que haja uma âncora a resolver)
  // e ativa o tema claro apenas nas rotas do blog.
  useEffect(() => {
    document.body.classList.toggle("theme-light", pathname.startsWith("/blog"));
    if (!window.location.hash) window.scrollTo(0, 0);
    return () => document.body.classList.remove("theme-light");
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsApp />
    </>
  );
}
