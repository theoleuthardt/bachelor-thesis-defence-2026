import { useEffect, useState } from "react";
import type { Reference } from "../types";

interface ReferencesProps {
  references?: Reference[];
}

export default function References({ references }: ReferencesProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "r" && !e.ctrlKey && !e.metaKey) {
        const active = document.querySelector(
          ".reveal .slides section.present",
        );
        if (
          active &&
          active.contains(
            document.activeElement === document.body
              ? active
              : document.activeElement,
          )
        ) {
          setVisible((v) => !v);
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  if (!references || references.length === 0) return null;

  return (
    <div
      className={`slide-references ${visible ? "slide-references-visible" : ""}`}
    >
      <button
        className="slide-references-toggle"
        onClick={() => setVisible((v) => !v)}
        aria-expanded={visible}
        aria-label="Quellen umschalten"
      >
        {visible ? "Quellen ausblenden" : "Quellen anzeigen"}
      </button>
      <ol className="slide-references-list">
        {references.map((ref) => (
          <li key={ref.id}>
            <span className="slide-ref-id">{ref.id}</span> {ref.label}
          </li>
        ))}
      </ol>
    </div>
  );
}
