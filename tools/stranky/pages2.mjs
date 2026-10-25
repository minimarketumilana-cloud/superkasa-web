import { card, icon } from "./parts.mjs";
import { cta } from "./pages1.mjs";
import { ADDONS, FEATURE_ORDER, FEATURES, KINDS, OBORY, TARIFFS } from "./obory.mjs";

const PLAN_TEXT = {
  potraviny: "Večerka, asijské potraviny, pekárna, zelenina, řeznictví, zdravá výživa – všechno včetně váhy a záloh.",
  obchod: "Trafika, drogerie, květiny, papírnictví, oblečení, mobily, vinotéka, chovatelské potřeby a další obchody.",
  gastro: "Kavárna, bistro, stánek, cukrárna, hospoda, bar a restaurace.",
  nehty: "Manikúra, gelové nehty, pedikúra a prodej kosmetiky.",
  sluzby: "Kadeřnictví, kosmetika, masáže, fitness, autoservis, opravna a další služby.",
};
const base = ["Prodej na dotykové obrazovce", "EET 2.0 a účtenky", "Hotovost a uzávěrky", "2 pokladní zařízení"];
// Co tarif umí navíc a není to vypínatelná funkce (prodej s sebou je nastavení skupin zboží).
const PLAN_EXTRA = { gastro: ["Na místě / S sebou (sazba DPH s sebou)"] };
const kc = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;");
const KIND_NAMES = Object.fromEntries(KINDS);

const addonCard = (a) => `
      <article class="card plan">
        ${icon(a.icon, a.key === "loyalty" || a.key === "recipes" ? "gold" : "")}
        <h3>${a.name}</h3>
        <p class="who">${a.desc}</p>
        <div class="p">${a.priceMonth} Kč <small>/ měsíc</small></div>
        <div class="py">nebo ${kc(a.priceYear)} Kč ročně · včetně DPH</div>
        <p class="plan-obory">Pro obory: ${a.kinds.map((k) => KIND_NAMES[k]).join(", ")}</p>
      </article>`;

function plan(key) {
  const t = TARIFFS[key];
  const all = t.features.length === FEATURE_ORDER.length;
  const obory = OBORY.filter((o) => o.tariff === key);
  return `
      <article class="card plan${all ? " feat" : ""}">
        ${all ? '<span class="badge">Všechny funkce</span>' : ""}
        <h3>${t.name}</h3>
        <p class="who">${PLAN_TEXT[key]}</p>
        <div class="p">199 Kč <small>/ měsíc</small></div>
        <div class="py">nebo 2 149 Kč ročně · včetně DPH</div>
        <ul class="checks">
          ${[...base, ...t.features.map((f) => FEATURES[f][0]), ...(PLAN_EXTRA[key] ?? [])].map((x) => `<li>${x}</li>`).join("\n          ")}
        </ul>
        <p class="plan-obory">Obory: ${obory.map((o) => `<a href="${o.file}">${o.card}</a>`).join(", ")}</p>
      </article>`;
}

const PLAN_KEYS = ["potraviny", "obchod", "gastro", "nehty", "sluzby"];
const table = `
<div class="table-wrap">
  <table>
    <caption class="small">Funkce jdou v pokladně zapnout nebo vypnout podle potřeby (Správa → Systém → Funkce pokladny).</caption>
    <thead><tr><th scope="col">Funkce</th>${PLAN_KEYS.map((k) => `<th scope="col">${TARIFFS[k].name}</th>`).join("")}</tr></thead>
    <tbody>
      <tr><th scope="row">Prodej, EET 2.0, účtenky, uzávěrky</th>${PLAN_KEYS.map(() => '<td class="y">✓<span class="sr"> ano</span></td>').join("")}</tr>
      ${FEATURE_ORDER.map((f) => `<tr><th scope="row">${FEATURES[f][0]}</th>${PLAN_KEYS.map((k) => (TARIFFS[k].features.includes(f) ? '<td class="y">✓<span class="sr"> ano</span></td>' : '<td class="n">–<span class="sr"> ne</span></td>')).join("")}</tr>`).join("\n      ")}
    </tbody>
  </table>
</div>`;

