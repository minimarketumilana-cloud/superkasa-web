// Ceník, EET 2.0, Ke stažení a Kontakt. Texty jsou ve slovníku c.T.<stránka> (tools/stranky/texty/<jazyk>.mjs).
import { LOGIN_LIVE, card, cta, icon } from "./parts.mjs";
import { FEATURE_ORDER } from "./obory.mjs";

/** Počet ikon musí sedět s počtem karet v textech – jinak by se karta potichu nevykreslila. */
const cards = (icons, texts) => {
  if (icons.length !== texts.length) throw new Error(`cards: ${icons.length} ikon, ale ${texts.length} karet (${texts.map((x) => x[0]).join(" | ")})`);
  return icons.map((ic, i) => card(ic, texts[i][0], texts[i][1])).join("\n      ");
};
const PLAN_KEYS = ["potraviny", "obchod", "gastro", "nehty", "sluzby"];

export const cenik = (c) => {
  const t = c.T.cenik;
  const { ADDONS, FEATURES, KINDS, OBORY, TARIFFS } = c.D;
  const kindNames = Object.fromEntries(KINDS);

  const addonCard = (a) => `
      <article class="card plan">
        ${icon(a.icon, a.key === "loyalty" || a.key === "recipes" ? "gold" : "")}
        <h3>${a.name}</h3>
        <p class="who">${a.desc}</p>
        <div class="p">${t.addonPrice(a.priceMonth)}</div>
        <div class="py">${t.addonYear(a.priceYear)}</div>
        <p class="plan-obory">${t.addonKinds} ${a.kinds.map((k) => kindNames[k]).join(", ")}</p>
      </article>`;

  const plan = (key) => {
    const tar = TARIFFS[key];
    const all = tar.features.length === FEATURE_ORDER.length;
    const obory = OBORY.filter((o) => o.tariff === key);
    return `
      <article class="card plan${all ? " feat" : ""}">
        ${all ? `<span class="badge">${t.planAllBadge}</span>` : ""}
        <h3>${tar.name}</h3>
        <p class="who">${t.planText[key]}</p>
        <div class="p">${t.planPrice}</div>
        <div class="py">${t.planYear}</div>
        <ul class="checks">
          ${[...t.planBase, ...tar.features.map((f) => FEATURES[f][0]), ...(key === "gastro" ? [t.planExtraGastro] : [])].map((x) => `<li>${x}</li>`).join("\n          ")}
        </ul>
        <p class="plan-obory">${t.planObory} ${obory.map((o) => `<a href="${o.file}">${o.card}</a>`).join(", ")}</p>
      </article>`;
  };

  const yes = `<td class="y">✓<span class="sr"> ${t.yes}</span></td>`;
  const no = `<td class="n">–<span class="sr"> ${t.no}</span></td>`;
  const table = `
<div class="table-wrap">
  <table>
    <caption class="small">${t.tableCaption}</caption>
    <thead><tr><th scope="col">${t.tableFeature}</th>${PLAN_KEYS.map((k) => `<th scope="col">${TARIFFS[k].name}</th>`).join("")}</tr></thead>
    <tbody>
      <tr><th scope="row">${t.tableBase}</th>${PLAN_KEYS.map(() => yes).join("")}</tr>
      ${FEATURE_ORDER.map((f) => `<tr><th scope="row">${FEATURES[f][0]}</th>${PLAN_KEYS.map((k) => (TARIFFS[k].features.includes(f) ? yes : no)).join("")}</tr>`).join("\n      ")}
    </tbody>
  </table>
</div>`;

  return {
    file: "cenik.html",
    current: "cenik.html",
    title: t.title,
    desc: t.desc,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqLd.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="price-hero">
      <div class="price-box">
        <div class="amount">${t.boxAmount}</div>
        <div class="year">${t.boxYear}</div>
        <span class="tag">${t.boxTag}</span>
        <p>${t.boxText}</p>
      </div>
      <div class="card">
        <h2>${t.everyTitle}</h2>
        <ul class="checks">
          ${t.every.map((x) => `<li>${x}</li>`).join("\n          ")}
        </ul>
      </div>
    </div>

    <h2>${t.tariffsTitle}</h2>
    <div class="grid grid-3">
      ${PLAN_KEYS.map(plan).join("")}
      <article class="card plan" style="background:var(--cream)">
        <h3>${t.unsure[0]}</h3>
        <p class="who">${t.unsure[1]}</p>
        <div class="actions" style="margin-top:auto"><a class="btn btn-ghost" href="tel:+420608886882">+420&nbsp;608&nbsp;886&nbsp;882</a></div>
      </article>
    </div>
  </div>
</section>

<section class="section alt" id="doplnky">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.addonsTitle}</h2>
      <p>${t.addonsLead}</p>
    </div>
    <div class="grid grid-3">
      ${ADDONS.map(addonCard).join("")}
      <article class="card plan" style="background:var(--cream)">
        ${icon("clock")}
        <h3>${t.trialAddons[0]}</h3>
        <p class="who">${t.trialAddons[1]}</p>
        <p class="plan-obory">${t.trialAddons[2]}</p>
      </article>
    </div>
    <p class="small mt-1">${t.addonsNote}</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.compareTitle}</h2>
      <p>${t.compareLead}</p>
    </div>
    ${table}
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head"><h2>${t.rentTitle}</h2></div>
    <div class="grid grid-2">
      <article class="card">
        ${icon("calendar")}
        <h3>${t.rent[0]}</h3>
        <p>${t.rent[1]}</p>
      </article>
      <article class="card">
        ${icon("wallet", "gold")}
        <h3>${t.buy[0]}</h3>
        <p>${t.buy[1]}</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="grid grid-2">
      <article class="card">
        ${icon("clock")}
        <h3>${t.trial[0]}</h3>
        <p>${t.trial[1]}</p>
        <p>${t.trial[2]}</p>
      </article>
      <article class="card">
        ${icon("shield")}
        <h3>${t.ends[0]}</h3>
        <p>${t.ends[1]}</p>
      </article>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap faq">
    <div class="section-head"><h2>${t.faqTitle}</h2></div>
    ${t.faq.map(([q, a]) => `<details>
      <summary>${q}</summary>
      <div><p>${a}</p></div>
    </details>`).join("\n    ")}
  </div>
