import type { CSSProperties } from "react";
import Icon from "../components/icons";
import References from "../components/References";
import type { PipelineSlideProps } from "../types";
import Logo from "../components/Logo";

const NODE_WIDTH_PCT = 17;
const HIGHLIGHT_BUFFER_PCT = 1.5;

export default function PipelineSlide({
  title = "Pipeline",
  stages = [
    { label: "Audio" },
    { label: "ASR" },
    { label: "Plan" },
    { label: "Execute" },
  ],
  caption,
  highlightFrom,
  notes,
  references,
}: PipelineSlideProps) {
  const n = stages.length;
  const step =
    n > 1 ? (100 - n * NODE_WIDTH_PCT) / (n - 1) + NODE_WIDTH_PCT : 100;
  const showHighlight = highlightFrom !== undefined && highlightFrom < n;
  const highlightLeft = showHighlight
    ? Math.max(0, highlightFrom * step - HIGHLIGHT_BUFFER_PCT)
    : 0;
  const highlightRight = showHighlight
    ? Math.min(100, (n - 1) * step + NODE_WIDTH_PCT + HIGHLIGHT_BUFFER_PCT)
    : 0;
  const flowDotVars = Object.fromEntries(
    stages.map((_, i) => [
      `--flow-target-${i}`,
      `${i * step + NODE_WIDTH_PCT / 2}%`,
    ]),
  ) as CSSProperties;

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
      <div className="pipeline" style={flowDotVars}>
        <div className="pipeline-flow-dot" />
        {stages.map((s, i) => (
          <div key={i} className="pipeline-node fragment" data-stage-index={i}>
            <div className="icon-badge icon-badge-lg">
              {s.icon && <Icon name={s.icon} />}
            </div>
            <div className="pipeline-node-label">{s.label}</div>
          </div>
        ))}
        {showHighlight && (
          <>
            <span className="pipeline-highlight-trigger fragment" />
            <div
              className="pipeline-highlight-box"
              style={{
                left: `${highlightLeft}%`,
                width: `${highlightRight - highlightLeft}%`,
              }}
            />
          </>
        )}
      </div>
      {caption && <p className="fragment slide-footer">{caption}</p>}
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
