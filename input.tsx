import type { InputHTMLAttributes } from "react";
import { cn } from "./utils";

export function Input({
  className,
  type = "text",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-sm border border-border bg-background px-3.5 text-sm text-foreground",
        "placeholder:text-subtle",
        "transition-[border-color,box-shadow] duration-quick ease-smooth",
        "hover:border-subtle focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
