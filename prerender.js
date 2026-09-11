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
      "https://www.facebook.com/mcclelland.dominic/",
      "https://youtube.com/@HouseJunkiesYT",
    ],
  };
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "House Junkies Inc.",
    image: `${ORIGIN}/logo-house-junkies.png`,
    url: ORIGIN,
    telephone: "+1-559-368-8956",
    email: "dominicmcclelland@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "801 W Main Street",
      addressLocality: "Visalia",
      addressRegion: "CA",
      postalCode: "93291",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.3298857,
      longitude: -119.3001446,
    },
    areaServed: [
      "Visalia, CA",
      "Tulare, CA",
      "Porterville, CA",
      "Dinuba, CA",
      "Lindsay, CA",
      "Exeter, CA",
      "Farmersville, CA",
      "Goshen, CA",
      "Orosi, CA",
    ].map((name) => ({ "@type": "City", name })),
    employee: {
      "@type": "Person",
      name: "Dominic McClelland",
      jobTitle: "Operations Manager",
    },
    sameAs: ["https://youtube.com/@HouseJunkiesYT"],
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function blogCollectionSchema(allPosts) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Notes from the field",
    url: `${ORIGIN}/blog`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allPosts.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${ORIGIN}/blog/${p.slug}`,
        name: p.title,
      })),
    },
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
const buildDate = new Date().toISOString().slice(0, 10);

for (const route of routes) {
  const meta = server.meta(route);
  const post = server.postFor(route);
  const body = server.render(route);
  const canonical = `${ORIGIN}${route === "/" ? "/" : route}`;

  let breadcrumbItems = [{ name: "Home", url: `${ORIGIN}/` }];
  if (route === "/work") {
    breadcrumbItems.push({ name: "Work Experience", url: canonical });
  } else if (route === "/blog") {
    breadcrumbItems.push({ name: "Blog", url: canonical });
  } else if (post) {
    breadcrumbItems.push({ name: "Blog", url: `${ORIGIN}/blog` });
    breadcrumbItems.push({ name: post.title, url: canonical });
  }

  const extraSchema = [];
  if (route === "/") extraSchema.push(localBusinessSchema());
  if (route === "/blog") extraSchema.push(blogCollectionSchema(server.allPosts()));
  if (route !== "/") extraSchema.push(breadcrumbSchema(breadcrumbItems));

  const head = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${post ? "article" : "website"}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${ORIGIN}/logo-house-junkies.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:image" content="${ORIGIN}/logo-house-junkies.png" />`,
    `<meta name="twitter:site" content="@dmcclelland_" />`,
    `<meta name="twitter:creator" content="@dmcclelland_" />`,
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
    .concat(
      extraSchema.map(
        (schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
      ),
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
  urls.push({ loc: canonical, lastmod: post ? post.date : buildDate });
  console.log(`prerendered ${route}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap);

fs.writeFileSync(
  path.join(DIST, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`,
);

fs.rmSync("dist-server", { recursive: true, force: true });
console.log(`sitemap: ${urls.length} urls`);