</section>
${cta(c, t.cta[0], t.cta[1])}`,
  };
};

export const eet = (c) => {
  const t = c.T.eet;
  return {
    file: "eet.html",
    current: "eet.html",
    title: t.title,
    desc: t.desc,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="note warn">
      <p>${t.warn}</p>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="section-head">
      <h2>${t.datesTitle}</h2>
      <p>${t.datesLead}</p>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="section-head"><h2>${t.doesTitle}</h2></div>
    <div class="grid grid-2">
      ${cards(["eet", "refresh", "monitor", "qr", "shield", "calendar"], t.does)}
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="grid grid-2">
      <div>
        <h2>${t.modesTitle}</h2>
        <ul class="checks">
          ${t.modes.map((x) => `<li>${x}</li>`).join("\n          ")}
        </ul>
      </div>
      <div>
        <h2>${t.youTitle}</h2>
        <ol class="steps">
          ${t.you.map(([s, txt]) => `<li><strong>${s}</strong>${txt}</li>`).join("\n          ")}
        </ol>
        <p class="small mt-1">${t.youNote}</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap prose">
    <h2 class="mt-0">${t.limitsTitle}</h2>
    ${t.limits.map((x) => `<p>${x}</p>`).join("\n    ")}
  </div>
</section>
${cta(c, t.cta[0], t.cta[1])}`,
  };
};

