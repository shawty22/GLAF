import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { CategoryCard } from "../components/CategoryCard";
import { ReportCard } from "../components/ReportCard";
import { SourceCard } from "../components/SourceCard";
import { categories } from "../data/categories";
import { reports } from "../data/reports";
import { sources } from "../data/sources";
import {
  institutionLinks,
  institutionGroupOverrides,
  faviconUrl,
  type InstitutionGroup,
} from "../data/institutionLinks";
import blueMarble from "../assets/blue-marble.jpg";

const stats = [
  { value: sources.length, label: "Research Papers" },
  { value: sources.filter((s) => s.types.includes("Peer-Reviewed")).length, label: "Peer-Reviewed Sources" },
  { value: sources.filter((s) => s.types.includes("Government")).length, label: "Government & Standards Sources" },
  { value: new Set(sources.map((s) => s.institution)).size, label: "Contributing Institutions" },
  { value: categories.length, label: "Research Categories" },
  {
    value: reports.filter((r) => r.status === "Coming Soon").length,
    label: "Reports Coming Soon",
  },
];

const institutions = Array.from(new Set(sources.map((s) => s.institution))).sort();

// Group institutions by what they actually are (university, government body,
// think tank, or industry lab) — see institutionLinks.ts for why this is
// deliberately separate from the per-source citation-type tags.
function groupFor(inst: string): InstitutionGroup {
  return institutionLinks[inst]?.group ?? institutionGroupOverrides[inst] ?? "Industry Research";
}

const institutionGroups: Record<InstitutionGroup, string[]> = {
  Universities: [],
  Government: [],
  "Think Tanks": [],
  "Industry Research": [],
};
institutions.forEach((inst) => institutionGroups[groupFor(inst)].push(inst));

const featuredResearchIds = ["esg-9", "gov-8", "env-1"];
const featuredResearch = featuredResearchIds
  .map((id) => sources.find((s) => s.id === id))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

const publishedReports = reports.filter((r) => r.status === "Published");
const inDevelopmentReports = reports.filter((r) => r.status === "Coming Soon");

