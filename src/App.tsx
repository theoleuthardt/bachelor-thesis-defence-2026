import { useEffect, useRef } from "react";
import type { RevealDeck } from "./types";
import "./styles/slides.css";
import Slides from "./Slides";

function App() {
  const deckRef = useRef<RevealDeck | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    const initReveal = async () => {
      try {
        const RevealModule = await import("reveal.js");
        const Reveal = RevealModule.default as unknown as new (
          el: HTMLElement,
          opts: object,
        ) => RevealDeck;

        const revealElement = document.querySelector(".reveal") as HTMLElement;
        if (!revealElement) return;

        const deck = new Reveal(revealElement, {
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
        });

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
