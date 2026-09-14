import { MessageSquare, Phone } from "lucide-react";
import { smsHref, telHref } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={telHref()}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-paper-2 text-sm font-semibold text-ink shadow-[inset_0_0_0_1px_var(--color-line)]"
        >
          <Phone className="size-4" />
          Call Fred
        </a>
        <a
          href={smsHref()}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-navy text-sm font-semibold text-cream"
        >
          <MessageSquare className="size-4" />
          Text a photo
        </a>
      </div>
    </div>
  );
}
