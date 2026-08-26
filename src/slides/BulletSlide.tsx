import Icon from "../components/icons";
import References from "../components/References";
import type { BulletSlideProps } from "../types";
import Logo from "../components/Logo";

export default function BulletSlide({
  title = "Folientitel",
  subtitle,
  bullets = [
    { text: "Erster Punkt", subitems: ["Detail 1", "Detail 2"] },
    { text: "Zweiter Punkt" },
  ],
  columns = 1,
  variant = "list",
  notes,
  references,
}: BulletSlideProps) {
  const isTwoCol = columns === 2 && bullets.length > 1;
  const half = Math.ceil(bullets.length / 2);
  const cols = isTwoCol
    ? [bullets.slice(0, half), bullets.slice(half)]
    : [bullets];
  const listClass =
    variant === "icon" ? "bullet-list bullet-list-icon" : "bullet-list";

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
      <div
        className={isTwoCol ? "grid-2 bullet-grid" : "bullet-grid"}
        style={{ marginTop: "0.3em" }}
      >
        {cols.map((col, ci) => (
          <ul key={ci} className={listClass}>
            {col.map((b, i) => (
              <li key={i} className="fragment">
                {variant === "icon" && b.icon && (
                  <span className="icon-badge icon-badge-sm bullet-icon">
                    <Icon name={b.icon} />
                  </span>
                )}
                <span className="bullet-text">{b.text}</span>
                {b.subitems && b.subitems.length > 0 && (
                  <ul className="sub-bullets">
                    {b.subitems.map((s, si) => (
                      <li key={si}>{s}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
