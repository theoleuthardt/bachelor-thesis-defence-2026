import { useEffect, useRef } from "react";
import type { RevealDeck } from "./types";
import Reveal from "reveal.js";
import type { RevealPlugin } from "reveal.js";
import Notes from "reveal.js/plugin/notes";
import "./styles/slides.css";
import Slides from "./Slides";

type RevealConstructor = new (
  el: HTMLElement,
  opts: object,
) => RevealDeck & {
  addPlugin: (plugin: RevealPlugin) => void;
};

function App() {
  const deckRef = useRef<RevealDeck | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    const isPrintPdf = new URLSearchParams(window.location.search).has("print-pdf");
    if (isPrintPdf) {
      document.documentElement.classList.add("print-pdf-mode");
    }

    const initReveal = async () => {
      try {
        const revealElement = document.querySelector(".reveal") as HTMLElement;
        if (!revealElement) return;

        const isPrintPdf = new URLSearchParams(window.location.search).has("print-pdf");

        const deck = new (Reveal as unknown as RevealConstructor)(
          revealElement,
          {
            hash: true,
            transition: "slide",
            transitionSpeed: "default",
            backgroundTransition: "fade",
            center: true,
            width: 1200,
            height: 700,
            margin: 0.02,
            minScale: 0.1,
            maxScale: 2.0,
            slideNumber: "c/t",
            fragments: true,
            fragmentInURL: false,
            pdfSeparateFragments: !isPrintPdf ? true : false,
            plugins: [Notes()],
          },
        );

        deckRef.current = deck;
        await deck.initialize();
      } catch (error) {
        console.error("Failed to initialize Reveal.js:", error);
      }
    };

    initReveal();

    return () => {
      if (deckRef.current) {
        deckRef.current.destroy();
        deckRef.current = null;
      }
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <Slides />
      </div>
    </div>
  );
}

export default App;
