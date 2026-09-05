import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { Skills } from "./skills";

export function App() {
  return (
    <div id="top" className="relative min-h-screen">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        Skip to work
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
