// Hero terminal: types out profile.yaml, then becomes a live prompt. The one secret command is `snake`.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const term = document.getElementById('term')!;
const terminal = document.getElementById('terminal')!;
const input = document.getElementById('termInput') as HTMLInputElement;
const termTitle = document.getElementById('termTitle')!;
// the screen has a fixed size: older lines scroll off the top, the newest stay in view
const paint = (html: string) => { term.innerHTML = html; term.scrollTop = term.scrollHeight; };
// keep the newest line in view when the layout changes after drawing (window resized, phone rotated, font loaded)
const pinBottom = () => { term.scrollTop = term.scrollHeight; };
new ResizeObserver(pinBottom).observe(term);
document.fonts?.ready.then(pinBottom);
const profile = JSON.parse(document.getElementById('profileData')!.textContent!);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!);
const PROMPT = '<span class="t-prompt">&gt;</span> ';
const str = (s: string) => `<span class="t-str">${esc(s)}</span>`;
const list = (a: string[]) => `[${a.map(str).join(', ')}]`;
const kv = (k: string, v: string) => `<span class="t-key">${(k + ':').padEnd(10)}</span>${v}`;

const lines: [string, number][] = [
  [`${PROMPT}whoami`, 40],
  [esc(profile.name), 0],
  ['', 0],
  [`${PROMPT}cat profile.yaml`, 40],
  [kv('role', str(profile.role)), 0],
  [kv('certs', list(profile.certs)), 0],
  [kv('cloud', list(profile.cloud)), 0],
  [kv('iac', str(profile.iac)), 0],
  [kv('ships', str(profile.ships)), 0],
  [kv('based', str(profile.based)), 0],
  [kv('relocate', '<span class="t-num">true</span>'), 0],
  ['', 0],
  [`${PROMPT}<span class="t-com"># open to new roles</span>`, 40],
];

/* ---------- strings (EN / AR) ---------- */
const SN = {
  en: { notFound: "# try 'help'", helpHint: "# new here? type 'help'", title: (s: number, b: number) => `snake.py — score ${s} · best ${b}`,
        startKeys: 'press ← ↑ ↓ → to start  ·  esc to quit', startTouch: 'swipe or use the buttons to start',
        crash: 'Segmentation fault (snake dumped)', score: (s: number) => `score: ${s}`, retry: 'enter / tap: retry  ·  esc: exit',
        exited: (s: number, b: number) => `# snake exited · score ${s} · best ${b}`, font: '"JetBrains Mono",monospace',
        welcome: 'WELCOME, VISITOR.',
        radioOn: '📻 tuning in… (again to stop)', radioOff: '# radio off',
        radStart: '☢ geiger counter on…', roachIn: '!! something is crawling… tap it!', roachSquish: '# squish. pest controlled.', roachGone: '# it got away…', clawIn: '!! something big is out there…', clawOut: '# it left. that was close.', radEnd: "# reading dropped. you'll live.",
        gravity: ['🍎 disabling gravity…'],
        haboob: ['🌪️ incoming haboob… hold on!'],
        help: [
          'available commands:',
          '  help          show this list',
          '  snake         play Snake 🐍',
          '  haboob        summon a sandstorm 🌪️',
          '  fallout       wasteland radio 📻',
          '  radiation     geiger counter ☢',
          '  radroach      pest control',
          "  claw          don't.",
          '  reboot        restart terminal 📺',
          '  clear         clear the screen',
          '# more secrets hide outside 👀',
        ] },
  ar: { notFound: "# جرّب 'help'", helpHint: "# جديد هنا؟ اكتب 'help'", title: (s: number, b: number) => `snake.py — النتيجة ${s} · الأفضل ${b}`,
        startKeys: 'اضغط ← ↑ ↓ → للبدء  ·  Esc للخروج', startTouch: 'اسحب أو استخدم الأزرار للبدء',
        crash: 'اصطدمت الأفعى! (Segmentation fault)', score: (s: number) => `النتيجة: ${s}`, retry: 'Enter أو نقرة: إعادة  ·  Esc: خروج',
        exited: (s: number, b: number) => `# انتهت اللعبة · النتيجة ${s} · الأفضل ${b}`, font: '"IBM Plex Sans Arabic",sans-serif',
        welcome: 'أهلًا وسهلًا بك.',
        radioOn: '📻 جارٍ ضبط الموجة… (أعده للإيقاف)', radioOff: '# أُطفئ الراديو',
        radStart: '☢ عدّاد غايغر يعمل…', roachIn: '!! شيء يزحف… اضغط عليه!', roachSquish: '# سُحِق. تمت المكافحة.', roachGone: '# هرب…', clawIn: '!! هناك شيء ضخم في الخارج…', clawOut: '# رحل. كانت قريبة.', radEnd: '# انخفضت القراءة. ستنجو.',
        gravity: ['🍎 جارٍ إيقاف الجاذبية…'],
        haboob: ['🌪️ هبوب قادم… تمسّك!'],
        help: [
          'الأوامر المتاحة:',
          '  help          عرض هذه القائمة',
          '  snake         العب لعبة الأفعى 🐍',
          '  haboob        استدعِ عاصفة رملية 🌪️',
          '  fallout       راديو القفار 📻',
          '  radiation     عدّاد غايغر ☢',
          '  radroach      مكافحة الحشرات',
          '  claw          لا تفعل.',
          '  reboot        أعد تشغيل الطرفية 📺',
          '  clear         مسح الشاشة',
          '# أسرار أخرى في الخارج 👀',
        ] },
};
const sn = () => SN[root.lang === 'ar' ? 'ar' : 'en'];

/* ---------- typing intro + prompt ---------- */
let history = '', buf = '', mode: 'boot' | 'intro' | 'prompt' | 'auto' | 'game' = 'boot';
const strip = (h: string) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent!; };

