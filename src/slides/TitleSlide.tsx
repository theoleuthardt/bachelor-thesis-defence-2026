interface TitleSlideProps {
  title?: string;
  subtitle?: string;
  author?: string;
  date?: string;
}

export default function TitleSlide({
  title = 'Your Title',
  subtitle = 'Your Subtitle',
  author = 'Your Name',
  date = 'Date',
}: TitleSlideProps) {
  return (
    <section className="title-slide">
      <div className="title-bg-grid"></div>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <div className="meta">
        <p>
          {author} &nbsp;·&nbsp; {date}
        </p>
      </div>
      <aside className="notes">Speaker notes for the title slide.</aside>
    </section>
  );
}