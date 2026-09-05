import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { certifications, skillGroups } from "./portfolio";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-rule py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="What the work actually requires."
          description="Acquisition, underwriting, negotiations, and operations, plus the field skills that put new acquisition contracts on the table."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-border bg-card p-6 sm:p-7"
            >
              <h3 className="label-mono text-accent">{group.title}</h3>
              <ul className="mt-5 divide-y divide-rule">
                {group.items.map((item) => (
                  <li key={item} className="py-2.5 text-[0.9375rem] text-foreground first:pt-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="label-mono text-subtle">Licenses &amp; certificates</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-lg border border-border bg-card p-5"
              >
                <p className="font-semibold tracking-tight text-foreground">
                  {cert.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
                <p className="mt-1 text-sm text-subtle tabular-nums">
                  {cert.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
