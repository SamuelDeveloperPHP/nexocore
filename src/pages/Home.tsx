import { useEffect } from "react";
import Hero from "../components/Hero.tsx";
import About from "../components/About.tsx";
import Solutions from "../components/Solutions.tsx";
import Segments from "../components/Segments.tsx";
import MobileApp from "../components/MobileApp.tsx";
import Differentials from "../components/Differentials.tsx";
import Portfolio from "../components/Portfolio.tsx";
// import Chassis3DViewer from "../components/Chassis3DViewer.tsx"; // seção 3D do caminhão desativada (arquivos preservados)
import StackTestimonials from "../components/StackTestimonials.tsx";
import Contact from "../components/Contact.tsx";
import { useReveal } from "../useReveal.ts";

export default function Home() {
  useReveal();

  // Ao chegar na home com uma âncora (ex.: vindo de /blog para /#contato),
  // rola até a seção depois que o conteúdo montou.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      window.setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Solutions />
      <Segments />
      <MobileApp />
      <Differentials />
      <Portfolio />
      {/* <Chassis3DViewer /> — seção das vistas do caminhão temporariamente removida */}
      <StackTestimonials />
      <Contact />
    </main>
  );
}
