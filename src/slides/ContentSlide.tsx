import Icon from "../components/icons";
import References from "../components/References";
import type { ContentSlideProps } from "../types";

export default function ContentSlide({
  title = "Folientitel",
  content = "Hier steht der Hauptinhalt dieser Folie. Eine kurze Einleitung oder ein einleitender Satz.",
  boxes = [
    { title: "Erster Punkt", description: "Beschreibung des ersten Punktes." },
    {
      title: "Zweiter Punkt",
      description: "Beschreibung des zweiten Punktes.",
    },
  ],
  notes,
  references,
}: ContentSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="grid-2" style={{ marginTop: "0.7em" }}>
        {boxes.map((box, index) => (
          <div key={index} className="box box-accent fragment">
            {box.icon && (
              <div className="icon-badge icon-badge-md">
                <Icon name={box.icon} />
              </div>
            )}
            <h4>{box.title}</h4>
            <p className="small-text">{box.description}</p>
          </div>
        ))}
      </div>
      <References references={references} />
      <aside className="notes" data-markdown>{notes ?? ""}</aside>
    </section>
  );
}
