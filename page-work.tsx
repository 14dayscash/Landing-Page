import { Contact } from "./contact";
import { Container } from "./container";
import { Projects } from "./projects";
import { Skills } from "./skills";

export function WorkPage() {
  return (
    <>
      <section className="border-b border-rule pb-12 pt-14 sm:pb-16 sm:pt-20">
        <Container>
          <p className="label-mono text-subtle">Dominic McClelland</p>
          <h1 className="mt-6 font-display text-title leading-title tracking-display text-foreground">
            Work Experience &amp; Skills
          </h1>
          <p className="mt-5 max-w-[62ch] text-lede leading-relaxed text-muted-foreground">
            Every role, venture, trade, and volunteer position that built the way
            I operate today.
          </p>
        </Container>
      </section>
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
