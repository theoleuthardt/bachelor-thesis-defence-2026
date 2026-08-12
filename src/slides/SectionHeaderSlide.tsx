import Logo from "../components/Logo";
import type { SectionHeaderSlideProps } from "../types";

export default function SectionHeaderSlide({
  number = "01",
  title = "Titel des Teilabschnitts",
  subtitle,
}: SectionHeaderSlideProps) {
  return (
    <section className="section-header">
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </section>
  );
}
