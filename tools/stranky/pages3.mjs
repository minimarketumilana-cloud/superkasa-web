// Obchodní podmínky (včetně smlouvy o zpracování osobních údajů) a zásady ochrany osobních údajů SuperKasa.
// Odpovídají skutečnému provozu: pokladna v prohlížeči (SuperKasa Cloud) nebo v aplikaci SuperKasa (Android, iOS), která
// otevírá tutéž pokladnu ze serveru; pronájem 149 Kč/měsíc s DPH, 10 dní zkouška,
// 3 dny tolerance, server INTERNET CZ v ČR. Fakta: src/domain/license.ts, src/services/license.ts, deploy/cloud/zaloha.sh.
// Upozornění: src/services/webpush.ts (prohlížeč) a nativní FCM/APNs (aplikace); AI: src/katalog/ai.ts, src/services/aisetup.ts.
// VERSION musí být stejná jako TERMS_VERSION v src/services/cloud.ts pokladny (souhlas při registraci).
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
// Verze zůstává 2026-11-19 (= TERMS_VERSION v pokladně). Nové texty o aplikaci SuperKasa (čl. 2, čl. 5a odst. 6, čl. 6
// odst. 5 o smazání účtu majitelem, čl. 11 odst. 5 a 8 se zpracovateli pro upozornění a AI) jsou připravené, ale platit
// smějí až po oznámení stávajícím zákazníkům e-mailem nejméně 30 dní předem (čl. 12 odst. 1) a se lhůtou 14 dní na
// námitku proti novým zpracovatelům (čl. 11 odst. 5). Teprve potom zvednout EFFECTIVE a VERSION a stejně TERMS_VERSION
// v src/services/cloud.ts pokladny (postup v docs/APLIKACE-OBCHODY.md pokladny, kap. 0).
const EFFECTIVE = "19. 11. 2026";
const VERSION = "2026-11-19";

