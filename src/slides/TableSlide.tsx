interface TableRow {
  cells: string[];
  isFragment?: boolean;
}

interface TableSlideProps {
  title?: string;
  headers?: string[];
  rows?: TableRow[];
}

export default function TableSlide({
  title = 'Table',
  headers = ['Column A', 'Column B', 'Column C'],
  rows = [
    { cells: ['Value 1', 'Value 2', 'Value 3'] },
    { cells: ['Value 4', 'Value 5', 'Value 6'], isFragment: true },
  ],
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
            <tr key={rowIndex} className={row.isFragment ? 'fragment' : undefined}>
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <aside className="notes">Speaker notes.</aside>
    </section>
  );
}