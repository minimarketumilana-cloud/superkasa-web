// Úvod a Funkce. Texty jsou ve slovníku c.T.index a c.T.funkce (tools/stranky/texty/<jazyk>.mjs).
import { LANG_INFO, LANGS, langHref, pageUrl } from "./i18n.mjs";
import { card, cta } from "./parts.mjs";
import { oborPicker } from "./obory-stranky.mjs";

/** Karty se stejnými ikonami ve všech jazycích: `icons` = [ikona, třída] ve stejném pořadí jako texty [nadpis, text]. */
/** Počet ikon musí sedět s počtem karet v textech – jinak by se karta potichu nevykreslila. */
const cards = (icons, texts) => {
  if (icons.length !== texts.length) throw new Error(`cards: ${icons.length} ikon, ale ${texts.length} karet (${texts.map((x) => x[0]).join(" | ")})`);
  return icons.map(([ic, cls], i) => card(ic, texts[i][0], texts[i][1], cls)).join("\n      ");
};

export const index = (c) => {
  const t = c.T.index;
  const [g1, g2, g3] = t.mockGroups;
  const langLinks = Object.fromEntries(LANGS.map((l) => [l, `<a href="${langHref(c.lang, l, "index.html")}" hreflang="${l}" lang="${l}">${LANG_INFO[l].name}</a>`]));
  return {
    file: "index.html",
    current: "index.html",
    title: t.title,
    desc: t.desc,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "SuperKasa",
      url: pageUrl(c.lang, "index.html"),
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows 10, Windows 11",
      inLanguage: ["cs", "vi", "en"],
      description: t.ldDesc,
      offers: { "@type": "Offer", price: "199", priceCurrency: "CZK", description: t.ldOffer },
    },
    body: `
<section class="hero hero-pick">
  <div class="wrap">
    <div class="hero-intro">
      <span class="eyebrow">${t.eyebrow}</span>
      <h1>${t.h1}</h1>
      <p class="lead">${t.lead}</p>
    </div>
    ${oborPicker(c, { headingLevel: 1 })}
    <p class="hero-links">
      <span>${t.heroLinks[0]}</span>
      <span>${t.heroLinks[1]}</span>
      <a href="cenik.html">${t.heroLinks[2]}</a>
      <a href="funkce.html">${t.heroLinks[3]}</a>
    </p>
    <p class="lang-note">${t.langNote(langLinks)}</p>
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
    <figure class="mock">
      <div class="mock-screen" aria-hidden="true">
        <div class="mock-tiles">
          <div class="mock-bar"><span></span><span></span><span></span><span></span></div>
          <div class="tile">Rohlík<b>2,90</b></div>
          <div class="tile g">${g1}<b>›</b></div>
          <div class="tile">Mléko 1 l<b>24,90</b></div>
          <div class="tile p">Pivo 0,5 l<b>22,90</b></div>
          <div class="tile">Banány / kg<b>34,90</b></div>
          <div class="tile g">${g2}<b>›</b></div>
          <div class="tile">Káva<b>89,90</b></div>
          <div class="tile">Taška<b>2,00</b></div>
          <div class="tile g">${g3}<b>›</b></div>
        </div>
        <div class="mock-cart">
          <div class="row"><span>Rohlík 4×</span><span>11,60</span></div>
          <div class="row"><span>Pivo 0,5 l 2×</span><span>45,80</span></div>
          <div class="row"><span>Záloha láhev 2×</span><span>6,00</span></div>
          <div class="row"><span>Banány 0,84 kg</span><span>29,32</span></div>
          <div class="sum"><span>${c.T.obor.mockTotal}</span><span>92,72 Kč</span></div>
          <div class="pay">${c.T.obor.mockPay}</div>
        </div>
      </div>
      <figcaption class="mock-cap">${t.mockCap}</figcaption>
    </figure>
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

<section class="section alt">
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

<section class="section">
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
    <div class="grid grid-3">
      ${cards([["touch"], ["scan"], ["scale"], ["percent"], ["bottle"], ["qr"]], t.prodej)}
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
      ${cards([["eet"], ["printer"], ["undo"], ["report"], ["chart"], ["cash"], ["shield"], ["qr"]], t.doklady)}
    </div>
  </div>
</section>

<section class="section feature-group" id="sklad">
  <div class="wrap">
    <div class="section-head"><h2>${t.skladTitle}</h2></div>
    <div class="grid grid-3">
      ${cards([["box"], ["calendar"], ["tag"], ["db"], ["download"], ["home"]], t.sklad)}
    </div>
  </div>
</section>

<section class="section alt feature-group" id="provoz">
  <div class="wrap">
    <div class="section-head"><h2>${t.provozTitle}</h2></div>
    <div class="grid grid-3">
      ${cards([["lang", "gold"], ["users"], ["monitor"], ["network"], ["shield"], ["download"], ["refresh"], ["clock"], ["touch", "gold"], ["printer"], ["monitor", "gold"]], t.provoz)}
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
