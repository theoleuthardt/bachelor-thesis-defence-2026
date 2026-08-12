import Logo from "../components/Logo";
import type { ClosingSlideProps } from "../types";

export default function ClosingSlide({
  title = "Vielen Dank.",
  message = "Gibt es Fragen?",
  author = "Theo Leuthardt",
  email = "theo.leuthardt@bdr.de",
  company = "Bundesdruckerei GmbH",
}: ClosingSlideProps) {
  return (
    <section className="closing-slide">
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <div className="closing-content">
        <h2 className="closing-title">{title}</h2>
        <p className="closing-message">{message}</p>
        <div className="closing-contact">
          <div className="closing-contact-row">
            <span className="closing-contact-label">Verfasser</span>
            <span>{author}</span>
          </div>
          <div className="closing-contact-row">
            <span className="closing-contact-label">E-Mail</span>
            <span>{email}</span>
          </div>
          <div className="closing-contact-row">
            <span className="closing-contact-label">Unternehmen</span>
            <span>{company}</span>
          </div>
        </div>
      </div>
      <aside className="notes">Thank the audience and open the floor.</aside>
    </section>
  );
}
