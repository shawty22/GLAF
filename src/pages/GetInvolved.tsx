import { Container } from "../components/Container";

const audiences = [
  "Researchers",
  "Policy experts",
  "Universities",
  "Government agencies",
  "Industry",
  "Students",
  "Community organisations",
];

export function GetInvolved() {
  return (
    <Container narrow className="py-20">
      <p className="text-xs font-semibold uppercase tracking-wide text-forest">Get Involved</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate dark:text-warm-white sm:text-4xl">
        GLAF welcomes collaboration on independent research, publications and
        educational initiatives.
      </h1>

      <div className="mt-10 flex flex-wrap gap-2.5">
        {audiences.map((a) => (
          <span
            key={a}
            className="rounded-full border border-graphite/20 px-4 py-2 text-sm text-slate dark:border-warm-white/20 dark:text-warm-white-dim"
          >
            {a}
          </span>
        ))}
      </div>

      <section className="mt-16 rounded-lg border border-forest/25 bg-forest-soft px-6 py-6 dark:bg-forest/10">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Support GLAF</h2>
        <p className="mt-3 text-sm leading-relaxed text-graphite dark:text-graphite-light">
          GLAF is the public-facing research initiative of the Global Local AI
          Foundation, a U.S. registered 501(c)(3) nonprofit. As a registered
          501(c)(3), eligible donations may be tax-deductible under applicable law.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-graphite dark:text-graphite-light">
          Donation details are coming soon. Reach out via the contact information
          below in the meantime.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate dark:text-warm-white">Contact</h2>
        <p className="mt-3 text-sm leading-relaxed text-graphite dark:text-graphite-light">
          For research, partnership and media inquiries, reach us at{" "}
          <a
            href="mailto:contact@globallocalai.org"
            className="font-medium text-forest hover:underline"
          >
            contact@globallocalai.org
          </a>
          .
        </p>
      </section>
    </Container>
  );
}