export const cenik = {
  file: "cenik.html",
  current: "cenik.html",
  title: "Ceník SuperKasa – 199 Kč měsíčně s DPH, 30 dní zdarma",
  desc: "Všechny tarify SuperKasa (Potraviny, Obchod, Gastro, Nehtové studio, Služby) za 199 Kč měsíčně včetně DPH, ročně 2 149 Kč. 30 dní zkouška zdarma, pronájem i jednorázová koupě. Placené doplňky od 69 Kč měsíčně.",
  jsonld: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ["Je cena konečná?", "Ano, 199 Kč měsíčně a 2 149 Kč ročně jsou ceny včetně DPH."],
      ["Kolik zařízení můžu používat?", "V každém tarifu jsou 2 pokladní zařízení. Další zařízení jsou na dotaz."],
      ["Co jsou placené doplňky?", "Doplňky jako Docházka a směny, Věrnostní program, Rezervace a termíny, Receptury a normy nebo Kontrola obsluhy si můžete přidat k tarifu za 69–99 Kč měsíčně včetně DPH, ročně o 10 % levněji. Ve 30denní zkoušce jsou zdarma a platí se jen ty, které zapnete."],
      ["Co se stane s daty, když přestanu platit?", "Data zůstávají na vašem počítači. Prodej i EET běží ještě 30 dní s upozorněním, potom se zastaví nový prodej. Doklady, uzávěrky, vratky a export dat fungují dál."],
    ].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Ceník</h1>
    <p class="lead">Jedna cena pro všechny obory. Tarif se řídí typem provozu a liší se jen funkcemi, které váš obor potřebuje.</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="price-hero">
      <div class="price-box">
        <div class="amount">199 Kč <span>měsíčně včetně DPH</span></div>
        <div class="year">nebo <strong>2 149 Kč ročně</strong> – o 10 % levněji</div>
        <span class="tag">30 dní zkouška zdarma</span>
        <p>Platí pro všechny tarify: Potraviny, Obchod, Gastro, Nehtové studio a Služby.</p>
      </div>
      <div class="card">
        <h3>V každém tarifu</h3>
        <ul class="checks">
          <li>Prodej na dotykové obrazovce</li>
          <li>EET 2.0 (ostré EET s placenou licencí)</li>
          <li>Účtenky, hotovost a uzávěrky</li>
          <li>Sklad, akce, zákaznický displej a QR platby</li>
          <li>Čeština, vietnamština a angličtina pro obsluhu</li>
          <li>Zálohy a export dat, aktualizace</li>
          <li>2 pokladní zařízení – další na dotaz</li>
        </ul>
      </div>
    </div>

    <h2>Tarify</h2>
    <div class="grid grid-3">
      ${PLAN_KEYS.map(plan).join("")}
      <article class="card plan" style="background:var(--cream)">
        <h3>Nevíte, který tarif?</h3>
        <p class="who">Tarif se vybere sám podle oboru, který zvolíte při prvním spuštění. <a href="obory.html">Najděte svůj obor</a>, nebo zavolejte – poradíme.</p>
        <div class="actions" style="margin-top:auto"><a class="btn btn-ghost" href="tel:+420608886882">+420&nbsp;608&nbsp;886&nbsp;882</a></div>
      </article>
    </div>
  </div>
</section>

