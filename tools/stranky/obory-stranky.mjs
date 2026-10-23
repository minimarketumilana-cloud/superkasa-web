// Výběr oboru (velké karty jako v aplikaci) a stránka pro každý obor s náhledem nastavené pokladny.
import { card, icon } from "./parts.mjs";
import { FEATURE_ORDER, FEATURES, GROUPS, KINDS, OBORY, SERVICE_HIGHLIGHTS, SERVICE_NOTES, TARIFFS } from "./obory.mjs";

/** Cena po česku: 1 450,00 (tisíce oddělené nezlomitelnou mezerou). */
const kc = (n) => {
  const [i, d] = n.toFixed(2).split(".");
  return `${i.replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;")},${d}`;
};
const qtyFmt = (q, unit) => (unit === "kg" ? `${String(q).replace(".", ",")} kg` : q === 1 ? "" : `${q}×`);
const art = (name, size = 48) => `<img src="img/obory/${name}.svg" alt="" width="${size}" height="${size}">`;

/** Výběr oboru: filtr (s JavaScriptem) a karty rozdělené na obchody, gastro a služby. */
export function oborPicker({ headingLevel = 2 } = {}) {
  const h = `h${headingLevel + 1}`;
  const sections = KINDS.map(([kind, label]) => `
    <div class="obor-kind" data-kind="${kind}">
      <${h} class="obor-kind-title">${label}</${h}>
      <div class="obor-grid">
        ${OBORY.filter((o) => o.kind === kind).map((o) => `<a class="obor" href="${o.file}">
          <span class="obor-art">${art(o.art, 56)}</span>
          <span class="obor-name">${o.card}</span>
          <span class="obor-desc">${o.cardDesc}</span>
          <span class="obor-go" aria-hidden="true"></span>
        </a>`).join("\n        ")}
      </div>
    </div>`).join("");
  return `
  <div class="picker">
    <div class="seg" role="group" aria-label="Zobrazit obory" hidden>
      <button type="button" data-f="all" aria-pressed="true">Vše</button>
      ${KINDS.map(([kind, label]) => `<button type="button" data-f="${kind}" aria-pressed="false">${label}</button>`).join("\n      ")}
    </div>${sections}
  </div>`;
}

function mock(o) {
  const tiles = o.tiles.map(([a, name, price, unit]) => price === null
    ? `<div class="pt grp">${art(a, 34)}<span>${name}</span><b>›</b></div>`
    : `<div class="pt">${art(a, 34)}<span>${name}</span><b>${kc(price)}${unit === "kg" ? "/kg" : ""}</b></div>`).join("");
  const lines = o.cart.map(([name, q, p, unit]) => ({ name, q, unit, sum: Math.round(q * p * 100) / 100 }));
  const total = lines.reduce((s, l) => s + l.sum, 0);
  const tabs = (o.pages.length ? o.pages.map((g) => GROUPS[g]) : ["Oblíbené"]).map((t, i) => `<span${i === 0 ? ' class="on"' : ""}>${t}</span>`).join("");
  const cap = o.illustrativeTiles
    ? "Ilustrační náhled – položky si založíte sami."
    : o.illustrativeCart
      ? `Ilustrační náhled. Dlaždice podle nastavení „${o.preset}“, nákup je jen příklad.`
      : `Ilustrační náhled s ukázkovými položkami a orientačními cenami z nastavení „${o.preset}“.`;
  return `
    <figure class="pos">
      <div class="pos-screen" aria-hidden="true">
        <div class="pos-main">
          <div class="pos-search">${o.mockSearch ?? "Hledat nebo naskenovat…"}</div>
          <div class="pos-tiles">${tiles}</div>
          <div class="pos-tabs">${tabs}</div>
        </div>
        <div class="pos-cart">
          ${lines.map((l) => `<div class="row"><span>${l.name}${qtyFmt(l.q, l.unit) ? ` <i>${qtyFmt(l.q, l.unit)}</i>` : ""}</span><span>${kc(l.sum)}</span></div>`).join("\n          ")}
          <div class="sum"><span>Celkem</span><span>${kc(total)} Kč</span></div>
          <div class="pay">${o.mockPay ?? "Zaplatit"}</div>
        </div>
      </div>
      <figcaption>${cap}</figcaption>
    </figure>`;
}

