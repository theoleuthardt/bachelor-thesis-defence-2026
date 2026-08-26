import { Highlight } from "prism-react-renderer";
import References from "../components/References";
import type { PrismTheme } from "prism-react-renderer";
import type { CodeSlideProps } from "../types";
import Logo from "../components/Logo";

const lightTheme: PrismTheme = {
  plain: {
    color: "#030044",
    backgroundColor: "#f4f6fb",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#878787", fontStyle: "italic" },
    },
    { types: ["punctuation"], style: { color: "#575757" } },
    {
      types: [
        "property",
        "tag",
        "boolean",
        "number",
        "constant",
        "symbol",
        "deleted",
      ],
      style: { color: "#1033A2" },
    },
    {
      types: ["selector", "attr-name", "string", "char", "inserted", "builtin"],
      style: { color: "#00543C" },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: { color: "#575757" },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: { color: "#296EF5", fontWeight: "bold" },
    },
    {
      types: ["function", "class-name"],
      style: { color: "#1033A2", fontWeight: "bold" },
    },
    { types: ["regex", "important"], style: { color: "#E60037" } },
  ],
};

export default function CodeSlide({
  title = "Code",
  caption,
  code = "// Beispiel\nconst x = 42;",
  language = "typescript",
  highlightLines = [],
  notes,
  references,
}: CodeSlideProps) {
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
      {caption && <p className="small-text slide-subtitle">{caption}</p>}
      <Highlight theme={lightTheme} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} code-block code-block-light`}
            style={{ ...style }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line });
              const isHl = highlightLines.includes(i + 1);
              return (
                <div
                  key={i}
                  {...lineProps}
                  className={`${lineProps.className} ${isHl ? "code-line-hl-light" : ""}`}
                >
                  <span className="code-line-number code-line-number-light">
                    {i + 1}
                  </span>
                  <span className="code-line-content">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
      <References references={references} />
      <aside className="notes" data-markdown>
        {notes ?? ""}
      </aside>
    </section>
  );
}
