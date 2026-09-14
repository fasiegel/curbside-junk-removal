import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageSquare, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV, SITE, smsHref, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <p className="bg-navy px-4 py-2 text-center text-xs leading-snug text-cream sm:px-6 sm:text-sm">
        Curbside Junk Removal is a service provided by{" "}
        <a
          href={SITE.parentUrl}
          className="font-semibold underline decoration-cream/40 underline-offset-2 hover:decoration-cream"
        >
          Fred's Junk Removal
        </a>
        {" "}
        — San Diego's top-rated and most trusted junk removal service.
      </p>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.filter((item) => item.to !== "/").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-ink",
                (pathname === item.to || (item.to !== "/" && pathname.startsWith(`${item.to}/`))) && "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" size="sm" asChild className="hidden xl:inline-flex">
            <a href={telHref()}>
              <Phone />
              {SITE.phoneDisplay}
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={smsHref()}>
              <MessageSquare />
              Text a photo
            </a>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-paper px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium text-ink-soft",
                  (pathname === item.to || (item.to !== "/" && pathname.startsWith(`${item.to}/`))) && "bg-paper-2",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button variant="outline" asChild>
              <a href={telHref()}>
                <Phone />
                Call
              </a>
            </Button>
            <Button asChild>
              <a href={smsHref()}>
                <MessageSquare />
                Text Fred
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
