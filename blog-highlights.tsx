import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { formatDate, posts } from "./posts";

export function BlogHighlights() {
  if (posts.length === 0) return null;

  const featured = posts.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Blog" title="Notes from the field" />
          <Link
            to="/blog"
            className="label-mono flex items-center gap-1 text-accent transition-colors duration-quick ease-smooth hover:text-foreground"
          >
            All posts
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {featured.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors duration-quick ease-smooth hover:border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="text-sm text-muted-foreground tabular-nums">
                  {formatDate(post.date)}
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground">
                  {post.title}
                </p>
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
      </Container>
    </section>
  );
}
