import { Link } from "react-router-dom";
import type { Source } from "../data/types";
import { SourceTypeBadge } from "./Badges";
import { getCategory } from "../data/categories";
import type { ReactNode } from "react";

function highlight(text: string, query: string): ReactNode {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded-sm bg-amber-soft text-slate dark:bg-amber/40 dark:text-warm-white">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export function SourceCard({ source, query = "" }: { source: Source; query?: string }) {
  const category = getCategory(source.categorySlug);

  return (
    <article className="group flex flex-col gap-3 rounded-xl border border-graphite/12 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-forest/30 hover:bg-warm-white-raised hover:shadow-lg dark:border-warm-white/10 dark:bg-slate-dim dark:hover:bg-slate-raised">
      <div className="flex flex-wrap items-center gap-2">
        {source.types.map((t) => (
          <SourceTypeBadge key={t} type={t} />
        ))}
        {category && (
          <Link
            to={`/research/${category.slug}`}
            className="ml-auto text-xs font-medium text-ocean hover:underline dark:text-ocean"
          >
            {category.shortTitle}
          </Link>
        )}
      </div>

      <h3 className="text-base font-semibold leading-snug text-slate transition-colors group-hover:text-forest dark:text-warm-white">
        {highlight(source.title, query)}
      </h3>

      <div className="text-sm text-graphite dark:text-graphite-light">
        {highlight(source.institution, query)}
        {source.year ? ` · ${source.year}` : ""}
      </div>

      <p className="text-sm leading-relaxed text-graphite dark:text-graphite-light">
        {highlight(source.note, query)}
      </p>

      <div className="mt-1">
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-forest hover:underline"
        >
          Open Original Source
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </article>
  );
}
