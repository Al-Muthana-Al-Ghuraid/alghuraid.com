// sitemap.xml generated from content, so new or hidden projects are reflected automatically.
import type { APIRoute } from 'astro';
import { loadSite } from '../lib/data';

export const GET: APIRoute = async ({ site }) => {
  const { projects } = await loadSite();
  const today = new Date().toISOString().slice(0, 10);
  const urls = ['/', ...projects.map((p) => `/projects/${p.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${new URL(u, site)}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
