interface SectionHeaderSlideProps {
  number?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionHeaderSlide({
  number = '01',
  title = 'Section One',
  subtitle = 'Subtitle or description',
}: SectionHeaderSlideProps) {
  return (
    <section className="section-header">
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </section>
  );
}