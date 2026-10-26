# Al-Muthana Al-Ghuraid — portfolio

Initial realistic Riyadh portfolio release. English/Arabic, animated cloud sky and city day/night, project architecture pages, training pages, credential links and CV download.

## Build and deploy
Run `npm run build`; existing Cloudflare Workers Builds runs this and deploys Worker `alghuraid` with `wrangler deploy`. Custom domains and DNS remain attached to the existing Worker.

## Editing
The buildless website source is `public-site/` (HTML, CSS, JS, images and PDF). Edit it and build again. This release replaces the former Astro site; its old Pages CMS configuration does not apply to this version. No old contact-form backend is needed: email is a direct mail link.

## Previous version
Old source, local uncommitted work, compiled output and Git history are archived on the owner computer in archives/alghuraid-old-portfolio-2026-10-23 in the personal-portfolio workspace. Previous published Git commit: 70a4fe0b251a4e7a53bd6f6c267eca3e3e3fa4c3.

## Attribution
Cloud/atmosphere library and assets: Takram MIT license and bundled third-party notices in public-site/assets/takram/. Moon texture: NASA LROC. Academy/certification logos are supplied by the owner.

## Performance reference
Read [the component/performance guide](docs/performance/README.md) before changing rendering, animation, loading, media, or language/theme defaults. It preserves the dated baseline, accepted optimization results and measurement limits.
