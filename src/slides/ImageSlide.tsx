import References from "../components/References";
import type { ImageSlideProps } from "../types";

export default function ImageSlide({
  title = "Abbildung",
  subtitle,
  imageSrc,
  imageAlt = "[Abbildung]",
  imageWidth,
  imageHeight,
  bullets = [],
  showPlaceholder = true,
  notes,
  imageClassName,
  references,
}: ImageSlideProps) {
  return (
    <section className="image-slide">
      {title && <h3 className="image-slide-title">{title}</h3>}
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="image-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={`slide-image ${imageClassName ?? ""}`}
          />
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
      <References references={references} />
      <aside className="notes">{notes ?? ""}</aside>
    </section>
  );
}
