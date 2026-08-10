export interface LogoProps {
  src: string;
  alt: string;
  position?: 'top-left' | 'top-right';
  width?: number;
}

export interface TitleSlideProps {
  title?: string;
  subtitle?: string;
  author?: string;
  date?: string;
}

export interface AgendaSlideProps {
  items?: string[];
}

export interface SectionHeaderSlideProps {
  number?: string;
  title?: string;
  subtitle?: string;
}

export interface ContentSlideProps {
  title?: string;
  content?: string;
  boxes?: Array<{ title: string; description: string }>;
}

export interface CardItem {
  icon: string;
  title: string;
  description: string;
}

export interface CardsSlideProps {
  title?: string;
  cards?: CardItem[];
  concludingRemark?: string;
}

export interface DefinitionSlideProps {
  title?: string;
  formalName?: string;
  description?: string;
  formula?: string;
}

export interface VisualSlideProps {
  title?: string;
  subtitle?: string;
  imageAlt?: string;
  boxes?: Array<{ label: string; description: string }>;
}

export interface ComparisonItem {
  title: string;
  description: string;
}

export interface ComparisonSlideProps {
  title?: string;
  items?: ComparisonItem[];
}

export interface TableRow {
  cells: string[];
  isFragment?: boolean;
}

export interface TableSlideProps {
  title?: string;
  headers?: string[];
  rows?: TableRow[];
}

export interface TakeawayItem {
  title: string;
  description: string;
}

export interface TakeawaysSlideProps {
  title?: string;
  items?: TakeawayItem[];
}

export interface ClosingSlideProps {
  title?: string;
  message?: string;
  author?: string;
  email?: string;
  company?: string;
}

export interface RevealDeck {
  initialize: () => Promise<void>;
  destroy: () => void;
}