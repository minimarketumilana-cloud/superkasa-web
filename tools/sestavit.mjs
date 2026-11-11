// Sestaví HTML stránky webu ve všech jazycích z podkladů v tools/stranky a k nim sitemap.xml a robots.txt.
// Čeština je v kořeni webu, vietnamština v /vi/, angličtina v /en/ (stejné názvy souborů).
// Hotové HTML soubory jsou v Gitu, takže na hosting se nahrávají tak, jak jsou – tenhle skript je jen pro úpravy.
//   node tools/sestavit.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LANG_INFO, LANGS, OBORY_TEXTS, SITE, TEXTS, compareShape, pageUrl } from "./stranky/i18n.mjs";
import { csOverlay, oboryData } from "./stranky/obory.mjs";
import { oborPage, oboryPage } from "./stranky/obory-stranky.mjs";
import { CSP, page, redirectPage } from "./stranky/parts.mjs";
import { funkce, index } from "./stranky/pages1.mjs";
import { cenik, eet, kontakt, prihlaseni, stazeni } from "./stranky/pages2.mjs";
import { gdpr, legalStub, notFound, op } from "./stranky/pages3.mjs";
import { clanekPage, navodyPage } from "./stranky/clanky.mjs";
import { navodyObrazkyPage } from "./stranky/navody-obrazky.mjs";
import clankyCs from "./stranky/clanky/cs.mjs";
import clankyVi from "./stranky/clanky/vi.mjs";
import clankyEn from "./stranky/clanky/en.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DAY = new Date().toLocaleDateString("sv-SE"); // RRRR-MM-DD v místním čase

/**
 * Česká typografie v hotovém HTML: nezlomitelná mezera po jednopísmenných předložkách a spojkách, v číslech
 * (2 041, +420 608 886 882), před jednotkami (189 Kč, 12 %), v datech (1. 1. 2027) a za §. Jen textové uzly –
 * <script>, <style>, <pre>, <code>, <textarea>, <title> a atributy zůstávají beze změny.
 */
const typo = (t) => {
  for (let i = 0; i < 2; i++) t = t.replace(/(^|[\s(„–]|&nbsp;)([kKsSvVzZoOuUaAiI]) /g, "$1$2&nbsp;");
  for (let prev = ""; prev !== t; ) { prev = t; t = t.replace(/(\d) (?=\d{3}(?!\d))/g, "$1&nbsp;"); }
  t = t.replace(/(\d) (?=(Kč|%|kg|g|l|ml|mm|dní|dnů|dny|hodin|minut|let|ks)(?=[\s.,;:)!?]|&nbsp;|$))/g, "$1&nbsp;");
  t = t.replace(/(\d{1,2}\.) (\d{1,2}\.) (\d{4})/g, "$1&nbsp;$2&nbsp;$3");
  return t.replace(/§ /g, "§&nbsp;");
};
const typography = (html) => html.split(/(<(script|style|pre|code|textarea|title)\b[\s\S]*?<\/\2>)/i)
  .map((part, i) => (i % 3 === 0 ? part.replace(/>([^<]+)</g, (m, t) => `>${typo(t)}<`) : i % 3 === 1 ? part : ""))
  .join("");
/** Odkazy na úvod bez „index.html“ (kanonická adresa je …/): index.html → ./, ../vi/index.html → ../vi/ … */
const homeLinks = (html) => html.replace(/href="((?:\.\.\/)*|\/)?((?:vi|en)\/)?index\.html(#[^"]*)?"/g, (_, up = "", lang = "", hash = "") => `href="${(up + lang) || "./"}${hash}"`);
const decode = (s) => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
// lastmod v sitemap: datum se mění, jen když se obsah stránky opravdu změnil.
const SM = path.join(ROOT, "sitemap.xml");
const oldMod = new Map(existsSync(SM) ? [...readFileSync(SM, "utf8").matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1], m[2]]) : []);
const lastmod = {};
const norm = (s) => s.replace(/\r\n/g, "\n");
const warnings = [];

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
// Staré adresy, které jen přesměrují na novou (okamžitý meta refresh a canonical; do sitemap ne).
const REDIRECTS = [["ke-stazeni.html", "jak-zacit.html"]];
let count = 0;
/** Podklady pro /llms.txt (přehled webu pro jazykové modely) – české stránky, jak je sestavil cyklus níže. */
let llms = null;

