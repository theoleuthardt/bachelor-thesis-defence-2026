interface ComparisonItem {
  title: string;
  description: string;
}

interface ComparisonSlideProps {
  title?: string;
  items?: ComparisonItem[];
}

export default function ComparisonSlide({
  title = 'Comparison',
  items = [
    { title: 'Approach A', description: 'Pros and cons.' },
    { title: 'Approach B', description: 'Pros and cons.' },
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