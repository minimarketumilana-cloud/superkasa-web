// Výběr oboru (velké karty jako v aplikaci) a stránka pro každý obor s náhledem nastavené pokladny.
// Všechno je v jazyce `c` (c.T = texty stránek, c.D = data oborů v tom jazyce, c.up = cesta ke kořeni webu).
import { pageUrl } from "./i18n.mjs";
import { LOGIN_LIVE, REGISTER_URL, card, icon } from "./parts.mjs";
import { FEATURE_ORDER } from "./obory.mjs";

/** Cena po česku: 1 450,00 (tisíce oddělené nezlomitelnou mezerou). Náhled pokladny ji ukazuje tak ve všech jazycích. */
const kc = (n) => {
  const [i, d] = n.toFixed(2).split(".");
  return `${i.replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;")},${d}`;
};
const qtyFmt = (q, unit) => (unit === "kg" ? `${String(q).replace(".", ",")} kg` : q === 1 ? "" : `${q}×`);
const art = (c, name, size = 48) => `<img src="${c.up}img/obory/${name}.svg" alt="" width="${size}" height="${size}">`;

/** Výběr oboru: filtr (s JavaScriptem) a karty rozdělené na obchody, gastro a služby. */
export function oborPicker(c, { headingLevel = 2 } = {}) {
  const { KINDS, OBORY } = c.D;
  const h = `h${headingLevel + 1}`;
  const sections = KINDS.map(([kind, label]) => `
    <div class="obor-kind" data-kind="${kind}">
      <${h} class="obor-kind-title">${label}</${h}>
      <div class="obor-grid">
        ${OBORY.filter((o) => o.kind === kind).map((o) => `<a class="obor" href="${o.file}">
          <span class="obor-art">${art(c, o.art, 56)}</span>
          <span class="obor-name">${o.card}</span>
          <span class="obor-desc">${o.cardDesc}</span>
          <span class="obor-go" aria-hidden="true"></span>
        </a>`).join("\n        ")}
      </div>
    </div>`).join("");
  return `
  <div class="picker">
    <div class="seg" role="group" aria-label="${c.T.picker.filterAria}" hidden>
      <button type="button" data-f="all" aria-pressed="true">${c.T.picker.all}</button>
      ${KINDS.map(([kind, label]) => `<button type="button" data-f="${kind}" aria-pressed="false">${label}</button>`).join("\n      ")}
    </div>${sections}
  </div>`;
}

function mock(c, o) {
  const t = c.T.obor;
  const { GROUPS } = c.D;
  // Skupiny (dlaždice bez ceny) jsou v jazyce stránky, názvy položek zůstávají česky jako v pokladně.
  const groupName = (a, name) => (o.translated ? GROUPS[a.slice(2)] ?? t.mockYourGroup : name);
  const tiles = o.tiles.map(([a, name, price, unit]) => price === null
    ? `<div class="pt grp">${art(c, a, 34)}<span>${groupName(a, name)}</span><b>›</b></div>`
    : `<div class="pt">${art(c, a, 34)}<span>${name}</span><b>${kc(price)}${unit === "kg" ? "/kg" : ""}</b></div>`).join("");
  const lines = o.cart.map(([name, q, p, unit]) => ({ name, q, unit, sum: Math.round(q * p * 100) / 100 }));
  const total = lines.reduce((s, l) => s + l.sum, 0);
  const tabs = (o.pages.length ? o.pages.map((g) => GROUPS[g]) : [t.mockFavorites]).map((x, i) => `<span${i === 0 ? ' class="on"' : ""}>${x}</span>`).join("");
  const cap = o.illustrativeCart ? t.capCart(o.preset) : t.capItems(o.preset);
  return `
    <figure class="pos">
      <div class="pos-screen" aria-hidden="true">
        <div class="pos-main">
          <div class="pos-search">${o.mockSearch ?? t.mockSearch}</div>
          <div class="pos-tiles">${tiles}</div>
          <div class="pos-tabs">${tabs}</div>
        </div>
        <div class="pos-cart">
          ${lines.map((l) => `<div class="row"><span>${l.name}${qtyFmt(l.q, l.unit) ? ` <i>${qtyFmt(l.q, l.unit)}</i>` : ""}</span><span>${kc(l.sum)}</span></div>`).join("\n          ")}
          <div class="sum"><span>${t.mockTotal}</span><span>${kc(total)} Kč</span></div>
          <div class="pay">${o.mockPay ?? t.mockPay}</div>
        </div>
      </div>
      <figcaption>${cap}</figcaption>
    </figure>`;
}

const checks = (arr) => `<ul class="checks">${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;

export function oborPage(c, o, footerObory) {
  const t = c.T.obor;
  const L = c.T.common;
  const { TARIFFS, FEATURES, GROUPS, ADDONS, OBORY, SERVICE_HIGHLIGHTS, SERVICE_NOTES } = c.D;
  const tar = TARIFFS[o.tariff];
  const on = FEATURE_ORDER.filter((f) => o.features.includes(f));
  const more = tar.features.filter((f) => !o.features.includes(f));
  const service = o.kind === "service";
  const highlights = o.highlights ?? SERVICE_HIGHLIGHTS;
  const addons = (o.addons ?? []).map(([key, text]) => ({ ...ADDONS.find((a) => a.key === key), text }));
  const notes = [...(o.notes ?? []), ...(service && !addons.some((a) => a.key === "reservations") ? SERVICE_NOTES : [])];
  const others = OBORY.filter((x) => x.key !== o.key);
  const groupChips = `<ul class="gchips">${o.groups.map((g) => `<li>${art(c, "g-" + g, 26)}${GROUPS[g]}</li>`).join("")}</ul>`;

  const body = `
