import type { LabelHTMLAttributes } from "react";
import { cn } from "./utils";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-xs font-medium tracking-caps uppercase text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
