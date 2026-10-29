// Obchodní podmínky a ochrana osobních údajů – KONCEPTY k právní kontrole (noindex, nejsou v sitemap).
// Fakta o licenci, zkoušce a datech odpovídají repozitáři pokladny (src/domain/license.ts, src/services/license.ts,
// docs/sdilena-databaze.md, src/katalog, src/services/update.ts, src/services/eanlookup.ts, imagesearch.ts).
const banner = (what) => `
<div class="draft-banner" role="note">
  <strong>KONCEPT – zatím neplatí</strong>
  <p>Tento text je pracovní návrh ${what} a před zveřejněním projde právní kontrolou. Nejde o platné ani závazné znění. Žlutě označená místa je potřeba doplnit nebo ověřit.</p>
</div>`;
const ph = (t) => `<span class="ph">[${t}]</span>`;
const PROVIDER = "Thanh Lam Nguyen, IČO 14161648, místo podnikání 1. května 117/141, 725 25 Ostrava";

export const op = {
  file: "obchodni-podminky.html",
  current: "",
  noindex: true,
  title: "Obchodní podmínky SuperKasa (koncept)",
  desc: "Koncept obchodních podmínek pokladního systému SuperKasa určený k právní kontrole. Zatím neplatí.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Obchodní podmínky</h1>
    <p class="lead">Licence k pokladnímu systému SuperKasa.</p>
  </div>
</section>
<section class="section" style="padding-top:24px">
  <div class="wrap prose">
    ${banner("obchodních podmínek")}

    <h2>1. Úvodní ustanovení</h2>
    <ol>
      <li>Tyto obchodní podmínky upravují poskytnutí licence k pokladnímu programu SuperKasa. Poskytovatelem je ${PROVIDER}, ${ph("doplnit zápis v živnostenském rejstříku")}, telefon +420&nbsp;608&nbsp;886&nbsp;882, e-mail ${ph("doplnit")} (dále „poskytovatel“).</li>
      <li>SuperKasa je určená výhradně podnikatelům pro jejich podnikání (B2B, dále „uživatel“). Smlouvy podle těchto podmínek nejsou spotřebitelské. ${ph("ověřit, zda se program nebude nabízet i spotřebitelům – pak doplnit poučení o odstoupení od smlouvy a další ochranu spotřebitele")}</li>
      <li>Smlouva vzniká ${ph("doplnit – např. potvrzením objednávky poskytovatelem nebo zaplacením první platby")}. Podmínky jsou její součástí; odchylná ujednání ve smlouvě mají přednost.</li>
    </ol>

    <h2>2. Pojmy</h2>
    <ul>
      <li><strong>Pokladna</strong> – program SuperKasa nainstalovaný na počítači uživatele včetně aktualizací.</li>
      <li><strong>Licenční klíč</strong> – elektronicky podepsaný klíč, který uživatel vloží do pokladny a který určuje tarif, dobu platnosti, počet zařízení a uživatele (IČO).</li>
      <li><strong>Zařízení</strong> – počítač, tablet nebo jiné zařízení spárované s pokladnou (další okno pokladny, zákaznický displej a podobně).</li>
      <li><strong>Tarif</strong> – Potraviny, Obchod, Gastro, Nehtové studio nebo Služby; tarify se liší rozsahem funkcí.</li>
      <li><strong>Zkušební režim</strong> – režim, ve kterém jsou doklady označené jako zkušební a neodesílají se do ostrého systému evidence tržeb.</li>
    </ul>

    <h2>3. Licence</h2>
    <ol>
      <li>Poskytovatel uděluje uživateli nevýhradní a nepřevoditelnou licenci k užívání pokladny v rozsahu zvoleného tarifu, pro uživatele uvedeného v licenčním klíči a pro počet zařízení podle tarifu (v každém tarifu až 10 zařízení, další podle dohody).</li>
      <li>Uživatel nesmí pokladnu ani licenční klíč dále prodávat, pronajímat ani poskytovat třetím osobám a nesmí obcházet technické ochrany licence. Práva, která uživateli přiznává zákon (zejména autorský zákon), tím nejsou dotčena.</li>
      <li>Licence je poskytována ${ph("doplnit územní rozsah – např. pro území České republiky")}.</li>
    </ol>

    <h2>4. Zkušební doba</h2>
    <ol>
      <li>Nová instalace běží 10 dní zdarma ve zkušebním režimu. Doklady ve zkušebním režimu jsou označené jako zkušební a do ostrého systému EET 2.0 se neodesílají. Ostrý režim EET je dostupný jen s placenou licencí.</li>
      <li>Po skončení zkušební doby pokladna ještě 7 dní upozorňuje; poté bez licence nový prodej zastaví. Data a jejich export zůstávají uživateli k dispozici.</li>
      <li>Zkušební doba je bezplatná a nezavazuje uživatele k další objednávce.</li>
    </ol>

    <h2>5. Cena a platby</h2>
    <ol>
      <li>Pronájem: 199 Kč měsíčně nebo 2 149 Kč ročně, ceny jsou včetně DPH. Cena je stejná pro všechny tarify.</li>
      <li>Jednorázová koupě: cena podle individuální nabídky; aktualizace jsou v ceně do data uvedeného v licenci.</li>
      <li>Platí se předem za celé období. Způsob platby a splatnost: ${ph("doplnit – faktura, bankovní převod, splatnost")}. Daňový doklad poskytovatel vystaví ${ph("doplnit")}.</li>
      <li>Cenu pro další období může poskytovatel změnit; nová cena platí jen pro období zaplacená po jejím oznámení. ${ph("doplnit lhůtu pro oznámení změny ceny")}</li>
    </ol>

    <h2>6. Doba trvání a konec pronájmu</h2>
    <ol>
      <li>Pronájem platí do data uvedeného v licenčním klíči a automaticky se neprodlužuje. Pokračuje zaplacením dalšího období, po kterém uživatel dostane nový licenční klíč.</li>
      <li>Když licence skončí, pokladna ještě 30 dní umožňuje prodej i odesílání do EET a zobrazuje upozornění. Poté se zastaví nový prodej. Prohlížení dokladů, uzávěrky, vratky a export dat zůstávají dostupné.</li>
      <li>U pokladny nainstalované na počítači uživatele jsou data uložená na tomto počítači; poskytovatel je nemaže a nemá k nim přístup. U pokladny v prohlížeči (SuperKasa Cloud) jsou data uložená na serveru poskytovatele, denně se zálohují a kopie záloh se stahuje na počítač v obchodě. ${ph("doplnit podmínky pro SuperKasa Cloud a smlouvu o zpracování osobních údajů – po právní kontrole")}</li>
      <li>Při jednorázové koupi je licence časově neomezená. Verze vydané po datu „aktualizace do“ uvedeném v licenci nejsou v ceně. ${ph("doplnit podmínky prodloužení aktualizací")}</li>
    </ol>

    <h2>7. Aktualizace a podpora</h2>
    <ol>
      <li>Poskytovatel vydává aktualizace pokladny; pokladna o nich uživatele informuje a instaluje je po potvrzení uživatelem. Aktualizace mohou měnit vzhled a rozšiřovat funkce; podstatné funkce zvoleného tarifu poskytovatel bez náhrady neodebere. ${ph("ověřit")}</li>
      <li>Podpora je poskytována telefonicky na +420&nbsp;608&nbsp;886&nbsp;882 ${ph("doplnit dostupnost podpory a případně e-mail")}. Vzdálenou pomoc na počítači uživatele poskytovatel provádí jen s jeho souhlasem.</li>
    </ol>

    <h2>8. Povinnosti uživatele</h2>
    <ol>
      <li>Uživatel odpovídá za plnění svých zákonných povinností, zejména evidence tržeb, za vlastní pokladní certifikát a evidenční jednotku u Finanční správy a za správnost údajů v pokladně (údaje firmy, ceny, sazby DPH). Sazby DPH předvyplněné ve skupinách zboží jsou jen návrh.</li>
      <li>Uživatel zajistí vhodný počítač a vybavení, připojení k internetu, zabezpečení počítače (heslo, aktualizace systému, antivir) a pravidelné zálohy na další úložiště.</li>
      <li>Uživatel je správcem osobních údajů, které do pokladny ukládá (například údaje prodavačů), a odpovídá za jejich zákonné zpracování.</li>
    </ol>

    <h2>9. Sdílená databáze názvů zboží (připravuje se)</h2>
    <p>Server sdílené databáze zatím neběží; ustanovení platí od jejího spuštění. Pokladna se může zeptat sdílené databáze SuperKasa na název zboží podle čárového kódu. Pokud uživatel ve Správě zapne přispívání, pokladna odesílá čárový kód, název, velikost balení, skupinu a sazbu DPH. Ceny, prodeje ani údaje o obchodě a zákaznících se neodesílají. Uživatel uděluje poskytovateli bezúplatné a časově neomezené oprávnění odeslané názvy používat a sdílet s ostatními pokladnami. ${ph("ověřit formulaci licence k databázi")}</p>

    <h2>10. Vady a odpovědnost</h2>
    <ol>
      <li>Vady pokladny uživatel oznamuje bez zbytečného odkladu na telefonu poskytovatele. Poskytovatel vadu odstraní opravou nebo aktualizací v přiměřené lhůtě. ${ph("doplnit lhůty a postup reklamace")}</li>
      <li>Poskytovatel neodpovídá za škodu způsobenou porušením povinností uživatele, výpadkem internetu, elektřiny, hardwaru nebo systémů třetích stran (včetně systému EET Finanční správy) ani za nesprávné údaje zadané uživatelem.</li>
      <li>${ph("doplnit po právní kontrole – rozsah a případné omezení náhrady škody v mezích § 2898 občanského zákoníku")}</li>
    </ol>

    <h2>11. Změny podmínek</h2>
    <p>Poskytovatel může podmínky měnit. Změnu oznámí uživateli ${ph("doplnit způsob a lhůtu, např. e-mailem nejméně 30 dní předem")}. Pokud uživatel se změnou nesouhlasí, může pronájem ukončit ke konci zaplaceného období.</p>

    <h2>12. Závěrečná ustanovení</h2>
    <ol>
      <li>Vztahy neupravené těmito podmínkami se řídí právním řádem České republiky, zejména občanským zákoníkem.</li>
      <li>Zpracování osobních údajů popisuje dokument <a href="ochrana-osobnich-udaju.html">Ochrana osobních údajů</a>.</li>
      <li>Podmínky jsou účinné od ${ph("doplnit datum")}.</li>
    </ol>
  </div>
</section>`,
};

export const gdpr = {
  file: "ochrana-osobnich-udaju.html",
  current: "",
  noindex: true,
  title: "Ochrana osobních údajů – SuperKasa (koncept)",
  desc: "Koncept zásad ochrany osobních údajů pro web a pokladní systém SuperKasa určený k právní kontrole. Zatím neplatí.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Ochrana osobních údajů</h1>
    <p class="lead">Jak zacházíme s údaji na webu superkasa.cz a v pokladně SuperKasa.</p>
  </div>
</section>
<section class="section" style="padding-top:24px">
  <div class="wrap prose">
    ${banner("zásad ochrany osobních údajů")}

    <h2>1. Správce</h2>
    <p>${PROVIDER}, telefon +420&nbsp;608&nbsp;886&nbsp;882, e-mail ${ph("doplnit e-mail pro dotazy k osobním údajům")} (dále „správce“).</p>

    <h2>2. Web superkasa.cz</h2>
    <ul>
      <li>Web nepoužívá cookies, analytické ani reklamní nástroje a nenačítá obsah z cizích serverů.</li>
      <li>Server webu může technicky zaznamenávat přístupy (IP adresu, čas, adresu stránky a údaje o prohlížeči) kvůli provozu a zabezpečení. Právní základ: oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR). ${ph("doplnit poskytovatele hostingu a dobu uchování záznamů")}</li>
    </ul>

    <h2>3. Zájemci a zákazníci</h2>
    <div class="table-wrap"><table class="dtable">
      <thead><tr><th scope="col">Účel</th><th scope="col">Údaje</th><th scope="col">Právní základ</th><th scope="col">Doba uchování</th></tr></thead>
      <tbody>
        <tr><td>Odpověď na dotaz, domluva zkušební instalace</td><td>jméno, telefon, e-mail, název firmy</td><td>kroky před uzavřením smlouvy, oprávněný zájem</td><td>${ph("doplnit")}</td></tr>
        <tr><td>Licence, fakturace a podpora</td><td>jméno nebo název, IČO, DIČ, adresa, kontakt, číslo licence, tarif</td><td>plnění smlouvy (čl. 6 odst. 1 písm. b)</td><td>po dobu smlouvy a ${ph("doplnit")}</td></tr>
        <tr><td>Účetnictví a daně</td><td>údaje na daňových dokladech</td><td>právní povinnost (čl. 6 odst. 1 písm. c)</td><td>po dobu stanovenou zákony ${ph("ověřit – zákon o účetnictví, zákon o DPH")}</td></tr>
      </tbody>
    </table></div>

    <h2>4. Data v pokladně</h2>
    <ul>
      <li>Platí pro pokladnu nainstalovanou na počítači uživatele: doklady, zboží, prodavači, uzávěrky a další data pokladny jsou uložené na počítači uživatele v jeho provozovně. Správce k nim nemá přístup. Za osobní údaje, které uživatel do pokladny ukládá, odpovídá uživatel jako jejich správce.</li>
      <li>Pokladna pro Windows odesílá tržby přímo do systému EET 2.0 Finanční správy, ne přes servery SuperKasa. U pokladny v prohlížeči je odesílá server SuperKasa.</li>
      <li>Licenční klíč pokladna ověřuje bez internetu.</li>
      <li>Pokladna v prohlížeči (SuperKasa Cloud): doklady, zboží, prodavači a další data obchodu jsou uložená na serveru SuperKasa, denně se zálohují a kopie záloh se stahuje na počítač v obchodě. Majitel se přihlašuje e-mailem a heslem. ${ph("doplnit roli správce a zpracovatele, smlouvu o zpracování, umístění serveru a dobu uchování – po právní kontrole")}</li>
    </ul>

    <h2>5. Kdy se pokladna připojuje k internetu</h2>
    <ul>
      <li><strong>Aktualizace:</strong> pokladna si ze serveru superkasa.cz stahuje popis nové verze a instalátor. Server přitom vidí IP adresu a verzi pokladny. ${ph("ověřit záznamy serveru a dobu jejich uchování")}</li>
      <li><strong>Sdílená databáze názvů zboží (katalog.superkasa.cz, připravuje se – server zatím neběží):</strong> po spuštění se pokladna bude ptát na název podle čárového kódu a požadavky podepisuje vlastním klíčem pokladny. Server ukládá veřejný klíč pokladny, u placených pokladen číslo licence a – jen když uživatel zapne přispívání – čárový kód, název, velikost balení, skupinu a sazbu DPH. Ceny, prodeje ani údaje o obchodě a zákaznících se neodesílají. IP adresa se ukládá jen v denním počítadle proti zneužití a po týdnu se maže. Dohledávání jde ve Správě vypnout.</li>
      <li><strong>Názvy a obrázky zboží z internetu:</strong> pokladna se může ptát služeb Open Food Facts a Wikimedia Commons na název nebo obrázek podle čárového kódu či názvu. Tyto služby vidí dotaz a IP adresu obchodu.</li>
    </ul>

    <h2>6. Příjemci a předání do zahraničí</h2>
    <p>Údaje mohou zpracovávat dodavatelé správce: poskytovatel hostingu a serveru ${ph("doplnit")}, účetní ${ph("doplnit")}. Údaje nepředáváme mimo Evropskou unii ${ph("ověřit podle zvoleného hostingu")}.</p>

    <h2>7. Vaše práva</h2>
    <p>Máte právo na přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku proti zpracování na základě oprávněného zájmu. Žádost pošlete na kontakt výše. Stížnost můžete podat u Úřadu pro ochranu osobních údajů (<a href="https://uoou.gov.cz/" rel="noopener">uoou.gov.cz</a>).</p>

    <p class="small">Účinné od ${ph("doplnit datum")}.</p>
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
