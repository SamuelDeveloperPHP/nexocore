import "./WhatsApp.css";

const NUMBER = "5541988885871";
const MESSAGE =
  "Olá! Vim pelo site da NexoCore e gostaria de saber mais sobre as soluções de gestão.";

export default function WhatsApp() {
  const href = `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      className="wa-float"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar com a NexoCore no WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 4C9.53 4 4.25 9.28 4.25 15.79c0 2.08.55 4.11 1.6 5.9L4 28l6.48-1.7a11.7 11.7 0 0 0 5.56 1.42h.01c6.5 0 11.79-5.28 11.79-11.79 0-3.15-1.23-6.11-3.46-8.34A11.7 11.7 0 0 0 16.04 4zm0 2.15c2.57 0 4.98 1 6.8 2.82a9.56 9.56 0 0 1 2.82 6.82c0 5.31-4.32 9.63-9.62 9.63h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.2-3.63.95.97-3.54-.23-.36a9.55 9.55 0 0 1-1.46-5.1c0-5.31 4.32-9.64 9.62-9.64zm5.5 12.13c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
      <span className="wa-float__label">Fale conosco</span>
    </a>
  );
}
