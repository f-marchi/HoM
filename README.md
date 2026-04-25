# Heroes of Medicine Static Site

Static Astro copy of the visible Heroes of Medicine site for GitHub Pages.

## Development

This project uses Astro 6 and requires Node.js `>=22.12.0`.

```sh
npm ci
npm test
```

The deployed project path is `/HoM/`, matching `https://f-marchi.github.io/HoM/`.

## Included Routes

- `/`
- `/ourwork/`
- `/about/`
- `/privacy/`
- `/terms/`

The Join Us, patient, referral, donation, internship, stale Wix template routes, and obsolete Wix policy-copy routes are intentionally omitted.

## Rights Notice

This repository intentionally has no open-source license. See `NOTICE.md`.

## Audits

- `npm run audit:content` verifies copied text from the structured content snapshot appears in the built HTML.
- `npm run audit:videos` verifies the exact YouTube manifest and no extra YouTube URLs.
- `npm run audit:links` verifies required internal/external links and omitted routes.
