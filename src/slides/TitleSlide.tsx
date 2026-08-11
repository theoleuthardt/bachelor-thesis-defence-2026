import Logo from '../components/Logo';
import type { TitleSlideProps } from '../types';

export default function TitleSlide({
  title = 'Natural Language\nWeb Interaction',
  subtitle = 'Ein lokaler LLM-basierter Agent\nfür barrierearme Webseitennutzung',
  author = 'Theo Leuthardt',
  date = '01.09.2026',
}: TitleSlideProps) {
  return (
    <section className="title-slide">
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo src="/HWR.png" alt="Hochschule für Wirtschaft und Recht" position="top-right" width={180} />
      <h1>{title.split('\n').map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}</h1>
      <p className="subtitle">{subtitle.split('\n').map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}</p>
      <div className="meta">
        <p>
          {author} &nbsp;·&nbsp; {date}
        </p>
      </div>
      <aside className="notes"></aside>
    </section>
  );
}