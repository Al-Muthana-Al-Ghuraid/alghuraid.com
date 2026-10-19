// Easter eggs: secret counter, highlighted hidden words, gravity mode, background ripple / draw-a-network /
// cracks, magnetic name and the dallah. Nothing happens until the visitor acts; no sound. Loaded lazily (see site.ts).
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isAr = () => root.lang === 'ar';
const tr = (en: string, ar: string) => (isAr() ? ar : en);
const store = {
  get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch {} },
};
const rand = (a: number, b: number) => a + Math.random() * (b - a);
const el = <K extends keyof HTMLElementTagNameMap>(tag: K, cls: string, html = '') => {
  const e = document.createElement(tag); e.className = cls; e.innerHTML = html; return e;
};

/* ======================================================= secrets + toast */
const SECRETS: Record<string, [string, string, string]> = {
  haboob: ['🌪️', 'Haboob Survivor', 'نجوت من الهبوب'],
  robot: ['🤖', 'Automation Unleashed', 'الأتمتة طليقة'],
  clouds: ['☁️', 'Head in the Clouds', 'رأسي في السحاب'],
  gravity: ['🍎', 'Newton Was Right', 'نيوتن كان محقًا'],
  prod: ['💥', 'You Broke Production', 'أوقفت بيئة الإنتاج'],
  network: ['🕸️', 'Network Architect', 'مهندس الشبكات'],
  magnet: ['🧲', 'Magnetic Personality', 'شخصية جذّابة'],
  dallah: ['☕', 'Ahlan wa Sahlan', 'أهلًا وسهلًا'],
  snake: ['🐍', 'Snake Charmer', 'ساحر الأفاعي'],
  gahwa: ['☕', 'Coffee Break', 'استراحة قهوة'],
  weather: ['🌡️', 'Riyadh Summer', 'صيف الرياض'],
};
const TOTAL = Object.keys(SECRETS).length;
const found = new Set<string>((store.get('secrets') ?? '').split(',').filter((k) => k in SECRETS));
let toastBox: HTMLElement | null = null;
function toast(html: string, ms = 3400) {
  toastBox ??= document.body.appendChild(el('div', 'egg-toasts'));
  const t = toastBox.appendChild(el('div', 'egg-toast', html));
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, ms);
}
function unlock(id: string) {
  const s = SECRETS[id]; if (!s || found.has(id)) return;
  found.add(id); store.set('secrets', [...found].join(','));
  toast(`<span class="egg-ico">${s[0]}</span><span><small>${tr('Secret found', 'اكتشفت سرًّا')} · ${tr(`${found.size} / ${TOTAL}`, `${found.size} من ${TOTAL}`)}</small><b>${tr(s[1], s[2])}</b></span>`);
  if (found.size === TOTAL) setTimeout(() => toast(`<span class="egg-ico">🏆</span><span><small>${tr('All secrets found', 'وجدت كل الأسرار')}</small><b>${tr('You explored everything. Respect! Now hire me 😄', 'استكشفت كل شيء، احترامي! والآن وظّفني 😄')}</b></span>`, 6000), 1200);
}
addEventListener('egg:unlock', (e) => unlock((e as CustomEvent).detail));

/* ======================================================= hidden words (one each, highlighted, click) */
const WORDS: { egg: string; scope: string; en: RegExp; ar: RegExp }[] = [
  { egg: 'haboob', scope: '.hero .eyebrow', en: /Riyadh/, ar: /الرياض/ },
  { egg: 'clouds', scope: '.hero .role', en: /Cloud/, ar: /سحابي/ },
  { egg: 'robot', scope: '.about-text', en: /automation/, ar: /الأتمتة/ },
];
function wrapWords() {
  for (const w of WORDS) {
    const scope = document.querySelector<HTMLElement>(w.scope);
    if (!scope || scope.querySelector('.egg-word')) continue;
    const re = isAr() ? w.ar : w.en;
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const t = walker.currentNode as Text, m = t.nodeValue!.match(re);
      if (!m || m.index === undefined) continue;
      const word = t.splitText(m.index); word.splitText(m[0].length);
      const span = el('span', 'egg-word'); span.dataset.egg = w.egg; span.tabIndex = 0; span.setAttribute('role', 'button');
      word.replaceWith(span); span.appendChild(word);
      break;
    }
  }
}
const fire = (egg: string) => (egg === 'haboob' ? haboob() : egg === 'robot' ? robot() : egg === 'clouds' ? cloudRain() : null);
document.addEventListener('click', (e) => { const w = (e.target instanceof Element ? e.target : document.body).closest<HTMLElement>('.egg-word'); if (w) fire(w.dataset.egg!); });
document.addEventListener('keydown', (e) => { const w = (e.target instanceof Element ? e.target.closest<HTMLElement>('.egg-word') : null); if (w && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); fire(w.dataset.egg!); } });
addEventListener('egg:haboob', haboob);

