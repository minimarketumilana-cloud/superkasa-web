// Obchodní podmínky (včetně smlouvy o zpracování osobních údajů) a zásady ochrany osobních údajů SuperKasa.
// Odpovídají skutečnému provozu: pokladna jen v prohlížeči (SuperKasa Cloud), pronájem 189 Kč/měsíc s DPH, 10 dní zkouška,
// 3 dny tolerance, server INTERNET CZ v ČR. Fakta: src/domain/license.ts, src/services/license.ts, deploy/cloud/zaloha.sh.
// Kontaktní e-mail doplní majitel (CONTACT_EMAIL); dokud chybí, je na stránce vyznačený.
const CONTACT_EMAIL = "";
const ph = (t) => `<span class="ph">[${t}]</span>`;
const EMAIL = CONTACT_EMAIL ? `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>` : ph("doplnit kontaktní e-mail");
const PROVIDER = "Thanh Lam Nguyen, IČO 14161648, místo podnikání 1. května 117/141, 725 25 Ostrava, fyzická osoba podnikající podle živnostenského zákona zapsaná v živnostenském rejstříku";
const PHONE = "+420&nbsp;608&nbsp;886&nbsp;882";
const EFFECTIVE = "4. 11. 2026";

export const op = {
  file: "obchodni-podminky.html",
  current: "",
  noindex: false,
  title: "Obchodní podmínky SuperKasa",
  desc: "Obchodní podmínky pronájmu pokladního systému SuperKasa včetně smlouvy o zpracování osobních údajů.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Obchodní podmínky</h1>
    <p class="lead">Pronájem pokladního systému SuperKasa (pokladna v prohlížeči).</p>
  </div>
</section>
<section class="section" style="padding-top:24px">
  <div class="wrap prose">
    <h2>1. Úvodní ustanovení</h2>
    <ol>
      <li>Tyto obchodní podmínky (dále „podmínky“) upravují pronájem pokladního systému SuperKasa. Poskytovatelem je ${PROVIDER}, telefon ${PHONE}, e-mail ${EMAIL} (dále „poskytovatel“).</li>
      <li>SuperKasa je určena výhradně podnikatelům pro jejich podnikatelskou činnost (dále „uživatel“). Při registraci uživatel uvádí své IČO. Smlouvy podle těchto podmínek nejsou spotřebitelskými smlouvami a ustanovení o ochraně spotřebitele se na ně nevztahují.</li>
      <li>Smlouva vzniká dokončením registrace, ve které uživatel vyjádří souhlas s těmito podmínkami. Placené období začíná připsáním platby za pronájem na účet poskytovatele.</li>
      <li>Součástí podmínek je smlouva o zpracování osobních údajů v článku 11.</li>
    </ol>

    <h2>2. Pojmy</h2>
    <ul>
      <li><strong>Pokladna</strong> – pokladní systém SuperKasa provozovaný na serveru poskytovatele, který uživatel používá v internetovém prohlížeči na adrese svého obchodu (název.superkasa.cz). Na zařízení uživatele se nic neinstaluje.</li>
      <li><strong>Účet obchodu</strong> – data jednoho uživatele v pokladně (zboží, doklady, uzávěrky, prodavači, nastavení).</li>
      <li><strong>Zařízení</strong> – počítač, tablet nebo telefon, ze kterého se do pokladny pracuje.</li>
      <li><strong>Zkušební doba</strong> – prvních 10 dní od registrace bez poplatku.</li>
    </ul>

    <h2>3. Užívání pokladny</h2>
    <ol>
      <li>Poskytovatel uživateli umožní užívat pokladnu v rozsahu zvoleného tarifu pro podnikání uživatele na území České republiky, na zařízeních podle tarifu (v každém tarifu až 10 zařízení).</li>
      <li>Uživatel nesmí přístup k pokladně dále prodávat, pronajímat ani poskytovat třetím osobám mimo svůj podnik, nesmí obcházet technické ochrany ani pokladnu zneužívat (například k útokům nebo nadměrné zátěži serveru).</li>
      <li>Pokladnu poskytovatel průběžně zlepšuje. Změny mohou měnit vzhled a rozšiřovat funkce; podstatné funkce zvoleného tarifu (prodej, doklady, uzávěrky, export dat, evidence tržeb) poskytovatel bez náhrady neodebere.</li>
    </ol>

    <h2>4. Zkušební doba</h2>
    <ol>
      <li>Prvních 10 dní je pokladna zdarma a nezavazuje uživatele k placení.</li>
      <li>Po skončení zkušební doby pokladna ještě 3 dny upozorňuje na platbu. Pokud platba nepřijde, prodej se zamkne; přístup do Správy (doklady, uzávěrky, export dat, zaplacení) zůstává.</li>
    </ol>

    <h2>5. Cena a platby</h2>
    <ol>
      <li>Cena pronájmu je 189 Kč měsíčně nebo 2 041 Kč ročně, včetně DPH. Placené doplňky mají cenu uvedenou v pokladně (Správa → Systém → Licence) a na webu poskytovatele.</li>
      <li>Platí se předem za celé období bankovním převodem podle QR kódu a platebních údajů zobrazených v pokladně. Platba je splatná nejpozději posledním dnem zaplaceného (nebo zkušebního) období. Po připsání platby se pronájem prodlouží automaticky.</li>
      <li>Daňový doklad k přijaté platbě poskytovatel vystaví do 15 dnů od jejího připsání a zašle ho elektronicky na e-mail uživatele.</li>
      <li>Cenu pro další období může poskytovatel změnit; změnu oznámí e-mailem nejméně 30 dní předem. Nová cena platí jen pro období zaplacená po účinnosti změny.</li>
    </ol>

    <h2>6. Doba trvání a ukončení</h2>
    <ol>
      <li>Pronájem platí do konce zaplaceného období a automaticky se neprodlužuje; pokračuje zaplacením dalšího období.</li>
      <li>Po skončení zaplaceného období pokladna ještě 3 dny umožňuje prodej i evidenci tržeb a zobrazuje upozornění. Poté se prodej zamkne; prohlížení dokladů, uzávěrky a export dat zůstávají dostupné.</li>
      <li>Uživatel může pronájem kdykoli ukončit tím, že další období nezaplatí; za rozběhnuté období se peníze nevracejí. Poskytovatel může smlouvu vypovědět s výpovědní dobou 3 měsíce, nebo s okamžitou účinností při podstatném porušení podmínek uživatelem; při výpovědi poskytovatele vrátí poměrnou část ceny za nevyčerpané období.</li>
      <li>Po skončení smlouvy zůstávají data účtu obchodu k dispozici pro prohlížení a export po dobu 12 měsíců. Poté je poskytovatel smaže, včetně záloh nejpozději do dalších 30 dní. Uchování dokladů po dobu stanovenou zákonem (zejména 10 let podle zákona o DPH) je povinností uživatele – proto si data před koncem této lhůty exportuje.</li>
    </ol>

    <h2>7. Provoz, zálohy a podpora</h2>
    <ol>
      <li>Pokladna běží na serveru v České republice. Poskytovatel usiluje o nepřetržitý provoz; plánované odstávky provádí přednostně v noci a předem na ně upozorní. Krátké výpadky internetu u uživatele pokladna překlene prodejem bez připojení; doklady se odešlou po obnovení spojení.</li>
      <li>Data všech obchodů se zálohují každý den.</li>
      <li>Podporu poskytovatel poskytuje v pracovní dny od 9 do 17 hodin na telefonu ${PHONE} a e-mailu ${EMAIL}. Závady, které znemožňují prodej, řeší přednostně.</li>
    </ol>

    <h2>8. Povinnosti uživatele</h2>
    <ol>
      <li>Uživatel odpovídá za plnění svých zákonných povinností, zejména evidence tržeb (vlastní certifikát a evidenční jednotka u Finanční správy), náležitostí dokladů, cen a jejich označování, a za správnost údajů v pokladně (údaje firmy, ceny, sazby DPH). Předvyplněné sazby DPH a zařazení zboží jsou jen návrhem.</li>
      <li>Uživatel chrání své přihlašovací údaje (e-mail, heslo, PINy prodavačů) a zařízení, ze kterých se do pokladny pracuje, a neprodleně oznámí jejich zneužití.</li>
      <li>Uživatel zajistí připojení k internetu, vhodný prohlížeč a tiskárnu.</li>
    </ol>

    <h2>9. Sdílená databáze názvů zboží</h2>
    <p>Pokladna může dohledat název zboží podle čárového kódu ve sdílené databázi SuperKasa a ve veřejných databázích (Open Food Facts). Pokud uživatel ve Správě zapne přispívání, pokladna do sdílené databáze odesílá čárový kód, název, velikost balení, skupinu a sazbu DPH zboží – nikdy ceny, prodeje ani údaje o obchodě či zákaznících. Uživatel k takto odeslaným údajům uděluje poskytovateli bezúplatné, nevýhradní a časově neomezené oprávnění je užívat a zpřístupnit ostatním uživatelům pokladny.</p>

    <h2>10. Vady a odpovědnost</h2>
    <ol>
      <li>Vady pokladny uživatel oznamuje bez zbytečného odkladu telefonicky nebo e-mailem. Poskytovatel vadu odstraní opravou v přiměřené lhůtě; vady znemožňující prodej zpravidla do následujícího pracovního dne od oznámení.</li>
      <li>Poskytovatel neodpovídá za škodu způsobenou porušením povinností uživatele, nesprávnými údaji zadanými uživatelem, výpadkem internetu, elektřiny nebo zařízení uživatele ani výpadkem systémů třetích stran (včetně systému evidence tržeb Finanční správy).</li>
      <li>Celková náhrada škody, kterou poskytovatel uživateli hradí, je omezena částkou, kterou uživatel poskytovateli zaplatil za posledních 12 měsíců. Omezení se nevztahuje na škodu způsobenou úmyslně nebo z hrubé nedbalosti a na újmu na přirozených právech člověka (§ 2898 občanského zákoníku).</li>
    </ol>

    <h2>11. Smlouva o zpracování osobních údajů</h2>
    <ol>
      <li>Uživatel je správcem osobních údajů, které do pokladny ukládá (zejména údaje prodavačů, zákazníků věrnostního programu, odběratelů na fakturách); poskytovatel je pro něj zpracovává jako zpracovatel podle čl. 28 nařízení (EU) 2016/679 (GDPR), a to po dobu trvání smlouvy a lhůty podle čl. 6 odst. 4.</li>
      <li>Předmětem zpracování je provoz pokladny pro uživatele (ukládání, zálohování, zobrazení, tisk a export dat a odesílání evidovaných tržeb Finanční správě). Zpracovávají se identifikační a kontaktní údaje, údaje o nákupech a docházce a další údaje, které uživatel do pokladny vloží; subjekty údajů jsou zaměstnanci a zákazníci uživatele.</li>
      <li>Poskytovatel zpracovává osobní údaje jen podle pokynů uživatele daných funkcemi pokladny a těmito podmínkami, nepoužívá je pro vlastní účely a zavazuje k mlčenlivosti každého, kdo k nim má přístup.</li>
      <li>Poskytovatel zajišťuje technická a organizační opatření: šifrované spojení (HTTPS), oddělená data každého obchodu, hesla a PINy uložené jen v nevratně zašifrované podobě (hash), omezený a chráněný přístup k serveru, denní zálohy a záznam změn.</li>
      <li>Dalším zpracovatelem je INTERNET CZ, a.s., IČO 26043319 (provoz serveru v České republice). Další zpracovatele poskytovatel zapojí jen po předchozím oznámení uživateli e-mailem; uživatel může do 14 dnů vznést námitku a smlouvu ukončit. Údaje se nepředávají mimo Evropskou unii.</li>
      <li>Poskytovatel uživateli pomáhá vyřizovat žádosti subjektů údajů (export a oprava údajů je dostupná přímo ve Správě), plnit povinnosti podle čl. 32 až 36 GDPR a poskytne mu informace potřebné k doložení plnění povinností.</li>
      <li>Porušení zabezpečení osobních údajů poskytovatel oznámí uživateli bez zbytečného odkladu, nejpozději do 48 hodin od jeho zjištění.</li>
      <li>Po skončení smlouvy poskytovatel data uživateli zpřístupní k exportu a poté je vymaže podle čl. 6 odst. 4.</li>
    </ol>

    <h2>12. Změny podmínek a závěrečná ustanovení</h2>
    <ol>
      <li>Poskytovatel může tyto podmínky měnit. Změnu oznámí uživateli e-mailem nejméně 30 dní před její účinností; pokud uživatel se změnou nesouhlasí, může smlouvu ukončit ke dni účinnosti změny a obdrží poměrnou část ceny za nevyčerpané období.</li>
      <li>Vztahy neupravené těmito podmínkami se řídí právním řádem České republiky, zejména občanským zákoníkem.</li>
      <li>Zpracování osobních údajů uživatelů jako zákazníků poskytovatele popisuje dokument <a href="ochrana-osobnich-udaju.html">Ochrana osobních údajů</a>.</li>
      <li>Podmínky jsou účinné od ${EFFECTIVE}.</li>
    </ol>
  </div>
</section>`,
};

export const gdpr = {
  file: "ochrana-osobnich-udaju.html",
  current: "",
  noindex: false,
  title: "Ochrana osobních údajů – SuperKasa",
  desc: "Jak SuperKasa zachází s osobními údaji na webu superkasa.cz a v pokladně v prohlížeči.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Ochrana osobních údajů</h1>
    <p class="lead">Jak zacházíme s údaji na webu superkasa.cz a v pokladně SuperKasa.</p>
  </div>
</section>
<section class="section" style="padding-top:24px">
  <div class="wrap prose">
    <h2>1. Správce</h2>
    <p>${PROVIDER}, telefon ${PHONE}, e-mail ${EMAIL} (dále „správce“).</p>

    <h2>2. Web superkasa.cz</h2>
    <ul>
      <li>Web nepoužívá cookies, analytické ani reklamní nástroje a nenačítá obsah z cizích serverů.</li>
      <li>Web běží na službě GitHub Pages (GitHub, Inc., USA). Ta technicky zaznamenává přístupy (IP adresu, čas, adresu stránky, údaje o prohlížeči) kvůli provozu a zabezpečení. Předání do USA se opírá o rozhodnutí Evropské komise o odpovídající ochraně (EU-US Data Privacy Framework). Právní základ: oprávněný zájem na provozu a zabezpečení webu (čl. 6 odst. 1 písm. f) GDPR).</li>
    </ul>

    <h2>3. Zájemci a zákazníci SuperKasa</h2>
    <div class="table-wrap"><table class="dtable">
      <thead><tr><th scope="col">Účel</th><th scope="col">Údaje</th><th scope="col">Právní základ</th><th scope="col">Doba uchování</th></tr></thead>
      <tbody>
        <tr><td>Odpověď na dotaz</td><td>jméno, telefon, e-mail, název firmy</td><td>kroky před uzavřením smlouvy, oprávněný zájem</td><td>1 rok od posledního kontaktu</td></tr>
        <tr><td>Účet obchodu, pronájem, podpora</td><td>jméno nebo název, IČO, adresa, e-mail, telefon, údaje o platbách a licenci</td><td>plnění smlouvy (čl. 6 odst. 1 písm. b)</td><td>po dobu smlouvy a 3 roky po jejím skončení (promlčecí lhůta)</td></tr>
        <tr><td>Daňové doklady a účetnictví</td><td>údaje na daňových dokladech</td><td>právní povinnost (čl. 6 odst. 1 písm. c)</td><td>10 let (zákon o DPH)</td></tr>
        <tr><td>Zabezpečení pokladny</td><td>čas přihlášení a záznam změn (kdo a kdy co změnil); server krátkodobě eviduje IP adresy proti zneužití</td><td>oprávněný zájem</td><td>záznam změn po dobu trvání účtu, IP adresy nejvýše 30 dní</td></tr>
      </tbody>
    </table></div>

    <h2>4. Data v pokladně</h2>
    <ul>
      <li>Pokladna běží v prohlížeči; doklady, zboží, prodavači, zákazníci věrnostního programu a další data obchodu jsou uložená na serveru v České republice (INTERNET CZ, a.s.) a denně se zálohují.</li>
      <li>Za osobní údaje, které obchod do pokladny ukládá, odpovídá obchod jako jejich správce; SuperKasa je pro něj zpracovává jako zpracovatel podle smlouvy o zpracování v <a href="obchodni-podminky.html">obchodních podmínkách</a> (čl. 11).</li>
      <li>Pokladna používá jen technicky nezbytnou cookie s přihlášením a ukládá v prohlížeči nastavení zařízení (vzhled, jazyk, rozpracovaný nákup, katalog zboží pro rychlé spuštění). Souhlas k tomu není potřeba.</li>
      <li>Evidované tržby odesílá server SuperKasa do systému evidence tržeb Finanční správy.</li>
      <li>Překlad do dalších jazyků a asistent používají jen funkce prohlížeče přímo v zařízení; text se nikam neodesílá.</li>
      <li>Názvy a obrázky zboží podle čárového kódu se mohou dohledávat ve veřejných databázích (Open Food Facts, Wikimedia Commons); dotaz obsahuje jen čárový kód nebo název zboží.</li>
    </ul>

    <h2>5. Příjemci</h2>
    <p>Údaje zpracovávají tito dodavatelé správce: INTERNET CZ, a.s. (server pokladny, Česká republika), GitHub, Inc. (web superkasa.cz) a osoba vedoucí správci účetnictví. Údaje neprodáváme a nepoužíváme k reklamě.</p>

    <h2>6. Vaše práva</h2>
    <p>Máte právo na přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku proti zpracování na základě oprávněného zájmu. Žádost pošlete na kontakt výše; vyřídíme ji do jednoho měsíce. Stížnost můžete podat u Úřadu pro ochranu osobních údajů (<a href="https://uoou.gov.cz/" rel="noopener">uoou.gov.cz</a>).</p>

    <p class="small">Účinné od ${EFFECTIVE}.</p>
  </div>
</section>`,
};

