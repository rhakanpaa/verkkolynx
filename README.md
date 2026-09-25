# Verkkolynx V2

Rebuild of [verkkolynx.fi](https://www.verkkolynx.fi/) for Verkkolynx Ratkaisut Oy. Next.js 16 (App Router), React 19, TypeScript, plain CSS with a token layer. No UI library.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck && npm test
```

Set `NEXT_PUBLIC_SITE_URL` in production if the canonical origin differs from `https://www.verkkolynx.fi`.

## Structure

| Path                        | What lives there                                                                                                                                                                                                                        |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/`              | All copy. `fi.ts` / `en.ts` implement the `Dict` type in `types.ts`.                                                                                                                                                                    |
| `src/content/*-services.ts` | The five service pages (one object each, rendered by one template).                                                                                                                                                                     |
| `src/content/*-faq.ts`      | FAQ, 7 categories. Ids are the deep-link anchors (`/ukk#q-gdpr`, `/ukk#c-tietoturva`).                                                                                                                                                  |
| `src/lib/routes.ts`         | Route registry: slugs per locale, redirects, static params.                                                                                                                                                                             |
| `src/app/(fi)` / `(en)/en`  | Two root layouts (correct `<html lang>`), one catch-all page each.                                                                                                                                                                      |
| `src/components/`           | Header/mega menu, hero capability map, section components, service visuals, FAQ.                                                                                                                                                        |
| `src/styles/`               | `tokens` → `base` → `layout` (shared) → one file per area: `header`, `hero`, `home`, `system` (software diagram), `service` (page hero and service pages), `company` (why, about, contact, legal), `faq`, `footer`. No override layers. |
| `public/assets/brand/`      | Logo SVGs, copied unmodified from the supplied `Verkkolynx_Assets/logos` folder.                                                                                                                                                        |
| `src/assets/photo/`         | Tampere photographs from the existing site, prepared by `scripts/`.                                                                                                                                                                     |

Finnish lives at the root (`/palvelut`, `/ukk`, …, matching the old site), English under `/en`.
To add a page: add a key and slugs to `routes.ts`, its copy to both dictionaries, and a case in `PageRouter.tsx`.

## Logo usage

Only supplied vector assets are used, never recoloured or redrawn:

- `verkkolynx-wordmark-white.svg` (WEBSITE variant): header and footer, on navy.
- `verkkolynx-mark-white.svg`: the lynx mark on the About page and as the dark-mode favicon and app icon.
- `verkkolynx-mark-blue.svg`: light-mode favicon.
- `verkkolynx-wordmark-blue.svg`: structured data / light contexts.
- `verkkolynx-mark-light-blue.svg`: kept for light-blue-on-dark use, currently unused.

`npm run assets` rasterises the favicon, app icons and Open Graph image from those SVGs.

## Content rules followed

No invented statistics, clients, testimonials or certifications. Claims from the old site that could not be verified
(“world’s most detailed data”, “40+ years”, “100 million impressions”, industry certifications, named founder and blog link,
clients in Africa/South America) were removed or softened. See the change summary in the pull request / hand-off notes.