function haboob() {
  if (document.querySelector('.haboob')) return;
  unlock('haboob');
  const box = document.body.appendChild(el('div', 'haboob'));
  const c = box.appendChild(document.createElement('canvas')), x = c.getContext('2d')!;
  const W = (c.width = innerWidth), H = (c.height = innerHeight), dir = isAr() ? 1 : -1;
  const grains = Array.from({ length: reduce ? 60 : 420 }, () => ({ x: dir < 0 ? W + rand(0, W) : -rand(0, W), y: rand(0, H), v: rand(8, 22), s: rand(1, 3.2), a: rand(0.3, 0.9) }));
  const t0 = performance.now();
  (function frame(t: number) {
    x.clearRect(0, 0, W, H);
    for (const g of grains) { g.x += g.v * dir; g.y += Math.sin((g.x + t) / 90) * 0.8; x.fillStyle = `rgba(214,170,110,${g.a})`; x.fillRect(g.x, g.y, g.s * 2.2, g.s); }
    if (t - t0 < 2800) requestAnimationFrame(frame); else { box.classList.add('out'); setTimeout(() => box.remove(), 500); }
  })(t0);
  toast(`<span class="egg-ico">🌪️</span><span><b>${tr('Haboob! A classic Riyadh afternoon.', 'هبوب! عصرية رياضية معتادة.')}</b></span>`, 2600);
}
function robot() {
  if (document.querySelector('.walker')) return;
  unlock('robot');
  const r = document.body.appendChild(el('div', 'walker', '<span>🤖</span>'));
  r.style.setProperty('--dir', isAr() ? '-1' : '1');
  r.addEventListener('animationend', (e) => { if (e.target === r) r.remove(); });
}
function cloudRain() {
  unlock('clouds');
  for (let i = 0; i < (reduce ? 6 : 22); i++) {
    const c = document.body.appendChild(el('div', 'rain-cloud', '☁️'));
    c.style.left = `${rand(0, 96)}vw`; c.style.fontSize = `${rand(18, 40)}px`;
    c.style.animationDelay = `${rand(0, 1.4)}s`; c.style.animationDuration = `${rand(3, 5.5)}s`;
    c.style.setProperty('--drift', `${rand(-60, 60)}px`);
    c.addEventListener('animationend', () => c.remove());
  }
}

