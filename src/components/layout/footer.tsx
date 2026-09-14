import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-asphalt text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo tone="cream" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            Curbside junk pickup across San Diego — a service of {SITE.parent}. Locally owned.
            Veteran owned. Posted prices. You do not need to be home.
          </p>
          <p className="mt-4 text-sm text-cream/70">
            {SITE.address}
            <br />
            {SITE.hours}
            <br />
            {SITE.hoursNote}
          </p>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.14em] text-cream/50">SITE</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.14em] text-cream/50">FRED</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <a href={`tel:+1${SITE.phone}`} className="hover:text-cream">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-cream">
                {SITE.email}
              </a>
            </li>
            <li>Full-service through {SITE.parent}</li>
            <li>Venmo {SITE.venmo}</li>
            <li>Cash App {SITE.cashApp}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {SITE.parent}. CurbsideJunkRemoval.com</p>
          <p>Quoted price guarantee · Recycle & donate first</p>
        </div>
      </div>
    </footer>
  );
}
