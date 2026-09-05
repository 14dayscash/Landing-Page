import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-[color,background-color,border-color,opacity,transform] duration-quick ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-accent-foreground hover:bg-[#ffdd5c] active:bg-[#f0c42b]",
        outline:
          "border border-border bg-transparent text-foreground hover:border-subtle hover:bg-muted",
        ghost: "text-foreground hover:bg-wash",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 rounded-sm px-5 text-sm",
        sm: "h-9 rounded-sm px-3.5 text-sm",
        lg: "h-12 rounded-sm px-6 text-sm",
        icon: "size-11 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
