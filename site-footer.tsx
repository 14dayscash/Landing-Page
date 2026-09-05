import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { nav, site } from "./site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule pb-10 pt-16">
      <Container>
        <blockquote className="max-w-3xl font-display text-title leading-title tracking-display text-foreground">
          {site.quote}
        </blockquote>

        <div className="mt-14 grid gap-10 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-mono text-accent">Get in Contact</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {site.address}
            </p>
            <p className="mt-3 text-sm text-foreground">
              <a href={site.phoneHref} className="hover:underline">
                {site.phone}
              </a>
              <span className="text-subtle"> | </span>
              <a href={site.phoneAltHref} className="hover:underline">
                {site.phoneAlt}
              </a>
            </p>
            <p className="mt-2 text-sm text-foreground">
              <a href={site.emailHref} className="break-words hover:underline">
                {site.email}
              </a>
              <span className="text-subtle"> | </span>
              <a
                href={site.emailAltHref}
                className="break-words hover:underline"
              >
                {site.emailAlt}
              </a>
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="label-mono text-accent">Index</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-quick ease-smooth hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="label-mono text-accent">Connect</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-quick ease-smooth hover:text-accent"
                >
                  Email
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-quick ease-smooth hover:text-accent"
                >
                  Instagram
                  <span className="text-subtle">{site.instagramHandle}</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-quick ease-smooth hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-quick ease-smooth hover:text-accent"
                >
                  YouTube
                  <span className="text-subtle">{site.youtubeHandle}</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-rule pt-6 font-mono text-xs text-subtle">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
