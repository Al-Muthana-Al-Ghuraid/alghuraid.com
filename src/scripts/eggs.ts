// Easter eggs: sound, secret counter, falcon flyby, peeking characters, hidden words,
// gravity mode and Saudi occasions. Loaded lazily (see site.ts); everything is bilingual.
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

/* ======================================================= sound */
let ctx: AudioContext | null = null;
const soundOn = () => root.dataset.sound !== 'off';
function ac() {
  ctx ??= new AudioContext();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}
/** Plucked-string tone, a light synth of an oud note. */
function pluck(freq: number, at = 0, gain = 0.22, len = 1.1) {
  if (!soundOn()) return;
  const a = ac(), t = a.currentTime + at;
  const o = a.createOscillator(), o2 = a.createOscillator(), f = a.createBiquadFilter(), g = a.createGain();
  o.type = 'sawtooth'; o2.type = 'triangle';
  o.frequency.setValueAtTime(freq * 1.012, t); o.frequency.exponentialRampToValueAtTime(freq, t + 0.06); // tiny pitch settle
  o2.frequency.setValueAtTime(freq * 2, t);
  f.type = 'lowpass'; f.frequency.setValueAtTime(3200, t); f.frequency.exponentialRampToValueAtTime(420, t + len * 0.7); f.Q.value = 6;
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  o.connect(f); o2.connect(f); f.connect(g); g.connect(a.destination);
  o.start(t); o2.start(t); o.stop(t + len); o2.stop(t + len);
}
// Maqam Hijaz on D: D, Eb, F#, G, A
const HIJAZ = [293.66, 311.13, 369.99, 392.0, 440.0, 587.33];
const sfx = {
  secret: () => { pluck(HIJAZ[4], 0); pluck(HIJAZ[5], 0.12, 0.2, 1.5); },
  phrase: () => [0, 1, 2, 3, 4, 3, 2].forEach((n, i) => pluck(HIJAZ[n], i * 0.16, 0.2, 0.9)),
  blip: (f = 880, len = 0.07, type: OscillatorType = 'square', vol = 0.06) => {
    if (!soundOn()) return;
    const a = ac(), t = a.currentTime, o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 1.5, t + len);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + len);
  },
  wind: (dur = 2.6) => {
    if (!soundOn()) return;
    const a = ac(), t = a.currentTime, n = a.sampleRate * dur, buf = a.createBuffer(1, n, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.frequency.setValueAtTime(400, t); f.frequency.linearRampToValueAtTime(900, t + dur / 2); f.frequency.linearRampToValueAtTime(300, t + dur); f.Q.value = 0.8;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.18, t + 0.5); g.gain.linearRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(a.destination); src.start(t);
  },
};
/** Play a short audio file (first few seconds, faded out); fall back to the oud phrase if it isn't there. */
const fileCache = new Map<string, AudioBuffer | null>();
async function playClip(url: string, seconds = 3) {
  if (!soundOn()) return;
  const a = ac();
  if (!fileCache.has(url)) {
    try { const r = await fetch(url); if (!r.ok) throw 0; fileCache.set(url, await a.decodeAudioData(await r.arrayBuffer())); }
    catch { fileCache.set(url, null); }
  }
  const buf = fileCache.get(url);
  if (!buf) { sfx.phrase(); return; }
  const src = a.createBufferSource(), g = a.createGain(), t = a.currentTime, len = Math.min(seconds, buf.duration);
  src.buffer = buf; g.gain.setValueAtTime(0.9, t); g.gain.setValueAtTime(0.9, t + len - 0.8); g.gain.linearRampToValueAtTime(0.0001, t + len);
  src.connect(g); g.connect(a.destination); src.start(t, 0, len);
}
const soundBtn = document.getElementById('soundBtn');
const syncSoundBtn = () => soundBtn?.setAttribute('aria-pressed', String(soundOn()));
syncSoundBtn();
soundBtn?.addEventListener('click', () => {
  if (soundOn()) { root.dataset.sound = 'off'; store.set('sound', 'off'); }
  else { delete root.dataset.sound; store.set('sound', 'on'); sfx.blip(660, 0.08, 'triangle', 0.08); }
  syncSoundBtn();
});