/* ======================================================= gravity mode */
type Body = { el: HTMLElement; ph: HTMLElement; x: number; y: number; vx: number; vy: number; w: number; h: number; r: number; vr: number; drag?: { dx: number; dy: number; lx: number; ly: number; lt: number } };
let bodies: Body[] = [], raf = 0, restoreBtn: HTMLElement | null = null;
function gravityOn() {
  if (bodies.length) return;
  const cards = [...document.querySelectorAll<HTMLElement>('.card, .chip, .sec-head h2, .sec-label, .hero h1, .hero .role, .hero .lead, .hero .eyebrow, .ctas .btn, .socials .icon-btn, .filter, .cs-hero h1')]
    .filter((c) => { const r = c.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight && r.width > 0 && !c.closest('.modal, .terminal'); })
    .filter((c, _i, all) => !all.some((o) => o !== c && o.contains(c)))
    .slice(0, 24);
  if (!cards.length) return;
  unlock('gravity');
  root.classList.add('gravity-on');
  bodies = cards.map((c) => {
    const r = c.getBoundingClientRect();
    const ph = el('div', 'gravity-ph'); ph.style.width = `${r.width}px`; ph.style.height = `${r.height}px`;
    ph.style.display = getComputedStyle(c).display.startsWith('inline') || c.classList.contains('chip') ? 'inline-block' : 'block';
    c.before(ph);
    Object.assign(c.style, { position: 'fixed', left: '0', top: '0', width: `${r.width}px`, height: `${r.height}px`, margin: '0', zIndex: '60', transition: 'none', transform: `translate(${r.left}px,${r.top}px)` });
    c.classList.add('gravity-body');
    const b: Body = { el: c, ph, x: r.left, y: r.top, vx: rand(-2, 2), vy: rand(-3, 0), w: r.width, h: r.height, r: 0, vr: rand(-3, 3) };
    c.addEventListener('pointerdown', (e) => { c.setPointerCapture(e.pointerId); b.drag = { dx: e.clientX - b.x, dy: e.clientY - b.y, lx: e.clientX, ly: e.clientY, lt: performance.now() }; e.preventDefault(); });
    c.addEventListener('pointermove', (e) => {
      if (!b.drag) return; const now = performance.now(), dt = Math.max(16, now - b.drag.lt);
      b.vx = ((e.clientX - b.drag.lx) / dt) * 16; b.vy = ((e.clientY - b.drag.ly) / dt) * 16;
      b.x = e.clientX - b.drag.dx; b.y = e.clientY - b.drag.dy; b.drag.lx = e.clientX; b.drag.ly = e.clientY; b.drag.lt = now;
    });
    c.addEventListener('pointerup', () => { b.drag = undefined; b.vr = b.vx * 0.6; });
    return b;
  });
  restoreBtn = document.body.appendChild(el('button', 'btn btn-primary gravity-restore', `↺ ${tr('Restore gravity', 'إعادة الجاذبية')}`));
  restoreBtn.addEventListener('click', gravityOff);
  const step = () => {
    const W = innerWidth, H = innerHeight;
    for (const b of bodies) {
      if (!b.drag) {
        b.vy += 0.9; b.x += b.vx; b.y += b.vy; b.r += b.vr;
        if (b.y + b.h > H) { b.y = H - b.h; b.vy *= -0.32; b.vx *= 0.86; b.vr *= 0.7; if (Math.abs(b.vy) < 1) b.vy = 0; }
        if (b.x < 0) { b.x = 0; b.vx *= -0.5; } if (b.x + b.w > W) { b.x = W - b.w; b.vx *= -0.5; }
        if (b.y < -b.h) b.vy = Math.abs(b.vy);
        b.vr *= 0.99; b.r = Math.max(-25, Math.min(25, b.r));
      }
      b.el.style.transform = `translate(${b.x}px,${b.y}px) rotate(${b.r}deg)`;
    }
    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
}
function gravityOff() {
  cancelAnimationFrame(raf);
  for (const b of bodies) {
    const r = b.ph.getBoundingClientRect();
    b.el.style.transition = 'transform .7s cubic-bezier(.2,.8,.2,1)';
    b.el.style.transform = `translate(${r.left}px,${r.top}px) rotate(0deg)`;
  }
  restoreBtn?.remove(); restoreBtn = null;
  setTimeout(() => {
    for (const b of bodies) { b.el.removeAttribute('style'); b.el.classList.remove('gravity-body'); b.ph.remove(); }
    bodies = []; root.classList.remove('gravity-on');
  }, 720);
}
addEventListener('egg:gravity', gravityOn);
let typed = '';
addEventListener('keydown', (e) => {
  const tgt = e.target;
  if ((tgt instanceof Element && tgt.closest('input, textarea, [contenteditable]')) || e.key.length !== 1) return;
  typed = (typed + e.key.toLowerCase()).slice(-7);
  if (typed === 'gravity') gravityOn();
});

/* ======================================================= background: ripple, draw-a-network, cracks */
// Only empty background reacts (text, cards and controls are ignored), and only when the visitor acts:
// click → ripple · click-and-drag → draw network lines on the grid · rapid triple-click → crack.
const CONTENT = 'a,button,input,textarea,label,select,nav,.card,.terminal,.chip,.btn,.filters,.term-hint,h1,h2,h3,h4,p,li,small,figure,img,svg,.egg-word,.eyebrow,.role,.sec-label,.stat,.modal,.gravity-restore,.egg-toasts,footer span,.dallah';
const GRID = 48; // matches the .bg-grid background-size
let cracks = 0, crackLayer: HTMLElement | null = null, shattering = false;
const isBackground = (t: EventTarget | null) => t instanceof Element && !t.closest(CONTENT) && !root.classList.contains('gravity-on') && !shattering;

let fx: HTMLCanvasElement | null = null, fxc: CanvasRenderingContext2D;
type Ripple = { x: number; y: number; t0: number };
type Net = { pts: { x: number; y: number }[]; done: number; packets: number[] };
const ripples: Ripple[] = [], nets: Net[] = [];
let fxRunning = false;
function fxCanvas() {
  if (!fx) {
    fx = document.body.appendChild(el('canvas', 'bg-fx')) as HTMLCanvasElement;
    fxc = fx.getContext('2d')!;
    const size = () => { const d = devicePixelRatio || 1; fx!.width = innerWidth * d; fx!.height = innerHeight * d; fxc.setTransform(d, 0, 0, d, 0, 0); };
    size(); addEventListener('resize', size);
  }
  if (!fxRunning) { fxRunning = true; requestAnimationFrame(fxFrame); }
}
const css = (v: string) => getComputedStyle(root).getPropertyValue(v).trim();
function fxFrame(t: number) {
  const W = innerWidth, H = innerHeight;
  fxc.clearRect(0, 0, W, H);
  const blue = css('--blue'), violet = css('--violet'), cyan = css('--cyan');
  // ripples: an expanding ring that lights up the grid dots it passes
  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i], p = (t - r.t0) / 1100;
    if (p >= 1) { ripples.splice(i, 1); continue; }
    const rad = 20 + p * 260, alpha = 1 - p;
    fxc.strokeStyle = blue; fxc.globalAlpha = alpha * 0.55; fxc.lineWidth = 2;
    fxc.beginPath(); fxc.arc(r.x, r.y, rad, 0, Math.PI * 2); fxc.stroke();
    fxc.fillStyle = cyan;
    for (let gx = Math.floor((r.x - rad) / GRID) * GRID; gx <= r.x + rad; gx += GRID)
      for (let gy = Math.floor((r.y - rad) / GRID) * GRID; gy <= r.y + rad; gy += GRID) {
        const d = Math.hypot(gx - r.x, gy - r.y), band = 1 - Math.abs(d - rad) / 34;
        if (band > 0) { fxc.globalAlpha = band * alpha; fxc.beginPath(); fxc.arc(gx, gy, 2.6, 0, Math.PI * 2); fxc.fill(); }
      }
  }
  // drawn networks: glowing lines between grid nodes, then packets flowing along them
  for (let i = nets.length - 1; i >= 0; i--) {
    const n = nets[i];
    const life = n.done ? 1 - Math.max(0, (t - n.done - 3000) / 1200) : 1;
    if (life <= 0) { nets.splice(i, 1); continue; }
    fxc.globalAlpha = 0.85 * life; fxc.lineWidth = 2.2; fxc.lineJoin = 'round';
    fxc.shadowColor = blue; fxc.shadowBlur = 12; fxc.strokeStyle = blue;
    fxc.beginPath(); n.pts.forEach((pt, k) => (k ? fxc.lineTo(pt.x, pt.y) : fxc.moveTo(pt.x, pt.y))); fxc.stroke();
    fxc.shadowBlur = 0; fxc.fillStyle = violet;
    for (const pt of n.pts) { fxc.beginPath(); fxc.arc(pt.x, pt.y, 3.6, 0, Math.PI * 2); fxc.fill(); }
    if (n.done && n.pts.length > 1) { // packets travel the path
      const segs = n.pts.length - 1;
      fxc.fillStyle = cyan; fxc.shadowColor = cyan; fxc.shadowBlur = 14;
      for (const off of n.packets) {
        const pos = (((t - n.done) / 700 + off) % segs + segs) % segs, k = Math.floor(pos), f = pos - k;
        const a = n.pts[k], b = n.pts[Math.min(k + 1, segs)];
        fxc.beginPath(); fxc.arc(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f, 3.2, 0, Math.PI * 2); fxc.fill();
      }
      fxc.shadowBlur = 0;
    }
  }
  fxc.globalAlpha = 1;
  if (ripples.length || nets.length) requestAnimationFrame(fxFrame); else { fxRunning = false; fxc.clearRect(0, 0, W, H); }
}
const snap = (v: number) => Math.round(v / GRID) * GRID;

