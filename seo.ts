import { site } from "./site";
import { getPost } from "./posts";

export type PageMeta = { title: string; description: string; path: string };

export function metaFor(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/work") {
    return {
      path,
      title: `Work Experience - ${site.name}`,
      description:
        "Real estate operations, ventures, hands-on trades, and community work across Visalia and Tulare County. Full work history and skills for Dominic McClelland.",
    };
  }

  if (path === "/blog") {
    return {
      path,
      title: `Notes on Real Estate in Visalia - ${site.name}`,
      description:
        "Notes on flipping, acquisitions, off-market deals, and operating a vertically integrated real estate business in Visalia, California.",
    };
  }

  if (path.startsWith("/blog/")) {
    const post = getPost(path.slice("/blog/".length));
    if (post) {
      return {
        path,
        title: `${post.title} - ${site.name}`,
        description: post.description,
      };
    }
  }

  return {
    path,
    title: site.title,
    description: site.description,
  };
}
