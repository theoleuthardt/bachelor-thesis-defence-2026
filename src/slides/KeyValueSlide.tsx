import type { KeyValueSlideProps } from '../types';

export default function KeyValueSlide({
  title = 'Kernpunkte',
  subtitle,
  items = [
    { label: 'Aspekt', value: 'Wert' },
    { label: 'Aspekt', value: 'Wert' },
  ],
  footer,
  notes,
}: KeyValueSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="kv-list" style={{ marginTop: '0.3em' }}>
        {items.map((it, i) => (
          <div key={i} className="kv-row fragment">
            <span className="kv-label">{it.label}</span>
            <span className="kv-value">{it.value}</span>
          </div>
        ))}
      </div>
      {footer && (
        <p className="fragment slide-footer">{footer}</p>
      )}
      <aside className="notes">{notes ?? ''}</aside>
    </section>
  );
}