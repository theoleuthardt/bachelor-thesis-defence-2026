interface RatingDotsProps {
  value: number;
  max?: number;
}

export default function RatingDots({ value, max = 5 }: RatingDotsProps) {
  return (
    <span className="rating-dots" role="img" aria-label={`${value} von ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`rating-dot ${i < value ? "rating-dot-filled" : ""}`}
        />
      ))}
    </span>
  );
}
