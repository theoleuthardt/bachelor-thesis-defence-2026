# Bachelor Thesis Defence Presentation 2026

Presentation for the defence of my bachelor thesis, built with RevealJS and React.
The thesis itself lives in [bachelor-thesis-2026](https://github.com/theoleuthardt/bachelor-thesis-2026.git),
the defended prototype in [local-accessible-voice-agent](https://github.com/theoleuthardt/local-accessible-voice-agent.git).

## Topic

**Title:** Natural Language Web Interaction — A local LLM-based agent for low-barrier website usage <br>
**Candidate:** Theo Leuthardt <br>
**Company:** Bundesdruckerei GmbH <br>
**University:** HWR Berlin <br>
**First examiner:** Diego Barrera Martinez <br>
**Second examiner:** Prof. Dr. Björn Grohmann <br>
**Duration:** 20 minutes presentation + 30–40 minutes technical discussion

## Technologies

- **React 19** with TypeScript
- **Reveal.js 6** presentation framework
- **Vite 8** for development and build
- **prism-react-renderer** for syntax highlighting on code slides
- **Inter** typeface

## Quick start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser at `http://localhost:5173` (or the port shown in your terminal).

### Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview build

```bash
npm run preview
```

### Type check

```bash
npm run build   # tsc -b && vite build
```

### Lint

```bash
npm run lint
```

## Reveal.js configuration

The configuration lives in `src/App.tsx`:

- `transition: 'slide'` · `transitionSpeed: 'default'` · `backgroundTransition: 'fade'`
- `center: true` · `width: 1200` · `height: 700` · `margin: 0.02`
- `slideNumber: 'c/t'` · `fragments: true` · `fragmentInURL: false`
- `minScale: 0.1` · `maxScale: 2.0`

## Keyboard shortcuts

| Key           | Action                              |
| ------------- | ----------------------------------- |
| `→` / `Space` | Next slide / fragment               |
| `←`           | Previous slide                      |
| `↓` / `↑`     | Vertical navigation (backup slides) |
| `s`           | Speaker notes                       |
| `f`           | Fullscreen                          |
| `Esc`         | Slide overview                      |
| `?`           | Show all shortcuts                  |

## Dependencies

- `react` — UI library
- `react-dom` — React renderer
- `reveal.js` — presentation framework
- `prism-react-renderer` — syntax highlighting for code slides
- `vite` — build tool
- `typescript` — type checking
- `eslint` — linting
