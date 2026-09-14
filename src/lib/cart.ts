import { create } from "zustand";
import { CATALOG, quoteForUnits, type CatalogItem } from "@/lib/pricing";

type CartState = {
  qty: Record<string, number>;
  add: (id: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, n: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()((set, get) => ({
  qty: {},
  add: (id) => {
    const current = get().qty[id] ?? 0;
    set({ qty: { ...get().qty, [id]: current + 1 } });
  },
  remove: (id) => {
    const current = get().qty[id] ?? 0;
    if (current <= 1) {
      const next = { ...get().qty };
      delete next[id];
      set({ qty: next });
      return;
    }
    set({ qty: { ...get().qty, [id]: current - 1 } });
  },
  setQty: (id, n) => {
    if (n <= 0) {
      const next = { ...get().qty };
      delete next[id];
      set({ qty: next });
      return;
    }
    set({ qty: { ...get().qty, [id]: n } });
  },
  clear: () => set({ qty: {} }),
}));

export function cartLines(qty: Record<string, number>) {
  const lines: { item: CatalogItem; count: number; units: number }[] = [];
  for (const item of CATALOG) {
    const count = qty[item.id] ?? 0;
    if (count > 0) lines.push({ item, count, units: item.units * count });
  }
  return lines;
}

export function cartUnits(qty: Record<string, number>) {
  return cartLines(qty).reduce((sum, line) => sum + line.units, 0);
}

export function cartQuote(qty: Record<string, number>) {
  return quoteForUnits(cartUnits(qty));
}

export function cartSmsBody(qty: Record<string, number>, extras?: string) {
  const lines = cartLines(qty);
  const quote = cartQuote(qty);
  const itemLines =
    lines.length === 0
      ? "I need a curbside pickup."
      : lines.map((line) => `• ${line.count}× ${line.item.name}`).join("\n");
  const price =
    quote.curb == null
      ? "Please quote from photos."
      : quote.estimated
        ? `Estimated curbside: $${quote.curb} (please confirm from photos)`
        : `Posted curbside: $${quote.curb}`;
  const parts = [
    "Hi Fred — curbside junk pickup request.",
    itemLines,
    price,
    extras,
    "I'll stage items at a drive-up spot.",
  ].filter(Boolean);
  return parts.join("\n\n");
}
