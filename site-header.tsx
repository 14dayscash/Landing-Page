import mcclellandLogo from "./logo-mcclelland.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { Container } from "./container";
import { nav, site } from "./site";
import { cn } from "./utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "layer-root sticky top-0 z-30 bg-background/95 backdrop-blur-sm transition-colors duration-fast ease-smooth",
        scrolled || open ? "border-b border-rule" : "border-b border-transparent",
      )}
      data-menu-root=""
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          to="/"
          className="flex items-center gap-3.5 text-foreground"
          onClick={() => setOpen(false)}
        >
          <img
            src={mcclellandLogo}
            alt="McClelland Inc."
            width={600}
            height={366}
            className="block h-auto w-14 shrink-0 sm:w-16"
          />
          <span className="text-[0.9375rem] font-semibold tracking-tight">
            {site.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm text-muted-foreground transition-colors duration-quick ease-smooth hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link to="/#contact">Send Message</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-sm text-foreground transition-colors duration-quick ease-smooth hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          data-menu-toggle=""
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        data-menu-panel=""
        className="border-t border-rule bg-background md:hidden"
      >
        <Container className="flex flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center border-b border-rule text-2xl font-semibold tracking-tight text-foreground transition-colors duration-quick ease-smooth active:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="mt-6 text-base font-medium text-accent"
          >
            {site.phone}
          </a>
        </Container>
      </div>
    </header>
  );
}
