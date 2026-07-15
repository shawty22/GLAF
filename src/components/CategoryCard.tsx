import { Link } from "react-router-dom";
import type { Category } from "../data/types";
import { sources } from "../data/sources";
import { categoryIcons } from "./icons";

export function CategoryCard({ category }: { category: Category }) {
  const count = sources.filter((s) => s.categorySlug === category.slug).length;
  const Icon = categoryIcons[category.slug];

  return (
    <Link
      to={`/research/${category.slug}`}
      className="group flex flex-col justify-between rounded-xl border border-graphite/12 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-forest/30 hover:bg-warm-white-raised hover:shadow-lg dark:border-warm-white/10 dark:bg-slate-dim dark:hover:bg-slate-raised"
    >
      <div>
        <div className="flex items-center justify-between">
          {Icon && (
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-soft text-forest transition-colors group-hover:bg-forest group-hover:text-warm-white dark:bg-forest/12">
              <Icon width={20} height={20} />
            </span>
          )}
          <span className="font-mono text-xs text-graphite/50 dark:text-graphite-light/50">
            {String(category.number).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate dark:text-warm-white">
          {category.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-graphite dark:text-graphite-light">
          {category.shortDescription}
        </p>
      </div>
      <div className="mt-7 flex items-center justify-between border-t border-graphite/10 pt-4 dark:border-warm-white/10">
        <span className="text-xs text-graphite/70 dark:text-graphite-light/70">
          {count} papers
        </span>
        <span className="text-sm font-medium text-forest transition-transform group-hover:translate-x-0.5">
          Explore →
        </span>
      </div>
    </Link>
  );
}
