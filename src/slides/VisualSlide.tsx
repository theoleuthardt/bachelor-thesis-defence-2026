interface VisualSlideProps {
  title?: string;
  subtitle?: string;
  imageAlt?: string;
  boxes?: Array<{ label: string; description: string }>;
}

export default function VisualSlide({
  title = 'Visual Content',
  subtitle = 'Add an image, diagram, or SVG below.',
  imageAlt = 'Image placeholder',
  boxes = [
    { label: 'Label X', description: 'description.' },
    { label: 'Label Y', description: 'description.' },
  ],
}: VisualSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p className="small-text">{subtitle}</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6em' }}>
        <div
          className="box"
          style={{
            width: '320px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="color-muted">{imageAlt}</span>
        </div>
      </div>
      <div className="grid-2 fragment" style={{ marginTop: '0.8em' }}>
        {boxes.map((box, index) => (
          <div key={index} className="box">
            <p className="small-text">
              <strong>{box.label}</strong> — {box.description}
            </p>
          </div>
        ))}
      </div>
      <aside className="notes">Speaker notes.</aside>
    </section>
  );
}