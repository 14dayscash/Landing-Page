import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";
import { posts } from "./posts";
import { metaFor } from "./seo";

export function routes() {
  return ["/", "/work", "/blog", ...posts.map((p) => `/blog/${p.slug}`)];
}

export function meta(url: string) {
  return metaFor(url);
}

export function postFor(url: string) {
  const slug = url.startsWith("/blog/") ? url.slice("/blog/".length) : "";
  return posts.find((p) => p.slug === slug) ?? null;
}

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
