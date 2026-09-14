import { Container } from "./container";

export function RehabShowcase() {
  return (
    <section className="border-b border-rule py-12 sm:py-16">
      <Container>
        <p className="label-mono text-accent">PROJECT EXAMPLE</p>
        <h2 className="mt-4 font-display text-title leading-title tracking-display text-foreground">
          One of Our Visalia Rehabs, Start to Finish
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <figure>
            <img
              src="/images/rehab-before.jpg"
              alt="Visalia house before renovation, exterior stripped to framing"
              width={1179}
              height={722}
              className="w-full rounded-lg border border-border object-cover"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              BEFORE
            </figcaption>
          </figure>
          <figure>
            <img
              src="/images/rehab-after.jpg"
              alt="Same Visalia house after renovation, repainted and finished"
              width={1179}
              height={518}
              className="w-full rounded-lg border border-border object-cover"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              AFTER
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
