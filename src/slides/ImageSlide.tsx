import type { ImageSlideProps } from "../types";

export default function ImageSlide({
  title = "Abbildung",
  subtitle,
  imageSrc,
  imageAlt = "[Abbildung]",
  bullets = [],
  showPlaceholder = true,
  notes,
}: ImageSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="image-center">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className="slide-image" />
        ) : showPlaceholder ? (
          <div className="image-placeholder">
            <span className="color-muted">{imageAlt}</span>
          </div>
        ) : null}
      </div>
      {bullets.length > 0 && (
        <ul className="bullet-list slide-bullets">
          {bullets.map((b, i) => (
            <li key={i} className="fragment small-text">
              {b}
            </li>
          ))}
        </ul>
      )}
      <aside className="notes">{notes ?? ""}</aside>
    </section>
  );
}
