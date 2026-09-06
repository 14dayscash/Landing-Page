import headshot from "./dominic-headshot.jpg";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-rule bg-wash py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <img
              src={headshot}
              alt="Dominic McClelland"
              width={880}
              height={880}
              loading="lazy"
              decoding="async"
              className="block size-40 rounded-full border border-border object-cover sm:size-52"
            />
            <div className="mt-9">
              <SectionHeading
                eyebrow="Profile"
                title="Experienced Operator, Young Entrepreneur"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-6 divide-y divide-rule rounded-lg border border-border bg-card p-6 text-lede leading-relaxed text-muted-foreground sm:p-8">
              <p>
                Dominic McClelland is the Operations Manager at House Junkies
                Inc. ranked Visalia's #1 real estate investment group by volume
                on SFR Analytics and partner at the Ulloa Investment Group. His
                day to day work sits inside a fully vertically integrated stack:
                acquisitions, private funding, construction, and a brokerage
                arm. No banks. No outside brokers. No out of town contractors.
                Every deal controlled from acquisition to resale.
              </p>
              <p className="pt-6">
                Entrepreneurship has been Dominic's career through-line. He
                co-founded Quick Cars California in 2023 and ran it as CEO
                through January 2026, pivoting a detailing shop into
                subscriptions paired with auto sales. Before that honing in
                sales skills at Visalia GMC, learning customer service skills at
                Round Table Pizza, and doing a two-and-a-half-year general
                contracting apprenticeship at Albright Plumbing among other
                ventures.
              </p>
              <p className="pt-6">
                Currently pursuing a Business Administration degree at College
                of the Sequoias. We are taking over, one street at a time!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