/** Stránka 404 (odkazy převede sestavení na adresy od kořene webu, protože se zobrazuje na libovolné adrese). */
export const notFound = (c) => {
  const t = c.T.notFound;
  return {
    file: "404.html",
    current: "",
    noindex: true,
    canonicalPath: "index.html",
    title: t.title,
    desc: t.desc,
    body: `
<section class="page-head" style="padding:72px 0">
  <div class="wrap center">
    <h1>${t.h1}</h1>
    <p class="lead" style="margin:0 auto">${t.lead}</p>
    <div class="actions" style="justify-content:center">
      <a class="btn btn-primary" href="index.html">${t.home}</a>
      <a class="btn btn-ghost" href="obory.html">${t.pick}</a>
    </div>
  </div>
</section>`,
  };
};

/**
 * Obchodní podmínky a ochrana osobních údajů ve vietnamštině a angličtině: jen krátká stránka s odkazem na závazné
 * české znění (právní texty jsou koncept a závazné je české znění), k tomu nezávazný přehled hlavních bodů.
 */
export const legalStub = (c, kind) => {
  const t = c.T.legal;
  const op = kind === "op";
  const file = op ? "obchodni-podminky.html" : "ochrana-osobnich-udaju.html";
  return {
    file,
    current: "",
    noindex: true,
    title: `${op ? t.opTitle : t.gdprTitle}${c.T.common.titleSuffix}`,
    desc: op ? t.opDesc : t.gdprDesc,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${op ? t.opH1 : t.gdprH1}</h1>
  </div>
</section>
<section class="section" style="padding-top:24px">
  <div class="wrap prose">
    <div class="note warn">
      <p><strong>${t.noticeTitle}</strong></p>
      <p>${t.notice}</p>
    </div>
    <div class="actions"><a class="btn btn-primary" href="../${file}" hreflang="cs">${t.readCzech}</a></div>
    <h2>${t.summaryTitle}</h2>
    <ul class="checks">
      ${(op ? t.opSummary : t.gdprSummary).map((x) => `<li>${x}</li>`).join("\n      ")}
    </ul>
    <p class="small mt-2">${t.help}</p>
  </div>
</section>`,
  };
};
