import Icon from "../components/icons";
import type { TakeawaysSlideProps } from "../types";

export default function TakeawaysSlide({
  title = "Kernbotschaften",
  items = [
    { title: "Erste Botschaft", description: "Kurze Erläuterung." },
    { title: "Zweite Botschaft", description: "Kurze Erläuterung." },
    { title: "Dritte Botschaft", description: "Kurze Erläuterung." },
  ],
  variant = "numbered",
  notes,
}: TakeawaysSlideProps) {
  if (variant === "funnel") {
    return (
      <section>
        <h3>{title}</h3>
        <div className="defense-stack">
          {items.map((item, index) => (
            <div key={index} className="defense-layer fragment">
              <div className="icon-badge icon-badge-md">
                {item.icon && <Icon name={item.icon} />}
              </div>
              <div className="defense-layer-title">{item.title}</div>
              <div className="defense-layer-desc">{item.description}</div>
            </div>
          ))}
        </div>
        <aside className="notes">{notes ?? ""}</aside>
      </section>
    );
  }

  return (
    <section>
      <h3>{title}</h3>
      <ol className="open-questions">
        {items.map((item, index) => (
          <li key={index} className="fragment">
            <span className="oq-badge oq-badge-number">
              {item.icon ? <Icon name={item.icon} /> : index + 1}
            </span>
            <span className="highlight">{item.title}</span>
            <br />
            <span className="small-text color-muted">{item.description}</span>
          </li>
        ))}
      </ol>
      <aside className="notes">{notes ?? ""}</aside>
    </section>
  );
}
