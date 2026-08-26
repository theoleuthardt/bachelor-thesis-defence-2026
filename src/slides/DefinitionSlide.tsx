import References from "../components/References";
import type { DefinitionSlideProps } from "../types";
import Logo from "../components/Logo";

export default function DefinitionSlide({
  title = "Definition",
  formalName = "Begriff",
  description = "Beschreibung oder Erklärung des Begriffs.",
  formula = "$$Beispiel-Formel$$",
  notes,
  references,
}: DefinitionSlideProps) {
  return (
    <section>
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <h3>{title}</h3>
      <div className="box box-accent">
        <p>
          <strong>{formalName}</strong>
        </p>
        <p className="small-text" style={{ marginTop: "0.3em" }}>
          {description}
        </p>
      </div>
      <div className="formula-box fragment" style={{ marginTop: "0.8em" }}>
        {formula}
      </div>
      <References references={references} />
      <aside className="notes">{notes ?? ""}</aside>
    </section>
  );
}
