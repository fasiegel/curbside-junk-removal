import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCta } from "@/components/layout/mobile-cta";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh min-w-0 flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 pb-24 sm:pb-0">{children}</main>
      <Footer />
      <MobileCta />
    </div>
  );
}
