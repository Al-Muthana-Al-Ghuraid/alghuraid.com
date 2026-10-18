// Hero terminal: types out profile.yaml, then becomes a live prompt. The one secret command is `snake`.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const term = document.getElementById('term')!;
const terminal = document.getElementById('terminal')!;
const input = document.getElementById('termInput') as HTMLInputElement;
const termTitle = document.getElementById('termTitle')!;
const profile = JSON.parse(document.getElementById('profileData')!.textContent!);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!);
const PROMPT = '<span class="t-prompt">➜</span> <span class="t-key">~</span> ';
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
  en: { notFound: "# hint: there is exactly one command you shouldn't type…", title: (s: number, b: number) => `snake.py — score ${s} · best ${b}`,
        startKeys: 'press ← ↑ ↓ → to start  ·  esc to quit', startTouch: 'swipe or use the buttons to start',
        crash: 'Segmentation fault (snake dumped)', score: (s: number) => `score: ${s}`, retry: 'enter / tap: retry  ·  esc: exit',
        exited: (s: number, b: number) => `# snake exited · score ${s} · best ${b}`, font: '"JetBrains Mono",monospace' },
  ar: { notFound: '# تلميح: هناك أمر واحد فقط يجب ألّا تكتبه…', title: (s: number, b: number) => `snake.py — النتيجة ${s} · الأفضل ${b}`,
        startKeys: 'اضغط ← ↑ ↓ → للبدء  ·  Esc للخروج', startTouch: 'اسحب أو استخدم الأزرار للبدء',
        crash: 'اصطدمت الأفعى! (Segmentation fault)', score: (s: number) => `النتيجة: ${s}`, retry: 'Enter أو نقرة: إعادة  ·  Esc: خروج',
        exited: (s: number, b: number) => `# انتهت اللعبة · النتيجة ${s} · الأفضل ${b}`, font: '"IBM Plex Sans Arabic",sans-serif' },
};
const sn = () => SN[root.lang === 'ar' ? 'ar' : 'en'];

/* ---------- typing intro + prompt ---------- */
let history = '', buf = '', mode: 'intro' | 'prompt' | 'auto' | 'game' = 'intro';
const strip = (h: string) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent!; };

async function typeAll() {
  if (reduce) history = lines.map((l) => l[0]).join('\n') + '\n';
  else for (const [html, speed] of lines) {
    if (speed) {
      // keep the prompt markup, type only the command after it
      const pre = html.startsWith(PROMPT) ? PROMPT : '', cmd = strip(html.slice(pre.length));
      for (let i = 1; i <= cmd.length; i++) { term.innerHTML = history + pre + esc(cmd.slice(0, i)) + '<span class="cursor"></span>'; await sleep(speed); }
      await sleep(250);
    } else await sleep(70);
    history += html + '\n'; term.innerHTML = history + '<span class="cursor"></span>';
  }
  mode = 'prompt'; render();
}
setTimeout(typeAll, 600);

function render() { if (mode === 'prompt') term.innerHTML = history + PROMPT + esc(buf) + '<span class="cursor"></span>'; }
terminal.addEventListener('click', () => { if (mode !== 'game') input.focus({ preventScroll: true }); });
input.addEventListener('focus', () => terminal.classList.add('focused'));
input.addEventListener('blur', () => terminal.classList.remove('focused'));
input.addEventListener('input', () => { if (mode !== 'prompt') { input.value = ''; return; } buf = input.value.slice(0, 40); render(); });
input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && mode === 'prompt') { e.preventDefault(); run(buf.trim()); } });

function run(cmd: string) {
  history += PROMPT + esc(cmd) + '\n'; buf = ''; input.value = '';
  const c = cmd.toLowerCase();
  if (c === 'snake') return startSnake();
  if (c === 'clear') history = '';
  else if (c) history += `<span class="t-err">zsh: command not found: ${esc(cmd)}</span>\n<span class="t-com">${sn().notFound}</span>\n`;
  const ls = history.split('\n'); if (ls.length > 16) history = ls.slice(-16).join('\n');
  render();
}

document.getElementById('termHint')!.addEventListener('click', async () => {
  if (mode !== 'prompt') return;
  mode = 'auto';
  for (const ch of 'snake') { buf += ch; term.innerHTML = history + PROMPT + esc(buf) + '<span class="cursor"></span>'; await sleep(110); }
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
  const w = term.clientWidth - 44, h = Math.min(Math.max(term.clientHeight - 40, 240), 320), cell = 18;
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
  const { ctx, cols, rows, cell } = g, W = cols * cell, H = rows * cell, cs = getComputedStyle(root), t = sn();
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = cs.getPropertyValue('--grid');
  for (let x = 0; x < cols; x++) for (let y = 0; y < rows; y++) ctx.fillRect(x * cell + cell / 2 - 1, y * cell + cell / 2 - 1, 2, 2);
  ctx.strokeStyle = cs.getPropertyValue('--border-strong'); ctx.strokeRect(0.5, 0.5, W - 1, H - 1);
  const n = g.snake.length;
  g.snake.forEach((s, i) => { // blue → violet along the body
    const k = n > 1 ? i / (n - 1) : 0;
    ctx.fillStyle = `rgb(${79 + 60 * k},${140 - 48 * k},${255 - 9 * k})`;
    ctx.shadowColor = i === 0 ? 'rgba(79,140,255,.9)' : 'transparent'; ctx.shadowBlur = i === 0 ? 12 : 0;
    ctx.beginPath(); ctx.roundRect(s.x * cell + 1.5, s.y * cell + 1.5, cell - 3, cell - 3, i === 0 ? 6 : 4); ctx.fill();
  });
  ctx.shadowBlur = 0;
  ctx.font = `${cell - 3}px sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(g.food.e, g.food.x * cell + cell / 2, g.food.y * cell + cell / 2 + 1);
  ctx.direction = root.lang === 'ar' ? 'rtl' : 'ltr';
  if (!g.started) { ctx.fillStyle = '#8c93ad'; ctx.font = `13px ${t.font}`; ctx.fillText(matchMedia('(pointer:coarse)').matches ? t.startTouch : t.startKeys, W / 2, H - 22); }
  if (g.over) {
    ctx.fillStyle = 'rgba(5,7,15,.78)'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f87171'; ctx.font = `500 15px ${t.font}`; ctx.fillText(t.crash, W / 2, H / 2 - 26);
    ctx.fillStyle = '#e6e9f5'; ctx.font = `500 22px ${t.font}`; ctx.fillText(t.score(g.score), W / 2, H / 2 + 4);
    ctx.fillStyle = '#8c93ad'; ctx.font = `12.5px ${t.font}`; ctx.fillText(t.retry, W / 2, H / 2 + 34);
  }
  ctx.direction = 'ltr';
}
function exitSnake() {
  if (!G) return; clearTimeout(G.timer);
  history += `<span class="t-com">${sn().exited(G.score, G.best)}</span>\n`;
  G = null; mode = 'prompt'; terminal.classList.remove('playing', 'touch');
  termTitle.textContent = '~/alghuraid — zsh'; render();
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
