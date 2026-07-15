import { Container } from "../components/Container";

const principles = [
  "Evidence before opinion.",
  "Transparency over advocacy.",
  "Curiosity over ideology.",
  "Independent research.",
  "Technical accuracy.",
  "Long-term thinking.",
  "Global perspective.",
];

const sourceTiers = [
  {
    tier: "Tier 1 — Highest Priority",
    label: "Peer-reviewed journals, leading universities, research institutes",
    examples:
      "Stanford HAI, Stanford AI Index, MIT CSAIL, Berkeley BAIR, Harvard Berkman Klein, Carnegie Mellon, Oxford, Cambridge, Princeton, Cornell, ETH Zurich, EPFL, Alan Turing Institute",
  },
  {
    tier: "Tier 2",
    label: "Government and standards bodies",
    examples: "NIST, DOE, OECD, NSF, United Nations, European Union, National Academies, Congressional Research Service",
  },
  {
    tier: "Tier 3",
    label: "Think tanks",
    examples: "RAND, Brookings, CNAS, Partnership on AI, World Economic Forum, Institute for the Future",
  },
  {
    tier: "Tier 4",
    label: "Industry — supports, not defines, the evidence",
    examples: "Google, Microsoft, NVIDIA, Anthropic, OpenAI, AWS",
  },
];

export function About() {
  return (
    <Container narrow className="py-20">
      <p className="text-xs font-semibold uppercase tracking-wide text-forest">About</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate dark:text-warm-white sm:text-4xl">
        Independent. Evidence-Based. Non-Partisan.
      </h1>
      <p className="mt-2 text-sm font-medium text-graphite dark:text-graphite-light">
        GLAF (Global Local AI Foundation)
      </p>

      <div className="mt-8 space-y-4 text-lg leading-relaxed text-graphite dark:text-graphite-light">
        <p>
          GLAF is an independent AI research foundation dedicated to improving public
          understanding of artificial intelligence and its broader societal impacts.
        </p>
        <p>
          Our research spans AI infrastructure, sustainability, governance, privacy,
          digital sovereignty and future AI systems.
        </p>
        <p>We do not advocate predetermined technological outcomes.</p>
        <p className="font-medium text-slate dark:text-warm-white">
          We follow the evidence wherever it leads.
        </p>
        <p>
          Our objective is to produce research that is technically rigorous, transparent
          and useful for decision makers.
        </p>
      </div>

      <section className="mt-16 rounded-lg border border-forest/25 bg-forest-soft px-6 py-6 dark:bg-forest/10">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Organization</h2>
        <p className="mt-3 leading-relaxed text-graphite dark:text-graphite-light">
          GLAF is the public-facing research initiative of the Global Local AI
          Foundation, a U.S. 501(c)(3) nonprofit dedicated to advancing independent
          research into artificial intelligence, infrastructure, sustainability,
          governance, privacy, and long-term societal impact.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Principles</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {principles.map((p) => (
            <li
              key={p}
              className="rounded-lg border border-graphite/12 bg-white px-4 py-3 text-sm text-slate dark:border-warm-white/10 dark:bg-slate-dim dark:text-warm-white-dim"
            >
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Methodology</h2>
        <p className="mt-3 leading-relaxed text-graphite dark:text-graphite-light">
          Every source in the GLAF research library must be original whenever possible,
          evidence-based, properly cited, and linked to its original publication. We
          never summarize opinion pieces as evidence, and we always prefer primary
          sources.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Evidence Standards — Source Priority</h2>
        <div className="mt-5 space-y-5">
          {sourceTiers.map((t) => (
            <div key={t.tier} className="border-l-2 border-forest/40 pl-4">
              <p className="font-medium text-slate dark:text-warm-white">{t.tier}</p>
              <p className="mt-1 text-sm text-graphite dark:text-graphite-light">{t.label}</p>
              <p className="mt-1 text-xs text-graphite/80 dark:text-graphite-light/80">{t.examples}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-graphite/10 pt-10 dark:border-warm-white/10">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Partners</h2>
        <p className="mt-3 text-sm text-graphite dark:text-graphite-light">
          GLAF is building relationships with universities, government agencies, and
          research institutions. Partner organizations will be featured here as those
          collaborations are established.
        </p>
      </section>
    </Container>
  );
}
