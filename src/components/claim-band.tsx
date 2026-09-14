import { cn } from "@/lib/utils";

export function ClaimBand({
  image,
  alt,
  kicker,
  title,
  body,
  align = "left",
}: {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  body: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative min-h-[22rem] overflow-hidden bg-asphalt text-cream sm:min-h-[26rem]">
      <img src={image} alt={alt} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/75 to-asphalt/20" />
      <div
        className={cn(
          "relative mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 py-14 sm:min-h-[26rem] sm:px-6 sm:py-16",
          align === "center" && "items-center text-center",
        )}
      >
        <p className="font-display text-sm tracking-[0.18em] text-cream/70">{kicker}</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-wide sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80">{body}</p>
      </div>
    </section>
  );
}
