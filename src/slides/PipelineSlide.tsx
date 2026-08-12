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
}: PipelineSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="pipeline" style={{ marginTop: "0.6em" }}>
        {stages.map((s, i) => (
          <div key={i} className="pipeline-stage fragment">
            <div className="pipeline-stage-label">{s.label}</div>
            {s.detail && (
              <div className="pipeline-stage-detail">{s.detail}</div>
            )}
            {i < stages.length - 1 && <div className="pipeline-arrow">→</div>}
          </div>
        ))}
      </div>
      {caption && <p className="fragment slide-footer">{caption}</p>}
      <aside className="notes">{notes ?? ""}</aside>
    </section>
  );
}
