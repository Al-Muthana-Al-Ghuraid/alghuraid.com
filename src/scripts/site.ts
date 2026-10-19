// Shared client behaviour for every page.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => [...el.querySelectorAll<T>(s)];
const store = { get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
                set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch {} } };

/* ---------- language (EN / AR, RTL) ---------- */
// In RTL, wrap English words and numbers in <bdi dir="ltr"> so "Security+", "2019–2024" or "~1,000" keep their order.
const LATIN = /~?[A-Za-z0-9][A-Za-z0-9+#®.,&\/\-–→%$:@_]*(?:[ ]+[A-Za-z0-9+#®&\/\-–→%$~@][A-Za-z0-9+#®.,&\/\-–→%$:@_]*)*/g;
function isolateLatin(node: Node) {
  const skip = 'script,style,svg,code,bdi,textarea,input,.terminal,.chip';
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
    acceptNode: (t) => !t.nodeValue!.trim() || t.parentElement!.closest(skip) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  const texts: Text[] = [];
  while (walker.nextNode()) texts.push(walker.currentNode as Text);
  for (const t of texts) {
    const s = t.nodeValue!; LATIN.lastIndex = 0;
    if (!LATIN.test(s)) continue;
    LATIN.lastIndex = 0;
    const frag = document.createDocumentFragment(); let last = 0, m: RegExpExecArray | null;
    while ((m = LATIN.exec(s))) {
      let run = m[0]; const trail = run.match(/[.,:]+$/); if (trail) run = run.slice(0, -trail[0].length);
      frag.append(s.slice(last, m.index));
      const b = document.createElement('bdi'); b.dir = 'ltr'; b.textContent = run; frag.append(b);
      last = m.index + run.length;
    }
    frag.append(s.slice(last)); t.replaceWith(frag);
  }
}
// Arabic HTML is prepared (bdi-isolated) once per element and cached, so switching is a quick swap.
const arCache = new WeakMap<HTMLElement, string>();
function arHtml(el: HTMLElement) {
  let html = arCache.get(el);
  if (html === undefined) {
    if (el.closest('svg,.chip,.terminal')) html = el.dataset.ar!;
    else { const box = document.createElement('div'); box.innerHTML = el.dataset.ar!; isolateLatin(box); html = box.innerHTML; }
    arCache.set(el, html);
  }
  return html;
}
let pageIsolated = false; // English-only text outside [data-ar] (names, tech terms) only needs isolating once
const i18nEls = () => $$('[data-ar]');
function setLang(l: 'en' | 'ar', save = true) {
  const els = i18nEls();
  els.forEach((el) => { if (el.dataset.en === undefined) el.dataset.en = el.innerHTML; });
  $$<HTMLInputElement>('[data-ar-ph]').forEach((el) => { if (el.dataset.enPh === undefined) el.dataset.enPh = el.placeholder; });
  root.lang = l; root.dir = l === 'ar' ? 'rtl' : 'ltr';
  els.forEach((el) => { el.innerHTML = l === 'ar' ? arHtml(el) : el.dataset.en!; });
  $$<HTMLInputElement>('[data-ar-ph]').forEach((el) => { el.placeholder = l === 'ar' ? el.dataset.arPh! : el.dataset.enPh!; });
  if (l === 'ar' && !pageIsolated) { isolateLatin(document.body); pageIsolated = true; }
  const s = $$('#langBtn span'); s[0]?.classList.toggle('on', l === 'en'); s[1]?.classList.toggle('on', l === 'ar');
  if (save) store.set('lang', l);
  window.dispatchEvent(new CustomEvent('langchange', { detail: l }));
}
/** Run a page-wide change inside a soft blur/fade transition where the browser supports it. */
function smooth(kind: string, change: () => void) {
  type VT = { finished: Promise<void>; ready: Promise<void>; updateCallbackDone: Promise<void> };
  const d = document as Document & { startViewTransition?: (cb: () => void) => VT };
  if (!d.startViewTransition || reduce || document.visibilityState !== 'visible') { change(); return; }
  root.dataset.vt = kind;
  // safety net: if the browser can't paint the transition promptly, apply the change anyway
  let done = false; const run = () => { if (!done) { done = true; change(); } };
  const timer = setTimeout(run, 250);
  const vt = d.startViewTransition(() => { clearTimeout(timer); run(); });
  vt.ready.catch(() => {}); vt.updateCallbackDone.catch(() => {}); // a skipped transition is fine
  vt.finished.catch(() => {}).finally(() => delete root.dataset.vt);
}
// remember every element's original English markup up front (before any Easter egg rearranges it)
i18nEls().forEach((el) => { if (el.dataset.en === undefined) el.dataset.en = el.innerHTML; });
if (root.lang === 'ar') setLang('ar', false);
$('#langBtn')?.addEventListener('click', () => smooth('lang', () => setLang(root.lang === 'ar' ? 'en' : 'ar')));

/* ---------- theme ---------- */
$('#themeBtn')?.addEventListener('click', () => smooth('theme', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  store.set('theme', root.dataset.theme);
}));

