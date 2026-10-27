# Typography and tag feedback batch — 27 October 2026

Owner requested implementing the four collected feedback items, testing locally and publishing if sound without another feedback request. Base public 535690e. The existing Slate & Cobalt surfaces, centered header, opening/artwork, navigation and renderer are retained.

## Typography decision and loading

The previous typography mixed DM Sans body text, Manrope headings, Arial controls/detail pages, and Tahoma Arabic. Compared with that baseline, IBM Plex Sans with IBM Plex Sans Arabic provides a coordinated technical/professional voice and consistent headings,body,controls and diagrams. IBM documents UI use and script support at https://www.ibm.com/design/language/typography/typeface/ and https://github.com/IBM/plex . The Google Fonts distribution supplied unmodified WOFF2 files,with both OFL licenses and local source attribution retained.

The new family is registered under local CSS aliases Portfolio Sans and Portfolio Arabic in one shared typography.css. Arabic's family stack falls through to the matching Latin family for English tool names. Explicit legacy font declarations now use the shared language-dependent variable; existing component font sizes,weights,line heights and motion remain,except the requested Education/tag emphasis. The external Google Fonts CSS import is retired. No remotely hosted font is required at runtime.

Available font bodies:

| Subset | WOFF2 files | Body bytes |
| --- | --- | --- |
| English/Latin, shared file for 400/500/600/700 faces |1|45,712|
| Arabic 400 |1|42,848|
| Arabic 500 |1|45,296|
| Arabic 600 |1|45,688|
| Arabic 700 |1|44,280|
| All available files |5|223,824|

These are local file-body sizes,not compressed transfer/GPU/CPU percentages. Faces load only when needed for rendered glyphs/weights. An English visit can use the 45,712B Latin file without Arabic downloads; switching to Arabic may add up to 178,112B of Arabic files,which can then be reused from cache. CSS uses font-display:swap. Existing opening and bilingual hero layout code already waits for font readiness/recalculates after font loading. No new preloads force both languages to download,and no added animation or renderer work is introduced. Font-ready timing can depend on network/cache conditions; the visible styled opening minimum remains2000ms.

## Requested visual and label changes

- Education heading grows from 9px to 13px at weight 700,with an existing Cobalt-tinted background and leading rule. English/Arabic line metrics are preserved; Arabic letter spacing stays0.
- Homepage project/program tags use 13px/600 text and a clearer 1px Cobalt border with a restrained existing-color tint. Both themes retain the existing surface fade. This adds ordinary CSS paint only.
- Job automation tags lead with n8n, Apify, Oracle Cloud and end with Cloudflare. Mobile's existing first-three highlights therefore prioritize the requested tools.
- Display labels simplify Docker Compose→Docker, Cloudflare Zero Trust→Cloudflare, React 18→React, Bootstrap 5→Bootstrap, Django ORM→Django,with duplicate Django tags merged. GitHub Actions remains. Technical explanatory scope such as an ORM or Docker Compose deployment remains in detailed prose/architecture where meaningful.
- Cloudflare's canonical internal skill key/icon/connections remain Cloudflare Zero Trust; only its display label/catalog alias changes. Related highlighting remains functional.

## Verification and limits

Local browser checks cover 12 homepage variants, 40 project/program views and 24 diagram views across both languages, day/night and desktop/narrow phone. No horizontal overflow,clipped header controls or wide diagram node labels found. Header remains centered; opening samples remain at least 2000ms. Python and Cloudflare selection,language/theme controls and navigation are checked as part of release QA. Existing diagram lifecycle,theme-context and frame-policy tests remain passing. Data sizes and behavior checks do not certify physical-device FPS,battery or thermal outcomes.

Measured Education text contrast is 7.16:1 in day and 6.80:1 in night against its badge background (WCAG relative-luminance calculation from rendered RGB colors).
