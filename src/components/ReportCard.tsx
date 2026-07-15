import { Link } from "react-router-dom";
import type { Report } from "../data/types";

export function ReportCard({ report }: { report: Report }) {
  return (
    <Link
      to={`/reports/${report.slug}`}
      className="group flex flex-col justify-between gap-4 rounded-xl border border-graphite/12 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-forest/30 hover:bg-warm-white-raised hover:shadow-lg dark:border-warm-white/10 dark:bg-slate-dim dark:hover:bg-slate-raised sm:flex-row sm:items-center"
    >
      <div>
        <h3 className="text-lg font-semibold text-slate transition-colors group-hover:text-forest dark:text-warm-white">{report.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-graphite dark:text-graphite-light">
          {report.description}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <span
          className={
            report.status === "Published"
              ? "inline-flex items-center rounded-full bg-forest-soft px-2.5 py-1 text-xs font-medium text-forest dark:bg-forest/15"
              : "inline-flex items-center rounded-full bg-amber-soft px-2.5 py-1 text-xs font-medium text-amber dark:bg-amber/15"
          }
        >
          {report.status}
        </span>
        <span className="text-sm font-medium text-forest transition-transform group-hover:translate-x-0.5">
          Read Report →
        </span>
      </div>
    </Link>
  );
}
