// Easter eggs: secret counter, falcon flyby (background), highlighted hidden words, gravity mode
// and the "don't break production" background cracks. Loaded lazily (see site.ts); everything is bilingual.
// Sounds only ever play in response to something the visitor does.
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

/* ======================================================= sound (interaction only) */
let ctx: AudioContext | null = null;
function ac() { ctx ??= new AudioContext(); if (ctx.state === 'suspended') ctx.resume(); return ctx; }
function noise(dur: number, freq: number, q: number, vol: number, sweepTo?: number) {
  const a = ac(), t = a.currentTime, n = Math.floor(a.sampleRate * dur), buf = a.createBuffer(1, n, a.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3);
  const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
  src.buffer = buf; f.type = 'bandpass'; f.frequency.setValueAtTime(freq, t); if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur); f.Q.value = q;
  g.gain.value = vol; src.connect(f); f.connect(g); g.connect(a.destination); src.start(t);
}
const sfx = {
  crack: () => { noise(0.09, rand(2800, 4200), 2.5, 0.5); noise(0.05, 6500, 6, 0.25); },
  shatter: () => { for (let i = 0; i < 7; i++) setTimeout(() => noise(rand(0.15, 0.35), rand(2500, 6000), 1.5, 0.35), i * rand(30, 70)); },
  wind: () => noise(2.6, 500, 0.7, 0.9, 260),
};
/** Play the start of an audio file, faded out at the end. Silent if the file isn't there. */
const clips = new Map<string, AudioBuffer | null>();
async function playClip(url: string, seconds: number) {
  const a = ac();
  if (!clips.has(url)) {
    try { const r = await fetch(url); if (!r.ok) throw 0; clips.set(url, await a.decodeAudioData(await r.arrayBuffer())); }
    catch { clips.set(url, null); }
  }
  const buf = clips.get(url); if (!buf) return;
  const src = a.createBufferSource(), g = a.createGain(), t = a.currentTime, len = Math.min(seconds, buf.duration);
  src.buffer = buf; g.gain.setValueAtTime(0.9, t); g.gain.setValueAtTime(0.9, t + Math.max(0, len - 1.2)); g.gain.linearRampToValueAtTime(0.0001, t + len);
  src.connect(g); g.connect(a.destination); src.start(t, 0, len);
}

