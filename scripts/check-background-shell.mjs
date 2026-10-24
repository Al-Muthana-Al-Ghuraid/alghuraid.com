import {readFile, readdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';

const base = new URL('../public-site/', import.meta.url);
const pages = ['index.html'];
for (const folder of ['projects', 'training']) {
  for (const entry of await readdir(new URL(folder + '/', base), {withFileTypes:true})) {
    if (entry.isDirectory()) pages.push(`${folder}/${entry.name}/index.html`);
  }
}
const baseline = process.argv.includes('--baseline');
const failed = [];
for (const page of pages) {
  const html = baseline
    ? execFileSync('git', ['show', `73f25e0:public-site/${page}`], {encoding:'utf8'})
    : await readFile(new URL(page, base), 'utf8');
  if (!baseline && page !== 'index.html') assert.ok(html.includes('detail-background-prototype.css') && html.includes('detail-background-trial'), `Missing lightweight detail background: ${page}`);
  if (!/src="\/assets\/scene\.js(?:\?[^"]*)?"/.test(html) && (!baseline || page !== 'index.html')) failed.push(page);
}
if (baseline) {
  assert.ok(failed.length > 0, 'Expected the original release to reproduce the missing shared sky.');
  console.log(`RED baseline: ${failed.length} pages lack the shared sky bootstrap.`);
} else {
  assert.deepEqual(failed, [], 'Every content route must load the shared sky bootstrap.');
  console.log(`PASS: all ${pages.length} routes load the background controller; detail routes use the lightweight shell.`);
}
