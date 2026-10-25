// Sestaví HTML stránky webu ve všech jazycích z podkladů v tools/stranky a k nim sitemap.xml a robots.txt.
// Čeština je v kořeni webu, vietnamština v /vi/, angličtina v /en/ (stejné názvy souborů).
// Hotové HTML soubory jsou v Gitu, takže na hosting se nahrávají tak, jak jsou – tenhle skript je jen pro úpravy.
//   node tools/sestavit.mjs
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LANG_INFO, LANGS, OBORY_TEXTS, SITE, TEXTS, compareShape, pageUrl } from "./stranky/i18n.mjs";
import { csOverlay, oboryData } from "./stranky/obory.mjs";
import { oborPage, oboryPage } from "./stranky/obory-stranky.mjs";
import { INLINE_JS, page } from "./stranky/parts.mjs";
import { funkce, index } from "./stranky/pages1.mjs";
import { cenik, eet, kontakt, prihlaseni, stazeni } from "./stranky/pages2.mjs";
import { gdpr, legalStub, notFound, op } from "./stranky/pages3.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DAY = new Date().toLocaleDateString("sv-SE"); // RRRR-MM-DD v místním čase

// Překlad musí mít stejnou stavbu jako čeština – jinak by na stránce chyběl text.
let shapeErrors = 0;
for (const lang of LANGS.filter((l) => l !== "cs")) {
  const problems = [
    ...compareShape(TEXTS.cs, TEXTS[lang]).map((p) => `texty/${lang}.mjs ${p}`),
    ...compareShape(csOverlay(), OBORY_TEXTS[lang]).map((p) => `texty/${lang}-obory.mjs ${p}`),
  ];
  for (const p of problems) console.error(`✗ ${p}`);
  shapeErrors += problems.length;
}
if (shapeErrors) {
  console.error(`✗ Překlady nesedí s češtinou (${shapeErrors} rozdílů), nic se nezapsalo.`);
  process.exit(1);
}

const FOOTER_OBORY = ["vecerka", "trafika", "pekarna", "drogerie", "gastro", "hospoda", "kadernictvi", "nehty"];
const indexable = []; // soubory, které jdou do sitemap (stejné ve všech jazycích)
let count = 0;

for (const lang of LANGS) {
  const dir = LANG_INFO[lang].dir;
  const c = { lang, T: TEXTS[lang], D: oboryData(OBORY_TEXTS[lang]), up: dir ? "../" : "" };
  const footerObory = c.D.OBORY.filter((o) => FOOTER_OBORY.includes(o.key))
    .map((o) => [o.file, o.card]).concat([["obory.html", c.T.common.allObory]]);
  const legal = lang === "cs" ? [op, gdpr] : [legalStub(c, "op"), legalStub(c, "gdpr")];
  const pages = [index(c), oboryPage(c, footerObory), ...c.D.OBORY.map((o) => oborPage(c, o, footerObory)),
    funkce(c), cenik(c), eet(c), stazeni(c), kontakt(c), prihlaseni(c), ...legal, notFound(c)]
    .map((p) => ({ footerObory, ...p }));

  mkdirSync(path.join(ROOT, dir), { recursive: true });
  for (const p of pages) {
    let html = page(c, p);
    // 404 se zobrazuje na libovolné adrese – odkazy, styly a obrázky proto od kořene webu (/, /vi/, /en/).
    if (p.file === "404.html") {
      html = html.replace(/(href|src)="(?!https?:|tel:|#|\/)([^"]*)"/g, (_, attr, rel) => {
        const u = new URL(rel, `${SITE}/${dir}`);
        return `${attr}="${u.pathname}${u.search}${u.hash}"`;
      });
    }
    writeFileSync(path.join(ROOT, dir, p.file), html);
    count++;
    if (lang === "cs" && !p.noindex) indexable.push(p.file);
  }
}
console.log(`✓ ${count} stránek (${LANGS.join(", ")})`);

// Sitemap: každá adresa ve všech jazycích, s odkazy na jazykové verze (hreflang).
const alternates = (file) => [...LANGS.map((l) => [l, pageUrl(l, file)]), ["x-default", pageUrl("cs", file)]]
  .map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`).join("\n");
const urls = LANGS.flatMap((lang) => indexable.map((file) =>
  `  <url>\n    <loc>${pageUrl(lang, file)}</loc>\n    <lastmod>${DAY}</lastmod>\n${alternates(file)}\n  </url>`));
writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`);
writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /aktualizace/\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`✓ sitemap.xml (${urls.length} adres), robots.txt`);

// Hash vloženého skriptu musí sedět s Content-Security-Policy v .htaccess, jinak ho prohlížeč na serveru nespustí.
const hash = createHash("sha256").update(INLINE_JS).digest("base64");
if (!readFileSync(path.join(ROOT, ".htaccess"), "utf8").includes(`'sha256-${hash}'`)) {
  console.error(`✗ .htaccess nemá hash vloženého skriptu: 'sha256-${hash}'`);
  process.exitCode = 1;
}