/* ======================================================= secrets + toast */
const SECRETS: Record<string, [string, string, string]> = {
  falcon: ['🦅', 'Falconer', 'الصقّار'],
  camel: ['🐪', 'Ship of the Desert', 'سفينة الصحراء'],
  ghost: ['👾', 'Ghostbuster', 'صائد الأشباح'],
  haboob: ['🌪️', 'Haboob Survivor', 'نجوت من الهبوب'],
  robot: ['🤖', 'Automation Unleashed', 'الأتمتة طليقة'],
  clouds: ['☁️', 'Head in the Clouds', 'رأسي في السحاب'],
  gravity: ['🍎', 'Newton Was Right', 'نيوتن كان محقًا'],
  snake: ['🐍', 'Snake Charmer', 'ساحر الأفاعي'],
  gahwa: ['☕', 'Coffee Break', 'استراحة قهوة'],
  weather: ['🌡️', 'Riyadh Summer', 'صيف الرياض'],
  kenobi: ['👋', 'General Kenobi', 'الجنرال كينوبي'],
  terminator: ['🤖', "I'll Be Back", 'سأعود'],
  national: ['💚', 'Green Day', 'اليوم الأخضر'],
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
export function unlock(id: string) {
  const s = SECRETS[id]; if (!s) return;
  if (found.has(id)) return;
  found.add(id); store.set('secrets', [...found].join(','));
  sfx.secret();
  toast(`<span class="egg-ico">${s[0]}</span><span><small>${tr('Secret found', 'اكتشفت سرًّا')} · ${tr(`${found.size} / ${TOTAL}`, `${found.size} من ${TOTAL}`)}</small><b>${tr(s[1], s[2])}</b></span>`);
  if (found.size === TOTAL) setTimeout(() => {
    toast(`<span class="egg-ico">🏆</span><span><small>${tr('All secrets found', 'وجدت كل الأسرار')}</small><b>${tr('You explored everything. Respect! Now hire me 😄', 'استكشفت كل شيء، احترامي! والآن وظّفني 😄')}</b></span>`, 6000);
    fireworks(2600);
  }, 1200);
}
addEventListener('egg:unlock', (e) => unlock((e as CustomEvent).detail));
addEventListener('egg:sfx', (e) => {
  const k = (e as CustomEvent).detail;
  if (k === 'eat') sfx.blip(660 + Math.random() * 200); else if (k === 'over') sfx.blip(180, 0.35, 'sawtooth', 0.07);
});

/* ======================================================= falcon flyby */
const FALCON = `<svg viewBox="0 0 120 60" aria-hidden="true"><g class="wing wl"><path d="M58 30 C44 14 24 6 2 8 C20 14 34 22 46 34Z"/></g><g class="wing wr"><path d="M62 30 C76 14 96 6 118 8 C100 14 86 22 74 34Z"/></g><path d="M48 32 C52 26 68 26 72 32 C70 40 64 46 60 52 C56 46 50 40 48 32Z"/><path d="M56 26 C57 20 63 20 64 26 C62 28 58 28 56 26Z"/><path d="M60 22 l3 2 -3 1Z" class="beak"/></svg>`;
function falconFlyby() {
  if (document.hidden || document.querySelector('.falcon')) return;
  const f = el('button', 'falcon', FALCON);
  f.setAttribute('aria-label', tr('A falcon! Click it', 'صقر! انقر عليه'));
  const ltr = Math.random() > 0.5;
  f.style.top = `${rand(9, 30)}vh`;
  f.style.setProperty('--dir', ltr ? '1' : '-1'); // flips the drawing to face the flight direction
  if (!ltr) f.classList.add('to-left');
  f.style.animationDuration = `${rand(7, 10)}s`;
  document.body.appendChild(f);
  f.addEventListener('animationend', () => f.remove());
  f.addEventListener('click', () => { f.classList.add('caught'); saudiPride(); unlock('falcon'); setTimeout(() => f.remove(), 900); });
}
function saudiPride() {
  playClip('/media/sfx/anthem-intro.mp3', 3);
  const o = document.body.appendChild(el('div', 'pride', `<div class="pride-msg"><span class="pride-flag">💚</span><b>${tr('Proud to be Saudi', 'فخور بسعوديتي')}</b></div>`));
  setTimeout(() => o.classList.add('out'), 3200);
  setTimeout(() => o.remove(), 4000);
}

/* ======================================================= peeking characters */
const PEEKERS: [string, string][] = [['camel', '🐪'], ['ghost', '👾']];
function peek() {
  if (document.hidden || document.querySelector('.peeker') || document.querySelector('.gravity-on')) return;
  const [id, emoji] = PEEKERS[Math.floor(Math.random() * PEEKERS.length)];
  const side = Math.random() > 0.5 ? 'left' : 'right';
  const p = el('button', `peeker ${side}`, `<span>${emoji}</span>`);
  p.setAttribute('aria-label', tr('Something is peeking… click it', 'شيء ما يختلس النظر… انقر عليه'));
  p.style.top = `${rand(35, 78)}vh`;
  document.body.appendChild(p);
  requestAnimationFrame(() => p.classList.add('in'));
  const hide = setTimeout(() => { p.classList.remove('in'); setTimeout(() => p.remove(), 600); }, 4200);
  p.addEventListener('click', () => {
    clearTimeout(hide); p.classList.add('caught'); sfx.blip(990, 0.12, 'triangle', 0.08); unlock(id);
    setTimeout(() => p.remove(), 700);
  });
}

/* ======================================================= hidden words */
const WORDS: { egg: string; scope: string; en: RegExp; ar: RegExp; hover?: number }[] = [
  { egg: 'haboob', scope: '.eyebrow, .fact, .meta-list', en: /Riyadh/, ar: /الرياض/ },
  { egg: 'robot', scope: '.about-text', en: /automation/, ar: /الأتمتة/ },
  { egg: 'clouds', scope: '.hero .role', en: /Cloud/, ar: /سحابي/, hover: 3 },
];
function wrapWords() {
  for (const w of WORDS) {
    document.querySelectorAll<HTMLElement>(w.scope).forEach((scope) => {
      if (scope.querySelector(`.egg-word[data-egg="${w.egg}"]`)) return;
      const re = isAr() ? w.ar : w.en;
      const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const t = walker.currentNode as Text, m = t.nodeValue!.match(re);
        if (!m || m.index === undefined) continue;
        const word = t.splitText(m.index); word.splitText(m[0].length);
        const span = el('span', 'egg-word'); span.dataset.egg = w.egg; if (w.hover) span.dataset.hover = String(w.hover);
        word.replaceWith(span); span.appendChild(word);
        break;
      }
    });
  }
}
const hoverCounts = new Map<string, number>();
function bump(w: HTMLElement) { // "hover N times" words; on touch screens each tap counts
  const n = (hoverCounts.get(w.dataset.egg!) ?? 0) + 1; hoverCounts.set(w.dataset.egg!, n);
  if (n >= Number(w.dataset.hover)) { hoverCounts.set(w.dataset.egg!, 0); cloudRain(); }
}
document.addEventListener('click', (e) => {
  const w = (e.target as HTMLElement).closest<HTMLElement>('.egg-word');
  if (!w) return;
  if (w.dataset.hover) { if (matchMedia('(hover: none)').matches) bump(w); return; }
  if (w.dataset.egg === 'haboob') haboob(); else if (w.dataset.egg === 'robot') robot();
});
document.addEventListener('mouseover', (e) => {
  const w = (e.target as HTMLElement).closest<HTMLElement>('.egg-word[data-hover]');
  const from = (e.relatedTarget as Element | null)?.closest?.('.egg-word');
  if (w && from !== w) bump(w);
});

