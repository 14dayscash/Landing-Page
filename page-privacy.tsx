import { Container } from "./container";
import { site } from "./site";

export function PrivacyPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <p className="label-mono text-accent">Legal</p>
        <h1 className="mt-4 font-display text-title leading-title tracking-display text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated September 13, 2026
        </p>

        <div className="post-body mt-10 max-w-3xl">
          <p>
            This Privacy Policy explains how Dominic McClelland, House
            Junkies Inc., House Junkies Construction LLC, and Ulloa
            Investment Group L.L.C. (referred to together as "House
            Junkies," "we," "us," or "our") collect, use, and protect
            information when you visit dominicmcclelland.com (the "Site")
            or contact us through it.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you submit the contact form on this Site, we collect the
            information you provide, which typically includes your name,
            email address, phone number, and the contents of your message.
            We do not require you to create an account or provide any
            information beyond what the form asks for.
          </p>
          <p>
            This Site does not currently use analytics or advertising
            cookies. If that changes in the future, this policy will be
            updated to reflect what is being collected and how.
          </p>

          <h2>How We Use Your Information</h2>
          <p>The information you submit is used to:</p>
          <ul>
            <li>
              Respond to your inquiry about buying, selling, or investing
              in real estate
            </li>
            <li>
              Evaluate a property you have told us about and prepare an
              offer or answer
            </li>
            <li>Maintain records of our communications with you</li>
          </ul>

          <h2>How We Share Your Information</h2>
          <p>
            We do not sell your personal information. We share information
            only as needed to operate this Site and respond to you,
            including with:
          </p>
          <ul>
            <li>
              <strong>Web3Forms</strong>, the third-party service that
              processes and delivers contact form submissions to us
            </li>
            <li>
              Attorneys, title companies, escrow companies, or other
              professionals directly involved in a transaction you have
              asked us to help with
            </li>
            <li>
              Service providers who help us operate this Site, such as our
              hosting provider
            </li>
          </ul>
          <p>
            We may also disclose information if required by law, court
            order, or to protect the rights, property, or safety of House
            Junkies or others.
          </p>

          <h2>Third-Party Services and Embedded Content</h2>
          <p>
            This Site embeds a Google Maps location on the Contact page.
            Google may collect information when that map loads, governed
            by Google's own privacy policy, not this one. Links to our
            social media profiles (Instagram, Facebook, YouTube, LinkedIn)
            take you to third-party platforms with their own separate
            privacy policies.
          </p>

          <h2>Your California Privacy Rights</h2>
          <p>
            If you are a California resident, the California Consumer
            Privacy Act (CCPA), as amended by the California Privacy
            Rights Act (CPRA), gives you the right to:
          </p>
          <ul>
            <li>Know what personal information we have collected about you</li>
            <li>Request deletion of your personal information</li>
            <li>Correct inaccurate personal information</li>
            <li>
              Opt out of the sale or sharing of personal information (we do
              not sell or share personal information for cross-context
              behavioral advertising)
            </li>
            <li>
              Not be discriminated against for exercising any of these
              rights
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the
            information at the bottom of this page.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect the information
            submitted through this Site. No method of transmission over
            the internet is completely secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain contact form submissions and related correspondence
            for as long as reasonably necessary to respond to your
            inquiry, maintain business records, and comply with legal
            obligations.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            This Site is not directed at children under the age of 13, and
            we do not knowingly collect personal information from
            children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last
            updated" date at the top of this page reflects the most recent
            revision. Continued use of the Site after changes are posted
            means you accept the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this Privacy Policy or how your information is
            handled can be directed to{" "}
            <a href={site.emailHref}>{site.email}</a> or{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
