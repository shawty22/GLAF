import { Container } from "../components/Container";
import { faviconUrl } from "../data/institutionLinks";
import { ecosystemSections, type EcosystemOrg } from "../data/ecosystem";

function OrgCard({ org }: { org: EcosystemOrg }) {
  const imgSrc = org.logo ?? faviconUrl(org.domain);
  return (
    <a
      href={`https://${org.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-graphite/12 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-forest/30 hover:bg-warm-white-raised hover:shadow-lg dark:border-warm-white/10 dark:bg-slate-dim dark:hover:bg-slate-raised"
    >
      <div className="flex items-center gap-3">
        <img
          src={imgSrc}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 shrink-0 rounded-sm object-contain grayscale transition-all duration-200 group-hover:grayscale-0 dark:bg-warm-white-dim dark:p-0.5"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src !== faviconUrl(org.domain)) {
              img.src = faviconUrl(org.domain);
            } else {
              img.style.display = "none";
            }
          }}
        />
        <h3 className="text-base font-semibold leading-snug text-slate transition-colors group-hover:text-forest dark:text-warm-white">
          {org.name}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-graphite dark:text-graphite-light">
        {org.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-forest opacity-0 transition-opacity group-hover:opacity-100">
        Visit official site
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
        </svg>
      </span>
    </a>
  );
}

export function Ecosystem() {
  return (
    <Container className="py-20">
      <p className="text-xs font-semibold uppercase tracking-wide text-forest">AI Ecosystem</p>
      <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate dark:text-warm-white sm:text-4xl">
        A curated directory of organizations shaping the future of AI.
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-graphite dark:text-graphite-light">
        GLAF maintains this curated directory of organizations whose research,
        education, standards, and public-interest initiatives contribute to the
        future of artificial intelligence. Inclusion does not imply endorsement or
        formal partnership. Our goal is to make it easier for researchers,
        students, policymakers, industry professionals, and the public to
        discover high-quality resources.
      </p>

      <div className="mt-16 flex flex-col gap-16">
        {ecosystemSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-slate dark:text-warm-white">
              {section.title}
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.orgs.map((org) => (
                <OrgCard key={org.name} org={org} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