/* ---------- mobile menu ---------- */
const nl = $('#navLinks');
$('#menuBtn')?.addEventListener('click', () => nl?.classList.toggle('open'));
nl && $$('a', nl).forEach((a) => a.addEventListener('click', () => nl.classList.remove('open')));

/* ---------- scroll reveal (staggered) ---------- */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
$$('.reveal').forEach((el) => {
  const sibs = [...el.parentElement!.children].filter((c) => c.classList.contains('reveal'));
  el.style.transitionDelay = `${sibs.indexOf(el) * 80}ms`;
  io.observe(el);
});

/* ---------- count-up stats ---------- */
const cio = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const el = e.target as HTMLElement, to = +el.dataset.to!, t0 = performance.now(), dur = reduce ? 0 : 1400;
  const step = (t: number) => { const p = dur ? Math.min((t - t0) / dur, 1) : 1; el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString('en'); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), { threshold: 0.5 });
$$('.count').forEach((el) => cio.observe(el));

/* ---------- card spotlight ---------- */
$$('.card').forEach((c) => c.addEventListener('pointermove', (e) => {
  const r = c.getBoundingClientRect();
  c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`);
}));

/* ---------- modals ---------- */
const openModal = (m: HTMLElement) => { m.classList.add('open'); document.body.style.overflow = 'hidden'; $('[data-close]', m)?.focus(); };
const closeModal = (m: HTMLElement) => { m.classList.remove('open'); document.body.style.overflow = ''; };
$$('.modal').forEach((m) => {
  m.addEventListener('click', (e) => { if (e.target === m) closeModal(m); });
  $$('[data-close]', m).forEach((b) => b.addEventListener('click', () => closeModal(m)));
});
addEventListener('keydown', (e) => { if (e.key === 'Escape') $$('.modal.open').forEach(closeModal); });
const qv = $('#qv'); $('#openQv')?.addEventListener('click', () => qv && openModal(qv));
const cm = $('#certModal');
$$('[data-cert-img]').forEach((b) => b.addEventListener('click', () => {
  if (!cm) return;
  $('#certModalTitle')!.textContent = b.dataset.certName!;
  const img = $<HTMLImageElement>('#certModalImg')!; img.src = b.dataset.certImg!; img.alt = b.dataset.certName!;
  openModal(cm);
}));

/* ---------- project filters ---------- */
$$('.filter').forEach((btn) => btn.addEventListener('click', () => {
  $$('.filter').forEach((b) => b.classList.toggle('on', b === btn));
  const f = btn.dataset.f!, cards = $$('.project');
  cards.forEach((c) => { if (!c.classList.contains('gone')) c.classList.add('out'); });
  setTimeout(() => cards.forEach((c, i) => {
    const show = f === 'all' || c.dataset.cat!.split(' ').includes(f);
    c.classList.remove('out', 'pop'); c.classList.toggle('gone', !show);
    if (show) { c.style.animationDelay = `${i * 70}ms`; void c.offsetWidth; c.classList.add('pop'); }
  }), reduce ? 0 : 240);
}));

/* ---------- self-drawing diagrams ---------- */
function playDiagram(svg: SVGSVGElement) {
  svg.classList.remove('play', 'flow'); void svg.getBoundingClientRect();
  requestAnimationFrame(() => svg.classList.add('play'));
  const anim = svg.querySelector('animateMotion') as SVGAnimationElement | null;
  setTimeout(() => { svg.classList.add('flow'); try { anim?.beginElement(); } catch {} }, reduce ? 0 : 3300);
}
const dio = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { playDiagram(e.target as SVGSVGElement); dio.unobserve(e.target); } }), { threshold: 0.35 });
$$<SVGSVGElement>('svg.diagram').forEach((d) => dio.observe(d));
$$('.replay').forEach((b) => b.addEventListener('click', () => {
  const d = b.closest('.cs-sec')?.querySelector<SVGSVGElement>('svg.diagram'); if (d) playDiagram(d);
}));

/* ---------- contact form ---------- */
const form = $<HTMLFormElement>('#contactForm');
form?.addEventListener('submit', async (e) => {
  const endpoint = form.dataset.endpoint;
  if (!endpoint) return; // no endpoint configured yet: fall back to mailto action
  e.preventDefault();
  const ok = $('[data-ok]', form)!, err = $('[data-err]', form)!, btn = $<HTMLButtonElement>('button[type=submit]', form)!;
  ok.hidden = err.hidden = true; btn.disabled = true; btn.classList.add('sending');
  try {
    const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
    if (!res.ok) throw new Error(String(res.status));
    form.reset(); ok.hidden = false;
    window.dispatchEvent(new CustomEvent('formsent'));
  } catch { err.hidden = false; } finally { btn.disabled = false; setTimeout(() => btn.classList.remove('sending'), 900); }
});

/* ---------- copy email ---------- */
$$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy!); } catch { return; }
  b.classList.add('done'); setTimeout(() => b.classList.remove('done'), 1800);
}));

/* ---------- hero terminal + snake (home page only) ---------- */
if ($('#terminal')) import('./terminal');

/* ---------- Easter eggs (loaded when the browser is idle) ---------- */
const idle = (cb: () => void) => ('requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 2500 }) : setTimeout(cb, 1200));
idle(() => import('./eggs'));
