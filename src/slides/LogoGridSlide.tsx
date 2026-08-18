import References from "../components/References";
import type { LogoGridSlideProps } from "../types";

export default function LogoGridSlide({
  title = "Technologien",
  subtitle,
  logos = [],
  columns = 3,
  footer,
  notes,
  references,
}: LogoGridSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div
        className={
          columns === 2 ? "grid-2" : columns === 4 ? "grid-4" : "grid-3"
        }
        style={{ marginTop: "0.6em" }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="logo-card fragment">
            <img
              src={logo.src}
              alt={logo.alt ?? logo.label}
              className="logo-card-img"
            />
            <p className="logo-card-label">{logo.label}</p>
          </div>
        ))}
      </div>
      {footer && <p className="fragment slide-footer">{footer}</p>}
      <References references={references} />
      <aside className="notes">{notes ?? ""}</aside>
    </section>
  );
}
