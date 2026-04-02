interface DefinitionSlideProps {
  title?: string;
  formalName?: string;
  description?: string;
  formula?: string;
}

export default function DefinitionSlide({
  title = 'Definition',
  formalName = 'Formal Name',
  description = 'Description or formula here.',
  formula = '$$E = mc^2$$',
}: DefinitionSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="box box-accent">
        <p>
          <strong>{formalName}</strong>
        </p>
        <p className="small-text" style={{ marginTop: '0.3em' }}>
          {description}
        </p>
      </div>
      <div className="formula-box fragment" style={{ marginTop: '0.8em' }}>
        {formula}
      </div>
      <aside className="notes">Speaker notes.</aside>
    </section>
  );
}