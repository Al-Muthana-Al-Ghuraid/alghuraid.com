# Decisions and lessons learned

How the project was run: a requirements interview, a clickable design mockup reviewed before any real code,
then the build, then deployment. Each step was signed off before the next one started.

## Key decisions

| Decision | Chosen | Why | Alternatives considered |
|---|---|---|---|
| Framework | **Astro** (static) | Fast pages, content collections with typed schemas, one file per item | Plain HTML (hard to maintain), Next.js (needs a server for no gain) |
| Hosting | **Cloudflare Workers + static assets** | Domain already on Cloudflare, global edge, Git-triggered builds, free | Cloudflare Pages (now labelled "legacy" in the dashboard), GitHub Pages (manual DNS, fewer features), a VPS (maintenance, single region) |
| Main address | **alghuraid.com** with `www` and `almuthana` redirecting | Shortest URL for CVs and LinkedIn; one canonical address for SEO | Subdomain as main site |
| Arabic | **Full RTL toggle, Arabic required in the schema** | A bilingual audience; a half-translated site looks worse than none | English only, or English fallback for missing Arabic |
| Content editing | **Pages CMS** on the repo | Forms in the browser, no server, every save is a Git commit (history + rollback) | Editing YAML by hand, a hosted headless CMS |
| Contact form | **Web3Forms** | A static site can't send email; free, no account friction, public key | Removing the form, building an email Worker (needs domain email) |
| Analytics | **Cloudflare Web Analytics** | Privacy-friendly, no cookie banner, already integrated | Google Analytics (cookies, consent) |
| Phone number | **Only behind the WhatsApp button**, removed from the public CV | Reduce spam and scraping while staying reachable | Showing it as text |

## Design principles

- **Dark "Modern Glow" with a tech flavour:** navy/black, blue→violet glow, glass cards, a grid background, monospace accents, and a terminal.
- **Motion with restraint:** reveals, hover spotlight, counters; everything off under `prefers-reduced-motion`.
- **Value over cost:** project copy emphasises what the systems do (automation, speed, security), not that they're cheap to run.
- **Every change ships in both languages**, including UI labels, the Snake game, and diagram labels.

## Lessons learned

- **Arabic is more than translation.** Mixed English/Arabic text reorders itself under the Unicode bidi algorithm
  ("Security+" became "+Security", `~1,000` became `1,000~`, and an email split at the `@`). Fix: automatically isolate Latin runs with `<bdi dir="ltr">` in RTL mode,
  plus explicit `dir="ltr"` because `bdi`'s default `auto` direction falls back to RTL for strings with no strong letters.
- **Native review catches what tooling can't:** grammar such as *مهندس سحابي* (not *مهندس سحابة*) came from reviewing the Arabic as a native speaker.
- **CMS round-trips need a tolerant schema.** Form editors may save empty optional fields as `""` or `null`; the schema now normalises those
  instead of failing the build. A real edit was tested end to end (admin panel → commit → build → live).
- **Windows Smart App Control blocked Astro's native compiler** (`.node` binary). Local fix: drop in Astro's WebAssembly compiler via a
  `postinstall` script that only runs on Windows, from a git-ignored copy; Cloudflare's Linux builds are unaffected.
- **YAML flow mappings and commas don't mix:** `{ en: automated, unattended }` silently became two keys; text with commas must be quoted.
- **Editing a PDF without re-creating it:** the CV's phone number was removed from the page's text stream itself (not covered with a white box),
  using the font's ToUnicode map to locate the glyphs and its width table to re-center the line exactly.
- **Check edge behaviour with real browser requests:** Cloudflare injects the analytics beacon only for browser-like requests, so a plain `curl` makes it look missing.
- **Headless screenshots lie at phone widths:** desktop Chrome windows can't shrink below ~500px; true device emulation showed the layout was fine.
