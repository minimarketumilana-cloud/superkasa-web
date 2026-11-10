// Úvod a Funkce. Texty jsou ve slovníku c.T.index a c.T.funkce (tools/stranky/texty/<jazyk>.mjs).
import { pageUrl, SITE } from "./i18n.mjs";
import { LOGIN_LIVE, REGISTER_URL, card, cta, software } from "./parts.mjs";
import { oborPicker } from "./obory-stranky.mjs";

/**
 * Skutečný snímek ukázkové pokladny (img/pokladna, pořízený bez značek) v jazyce stránky: 1920×1200 a 960×600.
 * `name` = prodej | platba | cenovky; `above` = obrázek nad ohybem stránky (bez lazy, s vyšší prioritou).
 */
export const shot = (c, name, alt, { above = false, sizes = "(max-width: 900px) 100vw, 640px", cap = "" } = {}) => {
  const base = `${c.up}img/pokladna/${name}${c.lang === "cs" ? "" : "-" + c.lang}`;
  return `<figure class="shot"><img src="${base}.webp" srcset="${base}-960.webp 960w, ${base}.webp 1920w" sizes="${sizes}" width="1920" height="1200" alt="${alt}"${above ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;
};

/** Karty se stejnými ikonami ve všech jazycích: `icons` = [ikona, třída] ve stejném pořadí jako texty [nadpis, text]. */
/** Počet ikon musí sedět s počtem karet v textech – jinak by se karta potichu nevykreslila. */
const cards = (icons, texts) => {
  if (icons.length !== texts.length) throw new Error(`cards: ${icons.length} ikon, ale ${texts.length} karet (${texts.map((x) => x[0]).join(" | ")})`);
  return icons.map(([ic, cls], i) => card(ic, texts[i][0], texts[i][1], cls)).join("\n      ");
};

export const index = (c) => {
  const t = c.T.index;
  return {
    file: "index.html",
    current: "index.html",
    title: t.title,
    desc: t.desc,
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        software(c),
      ],
    },
    body: `
<section class="hero hero-pick">
  <div class="wrap">
    <div class="hero-top">
      <div class="hero-intro">
        <span class="eyebrow">${t.eyebrow}</span>
        <h1>${t.h1}</h1>
        <p class="lead">${t.lead}</p>
        <div class="actions hero-cta">
          ${LOGIN_LIVE ? `<a class="btn btn-gold btn-lg" href="${REGISTER_URL}">${t.heroCta[0]}</a>` : ""}
          <a class="btn btn-ghost btn-lg" href="jak-zacit.html">${t.heroCta[1]}</a>
        </div>
        <p class="small hero-cta-note">${t.heroCtaNote}</p>
      </div>
      ${shot(c, "prodej", t.shotAlt, { above: true, sizes: "(max-width: 900px) 100vw, 620px" })}
    </div>
    <ul class="hero-facts">
      ${t.heroFacts.map((x) => `<li>${x}</li>`).join("\n      ")}
    </ul>
    ${oborPicker(c, { headingLevel: 1 })}
    <p class="hero-links">
      <a href="cenik.html">${t.heroLinks[0]}</a>
      <a href="funkce.html">${t.heroLinks[1]}</a>
    </p>
  </div>
</section>

<section class="section alt">
  <div class="wrap split">
    <div>
      <h2>${t.splitTitle}</h2>
      <p class="lead-sm">${t.splitLead}</p>
      <ul class="checks">
        ${t.splitChecks.map((x) => `<li>${x}</li>`).join("\n        ")}
      </ul>
      <div class="actions"><a class="btn btn-primary" href="funkce.html">${t.splitBtn}</a></div>
    </div>
    ${shot(c, "platba", t.payAlt, { cap: t.shotCap })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.whyTitle}</h2>
      <p>${t.whyLead}</p>
    </div>
    <div class="grid grid-3">
      ${cards([["wallet", "gold"], ["cash"], ["network"], ["clock"], ["lang", "gold"], ["box"]], t.whyCards)}
    </div>
  </div>
</section>

<section class="section alt news">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.newTitle}</h2>
      <p>${t.newLead}</p>
    </div>
    <div class="grid grid-3">
      ${cards([["bell", "gold"], ["db"], ["bag"], ["touch", "gold"], ["printer"], ["chart"]], t.newCards)}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.readyTitle}</h2>
      <p>${t.readyLead}</p>
    </div>
    <div class="grid grid-3">
      ${cards([["eet"], ["coins", "gold"], ["cup"]], t.readyCards)}
    </div>
    <p class="small mt-1">${t.readyNote}</p>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.stepsTitle}</h2>
      <p>${t.stepsLead}</p>
    </div>
    <ol class="steps">
      ${t.steps.map(([s, txt]) => `<li><strong>${s}</strong>${txt}</li>`).join("\n      ")}
    </ol>
  </div>
