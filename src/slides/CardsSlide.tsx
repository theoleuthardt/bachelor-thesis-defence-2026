interface CardItem {
  icon: string;
  title: string;
  description: string;
}

interface CardsSlideProps {
  title?: string;
  cards?: CardItem[];
  concludingRemark?: string;
}

export default function CardsSlide({
  title = 'Fragmented Content',
  cards = [
    { icon: '★', title: 'Idea 1', description: 'Short description.' },
    { icon: '◆', title: 'Idea 2', description: 'Short description.' },
    { icon: '●', title: 'Idea 3', description: 'Short description.' },
  ],
  concludingRemark = 'Concluding remark.',
}: CardsSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="grid-3" style={{ marginTop: '0.6em' }}>
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
        style={{ marginTop: '1em', fontStyle: 'italic', color: 'var(--text-muted)' }}
      >
        {concludingRemark}
      </p>
      <aside className="notes">Speaker notes.</aside>
    </section>
  );
}