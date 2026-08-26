import Icon from "./icons";

export function LowVisionVisual() {
  return (
    <div className="a11y-visual a11y-visual-vision">
      <div className="a11y-vision-scan" />
      <div className="a11y-vision-lines">
        <div className="a11y-vision-line a11y-vision-line-1" />
        <div className="a11y-vision-line a11y-vision-line-2" />
        <div className="a11y-vision-line a11y-vision-line-3" />
        <div className="a11y-vision-line a11y-vision-line-4" />
        <div className="a11y-vision-glitch a11y-vision-glitch-1">!</div>
        <div className="a11y-vision-glitch a11y-vision-glitch-2">!</div>
      </div>
      <div className="a11y-visual-badge">
        <Icon name="eye" />
      </div>
    </div>
  );
}

export function MotorImpairmentVisual() {
  return (
    <div className="a11y-visual a11y-visual-motor">
      <div className="a11y-motor-target">Absenden</div>
      <svg
        className="a11y-motor-cursor"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="var(--accent-blue)"
        stroke="var(--bg-primary)"
        strokeWidth="1"
      >
        <path d="M4 2l14 8-6 1.5L9 18Z" />
      </svg>
      <div className="a11y-visual-badge">
        <Icon name="keyboard" />
      </div>
    </div>
  );
}
