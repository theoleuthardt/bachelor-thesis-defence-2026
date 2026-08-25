import type { VideoSlideProps } from "../types";

export default function VideoSlide({
  title = "Video",
  src,
  bordered = false,
  large = false,
  notes,
}: VideoSlideProps) {
  return (
    <section className="image-grid-slide">
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
