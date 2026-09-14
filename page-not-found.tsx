import { Link } from "react-router-dom";
import { Button } from "./button";
import { Container } from "./container";

export function NotFoundPage() {
  return (
    <section className="py-24">
      <Container>
        <p className="label-mono text-accent">404</p>
        <h1 className="mt-4 font-display text-title leading-title tracking-display text-foreground">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          That page may have moved or no longer exists. Here are a few good
          places to start instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/blog">Read the blog</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
