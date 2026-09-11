import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./button";
import { Container } from "./container";
import headshot from "./dominic-headshot.jpg";
import { formatDate, getPost, posts } from "./posts";

export function PostPage() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="py-24">
        <Container>
          <h1 className="font-display text-title tracking-display text-foreground">
            Post not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            That one may have moved or not been published yet.
          </p>
          <Button asChild className="mt-8">
            <Link to="/blog">Back to the blog</Link>
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          to="/blog"
          className="label-mono text-subtle transition-colors duration-quick ease-smooth hover:text-accent"
        >
          Back to blog
        </Link>
        <h1 className="mt-6 font-display text-title leading-title tracking-display text-foreground">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground tabular-nums">
          {formatDate(post.date)} - {post.readingMinutes} min read
        </p>

        <div
          className="post-body mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-14 flex items-center gap-4 rounded-lg border border-border bg-card p-6">
          <img
            src={headshot}
            alt="Dominic McClelland"
            width={880}
            height={880}
            loading="lazy"
            decoding="async"
            className="block size-14 shrink-0 rounded-full border border-border object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              Dominic McClelland
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Operations Manager, House Junkies Inc. Partner, Ulloa
              Investment Group.
            </p>
          </div>
        </div>

        {posts.length > 1 && (
          <div className="mt-10">
            <p className="label-mono text-accent">More from the blog</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {posts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors duration-quick ease-smooth hover:border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <p className="text-xs text-muted-foreground tabular-nums">
                        {formatDate(p.date)}
                      </p>
                      <p className="mt-2 text-base font-semibold leading-snug tracking-tight text-foreground">
                        {p.title}
                      </p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}

        <div className="mt-14 rounded-lg border border-border bg-card p-6 sm:p-8">
          <p className="label-mono text-accent">Selling a house in Visalia?</p>
          <p className="mt-4 text-lede leading-relaxed text-muted-foreground">
            Off-market deals, investment consultations, and partnership
            questions all go to the same place.
          </p>
          <Button asChild className="mt-6">
            <Link to="/#contact">
              Get in Contact
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </article>
  );
}
