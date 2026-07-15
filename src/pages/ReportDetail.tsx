import { Link, Navigate, useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { SourceCard } from "../components/SourceCard";
import { getReport, reports } from "../data/reports";
import { getCategory } from "../data/categories";
import { sources } from "../data/sources";

export function ReportDetail() {
  const { slug } = useParams<{ slug: string }>();
  const report = getReport(slug ?? "");

  if (!report) return <Navigate to="/reports" replace />;

  const supportingCategories = report.relatedCategorySlugs
    .map((s) => getCategory(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const supportingSources = sources.filter((s) =>
    report.relatedCategorySlugs.includes(s.categorySlug)
  );

  const otherReports = reports.filter((r) => r.slug !== report.slug).slice(0, 3);
  const isPublished = report.status === "Published";

  return (
    <article className="py-16">
      <Container narrow>
        <p className="text-xs font-semibold uppercase tracking-wide text-forest">Report</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate dark:text-warm-white sm:text-4xl">
          {report.title}
        </h1>
        <div className="mt-5 flex items-center gap-3">
          <span
            className={
              isPublished
                ? "inline-flex items-center rounded-full bg-forest-soft px-2.5 py-1 text-xs font-medium text-forest dark:bg-forest/15"
                : "inline-flex items-center rounded-full bg-amber-soft px-2.5 py-1 text-xs font-medium text-amber dark:bg-amber/15"
            }
          >
            {report.status}
          </span>
          <span className="text-sm text-graphite dark:text-graphite-light">
            {isPublished && report.publishedDate
              ? `Published ${report.publishedDate}`
              : "GLAF Publications Index, 2026–2027 research cycle"}
          </span>
        </div>

        {!report.body && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Executive Summary</h2>
            <p className="mt-3 leading-relaxed text-graphite dark:text-graphite-light">
              {report.longDescription}
            </p>
          </section>
        )}

        {!isPublished && (
          <div className="mt-8 rounded-lg border border-amber/30 bg-amber-soft px-5 py-4 text-sm text-amber dark:bg-amber/10">
            This report is in active development as part of GLAF's 2026–2027 research
            cycle. The supporting research below reflects the evidence base it draws on.
          </div>
        )}

        {report.body && (
          <div className="mt-10 flex flex-col gap-10">
            {report.body.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-semibold text-slate dark:text-warm-white">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-graphite dark:text-graphite-light">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </Container>

      <Container className="mt-14">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">
          Supporting Research{" "}
          <span className="text-graphite dark:text-graphite-light">({supportingSources.length})</span>
        </h2>
        <p className="mt-2 text-sm text-graphite dark:text-graphite-light">
          Drawn from{" "}
          {supportingCategories.map((c, i) => (
            <span key={c.slug}>
              <Link to={`/research/${c.slug}`} className="font-medium text-forest hover:underline">
                {c.title}
              </Link>
              {i < supportingCategories.length - 1 ? " and " : ""}
            </span>
          ))}
          .
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportingSources.map((s) => (
            <SourceCard key={s.id} source={s} />
          ))}
        </div>
      </Container>

      <Container className="mt-16">
        <div className="border-t border-graphite/10 pt-10 dark:border-warm-white/10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
            Related Reports
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {otherReports.map((r) => (
              <li key={r.slug}>
                <Link to={`/reports/${r.slug}`} className="text-sm font-medium text-forest hover:underline">
                  {r.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </article>
  );
}
