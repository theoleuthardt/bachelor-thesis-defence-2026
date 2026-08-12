import type { TakeawaysSlideProps } from "../types";

export default function TakeawaysSlide({
  title = "Kernbotschaften",
  items = [
    { title: "Erste Botschaft", description: "Kurze Erläuterung." },
    { title: "Zweite Botschaft", description: "Kurze Erläuterung." },
    { title: "Dritte Botschaft", description: "Kurze Erläuterung." },
  ],
}: TakeawaysSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <ol className="open-questions">
        {items.map((item, index) => (
          <li key={index} className="fragment">
            <span className="highlight">{item.title}</span>
            <br />
            <span className="small-text color-muted">{item.description}</span>
          </li>
        ))}
      </ol>
      <aside className="notes"></aside>
    </section>
  );
}