let press: { x: number; y: number; drawing: boolean; net?: Net; mouse: boolean } | null = null;
let clickTimes: { t: number; x: number; y: number }[] = [];
document.addEventListener('pointerdown', (e) => {
  if (e.button !== 0 || !isBackground(e.target)) return;
  const mouse = e.pointerType !== 'touch';
  press = { x: e.clientX, y: e.clientY, drawing: false, mouse };
  if (mouse) e.preventDefault(); // no text selection while drawing
});
document.addEventListener('pointermove', (e) => {
  if (!press || !press.mouse) return;
  if (!press.drawing && Math.hypot(e.clientX - press.x, e.clientY - press.y) > 10) {
    press.drawing = true; press.net = { pts: [{ x: snap(press.x), y: snap(press.y) }], done: 0, packets: [] };
    nets.push(press.net); root.classList.add('drawing'); fxCanvas();
  }
  if (press.drawing && press.net) {
    const p = { x: snap(e.clientX), y: snap(e.clientY) }, last = press.net.pts[press.net.pts.length - 1];
    if (p.x !== last.x || p.y !== last.y) press.net.pts.push(p);
  }
});
addEventListener('pointerup', (e) => {
  if (!press) return;
  const p = press; press = null; root.classList.remove('drawing');
  if (p.drawing && p.net) {
    p.net.done = performance.now();
    p.net.packets = Array.from({ length: Math.min(4, Math.max(1, Math.floor(p.net.pts.length / 3))) }, (_, i) => i * 1.7);
    if (p.net.pts.length >= 5) unlock('network');
    return;
  }
  backgroundClick(e.clientX, e.clientY);
});
addEventListener('pointercancel', () => { press = null; root.classList.remove('drawing'); });
function backgroundClick(x: number, y: number) {
  ripples.push({ x, y, t0: performance.now() }); fxCanvas();
  const now = performance.now();
  clickTimes = clickTimes.filter((c) => now - c.t < 900 && Math.hypot(c.x - x, c.y - y) < 90);
  clickTimes.push({ t: now, x, y });
  if (clickTimes.length >= 3) { clickTimes = []; crack(x, y); }
}
function crack(x: number, y: number) {
  crackLayer ??= document.body.appendChild(el('div', 'crack-layer'));
  const n = 5 + Math.floor(Math.random() * 4), paths: string[] = [];
  for (let i = 0; i < n; i++) {
    let a = (i / n) * Math.PI * 2 + rand(-0.3, 0.3), px = 0, py = 0, d = `M0 0`;
    const len = rand(40, 110), seg = 4 + Math.floor(Math.random() * 3);
    for (let s = 0; s < seg; s++) { a += rand(-0.45, 0.45); px += Math.cos(a) * (len / seg); py += Math.sin(a) * (len / seg); d += ` L${px.toFixed(1)} ${py.toFixed(1)}`; }
    paths.push(`<path d="${d}"/>`);
    if (Math.random() > 0.5) paths.push(`<path class="thin" d="M${(px * 0.5).toFixed(1)} ${(py * 0.5).toFixed(1)} l${rand(-25, 25).toFixed(1)} ${rand(-25, 25).toFixed(1)}"/>`);
  }
  const svg = el('div', 'crack', `<svg viewBox="-120 -120 240 240" aria-hidden="true">${paths.join('')}<circle r="3"/></svg>`);
  svg.style.left = `${x}px`; svg.style.top = `${y}px`; svg.style.setProperty('--rot', `${rand(0, 360)}deg`);
  crackLayer.appendChild(svg);
  setTimeout(() => svg.classList.add('heal'), 5000);
  setTimeout(() => { svg.remove(); cracks = Math.max(0, cracks - 1); }, 6200);
  if (++cracks >= 4) shatter();
}
function shatter() {
  shattering = true; cracks = 0;
  const layer = crackLayer!;
  layer.classList.add('shatter');
  const shards = document.body.appendChild(el('div', 'shards'));
  for (let i = 0; i < (reduce ? 0 : 26); i++) {
    const s = shards.appendChild(el('i', 'shard'));
    s.style.left = `${rand(0, 100)}vw`; s.style.top = `${rand(0, 70)}vh`;
    s.style.setProperty('--w', `${rand(30, 110)}px`); s.style.setProperty('--h', `${rand(20, 80)}px`);
    s.style.setProperty('--r', `${rand(-540, 540)}deg`); s.style.setProperty('--x', `${rand(-120, 120)}px`);
    s.style.animationDelay = `${rand(0, 0.25)}s`;
    s.style.clipPath = `polygon(${rand(0, 40)}% 0, 100% ${rand(0, 40)}%, ${rand(60, 100)}% 100%, 0 ${rand(50, 100)}%)`;
  }
  unlock('prod');
  toast(`<span class="egg-ico">💥</span><span><small>${tr('incident #500', 'حادثة رقم 500')}</small><b>${tr('You broke production! 😅 Rolling back…', 'أوقفت بيئة الإنتاج! 😅 جارٍ التراجع…')}</b></span>`, 3200);
  setTimeout(() => {
    layer.innerHTML = ''; layer.classList.remove('shatter'); shards.remove();
    toast(`<span class="egg-ico">✅</span><span><b>${tr('Rollback complete. All systems operational.', 'اكتمل التراجع. جميع الأنظمة تعمل.')}</b></span>`, 2600);
    shattering = false;
  }, 2600);
}

