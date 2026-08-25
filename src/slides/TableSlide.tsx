import References from "../components/References";
import type { TableSlideProps } from "../types";

export default function TableSlide({
  title = "Tabelle",
  headers = ["Spalte A", "Spalte B", "Spalte C"],
  rows = [
    { cells: ["Wert 1", "Wert 2", "Wert 3"] },
    { cells: ["Wert 4", "Wert 5", "Wert 6"], isFragment: true },
  ],
  notes,
  references,
}: TableSlideProps) {
  return (
    <section>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={row.isFragment ? "fragment" : undefined}
            >
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
