import { About } from "./about";
import { BlogHighlights } from "./blog-highlights";
import { Contact } from "./contact";
import { Hero } from "./hero";

export function HomePage() {
  return (
    <>
      <Hero />
      <Contact />
      <BlogHighlights />
      <About />
    </>
  );
}
