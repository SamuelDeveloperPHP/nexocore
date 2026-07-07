import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Solutions from "./components/Solutions.tsx";
import Segments from "./components/Segments.tsx";
import MobileApp from "./components/MobileApp.tsx";
import Differentials from "./components/Differentials.tsx";
import Portfolio from "./components/Portfolio.tsx";
import StackTestimonials from "./components/StackTestimonials.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import { useReveal } from "./useReveal.ts";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Segments />
        <MobileApp />
        <Differentials />
        <Portfolio />
        <StackTestimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
