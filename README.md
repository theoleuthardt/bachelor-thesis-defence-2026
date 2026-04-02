# RevealJS React Presentation Template

A modern, React-based template for creating RevealJS presentations with TypeScript and Vite.

## Features

- **React 18+** with TypeScript
- **RevealJS 5.1.0** for presentation framework
- **Vite** for fast development and building
- **Modular slide components** for easy customization
- **Pre-built slide types**: Title, Agenda, Section Headers, Content, Cards, Tables, etc.
- **Custom CSS styling** matching the original template design
- **KaTeX support** for mathematical formulas
- **Speaker notes** support

## Quick Start

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

### Preview Build

```bash
npm run preview
```

## Project Structure

```
revealjs-react-template/
├── src/
│   ├── slides/                  # Individual slide components
│   │   ├── TitleSlide.tsx
│   │   ├── AgendaSlide.tsx
│   │   ├── SectionHeaderSlide.tsx
│   │   ├── ContentSlide.tsx
│   │   ├── CardsSlide.tsx
│   │   ├── DefinitionSlide.tsx
│   │   ├── VisualSlide.tsx
│   │   ├── ComparisonSlide.tsx
│   │   ├── TableSlide.tsx
│   │   ├── TakeawaysSlide.tsx
│   │   ├── ClosingSlide.tsx
│   │   └── index.ts
│   ├── Slides.tsx               # Main slides container
│   ├── App.tsx                  # RevealJS initialization
│   ├── slides.css               # Custom styling
│   ├── main.tsx                 # Entry point
│   ├── index.css                # Global styles
│   └── App.css                  # App-specific styles
├── index.html                   # HTML template with CDN links
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Usage

### Creating Your Presentation

Edit `src/Slides.tsx` to compose your presentation:

```tsx
import TitleSlide from './slides/TitleSlide';
import AgendaSlide from './slides/AgendaSlide';
import SectionHeaderSlide from './slides/SectionHeaderSlide';
import ContentSlide from './slides/ContentSlide';
// ... other components

export default function Slides() {
  return (
    <>
      <TitleSlide 
        title="My Presentation"
        subtitle="A great topic"
        author="Your Name"
        date="2025"
      />
      
      <AgendaSlide 
        items={['Introduction', 'Main Content', 'Conclusion']}
      />
      
      {/* Add more slides */}
    </>
  );
}
```

### Available Slide Components

#### TitleSlide
```tsx
<TitleSlide 
  title="Presentation Title"
  subtitle="Subtitle"
  author="Author Name"
  date="Date"
/>
```

#### AgendaSlide
```tsx
<AgendaSlide 
  items={['Point 1', 'Point 2', 'Point 3']}
/>
```

#### SectionHeaderSlide
```tsx
<SectionHeaderSlide 
  number="01"
  title="Section Title"
  subtitle="Section description"
/>
```

#### ContentSlide
```tsx
<ContentSlide 
  title="Content Title"
  content="Main paragraph text"
  boxes={[
    { title: 'Point A', description: 'Details' },
    { title: 'Point B', description: 'Details' }
  ]}
/>
```

#### CardsSlide
```tsx
<CardsSlide 
  title="Ideas"
  cards={[
    { icon: '★', title: 'Idea 1', description: 'Description' },
    { icon: '◆', title: 'Idea 2', description: 'Description' }
  ]}
/>
```

#### DefinitionSlide
```tsx
<DefinitionSlide 
  title="Definition"
  formalName="Concept Name"
  description="Description text"
  formula="$$E = mc^2$$"
/>
```

#### VisualSlide
```tsx
<VisualSlide 
  title="Visual Content"
  subtitle="Description"
  boxes={[
    { label: 'Label X', description: 'Details' },
    { label: 'Label Y', description: 'Details' }
  ]}
/>
```

#### ComparisonSlide
```tsx
<ComparisonSlide 
  title="Comparison"
  items={[
    { title: 'Approach A', description: 'Pros and cons' },
    { title: 'Approach B', description: 'Pros and cons' }
  ]}
/>
```

#### TableSlide
```tsx
<TableSlide 
  title="Data Table"
  headers={['Column A', 'Column B', 'Column C']}
  rows={[
    { cells: ['Value 1', 'Value 2', 'Value 3'] },
    { cells: ['Value 4', 'Value 5', 'Value 6'], isFragment: true }
  ]}
/>
```

#### TakeawaysSlide
```tsx
<TakeawaysSlide 
  title="Key Takeaways"
  items={[
    { title: 'Point 1', description: 'Elaboration' },
    { title: 'Point 2', description: 'Elaboration' }
  ]}
/>
```

#### ClosingSlide
```tsx
<ClosingSlide 
  title="Thank You!"
  message="Final statement"
  supportingText="Additional information"
/>
```

## RevealJS Configuration

The RevealJS configuration is in `src/App.tsx`. You can customize:

- `transition`: Slide transition effect ('slide', 'fade', 'convex', 'concave', 'zoom')
- `transitionSpeed`: Speed of transitions ('default', 'fast', 'slow')
- `backgroundTransition`: Background transition effect
- `width` and `height`: Presentation dimensions
- `margin`: Margin around slides
- `minScale` and `maxScale`: Zoom limits
- `slideNumber`: Slide number display format

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide / fragment |
| `←` | Previous slide |
| `↓` / `↑` | Vertical navigation |
| `s` | Open speaker notes |
| `f` | Fullscreen |
| `Esc` | Slide overview |
| `?` | Show all shortcuts |

## CSS Classes

The template includes utility CSS classes:

- `.box` - Gray box with border
- `.box-accent` - Box with blue left border
- `.formula-box` - Box for mathematical formulas
- `.card` - White card with border
- `.grid-2` / `.grid-3` - 2 or 3 column grids
- `.highlight` - Blue highlighted text
- `.small-text` - Smaller text
- `.color-muted` - Muted/gray text
- `.fragment` - Element appears sequentially
- `.toc-list` - Numbered agenda list
- `.section-number` - Large section number

## Customization

### Changing Colors

Edit `src/slides.css` and modify the CSS variables:

```css
:root {
  --accent-blue: #2563eb;     /* Accent color */
  --bg-primary: #ffffff;      /* Background */
  --bg-secondary: #f4f6fb;    /* Secondary background */
}
```

### Changing Fonts

Update the Google Fonts import in `src/slides.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

:root {
  --font-family: 'Your Font', sans-serif;
}
```

## Dependencies

- `react` - UI library
- `reveal.js` - Presentation framework
- `vite` - Build tool
- `typescript` - Type checking

## License

Free to use as a template for your own presentations.