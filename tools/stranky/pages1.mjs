import { card } from "./parts.mjs";
import { oborPicker } from "./obory-stranky.mjs";

export const cta = (title = "Chcete SuperKasu vyzkoušet?", text = "Zavolejte nám. Poradíme s výběrem tarifu i vybavení a domluvíme se na zkušební instalaci.") => `
<section class="section dark cta">
  <div class="wrap">
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="actions">
      <a class="btn btn-gold" href="tel:+420608886882">Zavolat&nbsp;+420&nbsp;608&nbsp;886&nbsp;882</a>
      <a class="btn btn-light" href="cenik.html">Zobrazit ceník</a>
    </div>
  </div>
</section>`;

export const index = {
  file: "index.html",
  current: "index.html",
  title: "SuperKasa – pokladna s EET 2.0 nastavená pro váš obor",
  desc: "Dotyková pokladna pro večerky, trafiky, pekárny, drogerie, kavárny, kadeřnictví, nehtová studia a další obory. EET 2.0, sklad, cenovky, vietnamština pro obsluhu. 199 Kč měsíčně s DPH, 30 dní zdarma.",
  jsonld: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SuperKasa",
    url: "https://superkasa.cz/",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows 10, Windows 11",
    inLanguage: ["cs", "vi", "en"],
    description: "Pokladní systém s EET 2.0 pro obchody, občerstvení a služby.",
    offers: { "@type": "Offer", price: "199", priceCurrency: "CZK", description: "Měsíčně včetně DPH, prvních 30 dní zdarma" },
  },
  body: `
<section class="hero hero-pick">
  <div class="wrap">
    <div class="hero-intro">
      <span class="eyebrow">Pokladna s EET 2.0</span>
      <h1>Pokladna nastavená pro váš obor</h1>
      <p class="lead">Vyberte, co provozujete. SuperKasa si připraví skupiny zboží, dlaždice a funkce přesně pro vás – a vy můžete začít prodávat.</p>
    </div>
    ${oborPicker()}
    <p class="hero-links">
      <span><strong>199 Kč</strong> měsíčně s DPH</span>
      <span><strong>30 dní</strong> zdarma</span>
      <a href="cenik.html">Ceník</a>
      <a href="funkce.html">Všechny funkce</a>
    </p>
  </div>
</section>

<section class="section alt">
  <div class="wrap split">
    <div>
      <h2>Prodej na dotyk, i ve špičce</h2>
      <p class="lead-sm">SuperKasa běží na počítači s Windows přímo ve vaší provozovně a ovládá se prstem na dotykové obrazovce. Obsluha si ji přepne do vietnamštiny nebo angličtiny.</p>
      <ul class="checks">
        <li>Velké dlaždice se zbožím a obrázky, čtečka čárových kódů i fotoaparát mobilu</li>
        <li>Platba hotově, kartou přes váš terminál, QR kódem nebo kombinovaně</li>
        <li>Účtenka jde rovnou do pokladní tiskárny, bez tiskového okna</li>
        <li>Prodáváte i při výpadku internetu – tržby do EET se odešlou později</li>
      </ul>
      <div class="actions"><a class="btn btn-primary" href="funkce.html">Prohlédnout funkce</a></div>
    </div>
    <figure class="mock">
      <div class="mock-screen" aria-hidden="true">
        <div class="mock-tiles">
          <div class="mock-bar"><span></span><span></span><span></span><span></span></div>
          <div class="tile">Rohlík<b>2,90</b></div>
          <div class="tile g">Pečivo<b>›</b></div>
          <div class="tile">Mléko 1 l<b>24,90</b></div>
          <div class="tile p">Pivo 0,5 l<b>22,90</b></div>
          <div class="tile">Banány / kg<b>34,90</b></div>
          <div class="tile g">Ovoce<b>›</b></div>
          <div class="tile">Káva<b>89,90</b></div>
          <div class="tile">Taška<b>2,00</b></div>
          <div class="tile g">Nápoje<b>›</b></div>
        </div>
        <div class="mock-cart">
          <div class="row"><span>Rohlík 4×</span><span>11,60</span></div>
          <div class="row"><span>Pivo 0,5 l 2×</span><span>45,80</span></div>
          <div class="row"><span>Záloha láhev 2×</span><span>6,00</span></div>
          <div class="row"><span>Banány 0,84 kg</span><span>29,32</span></div>
          <div class="sum"><span>Celkem</span><span>92,72 Kč</span></div>
          <div class="pay">Zaplatit</div>
        </div>
      </div>
      <figcaption class="mock-cap">Ilustrační náhled prodejní obrazovky</figcaption>
    </figure>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Hlavní výhody</h2>
      <p>Pokladna, která se dobře ovládá ve špičce u pultu i večer při příjmu zboží.</p>
    </div>
    <div class="grid grid-3">
      ${card("eet", "EET 2.0", "Doklad se uloží hned a do EET se odešle na pozadí. Když vypadne internet, pokladna odesílání opakuje a prodej nezdržuje. <a href=\"eet.html\">Více o EET 2.0</a>")}
      ${card("box", "Sklad a cenovky", "Příjem zboží skenováním, inventura regálu, hlídání expirace a tisk cenovek na pokladní tiskárně.")}
      ${card("lang", "Vietnamština pro obsluhu", "Každý prodavač má svůj jazyk – čeština, vietnamština nebo angličtina, přepíná se jedním tlačítkem. Doklad pro zákazníka je vždy česky.", "gold")}
      ${card("home", "Data zůstávají u vás", "Databáze je na počítači ve vaší provozovně. Každý den se zálohuje a kdykoli ji vyexportujete.")}
      ${card("network", "Další pokladna i tablet", "Další okno pokladny, příjem zboží na tabletu nebo zákaznický displej – přes síť obchodu, i na starším počítači s Windows 7.")}
      ${card("wallet", "Jedna cena pro všechny obory", "199 Kč měsíčně včetně DPH za kterýkoli tarif, ročně 2 149 Kč. Prvních 30 dní zdarma. <a href=\"cenik.html\">Ceník</a>", "gold")}
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head">
      <h2>Jak začít</h2>
      <p>Od instalace po ostrý provoz s EET 2.0.</p>
    </div>
    <ol class="steps">
      <li><strong>Nainstalujete SuperKasu na počítač s Windows</strong>Jeden instalační soubor, bez práv správce a bez dalších programů. Instalátor zatím připravujeme.</li>
      <li><strong>Vyberete svůj obor a založíte prodavače</strong>Pokladna připraví skupiny, sazby DPH, dlaždice a funkce. Prodavači se přihlašují svým PINem.</li>
      <li><strong>30 dní zkoušíte zdarma</strong>Ve zkušebním režimu jsou doklady označené jako zkušební a do ostrého EET se neposílají.</li>
      <li><strong>Přejdete do ostrého provozu</strong>S placenou licencí a vlastním pokladním certifikátem od Finanční správy přepnete pokladnu do ostrého režimu. <a href="eet.html">Jak na EET 2.0</a></li>
    </ol>
  </div>
</section>
${cta()}`,
};

