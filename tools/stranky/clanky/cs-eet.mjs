// Články o EET 2.0 a dokladech v češtině. Stav podkladů k 31. 10. 2026.
const ZAKON = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/Uplne_zneni_Zakon_o_EET.pdf";
const HARMONOGRAM = "https://eet.gov.cz/cs/o-eet/jaky-je-harmonogram-eet-2-0";
const KDO = "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby";
const PRAKTICKE = "https://eet.gov.cz/cs/zacinam-s-eet/prakticke-informace";
const PRIRUCKA = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/Prirucka_EET_2_0.pdf";
const POLOZKY = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_popis_polozek_datove_zpravy.pdf";

export default [
  {
    slug: "eet-2-0-pruvodce",
    group: "eet",
    kicker: "Základní průvodce",
    title: "EET 2.0: co to je, koho se týká a co musíte udělat",
    metaTitle: "EET 2.0: co to je a koho se týká | SuperKasa",
    desc: "EET 2.0 platí od 1. 1. 2027. Kdo musí evidovat tržby, které platby se evidují, co dělat při výpadku internetu, výše pokuty a sleva na dani 5 000 Kč.",
    lead: "EET 2.0 je nová evidence tržeb a povinnost evidovat začíná 1. 1. 2027. Týká se podnikatelů, kteří přijímají platby při osobním kontaktu se zákazníkem nebo v provozovně. Hotovost se eviduje vždy.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 9,
    sections: [
      {
        id: "co-je-eet",
        h2: "Co je EET 2.0 a od kdy platí",
        html: `
<p>EET 2.0 je elektronická evidence tržeb. Když zákazník zaplatí, vaše pokladna nebo aplikace pošle přes internet Finanční správě několik údajů o platbě. Povinnost evidovat začíná 1. 1. 2027 a stanoví ji zákon č. 180/2026 Sb.</p>
<p>Oproti původnímu EET se posílá méně údajů, tisk účtenky už není povinný a malí podnikatelé mohou použít bezplatnou státní aplikaci. Evidují se jen kontaktní platby.</p>
<ol class="timeline">
  <li><b>1. 11. 2026</b> V DIS+ na portálu MOJE daně jde aktivovat EET, založit evidenční jednotky a vytvořit pokladní certifikát.</li>
  <li><b>1. 12. 2026</b> Podle harmonogramu začne běžet bezplatná webová aplikace MOJE eet.</li>
  <li><b>1. 1. 2027</b> Začíná povinnost evidovat a běžný provoz systému.</li>
  <li><b>Leden 2027</b> Evidence běží v pilotním režimu, který ověřuje provoz v praxi. Podle harmonogramu už jde o standardní evidenci.</li>
  <li><b>11. 1. 2027</b> Poslední den, kdy se můžete pro rok 2027 přihlásit k režimu EET OFF.</li>
</ol>
<aside class="note warn"><p><strong>Pilotní režim není odklad.</strong> Harmonogram Finanční správy i zákon počítají s evidencí od 1. 1. 2027. Pokud ve starším článku najdete jiný začátek, řiďte se zákonem a aktuálním harmonogramem na eet.gov.cz.</p></aside>`,
      },
      {
        id: "koho-se-tyka",
        h2: "Koho se EET 2.0 týká",
        html: `
<p>Evidovat musí podnikatel, který přijímá platby za zboží nebo služby v Česku, pokud platba splní tyto tři podmínky:</p>
<ul>
  <li><strong>Je to příjem z podnikání.</strong> Mzda ze zaměstnání ani nájem mimo podnikání se neeviduje.</li>
  <li><strong>Je to kontaktní platba.</strong> Zákazník platí při osobním kontaktu s vámi nebo s vaším personálem, nebo platí ve vaší provozovně či dopravním prostředku. Hotovost se eviduje vždy, i bez osobního kontaktu.</li>
  <li><strong>Neplatí pro ni žádná výjimka.</strong> Výjimky najdete v další části.</li>
</ul>
<p>Nezáleží na tom, jestli jste OSVČ, nebo s.r.o. Nezáleží ani na tom, jestli jste plátce DPH. Stejná pravidla platí pro cizince, kteří mají příjmy z podnikání v Česku a přijímají tržby tady.</p>
<ul>
  <li><strong>Večerka:</strong> zákazník platí hotově nebo kartou u pokladny. Evidují se obě platby.</li>
  <li><strong>Kadeřnice:</strong> zákaznice platí v salonu kartou, nebo u sebe doma hotově. Eviduje se obojí.</li>
  <li><strong>Bistro:</strong> host platí na místě kartou, stravenkou nebo QR kódem. Evidují se všechny tyto platby.</li>
</ul>`,
      },
      {
        id: "koho-se-netyka",
        h2: "Kdo a co evidovat nemusí",
        html: `
<p>Výjimek je málo. Úplný seznam je na stránce <a href="https://eet.gov.cz/cs/koho-se-eet-tyka/co-je-z-evidence-trzeb-vyjmuto" rel="noopener">Co je z evidence tržeb vyjmuto</a>. Pro malé podnikatele jsou nejčastější tyto:</p>
<ul>
  <li><strong>Režim EET OFF.</strong> OSVČ v 1. pásmu paušální daně s příjmy do 1 milionu Kč může místo evidence platit přirážku. Podmínky jsou v článku <a href="eet-off-pausalni-dan.html">Režim EET OFF</a>.</li>
  <li><strong>Prodejní automaty.</strong> Například automat na kávu, balené nápoje nebo bagety, pokud je samostatnou provozovnou podle živnostenského zákona. Automat, který je jen součástí vaší prodejny, výjimku nemá. Nemají ji ani samoobslužné pokladny, čerpací stanice, mycí linky a prádelny.</li>
  <li><strong>Veřejné toalety.</strong></li>
  <li><strong>Sladkovodní ryby před Vánoci.</strong> Prodej od 18. do 24. prosince v provozovně, kde se v tomto období prodávají jen tyto ryby a související služby.</li>
  <li><strong>Nevidomí podnikatelé.</strong> Platí to za přesných podmínek zákona, například bez zaměstnanců. Podmínky jsou v § 11 zákona.</li>
  <li><strong>Nová právnická osoba.</strong> Tržby do přidělení DIČ a dalších 10 dní po něm.</li>
  <li><strong>Ojedinělý příjem.</strong> Jde o výjimečnou a neočekávanou platbu, se kterou váš běžný provoz nepočítá. Neplatí to pro příjmy, které se opakují.</li>
</ul>
<p>Z evidence jsou vyňaté také tržby státu, obcí, bank, pojišťoven, hazardních her a poštovních služeb.</p>
<aside class="note"><p>Pokud si nejste jistí, tržbu zaevidujte. Finanční správa na svém webu píše, že evidování nad rámec povinnosti nebude rozporovat. Zaevidovat smíte jen údaje, které stanoví zákon.</p></aside>`,
      },
      {
        id: "co-se-eviduje",
        h2: "Které platby se evidují a které ne",
        html: `
<p>Rozhoduje, jak a kde zákazník platí. Na druhu zboží nezáleží.</p>
<div class="tbl"><table>
  <thead><tr><th>Platba</th><th>Evidovat</th></tr></thead>
  <tbody>
    <tr><td>Hotovost v obchodě, v salonu nebo u zákazníka doma</td><td>Ano</td></tr>
    <tr><td>Platební karta nebo mobil na terminálu</td><td>Ano</td></tr>
    <tr><td>QR kód nebo převod zaplacený přímo u vás v provozovně</td><td>Ano</td></tr>
    <tr><td>Stravenky, poukázky, žetony, dárkové a předplacené karty</td><td>Ano</td></tr>
    <tr><td>Šek, směnka, kryptoaktiva</td><td>Ano</td></tr>
    <tr><td>Objednávka z e-shopu, kterou zákazník zaplatí až při vyzvednutí v prodejně</td><td>Ano</td></tr>
    <tr><td>Platba přes platební bránu nebo QR kód na webu e-shopu</td><td>Ne</td></tr>
    <tr><td>Převod za fakturu, který zákazník pošle z domova nebo z kanceláře</td><td>Ne</td></tr>
    <tr><td>Dobírka, kterou od zákazníka převezme provozovatel poštovní služby a pošle vám ji na účet</td><td>Ne</td></tr>
  </tbody>
</table></div>
<h3>Částky a zvláštní případy</h3>
<ul>
  <li><strong>Částka včetně DPH.</strong> Eviduje se celková částka. DPH se po sazbách nerozepisuje.</li>
  <li><strong>Skutečně přijatá částka.</strong> Nákup za 81,60 Kč zaplacený hotově 82 Kč se eviduje jako 82 Kč. Kartou zaplacených 81,60 Kč se eviduje přesně. Po slevě se eviduje cena po slevě.</li>
  <li><strong>Dva způsoby placení.</strong> Zákazník zaplatí 100 Kč stravenkou a 450 Kč kartou. Evidujete jednu tržbu 550 Kč.</li>
  <li><strong>Vrácení peněz.</strong> Vrácené zboží nebo storno se eviduje jako záporná tržba.</li>
  <li><strong>Vratné obaly.</strong> Záloha je součástí tržby. Vrácená záloha se eviduje jako záporná částka, nebo se odečte od nákupu.</li>
  <li><strong>Záloha a doplatek.</strong> Každá platba je samostatná tržba. Záloha poslaná převodem z domova se evidovat nemusí, doplatek hotově v prodejně ano.</li>
  <li><strong>Kauce.</strong> Při složení ani při vrácení se neeviduje. Eviduje se až částka, kterou použijete jako úhradu, například za škodu, pokud jste kauci přijali kontaktní platbou.</li>
  <li><strong>Dárkový poukaz na konkrétní zboží nebo službu.</strong> Eviduje se nákup poukazu. Uplatnění poukazu se už neeviduje.</li>
  <li><strong>Spropitné.</strong> Záleží na tom, komu patří. Když si ho nechává podnik, eviduje se. Když ho dostávají zaměstnanci, evidovat ho nemusíte, ale smíte.</li>
</ul>
<h3>Co se do EET posílá</h3>
<p>Posílá se vaše DIČ, číslo evidenční jednotky, označení pokladního zařízení, pořadové číslo tržby, datum a čas, celková částka a identifikace zprávy. Nabití kreditu a jeho čerpání mají vlastní částky.</p>
<p>Neposílá se seznam zboží, údaje o zákazníkovi ani způsob platby.</p>`,
      },
      {
        id: "jak-probiha",
        h2: "Jak zaevidování probíhá u pokladny",
        html: `
<ol class="steps">
  <li>Zákazník zaplatí a vy platbu zadáte do pokladny.</li>
  <li>Pokladna vytvoří zprávu, podepíše ji pokladním certifikátem a odešle ji Finanční správě.</li>
  <li>Finanční správa zprávu zkontroluje a vrátí potvrzovací kód, kterému se říká POK. Když je ve zprávě chyba, vrátí chybový kód.</li>
  <li>Tržba je zaevidovaná. Přehled najdete v DIS+ v části Evidence tržeb.</li>
</ol>
<p>Zákon říká, že tržbu musíte evidovat nejpozději při jejím uskutečnění. U platby kartou to bývá okamžik, kdy zadáte příkaz k platbě. Dobře nastavená pokladna vše odešle sama a prodej nezdržuje.</p>
<p>V pokladně je nastavená mezní doba odezvy. Je to čas, po který pokladna čeká na POK. Zákon stanoví nejméně 2 sekundy. Dobu nastavte podle kvality svého internetu.</p>
<p>POK na účtence být nemusí a zákon nepřikazuje ho uchovávat. Zákon o EET také neukládá povinnost vydat účtenku. Doklad ale může vyžadovat jiný zákon. Podrobnosti jsou v článku <a href="co-musi-byt-na-uctence.html">Co musí být na účtence</a>.</p>`,
      },
      {
        id: "vypadek-48-hodin",
        h2: "Výpadek internetu a lhůta 48 hodin",
        html: `
<p>Když vypadne internet, prodávejte dál. Tržby odešlete hned po obnovení spojení, nejpozději do 48 hodin od uskutečnění tržby. Většina pokladen to udělá sama.</p>
<p>Příklad z dokumentace Finanční správy: prodejna přijala hotovost 25. 4. 2027 v 15:30. Internet se obnovil další den v 9:30 a tržba odešla v tu chvíli. Lhůta 48 hodin by v tomto případě skončila 27. 4. 2027 v 15:30.</p>
<p>Po 48 hodinách povinnost nezaniká. Tržbu pořád musíte odeslat.</p>
<h3>Porucha pokladny</h3>
<p>Provozovnu kvůli poruše zavírat nemusíte. Finanční správa doporučuje tento postup:</p>
<ul>
  <li>Hned volejte dodavatele nebo servis.</li>
  <li>Poznamenejte si údaje o tržbách, abyste je mohli zaevidovat později.</li>
  <li>Schovejte si doklad o poruše, například servisní protokol nebo potvrzení dodavatele elektřiny.</li>
  <li>Po opravě zaevidujte všechny tržby. Každá se eviduje zvlášť. Souhrnnou částku lze použít jen výjimečně po domluvě se správcem daně.</li>
</ul>
<p>Když se tržba odešle dvakrát se stejnými základními údaji, systém ji označí jako duplicitní a do součtů ji nezapočítá.</p>`,
      },
      {
        id: "pokuty-kontroly",
        h2: "Pokuty a kontroly",
        html: `
<p>Za porušení povinnosti zaslat údaje o tržbě lze uložit pokutu do 500 000 Kč. Stejná horní hranice platí pro závažné ztěžování nebo maření evidence. Je to nejvyšší možná částka, ne pevná sazba.</p>
<p>Plnění povinností prověřují finanční úřady a celní úřady. Celní úřad může pokutu uložit příkazem na místě.</p>
<p>V příručce k EET 2.0 stojí, že Finanční správa bude v úvodní fázi klást důraz hlavně na podporu podnikatelů a poradenství, ne na sankce. Zákon ale žádné období bez pokut nestanoví.</p>`,
      },
      {
        id: "sleva-5000",
        h2: "Sleva na dani až 5 000 Kč",
        html: `
<p>Sleva je v zákoně o daních z příjmů. Využít ji mohou podnikatelé, kteří jsou fyzické osoby a podávají daňové přiznání. S.r.o. ji nemá. Uplatníte ji jednou, za první rok, ve kterém povinně zaevidujete tržbu. Pro většinu podnikatelů to bude rok 2027.</p>
<p>OSVČ, jejíž daň se rovná paušální dani, ji neuplatní, protože přiznání nepodává. Je to náš výklad zákona, Finanční správa to výslovně neuvádí. Ověřte si to u finančního úřadu nebo u účetní.</p>
<p>Sleva nezávisí na počtu pokladen ani na tom, že jste evidovali v původním EET. Nezáleží ani na tom, jestli jste plátce DPH.</p>
<p>Výše slevy se počítá takto: 15 % dílčího základu daně ze samostatné činnosti minus základní sleva na poplatníka, která je <a href="https://e-sbirka.gov.cz/sb/1992/586/2027-01-01" rel="noopener">30 840 Kč</a>. Sleva je nejvýše 5 000 Kč.</p>
<div class="tbl"><table>
  <thead><tr><th>Dílčí základ daně</th><th>15 %</th><th>Po odečtení 30 840 Kč</th><th>Sleva</th></tr></thead>
  <tbody>
    <tr><td>300 000 Kč</td><td>45 000 Kč</td><td>14 160 Kč</td><td>5 000 Kč</td></tr>
    <tr><td>220 000 Kč</td><td>33 000 Kč</td><td>2 160 Kč</td><td>2 160 Kč</td></tr>
    <tr><td>200 000 Kč</td><td>30 000 Kč</td><td>záporné číslo</td><td>0 Kč</td></tr>
  </tbody>
</table></div>
<p>Uplatnění si ověřte se svou účetní nebo daňovým poradcem.</p>`,
      },
      {
        id: "co-je-potreba",
        h2: "Co potřebujete k evidenci",
        html: `
<ul>
  <li><strong>Přístup do DIS+</strong> na portálu MOJE daně.</li>
  <li><strong>Evidenční jednotku.</strong> Je to většinou vaše provozovna.</li>
  <li><strong>Pokladní certifikát.</strong> Je zdarma. Bez něj pokladna tržbu neodešle.</li>
  <li><strong>Zařízení s internetem.</strong> Může to být pokladna, počítač, tablet nebo mobil s vhodným programem.</li>
</ul>
<p>Novou pokladnu většinou kupovat nemusíte. Když už pokladnu máte, zeptejte se dodavatele, jestli bude umět EET 2.0. Přesný postup je v článku <a href="eet-2-0-krok-za-krokem.html">EET 2.0 krok za krokem</a>. Rozdíly mezi státní aplikací a pokladnou popisuje článek <a href="moje-eet-nebo-pokladna.html">MOJE eet, nebo pokladní systém</a>.</p>
<p>Pokud pokladnu teprve vybíráte, SuperKasa má EET 2.0 v každém tarifu a spojení jsme vyzkoušeli v testovacím prostředí Finanční správy. Ceny najdete v <a href="cenik.html">ceníku</a>.</p>`,
      },
    ],
    faq: [
      ["Musím evidovat v lednu 2027, když je pilotní režim?", "Ano. Podle harmonogramu Finanční správy jde v lednu o pilotní režim, ale už o standardní evidenci. Zákon stanoví povinnost od 1. 1. 2027 a žádný odklad neobsahuje."],
      ["Musím kvůli EET tisknout účtenku?", "Ne. Zákon o evidenci tržeb účtenku nepřikazuje. Povinnost vydat doklad ale může vzniknout podle zákona o DPH nebo zákona o ochraně spotřebitele."],
      ["Musím si kvůli EET 2.0 koupit novou pokladnu?", "Ve většině případů ne. Zařízení si vybíráte sami, stačí vhodný program a internet. U staré pokladny obvykle pomůže aktualizace od dodavatele."],
      ["Eviduje se platba kartou?", "Ano, když zákazník platí kartou u vás v provozovně nebo při osobním kontaktu. Platba kartou přes platební bránu na webu e-shopu se neeviduje."],
      ["Eviduje se spropitné?", "Záleží na tom, komu patří. Spropitné, které si nechává podnik, se eviduje. Spropitné pro zaměstnance evidovat nemusíte, ale můžete, pokud v něm chcete mít přehled."],
      ["Musí evidovat i neplátce DPH?", "Ano. Povinnost nezávisí na registraci k DPH. Výjimkou je jen OSVČ, která splní podmínky a přihlásí se k režimu EET OFF."],
    ],
    sources: [
      ["Zákon č. 180/2026 Sb., o evidenci tržeb, úplné znění (eet.gov.cz)", ZAKON],
      ["Harmonogram EET 2.0 (Finanční správa)", HARMONOGRAM],
      ["Kdo musí evidovat tržby (Finanční správa)", KDO],
      ["Praktické informace: výpadek, porucha, sleva na dani (Finanční správa)", PRAKTICKE],
      ["Příručka EET 2.0 (Finanční správa)", PRIRUCKA],
      ["Popis položek datové zprávy s příklady (Finanční správa)", POLOZKY],
    ],
    related: ["eet-2-0-krok-za-krokem", "eet-off-pausalni-dan", "moje-eet-nebo-pokladna"],
  },

  {
    slug: "eet-2-0-krok-za-krokem",
    group: "eet",
    kicker: "Krok za krokem",
    title: "EET 2.0 krok za krokem: DIS+, evidenční jednotka a pokladní certifikát",
    metaTitle: "EET 2.0 krok za krokem: DIS+ a certifikát | SuperKasa",
    desc: "Postup pro EET 2.0: přihlášení do DIS+, založení evidenční jednotky, pokladní certifikát .p12 a heslo, nahrání do pokladny a zkouška ověřovacím módem.",
    lead: "K evidenci tržeb potřebujete přístup do DIS+, založenou evidenční jednotku a pokladní certifikát. Od 1. 11. 2026 to vyřídíte online na portálu MOJE daně a certifikát je zdarma.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 9,
    sections: [
      {
        id: "prehled-kroku",
        h2: "Šest kroků v tomto pořadí",
        html: `
<p>Nejdřív založíte evidenční jednotku, potom vytvoříte certifikát. Pořadí změnit nejde. Stanoví ho zákon a DIS+ vám certifikáty ukáže až po založení první jednotky.</p>
<ol class="steps">
  <li>Přihlásíte se do DIS+ na portálu MOJE daně.</li>
  <li>V DIS+ aktivujete EET.</li>
  <li>Založíte evidenční jednotku.</li>
  <li>Vytvoříte pokladní certifikát a uložíte soubor .p12 s heslem.</li>
  <li>Certifikát nahrajete do pokladny.</li>
  <li>Spojení vyzkoušíte nanečisto.</li>
</ol>
<aside class="note"><p>Kdo bude používat státní aplikaci MOJE eet, kroky 4 a 5 dělat nemusí. Podle Finanční správy si aplikace po spárování s DIS+ zajistí certifikát sama. Porovnání najdete v článku <a href="moje-eet-nebo-pokladna.html">MOJE eet, nebo pokladní systém</a>.</p></aside>`,
      },
      {
        id: "prihlaseni-dis",
        h2: "Krok 1: přihlášení do DIS+ na mojedane.gov.cz",
        html: `
<p>DIS+ je daňová informační schránka plus. Je to online úřad Finanční správy. Otevřete <a href="https://mojedane.gov.cz" rel="noopener">mojedane.gov.cz</a> a klikněte na dlaždici Online finanční úřad. Přihlásit se můžete třemi způsoby:</p>
<ul>
  <li>identitou občana, například bankovní identitou nebo eObčankou,</li>
  <li>přihlašovacími údaji do datové schránky,</li>
  <li>přístupovými údaji, které vám přidělila Finanční správa.</li>
</ul>
<p>Pokud DIS+ ještě nemáte aktivovanou, klikněte po přihlášení na tlačítko Aktivovat. Schránka bude zpřístupněná nejpozději do 48 hodin. Když vás finanční úřad zatím vůbec neeviduje, může proces trvat až 5 pracovních dní.</p>
<h3>Bez identity občana a bez datové schránky</h3>
<p>Tento postup využijí hlavně cizinci. Nejdřív požádáte o přístupové údaje:</p>
<ol class="steps">
  <li>Na portálu klikněte na Online finanční úřad a potom na Jak získat přístup do DIS+.</li>
  <li>U možnosti Přístupové údaje přidělené Finanční správou ČR otevřete Více informací a vyplňte žádost. Potřebujete e-mail, mobilní telefon a heslo, které si zvolíte.</li>
  <li>Údaje vyplňte přesně podle dokladu totožnosti. Chyby v odeslané žádosti nejde opravit, musíte podat novou.</li>
  <li>Uložte si název uživatele a identifikátor žádosti.</li>
  <li>Do 30 dnů osobně navštivte kterékoli územní pracoviště finančního úřadu. Vezměte doklad totožnosti.</li>
</ol>
<p>Na úřad musí přijít stejná osoba, která žádost podala. Může ji zastoupit zmocněnec s úředně ověřenou plnou mocí. U advokáta nebo daňového poradce se úřední ověření nevyžaduje.</p>`,
      },
      {
        id: "aktivace-eet",
        h2: "Krok 2: aktivace EET v DIS+",
        html: `
<p>V horní části stránky DIS+ klikněte na tlačítko AKTIVOVAT EET a v novém okně volbu potvrďte. Potom se zobrazí okno se základními kroky. Zavřete ho tlačítkem ROZUMÍM.</p>
<p>Tím jste přihlášení k evidenci tržeb. Záložku EVIDENCE TRŽEB najdete vedle ikony lupy. Na začátku v ní uvidíte jen dlaždice Údaje o poplatníkovi a správa EET a Správa evidenčních jednotek. Přesný postup je v návodu <a href="https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jak-aktivuji-elektronickou-evidenci-trze-4762" rel="noopener">Jak aktivuji elektronickou evidenci tržeb</a>.</p>`,
      },
      {
        id: "evidencni-jednotka",
        h2: "Krok 3: evidenční jednotka a její typy",
        html: `
<p>Evidenční jednotka je místo nebo způsob, jakým prodáváte. Pro večerku je to prodejna. Pro řemeslníka, který pracuje u zákazníků, je to on sám. V DIS+ vybíráte z šesti druhů:</p>
<div class="tbl"><table>
  <thead><tr><th>Druh</th><th>Příklad</th><th>Co vyplníte</th></tr></thead>
  <tbody>
    <tr><td>Pevná provozovna</td><td>Večerka, kadeřnictví, bistro</td><td>Adresu provozovny</td></tr>
    <tr><td>Mobilní provozovna</td><td>Stánek bez pevného základu, food truck</td><td>Popis umístění</td></tr>
    <tr><td>Automat</td><td>Prodejní automat nebo samoobslužné zařízení</td><td>Adresu nebo popis umístění</td></tr>
    <tr><td>Internetová stránka nebo aplikace</td><td>E-shop</td><td>URL adresu</td></tr>
    <tr><td>Dopravní prostředek</td><td>Taxi, vyhlídková loď</td><td>Typ a registrační značku nebo jinou identifikaci</td></tr>
    <tr><td>Poplatník</td><td>Řemeslník nebo masér u zákazníka</td><td>Adresu sídla</td></tr>
  </tbody>
</table></div>
<h3>Postup založení</h3>
<ol class="steps">
  <li>Na záložce EVIDENCE TRŽEB otevřete Správa evidenčních jednotek a klikněte na NOVÁ EVIDENČNÍ JEDNOTKA.</li>
  <li>Vyberte druh jednotky.</li>
  <li>Vyplňte převažující druh činnosti. Začněte psát a pomůže vám našeptávač.</li>
  <li>Můžete doplnit název, například „Praha - prodejna“. Není povinný, ale v přehledu tržeb se vám bude hodit.</li>
  <li>Označte, jestli se v jednotce uskutečňují evidované tržby. Na otázku o přijímání tržeb na účet jiného poplatníka většina podnikatelů odpoví Ne.</li>
  <li>Vyplňte adresu nebo jiné určení jednotky a klikněte na DOKONČIT A PŘIDAT.</li>
</ol>
<p>Po uložení systém přidělí jednotce číslo. Toto číslo potřebuje vaše pokladna, protože se posílá s každou tržbou. Podrobnosti jsou v návodu <a href="https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jak-zalozim-evidencni-jednotku-4764" rel="noopener">Jak založím evidenční jednotku</a>.</p>
<h3>Oznamte všechny jednotky, i e-shop</h3>
<p>Když máte aspoň jednu jednotku s evidovanými tržbami, musíte oznámit všechny jednotky, přes které máte tržby. Příklad: večerka má prodejnu a e-shop s platbou online. Založí dvě jednotky. U prodejny uvede, že přijímá evidované tržby. U e-shopu uvede, že přijímá jen platby, které se neevidují.</p>
<p>Když žádné evidované tržby nemáte, oznamovací povinnost se vás netýká. Při větším počtu jednotek můžete použít import ze souboru CSV.</p>
<h3>Změny jednotky</h3>
<p>Změnu údajů oznamte v DIS+ před první evidovanou tržbou po změně, nejpozději do 15 dnů. Stejná lhůta 15 dnů platí podle Finanční správy i pro přerušení činnosti nebo zrušení jednotky.</p>`,
      },
      {
        id: "pokladni-certifikat",
        h2: "Krok 4: pokladní certifikát, heslo a soubor .p12",
        html: `
<p>Pokladní certifikát je elektronický podpis pokladny. Podle něj systém pozná, že zprávu posíláte vy a že ji cestou nikdo nezměnil. Je zdarma a zákon vyžaduje, abyste ho získali před první evidovanou tržbou.</p>
<ol class="steps">
  <li>Na záložce EVIDENCE TRŽEB klikněte na dlaždici POKLADNÍ CERTIFIKÁTY.</li>
  <li>Klikněte na VYTVOŘIT NOVÝ CERTIFIKÁT.</li>
  <li>Vyplňte e-mail. Přijde na něj upozornění na konec platnosti. Dodatečně ho doplnit nejde.</li>
  <li>Můžete doplnit označení certifikátu, například „Pokladna prodejna“. Má nejvýše 64 znaků.</li>
  <li>Klikněte na VYTVOŘIT CERTIFIKÁT. Obvykle je hotový do 30 sekund.</li>
  <li>Klikněte na ZOBRAZIT HESLO A STÁHNOUT CERTIFIKÁT. Do počítače se stáhne soubor s koncovkou .p12.</li>
  <li>Uložte si heslo ze zeleného pole. Bez něj certifikát v pokladně nepoužijete.</li>
  <li>Zaškrtněte potvrzení, že máte heslo i certifikát bezpečně uložené, a klikněte na DOKONČIT.</li>
</ol>
<aside class="note warn"><p><strong>Soubor a heslo získáte jen do potvrzení stažení.</strong> Po potvrzení je systém smaže a znovu je nestáhnete. Pokud stažení nepotvrdíte, zůstanou v aplikaci nejdéle 30 dnů od vydání certifikátu. Než kliknete na DOKONČIT, zkontrolujte, že máte soubor i heslo opravdu uložené.</p></aside>
<p>Pokud počítač nemáte u sebe, zvolte VYŘÍDÍM POZDĚJI a vraťte se ke stažení jindy. Při přetížení systému vám přijde e-mail, že je certifikát připravený. Názvy tlačítek přebíráme z návodů Finanční správy, v aplikaci se mohou drobně lišit.</p>
<h3>Platnost a ochrana certifikátu</h3>
<ul>
  <li><strong>Platnost.</strong> Certifikát platí 366 dní. Pro automatickou obnovu doporučuje certifikační autorita termín 2 až 3 týdny před koncem platnosti. Certifikát po konci platnosti už obnovit nejde, musíte vytvořit nový.</li>
  <li><strong>Obnova.</strong> Některé pokladny ji umí samy. Jinak vytvoříte nový certifikát ručně a nahrajete ho.</li>
  <li><strong>Počet.</strong> Jeden certifikát lze použít pro jedno i více pokladních zařízení. Vytvořit si můžete i více certifikátů.</li>
  <li><strong>Bezpečnost.</strong> Soubor a heslo chraňte a neposílejte je nezabezpečeně. Máte to jako zákonnou povinnost. Zneužití nebo jeho hrozbu musíte bez zbytečného odkladu oznámit správci daně.</li>
  <li><strong>Ztráta.</strong> Při ztrátě pokladny nebo podezření na zneužití certifikát zneplatněte. Tento krok je nevratný. Potom si vytvoříte nový.</li>
</ul>`,
      },
      {
        id: "nahrani-do-pokladny",
        h2: "Krok 5: nahrání certifikátu do pokladny",
        html: `
<p>Postup záleží na pokladně, proto se řiďte návodem dodavatele. U většiny řešení potřebujete tyto údaje:</p>
<ul>
  <li>soubor .p12,</li>
  <li>heslo k souboru,</li>
  <li>číslo evidenční jednotky z DIS+.</li>
</ul>
<p>Zkontrolujte, že pokladna uvádí správnou jednotku. Máte-li dvě provozovny, tržba každé z nich musí jít pod její číslo. V přehledu v DIS+ pak uvidíte, jestli se tržby přiřazují správně.</p>
<p>Zkontrolujte také mezní dobu odezvy. Musí být nejméně 2 sekundy.</p>`,
      },
      {
        id: "zkouska-nanecisto",
        h2: "Krok 6: zkouška nanečisto ověřovacím módem",
        html: `
<p>Ověřovací mód je zkušební způsob odeslání. Pokladna pošle zprávu do systému a ten jen ověří, že ji umí zpracovat. Zpráva se nepřijme jako evidovaná tržba.</p>
<p>Zkouškou ověříte nastavení a spojení. Povinnost evidovat tím nesplníte. Před ostrým provozem proto přepněte pokladnu do běžného režimu.</p>
<p>V SuperKase je tato zkouška tlačítko <strong>Ověřit spojení</strong> ve Správě → EET 2.0. Do konce roku 2026 můžete navíc zapnout režim Nanečisto, ve kterém jdou do ověřovacího módu skutečné prodeje. Od 1. 1. 2027 tento režim zapnout nejde. U jiných pokladen se zeptejte dodavatele, jak zkoušku spustit.</p>
<aside class="note"><p>Finanční správa v <a href="https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_pristupove_provozni_informace_produk-2.pdf" rel="noopener">provozních informacích</a> uvádí předpokládané spuštění ostrého prostředí pro veřejnost do 1. 1. 2027. Pokud zkouška hned po vydání certifikátu nevyjde a nastavení máte správně, zkuste ji později znovu a případně se ozvěte dodavateli.</p></aside>`,
      },
      {
        id: "do-1-ledna",
        h2: "Co udělat do 1. 1. 2027",
        html: `
<ol class="timeline">
  <li><b>Hned</b> Ověřte si, jestli se vás evidence týká. Rozhodněte se mezi pokladnou, aplikací MOJE eet a režimem EET OFF. Zeptejte se dodavatele pokladny, jestli bude umět EET 2.0.</li>
  <li><b>Listopad 2026</b> Zařiďte přístup do DIS+, aktivujte EET, založte jednotky a vytvořte certifikát. Hlavně nové firmy a cizinci by neměli čekat, přístup může trvat déle.</li>
  <li><b>1. 12. 2026</b> Podle harmonogramu začne běžet MOJE eet.</li>
  <li><b>Prosinec 2026</b> Nahrajte certifikát, udělejte zkoušku nanečisto a ukažte obsluze, co dělat při výpadku internetu.</li>
  <li><b>1. 1. 2027</b> Začněte evidovat od první tržby. Zkontrolujte, že pokladna dostává POK. Po prvních tržbách se v DIS+ zpřístupní dlaždice SOUČTY a TRŽBY.</li>
</ol>
<p>Lednový pilotní režim je podle harmonogramu standardní evidence. Přípravu proto nenechávejte na leden.</p>`,
      },
      {
        id: "kontrolni-seznam",
        h2: "Kontrolní seznam",
        html: `
<ul>
  <li>Mám přístup do DIS+.</li>
  <li>V DIS+ mám aktivované EET.</li>
  <li>Oznámil jsem všechny evidenční jednotky, přes které mám tržby, i e-shop.</li>
  <li>Mám vytvořený pokladní certifikát s vyplněným e-mailem.</li>
  <li>Soubor .p12 a heslo mám bezpečně uložené mimo pokladnu.</li>
  <li>Certifikát a číslo evidenční jednotky jsou v pokladně.</li>
  <li>Zkouška nanečisto proběhla bez chyby.</li>
  <li>Pokladna je přepnutá do ostrého režimu pro první tržbu v roce 2027.</li>
  <li>Obsluha ví, že při výpadku internetu prodává dál a tržby se musí odeslat do 48 hodin.</li>
  <li>V kalendáři mám datum konce platnosti certifikátu.</li>
</ul>`,
      },
    ],
    faq: [
      ["Kolik stojí pokladní certifikát?", "Nic. Certifikát si vytvoříte zdarma přes DIS+ na portálu MOJE daně."],
      ["Kolik certifikátů potřebuji pro dvě pokladny?", "Stačí jeden. Certifikát lze použít pro jedno i více pokladních zařízení. Pokud chcete mít pokladny oddělené, můžete si vytvořit i více certifikátů."],
      ["Ztratil jsem heslo k certifikátu. Co mám dělat?", "Po potvrzení stažení heslo ani soubor znovu nezískáte. Vytvořte si nový certifikát a nahrajte ho do pokladny. Pokud hrozí zneužití starého, zneplatněte ho v aplikaci Správa pokladních certifikátů EET."],
      ["Jak dlouho platí pokladní certifikát?", "Podle certifikační politiky 366 dní. Na konec platnosti vás upozorní e-mail, pokud jste ho při vytvoření vyplnili."],
      ["Musím založit evidenční jednotku pro e-shop?", "Ano, pokud máte evidované tržby v jiné jednotce, například v prodejně. Když prodáváte jen přes e-shop s platbami online a žádné evidované tržby nemáte, oznamovací povinnost se vás netýká."],
      ["Musí mít cizinec bankovní identitu?", "Ne. Může požádat o přístupové údaje od Finanční správy. Do 30 dnů od žádosti musí osobně navštívit územní pracoviště finančního úřadu s dokladem totožnosti."],
    ],
    sources: [
      ["Zákon č. 180/2026 Sb., § 14, 15, 19 a 20 (eet.gov.cz)", ZAKON],
      ["Jak začít evidovat (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/jak-zacit-evidovat"],
      ["Leták Evidenční jednotka v EET 2.0 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-media/Evidencni_jednotka_EET_2.0.pdf"],
      ["Postupy získání pokladního certifikátu (CA EET)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/CAEET_postupy_zadost_certifikat_v2.pdf"],
      ["Jak vygeneruji pokladní certifikát? (MOJE daně)", "https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/pokladni-certifikaty/jak-vygeneruji-pokladni-certifikat_-2-4771"],
      ["Veřejný souhrn certifikační politiky: platnost 366 dní (CA EET)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/CAEET_certifikacni_politika_v1.pdf"],
      ["Popis datového rozhraní: ověřovací mód, kapitola 2.2 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_popis_rozhrani_v1.2.pdf"],
    ],
    related: ["eet-2-0-pruvodce", "moje-eet-nebo-pokladna", "navod-superkasa"],
  },

  {
    slug: "eet-off-pausalni-dan",
    group: "eet",
    kicker: "Režim EET OFF",
    title: "Režim EET OFF: kdo nemusí evidovat tržby a kolik to stojí",
    metaTitle: "EET OFF: podmínky, lhůty a přirážka | SuperKasa",
    desc: "EET OFF je pro OSVČ v 1. pásmu paušální daně s příjmy do 1 mil. Kč. Přirážka je 1 400 Kč měsíčně a přihlásit se na rok 2027 musíte do 11. 1. 2027.",
    lead: "V režimu EET OFF tržby neevidujete a k paušální dani platíte přirážku 1 400 Kč měsíčně. Je jen pro OSVČ v 1. pásmu paušálního režimu s příjmy do 1 milionu Kč a na rok 2027 se musíte přihlásit nejpozději 11. 1. 2027.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 8,
    sections: [
      {
        id: "co-je-eet-off",
        h2: "Co je EET OFF a kolik stojí",
        html: `
<p>EET OFF je dobrovolný režim pro nejmenší živnostníky. Místo evidence jednotlivých tržeb platíte vyšší paušální daň. Nemusíte pak evidovat žádné platby, ani hotovost.</p>
<p>Paušální režim je zjednodušený způsob placení. Každý měsíc pošlete jednu zálohu, která zahrnuje daň, důchodové pojištění a zdravotní pojištění. Je splatná do 20. dne měsíce. Pokud jste přihlášení k EET OFF, záloha na daň je o přirážku vyšší.</p>
<div class="tbl"><table>
  <thead><tr><th>Položka</th><th>Měsíčně</th><th>Za celý rok</th></tr></thead>
  <tbody>
    <tr><td>Daň v 1. pásmu bez přirážky</td><td>100 Kč</td><td>1 200 Kč</td></tr>
    <tr><td>Přirážka za EET OFF</td><td>1 400 Kč</td><td>16 800 Kč</td></tr>
    <tr><td>Daň celkem</td><td>1 500 Kč</td><td>18 000 Kč</td></tr>
    <tr><td>Sociální a zdravotní pojištění</td><td>podle platných pravidel</td><td>podle platných pravidel</td></tr>
  </tbody>
</table></div>
<p>Za EET OFF tedy zaplatíte oproti běžnému 1. pásmu navíc 16 800 Kč ročně. Pojistné se přihlášením nemění.</p>`,
      },
      {
        id: "kdo-ma-narok",
        h2: "Kdo má na EET OFF nárok",
        html: `
<p>Musíte splnit všechny tyto podmínky:</p>
<ul>
  <li><strong>Jste fyzická osoba.</strong> Pro s.r.o. a jiné právnické osoby režim není.</li>
  <li><strong>Jste v 1. pásmu paušálního režimu.</strong> Paušální režim je podle <a href="https://e-sbirka.gov.cz/sb/1992/586/2027-01-01" rel="noopener">§ 2a zákona o daních z příjmů</a> mimo jiné jen pro neplátce DPH.</li>
  <li><strong>Vaše příjmy ze samostatné činnosti za předchozí rok nepřesáhly 1 000 000 Kč.</strong> Pro rok 2027 se dívá na rok 2026. Nezáleží na tom, z jaké samostatné činnosti příjmy jsou.</li>
  <li><strong>Včas podáte oznámení.</strong> Bez něj se režim nespustí.</li>
</ul>
<aside class="note warn"><p><strong>Pozor na rozdíl limitů.</strong> V 1. pásmu paušálu můžete být podle druhu činnosti i s příjmy do 1,5 nebo 2 milionů Kč. Pro EET OFF ale platí limit 1 milion Kč pro všechny.</p></aside>
<p>Pokud v paušálním režimu ještě nejste, zkontrolujte si i jeho další podmínky. Musíte být OSVČ s důchodovým a zdravotním pojištěním, nesmíte být plátce DPH, společník veřejné obchodní společnosti ani komplementář komanditní společnosti, proti vám nesmí běžet insolvenční řízení a nesmíte mít příjmy ze zaměstnání, až na výjimky ze zákona. Ostatní příjmy, například z nájmu, smějí být nejvýše 50 000 Kč za rok.</p>
<div class="tbl"><table>
  <thead><tr><th>Příklad</th><th>EET OFF</th></tr></thead>
  <tbody>
    <tr><td>Kadeřnice, OSVČ v 1. pásmu paušálu, příjmy za rok 2026 celkem 800 000 Kč</td><td>Může</td></tr>
    <tr><td>Stánek, OSVČ v 1. pásmu paušálu, příjmy za rok 2026 celkem 1 200 000 Kč</td><td>Nemůže, příjmy přesáhly limit</td></tr>
    <tr><td>Večerka, OSVČ a plátce DPH</td><td>Nemůže, plátce DPH není v paušálním režimu</td></tr>
    <tr><td>Bistro jako s.r.o.</td><td>Nemůže, není to fyzická osoba</td></tr>
  </tbody>
</table></div>`,
      },
      {
        id: "lhuty",
        h2: "Lhůty pro přihlášení a odhlášení",
        html: `
<p>Zákon dává lhůtu do desátého dne zdaňovacího období, tedy kalendářního roku. V roce 2027 je 10. leden neděle a Finanční správa uvádí termín 11. 1. 2027.</p>
<div class="tbl"><table>
  <thead><tr><th>Situace</th><th>Lhůta</th></tr></thead>
  <tbody>
    <tr><td>Přihlášení na rok 2027</td><td>Do 11. 1. 2027</td></tr>
    <tr><td>Přihlášení na další roky</td><td>Do desátého dne roku, od kterého se přihlašujete</td></tr>
    <tr><td>Zahájení činnosti během roku a vstup do 1. pásma</td><td>V oznámení o vstupu do paušálního režimu, nejpozději v den zahájení činnosti</td></tr>
    <tr><td>Dobrovolné odhlášení</td><td>Do desátého dne následujícího roku, po roce 2027 tedy do 10. 1. 2028</td></tr>
    <tr><td>Překročení 1 milionu Kč, když zůstáváte v 1. pásmu</td><td>Oznámení do 15 dnů ode dne, kdy to nastalo</td></tr>
  </tbody>
</table></div>
<aside class="note warn"><p><strong>Pozdní oznámení je neúčinné.</strong> Zpoždění nejde napravit a na daný rok se už přihlásit nemůžete. Podejte ho raději v prosinci nebo na začátku ledna.</p></aside>
<p>Přihlášení platí vždy od začátku roku, i když oznámení podáte v lednu. Výjimkou je zahájení činnosti v průběhu roku, kdy se můžete přihlásit i během něj. Přihlášení trvá i v dalších letech, dokud se včas neodhlásíte nebo režim neskončí z jiného důvodu.</p>
<p>Příklad: kadeřnice podá oznámení 15. 12. 2026 a uvede rok 2027. Od 1. 1. 2027 neeviduje a v lednu poprvé platí zálohu s přirážkou. Stejná kadeřnice by oznámením 12. 1. 2027 nic nezískala, protože by bylo po lhůtě. Musela by evidovat celý rok 2027.</p>`,
      },
      {
        id: "jak-se-prihlasit",
        h2: "Jak se k EET OFF přihlásit",
        html: `
<p>Způsob záleží na tom, jestli už v paušálním režimu jste:</p>
<ul>
  <li><strong>Jste v 1. pásmu:</strong> podáte Oznámení o přihlášení k přirážce.</li>
  <li><strong>Přecházíte z 2. nebo 3. pásma do 1. pásma:</strong> přihlásíte se v oznámení o změně pásma.</li>
  <li><strong>Do paušálu teprve vstupujete:</strong> přihlásíte se v oznámení o vstupu do paušálního režimu. Musíte použít předepsaný formulář.</li>
</ul>
<p>Oznámení o přihlášení k přirážce nemá předepsaný formulář. Musí v něm být rok, od kterého se přihlašujete. Finanční správa připravuje nepovinný tiskopis, který zveřejní na svém webu.</p>
<p>Oznámení podáte elektronicky, poštou na příslušný finanční úřad nebo osobně na podatelně. OSVČ, která má datovou schránku zřízenou ze zákona, musí podat oznámení elektronicky.</p>
<ol class="steps">
  <li>Podívejte se na své příjmy ze samostatné činnosti za předchozí rok.</li>
  <li>Ověřte si, že jste v 1. pásmu paušálního režimu.</li>
  <li>Spočítejte si, jestli se vám přirážka vyplatí.</li>
  <li>Podejte oznámení a uschovejte si potvrzení o podání.</li>
  <li>Upravte pravidelnou zálohu, protože se zvyšuje o přirážku.</li>
</ol>`,
      },
      {
        id: "odhlaseni-a-konec",
        h2: "Jak se odhlásit a kdy režim končí",
        html: `
<p>EET OFF nejde během roku změnit. Když ho chcete ukončit, podáte Oznámení o odhlášení z přirážky a uvedete rok, po jehož uplynutí končíte. Lhůta je do desátého dne následujícího roku. Pozdní oznámení je neúčinné.</p>
<p>Příklad: chcete v roce 2028 začít evidovat. Do 10. 1. 2028 podáte oznámení, že přirážku končíte uplynutím roku 2027. Tržby od 1. 1. 2028 už evidujete.</p>
<p>Režim končí také ve dvou dalších případech:</p>
<ul>
  <li><strong>Přesáhnete 1 milion Kč.</strong> Přirážku platíte do konce roku a evidovat začnete od následujícího roku. Příklad: příjmy přesáhnou limit v říjnu 2027. Přirážku platíte do prosince 2027 a od 1. 1. 2028 evidujete.</li>
  <li><strong>Přestanete být v 1. pásmu paušálního režimu.</strong> Přirážka končí uplynutím měsíce nebo roku, kdy jste přestali být v 1. pásmu. Potom musíte evidovat. Pokud skončíte v paušálním režimu úplně, EET OFF a přirážka končí automaticky spolu s ním.</li>
</ul>
<p>Když EET OFF končí, připravte se včas. Před první evidovanou tržbou musíte mít oznámené evidenční jednotky a pokladní certifikát. Postup je v článku <a href="eet-2-0-krok-za-krokem.html">EET 2.0 krok za krokem</a>.</p>
<p>Když během roku přerušíte činnost a v tom samém roce ji znovu zahájíte, jste znovu přihlášení k přirážce automaticky. Musíte ale podat oznámení o vstupu do paušálního režimu a uvést v něm 1. pásmo.</p>`,
      },
      {
        id: "na-co-si-dat-pozor",
        h2: "Na co si dát pozor",
        html: `
<ul>
  <li><strong>Přirážka se platí bez ohledu na obrat.</strong> Když máte málo zákazníků, je to pořád 16 800 Kč ročně. Porovnejte to s tím, kolik by vás stála evidence. Státní aplikace <a href="moje-eet-nebo-pokladna.html">MOJE eet</a> má být pro malé podnikatele zdarma, potřebujete k ní jen zařízení s internetem. Když už pokladnu používáte, spočítejte si roční cenu licence a aktualizací.</li>
  <li><strong>Sleva na evidenci tržeb.</strong> V paušálním režimu se sleva neuplatňuje, ať evidujete, nebo ne. Do porovnání s přirážkou ji nepočítejte. Je to náš výklad zákona, ověřte si ho u finančního úřadu nebo u účetní.</li>
  <li><strong>EET OFF neruší doklady.</strong> Na žádost spotřebitele musíte vydat doklad o koupi podle zákona o ochraně spotřebitele. Více je v článku <a href="co-musi-byt-na-uctence.html">Co musí být na účtence</a>.</li>
  <li><strong>Neoznamujete evidenční jednotky.</strong> Bez evidovaných tržeb se vás oznamovací povinnost v DIS+ netýká a certifikát nepotřebujete.</li>
  <li><strong>Sledujte příjmy během roku.</strong> Překročení 1 milionu Kč znamená evidenci od dalšího roku a může vyžadovat oznámení do 15 dnů. Do limitu se nepočítají příjmy od daně osvobozené, příjmy, které nejsou předmětem daně, a příjmy zdaněné srážkou.</li>
  <li><strong>Nastavte pokladnu.</strong> Když pokladnu používáte i v EET OFF, nastavte ji tak, aby tržby neodesílala. V SuperKase je pro to volba Tržby evidovat nemusím ve Správě → EET 2.0. Pokladna s ní přejde do ostrého provozu i bez certifikátu a čísla evidenční jednotky, během zkoušky zdarma i bez placené licence. Volba nejde použít, když už ostré EET jednou běželo.</li>
</ul>
<p>Správnost volby EET OFF je vaše odpovědnost. Pokud si nejste jistí příjmy nebo pásmem, zeptejte se účetní nebo infolinky Finanční správy na čísle 953 109 109.</p>`,
      },
    ],
    faq: [
      ["Do kdy se musím přihlásit k EET OFF na rok 2027?", "Do 11. 1. 2027. Zákon uvádí desátý den roku, ale 10. 1. 2027 je neděle a Finanční správa uvádí 11. leden. Pozdní oznámení je neúčinné."],
      ["Můžu mít EET OFF, když mám s.r.o.?", "Ne. Režim je určený výhradně fyzickým osobám v 1. pásmu paušálního režimu."],
      ["Jsem plátce DPH. Můžu využít EET OFF?", "Ne. EET OFF je jen pro poplatníky v paušálním režimu a v tom může být jen neplátce DPH."],
      ["Co se stane, když během roku přesáhnu 1 milion Kč?", "Přirážku platíte do konce roku a evidovat začnete od následujícího roku. Pokud zůstáváte v 1. pásmu, musíte to oznámit správci daně do 15 dnů."],
      ["Můžu z EET OFF odejít v průběhu roku?", "Ne. Změna platí vždy od začátku dalšího kalendářního roku a oznámení podáte do desátého dne tohoto roku."],
      ["Kolik zaplatím v EET OFF měsíčně?", "Daň je 1 500 Kč měsíčně, tedy 100 Kč základ a 1 400 Kč přirážka. K tomu platíte sociální a zdravotní pojištění podle platných pravidel."],
    ],
    sources: [
      ["Co je režim EET OFF (Finanční správa)", "https://eet.gov.cz/cs/eet-off/co-je-rezim-eet-off"],
      ["Jak a kdy se přihlásit k režimu EET OFF (Finanční správa)", "https://eet.gov.cz/cs/eet-off/jak-a-kdy-se-prihlasit-k-rezimu-eet-off"],
      ["Jak ukončit režim EET OFF (Finanční správa)", "https://eet.gov.cz/cs/eet-off/jak-ukoncit-rezim-eet-off"],
      ["Specifické situace v režimu EET OFF (Finanční správa)", "https://eet.gov.cz/cs/eet-off/specificke-situace"],
      ["Zákon č. 180/2026 Sb., § 11 a změna zákona o daních z příjmů v § 30 (eet.gov.cz)", ZAKON],
      ["Příručka EET 2.0, kapitola o dobrovolném režimu (Finanční správa)", PRIRUCKA],
    ],
    related: ["eet-2-0-pruvodce", "moje-eet-nebo-pokladna", "co-musi-byt-na-uctence"],
  },

  {
    slug: "moje-eet-nebo-pokladna",
    group: "eet",
    kicker: "Výběr řešení",
    title: "MOJE eet, nebo pokladní systém: co státní aplikace umí a co ne",
    metaTitle: "MOJE eet, nebo pokladna: srovnání | SuperKasa",
    desc: "MOJE eet je státní aplikace zdarma pro nejvýše 2 evidenční jednotky, spuštění 1. 12. 2026. Co podle zveřejněných informací umí a kdy je lepší pokladna.",
    lead: "MOJE eet je bezplatná webová aplikace Finanční správy pro evidenci tržeb a její spuštění je plánované na 1. 12. 2026. Stačit může tam, kde chcete jen evidovat málo plateb, pokladní systém dává smysl, když potřebujete také sklad, tisk a přehled o provozu.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 7,
    sections: [
      {
        id: "pro-koho-ktera-cesta",
        h2: "Pro koho se hodí která cesta",
        html: `
<p>MOJE eet je určená hlavně malým podnikatelům s menším počtem plateb a nejvýše 2 evidenčními jednotkami. Pokladní systém je vhodnější, když potřebujete víc než samotnou evidenci. Popis vychází z informací Finanční správy zveřejněných do 31. 10. 2026.</p>
<div class="tbl"><table>
  <thead><tr><th>Situace</th><th>Rozumná volba</th></tr></thead>
  <tbody>
    <tr><td>Kadeřnice bez zaměstnanců, pár zákaznic denně, několik druhů služeb</td><td>MOJE eet může stačit</td></tr>
    <tr><td>Stánek s malým sortimentem a mobilem nebo tabletem</td><td>MOJE eet může stačit</td></tr>
    <tr><td>Večerka se stovkami položek a čtečkou kódů</td><td>Pokladní systém</td></tr>
    <tr><td>Bistro se zaměstnanci a tržbami po směnách</td><td>Pokladní systém</td></tr>
    <tr><td>Tři provozovny</td><td>Pokladní systém, MOJE eet je určená pro nejvýše 2 jednotky</td></tr>
    <tr><td>Malý podnikatel, který už pokladnu má</td><td>Nejdřív se zeptejte dodavatele na aktualizaci</td></tr>
  </tbody>
</table></div>
<p>OSVČ v 1. pásmu paušálu má ještě třetí možnost, <a href="eet-off-pausalni-dan.html">režim EET OFF</a>. V něm tržby neeviduje a platí přirážku.</p>`,
      },
      {
        id: "co-moje-eet-umi",
        h2: "Co MOJE eet podle Finanční správy umí",
        html: `
<p>Aplikace zatím neběží, proto vycházíme z popisu Finanční správy. Podle něj bude:</p>
<ul>
  <li>zdarma,</li>
  <li>dostupná v běžném webovém prohlížeči bez instalace,</li>
  <li>použitelná na zařízeních připojených k internetu, například na tabletu,</li>
  <li>propojená s DIS+ a s certifikační autoritou EET,</li>
  <li>schopná evidovat tržby podle zákona,</li>
  <li>schopná v případě potřeby automaticky odeslat zprávu znovu,</li>
  <li>vybavená možností vytvořit si katalog zboží a služeb s předdefinovanými položkami a cenami,</li>
  <li>schopná vytvořit doklad ve formátu PDF.</li>
</ul>
<p>Certifikát si podle Finanční správy aplikace zajistí sama, takže ho nemusíte stahovat ani nahrávat. V DIS+ ale aplikaci musíte spárovat. Slouží k tomu dlaždice PROFILY MOJE EET, která se zobrazí po založení první evidenční jednotky.</p>`,
      },
      {
        id: "limity",
        h2: "Pro koho je MOJE eet určená a jaké má limity",
        html: `
<p>Na webu eet.gov.cz stojí, že aplikace je určená zejména malým podnikatelům s nižším objemem transakcí a nejvýše 2 evidenčními jednotkami. Prezentace pro vývojáře z června 2026 uvádí navíc nejvýše 2 zaměstnance a nízký objem transakcí.</p>
<p>Přesná hranice objemu zveřejněná není. Z dostupných textů také není jasné, jestli limit zaměstnanců bude v aplikaci platit a jestli se dá technicky překročit. Než na aplikaci postavíte provoz, ověřte si podmínky přímo na eet.gov.cz nebo na infolince 953 109 109.</p>`,
      },
      {
        id: "co-neni-dolozene",
        h2: "Co o MOJE eet zatím není doložené",
        html: `
<p>Následující funkce jsme v materiálech Finanční správy nenašli. Neznamená to, že aplikace nikdy umět nebudou. Znamená to, že dnes na ně nespoléhejte.</p>
<div class="tbl"><table>
  <thead><tr><th>Funkce</th><th>MOJE eet podle zveřejněných informací</th><th>U pokladního systému</th></tr></thead>
  <tbody>
    <tr><td>Sklad a příjem zboží</td><td>Neuvádí se. Uvádí se jen katalog položek a cen.</td><td>Zeptejte se dodavatele</td></tr>
    <tr><td>Tisk na pokladní tiskárně</td><td>Neuvádí se. Uvádí se doklad v PDF.</td><td>Zeptejte se, jaké tiskárny podporuje</td></tr>
    <tr><td>Tržby po směnách a uzávěrky</td><td>Neuvádí se</td><td>Zeptejte se dodavatele</td></tr>
    <tr><td>Čtečka kódů, zásuvka, váha</td><td>Neuvádí se</td><td>Zeptejte se dodavatele</td></tr>
    <tr><td>Propojení s platebním terminálem</td><td>Neuvádí se</td><td>Zeptejte se dodavatele</td></tr>
    <tr><td>Prodej bez internetu</td><td>Neuvádí se. Uvádí se automatické opakované odeslání.</td><td>Zeptejte se, jak odesílá tržby po výpadku</td></tr>
    <tr><td>Export dat pro účetní</td><td>Neuvádí se</td><td>Zeptejte se, v jakém formátu</td></tr>
    <tr><td>Účty pro zaměstnance a oprávnění</td><td>Neuvádí se</td><td>Zeptejte se dodavatele</td></tr>
  </tbody>
</table></div>
<p>Pokladní systémy se mezi sebou liší, proto ani u nich žádnou funkci neberte jako samozřejmost. Výběr popisuje článek <a href="jak-vybrat-pokladnu.html">Jak vybrat pokladnu</a>.</p>`,
      },
      {
        id: "den-v-provozu",
        h2: "Jak se obě cesty liší v běžném dni",
        html: `
<p>Rozdíl poznáte hlavně při větším počtu zákazníků. Následující příklady jsou modelové, protože MOJE eet zatím neběží.</p>
<p><strong>Kadeřnice:</strong> má pět zákaznic denně a osm druhů služeb. Do katalogu si uloží služby a ceny. Po střihu vybere položku na tabletu, přijme platbu a tržba odejde. Účtenku vytvoří v PDF, když o ni zákaznice požádá. Skladem se nezabývá. Taková kadeřnice si s aplikací může vystačit.</p>
<p><strong>Večerka:</strong> má stovky položek a frontu před zavírací dobou. Potřebuje skenovat čárové kódy, pracovat se zásobami, rychle tisknout doklady a na konci směny zkontrolovat kasu. Tyto věci ve zveřejněném popisu MOJE eet nejsou. Proto dává smysl pokladní systém.</p>
<p><strong>Bistro:</strong> přijímá hotovost, karty a stravenky, střídají se v něm zaměstnanci a majitel chce vidět tržby po směnách. Podle prezentace pro vývojáře je aplikace určená pro podnikatele s nejvýše 2 zaměstnanci. Bistro si proto musí ověřit, jestli do tohoto okruhu vůbec spadá.</p>`,
      },
      {
        id: "jak-zacit-s-moje-eet",
        h2: "Jak začít s MOJE eet",
        html: `
<ol class="steps">
  <li>Přihlaste se do DIS+ na portálu MOJE daně a aktivujte EET.</li>
  <li>Založte evidenční jednotku, například provozovnu.</li>
  <li>Po spuštění aplikace otevřete v DIS+ dlaždici PROFILY MOJE EET a propojte se s ní.</li>
  <li>V aplikaci si vytvořte katalog zboží a služeb.</li>
  <li>Před 1. 1. 2027 si zkuste, jak aplikace funguje na vašem zařízení.</li>
</ol>
<p>Podrobný návod k samotné aplikaci jsme do 31. 10. 2026 nenašli. Sledujte eet.gov.cz. Podle harmonogramu zbývá na vyzkoušení aplikace jeden měsíc před začátkem evidence. Mějte proto záložní plán, kdyby vám nevyhovovala.</p>`,
      },
      {
        id: "otazky-pro-dodavatele",
        h2: "Co se zeptat dodavatele pokladny",
        html: `
<p>Finanční správa uvádí, že u pokladního zařízení z doby původního EET obvykle stačí aktualizace softwaru. Než se rozhodnete, zeptejte se dodavatele na tyto věci:</p>
<ul>
  <li>Od kdy bude pokladna umět EET 2.0 a kolik stojí aktualizace?</li>
  <li>Jak se do ní nahraje soubor .p12 a heslo?</li>
  <li>Dá se před ostrým provozem vyzkoušet spojení v ověřovacím módu?</li>
  <li>Odešle sama tržby po výpadku internetu a ukáže mi, když se odeslat nepodaří?</li>
  <li>Umí vrácení zboží jako zápornou tržbu?</li>
  <li>Hlídá konec platnosti certifikátu a umí ho obnovit sama?</li>
  <li>Umí doklady, které potřebuji jako plátce nebo neplátce DPH?</li>
</ul>
<p>Pokud na tyto otázky nedostanete jasnou odpověď včas, hledejte jiné řešení. MOJE eet může být dočasná možnost, když splňujete její podmínky.</p>
<p>Zákon vás ve výběru zařízení neomezuje, takže smíte později přejít jinam. Když přejdete z MOJE eet na pokladnu, budete potřebovat certifikát pro pokladnu. Jestli půjdou data z aplikace vyexportovat, zatím není doložené.</p>`,
      },
      {
        id: "co-je-spolecne",
        h2: "Co platí pro obě cesty stejně",
        html: `
<ul>
  <li><strong>Přístup do DIS+.</strong> Potřebujete ho v obou případech. Postup je v článku <a href="eet-2-0-krok-za-krokem.html">EET 2.0 krok za krokem</a>.</li>
  <li><strong>Evidenční jednotka.</strong> Založíte ji v DIS+ pro aplikaci i pro pokladnu.</li>
  <li><strong>Internet.</strong> Finanční správa píše, že pokladní zařízení musí být připojené k internetu.</li>
  <li><strong>Lhůta 48 hodin.</strong> Po výpadku musíte tržbu odeslat bez zbytečného odkladu, nejpozději do 48 hodin.</li>
  <li><strong>Doklady.</strong> Aplikace ani pokladna neruší povinnost vydat doklad podle zákona o DPH nebo zákona o ochraně spotřebitele.</li>
  <li><strong>Sleva na dani.</strong> Podnikatel jako fyzická osoba, který podává daňové přiznání, může uplatnit slevu až 5 000 Kč bez ohledu na to, co k evidenci používá. V paušálním režimu se sleva neuplatňuje. Je to náš výklad zákona, ověřte si ho u finančního úřadu nebo u účetní. Podmínky jsou v článku <a href="eet-2-0-pruvodce.html">EET 2.0: základní průvodce</a>.</li>
</ul>`,
      },
      {
        id: "jak-se-rozhodnout",
        h2: "Jak se rozhodnout",
        html: `
<ol class="steps">
  <li><strong>Spočítejte platby.</strong> Kolik plateb máte za den ve špičce? Zkuste si představit jejich zadávání na tabletu.</li>
  <li><strong>Spočítejte položky.</strong> Pár služeb zadáte snadno. Stovky druhů zboží s čárovými kódy vyžadují čtečku a sklad.</li>
  <li><strong>Sečtěte provozovny a lidi.</strong> Při více než 2 evidenčních jednotkách MOJE eet nestačí.</li>
  <li><strong>Rozmyslete si účtenky.</strong> Stačí vám PDF, nebo zákazníkům tisknete doklad hned u pokladny?</li>
  <li><strong>Zeptejte se účetní.</strong> Jaká data od vás potřebuje a v jaké podobě?</li>
  <li><strong>Spočítejte náklady.</strong> K aplikaci potřebujete zařízení a internet. U pokladny přičtěte licenci a případné příslušenství.</li>
</ol>
<p>Pokud po těchto otázkách chcete pokladnu, SuperKasa má EET 2.0 v každém tarifu a spojení jsme vyzkoušeli v testovacím prostředí Finanční správy. Ceny najdete v <a href="cenik.html">ceníku</a>. Můžete také počkat na spuštění MOJE eet a podívat se, jestli vám stačí. Certifikát a zkoušku pokladny ale nenechávejte na poslední chvíli, protože evidovat musíte od 1. 1. 2027.</p>`,
      },
    ],
    faq: [
      ["Od kdy bude MOJE eet dostupná?", "Harmonogram Finanční správy uvádí spuštění 1. 12. 2026. Na stránce s praktickými informacemi se píše, že se spuštění předpokládá od tohoto data."],
      ["Je MOJE eet opravdu zdarma?", "Ano, Finanční správa ji popisuje jako bezplatnou aplikaci. Potřebujete jen vlastní zařízení s internetem."],
      ["Potřebuji pro MOJE eet pokladní certifikát?", "Nemusíte ho stahovat ani nahrávat. Podle Finanční správy si ho aplikace po spárování s DIS+ zajistí automaticky. Evidenční jednotku ale založit musíte."],
      ["Vytiskne MOJE eet účtenku?", "Doložené je vytvoření dokladu ve formátu PDF. Tisk na pokladní tiskárně zveřejněné materiály neuvádějí."],
      ["Má MOJE eet sklad?", "Zveřejněné materiály uvádějí katalog zboží a služeb s položkami a cenami. O skladu nepíšou nic."],
      ["Kolik provozoven můžu mít v MOJE eet?", "Finanční správa uvádí nejvýše 2 evidenční jednotky. Evidenční jednotkou je provozovna, ale také například e-shop nebo mobilní stánek."],
    ],
    sources: [
      ["Praktické informace: Kdy mi postačí webová aplikace MOJE eet (Finanční správa)", PRAKTICKE],
      ["EET v 5 krocích (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-media/EET_v_5_krocich.pdf"],
      ["Harmonogram EET 2.0 (Finanční správa)", HARMONOGRAM],
      ["Prezentace ze semináře pro vývojáře, 23. 6. 2026 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET2_Prezentace_Seminar_pro_vyvojare_23-.pdf"],
      ["Jaké informace jsou dostupné na záložce Evidence tržeb (MOJE daně)", "https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jake-informace-jsou-dostupne-na-zalozce-4763"],
      ["Tisková zpráva o podpisu zákona, 22. 9. 2026 (Finanční správa)", "https://eet.gov.cz/cs/pro-media/tiskove-zpravy/2026/prezident-podepsal-zakon-o-eet-2-0-evidence-trzeb-1315"],
    ],
    related: ["eet-2-0-pruvodce", "jak-vybrat-pokladnu", "eet-off-pausalni-dan"],
  },

  {
    slug: "co-musi-byt-na-uctence",
    group: "doklady",
    kicker: "Účtenky a doklady",
    title: "Co musí být na účtence: zjednodušený daňový doklad a doklad neplátce",
    metaTitle: "Co musí být na účtence: náležitosti dokladu | SuperKasa",
    desc: "Náležitosti účtenky: zjednodušený daňový doklad do 10 000 Kč, doklad neplátce, POK z EET, opravný doklad při vrácení, faktura a uchování po dobu 10 let.",
    lead: "Na účtence plátce DPH musí být prodávající, DIČ, číslo dokladu, zboží nebo služba, datum, sazba DPH a celková částka. Neplátce vydá na žádost zákazníka doklad s datem, zbožím nebo službou, cenou, svým jménem nebo názvem a IČO.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 8,
    sections: [
      {
        id: "kdy-vydat-doklad",
        h2: "Kdy musíte doklad vydat",
        html: `
<p>Účtenku nepřikazuje EET. Povinnost může vzniknout podle zákona o DPH nebo zákona o ochraně spotřebitele. V textu používáme tyto pojmy:</p>
<ul>
  <li><strong>Plátce DPH</strong> je podnikatel registrovaný k DPH. Na účtence uvádí sazbu DPH.</li>
  <li><strong>Neplátce DPH</strong> registrovaný není.</li>
  <li><strong>DIČ</strong> je daňové identifikační číslo.</li>
  <li><strong>IČO</strong> je identifikační číslo osoby.</li>
  <li><strong>Spotřebitel</strong> je zákazník, který nekupuje pro své podnikání.</li>
</ul>
<div class="tbl"><table>
  <thead><tr><th>Zákon</th><th>Co říká</th><th>Praxe</th></tr></thead>
  <tbody>
    <tr><td>Zákon o evidenci tržeb</td><td>Účtenku neukládá</td><td>Kvůli EET tisknout nemusíte</td></tr>
    <tr><td>Zákon o DPH, § 28</td><td>Plátce vystaví daňový doklad, když prodává podnikateli nebo právnické osobě. Lhůta je 15 dnů.</td><td>Firmě doklad vydat musíte</td></tr>
    <tr><td>Zákon o ochraně spotřebitele, § 16</td><td>Na žádost spotřebitele prodávající vydá doklad o koupi</td><td>Platí pro plátce i neplátce</td></tr>
  </tbody>
</table></div>
<p>Spotřebiteli, který doklad nechce, ho žádný z těchto zákonů dávat nepřikazuje. Mnoho obchodů ho přesto vydává ke každému prodeji, protože je to jednodušší a zákazník má doklad o koupi.</p>`,
      },
      {
        id: "zjednoduseny-doklad",
        h2: "Zjednodušený daňový doklad do 10 000 Kč",
        html: `
<p>Běžná účtenka plátce DPH je zjednodušený daňový doklad. Smíte ho vystavit, když celková částka za plnění na dokladu není vyšší než 10 000 Kč.</p>
<div class="tbl"><table>
  <thead><tr><th>Údaj</th><th>Musí být na dokladu</th><th>Příklad</th></tr></thead>
  <tbody>
    <tr><td>Vaše firma nebo jméno a sídlo</td><td>Ano</td><td>Název a adresa sídla</td></tr>
    <tr><td>Vaše DIČ</td><td>Ano</td><td>DIČ plátce</td></tr>
    <tr><td>Evidenční číslo dokladu</td><td>Ano</td><td>Pořadové číslo z pokladny</td></tr>
    <tr><td>Rozsah a předmět plnění</td><td>Ano</td><td>Rohlík 10 ks, střih vlasů</td></tr>
    <tr><td>Den vystavení</td><td>Ano</td><td>Datum prodeje</td></tr>
    <tr><td>Den uskutečnění plnění</td><td>Jen když se liší od dne vystavení</td><td>Jiné datum dodání</td></tr>
    <tr><td>Sazba DPH</td><td>Ano</td><td>12 % nebo 21 %</td></tr>
    <tr><td>Celková částka</td><td>Ano, když na dokladu není výše daně</td><td>Celkem 250 Kč</td></tr>
    <tr><td>Zákazník a jeho DIČ</td><td>Ne</td><td>Mohou chybět</td></tr>
    <tr><td>Jednotková cena bez DPH a sleva</td><td>Ne</td><td>Může chybět</td></tr>
    <tr><td>Základ daně a výše daně</td><td>Ne</td><td>Mohou chybět</td></tr>
  </tbody>
</table></div>
<p>Mnoho pokladen tiskne i základ daně a výši daně. Není to chyba, zákon jen říká, že na zjednodušeném dokladu být nemusí.</p>
<aside class="note"><p>Spotřebitel může chtít doklad podle zákona o ochraně spotřebitele. Ten vyžaduje i identifikační číslo osoby. Přidejte proto na účtenku IČO, pokud ho máte.</p></aside>
<h3>Kdy zjednodušený doklad vystavit nejde</h3>
<ul>
  <li>Prodáváte tabákové výrobky za jinou než pevnou cenu pro konečného spotřebitele.</li>
  <li>Daň přiznává zákazník, tedy ne vy.</li>
  <li>Prodáváte zboží s osvobozením do jiného státu EU.</li>
  <li>Jde o prodej zboží na dálku nebo prodej dovezeného zboží na dálku s místem plnění v Česku.</li>
</ul>
<h3>Bistro a sazby od 1. 1. 2027</h3>
<p>Od 1. 1. 2027 platí pro stravovací služby změna. Nealkoholické nápoje podávané na místě mají sazbu 12 %. Podávání alkoholických nápojů zůstává ve vyšší sazbě 21 %. Nastavení sazeb si potvrďte s účetní.</p>`,
      },
      {
        id: "nad-10000",
        h2: "Prodej nad 10 000 Kč",
        html: `
<p>Nad 10 000 Kč zjednodušený daňový doklad vystavit nesmíte. Prodáváte-li firmě, vystavíte běžný daňový doklad, kterému se v praxi říká faktura. Lhůta je 15 dnů. Příklad: stavební firma koupí v obchodě materiál za 12 000 Kč. Obchod jí vystaví doklad s názvem a DIČ firmy.</p>
<p>Když kupuje spotřebitel, zákon o DPH mu daňový doklad vystavit nepřikazuje. Na žádost ale dostane doklad o koupi podle zákona o ochraně spotřebitele.</p>`,
      },
      {
        id: "doklad-neplatce",
        h2: "Doklad neplátce DPH",
        html: `
<p>Neplátce nevystavuje daňový doklad. Na žádost spotřebitele vydá doklad o koupi podle § 16 zákona o ochraně spotřebitele. Na dokladu musí být:</p>
<ul>
  <li>datum prodeje nebo poskytnutí služby,</li>
  <li>o jaké zboží nebo službu jde,</li>
  <li>cena,</li>
  <li>vaše jméno a příjmení, nebo název či obchodní firma,</li>
  <li>vaše IČO.</li>
</ul>
<p>Příklad kadeřnice bez DPH: „Doklad o prodeji, Jana Nováková, IČO, 31. 1. 2027, střih a foukaná, 450 Kč.“ DIČ na doklad psát nemusí. Sazbu DPH ani částku DPH neuvádí, protože DPH neodvádí.</p>
<p>Další údaje vyžaduje zákon ve dvou případech:</p>
<ul>
  <li><strong>Použité nebo upravované zboží a zboží s vadou:</strong> musí to být na dokladu zřetelně vyznačené. Totéž platí pro zboží, jehož užitné vlastnosti jsou jinak omezené.</li>
  <li><strong>Prodej s pozdější dodávkou:</strong> na dokladu musí být také místo určení a datum dodávky.</li>
</ul>`,
      },
      {
        id: "eet-a-pok",
        h2: "Tržba evidovaná v EET a POK na účtence",
        html: `
<p>POK je potvrzovací kód. Finanční správa ho posílá pokladně jako potvrzení, že tržbu přijala. Na účtence ho mít nemusíte. Můžete ho tam uvést dobrovolně.</p>
<ul>
  <li>Na dokladu nemusí být žádná věta o evidenci tržby.</li>
  <li>Zákon neukládá povinnost POK uchovávat.</li>
  <li>Do EET se neposílá obsah účtenky, jen celková částka a základní údaje.</li>
  <li>Přehled zaevidovaných tržeb najdete v DIS+.</li>
</ul>
<p>Účtenka může být i elektronická. U elektronického daňového dokladu musí zákazník s touto podobou souhlasit. Podrobnosti o evidenci jsou v článku <a href="eet-2-0-pruvodce.html">EET 2.0: základní průvodce</a>.</p>`,
      },
      {
        id: "opravny-doklad",
        h2: "Vrácení zboží: opravný doklad a záporná tržba",
        html: `
<p>Vrácení peněz řešíte na dvou místech. U plátce je to DPH a u každého podnikatele s evidovanými tržbami je to EET.</p>
<h3>DPH u plátce</h3>
<p>Plátce při vrácení zboží opravuje základ daně. Opravný daňový doklad vystaví do 15 dnů ode dne, kdy k opravě došlo. Na opravném dokladu jsou údaje a DIČ prodávajícího a zákazníka, číslo původního dokladu, číslo opravného dokladu, důvod opravy, rozdíl v základu daně, v dani a v celkové částce a den, kdy k opravě došlo.</p>
<p>Když byl původní doklad zjednodušený a zákazníka dostatečně neznáte, nemusí opravný doklad obsahovat údaje o zákazníkovi ani rozdíl v základu a v dani.</p>
<p>Opravný doklad vystavovat nemusíte, pokud jste neměli povinnost vystavit daňový doklad, nebo vám zákazník není dostatečně známý. Opravu pak provedete ve své evidenci pro DPH. Domluvte si postup s účetní.</p>
<h3>EET</h3>
<p>Vrácená tržba se eviduje jako záporná. Zákazník večerky vrátí zboží za 40 Kč a dostane peníze zpět. Pokladna pošle tržbu −40 Kč. Stejně se postupuje při reklamaci, omylem zaevidované tržbě nebo při platbě kartou, která nakonec neproběhla. Platí to pro plátce i neplátce. Opravný daňový doklad se ale týká jen plátce.</p>`,
      },
      {
        id: "faktura",
        h2: "Faktura na požádání",
        html: `
<p>Fakturu chce obvykle podnikatel nebo firma. Plátce pro ně vystavuje daňový doklad do 15 dnů. Do 10 000 Kč vám zákon dovoluje použít zjednodušený doklad. Nad 10 000 Kč musíte vystavit běžný daňový doklad.</p>
<p>Na běžném daňovém dokladu jsou tyto údaje podle § 29 zákona o DPH:</p>
<ul>
  <li>vaše firma nebo jméno, sídlo a DIČ,</li>
  <li>zákazník a jeho DIČ, pokud ho má,</li>
  <li>evidenční číslo dokladu,</li>
  <li>rozsah a předmět plnění,</li>
  <li>den vystavení a den uskutečnění plnění, pokud se liší,</li>
  <li>jednotková cena bez daně a sleva, pokud není obsažená v ceně,</li>
  <li>základ daně, sazba daně a výše daně v českých korunách.</li>
</ul>
<p>Spotřebiteli zákon o DPH daňový doklad vystavit nepřikazuje. Stačí mu doklad o koupi podle zákona o ochraně spotřebitele.</p>
<p>Pokud jste už k prodeji vydali účtenku a zákazník chce dodatečně fakturu, domluvte si postup s účetní, aby se stejný prodej neobjevil v dokladech dvakrát. Neplátce vystavuje fakturu bez DPH.</p>`,
      },
      {
        id: "uchovavani",
        h2: "Jak dlouho doklady uchovávat",
        html: `
<div class="tbl"><table>
  <thead><tr><th>Co</th><th>Jak dlouho</th><th>Předpis</th></tr></thead>
  <tbody>
    <tr><td>Daňové doklady plátce DPH, i vystavené účtenky</td><td>10 let od konce zdaňovacího období, ve kterém se plnění uskutečnilo</td><td>§ 35 zákona o DPH</td></tr>
    <tr><td>Účetní doklady, když vedete účetnictví</td><td>5 let od konce účetního období</td><td>§ 31 zákona o účetnictví</td></tr>
    <tr><td>Podklady neplátce bez účetnictví</td><td>Dobu určete s účetní. Lhůta pro stanovení daně je 3 roky a může se měnit.</td><td><a href="https://www.zakonyprolidi.cz/cs/2009-280" rel="noopener">§ 148 daňového řádu</a></td></tr>
    <tr><td>POK</td><td>Zákon uchovávání neukládá</td><td>eet.gov.cz</td></tr>
  </tbody>
</table></div>
<p>Příklad: plátce, který podává DPH měsíčně, prodal zboží 15. 3. 2027. Zdaňovací období končí 31. 3. 2027, doklad tedy uchovává do 31. 3. 2037.</p>
<p>Plátce musí po celou dobu zajistit věrohodnost původu, neporušenost obsahu a čitelnost dokladu. Doklady smíte uchovávat elektronicky. Mají být v Česku, nebo uložené tak, abyste k nim měli nepřetržitý dálkový přístup. Daňové doklady vystavené v cizím jazyce musíte správci daně na žádost nechat přeložit do češtiny.</p>
<p>Tepelný papír účtenek časem bledne. Spolehlivější je mít doklady uložené v pokladně nebo v počítači a ve vlastní záloze.</p>
<p>SuperKasa má EET 2.0 v každém tarifu a spojení jsme vyzkoušeli v testovacím prostředí Finanční správy. Ceny najdete v <a href="cenik.html">ceníku</a>.</p>`,
      },
    ],
    faq: [
      ["Musím dát účtenku každému zákazníkovi?", "Kvůli EET ne. Spotřebiteli ji musíte dát, když o ni požádá. Plátce musí vystavit daňový doklad, když prodává podnikateli nebo právnické osobě."],
      ["Musí být na účtence POK?", "Ne. Potvrzovací kód není třeba uvádět na účtence ani na jiném dokladu. Můžete ho tam uvést dobrovolně."],
      ["Do jaké částky stačí zjednodušený daňový doklad?", "Do 10 000 Kč. Přesně: celková částka za plnění na dokladu nesmí být vyšší než 10 000 Kč. Výjimkou je například tabák prodaný za jinou než pevnou cenu."],
      ["Musí neplátce DPH uvést na doklad DIČ?", "Zákon o ochraně spotřebitele DIČ nevyžaduje. Na dokladu musí být datum, zboží nebo služba, cena, jméno nebo název prodávajícího a IČO."],
      ["Může být účtenka jen v mobilu nebo e-mailem?", "Ano, doklad může být elektronický. U daňového dokladu v elektronické podobě musí zákazník s touto podobou souhlasit. Kdo nesouhlasí, dostane doklad na papíře."],
      ["Jak dlouho musím schovávat účtenky?", "Plátce DPH 10 let od konce zdaňovacího období, ve kterém se prodej uskutečnil. U dalších podkladů se lhůty liší, proto se řiďte pokyny své účetní."],
    ],
    sources: [
      ["Zákon č. 235/2004 Sb., o DPH, § 26 až 35a, 42, 45 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/2004-235"],
      ["Zákon č. 634/1992 Sb., o ochraně spotřebitele, § 16 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/1992-634"],
      ["Zákon č. 180/2026 Sb., o evidenci tržeb, § 8 a změna přílohy zákona o DPH (eet.gov.cz)", ZAKON],
      ["Evidence tržeb v praxi a POK (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/evidence-trzeb-v-praxi"],
      ["Chyby a jejich řešení: storno a oprava tržby (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/chyby-a-jejich-reseni"],
      ["Zákon č. 563/1991 Sb., o účetnictví, § 31 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/1991-563"],
    ],
    related: ["eet-2-0-pruvodce", "tiskarna-ctecka-zasuvka", "eet-off-pausalni-dan"],
  },
];
