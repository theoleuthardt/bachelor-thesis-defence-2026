interface AgendaSlideProps {
  items?: string[];
}

export default function AgendaSlide({
  items = ['Section One', 'Section Two', 'Section Three', 'Section Four', 'Summary & Conclusion'],
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
      <aside className="notes">Brief overview of the talk structure.</aside>
    </section>
  );
}