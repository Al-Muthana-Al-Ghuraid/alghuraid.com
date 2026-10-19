// Hero terminal: types out profile.yaml, then becomes a live prompt. The one secret command is `snake`.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const term = document.getElementById('term')!;
const terminal = document.getElementById('terminal')!;
const input = document.getElementById('termInput') as HTMLInputElement;
const termTitle = document.getElementById('termTitle')!;
// the screen has a fixed size: older lines scroll off the top, the newest stay in view
const paint = (html: string) => { term.innerHTML = html; term.scrollTop = term.scrollHeight; };
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
        radStart: '☢ geiger counter on…', radEnd: "# reading dropped. you'll live.",
        gravity: ['🍎 disabling gravity…'],
        haboob: ['🌪️ incoming haboob… hold on!'],
        help: [
          'available commands:',
          '  help          show this list',
          '  snake         play Snake 🐍',
          '  haboob        summon a sandstorm 🌪️',
          '  fallout       wasteland radio 📻',
          '  radiation     geiger counter ☢',
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
        radStart: '☢ عدّاد غايغر يعمل…', radEnd: '# انخفضت القراءة. ستنجو.',
        gravity: ['🍎 جارٍ إيقاف الجاذبية…'],
        haboob: ['🌪️ هبوب قادم… تمسّك!'],
        help: [
          'الأوامر المتاحة:',
          '  help          عرض هذه القائمة',
          '  snake         العب لعبة الأفعى 🐍',
          '  haboob        استدعِ عاصفة رملية 🌪️',
          '  fallout       راديو القفار 📻',
          '  radiation     عدّاد غايغر ☢',
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