const checks = (arr) => `<ul class="checks">${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;

export function oborPage(o, footerObory) {
  const t = TARIFFS[o.tariff];
  const on = FEATURE_ORDER.filter((f) => o.features.includes(f));
  const more = t.features.filter((f) => !o.features.includes(f));
  const service = o.kind === "service";
  const highlights = o.highlights ?? SERVICE_HIGHLIGHTS;
  const notes = [...(o.notes ?? []), ...(service ? SERVICE_NOTES : [])];
  const others = OBORY.filter((x) => x.key !== o.key);
  const groupChips = `<ul class="gchips">${o.groups.map((g) => `<li>${art("g-" + g, 26)}${GROUPS[g]}</li>`).join("")}</ul>`;

  const body = `
<section class="page-head obor-head">
  <div class="wrap obor-hero">
    <div>
      <nav class="crumbs" aria-label="Drobečková navigace"><a href="index.html">Úvod</a><span aria-hidden="true">›</span><a href="obory.html">Pro koho</a><span aria-hidden="true">›</span><span aria-current="page">${o.card}</span></nav>
      <div class="obor-badge"><span class="obor-art sm">${art(o.art, 40)}</span><span>Tarif <strong>${t.name}</strong> · 199 Kč měsíčně s DPH</span></div>
      <h1>${o.title}</h1>
      <p class="lead">${o.desc}</p>
      <div class="actions">
        <a class="btn btn-primary" href="tel:+420608886882">Zavolat&nbsp;+420&nbsp;608&nbsp;886&nbsp;882</a>
        <a class="btn btn-ghost" href="cenik.html">Ceník</a>
      </div>
      <p class="hero-note">30 dní zkouška zdarma. Instalátor pro Windows připravujeme.</p>
    </div>
    ${mock(o)}
  </div>
</section>
${o.notPreset ? `
<section class="section" style="padding:8px 0 0">
  <div class="wrap">
    <div class="note warn">
      ${notes.map((n, i) => `<p>${i === 0 ? "<strong>Upřímně:</strong> " : ""}${n}</p>`).join("\n      ")}
    </div>
  </div>
</section>` : ""}
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>${o.notPreset ? "Jak bude pokladna nastavená" : "Co bude připravené hned po spuštění"}</h2>
      <p>${o.notPreset
        ? `Při prvním spuštění vyberete typ provozu „${o.preset}“. Pokladna založí tyto skupiny, dlaždice a funkce – nápoje a další položky doplníte sami.`
        : `Při prvním spuštění vyberete typ provozu „${o.preset}“ a pokladna si sama připraví tohle. Všechno jde později změnit ve Správě.`}</p>
    </div>
    <div class="grid grid-3">
      <article class="card">${icon("box")}<h3>Skupiny zboží</h3>${groupChips}<p class="small mt-1">K tomu skupiny Nezařazeno 12 % a 21 %. Sazby DPH ve skupinách jsou návrh – zkontrolujte je s účetní.</p></article>
      <article class="card">${icon("touch")}<h3>Dlaždice a ukázkové položky</h3><p>${o.pages.length ? `Karty dole na prodejní obrazovce: <strong>${o.pages.map((g) => GROUPS[g]).join(", ")}</strong>.` : "Karty dole na prodejní obrazovce si přidáte podle svého sortimentu."}</p><p>${o.items}</p><p class="small">Ceny jsou orientační – upravíte je přímo z prodejní obrazovky.</p></article>
      <article class="card">${icon("shield", "gold")}<h3>Zapnuté funkce</h3>${checks(on.map((f) => FEATURES[f][0]))}<p class="small mt-1">Prodej, EET 2.0, účtenky, hotovost a uzávěrka fungují vždy.</p></article>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head"><h2>Co se vám bude hodit</h2></div>
    <div class="grid ${highlights.length > 4 ? "grid-3" : "grid-2"}">
      ${highlights.map(([ic, h, txt, cls]) => card(ic, h, txt, cls)).join("\n      ")}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Tarif ${t.name}</h2>
      <p>199 Kč měsíčně nebo 2 149 Kč ročně, vždy včetně DPH. Prvních 30 dní zdarma ve zkušebním režimu.</p>
    </div>
    <div class="grid grid-2">
      <article class="card">
        <h3>Zapnuto hned po spuštění</h3>
        <dl class="feat">${on.map((f) => `<dt>${FEATURES[f][0]}</dt><dd>${FEATURES[f][1]}</dd>`).join("")}</dl>
      </article>
      <article class="card">
        <h3>${more.length ? "Můžete kdykoli zapnout" : "Další funkce"}</h3>
        ${more.length
          ? `<dl class="feat">${more.map((f) => `<dt>${FEATURES[f][0]}</dt><dd>${FEATURES[f][1]}</dd>`).join("")}</dl><p class="small mt-1">Zapnete je ve Správě → Systém → Funkce pokladny. Jsou v ceně tarifu.</p>`
          : `<p>V tarifu ${t.name} máte zapnuté všechny volitelné funkce. Ty, které nepotřebujete, můžete vypnout ve Správě → Systém → Funkce pokladny.</p>`}
        <div class="actions" style="margin-top:16px"><a class="btn btn-ghost" href="cenik.html">Celý ceník</a><a class="btn btn-ghost" href="funkce.html">Všechny funkce</a></div>
      </article>
    </div>
  </div>
