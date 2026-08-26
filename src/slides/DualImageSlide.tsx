import { Fragment } from "react";
import Icon from "../components/icons";
import References from "../components/References";
import type { DualImageSlideProps } from "../types";
import Logo from "../components/Logo";

export default function DualImageSlide({
  title = "Abbildung",
  subtitle,
  leftSrc,
  leftAlt = "[Links]",
  leftVisual,
  rightSrc,
  rightAlt = "[Rechts]",
  rightVisual,
  leftLabel,
  rightLabel,
  belowRow,
  belowCaption,
  staggerReveal = false,
  centerVertically = false,
  notes,
  references,
}: DualImageSlideProps) {
  return (
    <section
      className={
        centerVertically ? "image-slide image-slide-centered" : "image-slide"
      }
    >
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      {title && <h3 className="image-slide-title">{title}</h3>}
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="dual-image-container">
        <div
          className={
            staggerReveal ? "dual-image-item fragment" : "dual-image-item"
          }
          data-fragment-index={staggerReveal ? 0 : undefined}
        >
          {leftVisual ? (
            leftVisual
          ) : leftSrc ? (
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
        <div
          className={
            staggerReveal ? "dual-image-item fragment" : "dual-image-item"
          }
          data-fragment-index={staggerReveal ? 1 : undefined}
        >
          {rightVisual ? (
            rightVisual
          ) : rightSrc ? (
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
      {belowRow && belowRow.length > 0 && (
        <div
          className="pipeline-mini fragment"
          data-fragment-index={staggerReveal ? 2 : undefined}
        >
          {belowRow.map((n, i) => (
            <Fragment key={i}>
              {i > 0 && <div className="pipeline-mini-arrow">→</div>}
              <div className="pipeline-node">
                <div className="icon-badge icon-badge-lg">
                  <Icon name={n.icon} />
                </div>
                <div className="pipeline-node-label">{n.label}</div>
              </div>
            </Fragment>
          ))}
        </div>
      )}
      {belowCaption && (
        <p
          className="fragment slide-footer"
          data-fragment-index={staggerReveal ? 3 : undefined}
        >
          {belowCaption}
        </p>
      )}
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
