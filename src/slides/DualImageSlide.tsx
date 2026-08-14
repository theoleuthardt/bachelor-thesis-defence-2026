import References from "../components/References";
import type { DualImageSlideProps } from "../types";

export default function DualImageSlide({
  title = "Abbildung",
  subtitle,
  leftSrc,
  leftAlt = "[Links]",
  rightSrc,
  rightAlt = "[Rechts]",
  leftLabel,
  rightLabel,
  notes,
  references,
}: DualImageSlideProps) {
  return (
    <section className="image-slide">
      {title && <h3 className="image-slide-title">{title}</h3>}
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="dual-image-container">
        <div className="dual-image-item">
          {leftSrc ? (
            <img
              src={leftSrc}
              alt={leftAlt}
              className="slide-image dual-image"
            />
          ) : (
            <div className="image-placeholder">
              <span className="color-muted">{leftAlt}</span>
            </div>
          )}
          {leftLabel && (
            <p className="dual-image-label small-text">{leftLabel}</p>
          )}
        </div>
        <div className="dual-image-item">
          {rightSrc ? (
            <img
              src={rightSrc}
              alt={rightAlt}
              className="slide-image dual-image"
            />
          ) : (
            <div className="image-placeholder">
              <span className="color-muted">{rightAlt}</span>
            </div>
          )}
          {rightLabel && (
            <p className="dual-image-label small-text">{rightLabel}</p>
          )}
        </div>
      </div>
      <References references={references} />
      <aside className="notes">{notes ?? ""}</aside>
    </section>
  );
}