export const op = {
  file: "obchodni-podminky.html",
  current: "",
  noindex: false,
  title: "Obchodní podmínky SuperKasa",
  desc: "Obchodní podmínky pronájmu a koupě licence pokladního systému SuperKasa včetně smlouvy o zpracování osobních údajů.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Obchodní podmínky</h1>
    <p class="lead">Pronájem a koupě licence pokladního systému SuperKasa (pokladna v prohlížeči).</p>
  </div>
</section>
<section class="section u-pt-24">
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
      <li><strong>Pokladna</strong> – pokladní systém SuperKasa provozovaný na serveru poskytovatele, který uživatel používá v internetovém prohlížeči na adrese svého obchodu (název.superkasa.cz), případně v aplikaci SuperKasa pro Android nebo iOS, která tutéž pokladnu otevírá. Data pokladny jsou vždy na serveru poskytovatele, ne v zařízení uživatele.</li>
      <li><strong>Účet obchodu</strong> – data jednoho uživatele v pokladně (zboží, doklady, uzávěrky, prodavači, nastavení).</li>
      <li><strong>Zařízení</strong> – počítač, tablet nebo telefon, ze kterého se do pokladny pracuje.</li>
      <li><strong>Zkušební doba</strong> – prvních 10 dní od registrace bez poplatku.</li>
    </ul>

    <h2>3. Užívání pokladny</h2>
    <ol>
      <li>Poskytovatel uživateli umožní užívat pokladnu v rozsahu zvoleného tarifu pro podnikání uživatele na území České republiky, na zařízeních podle tarifu (v placeném tarifu až 10 zařízení, v tarifu Zdarma 1 zařízení).</li>
      <li>Uživatel nesmí přístup k pokladně dále prodávat, pronajímat ani poskytovat třetím osobám mimo svůj podnik, nesmí obcházet technické ochrany ani pokladnu zneužívat (například k útokům nebo nadměrné zátěži serveru).</li>
      <li>Pokladnu poskytovatel průběžně zlepšuje. Změny mohou měnit vzhled a rozšiřovat funkce; podstatné funkce zvoleného tarifu (prodej, doklady, uzávěrky, export dat, evidence tržeb) poskytovatel bez náhrady neodebere.</li>
    </ol>

    <h2>4. Zkušební doba</h2>
    <ol>
      <li>Prvních 10 dní je pokladna zdarma a nezavazuje uživatele k placení.</li>
      <li>Evidence tržeb v systému EET 2.0 je součástí každého tarifu včetně tarifu Zdarma (čl. 5 odst. 6). Během zkušební doby a lhůty podle odstavce 3 pokladna od 1. 1. 2027 nepřejde do ostrého provozu s evidencí tržeb, dokud uživatel nezaplatí tarif; vystavuje jen zkušební doklady, které se do EET 2.0 neodesílají a nesmí se použít pro skutečný prodej. Výjimkou je uživatel, který evidenci tržeb nepodléhá. Do 31. 12. 2026 vydává pokladna platné doklady i ve zkušební době.</li>
      <li>Po skončení zkušební doby pokladna ještě 3 dny upozorňuje na platbu. Pokud platba nepřijde, pokladna přejde na tarif Zdarma (čl. 5 odst. 6).</li>
    </ol>

    <h2>5. Cena a platby</h2>
    <ol>
      <li>Cena pronájmu je 149 Kč měsíčně nebo 1 490 Kč ročně, včetně DPH. Poskytovatel je plátcem DPH. Placené doplňky mají cenu uvedenou v pokladně (Správa → Systém → Licence a tarif) a na webu poskytovatele. Aktualizace, nové funkce a podpora jsou v ceně pronájmu.</li>
      <li>Platí se předem za celé období bankovním převodem podle QR kódu a platebních údajů zobrazených v pokladně. Chce-li uživatel v pronájmu pokračovat bez přerušení, zaplatí další období nejpozději posledním dnem zaplaceného (nebo zkušebního) období; pronájem prodlouží i platba připsaná během 3denní lhůty podle čl. 4 odst. 3 a čl. 6 odst. 2. Zaplacení dalšího období je na rozhodnutí uživatele: jeho nezaplacením nevzniká dluh ani prodlení, jen pokladna přejde na tarif Zdarma podle odstavce 6. Připsanou platbu poskytovatel přiřadí k účtu obchodu (podle variabilního symbolu) a pronájem bez zbytečného odkladu prodlouží o zaplacené období, aniž by uživatel musel cokoli dalšího udělat. Částka, která nepokryje celé období, i přeplatek zůstávají jako kredit a započtou se při další platbě.</li>
      <li>Daňový doklad k přijaté platbě poskytovatel vystaví do 15 dnů od jejího připsání a zašle ho elektronicky na e-mail uživatele.</li>
      <li>Cenu pro další období může poskytovatel změnit; změnu oznámí e-mailem nejméně 30 dní předem. Nová cena platí jen pro období zaplacená po účinnosti změny. Snížení ceny platí bez této lhůty, protože je v prospěch uživatele.</li>
      <li>Přechodné ustanovení: do 12. 11. 2026 byla cena pronájmu 189 Kč měsíčně a 2 041 Kč ročně. Uživatelé, kteří platili podle dřívější ceny, platí od příštího zaplaceného období novou nižší cenu 149 Kč měsíčně nebo 1 490 Kč ročně. Kredit z dřívějších plateb se započte v nové ceně. Již zaplacené období se nemění a nevzniká z něj nárok na vrácení rozdílu.</li>
      <li>Tarif Zdarma: nemá-li uživatel po skončení zkušební doby nebo zaplaceného období a 3denní lhůty (čl. 4 odst. 3, čl. 6 odst. 2) zaplacený tarif, pokladna bez poplatku přejde na tarif Zdarma. V něm uživatel dál prodává, vystavuje doklady, eviduje tržby v systému EET 2.0, dělá uzávěrky a vratky a exportuje data, a to na 1 zařízení, s nejvýše 300 položkami zboží, bez dalších funkcí tarifu a bez placených doplňků. Zaplacením tarifu se všechny funkce tarifu znovu odemknou.</li>
    </ol>

    <h2>5a. Koupě licence</h2>
    <ol>
      <li>Místo pronájmu může uživatel koupit licenci za 4 000 Kč včetně DPH, jednorázově. Koupě se platí stejně jako pronájem (čl. 5 odst. 2); koupi uživatel zvolí v pokladně, za koupi se považuje i platba přesně 4 000 Kč. Licence se týká tarifu bez placených doplňků; doplňky lze používat jen v pronájmu.</li>
      <li>Koupenou licenci může uživatel používat bez časového omezení. Pokladna běží v SuperKasa Cloud (čl. 3), provoz a zálohy jsou v ceně koupě.</li>
      <li>Po dobu 2 let od zaplacení koupě (u uživatele se zaplaceným pronájmem od konce zaplaceného období) má uživatel v ceně nové funkce, podporu a záruku podle čl. 10. Poté pokladna funguje dál bez omezení, ale bez nových funkcí vydaných po tomto datu a bez podpory.</li>
      <li>Úpravy nutné kvůli právním předpisům (zejména evidence tržeb EET 2.0, změny sazeb a pravidel DPH a povinné náležitosti dokladů) a bezpečnostní opravy dostane koupená licence vždy zdarma, i po skončení 2 let, aby pokladna nebyla v rozporu se zákonem.</li>
      <li>Nové funkce a podporu lze ke koupené licenci kdykoli prodloužit za 990 Kč včetně DPH na rok. Prodloužení navazuje na dosavadní konec; po jeho uplynutí platí ode dne zaplacení a nové funkce se odemknou od tohoto dne.</li>
      <li>Koupená licence zaniká jen výpovědí podle čl. 6 odst. 3 pro podstatné porušení podmínek, smazáním účtu obchodu na žádost uživatele podle čl. 6 odst. 5 nebo ukončením provozu SuperKasa Cloud. Ukončí-li poskytovatel provoz z jiného důvodu než pro porušení podmínek uživatelem, oznámí to nejméně 6 měsíců předem, umožní export dat a vrátí poměrnou část ceny koupě za dobu kratší než 5 let od zaplacení. Ustanovení čl. 6 o nezaplacení dalšího období se na koupenou licenci nevztahuje.</li>
    </ol>

    <h2>6. Doba trvání a ukončení</h2>
    <ol>
      <li>Smlouva se uzavírá na dobu neurčitou. Pronájem platí vždy do konce zaplaceného období a automaticky se neprodlužuje; pokračuje zaplacením dalšího období. Pokud uživatel další období nezaplatí, pokladna po uplynutí lhůty 3 dnů podle odstavce 2 (po zkušební době 3 dnů po jejím konci) přejde na tarif Zdarma (čl. 5 odst. 6) a smlouva pokračuje bez poplatku.</li>
      <li>Po skončení zaplaceného období pokladna ještě 3 dny umožňuje prodej i evidenci tržeb a zobrazuje upozornění. Poté pokladna přejde na tarif Zdarma (čl. 5 odst. 6); prodej, evidence tržeb, doklady, uzávěrky a export dat zůstávají dostupné.</li>
      <li>Uživatel může pronájem kdykoli ukončit tím, že další období nezaplatí (pokladna pak přejde na tarif Zdarma); cena zaplacená za započaté období se nevrací. Poskytovatel může smlouvu vypovědět s výpovědní dobou 3 měsíce, nebo s okamžitou účinností při podstatném porušení podmínek uživatelem; vypoví-li smlouvu poskytovatel, vrátí uživateli poměrnou část ceny za nevyčerpané období. Uživatel může smlouvu ukončit také oznámením poskytovateli ${NOTICE_WAYS}. Smlouva skončí dnem, který uživatel v oznámení určí, nejpozději však uplynutím zaplaceného (nebo zkušebního) období, pokud právě běží; neurčí-li den, skončí dnem doručení oznámení. Zaplacená cena se ani v tomto případě za zbytek období nevrací. Na žádost uživatele poskytovatel data smaže dříve, než stanoví odstavec 4; uživatel o to může požádat i sám v pokladně podle odstavce 5.</li>
      <li>Po skončení smlouvy zůstávají data účtu obchodu k dispozici pro prohlížení a export po dobu 12 měsíců. Poté je poskytovatel smaže, včetně záloh nejpozději do dalších 30 dní. Uchování dokladů po dobu stanovenou zákonem (zejména 10 let podle zákona o DPH) je povinností uživatele – proto si data před koncem této lhůty exportuje.</li>
      <li>Majitel účtu obchodu může smlouvu ukončit a nechat účet obchodu smazat i sám, v pokladně nebo v aplikaci SuperKasa ve Správě → Systém (volba „Zrušit účet a smazat data obchodu“), po zadání hesla majitele a opsání adresy obchodu. Poskytovatel žádost potvrdí na e-mail účtu majitele. Účet obchodu se všemi daty se smaže 30 dní po podání žádosti; do té doby pokladna funguje beze změny a majitel může žádost na stejném místě zrušit. Smazáním účtu smlouva skončí a zaplacená cena za zbytek období se nevrací. Lhůta 12 měsíců podle odstavce 4 se v tomto případě neuplatní: smazaná data nelze obnovit a zálohy s nimi zaniknou nejpozději do dalších 30 dní. Uchování dokladů je povinností uživatele, proto si je před podáním žádosti exportuje. Poskytovatel dál uchovává jen daňové doklady a záznamy o platbách za pronájem nebo licenci, a to po dobu stanovenou zákonem. Postup popisuje i stránka <a href="smazani-uctu.html">Smazání účtu a dat obchodu</a>.</li>
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
      <li>Je-li pokladna v ostrém provozu (čl. 4 odst. 2) a je-li nastaven platný pokladní certifikát a evidenční jednotka, pokladna odesílá evidované tržby do systému EET 2.0 Finanční správy automaticky; poskytovatel odpovídá za to, že odesílání funguje podle technických pravidel Finanční správy. Uživatel odpovídá za správnost a úplnost evidovaných údajů, za platnost svého pokladního certifikátu a za kontrolu, že se všechny tržby odeslaly (stav ukazuje lišta pokladny). Soukromý klíč pokladního certifikátu poskytovatel uchovává na serveru zašifrovaný a používá ho jen k odesílání tržeb uživatele.</li>
    </ol>

    <h2>9. Sdílená databáze zboží a fotobanka</h2>
    <p>Pokladna může dohledat název, údaje a fotku zboží podle čárového kódu ve sdílené databázi SuperKasa a ve veřejných databázích (Open Food Facts, Wikimedia Commons). Přispívání do sdílené databáze je u každé pokladny zapnuté od začátku; uživatel ho může kdykoli vypnout ve Správě → Systém (volba „Přispívat mým zbožím a fotkami“) a vypnutím se zruší i dosud neodeslané údaje. Při zapnutém přispívání pokladna odesílá u zboží s čárovým kódem (i u zboží založeného před zapnutím) kód, název, velikost balení, skupinu, sazbu DPH a fotku zboží, kterou uživatel do pokladny nahrál. Nikdy neodesílá ceny, nákupní ceny, sklad, prodeje ani údaje o obchodě či zákaznících; vlastní kódy obchodu (váha, PLU) se neodesílají vůbec.</p>
    <p>K odeslaným údajům a fotkám uděluje uživatel poskytovateli bezúplatnou, nevýhradní, územně a časově neomezenou licenci, která zahrnuje právo je užívat, upravovat (zejména zmenšit a ořezat) a zpřístupnit ostatním uživatelům pokladny, a to i po skončení smlouvy. Uživatel odpovídá za to, že k nahraným fotkám má potřebná práva a že na nich nejsou zachyceny osoby. Vypnutím přispívání se další údaje přestanou odesílat; již sdílené údaje v databázi zůstávají.</p>

    <h2>10. Vady a odpovědnost</h2>
    <ol>
      <li>Vady pokladny uživatel oznamuje bez zbytečného odkladu ${NOTICE_WAYS}. Poskytovatel vadu odstraní opravou v přiměřené lhůtě; vady znemožňující prodej zpravidla do následujícího pracovního dne od oznámení.</li>
      <li>Poskytovatel neodpovídá za škodu způsobenou porušením povinností uživatele, nesprávnými údaji zadanými uživatelem, výpadkem internetu, elektřiny nebo zařízení uživatele ani výpadkem systémů třetích stran, které poskytovatel nezajišťuje (zejména systému evidence tržeb Finanční správy, bank, platebních terminálů a připojení uživatele k internetu).</li>
      <li>Celková náhrada škody, kterou poskytovatel uživateli hradí, je omezena částkou, kterou uživatel poskytovateli zaplatil za posledních 12 měsíců, nejméně však částkou odpovídající ceně ročního pronájmu podle čl. 5 odst. 1 (nyní 1&nbsp;490 Kč). Omezení se nevztahuje na škodu způsobenou úmyslně nebo z hrubé nedbalosti a na újmu na přirozených právech člověka (§ 2898 občanského zákoníku).</li>
      <li>Při ztrátě nebo poškození dat poskytovatel obnoví data z poslední denní zálohy.</li>
    </ol>

    <h2>11. Smlouva o zpracování osobních údajů</h2>
    <ol>
      <li>Uživatel je správcem osobních údajů, které do pokladny ukládá (zejména údaje prodavačů, zákazníků věrnostního programu a klientů s rezervací, odběratelů na fakturách); poskytovatel je pro něj zpracovává jako zpracovatel podle čl. 28 nařízení (EU) 2016/679 (GDPR), a to po dobu trvání smlouvy a lhůty podle čl. 6 odst. 4.</li>
      <li>Předmětem zpracování je provoz pokladny pro uživatele (ukládání, zálohování, zobrazení, tisk a export dat a odesílání evidovaných tržeb Finanční správě). Zpracovávají se identifikační a kontaktní údaje, údaje o nákupech, rezervacích (jméno, telefon, termín, služba, poznámka) a docházce, záznamy o činnosti prodavačů v pokladně včetně jejich vyhodnocení v doplňku Kontrola obsluhy a další údaje, které uživatel do pokladny vloží; subjekty údajů jsou zaměstnanci a zákazníci uživatele. Uživatel se zavazuje neukládat do pokladny, zejména do poznámek u zákazníků a rezervací, zvláštní kategorie osobních údajů (například údaje o zdraví či alergiích); pokud tak přesto učiní, odpovídá za zákonnost jejich zpracování sám.</li>
      <li>Poskytovatel zpracovává osobní údaje jen podle pokynů uživatele daných funkcemi pokladny a těmito podmínkami, nepoužívá je pro vlastní účely a zavazuje k mlčenlivosti každého, kdo k nim má přístup. Pokud by podle poskytovatele pokyn uživatele porušoval předpisy o ochraně osobních údajů, neprodleně na to uživatele upozorní.</li>
      <li>Poskytovatel zajišťuje technická a organizační opatření: šifrované spojení (HTTPS), oddělená data každého obchodu, hesla a PINy uložené jen jako jednosměrný otisk se solí (hash), ze kterého je nelze zpětně získat, soukromý klíč pokladního certifikátu uložený zašifrovaně, omezený a chráněný přístup k serveru, denní zálohy a záznam změn.</li>
      <li>Dalším zpracovatelem je INTERNET CZ, a.s., IČO 26043319 (provoz serveru v České republice). Jen pokud uživatel příslušnou funkci použije, jsou dalšími zpracovateli také služby, které doručují upozornění do telefonu (v aplikaci SuperKasa Google – Firebase Cloud Messaging na Androidu a Apple – Apple Push Notification service na iOS; v prohlížeči služba výrobce prohlížeče, tj. Google, Apple, Mozilla nebo Microsoft) a k doručení dostanou identifikátor zařízení pro upozornění a text upozornění (v prohlížeči zašifrovaný tak, že ho služba nepřečte), a Anthropic, PBC (návrh skupin zboží pomocí AI podle popisu podnikání, který uživatel napíše při zřízení pokladny). Další zpracovatele poskytovatel zapojí jen po předchozím oznámení uživateli e-mailem; uživatel může do 14 dnů vznést námitku a smlouvu ukončit. Dalšího zpracovatele poskytovatel zaváže ke stejným povinnostem ochrany údajů, jaké má sám podle tohoto článku. Kopie záloh mimo server uchovává poskytovatel sám, v České republice, po dobu 14 dní. Data obchodu uložená v pokladně zůstávají na serveru v České republice. Mimo Evropskou unii (zejména do USA) se mohou dostat jen údaje předávané uvedeným službám upozornění a AI, a to na základě rozhodnutí Evropské komise o odpovídající ochraně (EU-US Data Privacy Framework) nebo standardních smluvních doložek schválených Evropskou komisí.</li>
      <li>Poskytovatel uživateli pomáhá vyřizovat žádosti subjektů údajů (export a oprava údajů je dostupná přímo ve Správě), plnit povinnosti podle čl. 32 až 36 GDPR, poskytne mu informace potřebné k doložení plnění povinností a umožní audity, včetně kontrol, prováděné uživatelem nebo auditorem, kterého uživatel pověří, po oznámení nejméně 14 dní předem.</li>
      <li>Porušení zabezpečení osobních údajů poskytovatel oznámí uživateli bez zbytečného odkladu, nejpozději do 48 hodin od jeho zjištění.</li>
      <li>Po skončení smlouvy poskytovatel data uživateli zpřístupní k exportu a poté je vymaže podle čl. 6 odst. 4, při smazání účtu na žádost uživatele podle čl. 6 odst. 5.</li>
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
  desc: "Jak SuperKasa zachází s osobními údaji na webu superkasa.cz, v pokladně v prohlížeči a v aplikaci SuperKasa pro Android a iOS.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Ochrana osobních údajů</h1>
    <p class="lead">Jak zacházíme s údaji na webu superkasa.cz, v pokladně SuperKasa a v aplikaci SuperKasa pro Android a iOS.</p>
  </div>
</section>
<section class="section u-pt-24">
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
    <p>Údaje potřebné k uzavření a plnění smlouvy jsou nutné – bez nich nelze účet obchodu zřídit; údaje na daňových dokladech vyžaduje zákon. Název a adresu firmy doplňujeme podle IČO z veřejného rejstříku ARES. Automatizované rozhodování ani profilování neprovádíme. Data obchodu v pokladně (zboží, doklady, uzávěrky, záznam změn) se po skončení smlouvy mažou podle čl. 6 odst. 4 obchodních podmínek (po 12 měsících, zálohy nejpozději do dalších 30 dní), při zrušení účtu majitelem 30 dní po žádosti (oddíl 7).</p>

    <h2>4. Data v pokladně</h2>
    <ul>
      <li>Pokladna běží v prohlížeči; doklady, zboží, prodavači, zákazníci věrnostního programu a další data obchodu jsou uložená na serveru v České republice (INTERNET CZ, a.s.) a denně se zálohují; kopie záloh se 14 dní uchovává i mimo server, u správce v České republice.</li>
      <li>Za osobní údaje, které obchod do pokladny ukládá, odpovídá obchod jako jejich správce; SuperKasa je pro něj zpracovává jako zpracovatel podle smlouvy o zpracování v <a href="obchodni-podminky.html">obchodních podmínkách</a> (čl. 11).</li>
      <li>Pokladna používá jen technicky nezbytnou cookie s přihlášením a ukládá v prohlížeči nastavení zařízení (vzhled, jazyk, rozpracovaný nákup, katalog zboží pro rychlé spuštění) a při výpadku internetu i účtenky, které ještě nestihla odeslat na server (po připojení se odešlou). Souhlas k tomu není potřeba (§ 89 odst. 3 zákona č. 127/2005 Sb.).</li>
      <li>Evidované tržby odesílá server SuperKasa do systému evidence tržeb Finanční správy.</li>
      <li>Překlad do dalších jazyků a asistent používají jen funkce prohlížeče přímo v zařízení; text se nikam neodesílá.</li>
      <li>Upozornění do telefonu (prodej, uzávěrka, storno, objednávka) chodí jen tehdy, když je majitel ve Správě zapne, a jen na jedno jeho zařízení. V prohlížeči je doručuje služba výrobce prohlížeče (Google, Apple, Mozilla nebo Microsoft) a obsah zprávy je zašifrovaný tak, že ho tato služba nepřečte. V aplikaci SuperKasa je doručuje Google Firebase Cloud Messaging (Android) nebo Apple Push Notification service (iOS); ty k doručení dostanou identifikátor zařízení pro upozornění (token) a text upozornění. V soukromém režimu upozornění obsahuje jen obecný text bez částek, jmen a položek. Vypnutím upozornění se identifikátor zařízení na serveru smaže.</li>
      <li>Návrh skupin zboží pomocí AI: když majitel při zřízení pokladny nechá navrhnout skupiny zboží podle popisu svého podnikání a na serveru SuperKasa je návrh pomocí AI zapnutý, odešle se tento popis (nic jiného) přes server SuperKasa službě Claude společnosti Anthropic, PBC (USA). Do popisu proto nepište osobní údaje. Jinak pokladna skupiny navrhne podle slov v popisu bez AI.</li>
      <li>Názvy a obrázky zboží podle čárového kódu se mohou dohledávat ve veřejných databázích (Open Food Facts, Wikimedia Commons); dotaz obsahuje jen čárový kód nebo název zboží. Pokud je zapnuté přispívání do sdílené databáze SuperKasa (výchozí stav, jde vypnout ve Správě), odesílají se tam i údaje a fotky zboží podle čl. 9 obchodních podmínek – nikdy ceny, prodeje ani osobní údaje.</li>
    </ul>

    <h2>5. Aplikace SuperKasa pro Android a iOS</h2>
    <ul>
      <li>Aplikace otevírá tutéž pokladnu ze serveru SuperKasa; pro data v ní platí oddíly 3 a 4. Přihlášení probíhá stejně jako v prohlížeči (e-mail a heslo majitele, PIN prodavače).</li>
      <li>Aplikace si v telefonu pamatuje adresu naposledy otevřeného obchodu, aby ho příště otevřela rovnou. Pokladna v ní jako v prohlížeči ukládá technicky nezbytné údaje: cookie s přihlášením zařízení, nastavení zařízení a při výpadku internetu účtenky, které ještě nestihla odeslat na server. Export dat (například seznam dokladů nebo zákazníků) vznikne v telefonu jen jako dočasný soubor pro nabídku Sdílet. Na iPhonu a iPadu ho aplikace smaže po dokončení sdílení, jinak při dalším exportu nebo dalším spuštění aplikace; na Androidu nejpozději při dalším exportu nebo dalším spuštění aplikace (a do hodiny, dokud aplikace běží). Odinstalováním aplikace se všechny tyto údaje z telefonu smažou. Kam si export uložíte nebo komu ho pošlete, určujete sami.</li>
      <li>Aplikace neobsahuje analytické, reklamní ani sledovací nástroje, nezjišťuje polohu a nepoužívá mikrofon ani kontakty.</li>
      <li>Kamera slouží jen ke čtení čárových kódů. Obraz se zpracovává přímo v zařízení a nikam se neodesílá.</li>
      <li>Upozornění do telefonu: viz oddíl 4.</li>
    </ul>

    <h2>6. Příjemci</h2>
    <p>Údaje zpracovávají tito dodavatelé správce: INTERNET CZ, a.s., IČO 26043319 (server pokladny, Česká republika), GitHub, Inc. (web superkasa.cz, USA), Seznam.cz, a.s., IČO 26168685 (e-mailová schránka info@superkasa.cz – komunikace se zákazníky a zasílání daňových dokladů, Česká republika), Google Ireland Limited (e-mailová schránka správce – upozornění na nové registrace) a osoba vedoucí správci účetnictví. Jen při použití příslušné funkce dále: Google (Firebase Cloud Messaging) a Apple (Apple Push Notification service) – doručení upozornění v aplikaci SuperKasa; služby výrobců prohlížečů (Google, Apple, Mozilla, Microsoft) – doručení upozornění v prohlížeči; Anthropic, PBC (USA) – návrh skupin zboží pomocí AI (oddíl 4). Platby procházejí bankou správce; daňové údaje a evidované tržby dostává ze zákona Finanční správa. Data obchodu uložená v pokladně zůstávají na serveru v České republice. Předání údajů do USA (GitHub, Google, Apple, Anthropic a další služby uvedené výše) se opírá o rozhodnutí Evropské komise o odpovídající ochraně (EU-US Data Privacy Framework) nebo o standardní smluvní doložky schválené Evropskou komisí. Údaje neprodáváme a nepoužíváme k reklamě třetích stran. V e-mailech o platbě a licenci SuperKasa může být krátká zmínka o naší další službě E-shop super (oprávněný zájem správce, čl. 6 odst. 1 písm. f) GDPR); proti tomu můžete kdykoli vznést námitku (oddíl 8).</p>

    <h2>7. Zrušení účtu a smazání dat</h2>
    <p>Majitel může účet obchodu zrušit a nechat smazat sám, v pokladně nebo v aplikaci SuperKasa ve Správě → Systém (volba „Zrušit účet a smazat data obchodu“). Obchod se smaže po 30 dnech od žádosti, do té doby lze žádost zrušit; ze záloh data zmizí nejpozději do dalších 30 dní. Co se smaže a co zůstává, popisuje stránka <a href="smazani-uctu.html">Smazání účtu a dat obchodu</a> a čl. 6 <a href="obchodni-podminky.html">obchodních podmínek</a>.</p>

    <h2>8. Vaše práva</h2>
    <p>Máte právo na přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku proti zpracování na základě oprávněného zájmu. Žádost pošlete na kontakt výše; vyřídíme ji do jednoho měsíce. Stížnost můžete podat u Úřadu pro ochranu osobních údajů (<a href="https://uoou.gov.cz/" rel="noopener">uoou.gov.cz</a>).</p>

    <p class="small">Účinné od ${EFFECTIVE} (verze ${VERSION}).</p>
  </div>
