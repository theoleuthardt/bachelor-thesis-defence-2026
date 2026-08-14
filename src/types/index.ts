export interface LogoProps {
  src: string;
  alt: string;
  position?: "top-left" | "top-right";
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

export interface Reference {
  id: string;
  label: string;
}

export interface SlideReferencesProps {
  references?: Reference[];
}

import type { ReactNode } from "react";

export interface Reference {
  id: string;
  label: string;
}

export interface SlideReferencesProps {
  references?: Reference[];
}

export interface BulletItem {
  text: ReactNode;
  subitems?: ReactNode[];
}

export interface BulletSlideProps {
  title?: string;
  subtitle?: string;
  bullets?: BulletItem[];
  columns?: 1 | 2;
  notes?: string;
  references?: Reference[];
}

export interface StatItem {
  value: string;
  label: ReactNode;
  source?: string;
}

export interface StatsSlideProps {
  title?: string;
  stats?: StatItem[];
  footer?: string;
  notes?: string;
  references?: Reference[];
}

export interface CodeSlideProps {
  title?: string;
  caption?: string;
  code?: string;
  language?: string;
  highlightLines?: number[];
  notes?: string;
  references?: Reference[];
}

export interface ImageSlideProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  bullets?: string[];
  showPlaceholder?: boolean;
  notes?: string;
  imageClassName?: string;
  references?: Reference[];
}

export interface DualImageSlideProps {
  title?: string;
  subtitle?: string;
  leftSrc?: string;
  leftAlt?: string;
  rightSrc?: string;
  rightAlt?: string;
  leftLabel?: string;
  rightLabel?: string;
  notes?: string;
  references?: Reference[];
}

export interface QuoteSlideProps {
  title?: string;
  quote?: ReactNode;
  attribution?: string;
  notes?: string;
  references?: Reference[];
}

export interface PipelineStage {
  label: string;
  detail?: string;
}

export interface PipelineSlideProps {
  title?: string;
  stages?: PipelineStage[];
  caption?: string;
  notes?: string;
  references?: Reference[];
}

export interface KeyValueItem {
  label: string;
  value: string;
}

export interface KeyValueSlideProps {
  title?: string;
  subtitle?: string;
  items?: KeyValueItem[];
  footer?: string;
  notes?: string;
  references?: Reference[];
}