<section class="section alt" id="doplnky">
  <div class="wrap">
    <div class="section-head">
      <h2>Placené doplňky</h2>
      <p>Tarif obsahuje všechno pro běžný prodej. Když potřebujete víc, přidáte si jen ten doplněk, který opravdu využijete – za stejnou cenu ve všech oborech.</p>
    </div>
    <div class="grid grid-3">
      ${ADDONS.map(addonCard).join("")}
      <article class="card plan" style="background:var(--cream)">
        ${icon("clock")}
        <h3>Ve zkoušce zdarma</h3>
        <p class="who">Ve 30denní zkoušce si vyzkoušíte všechny doplňky zdarma. Bez závazku – platí se jen to, co zapnete, a doplněk můžete kdykoli zase vypnout.</p>
        <p class="plan-obory">Doplňky zapnete ve Správě → Systém → Funkce pokladny.</p>
      </article>
    </div>
    <p class="small mt-1">Ceny jsou měsíčně včetně DPH a platí k tarifu (199 Kč). Ročně je doplněk o 10 % levnější. Prodej Na místě / S sebou a evidence spropitného jsou v tarifech zdarma, nejsou to placené doplňky.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Srovnání tarifů</h2>
      <p>Všechny tarify stojí stejně – 199 Kč měsíčně nebo 2 149 Kč ročně včetně DPH.</p>
    </div>
    ${table}
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head"><h2>Pronájem, nebo koupě</h2></div>
    <div class="grid grid-2">
      <article class="card">
        ${icon("calendar")}
        <h3>Pronájem</h3>
        <p>Platíte měsíčně (199 Kč) nebo ročně (2 149 Kč), vždy včetně DPH. Licence platí do zaplaceného data, automaticky se neprodlužuje a aktualizace máte po celou dobu pronájmu.</p>
      </article>
      <article class="card">
        ${icon("wallet", "gold")}
        <h3>Jednorázová koupě</h3>
        <p>Pokladnu zaplatíte jednou a používáte ji bez časového omezení. Aktualizace jsou v ceně do data, které si zvolíte při koupi. Cena <strong>na dotaz</strong>.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="grid grid-2">
      <article class="card">
        ${icon("clock")}
        <h3>30 dní zkouška zdarma</h3>
        <p>Nová pokladna běží 30 dní zdarma ve zkušebním režimu. Můžete prodávat, tisknout a nastavit si všechno potřebné, doklady jsou ale označené jako zkušební a <strong>do ostrého EET se neposílají</strong>. Ostré EET funguje jen s placenou licencí.</p>
        <p>Po skončení zkoušky pokladna ještě 7 dní upozorňuje, potom bez licence nový prodej zastaví. Data zůstávají.</p>
      </article>
      <article class="card">
        ${icon("shield")}
        <h3>Když platba skončí</h3>
        <p>Prodej i EET běží ještě <strong>30 dní</strong> s výrazným upozorněním. Potom se zastaví nový prodej, ale doklady, uzávěrky, vratky a export dat fungují dál. Vaše data zůstávají u vás.</p>
      </article>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap faq">
    <div class="section-head"><h2>Časté otázky</h2></div>
    <details>
      <summary>Je cena konečná?</summary>
      <div><p>Ano, 199 Kč měsíčně a 2 149 Kč ročně jsou ceny včetně DPH.</p></div>
    </details>
    <details>
      <summary>Je v ceně počítač, tiskárna nebo čtečka?</summary>
      <div><p>Ne, cena je za pokladní program. Počítač s Windows, pokladní tiskárnu, čtečku čárových kódů a případně váhu nebo zákaznický displej si pořizujete sami. Rádi poradíme, co se hodí – <a href="ke-stazeni.html#vybaveni">co budete potřebovat</a>.</p></div>
    </details>
    <details>
      <summary>Kolik zařízení můžu používat?</summary>
      <div><p>V každém tarifu jsou 2 pokladní zařízení – například pokladna a tablet pro příjem zboží. Další zařízení jsou na dotaz.</p></div>
    </details>
    <details>
      <summary>Co jsou placené doplňky a kolik stojí?</summary>
      <div><p>Doplňky přidávají funkce nad tarif: Docházka a směny (79 Kč), Věrnostní program (69 Kč), Rezervace a termíny (99 Kč), Receptury a normy (79 Kč) a Kontrola obsluhy (69 Kč) – měsíčně včetně DPH, ročně o 10 % levněji. Ve 30denní zkoušce jsou všechny zdarma. Bez závazku: platí se jen ty, které zapnete, a odemkne je stejný licenční klíč jako tarif. <a href="#doplnky">Přehled doplňků</a></p></div>
    </details>
    <details>
      <summary>Jak licenci zaplatím a zapnu?</summary>
      <div><p>Po objednání dostanete licenční klíč a vložíte ho do pokladny (Správa → Systém → Licence). Pokladna ho ověří i bez internetu.</p></div>
    </details>
    <details>
      <summary>Prodlužuje se pronájem automaticky?</summary>
      <div><p>Ne. Licence platí do zaplaceného data. Po zaplacení dalšího období dostanete nový klíč. Když ho nevložíte, pokladna běží ještě 30 dní s upozorněním.</p></div>
    </details>
    <details>
      <summary>Co se stane s daty, když přestanu platit?</summary>
      <div><p>Data zůstávají na vašem počítači. Po 30 dnech s upozorněním se zastaví nový prodej, doklady, uzávěrky a export dat ale fungují dál.</p></div>
    </details>
  </div>