async function typeAll() {
  history = ''; mode = 'intro'; const run0 = bootRun;
  if (reduce) history = lines.map((l) => l[0]).join('\n') + '\n';
  else for (const [html, speed] of lines) {
    if (speed) {
      // keep the prompt markup, type only the command after it
      const pre = html.startsWith(PROMPT) ? PROMPT : '', cmd = strip(html.slice(pre.length));
      for (let i = 1; i <= cmd.length; i++) { if (bootRun !== run0) return; paint(history + pre + esc(cmd.slice(0, i)) + '<span class="cursor"></span>'); await sleep(speed); }
      await sleep(250);
    } else await sleep(70);
    if (bootRun !== run0) return;
    history += html + '\n'; paint(history + '<span class="cursor"></span>');
  }
  history += `<span class="t-help">${esc(sn().helpHint)}</span>\n`;
  mode = 'prompt'; render();
}

/* ---------- CRT power-on + boot screen (full version once per visit; `reboot` replays it) ---------- */
const TITLE = 'GHURAID-TEC TERMLINK';
const content = document.getElementById('crtContent')!;
const bootBox = document.getElementById('crtBoot')!;
const bootText = document.getElementById('crtBootText')!;
const cv = document.getElementById('crtMascot') as HTMLCanvasElement;
const mascot = new Image(); mascot.src = '/media/terminal/mascot.webp';
const BOOT_LOG = ['GHURAID-TEC (TM)', 'TERMLINK v2.6', '', '> BOOT ..... OK', '> MEMORY ... OK', '> PROFILE .. OK', '> UPLINK ... ON'];
let bootRun = 0, skip = false;
const wait = (ms: number, id: number) => new Promise<boolean>((r) => { const t0 = performance.now(); const f = () => (skip || bootRun !== id ? r(false) : performance.now() - t0 >= ms ? r(true) : requestAnimationFrame(f)); f(); });
/** Draw the mascot at a given block size: big blocks look like a low-res signal, 1 is the full picture. */
function rez(block: number) {
  const ctx = cv.getContext('2d')!, W = cv.width, H = cv.height;
  ctx.imageSmoothingEnabled = false; ctx.clearRect(0, 0, W, H);
  if (!mascot.complete || !mascot.naturalWidth) return;
  if (block <= 1) { ctx.drawImage(mascot, 0, 0, W, H); return; }
  const w = Math.max(1, Math.round(W / block)), h = Math.max(1, Math.round(H / block));
  ctx.drawImage(mascot, 0, 0, w, h); ctx.drawImage(cv, 0, 0, w, h, 0, 0, W, H);
}
async function boot(full: boolean) {
  const id = ++bootRun; skip = false; mode = 'boot'; buf = ''; input.value = '';
  terminal.classList.remove('on'); terminal.classList.add('off'); term.innerHTML = ''; termTitle.textContent = TITLE;
  await sleep(full ? 450 : 150);
  terminal.classList.replace('off', 'on');
  if (!reduce) await content.animate([ // the tube warms up: a dot, a line, then the picture opens out
    { transform: 'scale(.02,.004)', filter: 'brightness(5)' },
    { transform: 'scale(1,.004)', filter: 'brightness(4)', offset: 0.45 },
    { transform: 'scale(1,1)', filter: 'brightness(1)' },
  ], { duration: full ? 750 : 420, easing: 'cubic-bezier(.2,.8,.2,1)' }).finished;
  if (full && !reduce) {
    bootBox.hidden = false; bootText.textContent = ''; rez(64);
    if (!mascot.complete) await new Promise((r) => { mascot.onload = mascot.onerror = r; });
    for (const line of BOOT_LOG) { bootText.textContent += line + '\n'; if (!(await wait(line ? 150 : 60, id))) break; }
    for (const b of [48, 32, 22, 15, 10, 7, 5, 3, 2, 1]) { rez(b); if (!(await wait(85, id))) break; }
    rez(1);
    bootText.insertAdjacentHTML('beforeend', `<b>${sn().welcome}</b>`);
    cv.animate([{ transform: 'none' }, { transform: 'translateY(-8px) scale(1.04)' }, { transform: 'none' }, { transform: 'translateY(-4px) scale(1.02)' }, { transform: 'none' }],
      { duration: 900, easing: 'ease-in-out' });
    await wait(1700, id);
    if (bootRun !== id) return;
    for (const b of [2, 4, 8, 16, 32]) { rez(b); if (!(await wait(45, id))) break; }
    bootBox.hidden = true;
  }
  if (bootRun !== id) return;
  try { sessionStorage.setItem('crtBooted', '1'); } catch {}
  typeAll();
}
// clicking or pressing a key during the boot screen skips ahead
terminal.addEventListener('click', () => { if (mode === 'boot') skip = true; });
const booted = (() => { try { return sessionStorage.getItem('crtBooted') === '1'; } catch { return false; } })();
// start when the terminal is actually on screen (on phones it sits below the intro)
const bio = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { bio.disconnect(); boot(!booted); } }, { threshold: 0.3 });
bio.observe(terminal);

function render() { if (mode === 'prompt') paint(history + PROMPT + esc(buf) + '<span class="cursor"></span>'); }
terminal.addEventListener('click', () => { if (mode !== 'game') input.focus({ preventScroll: true }); });
input.addEventListener('focus', () => terminal.classList.add('focused'));
input.addEventListener('blur', () => terminal.classList.remove('focused'));
input.addEventListener('input', () => { if (mode !== 'prompt') { input.value = ''; return; } buf = input.value.slice(0, 40); render(); });
input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && mode === 'prompt') { e.preventDefault(); run(buf.trim()); } });

