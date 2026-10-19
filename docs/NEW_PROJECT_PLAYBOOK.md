# New project playbook

How to put a new project online at `name.alghuraid.com` using the same setup as this portfolio:
GitHub (code) → Cloudflare (build + hosting) → your domain. It takes about 10 minutes per project.

> **Reserved, never touch:** `alghuraid.com`, `www`, `almuthana` (this portfolio) and `n8n` (private server).
> Use the Cloudflare dashboard in the "Cloud" Chrome profile, Brave, or an Incognito window.

## 1. Pick a name
Short and lowercase, e.g. `taskboard`. It becomes the repo name and the address `taskboard.alghuraid.com`.

## 2. Create the GitHub repo
1. https://github.com/new → Owner **Al-Muthana-Al-Ghuraid** → name → **Public** (portfolio projects) → **don't** add README / .gitignore / license if code already exists locally.
2. Push the code (Claude can do this from your PC).

## 3. Let Cloudflare see the repo
https://github.com/settings/installations → **Cloudflare Workers and Pages** → **Configure** → *Only select repositories* → add the new repo → **Save**.

## 4. Create the Cloudflare app
Workers & Pages → **Create application** → **Connect GitHub** → pick the repo → **Next**, then:

| Project type | Build command | Deploy command | Needs in repo |
|---|---|---|---|
| Static site (Astro, Vite, plain HTML) | `npm run build` | `npx wrangler deploy` | `wrangler.jsonc` with `"assets": { "directory": "./dist" }` (copy from this repo) |
| Plain HTML, no build | *(empty)* | `npx wrangler deploy` | `wrangler.jsonc` pointing `assets.directory` at the folder with `index.html` |
| API / backend on Workers | as the project needs | `npx wrangler deploy` | `wrangler.jsonc` with `"main"` set to the worker script |

The **project name in Cloudflare must equal `"name"` in `wrangler.jsonc`**, or the deploy fails.
Projects that need a full server (Docker, databases) don't fit here; they go on Oracle Cloud like n8n.

## 5. Add the address
App → **Domains** → **+ Add Domain** → `alghuraid.com ›` → Subdomain: the project name → **Add domain**.
HTTPS and DNS are automatic. "Always Use HTTPS" already covers every subdomain.

## 6. Analytics
Account → **Web Analytics** → **Add a site** → hostname `name.alghuraid.com` → automatic setup.
All sites appear in the same dashboard. Basic traffic for every subdomain is also under the domain's **Analytics**.

## 7. Show it on the portfolio
https://app.pagescms.org → alghuraid.com → **Projects** → **Add an entry**:
English + Arabic text, tags, categories, and the live link `https://name.alghuraid.com`.
Rename the suggested file name to the project name (it becomes `/projects/name/`).

## Checklist
- [ ] Repo created and pushed, no secrets committed (`.env` is git-ignored)
- [ ] Cloudflare GitHub app includes the repo
- [ ] App deployed (green build) and `name.alghuraid.com` added
- [ ] Opens on phone and desktop over HTTPS
- [ ] Web Analytics site added
- [ ] Portfolio project entry added (EN + AR)
