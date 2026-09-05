// Renders every route to real HTML so search engines get words, not an empty div.
import fs from "node:fs";
import path from "node:path";

const DIST = "dist";
const ORIGIN = "https://dominicmcclelland.com";

const server = await import("./dist-server/entry-server.js");
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

function escapeAttr(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dominic McClelland",
    url: ORIGIN,
    jobTitle: "Operations Manager",
    worksFor: { "@type": "Organization", name: "House Junkies Inc." },
    address: {
      "@type": "PostalAddress",
      streetAddress: "801 W Main Street",
      addressLocality: "Visalia",
      addressRegion: "CA",
      postalCode: "93291",
      addressCountry: "US",
    },
    telephone: "+1-559-368-8956",
    email: "dominicmcclelland@gmail.com",
    sameAs: [
      "https://linkedin.com/in/dominicmcclelland",
      "https://instagram.com/dmcclelland_",
      "https://youtube.com/@HouseJunkiesYT",
    ],
  };
}

function stripTags(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

// Pulls "**Question?**\nAnswer" pairs out of the rendered FAQ section so the
// post is eligible for FAQ rich results.
function faqSchema(post) {
  const section = post.html.split(/<h2[^>]*>\s*Frequently asked questions\s*<\/h2>/i)[1];
  if (!section) return null;
  const body = section.split(/<h2/)[0];
  const pairs = [...body.matchAll(/<p><strong>([\s\S]*?)<\/strong>([\s\S]*?)<\/p>/g)]
    .map((m) => ({ q: stripTags(m[1]), a: stripTags(m[2]) }))
    .filter((pair) => pair.q.endsWith("?") && pair.a.length > 20);
  if (pairs.length < 2) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pairs.map((pair) => ({
      "@type": "Question",
      name: pair.q,
      acceptedAnswer: { "@type": "Answer", text: pair.a },
    })),
  };
}

function articleSchema(post, url) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    mainEntityOfPage: url,
    author: { "@type": "Person", name: "Dominic McClelland", url: ORIGIN },
  };
}

const routes = server.routes();
const urls = [];

for (const route of routes) {
  const meta = server.meta(route);
  const post = server.postFor(route);
  const body = server.render(route);
  const canonical = `${ORIGIN}${route === "/" ? "/" : route}`;

  const head = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${post ? "article" : "website"}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify(
      post ? articleSchema(post, canonical) : personSchema(),
    )}</script>`,
  ]
    .concat(
      post && faqSchema(post)
        ? [
            `<script type="application/ld+json">${JSON.stringify(
              faqSchema(post),
            )}</script>`,
          ]
        : [],
    )
    .join("\n    ");

  const html = template
    .replace(/\s*<link rel="canonical"[^>]*>/, "")
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeAttr(meta.title)}</title>`,
    )
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    )
    .replace("</head>", `  ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const outDir =
    route === "/" ? DIST : path.join(DIST, route.replace(/^\//, ""));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  urls.push(canonical);
  console.log(`prerendered ${route}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap);

fs.writeFileSync(
  path.join(DIST, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`,
);

fs.rmSync("dist-server", { recursive: true, force: true });
console.log(`sitemap: ${urls.length} urls`);
