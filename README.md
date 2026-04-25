# Heroes of Medicine Static Site

## Development

This project uses Astro 5 and requires Node.js `>=20.19.0 <21`.

```sh
npm ci
npm test
```

The deployed site is configured for the custom domain `https://heroesofmedicine.org/`.

## Included Routes

- `/`
- `/ourwork/`
- `/about/`
- `/privacy/`
- `/terms/`

## Rights Notice

The repository implementation and presentation assets are open; patient-provided
and patient-identifying content remains protected. See `NOTICE.md`.

## Audits

- `npm run audit:content` verifies copied text from the structured content snapshot appears in the built HTML.
- `npm run audit:videos` verifies the exact YouTube manifest and no extra YouTube URLs.
- `npm run audit:links` verifies required internal/external links and omitted routes.
