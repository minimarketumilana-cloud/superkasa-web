// Offline kontrola skutečně vygenerovaného webu, bez závislostí a bez přihlášení zákazníků.
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = 'https://superkasa.cz';
const files = ['', 'vi', 'en'].flatMap(dir => readdirSync(path.join(root, dir)).filter(f => f.endsWith('.html')).map(f => path.posix.join(dir, f)));
const pages = new Map(files.map(f => [f, readFileSync(path.join(root, f), 'utf8')]));
const errors = [];
let links = 0, graphs = 0, indexable = 0;
const check = (condition, message) => { if (!condition) errors.push(message); };
const urlOf = file => `${site}/${file.replace(/index\.html$/, '')}`;
const localFile = url => {
  let f = decodeURIComponent(url.pathname).replace(/^\//, '');
  if (!f || f.endsWith('/')) f += 'index.html';
  return f;
};
const sitemap = readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
check(new Set(locations).size === locations.length, 'Duplicitní URL v sitemap');
const titles = new Map();
for (const [file, html] of pages) {
  const fail = msg => check(false, `${file}: ${msg}`);
  const redirect = /http-equiv="refresh"/.test(html);
  const noindex = /name="robots" content="[^"]*noindex/.test(html);
  if (!redirect) {
    check((html.match(/<h1\b/g) || []).length === 1, `${file}: musí mít právě jeden H1`);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    check(Boolean(title), `${file}: chybí titulek`);
    if (title && !noindex) {
      check(!titles.has(title), `${file}: duplicitní titulek s ${titles.get(title)}`);
      titles.set(title, file);
    }
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
    check(new Set(ids).size === ids.length, `${file}: duplicitní HTML ID`);
    if (!noindex) {
      indexable++;
      check(html.includes(`<link rel="canonical" href="${urlOf(file)}">`), `${file}: nesprávná canonical URL`);
      check(locations.includes(urlOf(file)), `${file}: chybí v sitemap`);
    } else check(!locations.includes(urlOf(file)), `${file}: noindex je v sitemap`);
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        const data = JSON.parse(m[1]); graphs++;
        check(data['@context'] === 'https://schema.org', `${file}: nesprávný kontext JSON-LD`);
        const nodes = data['@graph'] ?? [data];
        const byId = id => nodes.find(n => n['@id'] === `${site}/#${id}`);
        const org = byId('organization');
        check(org?.name === 'SuperKasa' && org?.legalName === 'Thanh Lam Nguyen', `${file}: chybí identita provozovatele`);
        check(org?.identifier?.value === '14161648', `${file}: nesprávné IČO`);
        check(org?.logo?.url === `${site}/img/logo.png`, `${file}: nesjednocené logo`);
        check(byId('website')?.url === `${site}/`, `${file}: nestabilní URL WebSite`);
        const webpage = nodes.find(n => n['@id'] === `${urlOf(file)}#webpage`);
        check(webpage?.about?.['@id'] === `${site}/#app`, `${file}: chybí vztah stránky k produktu`);
        const ids = nodes.map(n => n['@id']).filter(Boolean);
        check(new Set(ids).size === ids.length, `${file}: opakovaná ID entit`);
        const app = byId('app');
        if (/(^|\/)(index|cenik)\.html$/.test(file)) {
          check(Boolean(app), `${file}: chybí produkt`);
          check(app?.url === `${site}/`, `${file}: nestabilní URL produktu`);
          check(app?.offers?.map(o => o.price).join(',') === '189,2041', `${file}: nesprávné ceny`);
          check(app?.softwareHelp?.url?.includes('navod-krok-za-krokem.html'), `${file}: chybí dokumentace`);
          const lang = file.startsWith('en/') ? 'en' : file.startsWith('vi/') ? 'vi' : 'cs';
          const other = pages.get(`${lang === 'cs' ? '' : lang + '/'}${file.endsWith('cenik.html') ? 'index.html' : 'cenik.html'}`);
          const otherGraph = JSON.parse(other.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
          const otherApp = otherGraph['@graph'].find(n => n['@id'] === `${site}/#app`);
          check(JSON.stringify(app) === JSON.stringify(otherApp), `${file}: údaje produktu se liší mezi úvodem a ceníkem`);
        }
      } catch (error) { fail(`neplatný JSON-LD: ${error.message}`); }
    }
  } else check(!locations.includes(urlOf(file)), `${file}: přesměrování je v sitemap`);
  for (const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const raw = m[1].replaceAll('&amp;', '&');
    if (/^(tel:|mailto:|data:|javascript:)/.test(raw)) continue;
    const url = new URL(raw, urlOf(file));
    if (url.origin !== site) continue;
    links++;
    const target = localFile(url);
    const disk = path.join(root, target);
    if (!existsSync(disk)) { fail(`chybí cíl ${raw}`); continue; }
    if (url.hash && pages.has(target)) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!pages.get(target).includes(`id="${id}"`)) fail(`neexistující kotva ${raw}`);
    }
  }
  for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
    const target = pages.get(localFile(new URL(m[2])));
    check(Boolean(target) && !/name="robots" content="[^"]*noindex/.test(target), `${file}: hreflang vede na noindex nebo chybějící stránku`);
    if (!noindex && !redirect && m[1] !== 'x-default') {
      check(target?.includes(`href="${urlOf(file)}"`), `${file}: chybí zpětný jazykový odkaz`);
    }
  }
  for (const m of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    for (const source of m[1].split(',')) {
      const url = new URL(source.trim().split(/\s+/)[0], urlOf(file));
      check(url.origin !== site || existsSync(path.join(root, localFile(url))), `${file}: chybějící obrázek srcset ${source}`);
    }
  }
}
for (const loc of locations) check(pages.has(localFile(new URL(loc))), `Sitemap: neexistující stránka ${loc}`);
// Manifest webu v každém jazyce: platný JSON, adresy v rámci jazyka, ikony na disku; každá stránka na něj odkazuje.
for (const [lang, dir] of [['cs', ''], ['vi', 'vi/'], ['en', 'en/']]) {
  const file = `${dir}manifest.webmanifest`;
  try {
    const m = JSON.parse(readFileSync(path.join(root, file), 'utf8'));
    check(m.lang === lang && m.start_url === `/${dir}` && m.scope === `/${dir}`, `${file}: jazyk nebo adresy nesedí`);
    check(m.name === 'SuperKasa' && Boolean(m.description) && m.display === 'browser', `${file}: název, popis nebo zobrazení`);
    check(['192x192', '512x512'].every(s => m.icons.some(i => i.sizes === s)), `${file}: chybí ikona 192 nebo 512`);
    for (const i of m.icons) check(existsSync(path.join(root, i.src)), `${file}: chybí soubor ikony ${i.src}`);
  } catch (error) { check(false, `${file}: ${error.message}`); }
}
for (const [file, html] of pages) {
  if (!/http-equiv="refresh"/.test(html)) check(html.includes('<link rel="manifest" href="') && html.includes('manifest.webmanifest">'), `${file}: chybí odkaz na manifest`);
  // Přihlášení: upozornění na nedostupný server nesmí být vidět ve výchozím stavu (ukáže ho až skript po selhání).
  if (file.endsWith('prihlaseni.html')) check(html.includes('<p class="cloud-soon" id="login-note" role="status" hidden></p>'), `${file}: upozornění u přihlášení není skryté`);
}
// Hlavičky pro hosting, který je umí: stejná CSP jako ve stránkách a navíc frame-ancestors.
const headers = readFileSync(path.join(root, '_headers'), 'utf8');
const metaCsp = pages.get('index.html').match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)?.[1].replaceAll('&#39;', "'");
check(Boolean(metaCsp) && headers.includes(`Content-Security-Policy: ${metaCsp}; frame-ancestors 'none'`), '_headers: CSP se liší od stránek');
check(headers.includes('Strict-Transport-Security: max-age=31536000') && headers.includes('X-Content-Type-Options: nosniff') && headers.includes('X-Frame-Options: DENY'), '_headers: chybí hlavička');
console.log(JSON.stringify({ pages: pages.size, indexable, graphs, localLinks: links, errors }, null, 2));
assert.equal(errors.length, 0, 'Kontrola webu neprošla');
