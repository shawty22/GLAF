import type { EvidenceStrength, SourceType } from "../data/types";

const evidenceStyles: Record<EvidenceStrength, string> = {
  High: "bg-forest-soft text-forest dark:bg-forest/15 dark:text-forest",
  "Moderate to High": "bg-forest-soft text-forest dark:bg-forest/15 dark:text-forest",
  Moderate: "bg-ocean-soft text-ocean dark:bg-ocean/15 dark:text-ocean",
  "Emerging to Moderate": "bg-amber-soft text-amber dark:bg-amber/15 dark:text-amber",
  Emerging: "bg-amber-soft text-amber dark:bg-amber/15 dark:text-amber",
};

export function EvidenceBadge({ strength }: { strength: EvidenceStrength }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${evidenceStyles[strength]}`}
    >
      Evidence: {strength}
    </span>
  );
}

export function SourceTypeBadge({ type }: { type: SourceType }) {
  return (
    <span className="inline-flex items-center rounded-full border border-graphite/20 px-2.5 py-1 text-xs text-graphite transition-colors duration-200 group-hover:border-forest/40 group-hover:text-slate dark:border-warm-white/20 dark:text-graphite-light dark:group-hover:border-forest/40 dark:group-hover:text-warm-white">
      {type}
    </span>
  );
}
