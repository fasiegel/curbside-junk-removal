import { create } from "zustand";
import { emptyQty, selectedLines, tierFromWeight, loadWeight } from "@/lib/pricing";

type CartState = {
  qty: Record<string, number>;
  add: (id: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, n: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()((set, get) => ({
  qty: emptyQty(),
  add: (id) => {
    const current = get().qty[id] ?? 0;
    set({ qty: { ...get().qty, [id]: Math.min(10, current + 1) } });
  },
  remove: (id) => {
    const current = get().qty[id] ?? 0;
    set({ qty: { ...get().qty, [id]: Math.max(0, current - 1) } });
  },
  setQty: (id, n) => {
    set({ qty: { ...get().qty, [id]: Math.max(0, Math.min(10, n)) } });
  },
  clear: () => set({ qty: emptyQty() }),
}));

export function cartSmsBody(qty: Record<string, number>) {
  const lines = selectedLines(qty);
  const weight = loadWeight(qty);
  const result = tierFromWeight(weight);
  const itemLines =
    lines.length === 0
      ? "I'll send a photo of the pile."
      : lines.map((line) => `• ${line.qty}× ${line.label}`).join("\n");
  const price = result.tooBig
    ? "This load is bigger than the posted tiers. Please quote from photos."
    : result.tier
      ? `Load size: ${result.tier.label} · ${result.tier.capacity}\nPosted curbside: $${result.tier.price}`
      : "Please quote from photos.";
  return [
    "Hi Fred, I'd like to book this furniture removal.",
    itemLines,
    price,
    "I'll stage items at a drive-up spot.",
  ].join("\n\n");
}
