import Fuse from "fuse.js";
import { useMemo } from "react";
import { sources } from "../data/sources";
import type { Source, SourceType } from "../data/types";

const fuse = new Fuse(sources, {
  keys: ["title", "institution", "note", "categorySlug"],
  threshold: 0.32,
  ignoreLocation: true,
});

export interface LibraryFilters {
  query: string;
  types: SourceType[];
  categorySlug: string | null;
  year: number | null;
}

export function useFilteredSources(filters: LibraryFilters): Source[] {
  return useMemo(() => {
    let results: Source[] = filters.query.trim()
      ? fuse.search(filters.query).map((r) => r.item)
      : sources;

    if (filters.categorySlug) {
      results = results.filter((s) => s.categorySlug === filters.categorySlug);
    }
    if (filters.types.length > 0) {
      results = results.filter((s) => filters.types.every((t) => s.types.includes(t)));
    }
    if (filters.year) {
      results = results.filter((s) => s.year === filters.year);
    }
    return results;
  }, [filters.query, filters.types, filters.categorySlug, filters.year]);
}
