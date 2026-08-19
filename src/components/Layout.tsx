import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import WhatsApp from "./WhatsApp.tsx";

export default function Layout() {
  const { pathname } = useLocation();

  // Sobe ao topo ao trocar de rota (a menos que haja uma âncora a resolver).
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
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