</section>
${cta("Vyzkoušejte SuperKasu 30 dní zdarma", "Zavolejte nám a domluvíme se na zkušební instalaci.")}`,
};

export const eet = {
  file: "eet.html",
  current: "eet.html",
  title: "EET 2.0 v pokladně SuperKasa",
  desc: "Jak pokladna SuperKasa odesílá tržby do EET 2.0: odeslání na pozadí, opakování při výpadku internetu, zkušební režim bez ostrého EET. Povinnosti a termíny ověřujte u Finanční správy.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>EET 2.0</h1>
    <p class="lead">SuperKasa umí odesílat tržby do elektronické evidence tržeb EET 2.0. Na této stránce popisujeme, jak to pokladna dělá. Co přesně a odkdy musíte evidovat, vám řekne Finanční správa.</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="note warn">
      <p><strong>Důležité:</strong> Informace na této stránce nejsou právní ani daňové poradenství. Zda se vás evidence tržeb týká, odkdy a jaké platby evidujete, ověřte na <a href="https://eet.gov.cz/" rel="noopener">eet.gov.cz</a>, na <a href="https://www.financnisprava.cz/" rel="noopener">financnisprava.cz</a> nebo u svého daňového poradce či účetní.</p>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="section-head">
      <h2>Termíny podle Finanční správy</h2>
      <p>Podle eet.gov.cz (stav k 21. 10. 2026): systém EET 2.0 je pro podnikatele připravený od <strong>1. 11. 2026</strong> a běžná evidence tržeb začíná <strong>1. 1. 2027</strong>. Aktuální harmonogram najdete na <a href="https://eet.gov.cz/cs/o-eet/jaky-je-harmonogram-eet-2-0" rel="noopener">eet.gov.cz</a>.</p>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="section-head"><h2>Co pokladna dělá za vás</h2></div>
    <div class="grid grid-2">
      ${card("eet", "Odeslání na pozadí", "Doklad se uloží a vytiskne hned. Do EET se tržba odesílá na pozadí, takže zákazník nečeká.")}
      ${card("refresh", "Výpadek internetu", "Když spojení nefunguje, pokladna odesílání sama opakuje v prodlužujících se intervalech. Prodávat můžete dál.")}
      ${card("monitor", "Přehled na liště", "Lišta pokladny barvou ukazuje, jestli je vše odeslané, něco čeká, nebo nastala chyba. Neodeslané tržby nepřehlédnete.")}
      ${card("qr", "Všechny způsoby platby", "Pokladna eviduje tržbu za celý doklad – placený hotově, kartou, QR platbou i kombinovaně. Storno a vratka se evidují jako záporná tržba.")}
      ${card("shield", "Ověřená odpověď", "Potvrzení z EET pokladna přijme jen s platným podpisem Finanční správy. Jinak tržbu odešle znovu.")}
      ${card("calendar", "Hlídání certifikátu", "Pokladna vás 3 týdny předem upozorní, že končí platnost pokladního certifikátu. Automatickou obnovu zatím neumí – nový certifikát vygenerujete a nahrajete ručně.")}
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="grid grid-2">
      <div>
        <h2>Zkušební a ostrý režim</h2>
        <ul class="checks">
          <li><strong>Zkušební režim</strong> – prvních 30 dní a do přepnutí. Doklady jsou označené jako zkušební a do ostrého EET se nikdy neposílají.</li>
          <li><strong>Testovací prostředí</strong> – spojení s EET si můžete vyzkoušet v testovacím prostředí Finanční správy s testovacím certifikátem.</li>
          <li><strong>Ostrý režim</strong> – jen s placenou licencí a vlastním pokladním certifikátem. Před přepnutím projdete kontrolní seznam (údaje firmy, certifikát, ověřené spojení).</li>
        </ul>
      </div>
      <div>
        <h2>Co zařídíte vy</h2>
        <ol class="steps">
          <li><strong>Ověříte si své povinnosti</strong>Na eet.gov.cz nebo u účetní zjistíte, zda a odkdy evidujete.</li>
          <li><strong>Přihlásíte se do DIS+</strong>Daňová informační schránka na portálu MOJE daně. Tam zadáte evidenční jednotku – typicky svou provozovnu.</li>
          <li><strong>Vygenerujete pokladní certifikát</strong>Z DIS+ přejdete na portál certifikační autority CA EET a certifikát si zdarma vygenerujete a uložíte.</li>
          <li><strong>Nahrajete certifikát do pokladny</strong>Ve Správě → EET 2.0 nahrajete certifikát, vyplníte číslo evidenční jednotky a ověříte spojení.</li>
        </ol>
        <p class="small mt-1">Postup podle eet.gov.cz – „Jak začít evidovat“. Řiďte se vždy aktuálním návodem Finanční správy.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap prose">
    <h2 class="mt-0">Na co SuperKasa nemá vliv</h2>
    <p>SuperKasa nemá od Finanční správy žádnou certifikaci ani schválení – nic takového netvrdíme. Odesílání jsme ověřili v testovacím prostředí Finanční správy. Za splnění povinností evidence odpovídá podnikatel; pokladna je nástroj, který mu s tím pomáhá.</p>
    <p>Některé nejmenší OSVČ v paušálním režimu se mohou evidence tržeb vzdát v takzvaném režimu EET OFF. Podmínky popisuje Finanční správa na <a href="https://eet.gov.cz/cs/eet-off/co-je-rezim-eet-off" rel="noopener">eet.gov.cz</a>.</p>
    <p>Pravidla EET 2.0 se mohou měnit. Aktuální informace, termíny a odpovědi na časté otázky najdete vždy na <a href="https://eet.gov.cz/" rel="noopener">eet.gov.cz</a>.</p>
  </div>
</section>
${cta("Máte otázku k EET v pokladně?", "Zavolejte nám a ukážeme vám, jak SuperKasa s EET 2.0 pracuje.")}`,
};

