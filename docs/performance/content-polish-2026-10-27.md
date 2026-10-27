# Accepted content and transition polish — 27 October 2026

Owner reviewed the local prototype after Slate & Cobalt release38d00c7, accepted the temporary120fps desktop theme-transition preference, and explicitly authorized publication of the final bilingual copy and accumulated polish on27October2026.

## Rendering decision

The sky remains medium quality and normally capped at60fps. During a theme transition, desktop viewports wider than800 CSS pixels allow up to120fps. The existing transition state determines the budget, including the first target change before progress updates; the normal60 ceiling returns after progress reaches1. Startup holds and reduced motion never raise the ceiling. Hidden pages and project-detail navigation freezes retain the existing no-draw gate; paused/reduced-motion settled scenes still render only on change. No second animation loop, texture, resolution or cloud-quality increase was introduced.

This promotes the exact accepted local budget experiment into production with a small pure budget selector. Renderer wall time remains derived from actual rendered timestamps, so a higher callback rate does not speed up the transition. Normal animation and existing4.5second full-transition duration are unchanged.

The ceiling is permission to render more frames, not a promise that a device can sustain120fps. On a display/browser delivering60 callbacks per second, the policy cannot create120 frames. On suitable hardware, transition-time scene work can approach twice as many frames as the60 ceiling; this is a count of frames, not a measured doubling of total power, CPU or GPU use. The usual scene/idle optimizations remain valuable. Prior embedded-browser real samples did not establish a reliable sustained-FPS benefit; the owner's visual preference justifies the bounded option. No new hardware, thermal or battery claim is made.

`node tests/sky-render-policy.mjs` simulates60/90/120/144/165/240Hz callbacks, checks both ceilings and return to60, elapsed-time preservation, startup/phone/reduced-motion guards, idle wake, hidden/frozen return and capture behavior. Existing diagram lifecycle and theme-context checks remain required. Raw local comparison evidence lives in workspace `.scratch/portfolio/post-cobalt-review/`.

## Other components

- Three latest workflow screenshots are1920×957,556,678 bytes combined. Figures reserve the matching aspect ratio and scale with automatic height; full-view images retain native detail. They load on the n8n detail page, not on the homepage. Replacement screenshots supersede the earlier3840×1978 set.
- Opening ring/packet details use existing vector/CSS geometry repainted in Cobalt; no new image or continuous render loop. The minimum2000ms styled opening and name handoff are retained.
- Phone language-shadow timing uses a separate continuous opacity curve while existing text motion remains intact.
- Skills use160ms selection feedback, stronger related highlights and click-away clearing; the1200ms theme fade is retained during theme changes. Seven management items have distinct curated relationships. Removing instructional copy does not remove actions or accessibility labels.
- Updated English and Saudi-professional Arabic use the existing shared translation architecture. No extra language build, font, background layer or runtime dependency is introduced. Credential status, dates, training hours and project scope are preserved. CV email matches the existing website address.

Public build excludes review controls, frame-budget comparison tools, local probes and report files. Production asset references are versioned through dependency closure to prevent stale combinations.
