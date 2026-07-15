import { Container } from "../components/Container";
import { CategoryCard } from "../components/CategoryCard";
import { categories } from "../data/categories";

export function Research() {
  return (
    <Container className="py-20">
      <p className="text-xs font-semibold uppercase tracking-wide text-forest">Research</p>
      <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate dark:text-warm-white sm:text-4xl">
        Six research programs, one evidence-based approach.
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-graphite dark:text-graphite-light">
        Every GLAF research page is generated from our curated evidence library and
        follows the same structure: an executive summary, evidence strength rating,
        key statistics, major findings, areas of consensus, competing viewpoints,
        research gaps, and a complete bibliography.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </Container>
  );
}
