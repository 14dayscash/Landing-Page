import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaFor } from "./seo";

export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://dominicmcclelland.com${meta.path}`);
    }
  }, [pathname]);
}
