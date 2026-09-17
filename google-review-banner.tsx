import { Star } from "lucide-react";
import { Button } from "./button";
import { Container } from "./container";

const GOOGLE_REVIEW_URL = "https://www.google.com/maps?cid=4634125232150207364";

export function GoogleReviewBanner() {
  return (
    <section className="border-t border-rule py-12 sm:py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-wash">
              <Star className="size-5 text-accent" fill="currentColor" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">
                Worked with us before?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A quick Google review helps other Visalia homeowners find us.
              </p>
            </div>
          </div>
          <Button asChild>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
              Leave a Google Review
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
