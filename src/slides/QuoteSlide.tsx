import References from "../components/References";
import type { QuoteSlideProps } from "../types";
import Logo from "../components/Logo";

export default function QuoteSlide({
  title = "Forschungsfrage",
  quote = "Zitat oder Frage.",
  attribution,
  notes,
  references,
}: QuoteSlideProps) {
  return (
    <section className="quote-slide">
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      {title && <h3>{title}</h3>}
      <blockquote className="quote-block">
        <p className="quote-text">{quote}</p>
        {attribution && (
          <footer className="quote-attribution">{attribution}</footer>
        )}
      </blockquote>
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