/* ======================================================= magnetic name (press, drag, release) */
// Press on the name: letters get magnetized (closest first), swarm around the cursor and follow it while held.
// Release: each letter springs back home with an elastic bounce. English splits into letters,
// Arabic into words (splitting Arabic letters would break how they join).
type Mag = { s: HTMLElement; rx: number; ry: number; x: number; y: number; vx: number; vy: number; delay: number; ang: number; rad: number };
let mag: { el: HTMLElement; html: string; lang: string; parts: Mag[]; held: boolean; cx: number; cy: number; t0: number } | null = null;
let magRaf = 0;
const escHtml = (s: string) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!);
document.addEventListener('pointerdown', (e) => {
  const name = e.target instanceof Element ? e.target.closest<HTMLElement>('.hero h1 .grad') : null;
  if (!name || e.button !== 0 || root.classList.contains('gravity-on')) return;
  e.preventDefault();
  if (mag) { // grabbed again while letters are still flying home
    Object.assign(mag, { held: true, cx: e.clientX, cy: e.clientY, t0: performance.now() });
    mag.el.classList.add('magnet-held'); return;
  }
  const html = name.innerHTML, text = name.textContent ?? '';
  const pieces = isAr() ? text.split(/(\s+)/) : [...text];
  name.innerHTML = pieces.map((p) => (/^\s+$/.test(p) ? p : `<span class="mag">${escHtml(p)}</span>`)).join('');
  name.classList.add('magnet-on', 'magnet-held');
  const box = name.getBoundingClientRect(), spans = [...name.querySelectorAll<HTMLElement>('.mag')];
  const parts: Mag[] = spans.map((s, i) => {
    const r = s.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    return { s, rx: cx - box.left, ry: cy - box.top, x: 0, y: 0, vx: 0, vy: 0,
      delay: Math.hypot(cx - e.clientX, cy - e.clientY) * 1.3, // nearest letters are collected first
      ang: (i / spans.length) * Math.PI * 2, rad: 16 + spans.length * 1.1 + rand(-6, 6) };
  });
  mag = { el: name, html, lang: root.lang, parts, held: true, cx: e.clientX, cy: e.clientY, t0: performance.now() };
  unlock('magnet');
  cancelAnimationFrame(magRaf); magRaf = requestAnimationFrame(magFrame);
});
addEventListener('pointermove', (e) => { if (mag?.held) { mag.cx = e.clientX; mag.cy = e.clientY; } });
function magRelease() {
  if (!mag?.held) return;
  mag.held = false; mag.el.classList.remove('magnet-held');
}
addEventListener('pointerup', magRelease);
addEventListener('pointercancel', magRelease);
addEventListener('blur', magRelease);
function magFrame(t: number) {
  const m = mag; if (!m) return;
  const box = m.el.getBoundingClientRect(); // homes follow the page if it scrolls
  let moving = false;
  for (const p of m.parts) {
    const hx = box.left + p.rx, hy = box.top + p.ry;
    let tx = 0, ty = 0;
    if (m.held && t - m.t0 > p.delay) {
      const a = p.ang + t * 0.0025, r = p.rad * (0.85 + 0.15 * Math.sin(t * 0.004 + p.ang * 3));
      tx = m.cx + Math.cos(a) * r - hx; ty = m.cy + Math.sin(a) * r * 0.75 - hy;
    }
    const k = m.held ? 0.09 : 0.13, damp = m.held ? 0.76 : 0.8; // softer pull while held, springy return
    p.vx = (p.vx + (tx - p.x) * k) * damp; p.vy = (p.vy + (ty - p.y) * k) * damp;
    p.x += p.vx; p.y += p.vy;
    const speed = Math.hypot(p.vx, p.vy);
    const rot = Math.max(-35, Math.min(35, p.vx * 1.6));
    const sc = m.held && t - m.t0 > p.delay ? 1.12 + Math.min(speed / 60, 0.25) : 1 + Math.min(speed / 80, 0.2);
    p.s.style.transform = `translate(${p.x.toFixed(2)}px,${p.y.toFixed(2)}px) rotate(${rot.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
    if (m.held || Math.abs(p.x) > 0.4 || Math.abs(p.y) > 0.4 || speed > 0.3) moving = true;
  }
  if (moving) { magRaf = requestAnimationFrame(magFrame); return; }
  // everyone is home: small landing ripple, then restore the original markup
  const b = m.el.getBoundingClientRect();
  ripples.push({ x: b.left + b.width / 2, y: b.top + b.height / 2, t0: performance.now() }); fxCanvas();
  m.el.classList.remove('magnet-on');
  if (root.lang === m.lang) m.el.innerHTML = m.html;
  mag = null;
}

/* ======================================================= dallah (Arabic coffee) in the footer */
const DALLAH = `<svg viewBox="0 0 48 48" aria-hidden="true"><g class="pot">
  <path d="M24 4l2.2 4.2h-4.4z"/><path d="M18.5 8.6h11l-1.2 3.4h-8.6z"/>
  <path d="M19.5 12h9c.8 3 2.2 5.4 3.4 8.4 1.6 4 .8 9-2.6 12-1.8 1.6-3.6 2.2-5.3 2.2s-3.5-.6-5.3-2.2c-3.4-3-4.2-8-2.6-12 1.2-3 2.6-5.4 3.4-8.4z"/>
  <path d="M16.4 35.4h15.2l1.2 3.6H15.2z"/>
  <path d="M18 18.5c-4.8-1.4-8.8-5.2-11.6-10.5l1.6-.9c2.6 4.4 6.2 7.6 10.6 8.8z"/>
  <path class="handle" d="M31.5 14.5c6.5.4 7.5 12.5 1.2 14.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
</g><path class="stream" d="M6.6 8.6 C5.6 14 5 20 5.4 30" fill="none" stroke="#a16207" stroke-width="2" stroke-linecap="round"/></svg>`;
const dallahBtn = document.getElementById('dallah');
if (dallahBtn) {
  dallahBtn.insertAdjacentHTML('afterbegin', DALLAH);
  const cupsBox = dallahBtn.querySelector<HTMLElement>('.cups')!;
  let cups = 0, pouring = false;
  dallahBtn.addEventListener('click', () => {
    if (pouring) return;
    pouring = true; dallahBtn.classList.add('pouring');
    setTimeout(() => {
      dallahBtn.classList.remove('pouring'); pouring = false;
      if (cups < 3) { cups++; cupsBox.insertAdjacentHTML('beforeend', '<i class="finjan"></i>'); }
      if (cups === 3 && !dallahBtn.dataset.done) {
        dallahBtn.dataset.done = '1'; unlock('dallah');
        toast(`<span class="egg-ico">☕</span><span><small>${tr('3 cups', '3 فناجين')}</small><b>${tr("You're officially our guest. Ahlan wa sahlan! (Shake the cup when you've had enough 😄)", 'صرت ضيفنا رسميًا، أهلًا وسهلًا! (هزّ الفنجان إذا اكتفيت 😄)')}</b></span>`, 5200);
      } else if (cups === 3) {
        toast(`<span class="egg-ico">🫨</span><span><b>${tr('The cup is shaken. No more coffee, thank you!', 'هزّيت الفنجان، يكفي القهوة شكرًا!')}</b></span>`, 2600);
        cupsBox.innerHTML = ''; cups = 0; delete dallahBtn.dataset.done;
      }
    }, 1100);
  });
}

/* ======================================================= schedule + lang */
wrapWords();
addEventListener('langchange', () => wrapWords());
// handy for the preview: ?egg=haboob|robot|clouds|gravity
const demo = new URLSearchParams(location.search).get('egg');
if (demo) setTimeout(() => ({ haboob, robot, clouds: cloudRain, gravity: gravityOn } as Record<string, () => void>)[demo]?.(), 1200);
