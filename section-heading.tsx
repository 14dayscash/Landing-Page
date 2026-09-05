import { cn } from "./utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      <p className="label-mono text-accent">{eyebrow}</p>
      <h2 className="mt-4 font-display text-title leading-title tracking-display text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[62ch] text-lede leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