</section>
${notes.length && !o.notPreset ? `
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="note">
      <p><strong>Dobré vědět:</strong> ${notes.join(" ")}</p>
    </div>
  </div>
</section>` : ""}
<section class="section alt">
  <div class="wrap">
    <div class="section-head"><h2>Další obory</h2></div>
    <ul class="others">
      ${others.map((x) => `<li><a href="${x.file}">${art(x.art, 28)}${x.card}</a></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section dark cta">
  <div class="wrap">
    <h2>Vyzkoušejte SuperKasu ve svém provozu</h2>
    <p>Zavolejte nám. Domluvíme se na zkušební instalaci a poradíme s vybavením – počítač, tiskárna, čtečka${o.features.includes("scale") ? ", váha" : ""}.</p>
    <div class="actions">
      <a class="btn btn-gold" href="tel:+420608886882">Zavolat&nbsp;+420&nbsp;608&nbsp;886&nbsp;882</a>
      <a class="btn btn-light" href="obory.html">Zpět na výběr oboru</a>
    </div>
  </div>
</section>`;

  return {
    file: o.file,
    current: "obory.html",
    title: `${o.title} – SuperKasa`,
    desc: o.desc,
    body,
    footerObory,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Úvod", item: "https://superkasa.cz/" },
        { "@type": "ListItem", position: 2, name: "Pro koho", item: "https://superkasa.cz/obory.html" },
        { "@type": "ListItem", position: 3, name: o.card, item: `https://superkasa.cz/${o.file}` },
      ],
    },
  };
}

export const oboryPage = (footerObory) => ({
  file: "obory.html",
  current: "obory.html",
  title: "Pro koho je SuperKasa – vyberte svůj obor",
  desc: `Pokladna nastavená pro váš obor – ${OBORY.length} typů provozu: večerka, asijské potraviny, trafika, pekárna, květinářství, papírnictví, oblečení, mobily, vinotéka, kavárna, cukrárna, hospoda, kadeřnictví, nehtové studio, kosmetika, masáže, fitness, autoservis a další.`,
  footerObory,
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Pro koho je SuperKasa</h1>
    <p class="lead">Vyberte svůj obor a uvidíte, jak bude pokladna po prvním spuštění nastavená – skupiny zboží, dlaždice, ukázkové položky a funkce.</p>
  </div>
</section>
<section class="section" style="padding-top:24px">
  <div class="wrap">
    ${oborPicker({ headingLevel: 1 })}
    <div class="note mt-2">
      <p><strong>Nenašli jste svůj obor?</strong> Při zřízení pokladny popište vlastními slovy, co prodáváte, a pokladna navrhne skupiny s DPH, obrázky a první položky – zdarma a bez internetu, česky, vietnamsky i anglicky. Všechno uvidíte a upravíte, než pokladnu založíte. Sazby DPH ověřte s účetní.</p>
      <p>Nebo vyberte <a href="pokladna-obchod.html">Jiný obchod</a> či <a href="pokladna-sluzby.html">Jiné služby</a> a skupiny si upravte podle sebe. Poradíme i po telefonu: <a href="tel:+420608886882">+420&nbsp;608&nbsp;886&nbsp;882</a>.</p>
    </div>
  </div>
</section>`,
});
