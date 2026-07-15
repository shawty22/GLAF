import { NavLink } from "react-router-dom";
import { useTheme } from "../lib/theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/library", label: "Evidence" },
  { to: "/ecosystem", label: "Expand" },
  { to: "/about", label: "About" },
  { to: "/reports", label: "Future Reports" },
];

function navClass({ isActive }: { isActive: boolean }) {
  return [
    "relative text-sm transition-colors py-1",
    "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-forest after:transition-all after:duration-200",
    isActive
      ? "text-slate dark:text-warm-white font-medium after:w-full"
      : "text-graphite hover:text-slate dark:text-graphite-light dark:hover:text-warm-white after:w-0 hover:after:w-full",
  ].join(" ");
}

export function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-warm-white/90 backdrop-blur dark:border-warm-white/10 dark:bg-slate/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <NavLink to="/" className="shrink-0 leading-tight">
          <span className="font-semibold tracking-tight text-slate dark:text-warm-white">GLAF</span>
          <span className="hidden text-xs font-normal text-graphite dark:text-graphite-light sm:block">
            Global Local AI Foundation &middot; 501(c)(3)
          </span>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <NavLink
            to="/library"
            aria-label="Search research library"
            className="rounded-md p-2 text-graphite transition-colors hover:bg-graphite/10 hover:text-slate dark:text-graphite-light dark:hover:bg-warm-white/10 dark:hover:text-warm-white"
          >
            <SearchIcon />
          </NavLink>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-md p-2 text-graphite transition-colors hover:bg-graphite/10 hover:text-slate dark:text-graphite-light dark:hover:bg-warm-white/10 dark:hover:text-warm-white"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <NavLink
            to="/get-involved"
            className="hidden rounded-md bg-forest px-4 py-2 text-sm font-medium text-warm-white transition-colors hover:bg-forest/90 sm:inline-block"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="4.5" />
      <path
        strokeLinecap="round"
        d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}
