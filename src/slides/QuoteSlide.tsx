import type { QuoteSlideProps } from '../types';

export default function QuoteSlide({
  title = 'Forschungsfrage',
  quote = 'Zitat oder Frage.',
  attribution,
  notes,
}: QuoteSlideProps) {
  return (
    <section className="quote-slide">
      {title && <h3>{title}</h3>}
      <blockquote className="quote-block">
        <p className="quote-text">{quote}</p>
        {attribution && <footer className="quote-attribution">{attribution}</footer>}
      </blockquote>
      <aside className="notes">{notes ?? ''}</aside>
    </section>
  );
}