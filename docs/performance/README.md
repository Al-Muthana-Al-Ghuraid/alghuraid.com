# Portfolio performance and component reference

Use this guide when discussing visual options or optimization. Preserve dated findings as evidence; newer measurements and accepted decisions may supersede them. This documentation is stored in Git and is outside `public-site`, so it is not downloaded by website visitors.

## Evidence

- [Original analysis, 26 October 2026](baseline-2026-10-26.md): pinned public97121cc, component weights, renderer startup, quality/paused/frozen comparisons and limitations.
- [Accepted optimization results, 26 October 2026](optimization-2026-10-26.md): exact-value conversion/background decoder,60fps policy, idle rendering, medium quality, deferred diagrams, request sharing and validation. Owner accepted the appearance and authorized publication on26October2026.

## Components and tradeoffs

| Component | Source | Cost and decision guidance |
| --- | --- | --- |
| Sky/cloud/atmosphere | `assets/sky.js`, `sky-atmosphere.js`, `sky-decode-worker.js`, `sky-render-policy.js`, `assets/takram/` | Main startup and continuous GPU cost. Medium quality and up-to60fps are accepted. Preserve atmosphere data precision. Paused/reduced-motion renders on change after settling. Worker failure retains a faster main-thread loader. |
| Skyline | `assets/city.js`, day/night cutout PNGs | Second largest initial loading group. Both images support smooth theme blending and fixed silhouette. Existing PNG optimization preserves decoded pixels. Decode/canvas memory differs from compressed file size. |
| Opening | Inline critical cover, `opening-shell.js`, `opening-prototype.css` | Small short-lived artwork/animation cost. Preserve at least2000ms of visible styled opening, first-paint cover, fieldbook/prism art and name handoff. Internal navigation skips it. |
| Initial poster | `progressive-scene-shell.js`, `progressive-scene-prototype.js`, matching WebP | One early image reused by the reveal. Only the current theme/viewport poster loads initially. Scene readiness and the opening's minimum clock are separate concerns. |
| Navigation | `navigation-continuity.js` | Retains homepage/scroll/context for smooth Back; freezes sky while detail is open. Retained memory is a deliberate alternative to repeated scene initialization. |
| Diagrams | `diagrams/`, `diagram-visibility.js` | Deferred near the homepage section; CSS/SMIL pauses offscreen, hidden, or behind a detail. Keep visible diagrams and full-view actions functional. |
| Language and skills | `language.js`, `translation-catalog.js`, `content-motion-prototype.js`, `translations.json` | Small shared translation request. Hero footprints and language motion preserve bilingual layout. Translation data is not a major performance target. |
| Project media/viewer | Project/program HTML, `mobile-comfort-prototype.js`, `media-viewer-geometry.js` | Screenshots load as needed. Preserve pinch/pan/Fit, centered controls and dialog Back/focus behavior. Direct detail pages use a static background rather than another live sky. |
| Ordinary controls/cards | Shared styles and interaction modules | Mainly interaction-time layout/paint. Prioritize verified jank; avoid removing inexpensive design details in response to sky costs. |

## Language and theme defaults

Verified from the source at this release; publication preserves this behavior.

| Situation | Language | Theme |
| --- | --- | --- |
| First plain-root visit with no saved preference | English | Light/day |
| Explicit link preference | `lang=ar` selects Arabic; other/missing values select English | Valid `theme=day` or `theme=night` overrides saved preference |
| Return to plain root | English; language is not stored as a browser preference | Last selected theme from `localStorage` key `portfolio-theme`, otherwise day |
| Internal project/program navigation | Current language carried in URL | Current theme inherited/carried in navigation |

Browser language (`navigator.language`) and system color scheme (`prefers-color-scheme`) do not automatically select language/theme. Operating-system reduced-motion preference is respected independently. Viewport/device pixel ratio affect scene sizing; both phone and desktop now use medium sky quality.

This is one shared website, not four separate language/theme builds. English content and an Arabic translation catalog share HTML/styles/scripts; themes share renderer/data and use both skyline cutouts for smooth blending. The selected initial poster is loaded rather than all four posters. Changing a default language/theme does not remove the main sky cost; measure any claimed effect before presenting it as an optimization.

## Measurement rules

- Name the denominator for percentages. The original67% sky/29% city figures divide measured resource body bytes; they are not percentages of device capacity or CPU/GPU utilization.
- Keep initial network transfer, decoded resource bodies, image pixels, main-thread blocking, GPU time/frame and memory separate.
- Record commit/source, viewport/DPR, hardware, cache/network conditions and whether the browser was throttled. Worker requests can be absent from the parent page's ResourceTiming sum.
- Compare one mounted renderer at a time, matching theme, viewport, scene state and cache conditions. Validate appearance and navigation alongside savings.
- Frame-rate/battery/thermal claims need suitable real-device measurements. Current throttled embedded-browser results establish behavior and allocations, not certification of those outcomes.