export const funkce = {
  file: "funkce.html",
  current: "funkce.html",
  title: "Funkce pokladny SuperKasa – prodej, EET 2.0, sklad, cenovky",
  desc: "Co SuperKasa umí: dotykový prodej, EET 2.0, sklad s příjmem a inventurou, cenovky a účtenky přímo na pokladní tiskárně, QR platby, váha, zákaznický displej, uzávěrky, zálohy a vietnamština pro obsluhu.",
  body: `
<section class="page-head">
  <div class="wrap">
    <h1>Funkce</h1>
    <p class="lead">Prodej, EET, účtenky, hotovost a uzávěrka fungují vždy. Další funkce – sklad, cenovky, zálohy na obaly, váhu, akce, zákaznický displej nebo QR platby – si zapnete podle toho, co váš provoz potřebuje. Co je zapnuté hned, záleží na <a href="obory.html">vašem oboru</a>.</p>
    <nav class="toc" aria-label="Oddíly stránky">
      <a href="#prodej">Prodej a platby</a>
      <a href="#doklady">Doklady a EET</a>
      <a href="#sklad">Sklad a zboží</a>
      <a href="#provoz">Obsluha a provoz</a>
    </nav>
  </div>
</section>

<section class="section feature-group" id="prodej">
  <div class="wrap">
    <div class="section-head"><h2>Prodej a platby</h2></div>
    <div class="grid grid-3">
      ${card("touch", "Prodej na dotykové obrazovce", "Velké dlaždice se zbožím a obrázky, skupiny, PLU, číselník s násobením, slevy na položku i na celý nákup a odložení nákupu. Cenu a stav skladu zkontrolujete bez prodeje.")}
      ${card("scan", "Čtečka i fotoaparát mobilu", "Čárové kódy čte běžná USB čtečka. Na mobilu nebo tabletu poslouží fotoaparát – na pokladně, při příjmu zboží i v kartě zboží.")}
      ${card("scale", "Váha", "U zboží na kilogramy se pokladna zeptá na hmotnost. Přečte i čárové kódy ze štítků váhy – s hmotností nebo cenou.")}
      ${card("percent", "Akce a množstevní ceny", "Akce do zvoleného data a cena od určitého počtu kusů, třeba levnější pivo od 6 kusů. Pokladna je použije sama.")}
      ${card("bottle", "Zálohy na obaly", "Vratné láhve a přepravky. Zálohu jde s pivem propojit – pak se přidá sama a s odebráním piva zase odejde. Výkup zálohy jednou dlaždicí.")}
      ${card("qr", "QR platby", "Velký QR kód pro platbu převodem na pokladně, na zákaznickém displeji i na účtence. Platit jde i kombinovaně – část kartou nebo QR, zbytek hotově. Kartou se platí přes váš samostatný platební terminál.")}
    </div>
  </div>
</section>

<section class="section alt feature-group" id="doklady">
  <div class="wrap">
    <div class="section-head"><h2>Doklady a EET</h2></div>
    <div class="grid grid-3">
      ${card("eet", "EET 2.0", "Tržby se posílají do EET 2.0 na pozadí. Při výpadku internetu pokladna odesílání opakuje a lišta ukazuje, jestli je vše odeslané. <a href=\"eet.html\">Jak to funguje</a>")}
      ${card("printer", "Přímý tisk účtenek", "Účtenka jde po zaplacení rovnou do pokladní tiskárny (Epson TM-T88 a kompatibilní, role 80 i 58 mm), bez tiskového okna. Pokladna otevře i peněžní zásuvku připojenou k tiskárně.")}
      ${card("undo", "Storno a vratky", "Storno celého dokladu i vratka vybraných položek ze staršího nákupu, s PINem vedoucího a povinným důvodem. Nic se nemaže – vždy vznikne nový doklad.")}
      ${card("report", "Uzávěrky", "Počáteční hotovost, vklady a výběry, průběžná a denní uzávěrka s počítáním bankovek a mincí a rozdílem proti pokladně. Prodavači mohou dělat slepou uzávěrku.")}
      ${card("chart", "Přehledy pro majitele", "Tržby podle DPH, plateb, prodavačů a skupin, průměrný nákup, slevy, storna a nejprodávanější zboží. Grafy po hodinách i dnech.")}
      ${card("cash", "Hotovost pod kontrolou", "Zaokrouhlení na koruny, návrh bankovek a výpočet vrácení. Upozornění na odvod hotovosti nad limit.")}
    </div>
  </div>
</section>

<section class="section feature-group" id="sklad">
  <div class="wrap">
    <div class="section-head"><h2>Sklad a zboží</h2></div>
    <div class="grid grid-3">
      ${card("box", "Sklad s příjmem a inventurou", "Příjem zboží skenováním s dodavatelem, číslem faktury a nákupní cenou. Inventura regálu mění jen naskenované zboží. Hlídání minimálního stavu a návrh objednávky podle prodejů.")}
      ${card("calendar", "Expirace", "Datum spotřeby při příjmu i v kartě zboží, přehled zboží, které brzy projde, a štítek přímo na dlaždici. Neprodané nebo prošlé zboží odepíšete.")}
      ${card("tag", "Cenovky na pokladní tiskárně", "Cenovky vytisknete na pokladní tiskárně (Epson TM-T88 a kompatibilní), na etiketové tiskárně nebo na A4. S cenou za kg, litr nebo 100 g, akční přeškrtnutou cenou a čárovým kódem. Snadno vyberete zboží, kterému se změnila cena.")}
      ${card("db", "Sdílená databáze názvů podle EAN", "Pokladny SuperKasa si navzájem napovídají názvy zboží podle čárového kódu – i u cigaret a místních výrobků. Přispívání zapínáte sami a posílá se jen kód, název, balení, skupina a DPH – nikdy ceny, prodeje ani údaje o obchodě.")}
      ${card("download", "Import zboží", "Zboží převezmete z CSV, i z exportu jiné pokladny. Opakovaný import nic nezdvojí, jen aktualizuje ceny. Fotky zboží se doplní podle EAN.")}
      ${card("home", "Nastavená pro váš obor", "Podle oboru se založí skupiny s DPH, dlaždice a ukázkové položky – pečivo, ovoce, zelenina, zálohy, káva nebo služby. <a href=\"obory.html\">Vyberte svůj obor</a>")}
    </div>
  </div>
</section>

<section class="section alt feature-group" id="provoz">
  <div class="wrap">
    <div class="section-head"><h2>Obsluha a provoz</h2></div>
    <div class="grid grid-3">
      ${card("lang", "Vietnamština pro obsluhu", "Čeština, vietnamština a angličtina. Každý prodavač má svůj jazyk a přepne ho jedním tlačítkem. Doklad pro zákazníka je vždy česky.", "gold")}
      ${card("users", "Prodavači a oprávnění", "Přihlášení PINem, role prodavač, vedoucí a majitel. Záznam změn ukáže, kdo co upravil.")}
      ${card("monitor", "Zákaznický displej", "Druhá obrazovka otočená k zákazníkovi: nákup s fotkami, QR kód k platbě, vrácená částka a mezi nákupy vaše akce.")}
      ${card("network", "Provoz v síti obchodu", "Pokladna běží na jednom počítači v obchodě. Další okno pokladny, správu nebo zákaznický displej otevřete v prohlížeči na jiném zařízení v síti obchodu – i na starším počítači s Windows 7. Každé zařízení se spáruje kódem.")}
      ${card("shield", "Zálohy", "Databáze, fotky zboží i certifikát EET se zálohují každý den. Druhou kopii můžete posílat na USB disk nebo do OneDrive. Přechod na nový počítač zvládnete jedním souborem.")}
      ${card("download", "Export dat", "Doklady, uzávěrky a další data kdykoli vyexportujete. Export funguje i po skončení předplatného.")}
      ${card("refresh", "Aktualizace", "Pokladna sama zjistí, že vyšla nová verze, a nainstalujete ji jedním tlačítkem. Rozpracovaný nákup se před restartem dokončí.")}
      ${card("clock", "Prodej i bez internetu", "Pokladna běží přímo u vás, takže prodej nezávisí na připojení. Tržby do EET se odešlou, jakmile se internet vrátí.")}
      ${card("printer", "Tiskárna kdekoli v obchodě", "Tiskárna může být u hlavního počítače, v síti, nebo u jiného počítače s tiskovým pomocníkem – i s Windows 7. Bez sdílení tiskáren ve Windows.")}
    </div>
  </div>
</section>
${cta("Chybí vám nějaká funkce?", "Zavolejte nám a popište, co ve vašem provozu potřebujete. SuperKasu dál rozvíjíme podle potřeb obchodů.")}`,
};
