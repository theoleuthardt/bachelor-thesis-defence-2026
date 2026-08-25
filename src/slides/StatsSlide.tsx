import References from "../components/References";
import type { StatsSlideProps } from "../types";

export default function StatsSlide({
  title = "Zahlen, die sprechen",
  stats = [
    { value: "95,9 %", label: "WCAG-Verstöße", source: "WebAIM 2024" },
    {
      value: "1,3 Mrd.",
      label: "Menschen mit Behinderung",
      source: "WHO 2022",
    },
  ],
  footer,
  notes,
  references,
}: StatsSlideProps) {
  return (
    <section>
      {title && <h3>{title}</h3>}
      <div className="stats-grid" style={{ marginTop: "0.6em" }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card fragment">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            {s.source && <div className="stat-source">{s.source}</div>}
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
