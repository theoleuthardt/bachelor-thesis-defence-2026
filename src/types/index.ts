import type { ReactNode } from "react";

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

export type IconName =
  | "eye"
  | "keyboard"
  | "shield"
  | "layers"
  | "globe"
  | "cpu"
  | "mic"
  | "waves"
  | "filter"
  | "checkCircle"
  | "alertTriangle"
  | "scissors"
  | "lifeBuoy"
  | "target"
  | "award"
  | "rocket"
  | "gitBranch"
  | "wrench"
  | "repeat"
  | "scale";

export interface ContentSlideProps {
  title?: string;
  content?: string;
  boxes?: Array<{ title: string; description: string; icon?: IconName }>;
  notes?: string;
  references?: Reference[];
}

export interface CardItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface CardsSlideProps {
  title?: string;
  cards?: CardItem[];
  concludingRemark?: string;
  columns?: 2 | 3;
  notes?: string;
  references?: Reference[];
}

export interface DefinitionSlideProps {
  title?: string;
  formalName?: string;
  description?: string;
  formula?: string;
  notes?: string;
  references?: Reference[];
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
  icon?: IconName;
}

export interface ComparisonSlideProps {
  title?: string;
  items?: ComparisonItem[];
  layout?: "cards" | "split";
  footer?: string;
  notes?: string;
}

export interface TableRow {
  cells: string[];
  isFragment?: boolean;
}

export interface TableSlideProps {
  title?: string;
  headers?: string[];
  rows?: TableRow[];
  notes?: string;
  references?: Reference[];
}

export interface TakeawayItem {
  title: string;
  description: string;
  icon?: IconName;
}

export interface TakeawaysSlideProps {
  title?: string;
  items?: TakeawayItem[];
  variant?: "numbered" | "funnel";
  notes?: string;
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

export interface VideoSlideProps {
  title?: string;
  src: string;
  bordered?: boolean;
  large?: boolean;
  notes?: string;
}

export interface ImageGridItem {
  src: string;
  alt?: string;
  caption?: string;
}

export interface ImageGridSlideProps {
  title?: string;
  images?: ImageGridItem[];
  columns?: 1 | 2 | 3;
  bordered?: boolean;
  notes?: string;
}

export interface LogoGridItem {
  src: string;
  label: string;
  alt?: string;
}

export interface LogoGridSlideProps {
  title?: string;
  subtitle?: string;
  logos?: LogoGridItem[];
  columns?: 2 | 3 | 4;
  footer?: string;
  notes?: string;
  references?: Reference[];
}

export interface BulletItem {
  text: ReactNode;
  subitems?: ReactNode[];
  icon?: IconName;
}

export interface BulletSlideProps {
  title?: string;
  subtitle?: string;
  bullets?: BulletItem[];
  columns?: 1 | 2;
  variant?: "list" | "icon";
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
  icon?: IconName;
}

export interface PipelineSlideProps {
  title?: string;
  stages?: PipelineStage[];
  caption?: string;
  notes?: string;
  references?: Reference[];
}

export interface QuadrantPoint {
  label: string;
  x: number;
  y: number;
  variant?: "default" | "target";
}

export interface QuadrantSlideProps {
  title?: string;
  subtitle?: string;
  xAxisLabels?: [string, string];
  yAxisLabels?: [string, string];
  points?: QuadrantPoint[];
  caption?: string;
  notes?: string;
  references?: Reference[];
}

export interface BadgeGridGroup {
  label: string;
  items: string[];
}

export interface BadgeGridSlideProps {
  title?: string;
  subtitle?: string;
  groups?: BadgeGridGroup[];
  tone?: "blue" | "red";
  footer?: string;
  notes?: string;
  references?: Reference[];
}

export interface StateNode {
  label: string;
}

export interface StateMachineSlideProps {
  title?: string;
  subtitle?: string;
  entry?: string;
  states?: StateNode[];
  caption?: string;
  notes?: string;
  references?: Reference[];
}

export interface KeyValueItem {
  label: string;
  value: ReactNode;
  status?: "success" | "danger";
}

export interface KeyValueSlideProps {
  title?: string;
  subtitle?: string;
  items?: KeyValueItem[];
  footer?: string;
  notes?: string;
  references?: Reference[];
}
