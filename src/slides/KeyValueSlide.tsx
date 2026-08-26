import References from "../components/References";
import type { KeyValueSlideProps } from "../types";
import Logo from "../components/Logo";

export default function KeyValueSlide({
  title = "Kernpunkte",
  subtitle,
  items = [
    { label: "Aspekt", value: "Wert" },
    { label: "Aspekt", value: "Wert" },
  ],
  footer,
  notes,
  references,
}: KeyValueSlideProps) {
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
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="kv-list" style={{ marginTop: "0.3em" }}>
        {items.map((it, i) => (
          <div
            key={i}
            className={`kv-row fragment ${it.status ? `kv-row-${it.status}` : ""}`}
          >
            <span className="kv-label">{it.label}</span>
            <span className="kv-value">{it.value}</span>
          </div>
        ))}
      </div>
      {footer && <p className="fragment slide-footer">{footer}</p>}
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
