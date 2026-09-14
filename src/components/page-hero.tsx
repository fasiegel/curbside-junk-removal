import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="font-display text-sm tracking-[0.18em] text-navy">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-wide text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}
