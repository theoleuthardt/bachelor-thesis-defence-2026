interface TakeawayItem {
  title: string;
  description: string;
}

interface TakeawaysSlideProps {
  title?: string;
  items?: TakeawayItem[];
}

export default function TakeawaysSlide({
  title = 'Takeaways',
  items = [
    { title: 'Key takeaway 1', description: 'Short elaboration.' },
    { title: 'Key takeaway 2', description: 'Short elaboration.' },
    { title: 'Key takeaway 3', description: 'Short elaboration.' },
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
      <aside className="notes">Speaker notes.</aside>
    </section>
  );
}