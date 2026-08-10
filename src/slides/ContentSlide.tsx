import type { ContentSlideProps } from '../types';

export default function ContentSlide({
  title = 'Folientitel',
  content = 'Hier steht der Hauptinhalt dieser Folie — eine kurze Einleitung oder ein einleitender Satz.',
  boxes = [
    { title: 'Erster Punkt', description: 'Beschreibung des ersten Punktes.' },
    { title: 'Zweiter Punkt', description: 'Beschreibung des zweiten Punktes.' },
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