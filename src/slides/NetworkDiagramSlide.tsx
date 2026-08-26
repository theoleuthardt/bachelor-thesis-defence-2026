import Icon from "../components/icons";
import References from "../components/References";
import type { NetworkDiagramSlideProps } from "../types";
import Logo from "../components/Logo";

const CX = 320;
const CY = 272;
const RADIUS_X = 250;
const RADIUS_Y = 192;

export default function NetworkDiagramSlide({
  title = "Architektur",
  subtitle,
  hub = { icon: "cpu", label: "Hub" },
  spokes = [],
  caption,
  notes,
  references,
}: NetworkDiagramSlideProps) {
  const count = spokes.length;
  const positions = spokes.map((_, i) => {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    return {
      x: CX + RADIUS_X * Math.cos(angle),
      y: CY + RADIUS_Y * Math.sin(angle),
    };
  });

  return (
    <section className="cards-slide">
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <h3>{title}</h3>
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="netdiag-diagram">
        <svg
          className="netdiag-lines fragment"
          data-fragment-index={1}
          viewBox={`0 0 ${CX * 2} ${CY * 2}`}
          preserveAspectRatio="none"
        >
          {positions.map((p, i) => (
            <line key={i} x1={CX} y1={CY} x2={p.x} y2={p.y} />
          ))}
        </svg>
        {positions.map((p, i) => (
          <div
            key={i}
            className="netdiag-packet fragment"
            data-fragment-index={1}
            style={{
              offsetPath: `path("M ${CX} ${CY} L ${p.x} ${p.y}")`,
              animationDelay: `${(i * 2.4) / count}s`,
            }}
          />
        ))}
        <div className="netdiag-hub fragment" data-fragment-index={0}>
          <div className="icon-badge icon-badge-lg">
            <Icon name={hub.icon} />
          </div>
          <div className="netdiag-hub-label">{hub.label}</div>
        </div>
        {spokes.map((s, i) => (
          <div
            key={i}
            className="netdiag-node fragment"
            data-fragment-index={2 + i}
            style={{
              left: `${(positions[i].x / (CX * 2)) * 100}%`,
              top: `${(positions[i].y / (CY * 2)) * 100}%`,
            }}
          >
            <div className="icon-badge icon-badge-sm">
              <Icon name={s.icon} />
            </div>
            <div className="netdiag-node-label">{s.label}</div>
          </div>
        ))}
      </div>
      {caption && (
        <p className="fragment slide-footer" data-fragment-index={2 + count}>
          {caption}
        </p>
      )}
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