/* ======================================================= secrets + toast */
const SECRETS: Record<string, [string, string, string]> = {
  falcon: ['🦅', 'Falconer', 'الصقّار'],
  haboob: ['🌪️', 'Haboob Survivor', 'نجوت من الهبوب'],
  robot: ['🤖', 'Automation Unleashed', 'الأتمتة طليقة'],
  clouds: ['☁️', 'Head in the Clouds', 'رأسي في السحاب'],
  gravity: ['🍎', 'Newton Was Right', 'نيوتن كان محقًا'],
  prod: ['💥', 'You Broke Production', 'أوقفت بيئة الإنتاج'],
  snake: ['🐍', 'Snake Charmer', 'ساحر الأفاعي'],
  gahwa: ['☕', 'Coffee Break', 'استراحة قهوة'],
  weather: ['🌡️', 'Riyadh Summer', 'صيف الرياض'],
  kenobi: ['👋', 'General Kenobi', 'الجنرال كينوبي'],
  terminator: ['🦾', "I'll Be Back", 'سأعود'],
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

/* ======================================================= falcon (background layer) */
// Top view, heading right: long pointed swept-back wings with a bent wrist, rounded tail, hooked beak.
const FALCON = `<svg viewBox="0 -12 160 144" aria-hidden="true">
  <path class="wing up" d="M108 52 C109 40 107 28 102 20 C96 10 86 0 68 -10 C75 0 78 7 78 12 C73 8 67 5 60 4 C69 13 74 23 75 32 C75 40 74 46 72 53 Z"/>
  <path class="wing down" d="M108 68 C109 80 107 92 102 100 C96 110 86 120 68 130 C75 120 78 113 78 108 C73 112 67 115 60 116 C69 107 74 97 75 88 C75 80 74 74 72 67 Z"/>
  <path d="M60 55 L36 50 Q28 60 36 70 L60 65 Z"/>
  <path d="M128 60 C127 53 119 49 108 49 C92 49 74 53 58 55 L58 65 C74 67 92 71 108 71 C119 71 127 67 128 60 Z"/>
  <circle cx="127" cy="60" r="7"/><path class="beak" d="M132 56.5 Q140 57.5 139.5 61 Q139 63.5 136.5 62.5 Q135.5 61 132.5 62.5 Z"/><circle class="eye" cx="129" cy="57.5" r="1.3"/>
</svg>`;
function falconFlyby() {
  if (document.hidden || document.querySelector('.falcon') || root.classList.contains('gravity-on')) return;
  const f = el('div', 'falcon', FALCON);
  const ltr = Math.random() > 0.5;
  if (!ltr) f.classList.add('to-left');
  f.style.top = `${rand(14, 40)}vh`;
  f.style.animationDuration = `${rand(11, 15)}s`;
  document.body.appendChild(f);
  f.addEventListener('animationend', (e) => { if (e.target === f) f.remove(); });
}
function catchFalcon(f: HTMLElement) {
  f.classList.add('caught'); unlock('falcon'); saudiPride();
  setTimeout(() => f.remove(), 1000);
}
function saudiPride() {
  playClip('/media/sfx/anthem.mp3', ANTHEM_SECONDS);
  const o = document.body.appendChild(el('div', 'pride', `<div class="pride-msg"><span class="pride-ico">💚</span><b>${tr('Proud to be Saudi', 'فخور بسعوديتي')}</b></div>`));
  setTimeout(() => o.classList.add('out'), ANTHEM_SECONDS * 1000);
  setTimeout(() => o.remove(), ANTHEM_SECONDS * 1000 + 900);
}
const ANTHEM_SECONDS = 5;

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
document.addEventListener('click', (e) => { const w = (e.target as HTMLElement).closest<HTMLElement>('.egg-word'); if (w) fire(w.dataset.egg!); });
document.addEventListener('keydown', (e) => { const w = (e.target as HTMLElement).closest?.('.egg-word') as HTMLElement | null; if (w && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); fire(w.dataset.egg!); } });
addEventListener('egg:haboob', haboob);

function haboob() {
  if (document.querySelector('.haboob')) return;
  unlock('haboob'); sfx.wind();
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

/* ======================================================= background clicks: falcon + cracks */
// Anything that is content (text, cards, controls) is ignored; only clicks on empty background count.
const CONTENT = 'a,button,input,textarea,label,select,nav,.card,.terminal,.chip,.btn,.filters,.term-hint,h1,h2,h3,h4,p,li,small,figure,img,svg,.egg-word,.eyebrow,.role,.sec-label,.stat,.modal,.gravity-restore,.egg-toasts,footer span';
let cracks = 0, crackLayer: HTMLElement | null = null, shattering = false;
document.addEventListener('click', (e) => {
  if (root.classList.contains('gravity-on') || shattering) return;
  const target = e.target as HTMLElement;
  if (target.closest(CONTENT)) return;
  const f = document.querySelector<HTMLElement>('.falcon:not(.caught)');
  if (f) { const r = f.getBoundingClientRect(); if (e.clientX >= r.left - 12 && e.clientX <= r.right + 12 && e.clientY >= r.top - 12 && e.clientY <= r.bottom + 12) { catchFalcon(f); return; } }
  crack(e.clientX, e.clientY);
});
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
  sfx.crack();
  setTimeout(() => svg.classList.add('heal'), 5000);
  setTimeout(() => { svg.remove(); cracks = Math.max(0, cracks - 1); }, 6200);
  if (++cracks >= 6) shatter();
}
function shatter() {
  shattering = true; cracks = 0; sfx.shatter();
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

/* ======================================================= schedule + lang */
wrapWords();
addEventListener('langchange', () => wrapWords());
if (!reduce) {
  const next = (range: [number, number]) => setTimeout(() => { falconFlyby(); next([180, 300]); }, rand(range[0], range[1]) * 1000);
  next([40, 70]); // first visit after ~1 minute, then every 3–5 minutes
}
// handy for the preview: ?egg=falcon|haboob|robot|clouds|gravity
const demo = new URLSearchParams(location.search).get('egg');
if (demo) setTimeout(() => ({ falcon: falconFlyby, haboob, robot, clouds: cloudRain, gravity: gravityOn } as Record<string, () => void>)[demo]?.(), 1200);
