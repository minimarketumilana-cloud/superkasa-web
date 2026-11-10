// Sekce Návody: rozcestník a články. Texty jsou v tools/stranky/clanky/<jazyk>.mjs (stejné články ve všech jazycích),
// šablona je jedna. Do těla článku jde čisté HTML; prvky pro články: <aside class="note">, <aside class="note warn">,
// <ol class="steps">, <ol class="timeline">, <div class="tbl"><table>…</table></div>.
import { pageUrl, SITE } from "./i18n.mjs";
import { ORG_ID, cta, ogImage, plain } from "./parts.mjs";
const dateText = (lang, iso) => new Date(`${iso}T12:00:00`).toLocaleDateString({ cs: "cs-CZ", vi: "vi-VN", en: "en-GB" }[lang], { day: "numeric", month: "long", year: "numeric" });
const fileOf = (a) => `${a.slug}.html`;

/** Rozcestník: témata a v nich články. */
/** Odkaz na návody se snímky obrazovky (nahoře na rozcestníku návodů). */
const HOWTO_PROMO = {
  cs: ["Se snímky obrazovky", "Návody krok za krokem", "Prodej, platba, nové zboží, cenovky, uzávěrka, tržba s DPH, storno a mobil majitele – vše na obrázcích se zakroužkovanými tlačítky."],
  vi: ["Có ảnh màn hình", "Hướng dẫn từng bước", "Bán hàng, thanh toán, hàng mới, nhãn giá, chốt ca, doanh thu kèm thuế DPH, hủy hóa đơn và điện thoại của chủ – tất cả trên ảnh chụp màn hình, các nút cần bấm được khoanh tròn."],
  en: ["With screenshots", "Step-by-step guides", "Selling, payment, new items, price labels, closing, sales with VAT, voids and the owner's phone – all on screenshots with the buttons circled."],
};

export function navodyPage(c, { ui, items }) {
  const groups = ui.groups.map(([key, name]) => [name, items.filter((a) => a.group === key)]).filter(([, list]) => list.length);
  return {
    file: "navody.html",
    current: "navody.html",
    title: ui.title,
    desc: ui.desc,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: ui.h1,
      description: ui.desc,
      url: pageUrl(c.lang, "navody.html"),
      inLanguage: c.lang,
      hasPart: items.map((a) => ({ "@type": "Article", headline: a.title, url: pageUrl(c.lang, fileOf(a)) })),
    },
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${ui.h1}</h1>
    <p class="lead">${ui.lead}</p>
  </div>
</section>
<section class="section howto-promo-wrap">
  <div class="wrap">
    <a class="howto-promo" href="navod-krok-za-krokem.html">
      <img src="${c.up}img/navody/prodej-3-platba.webp" width="1920" height="1200" loading="lazy" decoding="async" alt="">
      <span><small>${HOWTO_PROMO[c.lang][0]}</small><b>${HOWTO_PROMO[c.lang][1]}</b><span>${HOWTO_PROMO[c.lang][2]}</span></span>
    </a>
  </div>
</section>
${groups
  .map(
    ([name, list], i) => `<section class="section${i % 2 ? " alt" : ""}">
  <div class="wrap">
    <div class="section-head"><h2>${name}</h2></div>
    <div class="guide-grid">
      ${list
        .map(
          (a) => `<a class="guide-card" href="${fileOf(a)}">
        <small>${a.kicker} · ${ui.minutes.replace("{n}", a.minutes)}</small>
        <b>${a.title}</b>
        <span>${a.desc}</span>
      </a>`,
        )
        .join("\n      ")}
    </div>
  </div>
</section>`,
  )
  .join("\n")}
${cta(c)}`,
  };
}

/** Jeden článek. */
export function clanekPage(c, { ui, items }, a) {
  const url = pageUrl(c.lang, fileOf(a));
  const related = a.related.map((slug) => items.find((x) => x.slug === slug)).filter(Boolean);
  return {
    file: fileOf(a),
    current: "navody.html",
    title: a.metaTitle,
    desc: a.desc,
    og: { type: "article", published: a.published, modified: a.updated },
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: a.title,
          description: a.desc,
          inLanguage: c.lang,
          url,
          mainEntityOfPage: url,
          datePublished: a.published,
          dateModified: a.updated,
          image: ogImage(c.lang),
          author: { "@type": "Organization", "@id": ORG_ID, name: "SuperKasa", url: SITE },
          publisher: { "@id": ORG_ID },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: c.T.common.nav[0], item: pageUrl(c.lang, "index.html") },
            { "@type": "ListItem", position: 2, name: ui.h1, item: pageUrl(c.lang, "navody.html") },
            { "@type": "ListItem", position: 3, name: a.title, item: url },
          ],
        },
        ...(a.faq.length
          ? [{ "@type": "FAQPage", mainEntity: a.faq.map(([q, ans]) => ({ "@type": "Question", name: plain(q), acceptedAnswer: { "@type": "Answer", text: plain(ans) } })) }]
          : []),
      ],
    },
    body: `
<section class="article-head">
  <div class="wrap">
    <nav class="crumbs" aria-label="${c.T.common.crumbsAria}"><a href="index.html">${c.T.common.nav[0]}</a><span aria-hidden="true">›</span><a href="navody.html">${ui.h1}</a><span aria-hidden="true">›</span><span aria-current="page">${a.kicker}</span></nav>
    <h1>${a.title}</h1>
    <p class="lead">${a.lead}</p>
    <p class="article-meta">${ui.updated} ${dateText(c.lang, a.updated)} · ${ui.minutes.replace("{n}", a.minutes)}</p>
  </div>
</section>
<section class="section article-wrap">
  <div class="wrap article-grid">
    <aside class="guide-toc" aria-label="${ui.toc}">
      <b>${ui.toc}</b>
      <ol>
        ${a.sections.map((s) => `<li><a href="#${s.id}">${s.h2}</a></li>`).join("\n        ")}
        ${a.faq.length ? `<li><a href="#otazky">${ui.faq}</a></li>` : ""}
        ${a.sources.length ? `<li><a href="#zdroje">${ui.sources}</a></li>` : ""}
      </ol>
    </aside>
    <article class="prose">
      ${a.sections.map((s) => `<section id="${s.id}">\n<h2>${s.h2}</h2>\n${s.html.trim()}\n</section>`).join("\n")}
      ${
        a.faq.length
          ? `<section id="otazky" class="faq"><h2>${ui.faq}</h2>
        ${a.faq.map(([q, ans]) => `<details><summary>${q}</summary><div><p>${ans}</p></div></details>`).join("\n        ")}
      </section>`
          : ""
      }
      ${
        a.sources.length
          ? `<section id="zdroje"><h2>${ui.sources}</h2>
        <ul class="sources">${a.sources.map(([label, href]) => `<li><a href="${href}" rel="noopener">${label}</a></li>`).join("")}</ul>
        <p class="disclaimer">${ui.disclaimer}</p>
      </section>`
          : ""
      }
      ${
        related.length
          ? `<nav class="related" aria-label="${ui.related}"><h2>${ui.related}</h2><div class="guide-grid">
        ${related.map((r) => `<a class="guide-card" href="${fileOf(r)}"><small>${r.kicker}</small><b>${r.title}</b></a>`).join("\n        ")}
      </div></nav>`
          : ""
      }
    </article>
  </div>
</section>
${cta(c)}`,
  };
}
