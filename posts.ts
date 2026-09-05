import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  html: string;
  readingMinutes: number;
};

const raw = import.meta.glob("./post-*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(source: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { data: {} as Record<string, string>, body: source };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (key) data[key] = value;
  }
  return { data, body: source.slice(match[0].length) };
}

marked.setOptions({ gfm: true, breaks: false });

export const posts: Post[] = Object.entries(raw)
  .map(([path, source]) => {
    const { data, body } = parseFrontmatter(source);
    const slug =
      data.slug || path.replace(/^\.\/post-/, "").replace(/\.md$/, "");
    const words = body.trim().split(/\s+/).length;
    return {
      slug,
      title: data.title || slug,
      metaTitle: data.metaTitle || "",
      description: data.description || "",
      date: data.date || "",
      html: marked.parse(body) as string,
      readingMinutes: Math.max(1, Math.round(words / 220)),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string | undefined) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(value: string) {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
