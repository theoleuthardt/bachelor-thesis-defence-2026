import type { BulletSlideProps } from "../types";

export default function BulletSlide({
  title = "Folientitel",
  subtitle,
  bullets = [
    { text: "Erster Punkt", subitems: ["Detail 1", "Detail 2"] },
    { text: "Zweiter Punkt" },
  ],
  columns = 1,
  notes,
}: BulletSlideProps) {
  const isTwoCol = columns === 2 && bullets.length > 1;
  const half = Math.ceil(bullets.length / 2);
  const cols = isTwoCol
    ? [bullets.slice(0, half), bullets.slice(half)]
    : [bullets];

  return (
    <section>
      <h3>{title}</h3>
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div
        className={isTwoCol ? "grid-2 bullet-grid" : "bullet-grid"}
        style={{ marginTop: "0.3em" }}
      >
        {cols.map((col, ci) => (
          <ul key={ci} className="bullet-list">
            {col.map((b, i) => (
              <li key={i} className="fragment">
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
      <aside className="notes">{notes ?? ""}</aside>
    </section>
  );
}
