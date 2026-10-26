# Detail logos and phone handoff — accepted release, 26 October 2026

Source: public release eb47410 plus issue60 changes. Owner explicitly authorized publication on26October2026; release verification is recorded in workspace issue61.

Technology rows use local external SVG images in fixed-size tiles. Native logo shapes/colors are preserved; no icon font, library, animation, third-party runtime request or new homepage logo request is introduced. Vendor provenance and upstream license are in `public-site/assets/tech-logos/NOTICE.md`. The SQL course uses a neutral database symbol because its vendor is unknown. Misk Launchpad has no documented software stack and retains its business-training content.

Measured source body sizes (uncompressed file bytes, not CDN transfer or CPU percentages): shared detail-only stylesheet **1,373 bytes**; 34 unique SVGs **57,881 bytes** across the whole site. Each opened detail requests only its own set, with normal browser caching on later visits.

| Detail | SVG bytes |
| --- | ---: |
| Django ecommerce | 6,785 |
| n8n automation | 14,802 |
| RAG chatbot | 26,306 |
| TrackFlow | 13,677 |
| Cloud program | 22,783 |
| Python program | 16,755 |
| Django program | 2,944 |
| Bioinformatics | 4,121 |
| SQL | 381 |
| Misk | 0 |

These sizes exclude changed HTML markup and response headers. No frame-rate, power or battery improvement is claimed. The rows add small one-time image/layout work when a detail opens, with no continuing animation loop. Avoid loading all logo assets on the homepage or replacing them with an icon-font/runtime dependency.

The phone opening now moves two whole name words instead of twenty English letter actors. Its existing letter reveal, visible hold, artwork and desktop behavior remain. A measured phone layout previously split Al-Ghuraid across the hyphen; balanced heading wrapping and whole-word actors keep the destination coherent. If a word still spans lines in an unsupported layout, the existing soft fade is used. This reduces actor count but has not been separately benchmarked as a GPU/FPS saving. Physical-phone motion acceptance remains an owner review item.

Browser QA evidence and geometry before/after are retained under workspace `.scratch/portfolio/name-stack-review/`, linked by issue60. Tests use the real detail links and Back handlers. Embedded-browser checks establish layout/navigation behavior, not physical iOS/Android frame cadence.
