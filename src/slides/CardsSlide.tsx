import Icon from "../components/icons";
import References from "../components/References";
import type { CardsSlideProps } from "../types";
import Logo from "../components/Logo";

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
  minimal = false,
  centerVertically = false,
  notes,
  references,
}: CardsSlideProps) {
  const rows = Math.ceil(cards.length / columns);
  const isTall = rows > 1 && !centerVertically;
  return (
    <section className={isTall ? "cards-slide" : undefined}>
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <h3>{title}</h3>
      <div
        className={
          columns === 2
            ? "cards-grid-2"
            : columns === 5
              ? "cards-grid-5"
              : "cards-grid-3"
        }
        style={{ marginTop: isTall ? "0.3em" : "0.6em" }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={minimal ? "card card-minimal fragment" : "card fragment"}
          >
            {card.iconVisual ?? (
              <div className="icon-badge icon-badge-lg">
                <Icon name={card.icon} />
              </div>
            )}
            <h4>{card.title}</h4>
            <p className="small-text">{card.description}</p>
          </div>
        ))}
      </div>
      {concludingRemark && (
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
      )}
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
