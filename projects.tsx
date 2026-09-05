import { useMemo, useState } from "react";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { categories, experience, type Category } from "./portfolio";
import { cn } from "./utils";

type Filter = "All" | Category;

const filters: Filter[] = ["All", ...categories];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? experience
        : experience.filter((role) => role.category === filter),
    [filter],
  );

  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resume"
          title="Work Experience"
          description="Explore the hands-on experience that built the knowledge, work ethic, and standard of customer service behind the work today."
        />

        <fieldset className="mt-8 border-t border-rule pt-8">
          <legend className="sr-only">Filter work experience by category</legend>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Experience categories"
          >
            {filters.map((item) => {
              const active = item === filter;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(item)}
                  className={cn(
                    "inline-flex h-10 items-center rounded-full border px-4 text-sm transition-colors duration-quick ease-smooth",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active
                      ? "border-accent bg-accent font-semibold text-accent-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-subtle hover:text-foreground",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </fieldset>

        <ol className="mt-8 grid gap-4 lg:grid-cols-2">
          {visible.map((role) => (
            <li
              key={role.id}
              data-cat={role.category}
              className="flex flex-col rounded-lg border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-muted-foreground tabular-nums">
                  {role.period}
                </p>
                <span className="label-mono rounded-full border border-border px-2.5 py-1 text-subtle">
                  {role.category}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground">
                {role.company}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{role.role}</p>
              <p className="mt-1 text-sm text-subtle">{role.location}</p>

              <p className="mt-5 border-t border-rule pt-5 text-sm leading-relaxed text-muted-foreground">
                {role.summary}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
