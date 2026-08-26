import Icon from "../components/icons";
import References from "../components/References";
import type { StateMachineSlideProps } from "../types";
import Logo from "../components/Logo";

export default function StateMachineSlide({
  title = "Zustandsautomat",
  subtitle,
  entry,
  states = [],
  caption,
  notes,
  references,
}: StateMachineSlideProps) {
  const radiusX = 44;
  const radiusY = 42;
  const count = states.length;

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
      {entry && <p className="fsm-entry small-text">{entry}</p>}
      <div className="fsm-diagram">
        <div className="fsm-ring" />
        <div className="fsm-center">
          <Icon name="repeat" />
        </div>
        {states.map((s, i) => {
          const angle = (2 * Math.PI * i) / count - Math.PI / 2;
          const x = 50 + radiusX * Math.cos(angle);
          const y = 50 + radiusY * Math.sin(angle);
          return (
            <div
              key={i}
              className="fsm-node fragment"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {s.label}
            </div>
          );
        })}
      </div>
      {caption && <p className="fragment slide-footer">{caption}</p>}
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
