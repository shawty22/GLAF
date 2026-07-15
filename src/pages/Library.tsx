import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "../components/Container";
import { SourceCard } from "../components/SourceCard";
import { categories } from "../data/categories";
import { sources, sourceTypes } from "../data/sources";
import { useFilteredSources } from "../lib/search";
import type { SourceType } from "../data/types";

export function Library() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const categorySlug = params.get("category");
  const activeTypes = (params.get("types")?.split(",").filter(Boolean) ?? []) as SourceType[];

  const [localQuery, setLocalQuery] = useState(query);

  const years = useMemo(
    () =>
      Array.from(new Set(sources.map((s) => s.year).filter((y): y is number => Boolean(y)))).sort(
        (a, b) => b - a
      ),
    []
  );
  const activeYear = params.get("year") ? Number(params.get("year")) : null;

  const results = useFilteredSources({
    query,
    categorySlug,
    types: activeTypes,
    year: activeYear,
  });

  function updateParam(key: string, value: string | null) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  }

  function toggleType(type: SourceType) {
    const next = activeTypes.includes(type)
      ? activeTypes.filter((t) => t !== type)
      : [...activeTypes, type];
    updateParam("types", next.length ? next.join(",") : null);
  }

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    updateParam("q", localQuery || null);
  }

  return (
    <Container className="py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-forest">Research Library</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate dark:text-warm-white sm:text-4xl">
        Search the evidence base.
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-graphite dark:text-graphite-light">
        {sources.length} curated sources across {categories.length} research categories.
        Every citation links directly to the original publication.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* Sidebar filters */}
        <aside className="space-y-8">
          <form onSubmit={submitSearch}>
            <label htmlFor="library-search" className="text-xs font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
              Search
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="library-search"
                type="search"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Title, institution, keyword…"
                className="w-full rounded-md border border-graphite/20 bg-white px-3 py-2 text-sm text-slate outline-none focus:border-forest dark:border-warm-white/20 dark:bg-slate-dim dark:text-warm-white"
              />
            </div>
          </form>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
              Topic
            </h2>
            <div className="mt-3 flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => updateParam("category", null)}
                className={`rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                  !categorySlug
                    ? "bg-forest-soft font-medium text-forest dark:bg-forest/15"
                    : "text-graphite hover:bg-graphite/5 dark:text-graphite-light dark:hover:bg-warm-white/5"
                }`}
              >
                All Topics
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => updateParam("category", c.slug)}
                  className={`rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                    categorySlug === c.slug
                      ? "bg-forest-soft font-medium text-forest dark:bg-forest/15"
                      : "text-graphite hover:bg-graphite/5 dark:text-graphite-light dark:hover:bg-warm-white/5"
                  }`}
                >
                  {c.shortTitle}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
              Source Type
            </h2>
            <div className="mt-3 flex flex-col gap-2">
              {sourceTypes.map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm text-graphite dark:text-graphite-light">
                  <input
                    type="checkbox"
                    checked={activeTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="h-4 w-4 rounded border-graphite/30 text-forest focus:ring-forest"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
              Publication Year
            </h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => updateParam("year", null)}
                className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                  !activeYear
                    ? "border-forest bg-forest-soft text-forest dark:bg-forest/15"
                    : "border-graphite/20 text-graphite dark:border-warm-white/20 dark:text-graphite-light"
                }`}
              >
                All
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => updateParam("year", String(y))}
                  className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                    activeYear === y
                      ? "border-forest bg-forest-soft text-forest dark:bg-forest/15"
                      : "border-graphite/20 text-graphite dark:border-warm-white/20 dark:text-graphite-light"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-graphite dark:text-graphite-light">
              {results.length} {results.length === 1 ? "result" : "results"}
            </p>
            {(query || categorySlug || activeTypes.length || activeYear) && (
              <button
                type="button"
                onClick={() => {
                  setLocalQuery("");
                  setParams({}, { replace: true });
                }}
                className="text-sm font-medium text-forest hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <p className="mt-10 text-sm text-graphite dark:text-graphite-light">
              No sources match those filters. Try broadening your search.
            </p>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {results.map((s) => (
                <SourceCard key={s.id} source={s} query={query} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
