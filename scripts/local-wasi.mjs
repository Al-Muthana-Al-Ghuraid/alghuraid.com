// Local-only workaround: Windows Smart App Control blocks Astro's native compiler (.node file),
// so on this PC we drop in Astro's WebAssembly build of the compiler instead.
// The source copy lives in .local/ (git-ignored), so on Cloudflare's build servers this does nothing.
import { cpSync, existsSync } from 'node:fs';

const src = '.local/compiler-binding-wasm32-wasi';
const dest = 'node_modules/@astrojs/compiler-binding-wasm32-wasi';
if (process.platform === 'win32' && existsSync(src) && !existsSync(dest)) {
  cpSync(src, dest, { recursive: true });
  console.log('[local-wasi] installed Astro WebAssembly compiler for this PC');
}
