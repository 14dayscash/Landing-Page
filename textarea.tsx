import type { TextareaHTMLAttributes } from "react";
import { cn } from "./utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full rounded-sm border border-border bg-background px-3.5 py-3 text-sm text-foreground",
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
