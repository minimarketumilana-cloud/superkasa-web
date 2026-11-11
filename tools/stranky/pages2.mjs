// Ceník, EET 2.0, Jak začít, Přihlášení a Kontakt. Texty jsou ve slovníku c.T.<stránka> (tools/stranky/texty/<jazyk>.mjs).
import { CONTACT_EMAIL, LOGIN_LIVE, ORG, ORG_ID, PROVIDER, REGISTER_URL, SITE, card, cta, icon, plain, software } from "./parts.mjs";
import { pageUrl } from "./i18n.mjs";
import { FEATURE_ORDER } from "./obory.mjs";

/** Počet ikon musí sedět s počtem karet v textech – jinak by se karta potichu nevykreslila. */
const cards = (icons, texts) => {
  if (icons.length !== texts.length) throw new Error(`cards: ${icons.length} ikon, ale ${texts.length} karet (${texts.map((x) => x[0]).join(" | ")})`);
  return icons.map((ic, i) => card(ic, texts[i][0], texts[i][1])).join("\n      ");
};
const PLAN_KEYS = ["obchod", "gastro", "sluzby"];

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
        ${LOGIN_LIVE ? `<a class="btn ${all ? "btn-gold" : "btn-ghost"} plan-btn" href="${REGISTER_URL}">${c.T.common.registerBtn}</a>` : ""}
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
      "@graph": [
        { "@type": "FAQPage", mainEntity: t.faq.map(([q, a]) => ({ "@type": "Question", name: plain(q), acceptedAnswer: { "@type": "Answer", text: plain(a) } })) },
        software(c),
      ],
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
        ${LOGIN_LIVE ? `<a class="btn btn-gold btn-lg price-cta" href="${REGISTER_URL}">${c.T.common.registerBtn}</a><p class="price-trial">${t.boxTag}</p>` : `<span class="tag">${t.boxTag}</span>`}
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
    </div>
    <div class="card plan-unsure">
      <div><h3>${t.unsure[0]}</h3><p>${t.unsure[1]}</p></div>
      <a class="btn btn-ghost" href="tel:+420608886882">+420&nbsp;608&nbsp;886&nbsp;882</a>
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
        ${icon("shield", "gold")}
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
        <div class="actions" style="margin-top:8px">${LOGIN_LIVE ? `<a class="btn btn-gold" href="${REGISTER_URL}">${c.T.common.registerBtn}</a>` : ""}<a class="btn btn-ghost" href="jak-zacit.html">${c.T.login.pcBtn}</a></div>
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
${cta(c, t.cta[0], t.cta[1], { pricing: false })}`,
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

/** Jak začít (dřív „Ke stažení“ na adrese ke-stazeni.html – ta teď jen přesměrovává sem, viz sestavit.mjs). */
export const stazeni = (c) => {
  const t = c.T.stazeni;
  return {
    file: "jak-zacit.html",
    current: "jak-zacit.html",
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
    <ol class="steps">
      ${c.T.index.steps.map(([s, txt]) => `<li><strong>${s}</strong>${txt}</li>`).join("\n      ")}
    </ol>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="grid grid-2">
      <article class="card">
        ${icon("monitor")}
        <h2>${t.appTitle}</h2>
        <p>${t.appMeta}</p>
        <div class="actions" style="margin-top:12px">
          <a class="btn btn-gold" href="${REGISTER_URL}">${t.download}</a>
          <a class="btn btn-ghost" href="tel:+420608886882">${c.T.common.call}</a>
        </div>
      </article>
      <article class="card">
        ${icon("refresh", "gold")}
        <h2>${t.doesTitle}</h2>
        <ul class="checks">
          ${t.does.map((x) => `<li>${x}</li>`).join("\n          ")}
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="section" id="vybaveni">
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
 * a pošle prohlížeč do jeho pokladny (zařízení se samo spáruje). Formulář obsluhuje js/site.js; když server
 * neodpovídá (chyba spojení nebo 6 s bez odpovědi), ukáže upozornění (login.offline) – ve výchozím stavu je skryté. Vedle je karta o dalších zařízeních a prodavačích.
 */
export const prihlaseni = (c) => {
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
        <!-- Upozornění na nedostupný server je ve výchozím stavu skryté: skript ho ukáže až po skutečném selhání. Heslo nikdy v adrese (POST). -->
        <p class="cloud-soon" id="login-note" role="status" hidden></p>
        <noscript><p class="cloud-soon">${t.noscript}</p></noscript>
        <label>${t.email}<input type="email" name="email" autocomplete="username" maxlength="120" required></label>
        <label>${t.password}<input type="password" name="password" autocomplete="current-password" maxlength="200" required></label>
        <p class="login-err" role="alert" hidden></p>
        <button class="btn btn-primary" type="submit">${t.submit}</button>
        <div class="login-shops" hidden></div>
        <p class="small">${t.forgot}</p>
        <a class="btn btn-gold login-register" href="${REGISTER_URL}">${t.register}</a>
      </form>
      <article class="card">
        ${icon("monitor")}
        <h2>${t.pcTitle}</h2>
        <p>${t.pcText}</p>
        <p>${t.accText}</p>
        <div class="actions" style="margin-top:8px"><a class="btn btn-ghost" href="jak-zacit.html">${t.pcBtn}</a></div>
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
    jsonld: { "@context": "https://schema.org", "@type": "ContactPage", url: pageUrl(c.lang, "kontakt.html"), mainEntity: { "@id": ORG_ID } },
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
        <p><a class="contact-big" href="tel:+420608886882">+420&nbsp;608&nbsp;886&nbsp;882</a></p>${CONTACT_EMAIL ? `
        <p><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>` : ""}
        <div class="actions" style="margin-top:8px"><a class="btn btn-primary" href="tel:+420608886882">${c.T.common.call}</a></div>
        <ul class="checks" style="margin-top:22px">
          ${t.helpItems.map((x) => `<li>${x}</li>`).join("\n          ")}
        </ul>
        <p class="mt-1"><a href="navod-krok-za-krokem.html">${t.guidesLink}</a> · <a href="jak-zacit.html">${t.startLink}</a></p>
      </article>
      <article class="card">
        ${icon("home", "gold")}
        <h2>${t.makerTitle}</h2>
        <!-- Identifikace podle § 435 občanského zákoníku; e-mail jen když je doplněný (CONTACT_EMAIL v parts.mjs). -->
        <dl class="dl">
          <dt>${t.labels[0]}</dt><dd>${PROVIDER.name}</dd>
          <dt>${t.labels[1]}</dt><dd>${PROVIDER.ico}</dd>
          <dt>${t.labels[2]}</dt><dd>${PROVIDER.street}<br>${PROVIDER.city}</dd>
          <dt>${t.labels[3]}</dt><dd>${t.register}</dd>
          <dt>${t.labels[4]}</dt><dd>${t.vat}</dd>${CONTACT_EMAIL ? `
          <dt>${t.labels[5]}</dt><dd><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></dd>` : ""}
          <dt>${t.labels[6]}</dt><dd>superkasa.cz</dd>
        </dl>
      </article>
    </div>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>${t.entityTitle}</h2>
    <p class="lead-sm">${c.T.index.ldDesc}</p>
    <p>${t.makerTitle}: ${PROVIDER.name}, IČO ${PROVIDER.ico}.</p>
    <div class="actions">
      <a class="btn btn-ghost" href="funkce.html">${c.T.common.nav[2]}</a>
      <a class="btn btn-ghost" href="cenik.html">${c.T.common.nav[3]}</a>
      <a class="btn btn-ghost" href="navody.html">${c.T.common.nav[5]}</a>
    </div>
  </div>
</section>`,
  };
};
