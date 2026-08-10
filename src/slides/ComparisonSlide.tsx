import type { ComparisonSlideProps } from '../types';

export default function ComparisonSlide({
  title = 'Vergleich',
  items = [
    { title: 'Option A', description: 'Vor- und Nachteile.' },
    { title: 'Option B', description: 'Vor- und Nachteile.' },
  ],
}: ComparisonSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="grid-2" style={{ marginTop: '0.6em' }}>
        {items.map((item, index) => (
          <div key={index} className="card fragment">
            <h4>{item.title}</h4>
            <p className="small-text">{item.description}</p>
          </div>
        ))}
      </div>
      <aside className="notes">Speaker notes.</aside>
    </section>
  );
}