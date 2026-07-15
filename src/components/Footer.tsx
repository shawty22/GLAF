import { Link } from "react-router-dom";
import { categories } from "../data/categories";

export function Footer() {
  return (
    <footer className="border-t border-graphite/10 bg-warm-white dark:border-warm-white/10 dark:bg-slate">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="font-semibold tracking-tight text-slate dark:text-warm-white">
              Global Local AI Foundation (GLAF)
            </div>
            <p className="mt-1 text-xs font-medium text-forest">
              U.S. 501(c)(3) Nonprofit Research Organization
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-graphite dark:text-graphite-light">
              Independent Research on Artificial Intelligence, Infrastructure and ESG.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-slate hover:text-forest dark:text-warm-white-dim dark:hover:text-forest">Home</Link></li>
              <li><Link to="/research" className="text-slate hover:text-forest dark:text-warm-white-dim dark:hover:text-forest">Research</Link></li>
              <li><Link to="/library" className="text-slate hover:text-forest dark:text-warm-white-dim dark:hover:text-forest">Evidence</Link></li>
              <li><Link to="/ecosystem" className="text-slate hover:text-forest dark:text-warm-white-dim dark:hover:text-forest">Expand</Link></li>
              <li><Link to="/about" className="text-slate hover:text-forest dark:text-warm-white-dim dark:hover:text-forest">About</Link></li>
              <li><Link to="/reports" className="text-slate hover:text-forest dark:text-warm-white-dim dark:hover:text-forest">Future Reports</Link></li>
              <li><Link to="/get-involved" className="text-slate hover:text-forest dark:text-warm-white-dim dark:hover:text-forest">Join</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
              Research Categories
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/research/${c.slug}`}
                    className="text-slate hover:text-forest dark:text-warm-white-dim dark:hover:text-forest"
                  >
                    {c.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-graphite dark:text-graphite-light">
              Mission
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate dark:text-warm-white-dim">
              Independent.<br />Evidence-Based.<br />Non-Partisan.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-graphite/10 pt-6 text-xs text-graphite dark:border-warm-white/10 dark:text-graphite-light">
          Copyright © Global Local AI Foundation (GLAF). A U.S. 501(c)(3) nonprofit.
        </div>
      </div>
    </footer>
  );
}
