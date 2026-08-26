import type { AgendaSlideProps } from "../types";
import Logo from "../components/Logo";

export default function AgendaSlide({
  items = [
    "Teilabschnitt 1",
    "Teilabschnitt 2",
    "Teilabschnitt 3",
    "Teilabschnitt 4",
    "Zusammenfassung",
  ],
}: AgendaSlideProps) {
  return (
    <section>
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <h2>Agenda</h2>
      <ol className="toc-list">
        {items.map((item, index) => (
          <li key={index} className="fragment">
            {item}
          </li>
        ))}
      </ol>
      <aside className="notes"></aside>
    </section>
  );
}
