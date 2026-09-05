import { Link } from "react-router-dom";
import { Container } from "./container";
import { formatDate, posts } from "./posts";

export function BlogPage() {
  return (
    <>
      <section className="border-b border-rule pb-12 pt-14 sm:pb-16 sm:pt-20">
        <Container>
          <p className="label-mono text-accent">Blog</p>
          <h1 className="mt-5 font-display text-title leading-title tracking-display text-foreground">
            Notes from the field
          </h1>
          <p className="mt-5 max-w-[62ch] text-lede leading-relaxed text-muted-foreground">
            How deals actually get done in Visalia. Acquisitions, rehab
            numbers, negotiations, and what the Central Valley market is doing.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">
              First post coming soon. Check back shortly.
            </p>
          ) : (
            <ul className="grid gap-4 lg:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors duration-quick ease-smooth hover:border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <p className="text-sm text-muted-foreground tabular-nums">
                      {formatDate(post.date)}
                    </p>
                    <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    <p className="label-mono mt-6 text-accent">
                      Read - {post.readingMinutes} min
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
