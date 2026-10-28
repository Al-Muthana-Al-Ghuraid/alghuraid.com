# Accepted navigation, clock and mobile refinements — 28 October 2026

Owner selected typographic clock A and authorized publication after local revisions1–4. Release asset version: `release-20261028-navigation`; baseline public348fdec. Existing fonts, Slate & Cobalt, single minimum2000ms opening, language motion/navigation retention and60/temporary120fps policy remain. This supersedes the provisional analog/seven-segment/palm/heritage studies; only A ships.

## Component cost and behavior

- Clock: existing IBM Plex tabular digits with bilingual Riyadh caption in initial HTML. Asia/Riyadh24-hour formatting and minute-boundary updates, paused scheduling while hidden; phone hides location/clock and schedules no clock timer. No new font, image, service, artificial digit segments or continuous loop. Stable104×44px footprint.
- Glass navigation: existing theme surfaces at22%day/24%night opacity;12px blur confined to roughly761×67 CSS pixels on desktop and293×65 on phone. This area is not a measured GPU percentage; physical-device cost depends on backdrop/DPR/hardware. No full-screen blur or extra sky renderer.
- Theme paints: city/clock, local detail CTA buttons, Education label, phone preview symbols and Back to top now use the shared1200ms color/background/border fade. Theme-only Quick view visibility guard uses a single1200ms timeout; language word-changing retains its accepted delayed reveal. Reduced motion disables added paint transitions.
- Static SVG controls replace platform glyphs; filled sun center/moon preserve current ink. Shared CSS scopes Back icons to18px. Mobile viewer control marks are present at creation. No global subtree observer or repeated startup polling.
- Four homepage structures link to project details. The automation phone structure is immediately visible. Navigation retains/freeszes the existing homepage as before; full diagrams stay available on phone, redundant desktop Open diagram rows are hidden.

## Loading bytes

The24changed public files aggregate1,141,312→1,176,011 uncompressed bytes (+34,699), and aggregate gzip delta+5,958bytes. This is the sum over the changed dependency closure, not a per-visit request measurement: detail pages and assets are loaded on different routes. Homepage HTML gzip17,432→17,882 (+450). New shared navigation CSS11,476raw and JS3,410raw. No new media/fonts. Scene-module diffs in the closure only update dependency queries, not rendering algorithms.

Loading bytes, timer processing, CSS paint/blur graphics work and retained navigation memory are distinct costs. These checks establish layout and behavior; no new battery, memory-profile or sustained-FPS measurement is claimed.

## Validation and limits

Build and36inline-script parsing pass;369local references resolve. Diagram lifecycle36checks/theme-context10checks/render-policy simulations pass. Homepage EN/AR/day/night across320/390/801/1280 and all10detail pages at320/1280 show no horizontal overflow or clipped headings; detail Back icons18px, controls<=50px. Card actions retain24px bottom inset; phone full names remain intact. Mobile structure→detail/viewer150%/Close/Back returns visiblehome without entry replay. Built first opening and static A clock inspected.

Prior diagnostic city/clock snap reproduces and passes after the paint fix. Owner specifically identified Quick view theme switching; its claimed delay did not reproduce in sampled baseline (opacity1 and paint matched adjacent buttons), so the explicit visibility guard is a conservative guarantee, not a claim of complete physical-browser reproduction. Embedded RAF captures are sparse and do not certify Chrome/phone cadence. Raw local source, comparison and timing probes remain in the original workspace scratch/archive, excluded from release.