for (const lang of LANGS) {
  const dir = LANG_INFO[lang].dir;
  const c = { lang, T: TEXTS[lang], D: oboryData(OBORY_TEXTS[lang]), up: dir ? "../" : "" };
  const footerObory = c.D.OBORY.filter((o) => FOOTER_OBORY.includes(o.key))
    .map((o) => [o.file, o.card]).concat([["obory.html", c.T.common.allObory]]);
  const legal = lang === "cs" ? [op, gdpr] : [legalStub(c, "op"), legalStub(c, "gdpr")];
  const pages = [index(c), oboryPage(c, footerObory), ...c.D.OBORY.map((o) => oborPage(c, o, footerObory)),
    funkce(c), cenik(c), eet(c), stazeni(c), kontakt(c), prihlaseni(c), navodyPage(c, CLANKY[lang]), navodyObrazkyPage(c),
    ...CLANKY[lang].items.map((a) => clanekPage(c, CLANKY[lang], a)), ...legal, notFound(c)]
    .map((p) => ({ footerObory, ...p, ...(LEGAL_FILES.includes(p.file) ? { altLangs: ["cs"] } : {}) }));

  if (lang === "cs") llms = { pages, obory: c.D.OBORY.map((o) => o.file), clanky: CLANKY.cs.items.map((a) => `${a.slug}.html`), lead: c.T.index.ldDesc };
  mkdirSync(path.join(ROOT, dir), { recursive: true });
  for (const p of pages) {
    let html = page(c, p);
    // 404 se zobrazuje na libovolné adrese – odkazy, styly a obrázky proto od kořene webu (/, /vi/, /en/).
    if (p.file === "404.html") {
      html = html.replace(/(href|src)="(?!https?:|tel:|mailto:|#|\/)([^"]*)"/g, (_, attr, rel) => {
        const u = new URL(rel, `${SITE}/${dir}`);
        return `${attr}="${u.pathname}${u.search}${u.hash}"`;
      });
    }
    if (lang === "cs") html = typography(html);
    html = homeLinks(html);
    const out = path.join(ROOT, dir, p.file);
    const url = pageUrl(lang, p.file);
    const changed = !existsSync(out) || norm(readFileSync(out, "utf8")) !== norm(html);
    lastmod[url] = changed ? DAY : (oldMod.get(url) ?? DAY);
    writeFileSync(out, html);
    count++;
    if (!p.noindex && p.file !== "404.html") {
      indexable[lang].push(p.file);
      // Titulek nad 60 znaků Google usekne; popisek pod 100 často přepíše, nad 160 zkrátí (právní stránky stranou).
      const title = decode(html.match(/<title>([^<]*)<\/title>/)[1]);
      const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)[1]);
      if ([...title].length > 60) warnings.push(`titulek ${[...title].length} znaků: ${dir}${p.file}`);
      if (!LEGAL_FILES.includes(p.file) && ([...desc].length < 100 || [...desc].length > 160)) warnings.push(`popisek ${[...desc].length} znaků: ${dir}${p.file}`);
    }
  }
  for (const [from, to] of REDIRECTS) {
    writeFileSync(path.join(ROOT, dir, from), homeLinks(redirectPage(c, to, c.T.stazeni.movedTitle, c.T.stazeni.movedText)));
  }
  // Manifest webu v jazyce stránek: správný název, ikona a barva při přidání na plochu telefonu. Web je prezentace,
  // ne aplikace – proto „browser“ (pokladna má vlastní manifest na adrese obchodu a otevírá se přes celou obrazovku).
  writeFileSync(path.join(ROOT, dir, "manifest.webmanifest"), `${JSON.stringify({
    id: `/${dir}`,
    name: "SuperKasa",
    short_name: "SuperKasa",
    description: c.T.common.ogImageAlt,
    lang,
    dir: "ltr",
    start_url: `/${dir}`,
    scope: `/${dir}`,
    display: "browser",
    background_color: "#fdf9f5",
    theme_color: "#5c1a46",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  }, null, 2)}\n`);
}
console.log(`✓ ${count} stránek (${LANGS.join(", ")}), přesměrování: ${REDIRECTS.map(([f, t]) => `${f} → ${t}`).join(", ")}`);
for (const w of warnings) console.warn(`! ${w}`);