function run(cmd: string) {
  history += PROMPT + esc(cmd) + '\n'; buf = ''; input.value = '';
  const c = cmd.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, ' ').trim();
  if (c === 'snake') { egg('snake'); return startSnake(); }
  const say = (lines: string[], cls = 't-str') => { history += lines.map((l) => `<span class="${cls}">${esc(l)}</span>`).join('\n') + '\n'; };
  const s = sn();
  if (c === 'clear') history = '';
  else if (['reboot', 'restart', 'اعادة تشغيل'].includes(c)) { boot(true); return; }
  else if (['gravity', 'الجاذبية'].includes(c)) { say(s.gravity); dispatchEvent(new CustomEvent('egg:gravity')); }
  else if (['help', 'مساعدة', '?'].includes(c)) { history += s.help.map((l, i) => `<span class="${i === 0 ? 't-key' : l.startsWith('#') ? 't-com' : 't-help'}">${esc(l)}</span>`).join('\n') + '\n'; }
  else if (['haboob', 'هبوب'].includes(c)) { say(s.haboob); dispatchEvent(new CustomEvent('egg:haboob')); }
  else if (['fallout', 'radio', 'راديو'].includes(c)) radio();
  else if (['radiation', 'geiger', 'اشعاع', 'إشعاع'].includes(c)) radiation();
  else if (['radroach', 'roach', 'صرصور'].includes(c)) radroach();
  else if (['claw', 'beast', 'مخلب', 'وحش'].includes(c)) claw();
  else if (c) history += `<span class="t-err">zsh: command not found: ${esc(cmd)}</span>\n<span class="t-com">${s.notFound}</span>\n`;
  const ls = history.split('\n'); if (ls.length > 16) history = ls.slice(-16).join('\n');
  render();
}

const egg = (id: string) => dispatchEvent(new CustomEvent('egg:unlock', { detail: id }));

/* ---------- `fallout`: plays a short radio clip; typing it again stops it ----------
   To use your own sound, drop it in public/media/sounds/ as fallout.mp3 (it wins over the .wav). */
const RADIO_SRC = ['/media/sounds/fallout.mp3', '/media/sounds/fallout.wav'];
let player: HTMLAudioElement | null = null;
function loadPlayer(i = 0): HTMLAudioElement {
  const a = new Audio(RADIO_SRC[i]); a.volume = 0.6; a.preload = 'auto';
  a.addEventListener('error', () => { if (i + 1 < RADIO_SRC.length) { player = loadPlayer(i + 1); if (wantPlay) player.play().catch(() => {}); } }, { once: true });
  a.addEventListener('ended', () => { if (mode === 'prompt') { history += `<span class="t-com">${esc(sn().radioOff)}</span>\n`; render(); } });
  return a;
}
let wantPlay = false;
function radio() {
  player ??= loadPlayer();
  if (!player.paused) { player.pause(); player.currentTime = 0; wantPlay = false; history += `<span class="t-com">${esc(sn().radioOff)}</span>\n`; return; }
  wantPlay = true; player.currentTime = 0; player.play().catch(() => {});
  history += `<span class="t-str">${esc(sn().radioOn)}</span>\n`;
  egg('radio');
}

/* ---------- `radiation`: Geiger counter clicks speed up while the page glows green ----------
   The clicks are synthesized in the browser (random bursts of filtered noise), no audio file. */
let irradiating = false;
function radiation() {
  if (irradiating) return;
  irradiating = true; egg('radiation'); terminal.classList.add('rad'); // the gauge needle kicks
  const DUR = 5.2;
  history += `<span class="t-str">${esc(sn().radStart)}</span>\n<span class="t-num" data-rad>☢ 0.00 µSv/h  ▯▯▯▯▯▯▯▯▯▯</span>\n`;
  // sound: render all clicks into one buffer, the rate climbs steeply then cuts out
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ac = new AC(), sr = ac.sampleRate, buf = ac.createBuffer(1, Math.floor(sr * DUR), sr), d = buf.getChannelData(0);
    for (let t = 0.15; t < DUR - 0.3;) {
      const rate = 2 + 70 * (t / DUR) ** 2.4;                      // clicks per second
      const i0 = Math.floor(t * sr), amp = 0.35 + Math.random() * 0.65;
      for (let k = 0; k < sr * 0.0025 && i0 + k < d.length; k++) d[i0 + k] += (Math.random() * 2 - 1) * amp * Math.exp(-k / (sr * 0.0004));
      t += -Math.log(1 - Math.random()) / rate;                    // random (Poisson) spacing, like real decay
    }
    const src = ac.createBufferSource(), hp = ac.createBiquadFilter(), gain = ac.createGain();
    hp.type = 'highpass'; hp.frequency.value = 1400; gain.gain.value = 0.45;
    src.buffer = buf; src.connect(hp).connect(gain).connect(ac.destination);
    src.onended = () => ac.close(); src.start();
  } catch {}
  // visuals: a green glow over the page that swells and flickers with the readout
  const glow = document.body.appendChild(Object.assign(document.createElement('div'), { className: 'rad-glow' }));
  const t0 = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - t0) / (DUR * 1000)), level = p < 0.9 ? (p / 0.9) ** 2 : (1 - p) / 0.1;
    const flicker = reduce ? 1 : 0.85 + Math.random() * 0.3;
    glow.style.opacity = String(Math.min(1, level * flicker));
    const meter = term.querySelector('[data-rad]');
    if (meter) { const n = Math.round(Math.min(1, p / 0.9) * 10); meter.textContent = `☢ ${(level * 9.81).toFixed(2)} µSv/h  ${'▮'.repeat(n)}${'▯'.repeat(10 - n)}`; }
    if (p < 1) requestAnimationFrame(tick);
    else {
      glow.remove(); irradiating = false; terminal.classList.remove('rad');
      history = history.replace(/<span class="t-num" data-rad>[^<]*<\/span>/, `<span class="t-num">☢ peak 9.81 µSv/h  ${'▮'.repeat(10)}</span>`);
      history += `<span class="t-com">${esc(sn().radEnd)}</span>\n`;
      if (mode === 'prompt') { render(); setTimeout(() => { if (mode === 'prompt') boot(true); }, 1200); } // the terminal power-cycles after the exposure
    }
  };
  requestAnimationFrame(tick);
}

/* ---------- `radroach`: a bug scuttles across the screen; tap it to squish it ----------
   Our own top-down cockroach drawing; the squish sound is synthesized (no audio file). */
