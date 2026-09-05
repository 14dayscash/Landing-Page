# dominicmcclelland.com

React + Vite + Tailwind. Every page is prerendered to real HTML at build time,
so search engines get actual text instead of an empty div.

Everything is in one flat folder on purpose, so it uploads to GitHub in one drag.

## Pages

- `/` - hero, House Junkies stats, profile, contact
- `/work` - work experience and skills
- `/blog` - post index
- `/blog/<slug>` - individual post

## Writing a blog post

Add a file named `post-<slug>.md` in this folder. The URL comes from the
filename, so `post-visalia-market-update.md` becomes
`/blog/visalia-market-update`.

Every post starts with this block:

```
---
title: "Your Headline Here"
description: "One or two sentences. This is what shows in Google results."
date: "2026-09-15"
---
```

Then write in Markdown below it. `## ` makes a section heading, `**bold**` makes
bold, `- ` makes a bullet.

Commit the file and it is live in about a minute. The blog index, the sitemap,
and the prerendered HTML all update themselves.

## Editing content

- `site.ts` - phone numbers, emails, address, social links, nav
- `portfolio.ts` - work experience, stats, skills, certificates
- `contact.tsx` - Web3Forms access key, line 14

## Local development

```
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```