export const stazeni = (c) => {
  const t = c.T.stazeni;
  return {
    file: "ke-stazeni.html",
    current: "ke-stazeni.html",
    title: t.title,
    desc: t.desc,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="grid grid-2">
      <article class="card">
        ${icon("download")}
        <h2>${t.appTitle}</h2>
        <p>${t.appMeta}</p>
        <div class="actions" style="margin-top:12px">
          <a class="btn btn-primary" href="${c.up}aktualizace/SuperKasa-Setup-0.2.1.exe" download>${t.download}</a>
          <a class="btn btn-ghost" href="tel:+420608886882">${c.T.common.call}</a>
        </div>
        <p class="small muted" style="margin-top:12px">${t.smartscreen} <code style="word-break:break-all">552671038842446a6ab840f0051bbd93d846ac02449dbdb66135a24753fa4215</code></p>
      </article>
      <article class="card">
        <h2>${t.doesTitle}</h2>
        <ul class="checks">
          ${t.does.map((x) => `<li>${x}</li>`).join("\n          ")}
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="section alt" id="vybaveni">
  <div class="wrap">
    <div class="section-head"><h2>${t.needTitle}</h2></div>
    <div class="grid grid-3">
      ${cards(["monitor", "printer", "scan", "eet", "scale", "shield"], t.need)}
    </div>
  </div>
</section>
${cta(c, t.cta[0], t.cta[1])}`,
  };
};

/**
 * Přihlášení do pokladny: e-mail a heslo majitele se pošlou na app.superkasa.cz (SuperKasa Cloud), ten najde obchod
 * a pošle prohlížeč do jeho pokladny (zařízení se samo spáruje). Formulář obsluhuje js/site.js; dokud cloud neběží,
 * ukáže, že přihlášení přes internet zatím nejde, a vedle je návod pro pokladnu v obchodě (Windows).
 */
export const prihlaseni = (c) => (LOGIN_LIVE ? prihlaseniLive(c) : prihlaseniSoon(c));

/** Dokud přihlášení přes internet nejde (LOGIN_LIVE = false): jen informace „připravujeme“ a stažení pro Windows. */
const prihlaseniSoon = (c) => {
  const t = c.T.login.soon;
  return {
    file: "prihlaseni.html",
    current: "prihlaseni.html",
    title: t.title,
    desc: t.desc,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <p class="cloud-soon">${t.note}</p>
    <div class="grid grid-2">
      <article class="card">
        ${icon("download")}
        <h2>${t.pcTitle}</h2>
        <p>${t.pcText}</p>
        <div class="actions" style="margin-top:8px"><a class="btn btn-primary" href="ke-stazeni.html">${t.pcBtn}</a></div>
      </article>
      <article class="card">
        ${icon("clock", "gold")}
        <h2>${t.soonTitle}</h2>
        <p>${t.soonText}</p>
        <p>${t.infoText}</p>
      </article>
    </div>
  </div>
</section>`,
  };
};

const prihlaseniLive = (c) => {
  const t = c.T.login;
  return {
    file: "prihlaseni.html",
    current: "prihlaseni.html",
    title: t.title,
    desc: t.desc,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="grid grid-2">
      <form class="card login-form" id="login-form" action="https://app.superkasa.cz/#prihlaseni" method="post" novalidate data-api="https://app.superkasa.cz" data-busy="${t.busy}" data-choose="${t.choose}" data-error="${t.error}" data-offline="${t.offline}">
        <h2>${t.h1}</h2>
        <!-- Upozornění je vidět i bez JavaScriptu; skript ho schová, až cloud odpoví. Heslo nikdy v adrese (POST). -->
        <p class="cloud-soon" id="login-note">${t.offline}</p>
        <label>${t.email}<input type="email" name="email" autocomplete="username" maxlength="120" required></label>
        <label>${t.password}<input type="password" name="password" autocomplete="current-password" maxlength="200" required></label>
        <p class="login-err" role="alert" hidden></p>
        <button class="btn btn-primary" type="submit">${t.submit}</button>
        <div class="login-shops" hidden></div>
        <p class="small">${t.forgot}</p>
      </form>
      <article class="card">
        ${icon("monitor")}
        <h2>${t.pcTitle}</h2>
        <p>${t.pcText}</p>
        <p>${t.accText}</p>
        <div class="actions" style="margin-top:8px"><a class="btn btn-ghost" href="ke-stazeni.html">${t.pcBtn}</a></div>
      </article>
    </div>
  </div>
</section>`,
  };
};

export const kontakt = (c) => {
  const t = c.T.kontakt;
  return {
    file: "kontakt.html",
    current: "kontakt.html",
    title: t.title,
    desc: t.desc,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="grid grid-2">
      <article class="card">
        ${icon("touch")}
        <h2>${t.phone}</h2>
        <p><a class="contact-big" href="tel:+420608886882">+420&nbsp;608&nbsp;886&nbsp;882</a></p>
        <div class="actions" style="margin-top:8px"><a class="btn btn-primary" href="tel:+420608886882">${c.T.common.call}</a></div>
      </article>
      <article class="card">
        ${icon("home", "gold")}
        <h2>${t.makerTitle}</h2>
        <dl class="dl">
          <dt>${t.labels[0]}</dt><dd>Thanh Lam Nguyen</dd>
          <dt>${t.labels[1]}</dt><dd>14161648</dd>
          <dt>${t.labels[2]}</dt><dd>1. května 117/141<br>725 25 Ostrava</dd>
          <dt>${t.labels[3]}</dt><dd>superkasa.cz</dd>
        </dl>
      </article>
    </div>
  </div>
</section>`,
  };
};
