import References from "../components/References";
import type { BadgeGridSlideProps } from "../types";

export default function BadgeGridSlide({
  title = "Übersicht",
  subtitle,
  groups = [],
  tone = "blue",
  footer,
  notes,
  references,
}: BadgeGridSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="badge-grid-groups">
        {groups.map((group, gi) => (
          <div key={gi} className="badge-grid-group fragment">
            <p className="badge-grid-group-label small-text">{group.label}</p>
            <div className="badge-grid">
              {group.items.map((item, ii) => (
                <span key={ii} className={`badge badge-${tone}`}>
                  {item}
                </span>
              ))}
            </div>
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
