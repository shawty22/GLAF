import { Link } from "react-router-dom";
import { Container } from "../components/Container";

export function NotFound() {
  return (
    <Container narrow className="py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-forest">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate dark:text-warm-white">
        Page not found
      </h1>
      <p className="mt-4 text-graphite dark:text-graphite-light">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="mt-8 inline-block text-sm font-medium text-forest hover:underline">
        ← Back to home
      </Link>
    </Container>
  );
}
