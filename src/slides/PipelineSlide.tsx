import Icon from "../components/icons";
import References from "../components/References";
import type { PipelineSlideProps } from "../types";

export default function PipelineSlide({
  title = "Pipeline",
  stages = [
    { label: "Audio" },
    { label: "ASR" },
    { label: "Plan" },
    { label: "Execute" },
  ],
  caption,
  notes,
  references,
}: PipelineSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="pipeline">
        {stages.map((s, i) => (
          <div key={i} className="pipeline-node fragment">
            <div className="icon-badge icon-badge-lg">
              {s.icon && <Icon name={s.icon} />}
            </div>
            <div className="pipeline-node-label">{s.label}</div>
          </div>
        ))}
      </div>
      {caption && <p className="fragment slide-footer">{caption}</p>}
      <References references={references} />
      <aside className="notes" data-markdown>{notes ?? ""}</aside>
    </section>
  );
}
