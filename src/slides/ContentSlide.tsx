interface ContentSlideProps {
  title?: string;
  content?: string;
  boxes?: Array<{ title: string; description: string }>;
}

export default function ContentSlide({
  title = 'Content Slide',
  content = 'Plain text paragraph with general information.',
  boxes = [
    { title: 'Key Point A', description: 'Description or details.' },
    { title: 'Key Point B', description: 'Description or details.' },
  ],
}: ContentSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="grid-2" style={{ marginTop: '0.6em' }}>
        {boxes.map((box, index) => (
          <div key={index} className="box box-accent">
            <h4>{box.title}</h4>
            <p className="small-text">{box.description}</p>
          </div>
        ))}
      </div>
      <aside className="notes">Speaker notes.</aside>
    </section>
  );
}