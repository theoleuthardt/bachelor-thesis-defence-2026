import { useEffect, useState } from "react";
import Logo from "../components/Logo";

interface TocEntry {
  number: string;
  title: string;
}

export default function TocSlide() {
  const [entries, setEntries] = useState<TocEntry[]>([]);

  useEffect(() => {
    const collect = () => {
      const sections = Array.from(
        document.querySelectorAll(".reveal .slides section"),
      );
      const found: TocEntry[] = [];
      sections.forEach((sec) => {
        const num = sec.querySelector(".section-number");
        const title = sec.querySelector(".section-header h2");
        if (num && title) {
          found.push({
            number: num.textContent?.trim() ?? "",
            title: title.textContent?.trim() ?? "",
          });
        }
      });
      setEntries(found);
    };
    const isPrintPdf = new URLSearchParams(window.location.search).has(
      "print-pdf",
    );
    const timer = setTimeout(collect, isPrintPdf ? 2000 : 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Logo src="/BDR.png" alt="Bundesdruckerei GmbH" position="top-left" />
      <Logo
        src="/HWR.png"
        alt="Hochschule für Wirtschaft und Recht"
        position="top-right"
        width={230}
      />
      <div className="section-spacer" />
      <h2>Agenda</h2>
      <ol className="toc-list">
        {entries.map((entry, index) => (
          <li key={index} className="fragment">
            <span className="toc-number">{entry.number}</span> {entry.title}
          </li>
        ))}
      </ol>
      <aside className="notes"></aside>
    </section>
  );
}
