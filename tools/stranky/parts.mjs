// Společné části stránek: ikony, karty, hlavička a patička. Výsledkem jsou obyčejné statické HTML soubory.
import { createHash } from "node:crypto";
import { LANG_INFO, LANGS, SITE, langHref, pageUrl } from "./i18n.mjs";
export { SITE };
export const INLINE_JS = 'document.documentElement.className+=" js"';

/**
 * Přihlášení na webu (e-mail a heslo majitele přes app.superkasa.cz). Zapnout (true) až tehdy, když:
 * 1) pokladna s účtem majitele je vydaná a ke stažení (od verze 0.2.2, 28. 10. 2026),
 * 2) SuperKasa Cloud na app.superkasa.cz opravdu běží (DNS + server).
 * Do té doby hlavička i prihlaseni.html říkají „Pokladna v prohlížeči – připravujeme“.
 */
// 2026-10-28: SuperKasa Cloud běží na app.superkasa.cz (VPS FORPSI) – přihlášení přes internet je živé. Stažitelná
// verze pro Windows má účet majitele od 0.2.2 (28. 10. 2026).
export const LOGIN_LIVE = true;
/** Registrace nového obchodu v SuperKasa Cloud (jen když LOGIN_LIVE). */
export const REGISTER_URL = "https://app.superkasa.cz/";

// Bezpečnostní pravidla přímo ve stránce: GitHub Pages hlavičky z .htaccess neposílá. (frame-ancestors v <meta>
// nefunguje, to umí jen hlavička serveru.) Hash patří k vloženému skriptu INLINE_JS; app.superkasa.cz = přihlášení.
const INLINE_HASH = createHash("sha256").update(INLINE_JS).digest("base64");
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'sha256-${INLINE_HASH}'`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "connect-src 'self' https://app.superkasa.cz",
  "base-uri 'self'",
  "form-action 'self' https://app.superkasa.cz",
].join("; ");

const P = {
  touch: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M11 18h2"/>',
  eet: '<path d="M7 18a4.5 4.5 0 0 1-.5-9 6 6 0 0 1 11.5 1.5A3.75 3.75 0 0 1 17.5 18z"/><path d="m9.5 13 2 2 3.5-3.5"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  printer: '<path d="M6 9V2h12v7"/><rect x="2" y="9" width="20" height="8" rx="2"/><path d="M6 14h12v8H6z"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 8v8M10 8v8M13 8v8M17 8v8"/>',
  lang: '<path d="M4 5h8M8 3v2M6 5c0 4 2 7 5 8M10 5c0 4-3 8-6 9"/><path d="m13 21 4-9 4 9M14.5 18h5"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  scale: '<path d="M12 3v18M6 21h12M5 7h14M5 7l-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0z"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM14 20h.01M17 20h4v-3M20 14v.01"/>',
  monitor: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  report: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h5"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  network: '<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6M16 4.5a4 4 0 0 1 0 7M22 21c0-3-1.5-5-4-5.7"/>',
  bottle: '<path d="M10 2h4v4l2 3v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3z"/><path d="M8 13h8"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10v4M18 10v4"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M10 21v-6h4v6"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
  table: '<path d="M3 8h18l-2 4H5z"/><path d="M6 12v8M18 12v8M9 16h6"/>',
  split: '<path d="M12 3v6M12 9l-6 6v6M12 9l6 6v6"/>',
  wallet: '<path d="M3 7a2 2 0 0 1 2-2h13v4"/><rect x="3" y="9" width="18" height="11" rx="2"/><circle cx="16" cy="14.5" r="1.3"/>',
  cup: '<path d="M5 6h14l-1.6 15H6.6z"/><path d="M4 6h16M8 6l1-3h6l1 3M6 11h12"/>',
  coins: '<circle cx="8.5" cy="8.5" r="5.5"/><path d="M18.4 10.6a5.5 5.5 0 1 1-7.8 7.8"/><path d="M7.5 6.5h1.5v4"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  bowl: '<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M8 7.5c0-1.5 1-2 1-3.5M12 7.5c0-1.5 1-2 1-3.5M16 7.5c0-1.5 1-2 1-3.5"/>',
};
export const icon = (k, cls = "") =>
  `<div class="ico${cls ? " " + cls : ""}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${P[k]}</svg></div>`;

export const card = (ic, title, text, cls = "") => `<article class="card">${icon(ic, cls)}<h3>${title}</h3>${text.startsWith("<") ? text : `<p>${text}</p>`}</article>`;


/** Soubory hlavního menu (popisky jsou ve slovníku common.nav ve stejném pořadí). */
export const NAV_FILES = ["index.html", "obory.html", "funkce.html", "cenik.html", "eet.html", "ke-stazeni.html", "kontakt.html"];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Výzva na konci stránky. */
export const cta = (c, title = c.T.common.ctaTitle, text = c.T.common.ctaText) => `
<section class="section dark cta">
  <div class="wrap">
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="actions">
      <a class="btn btn-gold" href="tel:+420608886882">${c.T.common.callPhone}</a>
      <a class="btn btn-light" href="cenik.html">${c.T.common.showPricing}</a>
    </div>
  </div>
</section>`;

