import { Link, Navigate, useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { EvidenceBadge } from "../components/Badges";
import { SourceCard } from "../components/SourceCard";
import { getCategory, categories } from "../data/categories";
import { sources } from "../data/sources";
import { reports } from "../data/reports";

export function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategory(slug ?? "");

  if (!category) return <Navigate to="/research" replace />;

  const bibliography = sources.filter((s) => s.categorySlug === category.slug);
  const relatedReports = reports.filter((r) => r.relatedCategorySlugs.includes(category.slug));
  const relatedTopics = categories.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <article className="py-16">
      <Container narrow>
        <p className="text-xs font-semibold uppercase tracking-wide text-forest">
          Research · {String(category.number).padStart(2, "0")}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate dark:text-warm-white sm:text-4xl">
          {category.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-graphite dark:text-graphite-light">
          {category.shortDescription}
        </p>
        <div className="mt-5">
          <EvidenceBadge strength={category.evidenceStrength} />
        </div>

        {category.topics && category.topics.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {category.topics.map((t) => (
              <span
                key={t}
                className="rounded-full border border-graphite/20 px-3 py-1 text-xs text-graphite dark:border-warm-white/20 dark:text-graphite-light"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Executive Summary</h2>
          <p className="mt-3 leading-relaxed text-graphite dark:text-graphite-light">
            {category.executiveSummary}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Why It Matters</h2>
          <p className="mt-3 leading-relaxed text-graphite dark:text-graphite-light">
            {category.implications}
          </p>
        </section>

        {category.keyStatistics.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Key Statistics</h2>
            <dl className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {category.keyStatistics.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-xl font-semibold text-forest">{stat.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-graphite dark:text-graphite-light">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {category.majorFindings.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Major Findings</h2>
            <ul className="mt-4 space-y-4">
              {category.majorFindings.map((f) => (
                <li key={f.title} className="border-l-2 border-forest/40 pl-4">
                  <p className="font-medium text-slate dark:text-warm-white">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-graphite dark:text-graphite-light">
                    {f.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {category.consensus.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Areas of Consensus</h2>
              <ul className="mt-4 space-y-3">
                {category.consensus.map((c) => (
                  <li key={c} className="flex gap-2 text-sm leading-relaxed text-graphite dark:text-graphite-light">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {category.competingViewpoints.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Competing Viewpoints</h2>
              <ul className="mt-4 space-y-4">
                {category.competingViewpoints.map((v) => (
                  <li key={v.title}>
                    <p className="text-sm font-medium text-slate dark:text-warm-white">{v.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-graphite dark:text-graphite-light">
                      {v.text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {category.researchGaps.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Research Gaps</h2>
            <ul className="mt-4 space-y-3">
              {category.researchGaps.map((g) => (
                <li key={g} className="flex gap-2 text-sm leading-relaxed text-graphite dark:text-graphite-light">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                  {g}
                </li>
              ))}
            </ul>
          </section>
        )}
      </Container>

      <Container className="mt-16">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">
          Curated Bibliography <span className="text-graphite dark:text-graphite-light">({bibliography.length})</span>
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bibliography.map((s) => (
            <SourceCard key={s.id} source={s} />
          ))}
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-10 border-t border-graphite/10 pt-10 dark:border-warm-white/10 sm:grid-cols-2">
          {relatedReports.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
                Related Reports
              </h2>
              <ul className="mt-4 space-y-2">
                {relatedReports.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/reports/${r.slug}`} className="text-sm font-medium text-forest hover:underline">
                      {r.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
              Related Topics
            </h2>
            <ul className="mt-4 space-y-2">
              {relatedTopics.map((c) => (
                <li key={c.slug}>
                  <Link to={`/research/${c.slug}`} className="text-sm font-medium text-forest hover:underline">
                    {c.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </article>
  );
}
