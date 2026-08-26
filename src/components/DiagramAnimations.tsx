import Icon from "./icons";

const RING_RADIUS = 17;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function WatchdogVisual() {
  return (
    <div className="loop-cutoff-visual loop-visual-lg">
      <svg className="loop-cutoff-ring" viewBox="0 0 40 40">
        <circle
          className="loop-cutoff-ring-bg"
          cx="20"
          cy="20"
          r={RING_RADIUS}
        />
        <circle
          className="loop-cutoff-ring-fg"
          cx="20"
          cy="20"
          r={RING_RADIUS}
          style={{
            strokeDasharray: RING_CIRCUMFERENCE,
          }}
        />
      </svg>
      <div className="loop-cutoff-icon">
        <Icon name="repeat" />
      </div>
      <div className="loop-cutoff-stop">✕</div>
    </div>
  );
}

export function GenerationCounterVisual() {
  return (
    <div className="loop-visual-lg gen-visual">
      <div className="gen-badge">
        <span className="gen-number gen-number-1">1</span>
        <span className="gen-number gen-number-2">2</span>
        <span className="gen-number gen-number-3">3</span>
      </div>
      <div className="gen-stale">✕</div>
    </div>
  );
}

export function PlanSignatureVisual() {
  return (
    <div className="loop-visual-lg sig-visual">
      <div className="sig-chip sig-chip-a">A</div>
      <div className="sig-chip sig-chip-b">A</div>
    </div>
  );
}

export function RejectedSignatureVisual() {
  return (
    <div className="loop-visual-lg rej-visual">
      <div className="rej-plan">P</div>
      <span className="rej-count rej-count-1">1×</span>
      <span className="rej-count rej-count-2">2×</span>
      <div className="rej-stop">✕</div>
    </div>
  );
}

export function IterationCapVisual() {
  return (
    <div className="loop-visual-lg iter-visual">
      <div className="iter-dots">
        <span className="iter-dot iter-dot-1" />
        <span className="iter-dot iter-dot-2" />
        <span className="iter-dot iter-dot-3" />
        <span className="iter-dot iter-dot-4" />
        <span className="iter-dot iter-dot-5" />
      </div>
      <div className="iter-cap">✕</div>
    </div>
  );
}