export const stazeni = {
  file: "ke-stazeni.html",
  current: "ke-stazeni.html",
  title: "Ke stažení – instalátor SuperKasa pro Windows",
  desc: "Stáhněte si instalátor pokladny SuperKasa pro Windows – jeden soubor, instalace bez práv správce, 30 dní zdarma na vyzkoušení, data zůstávají i po odinstalaci. Co budete potřebovat za vybavení.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Ke stažení</h1>
    <p class="lead">Instalátor SuperKasy pro Windows. Prvních 30 dní zdarma na vyzkoušení, bez karty a bez závazku.</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="grid grid-2">
      <article class="card">
        ${icon("download")}
        <h3>SuperKasa pro Windows</h3>
        <p>Verze 0.1.0 · 24 MB · Windows 10 a 11 (64bit). První veřejná verze – kdyby cokoli nešlo, zavolejte, pomůžeme.</p>
        <div class="actions" style="margin-top:12px">
          <a class="btn btn-primary" href="aktualizace/SuperKasa-Setup-0.1.0.exe" download>Stáhnout instalátor</a>
          <a class="btn btn-ghost" href="tel:+420608886882">Zavolat</a>
        </div>
        <p class="small muted" style="margin-top:12px">Windows může při spuštění ukázat „Systém Windows ochránil váš počítač“ – instalátor zatím nemá placený podpis vydavatele. Klepněte na „Další informace“ a „Přesto spustit“. Kontrolní součet SHA-256: <code style="word-break:break-all">8f08ec5c7d76ad31eb5b13f09c2d2cf8d93f5e7189f3664eda9c8b5db4126b09</code></p>
      </article>
      <article class="card">
        <h3>Co instalátor udělá</h3>
        <ul class="checks">
          <li>Jeden soubor, instalace v češtině bez práv správce</li>
          <li>Nepotřebujete instalovat nic dalšího</li>
          <li>Zástupci „SuperKasa“ a „SuperKasa – správa“ na ploše</li>
          <li>Volitelné automatické spuštění po zapnutí počítače</li>
          <li>Převzetí dat z jiného počítače se SuperKasou</li>
          <li>Po odinstalaci data zůstanou pro novou instalaci</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="section alt" id="vybaveni">
  <div class="wrap">
    <div class="section-head"><h2>Co budete potřebovat</h2></div>
    <div class="grid grid-3">
      ${card("monitor", "Počítač s Windows", "Pro hlavní pokladnu počítač s Windows 10 nebo 11, ideálně s dotykovým monitorem. Další okna pokladny běží v prohlížeči – i na starším počítači s Windows 7 nebo na tabletu.")}
      ${card("printer", "Pokladní tiskárna", "Tiskárna na termopapír, role 80 nebo 58 mm – Epson TM-T88 a kompatibilní. Pokladna na ni tiskne účtenky i cenovky napřímo a otevírá přes ni peněžní zásuvku.")}
      ${card("scan", "Čtečka čárových kódů", "Běžná USB čtečka, případně fotoaparát mobilu nebo tabletu.")}
      ${card("eet", "Internet", "Pro odesílání do EET 2.0, aktualizace a druhou kopii záloh v OneDrive. Při výpadku se prodává dál.")}
      ${card("scale", "Podle oboru", "Váha se štítky, druhý monitor jako zákaznický displej, platební terminál pro karty, etiketová tiskárna na cenovky, tablet pro obsluhu u stolů a tiskárna na bony v kuchyni.")}
      ${card("shield", "Pokladní certifikát pro EET", "Pro ostrý provoz certifikát od Finanční správy – zdarma na portálu CA EET přes DIS+. <a href=\"eet.html\">Jak na EET 2.0</a>")}
    </div>
  </div>
</section>
${cta("Potřebujete pomoct s instalací?", "Zavolejte nám – nainstalujeme a nastavíme pokladnu s vámi, i ve vietnamštině.")}`,
};

export const kontakt = {
  file: "kontakt.html",
  current: "kontakt.html",
  title: "Kontakt – SuperKasa",
  desc: "Kontakt na výrobce pokladny SuperKasa: Thanh Lam Nguyen, IČO 14161648, 1. května 117/141, 725 25 Ostrava, tel. +420&nbsp;608&nbsp;886&nbsp;882.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Kontakt</h1>
    <p class="lead">Rádi poradíme s výběrem tarifu, vybavením pokladny i se zkušební instalací.</p>
  </div>
</section>

<section class="section" style="padding-top:32px">
  <div class="wrap">
    <div class="grid grid-2">
      <article class="card">
        ${icon("touch")}
        <h3>Telefon</h3>
        <p><a class="contact-big" href="tel:+420608886882">+420&nbsp;608&nbsp;886&nbsp;882</a></p>
        <div class="actions" style="margin-top:8px"><a class="btn btn-primary" href="tel:+420608886882">Zavolat</a></div>
      </article>
      <article class="card">
        ${icon("home", "gold")}
        <h3>Výrobce a provozovatel</h3>
        <dl class="dl">
          <dt>Jméno</dt><dd>Thanh Lam Nguyen</dd>
          <dt>IČO</dt><dd>14161648</dd>
          <dt>Adresa</dt><dd>1. května 117/141<br>725 25 Ostrava</dd>
          <dt>Web</dt><dd>superkasa.cz</dd>
        </dl>
      </article>
    </div>
  </div>
</section>`,
};
