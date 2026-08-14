interface RefProps {
  id: string;
}

export default function Ref({ id }: RefProps) {
  return <sup className="ref-mark">[{id}]</sup>;
}
