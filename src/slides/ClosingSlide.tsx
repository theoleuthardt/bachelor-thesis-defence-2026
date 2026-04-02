interface ClosingSlideProps {
  title?: string;
  message?: string;
  supportingText?: string;
}

export default function ClosingSlide({
  title = 'Thank You!',
  message = 'A final summary statement or quote.',
  supportingText = 'Supporting detail or call to action.',
}: ClosingSlideProps) {
  return (
    <section className="title-slide closing-slide">
      <h2>{title}</h2>
      <div className="box closing-box">
        <p>{message}</p>
        <p className="small-text color-muted" style={{ marginTop: '0.6em' }}>
          {supportingText}
        </p>
      </div>
      <p className="small-text color-muted" style={{ marginTop: '1.2em' }}>
        Questions?
      </p>
      <aside className="notes">Thank the audience and open the floor.</aside>
    </section>
  );
}