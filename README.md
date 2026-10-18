# alghuraid.com

Personal portfolio of Al-Muthana Al-Ghuraid: Cloud & DevOps Engineer, PMP certified.
Bilingual (English / Arabic with full right-to-left layout), built with [Astro](https://astro.build) and hosted on Cloudflare Pages.

## Editing content

Everything on the site comes from files in `src/content/`. No code changes are needed to add, edit or remove items.

| Folder / file | What it controls |
|---|---|
| `projects/*.yaml` | Project cards, filters and each project's detail page |
| `certifications/*.yaml` | Certification cards (status: `active`, `in-progress`, `expired`) |
| `bootcamps/*.yaml` | Bootcamp cards; hours and counts are totalled automatically |
| `experience/*.yaml` | Experience section (hidden until the first entry exists) |
| `settings.json` | Name, headline, about text, skills, links, availability |

- Every visible text field has `en` and `ar` versions, and both are required.
- `order` controls position (lower first). `hidden: true` hides an item without deleting it.
- Images go in `public/media/` and are referenced like `/media/projects/name.png`.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Fixed interface text (nav, headings, buttons) lives in `src/i18n/ui.ts`.
