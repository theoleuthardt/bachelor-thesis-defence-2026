import type { CardsSlideProps } from "../types";

export default function CardsSlide({
  title = "Drei zentrale Aspekte",
  cards = [
    {
      icon: "★",
      title: "Aspekt 1",
      description: "Beschreibung des ersten Aspekts.",
    },
    {
      icon: "◆",
      title: "Aspekt 2",
      description: "Beschreibung des zweiten Aspekts.",
    },
    {
      icon: "●",
      title: "Aspekt 3",
      description: "Beschreibung des dritten Aspekts.",
    },
  ],
  concludingRemark = "Optionaler abschließender Gedanke.",
}: CardsSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="grid-3" style={{ marginTop: "0.6em" }}>
        {cards.map((card, index) => (
          <div key={index} className="card fragment">
            <div className="card-icon">{card.icon}</div>
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
      <aside className="notes"></aside>
    </section>
  );
}
