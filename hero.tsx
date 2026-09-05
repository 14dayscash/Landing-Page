import houseJunkiesLogo from "./logo-house-junkies.png";
import { ArrowDownRight } from "lucide-react";
import { Button } from "./button";
import { Container } from "./container";
import { stats } from "./portfolio";
import { site } from "./site";

export function Hero() {
  return (
    <section className="border-b border-rule pb-16 pt-12 sm:pb-24 sm:pt-20">
      <Container>
        <div className="stagger-in">
          <p className="label-mono text-subtle">
            {site.location} - Real estate operations
          </p>
          <h1 className="mt-6 font-display text-display leading-display tracking-display text-foreground">
            Dominic
            <span className="block">McClelland</span>
          </h1>
          <div className="mt-9 flex max-w-4xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <p className="max-w-[48ch] text-lede leading-relaxed text-muted-foreground">
              Operations manager for Visalia's highest-volume investment group.
              Experienced entrepreneur and consultant. Current business student
              at College of the Sequoias.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">
                  Get in Contact
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#work">Work Experience</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-14 sm:mt-16">
        <figure className="w-fit">
          <div className="rounded-lg border border-border bg-card px-8 py-7 sm:px-12 sm:py-9">
            <img
              src={houseJunkiesLogo}
              alt="House Junkies Inc."
              width={900}
              height={338}
              className="block h-auto w-52 sm:w-72"
            />
          </div>
          <figcaption className="label-mono mt-4 text-subtle">
            House Junkies Inc | #1 investors in Visalia, per SFRAnalytics.com
          </figcaption>
        </figure>
      </Container>

      <Container className="mt-14">
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-card p-5 sm:p-6"
            >
              <dd className="font-display text-4xl leading-none tracking-display text-foreground tabular-nums sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-3 text-sm text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
