export type SourceType =
  | "Peer-Reviewed"
  | "University"
  | "Government"
  | "Standards"
  | "Think Tank"
  | "Industry";

export type EvidenceStrength =
  | "Emerging"
  | "Emerging to Moderate"
  | "Moderate"
  | "Moderate to High"
  | "High";

export interface Source {
  id: string;
  title: string;
  /** Institution / author attribution exactly as cited in the source spec. */
  institution: string;
  year?: number;
  url: string;
  /** One-line curator's note describing the source. */
  note: string;
  types: SourceType[];
  categorySlug: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Finding {
  title: string;
  text: string;
}

export interface Viewpoint {
  title: string;
  text: string;
}

export interface Category {
  slug: string;
  number: number;
  title: string;
  shortTitle: string;
  shortDescription: string;
  evidenceStrength: EvidenceStrength;
  executiveSummary: string;
  implications: string;
  keyStatistics: Stat[];
  majorFindings: Finding[];
  consensus: string[];
  competingViewpoints: Viewpoint[];
  researchGaps: string[];
  /** Topic taxonomy for this research program (shown as tags on the category page). */
  topics?: string[];
}

export interface ReportSection {
  heading: string;
  paragraphs: string[];
}

export interface Report {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  status: "Coming Soon" | "Published";
  relatedCategorySlugs: string[];
  /** Full report body, published reports only. */
  body?: ReportSection[];
  publishedDate?: string;
}
