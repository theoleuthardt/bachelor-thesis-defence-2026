import { useEffect, useRef } from 'react';
import './styles/slides.css';
import Slides from './Slides';

function App() {
  const deckRef = useRef<any>(null);

  useEffect(() => {
    // Prevent multiple initializations
    if (deckRef.current) {
      return;
    }

    const initReveal = async () => {
      try {
        console.log('Initializing Reveal.js...');
        const Reveal = (await import('reveal.js')).default;
        
        const revealElement = document.querySelector('.reveal') as HTMLElement;
        if (!revealElement) {
          console.error('Reveal element not found');
          return;
        }
        
        console.log('Reveal element:', revealElement);
        
        deckRef.current = new Reveal(revealElement, {
          hash: true,
          transition: 'slide',
          transitionSpeed: 'default',
          backgroundTransition: 'fade',
          center: true,
          width: 1200,
          height: 700,
          margin: 0.02,
          minScale: 0.1,
          maxScale: 2.0,
          slideNumber: 'c/t',
          fragments: true,
          fragmentInURL: false,
        });

        console.log('Reveal instance created, initializing...');
        await deckRef.current.initialize();
        console.log('Reveal.js initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Reveal.js:', error);
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