/** Vlajky jazyků (stejné jako v pokladně): čeština, vietnamština, angličtina. */
const FLAG_SVG = {
  cs: '<rect width="30" height="20" fill="#fff"/><rect y="10" width="30" height="10" fill="#d7141a"/><path d="M0 0 15 10 0 20Z" fill="#11457e"/>',
  vi: '<rect width="30" height="20" fill="#da251d"/><path d="M15 4.2l1.42 4.37h4.6l-3.72 2.7 1.42 4.37L15 12.94l-3.72 2.7 1.42-4.37-3.72-2.7h4.6Z" fill="#ffcd00"/>',
  en: '<rect width="30" height="20" fill="#012169"/><path d="M0 0 30 20M30 0 0 20" stroke="#fff" stroke-width="4"/><path d="M0 0 30 20M30 0 0 20" stroke="#c8102e" stroke-width="1.6"/><path d="M15 0v20M0 10h30" stroke="#fff" stroke-width="6.5"/><path d="M15 0v20M0 10h30" stroke="#c8102e" stroke-width="3.6"/>',
};
const flagSvg = (l) => `<svg class="flag" viewBox="0 0 30 20" width="27" height="18" aria-hidden="true">${FLAG_SVG[l]}</svg>`;

/**
 * Přepínač jazyků: vlajky vždy vidět v hlavičce (na počítači i se zkratkou CZ / VI / EN, na mobilu jen vlajky).
 * Vede na stejnou stránku v jiném jazyce; každý odkaz má lang, hreflang a plný název jazyka pro čtečky.
 */
const langSwitch = (c, file) => `<nav class="langs" aria-label="${c.T.common.langAria}">${LANGS.map((l) => {
  const { name, short } = LANG_INFO[l];
  return `<a href="${langHref(c.lang, l, file)}" hreflang="${l}" lang="${l}" title="${name}" aria-label="${name}"${l === c.lang ? ' aria-current="true"' : ""}>${flagSvg(l)}<span>${short}</span></a>`;
}).join("")}</nav>`;

/**
 * Celá stránka. `c` = jazyk ({ lang, T, up }), `footerObory` = odkazy na obory do patičky,
 * `jsonld` = strukturovaná data (objekt), `canonicalPath` = jiný soubor pro canonical a hreflang (404 → úvod).
 */
export function page(c, { file, title, desc, current, body, noindex = false, canonicalPath, jsonld, footerObory = [] }) {
  const { T, up, lang } = c;
  const L = T.common;
  const target = canonicalPath ?? file;
  const url = pageUrl(lang, target);
  const alternates = [...LANGS.map((l) => [l, pageUrl(l, target)]), ["x-default", pageUrl("cs", target)]]
    .map(([l, href]) => `<link rel="alternate" hreflang="${l}" href="${href}">`).join("\n");
  const nav = NAV_FILES.map((href, i) => `<a href="${href}"${href === current ? ' aria-current="page"' : ""}>${L.nav[i]}</a>`).join("\n      ");
  const ld = jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>\n` : "";
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
${alternates}
<meta property="og:type" content="website">
<meta property="og:site_name" content="SuperKasa">
<meta property="og:locale" content="${LANG_INFO[lang].og}">
${LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${LANG_INFO[l].og}">`).join("\n")}
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/img/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(L.ogImageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#5c1a46">
<link rel="icon" href="${up}favicon.ico" sizes="any">
<link rel="icon" href="${up}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${up}apple-touch-icon.png">
<link rel="stylesheet" href="${up}css/style.css">
<script>${INLINE_JS}</script>
<script src="${up}js/site.js" defer></script>
${ld}</head>
<body>
<a class="skip" href="#obsah">${L.skip}</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="index.html" aria-label="${esc(L.brandAria)}"><img src="${up}img/logo.png" alt="SuperKasa" width="200" height="40"></a>
    ${langSwitch(c, file)}
    ${LOGIN_LIVE
      ? `<a class="login-top" href="prihlaseni.html" aria-label="${esc(L.loginAria)}" title="${esc(L.loginAria)}"${current === "prihlaseni.html" ? ' aria-current="page"' : ""}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg><span>${L.loginBtn}</span>${L.loginSoon ? `<em class="soon-tag">${L.loginSoon}</em>` : ""}</a>`
      : `<a class="login-top soon" href="prihlaseni.html" aria-label="${esc(L.loginAriaSoon)}" title="${esc(L.loginAriaSoon)}"${current === "prihlaseni.html" ? ' aria-current="page"' : ""}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg><span>${L.loginBtnSoon}</span><em class="soon-tag">${L.loginSoonTag}</em></a>`}
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav"><span class="bars"><span></span></span><span class="menu-txt">${L.menu}</span></button>
    <nav class="nav" id="nav" aria-label="${L.navAria}">
      ${nav}
      <a class="btn btn-primary nav-price" href="cenik.html">${L.priceBtn}</a>
      ${LOGIN_LIVE ? `<a class="btn btn-gold" href="${REGISTER_URL}">${L.registerBtn}</a>` : ""}
    </nav>
  </div>
</header>
<main id="obsah">
${body.trim()}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <div class="foot-brand"><img src="${up}favicon.svg" alt="" width="40" height="40"><b>Super<span>Kasa</span></b></div>
        <p>${L.footAbout}</p>
        <p><a href="tel:+420608886882">+420&nbsp;608&nbsp;886&nbsp;882</a></p>
      </div>
      <div>
        <h2>${L.footPages}</h2>
        <ul>
          ${NAV_FILES.map((href, i) => `<li><a href="${href}">${L.nav[i]}</a></li>`).join("\n          ")}
        </ul>
      </div>
      <div>
        <h2>${L.footObory}</h2>
        <ul>
          ${footerObory.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("\n          ")}
        </ul>
      </div>
      <div>
        <h2>${L.footDocs}</h2>
        <ul>
          <li><a href="obchodni-podminky.html">${L.docOp}</a></li>
          <li><a href="ochrana-osobnich-udaju.html">${L.docGdpr}</a></li>
          <li><a href="https://eet.gov.cz/" rel="noopener">${L.docEet}</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      ${L.footBottom}
    </div>
  </div>
</footer>
</body>
</html>
`;
}
