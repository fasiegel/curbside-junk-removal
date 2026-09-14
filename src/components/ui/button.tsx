import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-navy text-cream hover:bg-navy-deep",
        invert: "bg-cream text-navy hover:bg-paper",
        outline:
          "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--color-line)] hover:bg-paper-2",
        ghost: "bg-transparent text-ink hover:bg-paper-2",
        asphalt: "bg-asphalt text-cream hover:bg-ink",
        onDark: "bg-transparent text-cream shadow-[inset_0_0_0_1px_rgb(251_248_242/0.3)] hover:bg-cream/10",
      },
      size: {
        sm: "h-10 px-3.5 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-5 text-base",
        xl: "h-14 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
