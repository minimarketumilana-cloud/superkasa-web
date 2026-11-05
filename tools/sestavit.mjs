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
import { INLINE_JS, page, redirectPage } from "./stranky/parts.mjs";
import { funkce, index } from "./stranky/pages1.mjs";
import { cenik, eet, kontakt, prihlaseni, stazeni } from "./stranky/pages2.mjs";
import { gdpr, legalStub, notFound, op } from "./stranky/pages3.mjs";
import { clanekPage, navodyPage } from "./stranky/clanky.mjs";
import clankyCs from "./stranky/clanky/cs.mjs";
import clankyVi from "./stranky/clanky/vi.mjs";
import clankyEn from "./stranky/clanky/en.mjs";

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

// Články: stejné ve všech jazycích, stejné oddíly a stejný počet otázek – jinak by se odkazy mezi nimi rozešly.
const CLANKY = { cs: clankyCs, vi: clankyVi, en: clankyEn };
for (const lang of LANGS.filter((l) => l !== "cs")) {
  const key = (x) => x.items.map((a) => `${a.slug}:${a.sections.map((s) => s.id).join(",")}:${a.faq.length}:${a.related.join(",")}`).join("|");
  if (key(CLANKY[lang]) !== key(clankyCs)) {
    console.error(`✗ Články ${lang} nesedí s češtinou.`);
    process.exit(1);
  }
}

const FOOTER_OBORY = ["vecerka", "trafika", "pekarna", "drogerie", "gastro", "hospoda", "kadernictvi", "nehty"];
// Soubory, které jdou do sitemap, po jazycích (překlady právních stránek jsou noindex, do sitemap nepatří).
const indexable = Object.fromEntries(LANGS.map((l) => [l, []]));
// Právní stránky mají závazné jen české znění: hreflang uvádí jen češtinu.
const LEGAL_FILES = ["obchodni-podminky.html", "ochrana-osobnich-udaju.html"];
// Staré adresy, které jen přesměrují na novou (meta refresh, noindex, canonical; do sitemap ne).
const REDIRECTS = [["ke-stazeni.html", "jak-zacit.html"]];
let count = 0;

for (const lang of LANGS) {
  const dir = LANG_INFO[lang].dir;
  const c = { lang, T: TEXTS[lang], D: oboryData(OBORY_TEXTS[lang]), up: dir ? "../" : "" };
  const footerObory = c.D.OBORY.filter((o) => FOOTER_OBORY.includes(o.key))
    .map((o) => [o.file, o.card]).concat([["obory.html", c.T.common.allObory]]);
  const legal = lang === "cs" ? [op, gdpr] : [legalStub(c, "op"), legalStub(c, "gdpr")];
  const pages = [index(c), oboryPage(c, footerObory), ...c.D.OBORY.map((o) => oborPage(c, o, footerObory)),
    funkce(c), cenik(c), eet(c), stazeni(c), kontakt(c), prihlaseni(c), navodyPage(c, CLANKY[lang]),
    ...CLANKY[lang].items.map((a) => clanekPage(c, CLANKY[lang], a)), ...legal, notFound(c)]
    .map((p) => ({ footerObory, ...p, ...(LEGAL_FILES.includes(p.file) ? { altLangs: ["cs"] } : {}) }));

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
    if (!p.noindex && p.file !== "404.html") indexable[lang].push(p.file);
  }
  for (const [from, to] of REDIRECTS) {
    writeFileSync(path.join(ROOT, dir, from), redirectPage(c, to, c.T.stazeni.movedTitle, c.T.stazeni.movedText));
  }
}
console.log(`✓ ${count} stránek (${LANGS.join(", ")}), přesměrování: ${REDIRECTS.map(([f, t]) => `${f} → ${t}`).join(", ")}`);

// Sitemap: každá indexovatelná adresa ve všech jazycích, s odkazy na jazykové verze (hreflang).
const alternates = (file) => [...LANGS.filter((l) => indexable[l].includes(file)).map((l) => [l, pageUrl(l, file)]), ["x-default", pageUrl("cs", file)]]
  .map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`).join("\n");
const urls = LANGS.flatMap((lang) => indexable[lang].map((file) =>
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
