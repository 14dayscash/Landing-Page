import { About } from "./about";
import { BlogHighlights } from "./blog-highlights";
import { Contact } from "./contact";
import { GoogleReviewBanner } from "./google-review-banner";
import { Hero } from "./hero";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <BlogHighlights />
      <GoogleReviewBanner />
    </>
  );
}