<section class="page-head obor-head">
  <div class="wrap obor-hero">
    <div>
      <nav class="crumbs" aria-label="${L.crumbsAria}"><a href="index.html">${L.nav[0]}</a><span aria-hidden="true">›</span><a href="obory.html">${L.nav[1]}</a><span aria-hidden="true">›</span><span aria-current="page">${o.card}</span></nav>
      <div class="obor-badge"><span class="obor-art sm">${art(c, o.art, 40)}</span><span>${t.tariffBadge(tar.name)}</span></div>
      <h1>${o.title}</h1>
      <p class="lead">${o.desc}</p>
      <div class="actions">
        ${LOGIN_LIVE ? `<a class="btn btn-gold" href="${REGISTER_URL}">${L.registerBtn}</a>` : `<a class="btn btn-primary" href="tel:+420608886882">${L.callPhone}</a>`}
        <a class="btn btn-ghost" href="cenik.html">${t.pricing}</a>
      </div>
      <p class="hero-note">${t.heroNote}</p>
    </div>
    ${mock(c, o)}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.readyTitle}</h2>
      <p>${t.readyLead(o.preset)}</p>
    </div>
    <div class="grid grid-3">
      <article class="card">${icon("box")}<h3>${t.groupsTitle}</h3>${groupChips}<p class="small mt-1">${t.groupsNote}</p></article>
      <article class="card">${icon("touch")}<h3>${t.tilesTitle}</h3><p>${o.pages.length ? t.tilesPages(o.pages.map((g) => GROUPS[g]).join(", ")) : t.tilesNone}</p><p>${o.items}</p><p class="small">${t.pricesNote}</p></article>
      <article class="card">${icon("shield", "gold")}<h3>${t.featuresOnTitle}</h3>${checks(on.map((f) => FEATURES[f][0]))}<p class="small mt-1">${t.alwaysOn}</p></article>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head"><h2>${t.usefulTitle}</h2></div>
    <div class="grid ${highlights.length > 4 ? "grid-3" : "grid-2"}">
      ${highlights.map(([ic, h, txt, cls]) => card(ic, h, txt, cls)).join("\n      ")}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.tariffTitle(tar.name)}</h2>
      <p>${t.tariffLead}</p>
    </div>
    <div class="grid grid-2">
      <article class="card">
        <h3>${t.onTitle}</h3>
        <dl class="feat">${on.map((f) => `<dt>${FEATURES[f][0]}</dt><dd>${FEATURES[f][1]}</dd>`).join("")}</dl>
      </article>
      <article class="card">
        <h3>${more.length ? t.moreTitle : t.otherTitle}</h3>
        ${more.length
          ? `<dl class="feat">${more.map((f) => `<dt>${FEATURES[f][0]}</dt><dd>${FEATURES[f][1]}</dd>`).join("")}</dl><p class="small mt-1">${t.moreNote}</p>`
          : `<p>${t.allOn(tar.name)}</p>`}
        <div class="actions" style="margin-top:16px"><a class="btn btn-ghost" href="cenik.html">${t.fullPricing}</a><a class="btn btn-ghost" href="funkce.html">${t.allFeatures}</a></div>
      </article>
    </div>${addons.length ? `
    <div class="note mt-1">
      <p><strong>${addons.length > 1 ? t.addonsTitleMany : t.addonsTitleOne}</strong></p>
      ${checks(addons.map((a) => t.addonLine(a.name, a.priceMonth, a.text)))}
      <p class="small">${t.addonsNote}</p>
    </div>` : ""}
  </div>
</section>
${notes.length ? `
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="note">
      <p><strong>${t.goodToKnow}</strong> ${notes.join(" ")}</p>
    </div>
  </div>
</section>` : ""}
<section class="section alt">
  <div class="wrap">
    <div class="section-head"><h2>${t.othersTitle}</h2></div>
    <ul class="others">
      ${others.map((x) => `<li><a href="${x.file}">${art(c, x.art, 28)}${x.card}</a></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section dark cta">
  <div class="wrap">
    <h2>${t.ctaTitle}</h2>
    <p>${t.ctaText(o.features.includes("scale"))}</p>
    <div class="actions">
      ${LOGIN_LIVE ? `<a class="btn btn-gold" href="${REGISTER_URL}">${L.registerBtn}</a>` : ""}
      <a class="btn ${LOGIN_LIVE ? "btn-light" : "btn-gold"}" href="tel:+420608886882">${L.callPhone}</a>
      <a class="btn btn-light" href="obory.html">${t.backToPicker}</a>
    </div>
  </div>
</section>`;

  return {
    file: o.file,
    current: "obory.html",
    title: `${o.title}${L.titleSuffix}`,
    desc: o.desc,
    body,
    footerObory,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: L.nav[0], item: pageUrl(c.lang, "index.html") },
        { "@type": "ListItem", position: 2, name: L.nav[1], item: pageUrl(c.lang, "obory.html") },
        { "@type": "ListItem", position: 3, name: o.card, item: pageUrl(c.lang, o.file) },
      ],
    },
  };
}

export const oboryPage = (c, footerObory) => {
  const t = c.T.obory;
  return {
    file: "obory.html",
    current: "obory.html",
    title: t.title,
    desc: t.desc(c.D.OBORY.length),
    footerObory,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
  </div>
</section>
<section class="section" style="padding-top:24px">
  <div class="wrap">
    ${oborPicker(c, { headingLevel: 1 })}
    <div class="note mt-2">
      <p>${t.notFound}</p>
      <p>${t.orOther}</p>
    </div>
  </div>
</section>`,
  };
};
