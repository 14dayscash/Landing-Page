import { Container } from "./container";
import { site } from "./site";

type Tier = {
  name: string;
  range: string;
  tagline: string;
  body: string;
  bestFor: string;
  example?: string;
};

const tiers: Tier[] = [
  {
    name: "Deal Finder",
    range: "$2,000 to $10,000",
    tagline: "Know a house that needs to sell? Bring us the address.",
    body: "You do not need a real estate license, capital, or a contract of your own. If you know about a property, a distressed house, a landlord ready to be done, a family member's inherited place, you send us the address and the seller's contact information. If we are able to act on it and the deal closes, you get paid, typically between $2,000 and $10,000 depending on the size and margin of the deal.",
    bestFor:
      "Anyone plugged into a community, real estate adjacent or not, who hears about properties before they hit the market.",
    example:
      "You mention a rental property whose landlord told you he's done with tenants. We close it in three weeks. You get a check.",
  },
  {
    name: "Agent Partner",
    range: "$5,000 to $15,000+",
    tagline: "Represent House Junkies directly on transactions.",
    body: "If you hold a California real estate license, you can represent us as our agent on acquisitions instead of just sending a referral our way. That means working the transaction itself and earning agent-level compensation instead of a flat referral fee.",
    bestFor:
      "Licensed agents who want repeat, reliable transaction volume from an active buyer instead of chasing one-off listings.",
  },
  {
    name: "JV Partner",
    range: "$20,000 to $50,000+",
    tagline: "Find the deal and put some skin in the game.",
    body: "A step past Deal Finder. You bring the property and contribute capital toward the acquisition itself. If you are a licensed agent, you can also list the finished property on the back end for your commission. We cover 100% of construction costs and partner with you directly on the purchase.",
    bestFor:
      "Agents or connected investors ready to move from a flat fee to an actual stake in a deal's upside.",
  },
  {
    name: "Equity Partner",
    range: "$35,000 to $100,000+",
    tagline: "50/50 on a deal, acquisition to sale.",
    body: "You bring capital as an equal partner on a specific property. We run the entire operation, acquisitions, construction, and the sale through Legacy Real Estate, and split the profit 50/50 once the property sells.",
    bestFor:
      "Investors who want a direct stake in a specific flip without running the operation themselves.",
  },
  {
    name: "Funding Partner",
    range: "$100,000+ per year",
    tagline: "Lend private capital, earn a passive return.",
    body: "You are not finding deals or touching construction. You are providing capital against our flips as a lender, earning an interest-only, passive return while your money is deployed. Terms are negotiated individually per agreement.",
    bestFor:
      "Investors who want real estate-backed returns without operational involvement.",
  },
];

export function PartnerPage() {
  return (
    <>
      <section className="border-b border-rule pb-12 pt-14 sm:pb-16 sm:pt-20">
        <Container>
          <p className="label-mono text-accent">Partner</p>
          <h1 className="mt-6 font-display text-title leading-title tracking-display text-foreground">
            Five Ways to Partner With House Junkies
          </h1>
          <p className="mt-5 max-w-[62ch] text-lede leading-relaxed text-muted-foreground">
            From sending us an address to lending private capital, here is
            every way to get involved with House Junkies and Ulloa
            Investment Group, and what each one actually pays.
          </p>

          <div className="post-body mt-10 max-w-4xl overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Partnership</th>
                  <th>Range</th>
                  <th>You Bring</th>
                  <th>Involvement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Deal Finder</td>
                  <td>$2,000–$10,000</td>
                  <td>An address</td>
                  <td>None after the intro</td>
                </tr>
                <tr>
                  <td>Agent Partner</td>
                  <td>$5,000–$15,000+</td>
                  <td>A CA real estate license</td>
                  <td>Represent us on the transaction</td>
                </tr>
                <tr>
                  <td>JV Partner</td>
                  <td>$20,000–$50,000+</td>
                  <td>A deal, plus capital</td>
                  <td>Partner on acquisition, list if licensed</td>
                </tr>
                <tr>
                  <td>Equity Partner</td>
                  <td>$35,000–$100,000+</td>
                  <td>Capital, 50/50 stake</td>
                  <td>Passive on execution, shares in profit</td>
                </tr>
                <tr>
                  <td>Funding Partner</td>
                  <td>$100,000+/yr</td>
                  <td>Capital as a lender</td>
                  <td>Fully passive, interest-only return</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="space-y-6">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className="rounded-lg border border-border bg-card p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl tracking-display text-foreground">
                    {index + 1}. {tier.name}
                  </h2>
                  <p className="label-mono text-accent">{tier.range}</p>
                </div>
                <p className="mt-3 text-lede leading-relaxed text-foreground">
                  {tier.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {tier.body}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Best for:
                  </span>{" "}
                  {tier.bestFor}
                </p>
                {tier.example ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Example:
                    </span>{" "}
                    {tier.example}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule py-14 sm:py-20">
        <Container>
          <p className="label-mono text-accent">FAQ</p>
          <h2 className="mt-4 font-display text-title leading-title tracking-display text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="post-body mt-10 max-w-3xl">
            <p>
              <strong>
                What is the difference between a JV Partner and an Equity
                Partner?
              </strong>
              A JV Partner finds the deal themselves and contributes capital
              toward the acquisition, with us covering construction. An
              Equity Partner is a straight 50/50 split on a deal we are
              already running end to end, acquisitions, construction, and
              sale.
            </p>
            <p>
              <strong>
                Do I need a real estate license to partner with House
                Junkies?
              </strong>
              No, not for Deal Finder, JV, Equity, or Funding Partner. A
              license is only required for the Agent Partner track, and it
              opens up the ability to list properties on the back end of a
              JV deal too.
            </p>
            <p>
              <strong>How fast do Deal Finder payouts happen?</strong>
              Once the deal you referred closes, typically within a few
              days of closing.
            </p>
            <p>
              <strong>
                Is this open to investors outside of Visalia or Tulare
                County?
              </strong>
              Yes. Deal Finder works best with local knowledge, but Equity
              and Funding Partner arrangements are open to outside capital
              regardless of where you live.
            </p>
            <p>
              <strong>
                What happens if a JV or Equity deal does not perform as
                expected?
              </strong>
              Real estate carries real risk, including the risk of loss.
              Every JV and Equity arrangement is documented in a written
              agreement that spells out how costs, delays, and outcomes are
              handled before either side commits capital.
            </p>
            <p>
              <strong>Is there a minimum to become a Funding Partner?</strong>
              Funding Partner arrangements generally start around
              $100,000 deployed per year, with interest-only terms
              negotiated individually per agreement.
            </p>
          </div>

          <p className="mt-10 max-w-3xl text-sm text-subtle">
            Partnership terms, including Equity Partner and Funding Partner
            arrangements, are negotiated individually and documented in a
            separate written agreement. The ranges above are general and
            not a specific offer. Real estate investing carries risk,
            including the risk of loss, and past performance does not
            guarantee future results. Nothing on this page is an offer to
            sell securities.
          </p>

          <p className="mt-10 max-w-3xl text-lede text-foreground">
            Want to talk through which one fits? Call or text{" "}
            <a href={site.phoneHref} className="text-accent hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