const ROACH = `<svg viewBox="0 0 60 40" aria-hidden="true"><g class="legs" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round">
  <path class="l1" d="M26 15 L20 6 L14 4"/><path class="l2" d="M30 14 L30 4 L26 0"/><path class="l3" d="M34 15 L40 5 L46 3"/>
  <path class="l2" d="M26 25 L20 34 L14 36"/><path class="l1" d="M30 26 L30 36 L26 40"/><path class="l3" d="M34 25 L40 35 L46 37"/></g>
  <path class="ant" d="M47 18 Q55 10 60 11 M47 22 Q55 30 60 29" stroke="currentColor" stroke-width="1" fill="none"/>
  <ellipse cx="28" cy="20" rx="17" ry="9" fill="currentColor"/><path d="M28 11 L28 29" stroke="rgba(0,0,0,.45)" stroke-width="1.2"/>
  <ellipse cx="45" cy="20" rx="5" ry="5.5" fill="currentColor"/><circle cx="47.5" cy="17.6" r="1.1" fill="#021006"/><circle cx="47.5" cy="22.4" r="1.1" fill="#021006"/></svg>`;
const SPLAT = `<svg viewBox="0 0 60 60" aria-hidden="true"><path fill="currentColor" d="M30 12c5 0 6 6 11 5s9 4 6 9 3 8-1 12-9 2-11 7-8 4-10-1-9-3-11-8-2-9 2-12 1-9 6-10 3-2 8-2z"/>
  <circle cx="10" cy="14" r="2.5" fill="currentColor"/><circle cx="52" cy="48" r="2" fill="currentColor"/><circle cx="49" cy="9" r="1.6" fill="currentColor"/></svg>`;
