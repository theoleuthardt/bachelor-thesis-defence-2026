import type { VisualSlideProps } from "../types";

export default function VisualSlide({
  title = "Visueller Inhalt",
  subtitle = "Platzhalter für ein Diagramm, Bild oder eine Skizze.",
  imageAlt = "[Bild / Diagramm einfügen]",
  boxes = [
    { label: "Legende 1", description: "Beschreibung." },
    { label: "Legende 2", description: "Beschreibung." },
  ],
}: VisualSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p className="small-text">{subtitle}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.6em",
        }}
      >
        <div
          className="box"
          style={{
            width: "320px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="color-muted">{imageAlt}</span>
        </div>
      </div>
      <div className="grid-2 fragment" style={{ marginTop: "0.8em" }}>
        {boxes.map((box, index) => (
          <div key={index} className="box">
            <p className="small-text">
              <strong>{box.label}</strong> — {box.description}
            </p>
          </div>
        ))}
      </div>
      <aside className="notes"></aside>
    </section>
  );
}
