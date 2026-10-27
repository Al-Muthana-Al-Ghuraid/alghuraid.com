# Accepted single opening, typography and Quick view — 27 October 2026

Owner reviewed the local repair and explicitly authorized publication while retaining the previous release. Previous public a78e853 restores535690e and is kept in rollback/pre-single-opening-20261027 plus a full source ZIP. The earlier9b65e88/42dbdd4 font/tag batch was rolled back after two-opening/first-language regressions; this release includes that appearance with the reviewed repairs below. Do not deploy the old batch or the prototype archive branch alone.

## Behavior and costs

- The approved fieldbook opening artwork and its styles are in initial homepage HTML. The name-only critical pseudo-cover is disabled; the old placeholder is replaced. DOM readiness reuses the artwork instead of rebuilding/restarting it. General font readiness no longer blocks presenting the composition. Existing visible-artwork minimum>=2000ms, readiness/timeout guards, reduced motion and name handoff remain. Internal navigation retains the same homepage and skips the intro.
- Quick view stays110px in both languages (44px tall on phone), fades its label before translation and reveals it from65%of its arrival. Incoming font weights400/500/600/700 prepare before outgoing fade. Before: real capture100→92px and label changed atopacity1. After:110px throughout, label change atopacity0.
- English/Arabic IBM Plex font files total223,824B available:45,712B Latin and178,112B across four Arabic weights. Font preparation moves existing loading ahead of the language animation; it adds no new face. Avoid conflating font bytes with CPU/GPU cost.
- Initial HTML grows40,519B uncompressed versus the prior font batch, while removing its17,459Bdynamic opening CSS request. HTMLgzip difference10,742B before subtracting omitted CSS. No new media, renderer or continuous animation loops. The existing sky quality, medium setting, idle/freeze/decode improvements and bounded desktop120fps theme-transition policy remain.
- Education and homepage tags retain the reviewed stronger Cobalt emphasis. Tags use service names (Cloudflare,Docker,React,Django), n8n/Apify lead automation and Cloudflare is last. Canonical skills wiring remains intact. No authored gold/green reintroduced.

## Evidence and limits

Local controlled900msfont-latency desktop EN/day: detailed opening2044ms; first AR fontwait0,shade blank63ms. Desktop AR/night reverse: opening2085ms,fontwait0,blank79ms.390pxAR/night controlled-font run: opening2073ms,0name-only animationframes,110×44Quick view,nooverflow; reverse fontwait0,blank60ms. Phone projectBack returns visiblemainopacity1 without replay. In-app evidence proves state/order/geometry, not physical Chrome or device FPS/battery certification. Earlier throttled runs had~1sRAF gaps, so do not compare their raw transition duration as an optimization percentage.

The localhost review wrapper, before/fixed controls, probe and simulated latency remain outside public-site/dist. A separate local prototype archive preserves the reviewed implementation. Subsequent publication must version the full dependency chain and repeat cold opening/first EN↔AR checks, not only settled layout.
