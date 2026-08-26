import type { VideoSlideProps } from "../types";
import Logo from "../components/Logo";

export default function VideoSlide({
  title = "Video",
  src,
  bordered = false,
  large = false,
  notes,
}: VideoSlideProps) {
  return (
    <section className="image-grid-slide">
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <h3>{title}</h3>
      <div
        className={`image-grid image-grid-1 ${large ? "image-grid-1-large" : ""}`}
      >
        <div className="image-grid-cell">
          <video
            src={src}
            controls
            className={`image-grid-item ${bordered ? "image-grid-item-border" : ""}`}
          />
        </div>
      </div>
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
