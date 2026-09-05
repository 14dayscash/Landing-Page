# dominicmcclelland.com

Personal site for Dominic McClelland. React + Vite + Tailwind, builds to static
files. Everything lives in this one folder on purpose, so it uploads to GitHub
in a single drag.

## Local development

```
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Deploying

Any static host. Build command `npm run build`, output directory `dist`.

## Editing content

- `site.ts` - name, address, phone numbers, emails, social links
- `portfolio.ts` - work experience, stats, skills, certificates
- `contact.tsx` - Web3Forms access key is on line 14
