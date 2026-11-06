// Obchodní podmínky (včetně smlouvy o zpracování osobních údajů) a zásady ochrany osobních údajů SuperKasa.
// Odpovídají skutečnému provozu: pokladna jen v prohlížeči (SuperKasa Cloud), pronájem 189 Kč/měsíc s DPH, 10 dní zkouška,
// 3 dny tolerance, server INTERNET CZ v ČR. Fakta: src/domain/license.ts, src/services/license.ts, deploy/cloud/zaloha.sh.
// Jen pro podnikatele (B2B); čl. 1.5 je pojistka pro případ, že by smlouvu přesto uzavřel spotřebitel.
// Údaje provozovatele a kontaktní e-mail jsou v parts.mjs (PROVIDER, CONTACT_EMAIL). Dokud je e-mail prázdný, texty ho
// prostě neuvádějí (kontakt je telefon a adresa místa podnikání); po doplnění se sám objeví ve všech větách níže.
import { CONTACT_EMAIL, PROVIDER as P } from "./parts.mjs";

const PHONE = "+420&nbsp;608&nbsp;886&nbsp;882";
const EMAIL = CONTACT_EMAIL ? `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>` : "";
const PROVIDER = `${P.name}, IČO ${P.ico}, místo podnikání ${P.street}, ${P.city}, ${P.register}`;
/** Kontakty do závorky za provozovatelem: telefon a e-mail, je-li doplněný. */
const CONTACTS = `telefon ${PHONE}${EMAIL ? `, e-mail ${EMAIL}` : ""}`;
/** Jak se poskytovateli dá něco oznámit (vady, odstoupení, ukončení). */
const NOTICE_WAYS = `telefonicky na čísle ${PHONE}${EMAIL ? `, e-mailem na ${EMAIL}` : ""} nebo písemně na adresu místa podnikání poskytovatele`;
const EFFECTIVE = "6. 11. 2026";
const VERSION = "2026-11-06";

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
      <li>Tyto obchodní podmínky (dále „podmínky“) upravují pronájem pokladního systému SuperKasa. Poskytovatelem je ${PROVIDER}, ${CONTACTS} (dále „poskytovatel“).</li>
      <li>SuperKasa je určena podnikatelům pro jejich podnikatelskou činnost (dále „uživatel“). Při registraci uživatel uvádí své IČO a souhlasem s těmito podmínkami potvrzuje, že pokladnu objednává v rámci své podnikatelské činnosti. Smlouvy podle těchto podmínek proto nejsou spotřebitelskými smlouvami.</li>
      <li>Smlouva vzniká dokončením registrace, ve které uživatel vyjádří souhlas s těmito podmínkami. Placené období navazuje na konec zkušební doby nebo předchozího zaplaceného období; je-li platba připsána až po jejich skončení, začíná dnem připsání platby.</li>
      <li>Součástí podmínek je smlouva o zpracování osobních údajů v článku 11.</li>
      <li>Pokud by smlouvu přesto uzavřel spotřebitel, může od ní odstoupit bez udání důvodu do 14 dnů ode dne jejího uzavření, a to oznámením poskytovateli ${NOTICE_WAYS}. Pokud požádal o poskytování služby již během této lhůty, uhradí poměrnou část ceny za dobu do odstoupení; zbytek zaplacené částky mu poskytovatel vrátí do 14 dnů od odstoupení stejným způsobem, jakým byla zaplacena. K mimosoudnímu řešení spotřebitelských sporů je příslušná Česká obchodní inspekce (<a href="https://coi.gov.cz/" rel="noopener">coi.gov.cz</a>, <a href="https://coi.gov.cz/informace-o-adr/" rel="noopener">coi.gov.cz/informace-o-adr</a>).</li>
      <li>Smlouva se uzavírá v českém jazyce. Znění podmínek, se kterým uživatel při registraci souhlasil, poskytovatel archivuje spolu s datem souhlasu a na požádání ho uživateli zašle. Chyby v zadaných údajích může uživatel opravit před odesláním registrace, údaje firmy pak kdykoli ve Správě. Poskytovatel není vázán žádným kodexem chování ve smyslu § 1826 odst. 1 písm. e) občanského zákoníku.</li>
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
      <li>Evidence tržeb v systému EET 2.0 je součástí placeného tarifu. Od 1. 1. 2027 proto pokladna bez zaplaceného tarifu nepřejde do ostrého provozu s evidencí tržeb; vystavuje jen zkušební doklady, které se do EET 2.0 neodesílají a nesmí se použít pro skutečný prodej. Výjimkou je uživatel, který evidenci tržeb nepodléhá. Do 31. 12. 2026 vydává pokladna platné doklady i ve zkušební době.</li>
      <li>Po skončení zkušební doby pokladna ještě 3 dny upozorňuje na platbu. Pokud platba nepřijde, prodej se zamkne; přístup do Správy (doklady, uzávěrky, export dat, zaplacení) zůstává.</li>
    </ol>

    <h2>5. Cena a platby</h2>
    <ol>
      <li>Cena pronájmu je 189 Kč měsíčně nebo 2 041 Kč ročně, včetně DPH. Poskytovatel je plátcem DPH. Placené doplňky mají cenu uvedenou v pokladně (Správa → Systém → Licence a tarif) a na webu poskytovatele.</li>
      <li>Platí se předem za celé období bankovním převodem podle QR kódu a platebních údajů zobrazených v pokladně. Chce-li uživatel v pronájmu pokračovat bez přerušení, zaplatí další období nejpozději posledním dnem zaplaceného (nebo zkušebního) období; pronájem prodlouží i platba připsaná během 3denní lhůty podle čl. 4 odst. 3 a čl. 6 odst. 2. Zaplacení dalšího období je na rozhodnutí uživatele: jeho nezaplacením nevzniká dluh ani prodlení, jen smlouva skončí podle čl. 6 odst. 1. Připsanou platbu poskytovatel přiřadí k účtu obchodu (podle variabilního symbolu) a pronájem bez zbytečného odkladu prodlouží o zaplacené období, aniž by uživatel musel cokoli dalšího udělat. Částka, která nepokryje celé období, i přeplatek zůstávají jako kredit a započtou se při další platbě.</li>
      <li>Daňový doklad k přijaté platbě poskytovatel vystaví do 15 dnů od jejího připsání a zašle ho elektronicky na e-mail uživatele.</li>
      <li>Cenu pro další období může poskytovatel změnit; změnu oznámí e-mailem nejméně 30 dní předem. Nová cena platí jen pro období zaplacená po účinnosti změny.</li>
    </ol>

    <h2>6. Doba trvání a ukončení</h2>
    <ol>
      <li>Smlouva se uzavírá na dobu neurčitou. Pronájem platí vždy do konce zaplaceného období a automaticky se neprodlužuje; pokračuje zaplacením dalšího období. Pokud uživatel další období nezaplatí, smlouva skončí uplynutím lhůty 3 dnů podle odstavce 2 (po zkušební době uplynutím 3 dnů po jejím konci).</li>
      <li>Po skončení zaplaceného období pokladna ještě 3 dny umožňuje prodej i evidenci tržeb a zobrazuje upozornění. Poté se prodej zamkne; prohlížení dokladů, uzávěrky a export dat zůstávají dostupné.</li>
      <li>Uživatel může pronájem kdykoli ukončit tím, že další období nezaplatí; cena zaplacená za započaté období se nevrací. Poskytovatel může smlouvu vypovědět s výpovědní dobou 3 měsíce, nebo s okamžitou účinností při podstatném porušení podmínek uživatelem; vypoví-li smlouvu poskytovatel, vrátí uživateli poměrnou část ceny za nevyčerpané období. Uživatel může smlouvu ukončit také oznámením poskytovateli ${NOTICE_WAYS}. Smlouva skončí dnem, který uživatel v oznámení určí, nejpozději však uplynutím zaplaceného (nebo zkušebního) období; neurčí-li den, skončí dnem doručení oznámení. Zaplacená cena se ani v tomto případě za zbytek období nevrací. Na žádost uživatele poskytovatel data smaže dříve, než stanoví odstavec 4.</li>
      <li>Po skončení smlouvy zůstávají data účtu obchodu k dispozici pro prohlížení a export po dobu 12 měsíců. Poté je poskytovatel smaže, včetně záloh nejpozději do dalších 30 dní. Uchování dokladů po dobu stanovenou zákonem (zejména 10 let podle zákona o DPH) je povinností uživatele – proto si data před koncem této lhůty exportuje.</li>
    </ol>

    <h2>7. Provoz, zálohy a podpora</h2>
    <ol>
      <li>Pokladna běží na serveru v České republice. Poskytovatel usiluje o nepřetržitý provoz; plánované odstávky provádí přednostně v noci a předem na ně upozorní. Krátké výpadky internetu u uživatele pokladna překlene prodejem bez připojení; doklady se odešlou po obnovení spojení. Krátkodobé přerušení provozu kvůli údržbě, aktualizaci nebo bezpečnostnímu zásahu není vadou pokladny.</li>
      <li>Data všech obchodů se zálohují každý den; kopie záloh se uchovává i mimo server (14 dní) u poskytovatele v České republice.</li>
      <li>Podporu poskytovatel poskytuje v pracovní dny od 9 do 17 hodin na telefonu ${PHONE}${EMAIL ? ` a e-mailu ${EMAIL}` : ""}. Závady, které znemožňují prodej, řeší přednostně.</li>
    </ol>

    <h2>8. Povinnosti uživatele</h2>
    <ol>
      <li>Uživatel odpovídá za plnění svých zákonných povinností, zejména evidence tržeb (vlastní certifikát a evidenční jednotka u Finanční správy), náležitostí dokladů, cen a jejich označování, a za správnost údajů v pokladně (údaje firmy, ceny, sazby DPH). Předvyplněné sazby DPH a zařazení zboží jsou jen návrhem.</li>
      <li>Uživatel chrání své přihlašovací údaje (e-mail, heslo, PINy prodavačů) a zařízení, ze kterých se do pokladny pracuje, a neprodleně oznámí jejich zneužití.</li>
      <li>Uživatel zajistí připojení k internetu, vhodný prohlížeč a tiskárnu.</li>
      <li>Je-li zaplacen tarif a nastaven platný pokladní certifikát a evidenční jednotka, pokladna odesílá evidované tržby do systému EET 2.0 Finanční správy automaticky; poskytovatel odpovídá za to, že odesílání funguje podle technických pravidel Finanční správy. Uživatel odpovídá za správnost a úplnost evidovaných údajů, za platnost svého pokladního certifikátu a za kontrolu, že se všechny tržby odeslaly (stav ukazuje lišta pokladny). Soukromý klíč pokladního certifikátu poskytovatel uchovává na serveru zašifrovaný a používá ho jen k odesílání tržeb uživatele.</li>
    </ol>

    <h2>9. Sdílená databáze zboží a fotobanka</h2>
    <p>Pokladna může dohledat název, údaje a fotku zboží podle čárového kódu ve sdílené databázi SuperKasa a ve veřejných databázích (Open Food Facts, Wikimedia Commons). Přispívání do sdílené databáze je u každé pokladny zapnuté od začátku; uživatel ho může kdykoli vypnout ve Správě → Systém (volba „Přispívat mým zbožím a fotkami“) a vypnutím se zruší i dosud neodeslané údaje. Při zapnutém přispívání pokladna odesílá u zboží s čárovým kódem (i u zboží založeného před zapnutím) kód, název, velikost balení, skupinu, sazbu DPH a fotku zboží, kterou uživatel do pokladny nahrál. Nikdy neodesílá ceny, nákupní ceny, sklad, prodeje ani údaje o obchodě či zákaznících; vlastní kódy obchodu (váha, PLU) se neodesílají vůbec.</p>
    <p>K odeslaným údajům a fotkám uděluje uživatel poskytovateli bezúplatnou, nevýhradní, územně a časově neomezenou licenci, která zahrnuje právo je užívat, upravovat (zejména zmenšit a ořezat) a zpřístupnit ostatním uživatelům pokladny, a to i po skončení smlouvy. Uživatel odpovídá za to, že k nahraným fotkám má potřebná práva a že na nich nejsou zachyceny osoby. Vypnutím přispívání se další údaje přestanou odesílat; již sdílené údaje v databázi zůstávají.</p>

    <h2>10. Vady a odpovědnost</h2>
    <ol>
      <li>Vady pokladny uživatel oznamuje bez zbytečného odkladu ${NOTICE_WAYS}. Poskytovatel vadu odstraní opravou v přiměřené lhůtě; vady znemožňující prodej zpravidla do následujícího pracovního dne od oznámení.</li>
      <li>Poskytovatel neodpovídá za škodu způsobenou porušením povinností uživatele, nesprávnými údaji zadanými uživatelem, výpadkem internetu, elektřiny nebo zařízení uživatele ani výpadkem systémů třetích stran, které poskytovatel nezajišťuje (zejména systému evidence tržeb Finanční správy, bank, platebních terminálů a připojení uživatele k internetu).</li>
      <li>Celková náhrada škody, kterou poskytovatel uživateli hradí, je omezena částkou, kterou uživatel poskytovateli zaplatil za posledních 12 měsíců, nejméně však částkou odpovídající ceně ročního pronájmu podle čl. 5 odst. 1 (nyní 2&nbsp;041 Kč). Omezení se nevztahuje na škodu způsobenou úmyslně nebo z hrubé nedbalosti a na újmu na přirozených právech člověka (§ 2898 občanského zákoníku).</li>
      <li>Při ztrátě nebo poškození dat poskytovatel obnoví data z poslední denní zálohy.</li>
    </ol>

    <h2>11. Smlouva o zpracování osobních údajů</h2>
    <ol>
      <li>Uživatel je správcem osobních údajů, které do pokladny ukládá (zejména údaje prodavačů, zákazníků věrnostního programu a klientů s rezervací, odběratelů na fakturách); poskytovatel je pro něj zpracovává jako zpracovatel podle čl. 28 nařízení (EU) 2016/679 (GDPR), a to po dobu trvání smlouvy a lhůty podle čl. 6 odst. 4.</li>
      <li>Předmětem zpracování je provoz pokladny pro uživatele (ukládání, zálohování, zobrazení, tisk a export dat a odesílání evidovaných tržeb Finanční správě). Zpracovávají se identifikační a kontaktní údaje, údaje o nákupech, rezervacích (jméno, telefon, termín, služba, poznámka) a docházce, záznamy o činnosti prodavačů v pokladně včetně jejich vyhodnocení v doplňku Kontrola obsluhy a další údaje, které uživatel do pokladny vloží; subjekty údajů jsou zaměstnanci a zákazníci uživatele. Uživatel se zavazuje neukládat do pokladny, zejména do poznámek u zákazníků a rezervací, zvláštní kategorie osobních údajů (například údaje o zdraví či alergiích); pokud tak přesto učiní, odpovídá za zákonnost jejich zpracování sám.</li>
      <li>Poskytovatel zpracovává osobní údaje jen podle pokynů uživatele daných funkcemi pokladny a těmito podmínkami, nepoužívá je pro vlastní účely a zavazuje k mlčenlivosti každého, kdo k nim má přístup. Pokud by podle poskytovatele pokyn uživatele porušoval předpisy o ochraně osobních údajů, neprodleně na to uživatele upozorní.</li>
      <li>Poskytovatel zajišťuje technická a organizační opatření: šifrované spojení (HTTPS), oddělená data každého obchodu, hesla a PINy uložené jen jako jednosměrný otisk se solí (hash), ze kterého je nelze zpětně získat, soukromý klíč pokladního certifikátu uložený zašifrovaně, omezený a chráněný přístup k serveru, denní zálohy a záznam změn.</li>
      <li>Dalším zpracovatelem je INTERNET CZ, a.s., IČO 26043319 (provoz serveru v České republice). Další zpracovatele poskytovatel zapojí jen po předchozím oznámení uživateli e-mailem; uživatel může do 14 dnů vznést námitku a smlouvu ukončit. Dalšího zpracovatele poskytovatel zaváže ke stejným povinnostem ochrany údajů, jaké má sám podle tohoto článku. Kopie záloh mimo server uchovává poskytovatel sám, v České republice, po dobu 14 dní. Údaje se nepředávají mimo Evropskou unii.</li>
      <li>Poskytovatel uživateli pomáhá vyřizovat žádosti subjektů údajů (export a oprava údajů je dostupná přímo ve Správě), plnit povinnosti podle čl. 32 až 36 GDPR, poskytne mu informace potřebné k doložení plnění povinností a umožní audity, včetně kontrol, prováděné uživatelem nebo auditorem, kterého uživatel pověří, po oznámení nejméně 14 dní předem.</li>
      <li>Porušení zabezpečení osobních údajů poskytovatel oznámí uživateli bez zbytečného odkladu, nejpozději do 48 hodin od jeho zjištění.</li>
      <li>Po skončení smlouvy poskytovatel data uživateli zpřístupní k exportu a poté je vymaže podle čl. 6 odst. 4.</li>
    </ol>

    <h2>12. Změny podmínek a závěrečná ustanovení</h2>
    <ol>
      <li>Poskytovatel může tyto podmínky v přiměřeném rozsahu měnit, zejména kvůli změně právních předpisů nebo požadavků úřadů (například evidence tržeb), změně technického řešení pokladny nebo kvůli bezpečnosti; změny cen se řídí čl. 5 odst. 4 a podstatné funkce tarifu chrání čl. 3 odst. 3. Změnu oznámí uživateli e-mailem nejméně 30 dní před její účinností. Pokud uživatel se změnou nesouhlasí, může smlouvu ukončit ke dni účinnosti změny a obdrží poměrnou část ceny za nevyčerpané období. Neukončí-li uživatel smlouvu do dne účinnosti změny, platí, že změnu přijal.</li>
      <li>Oznámení podle těchto podmínek zasílá poskytovatel na e-mail účtu majitele (Správa → Systém → Účet majitele). Uživatel tento e-mail udržuje aktuální. Oznámení se považuje za doručené nejpozději první pracovní den po odeslání, ledaže se vrátí jako nedoručitelné.</li>
      <li>Vztahy neupravené těmito podmínkami se řídí právním řádem České republiky, zejména občanským zákoníkem.</li>
      <li>Zpracování osobních údajů uživatelů jako zákazníků poskytovatele popisuje dokument <a href="ochrana-osobnich-udaju.html">Ochrana osobních údajů</a>.</li>
      <li>Podmínky jsou účinné od ${EFFECTIVE} (verze ${VERSION}).</li>
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
    <p>${PROVIDER}, ${CONTACTS} (dále „správce“).</p>

    <h2>2. Web superkasa.cz</h2>
    <ul>
      <li>Web nepoužívá cookies, analytické ani reklamní nástroje a nenačítá obsah z cizích serverů.</li>
      <li>Web běží na službě GitHub Pages (GitHub, Inc., USA). Ta technicky zaznamenává přístupy (IP adresu, čas, adresu stránky, údaje o prohlížeči) kvůli provozu a zabezpečení. Předání do USA se opírá o rozhodnutí Evropské komise o odpovídající ochraně (EU-US Data Privacy Framework). Právní základ: oprávněný zájem na provozu a zabezpečení webu (čl. 6 odst. 1 písm. f) GDPR).</li>
    </ul>

    <h2>3. Zájemci a zákazníci SuperKasa</h2>
    <div class="table-wrap"><table class="dtable">
      <thead><tr><th scope="col">Účel</th><th scope="col">Údaje</th><th scope="col">Právní základ</th><th scope="col">Doba uchování</th></tr></thead>
      <tbody>
        <tr><td>Odpověď na dotaz</td><td>jméno, telefon, e-mail, název firmy</td><td>kroky před uzavřením smlouvy (čl. 6 odst. 1 písm. b) a oprávněný zájem odpovědět na dotaz (písm. f)</td><td>1 rok od posledního kontaktu</td></tr>
        <tr><td>Smlouva o pronájmu, platby a podpora</td><td>jméno nebo název, IČO, adresa, e-mail, telefon, údaje o platbách a licenci</td><td>plnění smlouvy (čl. 6 odst. 1 písm. b)</td><td>po dobu smlouvy a 3 roky po jejím skončení (promlčecí lhůta)</td></tr>
        <tr><td>Daňové doklady a účetnictví</td><td>údaje na daňových dokladech</td><td>právní povinnost (čl. 6 odst. 1 písm. c)</td><td>10 let (zákon o DPH)</td></tr>
        <tr><td>Zabezpečení pokladny</td><td>čas přihlášení a záznam změn (kdo a kdy co změnil); server krátkodobě eviduje IP adresy proti zneužití</td><td>oprávněný zájem na zabezpečení pokladny a ochraně před zneužitím (čl. 6 odst. 1 písm. f)</td><td>záznam změn spolu s daty obchodu v pokladně (čl. 6 odst. 4 obchodních podmínek), IP adresy nejvýše 30 dní</td></tr>
      </tbody>
    </table></div>
    <p>Údaje potřebné k uzavření a plnění smlouvy jsou nutné – bez nich nelze účet obchodu zřídit; údaje na daňových dokladech vyžaduje zákon. Název a adresu firmy doplňujeme podle IČO z veřejného rejstříku ARES. Automatizované rozhodování ani profilování neprovádíme. Data obchodu v pokladně (zboží, doklady, uzávěrky, záznam změn) se po skončení smlouvy mažou podle čl. 6 odst. 4 obchodních podmínek (po 12 měsících, zálohy nejpozději do dalších 30 dní).</p>

    <h2>4. Data v pokladně</h2>
    <ul>
      <li>Pokladna běží v prohlížeči; doklady, zboží, prodavači, zákazníci věrnostního programu a další data obchodu jsou uložená na serveru v České republice (INTERNET CZ, a.s.) a denně se zálohují; kopie záloh se 14 dní uchovává i mimo server, u správce v České republice.</li>
      <li>Za osobní údaje, které obchod do pokladny ukládá, odpovídá obchod jako jejich správce; SuperKasa je pro něj zpracovává jako zpracovatel podle smlouvy o zpracování v <a href="obchodni-podminky.html">obchodních podmínkách</a> (čl. 11).</li>
      <li>Pokladna používá jen technicky nezbytnou cookie s přihlášením a ukládá v prohlížeči nastavení zařízení (vzhled, jazyk, rozpracovaný nákup, katalog zboží pro rychlé spuštění). Souhlas k tomu není potřeba (§ 89 odst. 3 zákona č. 127/2005 Sb.).</li>
      <li>Evidované tržby odesílá server SuperKasa do systému evidence tržeb Finanční správy.</li>
      <li>Překlad do dalších jazyků a asistent používají jen funkce prohlížeče přímo v zařízení; text se nikam neodesílá.</li>
      <li>Názvy a obrázky zboží podle čárového kódu se mohou dohledávat ve veřejných databázích (Open Food Facts, Wikimedia Commons); dotaz obsahuje jen čárový kód nebo název zboží. Pokud je zapnuté přispívání do sdílené databáze SuperKasa (výchozí stav, jde vypnout ve Správě), odesílají se tam i údaje a fotky zboží podle čl. 9 obchodních podmínek – nikdy ceny, prodeje ani osobní údaje.</li>
    </ul>

    <h2>5. Příjemci</h2>
    <p>Údaje zpracovávají tito dodavatelé správce: INTERNET CZ, a.s., IČO 26043319 (server pokladny, Česká republika), GitHub, Inc. (web superkasa.cz, USA), Google Ireland Limited (e-mailová schránka – komunikace se zákazníky, zasílání daňových dokladů a upozornění na nové registrace) a osoba vedoucí správci účetnictví. Platby procházejí bankou správce; daňové údaje a evidované tržby dostává ze zákona Finanční správa. Předání údajů do USA (GitHub, Google) se opírá o rozhodnutí Evropské komise o odpovídající ochraně (EU-US Data Privacy Framework). Údaje neprodáváme a nepoužíváme k reklamě.</p>

    <h2>6. Vaše práva</h2>
    <p>Máte právo na přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku proti zpracování na základě oprávněného zájmu. Žádost pošlete na kontakt výše; vyřídíme ji do jednoho měsíce. Stížnost můžete podat u Úřadu pro ochranu osobních údajů (<a href="https://uoou.gov.cz/" rel="noopener">uoou.gov.cz</a>).</p>

    <p class="small">Účinné od ${EFFECTIVE} (verze ${VERSION}).</p>
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
 * české znění (překlad nenabízíme, aby nevznikly rozdíly mezi jazyky), k tomu nezávazný přehled hlavních bodů.
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
