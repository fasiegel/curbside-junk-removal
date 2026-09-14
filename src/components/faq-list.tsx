import { FAQS } from "@/lib/content";

export function FaqList({ ids }: { ids?: number[] }) {
  const items = ids ? ids.flatMap((i) => (FAQS[i] ? [FAQS[i]] : [])) : [...FAQS];
  return (
    <div className="divide-y divide-line rounded-xl bg-cream shadow-[var(--shadow-border)]">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4">
          <summary className="cursor-pointer list-none font-medium text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span className="text-muted transition-transform duration-150 group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
