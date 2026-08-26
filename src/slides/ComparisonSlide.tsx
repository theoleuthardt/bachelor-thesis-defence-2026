import Icon from "../components/icons";
import type { ComparisonSlideProps } from "../types";
import Logo from "../components/Logo";

export default function ComparisonSlide({
  title = "Vergleich",
  subtitle,
  items = [
    { title: "Option A", description: "Vor- und Nachteile." },
    { title: "Option B", description: "Vor- und Nachteile." },
  ],
  layout = "cards",
  footer,
  notes,
}: ComparisonSlideProps) {
  if (layout === "split" && items.length === 2) {
    return (
      <section>
        <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
        <Logo
          src="/HWR.png"
          alt="Hochschule für Wirtschaft und Recht"
          position="top-right"
          width={230}
        />
        <h3>{title}</h3>
        <div className="comparison-split">
          {items.map((item, index) => (
            <div key={index} className="comparison-split-panel fragment">
              <span className="icon-badge icon-badge-lg">
                {item.icon && <Icon name={item.icon} />}
              </span>
              <h4>{item.title}</h4>
              <p className="small-text">{item.description}</p>
            </div>
          ))}
        </div>
        {footer && <p className="fragment slide-footer">{footer}</p>}
        <aside className="notes" data-markdown>
          {notes ?? ""}
        </aside>
      </section>
    );
  }

  const isTall = items.length > 4;
  return (
    <section className={isTall ? "cards-slide" : undefined}>
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <h3>{title}</h3>
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div
        className={
          items.length > 2 ? "comparison-grid-2x2" : "grid-2 comparison-grid-2"
        }
        style={{ marginTop: isTall ? "0.3em" : "0.6em" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`card comparison-card fragment ${item.status ? `comparison-card-${item.status}` : ""}`}
          >
            <div className="comparison-card-header">
              {item.icon && (
                <span className="icon-badge icon-badge-sm">
                  <Icon name={item.icon} />
                </span>
              )}
              <h4>{item.title}</h4>
            </div>
            <p className="small-text">{item.description}</p>
          </div>
        ))}
      </div>
      {footer && <p className="fragment slide-footer">{footer}</p>}
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
