import { Container } from "../components/Container";
import { ReportCard } from "../components/ReportCard";
import { reports } from "../data/reports";

export function Reports() {
  return (
    <Container className="py-20">
      <p className="text-xs font-semibold uppercase tracking-wide text-forest">Reports</p>
      <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate dark:text-warm-white sm:text-4xl">
        Independent reports, synthesised from primary evidence.
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-graphite dark:text-graphite-light">
        GLAF publishes independent reports synthesising evidence from universities,
        governments, standards organisations and leading research institutions. Future
        reports will expand into AI governance, ESG, distributed intelligence, digital
        sovereignty and AI resilience.
      </p>

      <div className="mt-12 flex flex-col gap-4">
        {reports.map((r) => (
          <ReportCard key={r.slug} report={r} />
        ))}
      </div>
    </Container>
  );
}
