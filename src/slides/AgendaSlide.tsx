import type { AgendaSlideProps } from "../types";

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
