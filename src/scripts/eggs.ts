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
  network: ['🕸️', 'Network Architect', 'مهندس الشبكات'],
  magnet: ['🧲', 'Magnetic Personality', 'شخصية جذّابة'],
  dallah: ['☕', 'Ahlan wa Sahlan', 'أهلًا وسهلًا'],
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
document.addEventListener('click', (e) => { const w = (e.target instanceof Element ? e.target : document.body).closest<HTMLElement>('.egg-word'); if (w) fire(w.dataset.egg!); });
document.addEventListener('keydown', (e) => { const w = (e.target instanceof Element ? e.target.closest<HTMLElement>('.egg-word') : null); if (w && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); fire(w.dataset.egg!); } });
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
  const f = document.querySelector<HTMLElement>('.falcon:not(.caught)');
  if (f) { const r = f.getBoundingClientRect(); if (x >= r.left - 12 && x <= r.right + 12 && y >= r.top - 12 && y <= r.bottom + 12) { catchFalcon(f); return; } }
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
  sfx.crack();
  setTimeout(() => svg.classList.add('heal'), 5000);
  setTimeout(() => { svg.remove(); cracks = Math.max(0, cracks - 1); }, 6200);
  if (++cracks >= 4) shatter();
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

/* ======================================================= magnetic name (press and hold) */
// English splits into letters; Arabic into words (splitting Arabic letters would break how they join).
let magnet: { el: HTMLElement; html: string; lang: string } | null = null;
document.addEventListener('pointerdown', (e) => {
  const name = (e.target instanceof Element ? e.target : document.body).closest<HTMLElement>('.hero h1 .grad');
  if (!name || e.button !== 0 || magnet || root.classList.contains('gravity-on')) return;
  e.preventDefault();
  magnet = { el: name, html: name.innerHTML, lang: root.lang };
  const text = name.textContent ?? '';
  const parts = isAr() ? text.split(/(\s+)/) : [...text];
  name.innerHTML = parts.map((p) => (/^\s+$/.test(p) ? p : `<span class="mag">${p.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!)}</span>`)).join('');
  name.classList.add('magnet-on');
  const spans = [...name.querySelectorAll<HTMLElement>('.mag')];
  requestAnimationFrame(() => spans.forEach((s) => {
    const a = rand(0, Math.PI * 2), d = rand(40, 150);
    s.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d * 0.7}px) rotate(${rand(-60, 60)}deg) scale(${rand(0.8, 1.3)})`;
  }));
  unlock('magnet');
});
function releaseMagnet() {
  if (!magnet) return;
  const m = magnet; magnet = null;
  m.el.querySelectorAll<HTMLElement>('.mag').forEach((s, i) => { s.style.transitionDelay = `${i * 12}ms`; s.style.transform = 'none'; });
  setTimeout(() => { m.el.classList.remove('magnet-on'); if (root.lang === m.lang) m.el.innerHTML = m.html; }, 700);
}
addEventListener('pointerup', releaseMagnet);
addEventListener('pointercancel', releaseMagnet);
addEventListener('blur', releaseMagnet);

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
    noise(1.1, 900, 0.9, 0.5, 600); // gentle pouring sound
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
if (!reduce) {
  const next = (range: [number, number]) => setTimeout(() => { falconFlyby(); next([180, 300]); }, rand(range[0], range[1]) * 1000);
  next([40, 70]); // first visit after ~1 minute, then every 3–5 minutes
}
// handy for the preview: ?egg=falcon|haboob|robot|clouds|gravity
const demo = new URLSearchParams(location.search).get('egg');
if (demo) setTimeout(() => ({ falcon: falconFlyby, haboob, robot, clouds: cloudRain, gravity: gravityOn } as Record<string, () => void>)[demo]?.(), 1200);