function haboob() {
  if (document.querySelector('.haboob')) return;
  unlock('haboob'); sfx.wind(2.8);
  const box = document.body.appendChild(el('div', 'haboob'));
  const c = box.appendChild(document.createElement('canvas')), x = c.getContext('2d')!;
  const W = (c.width = innerWidth), H = (c.height = innerHeight);
  const dir = isAr() ? 1 : -1;
  const grains = Array.from({ length: reduce ? 60 : 420 }, () => ({ x: dir < 0 ? W + rand(0, W) : -rand(0, W), y: rand(0, H), v: rand(8, 22), s: rand(1, 3.2), a: rand(0.3, 0.9) }));
  const t0 = performance.now();
  (function frame(t: number) {
    const p = (t - t0) / 2800;
    x.clearRect(0, 0, W, H);
    for (const g of grains) { g.x += g.v * dir; g.y += Math.sin((g.x + t) / 90) * 0.8; x.fillStyle = `rgba(214,170,110,${g.a})`; x.fillRect(g.x, g.y, g.s * 2.2, g.s); }
    if (p < 1) requestAnimationFrame(frame); else { box.classList.add('out'); setTimeout(() => box.remove(), 500); }
  })(t0);
  toast(`<span class="egg-ico">🌪️</span><span><b>${tr('Haboob! Classic Riyadh afternoon.', 'هبوب! عصرية رياضية معتادة.')}</b></span>`, 2600);
}
function robot() {
  if (document.querySelector('.walker')) return;
  unlock('robot');
  const r = document.body.appendChild(el('div', 'walker', '<span>🤖</span>'));
  r.style.setProperty('--dir', isAr() ? '-1' : '1');
  let beeps = 0; const iv = setInterval(() => { sfx.blip(520 + (beeps++ % 2) * 260, 0.05, 'square', 0.04); }, 450);
  r.addEventListener('animationend', () => { clearInterval(iv); r.remove(); });
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
  sfx.blip(784, 0.2, 'sine', 0.05);
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
    ph.style.display = getComputedStyle(c).display === 'inline-flex' || c.classList.contains('chip') ? 'inline-block' : 'block';
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
  sfx.blip(300, 0.4, 'sine', 0.08);
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
// typing "gravity" anywhere on the page (outside inputs) also works
let typed = '';
addEventListener('keydown', (e) => {
  const tgt = e.target;
  if ((tgt instanceof Element && tgt.closest('input, textarea, [contenteditable]')) || e.key.length !== 1) return;
  typed = (typed + e.key.toLowerCase()).slice(-7);
  if (typed === 'gravity') gravityOn();
});

/* ======================================================= Saudi occasions + fireworks */
function fireworks(ms = 3000) {
  if (reduce) return;
  const c = document.body.appendChild(el('canvas', 'fireworks')) as HTMLCanvasElement, x = c.getContext('2d')!;
  const W = (c.width = innerWidth), H = (c.height = innerHeight);
  const colors = root.dataset.occasion ? ['#22c55e', '#ffffff', '#16a34a', '#86efac'] : ['#4f8cff', '#8b5cf6', '#22d3ee', '#fbbf24', '#f472b6'];
  type P = { x: number; y: number; vx: number; vy: number; life: number; c: string };
  let ps: P[] = [];
  const burst = () => { const cx = rand(W * 0.15, W * 0.85), cy = rand(H * 0.12, H * 0.45), col = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 70; i++) { const a = rand(0, Math.PI * 2), s = rand(1.5, 5.5); ps.push({ x: cx, y: cy, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, c: col }); } sfx.blip(rand(120, 200), 0.25, 'sine', 0.05); };
  const t0 = performance.now(); let last = 0;
  (function frame(t: number) {
    if (t - last > 420 && t - t0 < ms) { burst(); last = t; }
    x.clearRect(0, 0, W, H);
    ps = ps.filter((p) => p.life > 0);
    for (const p of ps) { p.vy += 0.05; p.x += p.vx; p.y += p.vy; p.life -= 0.012; x.globalAlpha = Math.max(0, p.life); x.fillStyle = p.c; x.fillRect(p.x, p.y, 2.6, 2.6); }
    if (t - t0 < ms + 1800) requestAnimationFrame(frame); else c.remove();
  })(t0);
}
function riyadhParts() {
  const now = new Date();
  const g = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Riyadh', month: 'numeric', day: 'numeric' }).formatToParts(now);
  const h = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', { timeZone: 'Asia/Riyadh', month: 'numeric', day: 'numeric' }).formatToParts(now);
  const num = (p: Intl.DateTimeFormatPart[], t: string) => Number(p.find((x) => x.type === t)?.value);
  return { m: num(g, 'month'), d: num(g, 'day'), hm: num(h, 'month'), hd: num(h, 'day') };
}
const OCCASIONS: Record<string, { en: string; ar: string; fireworks: boolean; lanterns?: boolean }> = {
  national: { en: '💚 Happy Saudi National Day!', ar: '💚 كل عام والوطن بخير، اليوم الوطني السعودي', fireworks: true },
  founding: { en: '💚 Happy Saudi Founding Day!', ar: '💚 يوم التأسيس، يوم بدينا', fireworks: true },
  ramadan: { en: '🌙 Ramadan Kareem', ar: '🌙 رمضان كريم', fireworks: false, lanterns: true },
  eid: { en: '🎉 Eid Mubarak!', ar: '🎉 عيدكم مبارك!', fireworks: true },
};
function detectOccasion() {
  const forced = new URLSearchParams(location.search).get('occasion');
  if (forced && forced in OCCASIONS) return forced;
  const { m, d, hm, hd } = riyadhParts();
  if (m === 9 && d === 23) return 'national';
  if (m === 2 && d === 22) return 'founding';
  if (hm === 9) return 'ramadan';
  if ((hm === 10 && hd <= 3) || (hm === 12 && hd >= 10 && hd <= 13)) return 'eid';
  return null;
}
let banner: HTMLElement | null = null;
function startOccasion(id: string, celebrate = true) {
  const o = OCCASIONS[id];
  root.dataset.occasion = id === 'ramadan' ? 'ramadan' : 'green';
  banner?.remove();
  banner = document.body.appendChild(el('div', 'occasion-banner'));
  const paint = () => { if (banner) banner.textContent = tr(o.en, o.ar); };
  paint(); addEventListener('langchange', paint);
  if (o.lanterns) lanterns();
  if (o.fireworks && celebrate) setTimeout(() => fireworks(3200), 600);
}
function lanterns() {
  if (document.querySelector('.lanterns')) return;
  const box = document.body.appendChild(el('div', 'lanterns'));
  [8, 22, 78, 92].forEach((left, i) => {
    const l = box.appendChild(el('div', 'lantern', '<i></i><span>🏮</span>'));
    l.style.left = `${left}%`; l.style.setProperty('--len', `${[40, 70, 55, 35][i]}px`); l.style.animationDelay = `${i * -0.7}s`;
  });
}
const occ = detectOccasion();
if (occ) startOccasion(occ);
addEventListener('egg:national', () => { unlock('national'); startOccasion('national'); });

/* ======================================================= schedule + lang */
wrapWords();
addEventListener('langchange', () => wrapWords());
if (!reduce) {
  const loop = (fn: () => void, first: [number, number], every: [number, number]) => {
    const next = (range: [number, number]) => setTimeout(() => { fn(); next(every); }, rand(range[0], range[1]) * 1000);
    next(first);
  };
  loop(falconFlyby, [14, 24], [55, 95]);
  loop(peek, [30, 45], [45, 80]);
}
// handy for the preview: ?egg=falcon|peek|haboob|robot|clouds|gravity
const demo = new URLSearchParams(location.search).get('egg');
if (demo) setTimeout(() => ({ falcon: falconFlyby, peek, haboob, robot, clouds: cloudRain, gravity: gravityOn } as Record<string, () => void>)[demo]?.(), 1200);
