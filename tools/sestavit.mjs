// Sestaví HTML stránky webu z podkladů v tools/stranky a k nim sitemap.xml a robots.txt.
// Hotové HTML soubory jsou v Gitu, takže na hosting se nahrávají tak, jak jsou – tenhle skript je jen pro úpravy.
//   node tools/sestavit.mjs
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { OBORY } from "./stranky/obory.mjs";
import { oborPage, oboryPage } from "./stranky/obory-stranky.mjs";
import { INLINE_JS, SITE, page } from "./stranky/parts.mjs";
import { funkce, index } from "./stranky/pages1.mjs";
import { cenik, eet, kontakt, stazeni } from "./stranky/pages2.mjs";
import { gdpr, notFound, op } from "./stranky/pages3.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DAY = new Date().toLocaleDateString("sv-SE"); // RRRR-MM-DD v místním čase

const footerObory = OBORY.filter((o) => ["vecerka", "trafika", "pekarna", "drogerie", "gastro", "hospoda", "kadernictvi", "nehty"].includes(o.key))
  .map((o) => [o.file, o.card]).concat([["obory.html", "Všechny obory"]]);

const pages = [index, oboryPage(footerObory), ...OBORY.map((o) => oborPage(o, footerObory)), funkce, cenik, eet, stazeni, kontakt, op, gdpr, notFound]
  .map((p) => ({ footerObory, ...p }));

for (const p of pages) {
  let html = page(p);
  // 404 se zobrazuje na libovolné adrese – odkazy, styly a obrázky proto od kořene webu.
  if (p.file === "404.html") html = html.replace(/(href|src)="(?!https?:|tel:|#|\/)/g, '$1="/');
  writeFileSync(path.join(ROOT, p.file), html);
}
console.log(`✓ ${pages.length} stránek`);

const urls = pages.filter((p) => !p.noindex).map((p) => `  <url><loc>${SITE}/${p.file === "index.html" ? "" : p.file}</loc><lastmod>${DAY}</lastmod></url>`);
writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /aktualizace/\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`✓ sitemap.xml (${urls.length} adres), robots.txt`);

// Hash vloženého skriptu musí sedět s Content-Security-Policy v .htaccess, jinak ho prohlížeč na serveru nespustí.
const hash = createHash("sha256").update(INLINE_JS).digest("base64");
if (!readFileSync(path.join(ROOT, ".htaccess"), "utf8").includes(`'sha256-${hash}'`)) {
  console.error(`✗ .htaccess nemá hash vloženého skriptu: 'sha256-${hash}'`);
  process.exitCode = 1;
}