// Sitemap: každá indexovatelná adresa ve všech jazycích, s odkazy na jazykové verze (hreflang).
const alternates = (file) => [...LANGS.filter((l) => indexable[l].includes(file)).map((l) => [l, pageUrl(l, file)]), ["x-default", pageUrl("cs", file)]]
  .map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`).join("\n");
const urls = LANGS.flatMap((lang) => indexable[lang].map((file) =>
  `  <url>\n    <loc>${pageUrl(lang, file)}</loc>\n    <lastmod>${lastmod[pageUrl(lang, file)] ?? DAY}</lastmod>\n${alternates(file)}\n  </url>`));
writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`);
writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /aktualizace/\nDisallow: /tools/\nDisallow: /README.md\nDisallow: /_headers\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`✓ sitemap.xml (${urls.length} adres), robots.txt`);

// /llms.txt: stručný přehled webu pro jazykové modely (Markdown podle llmstxt.org) – titulky a popisky stejné jako
// na stránkách, takže se nemůže rozejít s tím, co web tvrdí. Jen indexovatelné české stránky, jazykové verze odkazem.
{
  const text = (s) => decode(String(s).replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
  const line = (file) => {
    const p = llms.pages.find((x) => x.file === file);
    return p && !p.noindex ? `- [${text(p.title).replace(/ [–|] SuperKasa$/, "")}](${pageUrl("cs", file)}): ${text(p.desc)}` : null;
  };
  const list = (files) => files.map(line).filter(Boolean).join("\n");
  writeFileSync(path.join(ROOT, "llms.txt"), `# SuperKasa

> ${text(llms.lead)} Cena je 189 Kč měsíčně nebo 2 041 Kč ročně včetně DPH, prvních 10 dní je zdarma. Pokladna běží v prohlížeči, nic se neinstaluje. Je připravená na evidenci tržeb EET 2.0, která začíná 1. 1. 2027.

Web je česky (${SITE}/), vietnamsky (${SITE}/vi/) a anglicky (${SITE}/en/); stránky mají ve všech jazycích stejné názvy souborů. Informace o EET 2.0 nejsou právní ani daňové poradenství, závazné jsou údaje Finanční správy na https://eet.gov.cz/.

## Hlavní stránky

${list(["index.html", "obory.html", "funkce.html", "cenik.html", "eet.html", "jak-zacit.html", "kontakt.html"])}

## Návody

${list(["navody.html", "navod-krok-za-krokem.html", ...llms.clanky])}

## Pokladna podle oboru

${list(llms.obory)}

## Dokumenty

${list(["obchodni-podminky.html", "ochrana-osobnich-udaju.html"])}
`);
  console.log("✓ llms.txt");
}

// Bezpečnostní hlavičky pro hosting, který je umí (Netlify, Cloudflare Pages – soubor _headers). GitHub Pages ho
// nepoužije; tam platí jen <meta> CSP ve stránkách. Pravidla jsou stejná jako ve stránkách (včetně hashe vloženého
// skriptu), navíc frame-ancestors, které v <meta> nefunguje. HSTS bez includeSubDomains: poddomény mají vlastní servery.
writeFileSync(path.join(ROOT, "_headers"), `/*
  Strict-Transport-Security: max-age=31536000
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: ${CSP}; frame-ancestors 'none'
`);
console.log("✓ _headers, manifest.webmanifest (cs, vi, en)");