let roachOut = false;
function squishSound() {
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ac = new AC(), sr = ac.sampleRate, len = Math.floor(sr * 0.45), buf = ac.createBuffer(1, len, sr), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      const t = i / sr;
      const crunch = (Math.random() * 2 - 1) * Math.exp(-t * 38) * (Math.random() < 0.3 ? 1.4 : 0.6);           // shell cracking
      const goo = Math.sin(2 * Math.PI * (260 - 380 * t) * t) * Math.exp(-t * 9) * 0.55 * (1 + 0.5 * Math.sin(t * 90)); // wet squelch sliding down
      d[i] = crunch * 0.8 + goo;
    }
    const src = ac.createBufferSource(), lp = ac.createBiquadFilter(), g = ac.createGain();
    lp.type = 'lowpass'; lp.frequency.value = 2600; g.gain.value = 0.7;
    src.buffer = buf; src.connect(lp).connect(g).connect(ac.destination); src.onended = () => ac.close(); src.start();
  } catch {}
}
function radroach() {
  if (roachOut) return;
  roachOut = true;
  history += `<span class="t-str">${esc(sn().roachIn)}</span>\n`;
  const box = content.getBoundingClientRect();
  const bug = content.appendChild(Object.assign(document.createElement('button'), { className: 'roach', innerHTML: ROACH, type: 'button', ariaLabel: 'radroach' }));
  const W = box.width, H = box.height, size = 54, ltr = Math.random() < 0.5;
  let x = ltr ? -size : W + size, y = H * (0.35 + Math.random() * 0.4), heading = ltr ? 0 : Math.PI, speed = 0, pause = 0, done = false;
  const target = ltr ? W + size : -size;
  const end = (squished: boolean) => {
    if (done) return; done = true; roachOut = false;
    history += `<span class="t-com">${esc(squished ? sn().roachSquish : sn().roachGone)}</span>\n`;
    if (mode === 'prompt') render();
  };
  bug.addEventListener('click', (e) => {
    e.stopPropagation(); if (done) return;
    squishSound(); egg('radroach');
    bug.classList.add('squished'); bug.innerHTML = SPLAT;
    bug.style.transform = `translate(${x - size / 2}px,${y - size / 2}px) rotate(${Math.random() * 360}deg)`;
    bug.animate([{ opacity: 1 }, { opacity: 1, offset: 0.6 }, { opacity: 0 }], { duration: 2600 }).finished.then(() => bug.remove());
    end(true);
  });
  let last = performance.now();
  const step = (now: number) => {
    if (done) return;
    const dt = Math.min(50, now - last) / 16.7; last = now;
    if (pause > 0) { pause -= dt; bug.classList.add('still'); }
    else {
      bug.classList.remove('still');
      if (Math.random() < 0.012) pause = 10 + Math.random() * 30;                // freezes like a real roach
      speed += ((reduce ? 2 : 4.2) - speed) * 0.1;
      const goal = Math.atan2(y + Math.sin(now / 260) * 60 - y, target - x);      // weave toward the far side
      heading += (goal + (Math.random() - 0.5) * 0.9 - heading) * 0.12;
      x += Math.cos(heading) * speed * dt; y += Math.sin(heading) * speed * dt;
      y = Math.max(size, Math.min(H - size / 2, y));
    }
    bug.style.transform = `translate(${x - size / 2}px,${y - size / 2}px) rotate(${heading}rad)`;
    if ((ltr && x > W + size) || (!ltr && x < -size)) { bug.remove(); end(false); return; }
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- `claw`: a beast approaches and roars; the whole page shakes in sync with the clip ----------
   Before it plays, the clip is decoded and scanned: sharp loudness spikes become footstep jolts, a long
   loud stretch becomes the roar. During playback the shake is read from that timeline at the audio's
   exact position, so steps land on the beat, the bits in between barely move and the roar hits hardest.
   Uses the CSS `translate` / `rotate` properties so it stacks on each element's own transform (the
   fixed nav bar shakes too, without jumping). claw.mp3 in public/media/sounds/ wins over our claw.wav. */
const CLAW_SRC = ['/media/sounds/claw.mp3', '/media/sounds/claw.wav'];
const FR = 0.02; // analysis frame, seconds
type ClawMap = { env: Float32Array; steps: { t: number; s: number }[]; roars: [number, number][] };
async function mapClip(src: string): Promise<ClawMap | null> {
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ac = new AC(), ab = await ac.decodeAudioData(await (await fetch(src)).arrayBuffer()); ac.close().catch(() => {});
    const d = ab.getChannelData(0), hop = Math.floor(ab.sampleRate * FR), n = Math.floor(d.length / hop), env = new Float32Array(n);
    for (let i = 0; i < n; i++) { let s = 0; for (let k = i * hop; k < (i + 1) * hop; k++) s += d[k] * d[k]; env[i] = Math.sqrt(s / hop); }
    let peak = 0; for (const v of env) peak = Math.max(peak, v); for (let i = 0; i < n; i++) env[i] /= peak || 1;
    // roar: the smoothed level stays high for at least a second
    const W = Math.round(0.4 / FR), sm = new Float32Array(n);
    for (let i = 0; i < n; i++) { let s = 0, c = 0; for (let k = Math.max(0, i - W / 2); k < Math.min(n, i + W / 2); k++) { s += env[k]; c++; } sm[i] = s / c; }
    const roars: [number, number][] = [];
    for (let i = 0; i < n;) {
      if (sm[i] >= 0.42) {
        let j = i; while (j < n && sm[j] >= 0.3) j++;
        let s0 = i; while (s0 > 0 && sm[s0 - 1] >= 0.25) s0--;                // back up to where the roar actually starts
        if ((j - s0) * FR >= 1) roars.push([s0 * FR, j * FR]); i = j;
      } else i++;
    }
    const inRoar = (t: number) => roars.some(([a, b]) => t >= a - 0.2 && t <= b);
    // steps: a sharp spike that rises well above what came just before it
    const steps: { t: number; s: number }[] = [];
    for (let i = 8; i < n - 5; i++) {
      const t = i * FR; if (inRoar(t)) continue;
      let isMax = true; for (let k = i - 5; k <= i + 5; k++) if (env[k] > env[i]) isMax = false;
      let floor = 1; for (let k = i - 8; k < i; k++) floor = Math.min(floor, env[k]);
      if (!isMax || env[i] < 0.5 || env[i] - floor < 0.2) continue;                 // only real thumps, not breathing
      const prev = steps[steps.length - 1];
      if (prev && t - prev.t < 0.3) { if (env[i] > prev.s) Object.assign(prev, { t, s: env[i] }); }
      else steps.push({ t, s: env[i] });
    }
    return { env, steps, roars };
  } catch { return null; }
}
let clawing = false;
const shakeTargets = () => [...document.body.children].filter((el): el is HTMLElement => el instanceof HTMLElement && !/SCRIPT|STYLE|NOSCRIPT/.test(el.tagName));
function claw() {
  if (clawing) return;
  clawing = true; egg('claw');
  history += `<span class="t-str">${esc(sn().clawIn)}</span>\n`;
  // Every part of the page is a little mass on a spring with its own jitter while the beast is active:
  //  - blocks (page sections, nav) shake and also ride a shared "camera" that dips on each heavy step
  //  - pieces (name, buttons, terminal…) wobble on top of their block
  //  - small loose things (chips, icons, badges, the terminal's knobs) rattle and keep ringing longer
  // When the sound ends the jitter fades and the springs glide everything back into place.
  // Extras: dust falls from the top after steps and during the roar, the CRT flickers on each step and
  // glitches during the roar, and phones that support it vibrate along.
  const vh = innerHeight, vw = innerWidth;
  const onScreen = (el: Element) => { const r = el.getBoundingClientRect(); return r.bottom > -40 && r.top < vh + 40 && r.width > 0; };
  type Kind = 'block' | 'piece' | 'rattle';
  const parts: { el: HTMLElement; kind: Kind }[] = [
    ...shakeTargets().map((el) => ({ el, kind: 'block' as Kind })),
    ...[...document.querySelectorAll<HTMLElement>('.hero .eyebrow, .hero h1, .hero .role, .hero .lead, .hero .ctas, .hero .socials, #terminal, .sec-head, .card')]
      .map((el) => ({ el, kind: 'piece' as Kind })),
    ...[...document.querySelectorAll<HTMLElement>('.chip, .icon-btn, .badge-logo, .status, .tv-knobs i, .tv-buttons b, .tv-toggles i, .tv-gauge, .tv-plate, .crt-led, .egg-word')]
      .filter(onScreen).slice(0, 80).map((el) => ({ el, kind: 'rattle' as Kind })),
  ];
  const TUNE = { block: { w: 1, k: 0.16, damp: 0.84 }, piece: { w: 0.5, k: 0.16, damp: 0.84 }, rattle: { w: 0.45, k: 0.24, damp: 0.93 } };
  const bodies = parts.map(({ el, kind }) => {
    const fixed = getComputedStyle(el).position === 'fixed', r = el.getBoundingClientRect();
    return { el, kind, x: 0, y: 0, r: 0, vx: 0, vy: 0, vr: 0, jit: 0, jx: 0, jy: 0,
      depth: (fixed ? 0.55 : 1) * TUNE[kind].w,                                // the nav bar / backdrop sway less: feels like depth
      delay: fixed ? 0 : Math.max(0, Math.min(0.12, (vh - r.top) / vh * 0.06)), // the shock reaches lower parts first
      seed: Math.random() * 100, queue: [] as { at: number; ix: number; iy: number; ir: number }[] };
  });
  const cam = { y: 0, vy: 0 };                                                  // shared camera dip for whole blocks

  // dust layer
  const dustCv = document.body.appendChild(Object.assign(document.createElement('canvas'), { className: 'dust-fx' }));
  const dpr = devicePixelRatio || 1; dustCv.width = vw * dpr; dustCv.height = vh * dpr;
  const dx = dustCv.getContext('2d')!; dx.scale(dpr, dpr);
  const dustRGB = root.dataset.theme === 'light' ? '90,78,60' : '205,196,172';
  // dust clouds, not specks: soft puffs that grow, drift and thin out. Some sift down from the top
  // (shaken loose from the ceiling), some billow up and out along the floor (kicked up by the step).
  const dust: { x: number; y: number; vx: number; vy: number; r: number; grow: number; a: number; life: number; fade: number }[] = [];
  let haze = 0;                                                                 // faint overall dustiness, builds with the roar
  const puff = (x: number, y: number, vx: number, vy: number, r: number, grow: number, a: number, fade: number) => { if (dust.length < 90) dust.push({ x, y, vx, vy, r, grow, a, life: 1, fade }); };
  const spawnDust = (strength: number) => {
    const fall = Math.round(2 + 4 * strength), floor = Math.round(3 + 5 * strength);
    for (let i = 0; i < fall; i++) puff(Math.random() * vw, -30 + Math.random() * 50, (Math.random() - 0.5) * 0.3, 0.35 + Math.random() * 0.6, 30 + Math.random() * 50, 0.35 + Math.random() * 0.4, 0.1 + 0.12 * strength, 0.0045);
    for (let i = 0; i < floor; i++) { const x = Math.random() * vw; puff(x, vh + 30, (x < vw / 2 ? -1 : 1) * (0.4 + Math.random() * 1.2), -(0.3 + Math.random() * 0.7), 40 + Math.random() * 60, 0.6 + Math.random() * 0.8, 0.12 + 0.14 * strength, 0.006); }
    haze = Math.min(0.14, haze + 0.03 * strength);
  };

  // CRT flicker / glitch
  const flicker = (strength: number) => content.animate(
    [{ opacity: 1, filter: 'brightness(1)' }, { opacity: 0.35 + 0.4 * (1 - strength), filter: 'brightness(1.8)' }, { opacity: 1, filter: 'brightness(.9)' }, { opacity: 0.8, filter: 'brightness(1.2)' }, { opacity: 1, filter: 'brightness(1)' }],
    { duration: 220, easing: 'steps(5)' });
  const glitch = () => content.animate(
    [{ transform: 'none' }, { transform: `translateX(${(Math.random() - 0.5) * 10}px) skewX(${(Math.random() - 0.5) * 4}deg)`, filter: 'brightness(1.4)' }, { transform: 'none' }],
    { duration: 90 });
  const buzz = (p: number | number[]) => { try { if (!reduce && 'vibrate' in navigator) navigator.vibrate(p); } catch {} };

  let ended = false, soundDone = false, roarBuzzed = false, lastGlitch = 0;
  const done = () => { // the sound is over: print the message, but let the page keep settling
    if (soundDone) return; soundDone = true; clawing = false; buzz(0);
    history += `<span class="t-com">${esc(sn().clawOut)}</span>\n`;
    if (mode === 'prompt') render();
  };
  const noise = (t: number, s: number) => Math.sin(t * 13.1 + s) * 0.5 + Math.sin(t * 23.7 + s * 1.7) * 0.3 + Math.sin(t * 41.3 + s * 2.3) * 0.2;
  const play = (i: number) => {
    const audio = new Audio(CLAW_SRC[i]);
    let map: ClawMap | null = null;
    mapClip(CLAW_SRC[i]).then((m) => (map = m));
    audio.addEventListener('error', () => (i + 1 < CLAW_SRC.length ? play(i + 1) : (done(), (ended = true), dustCv.remove())), { once: true });
    audio.addEventListener('ended', done, { once: true });
    // a missing file also rejects play(); the 'error' handler moves on to the next source,
    // so only give up here when the browser refuses to play sound at all
    audio.volume = 0.9; audio.play().catch((e) => { if (e?.name === 'NotAllowedError') { done(); ended = true; dustCv.remove(); } });
    let lastT = 0, lastNow = performance.now();
    const frame = (now: number) => {
      if (ended) return;
      const dt = Math.min(2, (now - lastNow) / 16.7); lastNow = now;      // in 60 fps frames
      const m = map as ClawMap | null, playing = !soundDone && !audio.paused && !reduce;
      const t = audio.currentTime, e = m && playing ? m.env[Math.min(m.env.length - 1, Math.floor(t / FR))] ?? 0 : 0;
      const roarSpan = m && playing ? m.roars.find(([a, b]) => t >= a && t <= b) : undefined;
      const roar = roarSpan ? Math.min(1, (t - roarSpan[0]) / 0.25) * (0.5 + e) : 0;
      let stepEnv = 0;                                                         // how hard the latest footstep is still ringing
      if (m && playing) for (const s of m.steps) {
        if (lastT < s.t && t >= s.t) {                                         // a footstep lands
          for (const b of bodies) {
            const rattle = b.kind === 'rattle';
            b.queue.push({ at: now + b.delay * 1000, ix: (Math.random() - 0.5) * (rattle ? 10 : 6) * s.s,
              iy: (rattle ? (Math.random() - 0.3) * 12 : (6 + 8 * s.s) * (0.7 + 0.6 * Math.random())) * s.s, ir: rattle ? (Math.random() - 0.5) * 6 * s.s : 0 });
          }
          cam.vy += (5 + 9 * s.s) * s.s;                                       // the whole view dips with the impact
          spawnDust(s.s);
          flicker(s.s);
          buzz(Math.round(40 + 90 * s.s));
        }
        if (t >= s.t && t < s.t + 0.6) stepEnv = Math.max(stepEnv, s.s * Math.exp(-(t - s.t) / 0.12));
      }
      if (roar > 0) {
        if (!roarBuzzed) { roarBuzzed = true; buzz([350, 60, 450, 60, 700]); }
        if (Math.random() < roar * 0.06 * dt) spawnDust(0.5);                 // the roar keeps shaking dust loose
        haze = Math.min(0.2, haze + 0.0015 * roar * dt);
        if (now - lastGlitch > 120 + Math.random() * 260) { lastGlitch = now; glitch(); }
      }
      lastT = t;
      const activity = playing ? Math.max(stepEnv * 16, roar * 15, e * 1.5) : 0; // target jitter size in px
      // camera: springs back after each dip, rumbles a little during the roar
      cam.vy += (-cam.y * 0.14 + noise(now / 1000, 3) * roar * 1.2) * dt; cam.vy *= Math.pow(soundDone ? 0.8 : 0.82, dt); cam.y += cam.vy * dt;
      let moving = Math.abs(cam.y) + Math.abs(cam.vy) > 0.05;
      for (const b of bodies) {
        const tune = TUNE[b.kind];
        b.queue = b.queue.filter((q) => (now >= q.at ? ((b.vx += q.ix * b.depth), (b.vy += q.iy * b.depth), (b.vr += q.ir), false) : true));
        // independent jitter: jumps in fast, fades out slowly (that slow fade is what makes the ending smooth)
        b.jit += (activity * (b.kind === 'rattle' ? 1.5 : 1) - b.jit) * (activity > b.jit ? 0.6 : 0.045 * dt);
        // roar also shoves each part around with smooth noise; the springs pull everything back to rest
        const push = roar * 2.2 * b.depth;
        b.vx += noise(now / 1000, b.seed) * push * dt; b.vy += noise(now / 1000, b.seed + 9) * push * 0.8 * dt;
        b.vr += noise(now / 1000, b.seed + 4) * roar * (b.kind === 'rattle' ? 0.6 : 0.09) * b.depth * dt;
        // after the sound ends a softer, slower spring lets everything glide home instead of snapping back
        const k = soundDone ? 0.06 : tune.k;
        b.vx += -b.x * k * dt; b.vy += -b.y * k * dt; b.vr += -b.r * k * 0.75 * dt;
        const damp = Math.pow(soundDone ? 0.8 : tune.damp, dt); b.vx *= damp; b.vy *= damp; b.vr *= Math.pow(soundDone ? 0.8 : tune.damp, dt);
        b.x += b.vx * dt; b.y += b.vy * dt; b.r += b.vr * dt;
        // while the beast is loud the jitter is crisp (a new spot every frame); as it calms down each part
        // glides toward its next spot instead of jumping, so the wind-down is smooth
        const crisp = activity > 2 ? 1 : 0.18;
        b.jx += ((Math.random() - 0.5) * b.jit * b.depth - b.jx) * crisp;
        b.jy += ((Math.random() - 0.5) * b.jit * b.depth * 1.2 - b.jy) * crisp;
        const camY = b.kind === 'block' ? cam.y * b.depth : 0;
        const settled = Math.abs(b.x) + Math.abs(b.y) + Math.abs(b.vx) + Math.abs(b.vy) < 0.08 && Math.abs(b.r) + Math.abs(b.vr) < 0.004
          && b.jit < 0.08 && Math.abs(b.jx) + Math.abs(b.jy) < 0.08 && !b.queue.length && Math.abs(camY) < 0.05;
        if (settled) { b.x = b.y = b.r = b.vx = b.vy = b.vr = b.jit = b.jx = b.jy = 0; b.el.style.translate = ''; b.el.style.rotate = ''; }
        else { moving = true; b.el.style.translate = `${(b.x + b.jx).toFixed(2)}px ${(b.y + b.jy + camY).toFixed(2)}px`; b.el.style.rotate = Math.abs(b.r) > 0.003 ? `${b.r.toFixed(3)}deg` : ''; }
      }
      // dust clouds: each puff swells, drifts, slows down and thins out; a faint haze hangs over everything
      dx.clearRect(0, 0, vw, vh);
      haze *= Math.pow(soundDone ? 0.97 : 0.995, dt);
      if (haze > 0.004) { dx.fillStyle = `rgba(${dustRGB},${haze.toFixed(3)})`; dx.fillRect(0, 0, vw, vh); }
      for (let k = dust.length - 1; k >= 0; k--) {
        const p = dust[k];
        p.vx *= Math.pow(0.985, dt); p.vy *= Math.pow(0.99, dt); p.vx += Math.sin(now / 900 + p.r) * 0.01 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.grow * dt; p.grow *= Math.pow(0.992, dt); p.life -= p.fade * dt;
        if (p.life <= 0) { dust.splice(k, 1); continue; }
        const alpha = p.a * Math.min(1, (1 - p.life) * 6) * p.life;            // fades in quickly, thins out slowly
        const g = dx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, `rgba(${dustRGB},${alpha.toFixed(3)})`); g.addColorStop(0.55, `rgba(${dustRGB},${(alpha * 0.5).toFixed(3)})`); g.addColorStop(1, `rgba(${dustRGB},0)`);
        dx.fillStyle = g; dx.beginPath(); dx.arc(p.x, p.y, p.r, 0, Math.PI * 2); dx.fill();
      }
      if (dust.length || haze > 0.004) moving = true;
      if (soundDone && !moving) { ended = true; cam.y = 0; dustCv.remove(); return; } // fully settled
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };
  play(0);
}

