import { Container } from "./container";
import { site } from "./site";

export function TermsPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <p className="label-mono text-accent">Legal</p>
        <h1 className="mt-4 font-display text-title leading-title tracking-display text-foreground">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated September 13, 2026
        </p>

        <div className="post-body mt-10 max-w-3xl">
          <p>
            These Terms of Service ("Terms") govern your use of
            dominicmcclelland.com (the "Site"), operated by Dominic
            McClelland on behalf of House Junkies Inc., House Junkies
            Construction LLC, and Ulloa Investment Group L.L.C.
            (referred to together as "House Junkies," "we," "us," or
            "our"). By using this Site, you agree to these Terms.
          </p>

          <h2>What This Site Is</h2>
          <p>
            This Site is an informational and marketing resource. It
            describes our real estate acquisition, construction, and
            brokerage services in Visalia and Tulare County, California,
            and includes blog content, work history, and contact
            information. Nothing on this Site is, by itself, an offer to
            purchase your property, a binding contract, or a guarantee of
            any specific price or terms. Any actual offer or agreement to
            buy, sell, or perform work on a property is made separately,
            in writing, and signed by the parties involved.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            Content on this Site, including blog posts about probate,
            California real estate law, market conditions, or
            construction, is provided for general informational purposes
            only. It is not legal, tax, financial, or professional advice,
            and it does not create an attorney-client or any other
            professional relationship. You should consult a licensed
            attorney, accountant, or other qualified professional about
            your specific situation before making decisions based on
            anything you read here.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We make reasonable efforts to keep information on this Site
            current and accurate, including figures we cite from
            third-party sources such as SFR Analytics. We do not guarantee
            that all content is complete, current, or error-free, and
            information may change without notice. Rankings, statistics,
            and market data reflect a point in time and are subject to
            change.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The text, graphics, logos, and other content on this Site are
            owned by House Junkies or used with permission, and are
            protected by copyright and other intellectual property laws.
            You may not reproduce, distribute, or create derivative works
            from this content without our prior written permission, other
            than sharing links to it.
          </p>

          <h2>Acceptable Use</h2>
          <p>By using this Site, you agree not to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose</li>
            <li>
              Attempt to gain unauthorized access to the Site or its
              underlying systems
            </li>
            <li>
              Submit false, misleading, or fraudulent information through
              the contact form
            </li>
            <li>
              Interfere with the proper functioning of the Site
            </li>
          </ul>

          <h2>Third-Party Links and Embedded Content</h2>
          <p>
            This Site links to third-party platforms, including social
            media profiles, and embeds third-party content such as a
            Google Maps location. We do not control and are not
            responsible for the content, policies, or practices of any
            third-party site or service.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            This Site and its content are provided "as is" without
            warranties of any kind, express or implied, including
            warranties of merchantability, fitness for a particular
            purpose, or non-infringement, to the fullest extent permitted
            by law.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, House Junkies and
            Dominic McClelland will not be liable for any indirect,
            incidental, special, or consequential damages arising from
            your use of, or inability to use, this Site, or from any
            decision made in reliance on its content.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold House Junkies harmless from
            any claim or demand, including reasonable attorneys' fees,
            arising out of your misuse of this Site or violation of these
            Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of
            California, without regard to conflict of law principles. Any
            dispute arising from these Terms or your use of this Site will
            be resolved in the state or federal courts located in Tulare
            County, California.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The "Last
            updated" date at the top of this page reflects the most
            recent revision. Continued use of the Site after changes are
            posted means you accept the updated Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about these Terms can be directed to{" "}
            <a href={site.emailHref}>{site.email}</a> or{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