</section>`,
};

/**
 * Smazání účtu a dat obchodu (vyžaduje Google Play – veřejná adresa pro „Data deletion“ – a Apple 5.1.1(v)).
 * Ve všech jazycích stejná šablona; čeština je úplná, vietnamština a angličtina stručně s odkazem na české znění.
 * Fakta: src/services/cloud.ts removeTenant (maže databázi, soubory a registr obchodu), deploy/cloud/zaloha.sh
 * (zálohy se přepisují), src/services/account.ts resetPassword (zapomenuté heslo e-mailem a PINem majitele);
 * žádost s lhůtou 30 dní ve Správě → Systém podle docs/APLIKACE-OBCHODY.md v repu pokladny.
 */
export const smazani = (c) => {
  const t = c.T.deletion;
  return {
    file: "smazani-uctu.html",
    current: "",
    noindex: false,
    title: `${t.title}${c.T.common.titleSuffix}`,
    desc: t.desc,
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
  </div>
</section>
<section class="section u-pt-24">
  <div class="wrap prose">
    <h2>${t.appTitle}</h2>
    <p>${t.app}</p>
    <p>${t.providerLabel} ${P.name}, IČO ${P.ico}, ${P.street}, ${P.city}, <a href="tel:+420608886882">${PHONE}</a>${EMAIL ? `, ${EMAIL}` : ""}.</p>

    <h2>${t.howTitle}</h2>
    <ol>
      ${t.steps.map((x) => `<li>${x}</li>`).join("\n      ")}
    </ol>

    <h2>${t.termTitle}</h2>
    <p>${t.term}</p>

    <h2>${t.deletedTitle}</h2>
    <p>${t.deleted}</p>

    <h2>${t.keptTitle}</h2>
    <ul>
      ${t.kept.map((x) => `<li>${x}</li>`).join("\n      ")}
    </ul>

    <h2>${t.partTitle}</h2>
    <p>${t.part}</p>

    <h2>${t.noLoginTitle}</h2>
    <p>${t.noLogin}</p>

    <p class="small">${t.note}</p>
  </div>
</section>`,
  };
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
<section class="page-head u-pad-72">
  <div class="wrap center">
    <h1>${t.h1}</h1>
    <p class="lead u-mx-auto">${t.lead}</p>
    <div class="actions u-jc-center">
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
<section class="section u-pt-24">
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
    <p><a href="smazani-uctu.html">${c.T.deletion.linkText}</a></p>
    <p class="small mt-2">${t.help}</p>
  </div>
</section>`,
  };
};
