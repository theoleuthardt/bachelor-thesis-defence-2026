interface MeterProps {
  min?: number;
  max: number;
  rangeStart: number;
  rangeEnd: number;
  threshold?: number;
  thresholdLabel?: string;
}

export default function Meter({
  min = 0,
  max,
  rangeStart,
  rangeEnd,
  threshold,
  thresholdLabel,
}: MeterProps) {
  const span = max - min;
  const toPct = (v: number) => ((v - min) / span) * 100;
  const startPct = toPct(rangeStart);
  const widthPct = toPct(rangeEnd) - startPct;
  const exceedsThreshold = threshold !== undefined && rangeEnd > threshold;

  return (
    <div className="meter">
      <div className="meter-track">
        <div
          className={`meter-fill ${exceedsThreshold ? "meter-fill-warn" : ""}`}
          style={{ left: `${startPct}%`, width: `${widthPct}%` }}
        />
        {threshold !== undefined && (
          <div
            className="meter-threshold"
            style={{ left: `${toPct(threshold)}%` }}
          />
        )}
      </div>
      {thresholdLabel && (
        <span className="meter-threshold-label">{thresholdLabel}</span>
      )}
    </div>
  );
}
