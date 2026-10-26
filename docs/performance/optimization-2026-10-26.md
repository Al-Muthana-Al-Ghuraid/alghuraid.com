# Local performance optimization preview — 26 October 2026

**Acceptance:** owner approved this prototype and authorized publication on26October2026. The following measurements and preview notes were recorded before release; production deployment status is recorded in the release history. Before refers to97121cc plus pending loading/viewer fixes. Earlier issue56 loading/viewer corrections and issue57 pixel-identical PNG optimization are preserved.

## Preview

Open http://127.0.0.1:8771/performance-review-prototype.html?variant=after&lang=en&theme=night . Before/After replaces one iframe, rather than running two renderers simultaneously. Desktop/phone, English/Arabic, day/night, replay opening and separate-tab controls are available. Switching restarts the scene; it does not preserve scroll or an open detail page. Comparison pages and diagnostic probes are excluded from the build.

Before is a snapshot of the local website immediately before this performance work, including the already pending issue56 fixes and issue57 PNG saving. It is not an older public release. Snapshot: `.scratch/portfolio/performance-preview/before/`. After uses current `releases/alghuraid-initial-2026-10-23/public-site/`.

Start both roots with bundled Node and `.scratch/portfolio/performance-preview/serve-preview.cjs` from the workspace root. Before8770, after8771. Both are bound127.0.0.1. Existing source preview8766 is unchanged. The throwaway comparison stays provisional until the owner's decision; preserve this baseline when continuing work.

## Implemented

1. **Sky quality:** balanced/medium on desktop as well as phone. Existing camera, lighting, transition curves, skyline compositing and artwork remain. Quality is the intentional visual tradeoff to review.
2. **Rendering frequency:** up to60sky frames/second, with carried scheduling remainder for60/90/120/144/165/240Hz displays. Elapsed transition time accumulates across skipped callbacks. Simulation still uses its original capped step. Visibility reset prevents advancing through a hidden period. Project freeze remains intact.
3. **Paused/reduced-motion:** scene renders while settling or changing theme/coverage/quality/size, then stops issuing draw calls. A short settling period preserves temporal history. Capture still forces a frame. Resize, theme changes, resumed motion and project return wake the scene.
4. **Startup:** isolated the expensive half-float proxy conversion, replaced it with an exact-value lookup, and moved atmosphere decode/conversion to a dedicated module worker. Transfer buffers are moved rather than cloned. Worker is terminated after completion. Failure/timeout falls back to the original loader with the faster conversion.
5. **Texture review:** kept original atmosphere dimensions and32-bit/16-bit capability choice, cloud data, noise and HDR precision. No unsupported precision reduction. Medium's existing smaller cloud/shadow targets supply the measured allocation reduction. The worker reuses the existing renderer bundle URL; it still parses the bundle in its own context and can cause a cache revalidation. This change targets main-thread latency, not a major reduction in network bytes.
6. **Diagrams:** homepage iframe requests start near their section. CSS/SMIL animation pauses offscreen, when the document is hidden, and while the homepage is covered by a persistent detail. Mobile card summaries and full diagram actions understand deferred URLs. Dynamic iframe observation only scans when iframe nodes enter/leave, rather than on every sky status-text change.
7. **Requests:** language and skills modules share one translation promise. The poster now has one early image owner reused by the reveal, replacing the duplicate CSS/image loading path. Theme switches still select the matching poster while loading. The existing critical opening cover protects first paint.
8. **Resize correction found during audit:** pixel ratio is recalculated on resize. Previously a narrow-to-wide resize could retain the larger pixel ratio and grow buffers beyond the intended resolution budget. This is independent of quality selection.

## Measured results

| Check | Before | After | Interpretation |
| --- | ---: | ---: | --- |
| Largest atmosphere half-to-float conversion, isolated actual file | 728.7ms | 19–25ms | ~97% less time for this conversion step; not overall page speed |
| Atmosphere float buffers | Reference parser/iterator | Byte-identical for all three files | No data precision loss |
| Known live GPU texture allocations at1779×1291,DPR1.5 | 140.9MB | 111.5MB | ~21% reduction; excludes renderbuffers/driver/browser overhead |
| Settled paused drawing, throttled browser4s window | 28draw calls | 0draw calls | Actual idle behavior confirmed, not just stopped simulation time |
| Settled reduced-motion drawing | Not remeasured | 0draw calls | JavaScript media-query path forced in local harness |
| Main-thread longest startup task in saved local samples | 841ms | 117–230ms | Directional samples; residual renderer/GPU setup remains |
| Initial homepage diagram documents | Four | Zero until approached | Requests deferred, visible diagrams retained |
| Translation requests in final sample | Two in prior no-store audit | One | Shared promise verified |
| Poster image requests | Two in intermediate sample | One | Final single-owner sample verified |

The browser currently throttles RAF to roughly1Hz in these traces. They are marked `throttled:true` and cannot establish real60fps pacing, smoothness, GPU-time-per-frame savings or battery improvement. The previous unthrottled medium-only audit measured ~52% less GPU time/frame; that is a prior comparison, not a new full-preview benchmark. Parent ResourceTiming excludes atmosphere requests made inside the worker; do not compare its raw body sum as if the website suddenly downloaded4MB less.

## Verification

- `numeric-regression.mjs`: every65,536half-float encoding matches the original conversion, including signed zero/infinities/NaNs; all actual transmittance/scattering/irradiance Float32 buffers match byte-for-byte.
- `render-policy-regression.mjs`: cap across six refresh rates, preserved elapsed time, idle pause, theme/resize invalidation and no freeze-return advancement.
- Desktop EN/night:10/10real project/program links and Back return to same homepage instance,0px drift, visible main, sky frozen during detail and resumed afterward; no detail utility controls.
- Phone390×844 AR/day:10/10same roundtrips pass with0px drift.
- Opening in those flows:0sampled uncovered frames, fully styled holds2097ms and2585ms. Final CSS-delayed regression after poster changes:0leaks,2416ms hold,pass=true. This sampling is not physical-device flash certification.
- Worker completes with no error; blocked-worker fallback still reaches live scene. Reduced-motion settles to0draws. Site language toggle yields Arabic/RTL, and theme control changes to day with its Arabic accessibility label.
- Before button loads8770, After8771; phone toggle and bilingual/theme controls verified. Both preview variants force the normal opening locally; project navigation still suppresses replay.
- Final build and release integrity:35inline scripts,209references,0missing,0script syntax errors. No review page or diagnostic probe in dist.

Raw JSONs are next to this report. `vendor-check.mjs`, `trace-decode.mjs`, server and probes are scratch-only diagnostic material; their measurements do not run for visitors.

## Owner review still needed

Judge desktop cloud softness, cloud-motion pacing, opening feel, language/theme transitions and returning from projects in Before/After. Physical phone power/thermal behavior and an unthrottled live-network trace are not claimed. The2second minimum remains, the opening art/name handoff is unchanged, and publication requires separate authorization.

Final resize observation: child viewport1260px used1260×788canvas; widening to1759px produced1500×938canvas, confirming the intended cap after layout settled. Numeric rerun remains byte-identical; conversion timing ranged19–25ms.
