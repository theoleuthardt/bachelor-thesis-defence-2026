import type { ImageGridSlideProps } from "../types";

export default function ImageGridSlide({
  title = "Abbildungen",
  images = [],
  columns = 3,
  bordered = false,
  notes,
}: ImageGridSlideProps) {
  return (
    <section className="image-grid-slide">
      <h3>{title}</h3>
      <div
        className={`image-grid ${
          columns === 1
            ? "image-grid-1"
            : columns === 2
              ? "image-grid-2"
              : "image-grid-3"
        }`}
      >
        {images.map((img, index) => (
          <figure key={index} className="image-grid-cell">
            <img
              src={img.src}
              alt={img.alt ?? ""}
              className={`image-grid-item ${bordered ? "image-grid-item-border" : ""}`}
            />
            {img.caption && (
              <figcaption className="image-grid-caption">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
