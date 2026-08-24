import Icon from "../components/icons";
import References from "../components/References";
import type { CardsSlideProps } from "../types";

export default function CardsSlide({
  title = "Drei zentrale Aspekte",
  cards = [
    {
      icon: "target",
      title: "Aspekt 1",
      description: "Beschreibung des ersten Aspekts.",
    },
    {
      icon: "layers",
      title: "Aspekt 2",
      description: "Beschreibung des zweiten Aspekts.",
    },
    {
      icon: "award",
      title: "Aspekt 3",
      description: "Beschreibung des dritten Aspekts.",
    },
  ],
  concludingRemark = "Optionaler abschließender Gedanke.",
  columns = 3,
  notes,
  references,
}: CardsSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <div
        className={columns === 2 ? "grid-2" : "grid-3"}
        style={{ marginTop: "0.6em" }}
      >
        {cards.map((card, index) => (
          <div key={index} className="card fragment">
            <div className="icon-badge icon-badge-lg">
              <Icon name={card.icon} />
            </div>
            <h4>{card.title}</h4>
            <p className="small-text">{card.description}</p>
          </div>
        ))}
      </div>
      <p
        className="fragment"
        style={{
          marginTop: "1em",
          fontStyle: "italic",
          color: "var(--text-muted)",
        }}
      >
        {concludingRemark}
      </p>
      <References references={references} />
      <aside className="notes" data-markdown>{notes ?? ""}</aside>
    </section>
  );
}