</section>
${cta(c)}`,
  };
};

export const funkce = (c) => {
  const t = c.T.funkce;
  const { ADDONS, KINDS } = c.D;
  const kindNames = Object.fromEntries(KINDS);
  const addonFeature = (a) =>
    card(a.icon, a.name, `<p>${a.desc}</p><p class="small">${t.addonMeta(a.priceMonth, a.kinds.map((k) => kindNames[k]).join(", "))}</p>`, a.key === "loyalty" || a.key === "recipes" ? "gold" : "");
  const toc = ["prodej", "stoly", "gastro-2027", "doklady", "sklad", "provoz", "doplnky"];
  return {
    file: "funkce.html",
    current: "funkce.html",
    title: t.title,
    desc: t.desc,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
    <nav class="toc" aria-label="${t.tocAria}">
      ${toc.map((id, i) => `<a href="#${id}">${t.toc[i]}</a>`).join("\n      ")}
    </nav>
  </div>
</section>

<section class="section feature-group" id="prodej">
  <div class="wrap">
    <div class="section-head"><h2>${t.prodejTitle}</h2></div>
    ${shot(c, "platba", c.T.index.payAlt, { sizes: "(max-width: 1240px) 100vw, 1180px" })}
    <div class="grid grid-3">
      ${cards([["touch"], ["scan"], ["scale"], ["percent"], ["bottle"], ["qr"], ["keyboard", "gold"]], t.prodej)}
    </div>
  </div>
</section>

<section class="section alt feature-group" id="stoly">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.stolyTitle}</h2>
      <p>${t.stolyLead}</p>
    </div>
    <div class="grid grid-3">
      ${cards([["table"], ["split"], ["printer"]], t.stoly)}
    </div>
  </div>
</section>

<section class="section feature-group" id="gastro-2027">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.gastroTitle}</h2>
      <p>${t.gastroLead}</p>
    </div>
    <div class="grid grid-2">
      ${cards([["cup"], ["coins", "gold"]], t.gastro)}
    </div>
    <p class="small mt-1">${t.gastroNote}</p>
  </div>
</section>

<section class="section alt feature-group" id="doklady">
  <div class="wrap">
    <div class="section-head"><h2>${t.dokladyTitle}</h2></div>
    <div class="grid grid-3">
      ${cards([["eet"], ["printer"], ["toggle"], ["undo"], ["report"], ["percent", "gold"], ["chart"], ["cash"], ["shield"], ["qr"]], t.doklady)}
    </div>
  </div>
</section>

<section class="section feature-group" id="sklad">
  <div class="wrap">
    <div class="section-head"><h2>${t.skladTitle}</h2></div>
    ${shot(c, "cenovky", t.labelsAlt, { sizes: "(max-width: 1240px) 100vw, 1180px" })}
    <div class="grid grid-3">
      ${cards([["box"], ["calendar"], ["tag"], ["db", "gold"], ["download"], ["bag", "gold"], ["home"]], t.sklad)}
    </div>
  </div>
</section>

<section class="section alt feature-group" id="provoz">
  <div class="wrap">
    <div class="section-head"><h2>${t.provozTitle}</h2></div>
    <div class="grid grid-3">
      ${cards([["lang", "gold"], ["chat", "gold"], ["users"], ["monitor"], ["network"], ["shield"], ["download"], ["refresh"], ["clock"], ["touch", "gold"], ["bell", "gold"], ["printer"], ["monitor", "gold"]], t.provoz)}
    </div>
  </div>
</section>
<section class="section feature-group" id="doplnky">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.addonsTitle}</h2>
      <p>${t.addonsLead}</p>
    </div>
    <div class="grid grid-3">
      ${ADDONS.map(addonFeature).join("\n      ")}
      ${card("wallet", t.payCard[0], t.payCard[1])}
    </div>
  </div>
</section>
${cta(c, t.cta[0], t.cta[1])}`,
  };
};
