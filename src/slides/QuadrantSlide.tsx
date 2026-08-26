import References from "../components/References";
import type { QuadrantSlideProps } from "../types";
import Logo from "../components/Logo";

export default function QuadrantSlide({
  title = "Positionierung",
  subtitle,
  xAxisLabels = ["Links", "Rechts"],
  yAxisLabels = ["Oben", "Unten"],
  points = [],
  caption,
  notes,
  references,
}: QuadrantSlideProps) {
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
      <div className="quadrant">
        <span className="quadrant-y-label">{yAxisLabels[0]}</span>
        <div className="quadrant-row">
          <span className="quadrant-x-label">{xAxisLabels[0]}</span>
          <div className="quadrant-plot">
            <div className="quadrant-cross-h" />
            <div className="quadrant-cross-v" />
            {points.map((p, i) => (
              <div
                key={i}
                className={`quadrant-point fragment ${p.variant === "target" ? "quadrant-point-target" : ""}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                {p.label}
              </div>
            ))}
          </div>
          <span className="quadrant-x-label">{xAxisLabels[1]}</span>
        </div>
        <span className="quadrant-y-label">{yAxisLabels[1]}</span>
      </div>
      {caption && <p className="fragment slide-footer">{caption}</p>}
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
