# Outlaw Industrial Website

Marketing website for Outlaw Industrial LLC, built with Next.js for deployment on Netlify.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Page Structure

- `/` - One-page site with anchored sections:
  - `#services` - Commercial janitorial and product supply
  - `#industries` - Industries served across southwest Wyoming
  - `#about` - Company story, ownership, and Code of the West principles
  - `#contact` - Simple Netlify quote request form

## Netlify

The contact form uses Netlify Forms with the form name `quote-request`.
The static detection file for Netlify Forms lives at `public/__forms.html`.

After deployment, confirm Netlify detects the form under Site configuration > Forms.
