import { Fragment } from "react";
import Icon from "../components/icons";
import References from "../components/References";
import type { PromptFlowSlideProps } from "../types";
import Logo from "../components/Logo";

export default function PromptFlowSlide({
  title = "Prompt-Aufbau",
  subtitle,
  inputs = [],
  mergeLabel = "Systemprompt",
  mergeIcon = "cpu",
  mergeCaption,
  stages = [],
  notes,
  references,
}: PromptFlowSlideProps) {
  const mergeIndex = inputs.length;
  const stagesStartIndex = mergeIndex + 1;

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
      {subtitle && <p className="small-text slide-subtitle">{subtitle}</p>}
      <div className="merge-diagram">
        <div className="merge-inputs merge-inputs-box">
          {inputs.map((n, i) => (
            <div
              key={i}
              className="merge-input-node fragment"
              data-fragment-index={i}
            >
              <div className="icon-badge icon-badge-md">
                <Icon name={n.icon} />
              </div>
              <div className="merge-input-label">{n.label}</div>
            </div>
          ))}
        </div>
        <div className="merge-arrows">
          {inputs.map((_, i) => (
            <div
              key={i}
              className="merge-arrow fragment"
              data-fragment-index={i}
            >
              →
            </div>
          ))}
        </div>
        <div className="merge-target fragment" data-fragment-index={mergeIndex}>
          <Icon name={mergeIcon} />
          <span className="merge-target-label">{mergeLabel}</span>
          {mergeCaption && (
            <span className="merge-target-caption">{mergeCaption}</span>
          )}
        </div>
        <div
          className="merge-connector fragment"
          data-fragment-index={stagesStartIndex}
        >
          →
        </div>
        <div className="planning-box">
          {stages.map((s, i) => {
            const idx = stagesStartIndex + i;
            return (
              <Fragment key={i}>
                {i > 0 && (
                  <div
                    className="planning-step-connector fragment"
                    data-fragment-index={idx}
                  >
                    →
                  </div>
                )}
                <div className="planning-step-wrap">
                  <div className="planning-side-slot planning-side-slot-top">
                    {s.sideLabels?.top && (
                      <div
                        className="planning-side-label fragment"
                        data-fragment-index={idx}
                      >
                        <span>{s.sideLabels.top}</span>
                        <span className="planning-side-arrow">↓</span>
                      </div>
                    )}
                  </div>
                  <div
                    className="planning-step fragment"
                    data-fragment-index={idx}
                  >
                    <div className="icon-badge icon-badge-sm">
                      <Icon name={s.icon} />
                    </div>
                    <div className="planning-step-label">{s.label}</div>
                    {s.caption && (
                      <div className="planning-step-caption">{s.caption}</div>
                    )}
                  </div>
                  <div className="planning-side-slot planning-side-slot-bottom">
                    {s.sideLabels?.bottom && (
                      <div
                        className="planning-side-label fragment"
                        data-fragment-index={idx}
                      >
                        <span className="planning-side-arrow">↑</span>
                        <span>{s.sideLabels.bottom}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