document.getElementById('termHint')!.addEventListener('click', async () => {
  if (mode !== 'prompt') return;
  mode = 'auto';
  for (const ch of 'help') { buf += ch; paint(history + PROMPT + esc(buf) + '<span class="cursor"></span>'); await sleep(110); }
  await sleep(300); mode = 'prompt'; run(buf);
});

/* ---------- snake ---------- */
type P = { x: number; y: number };
const FOOD = ['🐳', '☁️', '🐍', '⚡', '🔐', '⚙️', '🚀'];
let G: null | { ctx: CanvasRenderingContext2D; cols: number; rows: number; cell: number; snake: P[]; dir: P; next: P;
  food: P & { e: string }; score: number; best: number; speed: number; over: boolean; started: boolean; timer?: number } = null;
const best = () => { try { return +(localStorage.getItem('snakeBest') ?? 0) || 0; } catch { return 0; } };
const saveBest = (s: number) => { try { localStorage.setItem('snakeBest', String(s)); } catch {} };

function startSnake() {
  mode = 'game'; input.blur();
  terminal.classList.add('playing'); if (matchMedia('(pointer:coarse)').matches) terminal.classList.add('touch');
  // the screen never grows: on touch screens the arrow pad sits inside it, so the board leaves room for it
  const pad = terminal.classList.contains('touch') ? 62 : 0;
  const w = term.clientWidth - 44, h = Math.min(Math.max(term.clientHeight - 40 - pad, 150), 320), cell = 18;
  const cols = Math.floor(w / cell), rows = Math.floor(h / cell), dpr = devicePixelRatio || 1;
  const cv = document.createElement('canvas'); cv.width = cols * cell * dpr; cv.height = rows * cell * dpr;
  cv.style.width = `${cols * cell}px`; cv.style.height = `${rows * cell}px`; cv.style.margin = '0 auto';
  term.innerHTML = ''; term.appendChild(cv);
  const ctx = cv.getContext('2d')!; ctx.scale(dpr, dpr);
  const mid = Math.floor(rows / 2);
  G = { ctx, cols, rows, cell, snake: [{ x: 5, y: mid }, { x: 4, y: mid }, { x: 3, y: mid }], dir: { x: 1, y: 0 }, next: { x: 1, y: 0 },
        food: { x: 0, y: 0, e: '' }, score: 0, best: best(), speed: 130, over: false, started: false };
  placeFood(); updateTitle(); draw(); // waits for the first direction key
}
function placeFood() {
  const g = G!;
  do g.food = { x: Math.floor(Math.random() * g.cols), y: Math.floor(Math.random() * g.rows), e: FOOD[Math.floor(Math.random() * FOOD.length)] };
  while (g.snake.some((s) => s.x === g.food.x && s.y === g.food.y));
}
const updateTitle = () => { if (G) termTitle.textContent = sn().title(G.score, G.best); };
function tick() {
  const g = G; if (!g || g.over) return;
  g.dir = g.next;
  const head = { x: g.snake[0].x + g.dir.x, y: g.snake[0].y + g.dir.y };
  if (head.x < 0 || head.y < 0 || head.x >= g.cols || head.y >= g.rows || g.snake.some((s) => s.x === head.x && s.y === head.y)) { g.over = true; draw(); return; }
  g.snake.unshift(head);
  if (head.x === g.food.x && head.y === g.food.y) {
    g.score++; g.speed = Math.max(60, g.speed - 4);
    if (g.score > g.best) { g.best = g.score; saveBest(g.best); }
    placeFood(); updateTitle();
  } else g.snake.pop();
  draw(); g.timer = window.setTimeout(tick, g.speed);
}
function draw() {
  const g = G; if (!g) return;
  const { ctx, cols, rows, cell } = g, W = cols * cell, H = rows * cell, t = sn();
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = 'rgba(65,255,125,.16)';
  for (let x = 0; x < cols; x++) for (let y = 0; y < rows; y++) ctx.fillRect(x * cell + cell / 2 - 1, y * cell + cell / 2 - 1, 2, 2);
  ctx.strokeStyle = 'rgba(65,255,125,.35)'; ctx.strokeRect(0.5, 0.5, W - 1, H - 1);
  const n = g.snake.length;
  g.snake.forEach((s, i) => { // bright → dim phosphor along the body
    const k = n > 1 ? i / (n - 1) : 0;
    ctx.fillStyle = `rgb(${65 - 30 * k},${255 - 110 * k},${125 - 55 * k})`;
    ctx.shadowColor = i === 0 ? 'rgba(65,255,125,.9)' : 'transparent'; ctx.shadowBlur = i === 0 ? 12 : 0;
    ctx.beginPath(); ctx.roundRect(s.x * cell + 1.5, s.y * cell + 1.5, cell - 3, cell - 3, i === 0 ? 6 : 4); ctx.fill();
  });
  ctx.shadowBlur = 0;
  ctx.font = `${cell - 3}px sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(g.food.e, g.food.x * cell + cell / 2, g.food.y * cell + cell / 2 + 1);
  ctx.direction = root.lang === 'ar' ? 'rtl' : 'ltr';
  if (!g.started) { ctx.fillStyle = '#22a24f'; ctx.font = `13px ${t.font}`; ctx.fillText(matchMedia('(pointer:coarse)').matches ? t.startTouch : t.startKeys, W / 2, H - 22); }
  if (g.over) {
    ctx.fillStyle = 'rgba(2,12,5,.8)'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#41ff7d'; ctx.font = `500 15px ${t.font}`; ctx.fillText(t.crash, W / 2, H / 2 - 26);
    ctx.fillStyle = '#b8ffcc'; ctx.font = `500 22px ${t.font}`; ctx.fillText(t.score(g.score), W / 2, H / 2 + 4);
    ctx.fillStyle = '#22a24f'; ctx.font = `12.5px ${t.font}`; ctx.fillText(t.retry, W / 2, H / 2 + 34);
  }
  ctx.direction = 'ltr';
}
function exitSnake() {
  if (!G) return; clearTimeout(G.timer);
  history += `<span class="t-com">${sn().exited(G.score, G.best)}</span>\n`;
  G = null; mode = 'prompt'; terminal.classList.remove('playing', 'touch');
  termTitle.textContent = TITLE; render();
}
function steer(d: string) {
  const g = G; if (!g) return;
  const m = ({ up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } } as Record<string, P>)[d];
  if (m && !(m.x === -g.dir.x && m.y === -g.dir.y)) g.next = m;
  if (m && !g.started && !g.over) { g.started = true; g.timer = window.setTimeout(tick, g.speed); }
}
const KEYS: Record<string, string> = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right' };
addEventListener('keydown', (e) => {
  if (mode !== 'game' || !G) return;
  if (e.key === 'Escape') { e.preventDefault(); exitSnake(); return; }
  if (G.over && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); clearTimeout(G.timer); startSnake(); return; }
  if (KEYS[e.key]) { e.preventDefault(); steer(KEYS[e.key]); }
});
document.getElementById('dpad')!.addEventListener('click', (e) => {
  const d = (e.target as HTMLElement).dataset.d; if (!d) return; e.stopPropagation();
  if (d === 'esc') return exitSnake();
  if (G?.over) return startSnake();
  steer(d);
});
let touch0: Touch | null = null; // swipe to steer; a tap retries via the click handler
term.addEventListener('touchstart', (e) => { if (mode === 'game') touch0 = e.touches[0]; }, { passive: true });
term.addEventListener('touchend', (e) => {
  if (mode !== 'game' || !touch0) return;
  const t = e.changedTouches[0], dx = t.clientX - touch0.clientX, dy = t.clientY - touch0.clientY; touch0 = null;
  if (Math.abs(dx) < 20 && Math.abs(dy) < 20) return;
  steer(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
});
term.addEventListener('click', () => { if (mode === 'game' && G?.over) startSnake(); });
addEventListener('langchange', () => { updateTitle(); draw(); });