function InstitutionBadge({ inst }: { inst: string }) {
  const link = institutionLinks[inst];
  if (!link) {
    return (
      <span className="text-sm text-graphite/80 dark:text-graphite-light/80">{inst}</span>
    );
  }
  const imgSrc = link.logo ?? faviconUrl(link.domain);
  return (
    <a
      href={`https://${link.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      title={inst}
      className="group -mx-2 -my-1.5 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-graphite/80 transition-all duration-200 hover:bg-forest-soft hover:text-forest dark:text-graphite-light/80 dark:hover:bg-forest/12 dark:hover:text-forest"
    >
      <img
        src={imgSrc}
        alt=""
        width={20}
        height={20}
        className="max-h-5 w-auto max-w-8 rounded-sm object-contain grayscale transition-all duration-200 group-hover:scale-125 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_6px_rgba(62,124,89,0.45)] dark:bg-warm-white-dim dark:p-0.5"
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src !== faviconUrl(link.domain)) {
            img.src = faviconUrl(link.domain);
          } else {
            img.style.display = "none";
          }
        }}
      />
      {inst}
    </a>
  );
}

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-graphite/10 dark:border-warm-white/10">
        <Container className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate dark:text-warm-white sm:text-5xl">
              Artificial Intelligence is reshaping civilization.
              <br />
              Are we building it wisely?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite dark:text-graphite-light">
              GLAF is an independent research foundation examining the environmental,
              societal, governance, infrastructure and long-term implications of
              artificial intelligence through evidence-based research.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/research"
                className="rounded-md bg-forest px-6 py-3 text-sm font-medium text-warm-white transition-colors hover:bg-forest/90"
              >
                Explore the Research
              </Link>
              <Link
                to="/reports"
                className="rounded-md border border-graphite/25 px-6 py-3 text-sm font-medium text-slate transition-colors hover:border-graphite/50 dark:border-warm-white/25 dark:text-warm-white dark:hover:border-warm-white/50"
              >
                Read Reports
              </Link>
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-graphite/80 dark:text-graphite-light/80">
              Independent Research &middot; 501(c)(3) Nonprofit &middot; Evidence-Based
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-graphite dark:text-graphite-light">
              The Global Local AI Foundation is a U.S. registered 501(c)(3) nonprofit
              research organization.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={blueMarble}
              alt="The Blue Marble — Earth photographed from Apollo 17"
              width={480}
              height={480}
              className="aspect-square w-full max-w-[420px] rounded-full object-cover shadow-[0_0_0_1px_rgba(30,42,56,0.08),0_30px_60px_-20px_rgba(30,42,56,0.35)] sm:max-w-[460px]"
            />
          </div>
        </Container>
      </section>

      {/* Why Now */}
      <section className="py-20">
        <Container narrow>
          <h2 className="text-2xl font-semibold tracking-tight text-slate dark:text-warm-white">
            Why Now
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-graphite dark:text-graphite-light">
            Artificial Intelligence is becoming critical infrastructure.
          </p>
          <p className="mt-4 leading-relaxed text-graphite dark:text-graphite-light">
            Its influence now extends across energy, privacy, healthcare, national
            security, education and the global economy.
          </p>
          <p className="mt-4 leading-relaxed text-graphite dark:text-graphite-light">
            GLAF exists to bring together evidence from leading institutions to help
            society build AI that is safe, sustainable, resilient and beneficial.
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-graphite/10 bg-white py-16 dark:border-warm-white/10 dark:bg-slate-dim">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-mono text-3xl font-semibold text-slate dark:text-warm-white">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-graphite dark:text-graphite-light">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate dark:text-warm-white">
              Research Areas
            </h2>
            <Link to="/research" className="text-sm font-medium text-forest hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Research */}
      <section className="border-t border-graphite/10 py-20 dark:border-warm-white/10">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate dark:text-warm-white">
              Featured Research
            </h2>
            <Link to="/library" className="text-sm font-medium text-forest hover:underline">
              Browse the library →
            </Link>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-graphite dark:text-graphite-light">
            A sample of the primary evidence GLAF's research programs draw on.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResearch.map((s) => (
              <SourceCard key={s.id} source={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Latest Report */}
      {publishedReports.length > 0 && (
        <section className="border-t border-graphite/10 py-20 dark:border-warm-white/10">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate dark:text-warm-white">
                Latest Report
              </h2>
              <Link to="/reports" className="text-sm font-medium text-forest hover:underline">
                View all →
              </Link>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-graphite dark:text-graphite-light">
              GLAF's first published report.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {publishedReports.map((r) => (
                <ReportCard key={r.slug} report={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Research Pipeline */}
      <section className="border-t border-graphite/10 py-20 dark:border-warm-white/10">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate dark:text-warm-white">
              Research Pipeline
            </h2>
            <Link to="/reports" className="text-sm font-medium text-forest hover:underline">
              View all →
            </Link>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-graphite dark:text-graphite-light">
            GLAF's next flagship reports, currently in active research and drafting.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {inDevelopmentReports.map((r) => (
              <ReportCard key={r.slug} report={r} />
            ))}
          </div>
        </Container>
      </section>

      {/* Research Library teaser */}
      <section className="border-t border-graphite/10 bg-white py-20 dark:border-warm-white/10 dark:bg-slate-dim">
        <Container narrow>
          <h2 className="text-2xl font-semibold tracking-tight text-slate dark:text-warm-white">
            Research Library
          </h2>
          <p className="mt-5 leading-relaxed text-graphite dark:text-graphite-light">
            GLAF maintains a curated research library built from peer-reviewed
            publications, government reports, standards, think tanks and industry
            research.
          </p>
          <p className="mt-4 text-sm font-medium text-slate dark:text-warm-white">
            Every research page includes:
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-graphite dark:text-graphite-light sm:grid-cols-4">
            {[
              "Executive Summary",
              "Evidence Strength",
              "Key Statistics",
              "Major Findings",
              "Areas of Consensus",
              "Competing Viewpoints",
              "Research Gaps",
              "Curated Bibliography",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-forest" /> {item}
              </li>
            ))}
          </ul>
          <Link
            to="/library"
            className="mt-8 inline-block rounded-md bg-forest px-6 py-3 text-sm font-medium text-warm-white transition-colors hover:bg-forest/90"
          >
            Browse the Research Library
          </Link>
        </Container>
      </section>

      {/* Institutions, grouped */}
      <section className="py-16">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
            Research drawn from
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {(Object.keys(institutionGroups) as InstitutionGroup[]).map((group) => (
              <div
                key={group}
                className="flex flex-col gap-3 border-t border-graphite/10 pt-6 dark:border-warm-white/10 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <h3 className="shrink-0 text-xs font-semibold uppercase tracking-wide text-forest sm:w-36">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  {institutionGroups[group].map((inst) => (
                    <InstitutionBadge key={inst} inst={inst} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
