// Návody k pokladně SuperKasa (skupina „pokladna“). Texty popisují pokladnu v prohlížeči (SuperKasa Cloud) – jinou
// verzi zákazníkům nenabízíme, nic se nestahuje ani neinstaluje.
// Názvy tlačítek a menu odpovídají češtině v pokladně (public/js/i18n.js).

export default [
  // ------------------------------------------------------------------------------------------------
  {
    slug: "navod-superkasa",
    group: "pokladna",
    kicker: "Návod od začátku",
    title: "Návod k pokladně SuperKasa: od registrace po uzávěrku",
    metaTitle: "Návod k pokladně: od registrace po uzávěrku | SuperKasa",
    desc: "Jak používat pokladnu SuperKasa krok za krokem: registrace, zboží, první prodej, platby, vratka, uzávěrka, prodavači, zálohy a placení pronájmu.",
    lead: "Účet založíte na app.superkasa.cz, zboží přidáte skenováním nebo ze souboru a první nákup si vyzkoušíte ještě dnes. Postup pokračuje platbami, vratkou, uzávěrkou, prodavači a placením pronájmu.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 7,
    sections: [
      {
        id: "jak-zacit",
        h2: "Jak začít",
        html: `
<p>SuperKasa běží v prohlížeči na počítači, tabletu i mobilu. Nic se nestahuje ani neinstaluje. Prvních 10 dní je zdarma a nepotřebujete platební kartu.</p>
<ul>
<li><strong>Data:</strong> na serveru SuperKasa v ČR, každý den zálohovaná.</li>
<li><strong>Zařízení:</strong> až 10 v tarifu (počítač, tablet, mobil), všechna prodávají do jedné společné směny.</li>
</ul>`,
      },
      {
        id: "registrace",
        h2: "Registrace nebo Koupit rovnou",
        html: `
<ol class="steps">
<li>Otevřete <a href="https://app.superkasa.cz/">app.superkasa.cz</a>.</li>
<li>Vyplňte pole <strong>Název obchodu</strong> a <strong>Adresa vaší pokladny</strong>, třeba vecerka-u-lipy.</li>
<li>Napište <strong>IČO</strong>. Pokladna ho ověří v rejstříku ARES.</li>
<li>Vyplňte <strong>E-mail</strong>. Telefon je nepovinný.</li>
<li>Zaškrtněte souhlas s podmínkami.</li>
<li>Klepněte na <strong>Založit pokladnu zdarma</strong>. Chcete-li platit hned, klepněte na <strong>Koupit rovnou</strong>. Po zřízení vás pokladna pošle rovnou k placení a 10 dní zdarma vám zůstane navíc.</li>
</ol>
<p>Ztratili jste odkaz na dokončení? Vyplňte registraci znovu se stejnou adresou, e-mailem a IČO.</p>
<p><strong>Nic se nestahuje:</strong> pokladna běží v prohlížeči. Na počítači s Windows tiskne na pokladní tiskárnu bez okna (přes zástupce Chromu), nebo přes okno tisku. Telefon a tablet s Androidem tisknou na Bluetooth či USB tiskárnu, iPhone na tiskárně hlavní kasy. Postup je v návodu <a href="tiskarna-ctecka-zasuvka.html">Pokladní tiskárna, čtečka a zásuvka</a>.</p>`,
      },
      {
        id: "zrizeni",
        h2: "Zřízení obchodu",
        html: `
<ol class="steps">
<li>Na obrazovce <strong>Jaký máš provoz?</strong> vyberte obor, třeba Večerka nebo Kadeřnictví.</li>
<li>Nenašli jste svůj obor? Napište do pole <strong>Popiš vlastními slovy, co prodáváš</strong> a klepněte na <strong>Navrhnout skupiny</strong>. Návrh si můžete upravit.</li>
<li>Vyplňte pole <strong>Tvoje jméno</strong> a dvakrát <strong>PIN</strong> (4 až 8 číslic).</li>
<li>Vyplňte <strong>E-mail</strong> a <strong>Heslo</strong> (aspoň 8 znaků). Budete je potřebovat na každém novém zařízení.</li>
<li>Klepněte na <strong>Zřídit pokladnu</strong>.</li>
</ol>
<p>Pokladna založí skupiny zboží, sazby DPH a ukázkové položky. Sazby DPH jsou jen návrh, ověřte je s účetní ve <strong>Správě → Skupiny</strong>.</p>`,
      },
      {
        id: "firma",
        h2: "Údaje firmy podle IČO",
        html: `
<p>Když na účtence něco chybí, majitel uvidí nahoře lištu <strong>Na účtence chybí</strong> s tlačítkem <strong>Doplnit</strong>.</p>
<ol class="steps">
<li>Klepněte na <strong>Doplnit</strong>, nebo otevřete <strong>Správa → Firma</strong>.</li>
<li>Napište <strong>IČO</strong>. Obchodní jméno a sídlo se doplní z ARES.</li>
<li>U <strong>Plátce DPH</strong> zvolte Ano, nebo Ne.</li>
<li>Zkontrolujte pole <strong>Adresa provozovny</strong>. Má tam být adresa obchodu, ne sídlo. Živnostník mívá sídlo doma.</li>
<li>Klepněte na <strong>Uložit</strong>.</li>
</ol>
<aside class="note"><p>EET 2.0 nastavíte ve <strong>Správě → EET 2.0</strong>. Postup je v návodu <a href="eet-2-0-krok-za-krokem.html">EET 2.0 krok za krokem</a>.</p></aside>`,
      },
      {
        id: "zbozi",
        h2: "Zboží v pokladně",
        html: `
<p>Zboží přidáte třemi způsoby:</p>
<ul>
<li><strong>Skenováním při prodeji.</strong> Naskenujte neznámý kód. Pokladna zkusí najít název. Doplňte cenu a klepněte na <strong>Přidat zboží a prodat</strong>.</li>
<li><strong>Ručně.</strong> Otevřete <strong>Správa → Sklad → Zboží</strong> a klepněte na <strong>+ Nové zboží</strong>.</li>
<li><strong>Ze souboru.</strong> Otevřete <strong>Správa → Import z CSV</strong> a vyberte soubor CSV nebo Excel .xlsx. Tlačítko <strong>Vyzkoušet (nic se neuloží)</strong> ukáže, co se změní. Pak klepněte na <strong>Importovat</strong>.</li>
</ul>
<p>Majitel nebo vedoucí změní cenu ukázkové položky přímo při prodeji: na dlaždici klikne pravým tlačítkem, na dotykové obrazovce ji podrží.</p>`,
      },
      {
        id: "prvni-prodej",
        h2: "První prodej",
        html: `
<p>Po přihlášení PINem se pokladna otevře sama. Příklad z večerky: zákazník chce 6 rohlíků a jednu Kofolu.</p>
<ol class="steps">
<li>Na číselníku zadejte 6, klepněte na <strong>×</strong> a pak na dlaždici Rohlík.</li>
<li>Naskenujte Kofolu, nebo klepněte na její dlaždici.</li>
<li>Vpravo zkontrolujte nákup. Klepnutím na položku změníte počet, cenu nebo slevu.</li>
<li>Klepněte na <strong>Zaplatit</strong> (klávesa F4).</li>
</ol>
<p>Zboží bez karty prodáte přes skupinu: na číselníku napište cenu a klepněte na skupinu. U zboží na kilogramy se pokladna zeptá <strong>Kolik to váží? (kg)</strong>. Když zákazník něco zapomněl, klepněte na <strong>Odložit</strong>. Nákup najdete v <strong>Odložené</strong>.</p>`,
      },
      {
        id: "platba",
        h2: "Platba hotově, kartou a QR",
        html: `
<p><strong>Hotově.</strong> Klepejte na bankovky, které zákazník dal. Částky se sčítají. Pokladna ukáže <strong>Vrátit</strong>. Hotovost se zaokrouhlí na koruny. Potvrďte tlačítkem <strong>Potvrdit platbu</strong>.</p>
<p><strong>Kartou.</strong> Klepněte na <strong>Kartou</strong>. Částku zadejte ručně na svém platebním terminálu, pokladna s ním není propojená. Až platba projde, klepněte na <strong>Platba kartou prošla</strong>.</p>
<p><strong>QR platba.</strong> Tlačítko <strong>QR platba</strong> se ukáže jen s vyplněným IBAN. Zapíšete ho ve <strong>Správě → Firma</strong> do pole <strong>IBAN účtu pro QR platbu</strong>. Zákazník naskenuje kód v aplikaci banky. Na <strong>Platba přišla</strong> klepněte, až peníze uvidíte na účtu. Obrazovka „odesláno“ v telefonu zákazníka zaplacení nezaručí.</p>
<p><strong>Kombinovaně.</strong> Část kartou nebo QR, zbytek hotově. Je to malá ikona na konci řady způsobů platby.</p>
<p>Účtenka se vytiskne sama. Když tiskárnu ještě nemáte, pokladna vás pošle do průvodce. Pomůže návod <a href="tiskarna-ctecka-zasuvka.html">Pokladní tiskárna, čtečka a zásuvka</a>.</p>`,
      },
      {
        id: "vratka-storno",
        h2: "Vratka a storno",
        html: `
<div class="tbl"><table>
<thead><tr><th></th><th>Storno</th><th>Vratka</th></tr></thead>
<tbody>
<tr><td>Kdy</td><td>Celý doklad z právě otevřené pokladny</td><td>Vybrané položky, i ze staršího nákupu</td></tr>
<tr><td>Tlačítko</td><td>Stornovat celý doklad</td><td>Vratka položek</td></tr>
<tr><td>Peníze</td><td>Vrátí se stejně, jako se platilo</td><td>Vyberete Hotově, Kartou, případně Převodem</td></tr>
</tbody>
</table></div>
<ol class="steps">
<li>Klepněte na <strong>Historie</strong> a najděte doklad. Starší doklad hledejte podle čísla.</li>
<li>Otevřete doklad a zvolte <strong>Vratka položek</strong> nebo <strong>Stornovat celý doklad</strong>.</li>
<li>U vratky zadejte množství a způsob vrácení peněz a klepněte na <strong>Potvrdit</strong>.</li>
<li>Vyberte důvod.</li>
<li>Prodavač musí zadat PIN vedoucího nebo majitele.</li>
</ol>
<p>Nic se nemaže, vždy vznikne nový doklad. Vratku na kartu provedete ručně na terminálu.</p>`,
      },
      {
        id: "uzaverka",
        h2: "Uzávěrka a další den",
        html: `
<ol class="steps">
<li>Otevřete <strong>Menu → Uzávěrka (zavřít pokladnu)</strong>.</li>
<li>Spočítejte peníze a zapište počty bankovek a mincí.</li>
<li>Pokladna ukáže řádky <strong>Spočítaná hotovost</strong>, <strong>Má být v zásuvce</strong> a <strong>Rozdíl</strong>. Od rozdílu 100 Kč je povinná poznámka.</li>
<li>Klepněte na <strong>Uzavřít pokladnu</strong> a potvrďte.</li>
<li>Přehled vytisknete tlačítkem <strong>Tisk</strong>.</li>
</ol>
<p>Pak se ukáže <strong>Otevřít pokladnu</strong>. Do pole <strong>Hotovost v zásuvce na začátku</strong> napište, kolik v zásuvce zůstalo.</p>
<aside class="note warn"><p>Pokud okno zavřete, pokladna se při dalším přihlášení otevře sama s částkou z minulé uzávěrky, i když jste tržbu odnesli. Zapněte proto ve <strong>Správě → Systém → Kontrola hotovosti</strong> volbu <strong>Při otevření pokladny zadávat hotovost v zásuvce</strong>. Peníze během dne zapisujte přes <strong>Menu → Vklad / výběr</strong>.</p></aside>
<p>Stav bez uzavření ukáže <strong>Průběžná uzávěrka</strong> v Menu.</p>
<p>Uzávěrka je jedna za celý obchod: všechna zařízení prodávají do jedné společné směny. Po 20 hodinách otevřené směny pokladna na uzávěrku upozorní, a když ji nikdo neudělá, ve 23:59 ji udělá sama.</p>`,
      },
      {
        id: "prodavaci",
        h2: "Prodavači a PIN",
        html: `
<ol class="steps">
<li>Otevřete <strong>Správa → Prodavači</strong> a klepněte na <strong>+ Nový prodavač</strong>.</li>
<li>Vyplňte jméno, roli a jazyk.</li>
<li>Zadejte PIN. Každý má jiný a nesmí to být 1111 ani řada jako 1234.</li>
<li>Klepněte na <strong>Uložit</strong>.</li>
</ol>
<div class="tbl"><table>
<thead><tr><th>Role</th><th>Co smí</th></tr></thead>
<tbody>
<tr><td>Prodavač</td><td>Prodej a Menu, Správu nevidí</td></tr>
<tr><td>Vedoucí</td><td>Navíc zboží, sklad, přehledy a schvalování PINem</td></tr>
<tr><td>Majitel</td><td>Všechno včetně sekcí Firma, Zařízení, EET 2.0 a Systém</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "zarizeni-zalohy",
        h2: "Zařízení a zálohy",
        html: `
<p>V tarifu je až 10 zařízení. Nové zařízení se přihlásí e-mailem a heslem majitele, postup je v návodu <a href="prodej-z-telefonu.html">Pokladna v telefonu a tabletu</a>.</p>
<p>Data obchodu zálohuje server každý den a kopie se ukládá i mimo něj. Nic nastavovat nemusíte.</p>
<p>Vlastní kopii si stáhnete kdykoli ve <strong>Správě → Systém → Export dat</strong>. Export funguje ještě 12 měsíců po skončení pronájmu.</p>`,
      },
      {
        id: "licence-jazyk",
        h2: "Pronájem, placení a jazyk",
        html: `
<p>Pronájem stojí <strong>189 Kč měsíčně nebo 2 041 Kč ročně, včetně DPH</strong>. Prvních 10 dní je zdarma. Kdo zaplatí během zkoušky, tomu zbylé dny zůstanou a placené období začne až po nich.</p>
<ol class="steps">
<li>Klepněte na <strong>Zaplatit</strong> v liště nahoře, nebo otevřete <strong>Správa → Systém → Licence a tarif</strong>.</li>
<li>Vyberte doplňky, pokud je chcete, a klepněte na <strong>Vystavit QR platbu</strong>.</li>
<li>Zvolte <strong>Měsíc</strong> nebo <strong>Rok (−10 %)</strong> a zaplaťte QR kódem v bankovní aplikaci.</li>
<li>Klepněte na <strong>Už jsem zaplatil – zkontrolovat</strong>.</li>
</ol>
<p>V pokladně se pronájem jmenuje licence – najdete ho ve <strong>Správě → Systém → Licence a tarif</strong>.</p>
<aside class="note warn"><p>Platby za pronájem zatím párujeme ručně, proto se pronájem neprodlouží hned po zaplacení. Když QR platbu v pokladně nevidíte, zavolejte nám a po zaplacení vám pošleme licenční klíč. Vložíte ho ve <strong>Správě → Systém → Licence a tarif</strong> do pole <strong>Licenční klíč</strong> a klepnete na <strong>Aktivovat</strong>.</p></aside>
<p>Po skončení zkoušky prodáváte ještě 3 dny s upozorněním, po skončení zaplaceného období také 3 dny (rezerva na připsání platby). Pak se prodej zamkne a zůstane jen Správa s daty. Data, doklady, uzávěrky, vratky a export fungují dál.</p>
<p><strong>Jazyk.</strong> Vlajka nahoře přepne češtinu, vietnamštinu nebo angličtinu. Každý prodavač má svůj jazyk. Doklad pro zákazníka je vždy česky.</p>`,
      },
    ],
    faq: [
      ["Musím hned po registraci platit?", "Ne. Prvních 10 dní je zdarma a kartu nezadáváte. Platit můžete i během zkoušky, zbylé dny vám zůstanou."],
      ["Zapomněl jsem heslo. Co teď?", "Otevřete adresu svého obchodu na zařízení, které není přihlášené, a klepněte na Zapomenuté heslo. Zadáte e-mail, PIN majitele a nové heslo."],
      ["Jsou doklady ve zkušební době platné?", "Pokladna založená do konce roku 2026 vydává rovnou platné doklady. Pokladna založená od 1. 1. 2027 začíná ve zkušebním režimu, ve kterém doklady neplatí. Do ostrého provozu přejde až s certifikátem z DIS+, číslem evidenční jednotky, ověřeným spojením a placeným pronájmem. Kdo evidovat nemusí, zvolí ve Správě → EET 2.0 volbu „Tržby evidovat nemusím“ a certifikát nepotřebuje. Zkušební režim lze zapnout jen před prvním ostrým dokladem."],
      ["Může prodavač vrátit peníze bez vedoucího?", "Ne. Storno i vratku musí prodavač potvrdit PINem vedoucího nebo majitele. Vedoucí a majitel PIN znovu nezadávají."],
      ["Musím dělat uzávěrku každý den?", "Po 20 hodinách otevřené směny pokladna upozorní a ve 23:59 udělá uzávěrku sama, takže se tržby více dnů neslijí. Hotovost v zásuvce ale spočítáte jen vy, proto je lepší udělat uzávěrku na konci dne ručně."],
    ],
    sources: [],
    related: ["tiskarna-ctecka-zasuvka", "prodej-z-telefonu", "eet-2-0-krok-za-krokem"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "jak-vybrat-pokladnu",
    group: "pokladna",
    kicker: "Výběr pokladny",
    title: "Jak vybrat pokladní systém pro malý obchod",
    metaTitle: "Jak vybrat pokladní systém pro malý obchod | SuperKasa",
    desc: "Na co se dívat při výběru pokladny pro malý obchod: skutečná cena s DPH, další zařízení, EET 2.0, sklad, výpadek internetu, jazyk a seznam otázek.",
    lead: "Večerka potřebuje čtečku a sklad, kadeřnice hlavně dlaždice se službami. Podle svého provozu si spočítejte cenu za celý rok a prodejci položte 14 otázek ze seznamu na konci článku.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "zacnete-provozem",
        h2: "Začněte svým provozem",
        html: `
<p>Nejdřív si napište, jak prodáváte. Každý provoz potřebuje něco jiného.</p>
<div class="tbl"><table>
<thead><tr><th>Provoz</th><th>Co je pro něj nejdůležitější</th></tr></thead>
<tbody>
<tr><td>Večerka, potraviny</td><td>Čtečka, rychlý prodej, sklad, zálohy, cenovky, vážené zboží</td></tr>
<tr><td>Bistro, kavárna</td><td>Rychlé dlaždice, na místě a s sebou, případně stoly a účty</td></tr>
<tr><td>Kadeřnice, kosmetika</td><td>Služby na dlaždicích, malé vybavení, případně rezervace</td></tr>
</tbody>
</table></div>
<p>Vyzkoušejte si běžný nákup, ne jen ukázku od prodejce.</p>`,
      },
      {
        id: "cena",
        h2: "Co pokladna doopravdy stojí",
        html: `
<p>Cena v reklamě bývá jen část nákladů. Spočítejte si celý rok.</p>
<h3>Cena s DPH, nebo bez DPH</h3>
<p>Ceníky pro podnikatele bývají bez DPH. Když nejste plátce DPH, daň si neodečtete a platíte cenu s DPH. Příklad: 250 Kč bez DPH je při sazbě 21 % celkem 302,50 Kč. Ptejte se vždy na konečnou cenu.</p>
<h3>Další zařízení</h3>
<p>Zjistěte, kolik zařízení je v ceně. Druhá kasa, tablet na příjem zboží a mobil pro brigádníka se můžou platit každý zvlášť.</p>
<h3>Hardware</h3>
<p>Spočítejte, co už máte a co musíte koupit: počítač nebo tablet, pokladní tiskárnu, čtečku, zásuvku a platební terminál. Zeptejte se, jestli systém funguje s vaším vybavením, nebo jen s tím od prodejce.</p>
<h3>Doplňky a poplatky</h3>
<p>Docházka, věrnostní program nebo rezervace bývají za příplatek. Zeptejte se také na poplatek z tržeb a z plateb kartou, na smluvní závazek a na cenu za ukončení.</p>
<h3>Příklad výpočtu</h3>
<p>U SuperKasy je cena 189 Kč měsíčně nebo 2 041 Kč ročně, vždy včetně DPH. Kavárna, která chce navíc Receptury a normy za 79 Kč, platí 268 Kč měsíčně. Hardware si pořizuje sama.</p>
<div class="tbl"><table>
<thead><tr><th>Doplněk</th><th>Kč měsíčně s DPH</th></tr></thead>
<tbody>
<tr><td>Docházka a směny</td><td>79</td></tr>
<tr><td>Věrnost a dárkové poukazy</td><td>69</td></tr>
<tr><td>Rezervace a termíny</td><td>99</td></tr>
<tr><td>Receptury a normy</td><td>79</td></tr>
<tr><td>Kontrola obsluhy</td><td>69</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "eet",
        h2: "EET 2.0",
        html: `
<p>Evidence tržeb EET 2.0 začíná 1. 1. 2027. Pokladna musí umět poslat tržbu do EET. Hodí se, když vydá účtenku i při výpadku. Zeptejte se na tyto věci:</p>
<ul>
<li>Je EET v ceně, nebo je to příplatek?</li>
<li>Co se stane, když vypadne internet? Pokladna musí tržbu poslat později, zákon dává 48 hodin.</li>
<li>Pomůže mi někdo s certifikátem z DIS+?</li>
<li>Upozorní mě pokladna, že certifikát brzy skončí?</li>
</ul>
<p>Pokladní certifikát si stahujete sami v DIS+. Celý postup je v návodu <a href="eet-2-0-krok-za-krokem.html">EET 2.0 krok za krokem</a>. Kdo možná evidovat nemusí, zjistí v článku <a href="eet-off-pausalni-dan.html">EET OFF a paušální daň</a>.</p>`,
      },
      {
        id: "sklad-ctecka",
        h2: "Sklad a čtečka",
        html: `
<p>Máte-li hodně zboží s čárovými kódy, vyzkoušejte tyto situace:</p>
<ul>
<li><strong>Neznámý kód.</strong> Co udělá pokladna, když čtečka přečte zboží, které v ní není? Dobrá pokladna nabídne založení na místě.</li>
<li><strong>Převod zboží.</strong> Jde nahrát seznam ze staré pokladny nebo z Excelu? Musíte tisíce položek psát ručně?</li>
<li><strong>Příjem a inventura.</strong> Jde naskladnit dodávku skenováním?</li>
<li><strong>Čtečka.</strong> Funguje běžná USB čtečka, nebo jen jeden model? Jde na tabletu skenovat fotoaparátem?</li>
</ul>
<p>Kadeřnice sklad možná řešit nemusí. Dobrá pokladna proto umožní sklad vypnout, aby zůstala přehledná.</p>`,
      },
      {
        id: "vypadek",
        h2: "Výpadek internetu",
        html: `
<p>Než se rozhodnete, zjistěte, jak se pokladna chová bez internetu:</p>
<ul>
<li>Jde dál prodávat a tisknout účtenky?</li>
<li>Které platby bez internetu fungují?</li>
<li>Kde jsou uložená data a jak se po výpadku nahrají?</li>
<li>Jde pokladnu otevřít i po restartu počítače nebo tabletu?</li>
</ul>
<p>Pokladna nainstalovaná na počítači v obchodě internet k samotnému prodeji obvykle nepotřebuje. Pokladna v prohlížeči musí mít vyřešený offline režim. U SuperKasy v prohlížeči můžete bez internetu platit hotově a kartou, QR platba nefunguje. Podrobnosti jsou v návodu <a href="prodej-z-telefonu.html">Pokladna v telefonu a tabletu</a>.</p>`,
      },
      {
        id: "jazyk-data",
        h2: "Jazyk a vaše data",
        html: `
<p>Prodavač dělá méně chyb, když má pokladnu ve svém jazyce. Účtenku pro zákazníka přitom chcete mít česky. Zeptejte se, jestli jde jazyk obsluhy nastavit zvlášť. Více je v návodu <a href="pokladna-pro-vietnamske-obchody.html">Pokladna ve vietnamštině</a>.</p>
<p>Ověřte také, jak se dostanete ke svým datům. Jde stáhnout doklady, tržby a zboží do Excelu? Funguje to i po skončení smlouvy? Stáhnete si data, když odejdete k jinému dodavateli?</p>`,
      },
      {
        id: "vyzkouset",
        h2: "Půl hodiny zkoušky v obchodě",
        html: `
<p>Ukázka od prodejce nestačí. Během zkoušky zdarma si udělejte tento test přímo u své kasy, nejlépe s prodavačem, který bude pokladnu používat.</p>
<ol class="steps">
<li>Naskenujte deset běžných výrobků a založte jeden, který pokladna nezná.</li>
<li>Prodejte nákup za hotové a změřte, jak dlouho to trvá.</li>
<li>Vytiskněte účtenku a zkontrolujte, co je na ní napsané.</li>
<li>Udělejte vratku jedné položky.</li>
<li>Vypněte Wi-Fi a zkuste prodat další nákup.</li>
<li>Udělejte uzávěrku a porovnejte ji s penězi v zásuvce.</li>
<li>Stáhněte si doklady do Excelu a ukažte je účetní.</li>
</ol>
<p>Když některý krok nepůjde, napište si to a zeptejte se dodavatele. Podle odpovědi poznáte i to, jak funguje jeho podpora.</p>`,
      },
      {
        id: "seznam",
        h2: "Kontrolní seznam otázek",
        html: `
<p>Tyto otázky položte každému prodejci. Odpovědi si napište.</p>
<ol>
<li>Kolik zaplatím za rok celkem, včetně DPH?</li>
<li>Kolik zařízení je v ceně?</li>
<li>Které funkce jsou příplatek?</li>
<li>Berete si poplatek z tržeb nebo z plateb kartou?</li>
<li>Jak dlouho je zkouška zdarma a musím zadat kartu?</li>
<li>Jaká je výpovědní lhůta?</li>
<li>Musím koupit váš hardware?</li>
<li>Jaká pokladní tiskárna a čtečka fungují?</li>
<li>Jak funguje EET 2.0 a kdo mi pomůže s nastavením?</li>
<li>Co se stane při výpadku internetu?</li>
<li>Jak nahraji své zboží?</li>
<li>Jde pokladnu používat v mém jazyce?</li>
<li>Jak si stáhnu data, když skončím?</li>
<li>Kdo mi pomůže, když pokladna nefunguje a mám plný obchod?</li>
</ol>`,
      },
      {
        id: "superkasa",
        h2: "Jak na otázky odpovídá SuperKasa",
        html: `
<div class="tbl"><table>
<thead><tr><th>Otázka</th><th>Odpověď</th></tr></thead>
<tbody>
<tr><td>Cena</td><td>189 Kč měsíčně nebo 2 041 Kč ročně s DPH</td></tr>
<tr><td>Zkouška</td><td>10 dní zdarma, bez karty</td></tr>
<tr><td>Zařízení v ceně</td><td>Až 10</td></tr>
<tr><td>Poplatek z tržeb</td><td>Žádný</td></tr>
<tr><td>Platební terminál</td><td>Váš vlastní. Pokladna s ním není propojená, částku zadáváte ručně.</td></tr>
<tr><td>Hardware</td><td>Vlastní. Pokladní tiskárna musí umět ESC/POS, čtečka se chová jako USB klávesnice.</td></tr>
<tr><td>QR platba</td><td>Funguje jen s vyplněným IBAN. Příchod platby potvrzuje prodavač.</td></tr>
<tr><td>Jazyk obsluhy</td><td>Česky, vietnamsky, anglicky. Doklad vždy česky.</td></tr>
<tr><td>Export dat</td><td>CSV, ještě 12 měsíců po skončení pronájmu</td></tr>
</tbody>
</table></div>
<p>Celé srovnání tarifů najdete v <a href="cenik.html">ceníku</a>.</p>`,
      },
    ],
    faq: [
      ["Potřebuji pro malý obchod drahou pokladnu?", "Ne nutně. Rozhoduje, co každý den děláte. Spočítejte si ale cenu za celý rok, včetně dalších zařízení a doplňků."],
      ["Stačí mi tablet místo počítače?", "Záleží na provozu. U kadeřnice nebo stánku tablet často stačí. Ve večerce se čtečkou a zásuvkou se víc hodí počítač s dotykovým monitorem."],
      ["Musím mít pokladnu kvůli EET?", "Ne nutně. Evidovat jde i z tabletu, počítače nebo mobilu s vhodným programem a malým podnikatelům má stačit státní aplikace MOJE eet. Kdo se evidence týká, ověřte u Finanční správy nebo s účetní."],
      ["Jde pokladnu vyzkoušet před placením?", "U SuperKasy ano, prvních 10 dní je zdarma a kartu nezadáváte. U jiných dodavatelů se zeptejte, jestli zkouška nevyžaduje smlouvu."],
    ],
    sources: [["Finanční správa: Kdo musí evidovat tržby", "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby"]],
    related: ["navod-superkasa", "tiskarna-ctecka-zasuvka", "eet-2-0-pruvodce"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "tiskarna-ctecka-zasuvka",
    group: "pokladna",
    kicker: "Vybavení pokladny",
    title: "Pokladní tiskárna, čtečka čárových kódů a zásuvka",
    metaTitle: "Pokladní tiskárna a čtečka čárových kódů | SuperKasa",
    desc: "Jaká pokladní tiskárna a čtečka čárových kódů fungují se SuperKasou: 58 a 80 mm, USB, Bluetooth, síť, zásuvka, cenovky a co dělat, když se netiskne.",
    lead: "Přímý tisk účtenek potřebuje tiskárnu s příkazy ESC/POS, čtečka má fungovat jako USB klávesnice a zásuvka se zapojuje do tiskárny. Návod popisuje připojení i to, co dělat, když se účtenka netiskne.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 7,
    sections: [
      {
        id: "co-potrebujete",
        h2: "Co potřebujete",
        html: `
<p>Vybavení si pořizujete sami, v ceně tarifu není.</p>
<div class="tbl"><table>
<thead><tr><th>Vybavení</th><th>Co má umět</th></tr></thead>
<tbody>
<tr><td>Pokladní tiskárna</td><td>Termopapír 80 nebo 58 mm, příkazy ESC/POS</td></tr>
<tr><td>Čtečka čárových kódů</td><td>Režim „USB klávesnice (HID)“</td></tr>
<tr><td>Pokladní zásuvka</td><td>Zapojení do pokladní tiskárny</td></tr>
<tr><td>Tablet nebo telefon</td><td>Prohlížeč a fotoaparát</td></tr>
</tbody>
</table></div>
<aside class="note"><p>Zatím jsme nezkoušeli všechny typy tiskáren, seznam ověřených modelů proto neuvádíme. ESC/POS je jazyk pokladních tiskáren. Než koupíte levnou tiskárnu, ověřte u prodejce, že ho umí. Štítkové tiskárny (Zebra, TSC, Brother, Dymo) mají vlastní jazyk. Účtenky na ně přímo nepůjdou.</p></aside>`,
      },
      {
        id: "sirka",
        h2: "Tiskárna 58, nebo 80 mm",
        html: `
<div class="tbl"><table>
<thead><tr><th></th><th>80 mm</th><th>58 mm</th></tr></thead>
<tbody>
<tr><td>Znaků na řádek</td><td>42</td><td>32</td></tr>
<tr><td>Pro koho</td><td>Večerka, bistro, hlavní kasa</td><td>Přenosná tiskárna, stánek, kadeřnice</td></tr>
<tr><td>Cenovky na roli</td><td>Návrh 58 × 40 mm, zvětšený na šířku role</td><td>Návrh 40 × 30 mm</td></tr>
<tr><td>Připojení</td><td>Obvykle USB nebo síť</td><td>Často Bluetooth</td></tr>
</tbody>
</table></div>
<p>Šířku nastavíte v průvodci v poli <strong>Papír účtenky</strong>. Musí odpovídat roli, kterou máte v tiskárně.</p>`,
      },
      {
        id: "pripojeni",
        h2: "Jak tiskárnu připojit",
        html: `
<p>Průvodce otevřete v <strong>Menu → Tiskárna</strong>, nebo ve <strong>Správě → Zařízení → Přidat tiskárnu</strong>. Nabídne jen to, co vaše zařízení umí. Prodavač vidí méně voleb než majitel.</p>
<div class="tbl"><table>
<thead><tr><th>Máte</th><th>Volba v průvodci</th></tr></thead>
<tbody>
<tr><td>Počítač s Windows a pokladní tiskárna</td><td>Tisk přes okno prohlížeče (bez okna přes zástupce Chromu, viz níže)</td></tr>
<tr><td>Android a Bluetooth tiskárna</td><td>Bluetooth tiskárna</td></tr>
<tr><td>Android a tiskárna na kabelu (OTG)</td><td>USB tiskárna k telefonu / tabletu</td></tr>
<tr><td>Starší tiskárna se sériovým kabelem</td><td>Tiskárna na COM portu</td></tr>
<tr><td>Telefon nebo tablet, tiskárna u hlavní kasy</td><td>Tisknout na tiskárně hlavní kasy</td></tr>
<tr><td>Kancelářská tiskárna nebo PDF</td><td>Bez pokladní tiskárny (na počítači v prohlížeči se volba jmenuje Tisk přes okno prohlížeče)</td></tr>
</tbody>
</table></div>
<h3>Ovladač ve Windows</h3>
<p>U tiskárny na USB musí být nejdřív nainstalovaný ovladač.</p>
<ol class="steps">
<li>Zapojte tiskárnu USB kabelem a zapněte ji.</li>
<li>Počkejte, až ji Windows nainstalují. Epson TM potřebuje ovladač z webu Epsonu (EPSON Advanced Printer Driver). Jiné značky mají ovladač na CD nebo na webu prodejce.</li>
<li>Ve Windows nastavte pokladní tiskárnu jako výchozí.</li>
<li>V průvodci pokladny zvolte <strong>Tisk přes okno prohlížeče</strong> a klepněte na <strong>Uložit</strong>. Hned se otevře okno tisku se zkušebním lístkem.</li>
<li>V okně tisku vyberte pokladní tiskárnu a u Okrajů zvolte <strong>Žádné</strong>. Prohlížeč si volbu pamatuje.</li>
</ol>
<h3>Tisk bez okna</h3>
<p>Nic se nestahuje. Pokladnu jen otevíráte zástupcem Chromu, který tiskne rovnou na výchozí tiskárnu bez tiskového okna.</p>
<ol class="steps">
<li>Ve Windows nastavte pokladní tiskárnu jako výchozí.</li>
<li>Pravým tlačítkem klepněte na zástupce Google Chrome a zvolte <strong>Vlastnosti</strong>.</li>
<li>Do pole <strong>Cíl</strong> vložte <code>"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --kiosk-printing --user-data-dir="C:\\SuperKasaChrome"</code> a za to adresu svého obchodu.</li>
<li>Pokladnu otevírejte jen tímto zástupcem. Poprvé se v něm přihlaste.</li>
</ol>
<p>SuperKasa se pak otevírá ve vlastním okně Chromu nezávisle na běžném Chromu. Postup najdete i v pokladně ve <strong>Správě → Periferie → Tisk bez potvrzovacího okna</strong>. Správu Periferie vidí jen majitel.</p>
<h3>Bluetooth</h3>
<ol class="steps">
<li>Zapněte tiskárnu a v telefonu zapněte Bluetooth. Když se Android zeptá, zapněte i polohu.</li>
<li>Klepněte na <strong>Připojit tiskárnu</strong> a vyberte ji v seznamu.</li>
<li>Vytiskne se zkouška.</li>
</ol>
<aside class="note warn"><p>Po obnovení stránky se Bluetooth tiskárna sama nepřipojí. Pokladna ukáže okno <strong>Tisk se nepovedl</strong>. Klepněte na <strong>Připojit tiskárnu</strong>. Na iPhonu a iPadu Bluetooth tisk z prohlížeče nefunguje.</p></aside>
<h3>Síťová tiskárna</h3>
<p>Prohlížeč neumí posílat data přímo na síťovou tiskárnu. Přidejte ji proto do Windows (Nastavení → Tiskárny a skenery) a tiskněte na ni jako na každou jinou tiskárnu ve Windows – bez okna, nebo přes okno tisku.</p>`,
      },
      {
        id: "zasuvka",
        h2: "Pokladní zásuvka",
        html: `
<p>Zásuvka se zapojuje do pokladní tiskárny, ne do počítače. Pokladna pošle příkaz tiskárně a ta zásuvku otevře.</p>
<ol class="steps">
<li>Zapojte kabel zásuvky do tiskárny.</li>
<li>V průvodci tiskárnou zaškrtněte <strong>Otevřít zásuvku při platbě hotově (zásuvka je zapojená do tiskárny)</strong>.</li>
<li>Zkuste prodej za hotové.</li>
</ol>
<p>Ručně zásuvku otevřete v <strong>Menu → Otevřít zásuvku</strong>. Každé otevření se zapíše. Při tisku oknem prohlížeče pokladna zásuvku přímo neovládá. Musí ji otevřít ovladač tiskárny, volba je v jeho nastavení.</p>`,
      },
      {
        id: "ctecka",
        h2: "Čtečka čárových kódů",
        html: `
<p>USB čtečka funguje jako klávesnice. Stačí ji zapojit, nic se neinstaluje.</p>
<ol class="steps">
<li>Zapojte čtečku do USB.</li>
<li>Otevřete <strong>Menu → Čtečka čárových kódů</strong>.</li>
<li>Naskenujte kód z libovolného balení.</li>
<li>Pokladna napíše <strong>Čtečka funguje</strong> a kód.</li>
</ol>
<p>Čtečka má po kódu posílat Enter. Když ho neposílá, pokladna si poradí, jen o chvilku pomaleji. V návodu čtečky hledejte volbu „Enter suffix“. Česká klávesnice nevadí, pokladna si znaky ě, š, č převede na číslice sama.</p>
<p>Když čtečka píše nesmyslné znaky, přepněte ji podle jejího návodu do režimu „USB klávesnice (HID)“. Režim „COM / sériový port“ pokladna nepoužívá. Bezdrátová čtečka potřebuje svůj USB přijímač.</p>`,
      },
      {
        id: "tablet-telefon",
        h2: "Tablet nebo telefon a tisk u hlavní kasy",
        html: `
<p>Na telefonu a tabletu čte kódy fotoaparát. Bluetooth čtečku spárujete v nastavení telefonu.</p>
<p>Prodáváte na telefonu a tiskárna stojí u hlavní kasy? Nejdřív musí mít tiskárnu nastavenou hlavní kasa.</p>
<ol class="steps">
<li>Na telefonu otevřete <strong>Menu → Tiskárna</strong>.</li>
<li>Zvolte <strong>Tisknout na tiskárně hlavní kasy</strong>.</li>
<li>Vyberte zařízení, u kterého tiskárna stojí.</li>
<li>Zásuvku u hlavní kasy zapnete volbou <strong>Otevřít zásuvku u hlavní kasy při platbě hotově</strong>.</li>
<li>Klepněte na <strong>Použít a vytisknout zkoušku</strong>.</li>
</ol>
<p>Má-li hlavní kasa tiskárnu přes Bluetooth nebo USB v prohlížeči, musí mít otevřenou pokladnu. Stačí v pozadí. Jinak telefon ukáže „Hlavní kasa není otevřená“. Více je v návodu <a href="prodej-z-telefonu.html">Pokladna v telefonu a tabletu</a>.</p>`,
      },
      {
        id: "cenovky",
        h2: "Tisk cenovek",
        html: `
<p>Cenovky jsou v tarifu Obchod. Kadeřnice nebo kavárna je v pokladně nemají. Tiskne je majitel nebo vedoucí.</p>
<ol class="steps">
<li>Otevřete <strong>Správa → Tisk cenovek</strong>.</li>
<li>Vyberte zboží. Změněné ceny najdete filtrem <strong>Změna ceny od</strong>.</li>
<li>V poli <strong>Velikost</strong> zvolte roli 80 nebo 58 mm.</li>
<li>Nechte zapnuté <strong>Cena za kg / l (vyžaduje zákon)</strong>.</li>
<li>Klepněte na <strong>Tisknout cenovky</strong>.</li>
</ol>
<p>Pod <strong>Jiné tiskárny (etiketová tiskárna, A4)</strong> jsou termoetikety a archy A4. Štítkové tiskárny tisknou přes okno prohlížeče. Velikost etikety nastavte v ovladači tiskárny, třeba 58 × 40 mm. Barevné vzhledy se tisknou jen na A4.</p>
<p>Aby cenovky šly přímo do pokladní tiskárny, musí být zaškrtnuté <strong>Tisknout sem i cenovky (role 80/58 mm)</strong> ve <strong>Správě → Zařízení → Nastavit</strong>.</p>`,
      },
      {
        id: "netiskne",
        h2: "Když se netiskne",
        html: `
<div class="tbl"><table>
<thead><tr><th>Co vidíte</th><th>Co udělat</th></tr></thead>
<tbody>
<tr><td>Vyjel prázdný lístek</td><td>Otočte roli. Termopapír musí být tiskovou stranou k hlavě.</td></tr>
<tr><td>Nevyjelo nic</td><td>Zkontrolujte, že je tiskárna zapnutá, má papír a zavřené víko. Vypněte ji, zapněte a klepněte na <strong>Zkusit znovu</strong>.</td></tr>
<tr><td>Účtenka je useknutá</td><td>Nastavte správnou šířku v poli <strong>Papír účtenky</strong>.</td></tr>
<tr><td>Pokladní tiskárna chybí v okně tisku</td><td>Nainstalujte ovladač ve Windows a otevřete okno tisku znovu.</td></tr>
<tr><td>Bluetooth po obnovení stránky</td><td>Klepněte na <strong>Připojit tiskárnu</strong>, nebo <strong>Vytisknout oknem tisku</strong>.</td></tr>
<tr><td>USB tiskárnu teď používá systém</td><td>Na počítači s Windows tiskněte přes systém: v průvodci zvolte <strong>Tisk přes okno prohlížeče</strong>, případně tiskněte bez okna přes zástupce Chromu.</td></tr>
<tr><td>Prodej bez internetu přes hlavní kasu</td><td>Účtenka se tiskne oknem prohlížeče. Hlavní kasa bez internetu nepřijme tisk z telefonu.</td></tr>
</tbody>
</table></div>
<aside class="note warn"><p>Faktura se tiskne na A4. Na pokladně spuštěné přes celou obrazovku (kiosk) by šla na úzkou pokladní tiskárnu, proto ji pokladna nabídne ke stažení tlačítkem <strong>Stáhnout fakturu</strong>. Soubor otevřete a vytiskněte na tiskárně A4.</p></aside>
<p>Když nic nepomůže, zavolejte nám. Spojení najdete na stránce <a href="kontakt.html">Kontakt</a>.</p>`,
      },
    ],
    faq: [
      ["Funguje SuperKasa s mojí tiskárnou?", "Přímý tisk potřebuje tiskárnu, která rozumí příkazům ESC/POS. Všechny typy jsme nezkoušeli, proto si to ověřte zkušebním tiskem během 10 dní zdarma. Bez pokladní tiskárny můžete tisknout oknem prohlížeče."],
      ["Potřebuji ke čtečce ovladač?", "Běžná USB čtečka ovladač nepotřebuje. Musí být v režimu USB klávesnice (HID). Vyzkoušíte ji v Menu → Čtečka čárových kódů."],
      ["Otevře se zásuvka i bez tiskárny?", "Ne. Zásuvka se otevírá přes pokladní tiskárnu, ke které je zapojená."],
      ["Mohu tisknout z iPhonu?", "Bluetooth tiskárnu iPhone v prohlížeči nepřipojí. Použijte tiskárnu u hlavní kasy, nebo tablet s Androidem."],
      ["Musím používat pokladní tiskárnu na cenovky?", "Ne. Cenovky lze tisknout také na etiketovou tiskárnu přes prohlížeč nebo na obyčejnou tiskárnu na archy A4."],
    ],
    sources: [],
    related: ["navod-superkasa", "prodej-z-telefonu", "co-musi-byt-na-uctence"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "prodej-z-telefonu",
    group: "pokladna",
    kicker: "Telefon a tablet",
    title: "Pokladna v telefonu nebo tabletu a tisk u hlavní kasy",
    metaTitle: "Pokladna v mobilu a tisk u hlavní kasy | SuperKasa",
    desc: "Jak prodávat s pokladnou v telefonu nebo tabletu: přihlášení, PIN prodavače, počet zařízení, kamera jako čtečka, tisk u hlavní kasy a výpadek internetu.",
    lead: "Telefon nebo tablet se k pokladně poprvé přihlásí e-mailem a heslem majitele, prodavač pak jen PINem. Účtenky můžou vyjíždět z tiskárny u hlavní kasy a v pokladně v prohlížeči se prodává i bez internetu.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "co-potrebujete",
        h2: "Co potřebujete",
        html: `
<p>Instalovat nic nemusíte, pokladna běží v prohlížeči.</p>
<div class="tbl"><table>
<thead><tr><th>Provoz</th><th>K čemu telefon nebo tablet slouží</th></tr></thead>
<tbody>
<tr><td>Bistro</td><td>Prodej na zahrádce, účtenka vyjede u hlavní kasy</td></tr>
<tr><td>Kadeřnice</td><td>Tablet u křesla jako jediná pokladna</td></tr>
<tr><td>Stánek</td><td>Telefon a přenosná Bluetooth tiskárna</td></tr>
<tr><td>Večerka</td><td>Tablet na příjem zboží a inventuru ve skladu</td></tr>
</tbody>
</table></div>
<p>Telefon nebo tablet se k pokladně připojuje přes internet na adrese vašeho obchodu, třeba vas-obchod.superkasa.cz. Hlavní počítač nemusí běžet a prodávat můžete i mimo obchod.</p>`,
      },
      {
        id: "prihlaseni",
        h2: "Přihlášení e-mailem a heslem",
        html: `
<p>Nové zařízení přihlašuje vždy majitel. Žádný párovací kód nezadáváte.</p>
<ol class="steps">
<li>V prohlížeči telefonu otevřete adresu pokladny, nebo <a href="prihlaseni.html">stránku Přihlášení</a>.</li>
<li>Zadejte <strong>E-mail</strong> a <strong>Heslo</strong> majitele.</li>
<li>Klepněte na <strong>Přihlásit se</strong>.</li>
</ol>
<p>Zařízení se spáruje samo a majitel je rovnou přihlášený. Adresu si přidejte na plochu telefonu, aby ji prodavač snadno našel.</p>
<aside class="note"><p>E-mail účtu uvidíte a heslo změníte ve <strong>Správě → Systém → Účet majitele</strong>. Když heslo zapomenete, na přihlašovací obrazovce klepněte na <strong>Zapomenuté heslo</strong>. Zadáte e-mail, PIN majitele a nové heslo.</p></aside>`,
      },
      {
        id: "pin",
        h2: "Prodavač se přihlásí PINem",
        html: `
<p>Prodavač heslo majitele nepotřebuje. Zařízení ale musí nejdřív přihlásit majitel, i když je to telefon prodavače.</p>
<ol class="steps">
<li>Po přihlášení majitele otevřete <strong>Menu → Odhlásit</strong>.</li>
<li>Pokladna ukáže číselník. Prodavač zadá svůj PIN a potvrdí.</li>
<li>Zařízení zůstane spárované. Příště stačí PIN.</li>
</ol>
<p>Prodavač se do pokladny dostane i přes <a href="https://app.superkasa.cz/">app.superkasa.cz</a>: v části <strong>Prodavači: adresa obchodu a PIN</strong> napíše adresu a klepne na <strong>Přejít do pokladny</strong>. Na nepřihlášeném zařízení se ale objeví přihlášení majitele.</p>
<p>Po 10 špatných PINech se přihlášení na zařízení na 5 minut zamkne.</p>`,
      },
      {
        id: "kolik-zarizeni",
        h2: "Kolik zařízení je v tarifu",
        html: `
<p>V každém tarifu je <strong>až 10 zařízení</strong>. Počítá se každý počítač, tablet, telefon i každý prohlížeč, který se přihlásí jako nové zařízení. Kolik jich máte, uvidíte ve <strong>Správě → Systém → Licence a tarif</strong> v řádku <strong>Zařízení</strong>.</p>
<ul>
<li>Když je limit plný, pokladna ukáže <strong>Nahradit staré zařízení</strong>. Vyberete to, které už nepoužíváte.</li>
<li>Staré zařízení odeberete ve <strong>Správě → Zařízení</strong> tlačítkem <strong>Odebrat</strong>.</li>
<li>Potřebujete víc než 10? <a href="kontakt.html">Zavolejte nám</a>.</li>
</ul>
<p>Přehled tržeb pro majitele zařízení v tarifu nezabírá. Odkaz vytvoříte ve <strong>Správě → Systém → Majitel na mobilu</strong>. Je jen pro čtení a funguje odkudkoli.</p>
<aside class="note"><p>Všechna zařízení prodávají do jedné společné směny obchodu. Uzávěrka je jedna za celý obchod, hotovost přijatá na telefonu se v ní sečte s hlavní kasou.</p></aside>`,
      },
      {
        id: "prodej",
        h2: "Prodej na telefonu",
        html: `
<p>Nahoře je hledání a tlačítko fotoaparátu, pod ním nákup. Tlačítka <strong>Kategorie</strong> a <strong>Hlavní produkty</strong> otevřou zboží. Tlačítkem <strong>Hotovo</strong> se vrátíte k nákupu. Platba funguje stejně jako na počítači.</p>
<h3>Kamera jako čtečka</h3>
<ol class="steps">
<li>Klepněte na ikonu fotoaparátu v poli hledání.</li>
<li>Povolte prohlížeči kameru.</li>
<li>Namiřte na čárový kód. Přečte se sám.</li>
</ol>
<p>Kamera čte kódy EAN-13, EAN-8 a UPC. Zkoušku najdete v <strong>Menu → Čtečka čárových kódů</strong>.</p>
<p>Když kamera kód nepřečte, klepněte na <strong>Vyfotit</strong> a kód vyfoťte zblízka, ostře a celý, i s bílým okrajem.</p>
<p>Bluetooth čtečku spárujte v nastavení telefonu. Pak se chová jako klávesnice.</p>
<h3>Příjem zboží na tabletu</h3>
<p>Majitel nebo vedoucí otevře <strong>Správa → Sklad → Příjem zboží</strong>. Každý další sken přidá kus. Fotoaparát funguje i tady. Na konci klepněte na <strong>Naskladnit</strong>. Stejně funguje <strong>Inventura regálu</strong>.</p>`,
      },
      {
        id: "tisk",
        h2: "Tisk u hlavní kasy",
        html: `
<ol class="steps">
<li>Na hlavní kase nastavte tiskárnu. Postup je v návodu <a href="tiskarna-ctecka-zasuvka.html">Pokladní tiskárna, čtečka a zásuvka</a>.</li>
<li>Na telefonu otevřete <strong>Menu → Tiskárna</strong>.</li>
<li>Zvolte <strong>Tisknout na tiskárně hlavní kasy</strong> a vyberte zařízení.</li>
<li>Klepněte na <strong>Použít a vytisknout zkoušku</strong>.</li>
</ol>
<p>Tisk jde přes internet, telefon nemusí být na stejné Wi-Fi jako hlavní kasa.</p>
<p>Průvodce se otevře i sám při prvním tisku. Když ho zavřete, účtenky se automaticky netisknou. Vytisknete je přes <strong>Poslední</strong> a <strong>Tisk kopie</strong>.</p>
<aside class="note warn"><p>Bluetooth tiskárna k telefonu funguje jen na Androidu. Na iPhonu a iPadu prohlížeč Bluetooth tiskárnu nepřipojí, použijte tiskárnu u hlavní kasy. Po obnovení stránky je potřeba znovu klepnout na <strong>Připojit tiskárnu</strong>.</p></aside>`,
      },
      {
        id: "ztraceny-telefon",
        h2: "Ztracený nebo vyměněný telefon",
        html: `
<p>Když se telefon ztratí nebo prodavač skončí, odeberte zařízení. Do pokladny se tak nedostane cizí člověk.</p>
<ol class="steps">
<li>Na hlavní kase otevřete <strong>Správa → Zařízení</strong>.</li>
<li>U zařízení klepněte na <strong>Odebrat</strong> a potvrďte.</li>
<li>Má-li zařízení otevřenou pokladnu, pokladna se zeptá, jestli ji uzavřít na dálku. Hotovost pak nebude spočítaná, proto ji překontrolujte.</li>
</ol>
<p>Když prodavač skončí, vypněte mu ve <strong>Správě → Prodavači</strong> volbu <strong>Aktivní</strong>.</p>`,
      },
      {
        id: "vypadek",
        h2: "Výpadek internetu",
        html: `
<p>Prodej běží dál a nad nákupem se ukáže <strong>Bez internetu – prodává se dál, účtenky se nahrají samy</strong>.</p>
<ul>
<li>Platit můžete jen hotově a kartou. QR platba, věrnostní body a účet ze stolu nefungují.</li>
<li>Zařízení má předem rezervovaná čísla dokladů. Bez nich prodej nelze uložit.</li>
<li>Účtenky se uloží v zařízení a po připojení se samy nahrají s původním časem, i do EET.</li>
<li>Tlačítko <strong>Čeká</strong> ukáže čekající účtenky. <strong>Nahrát teď</strong> je pošle hned.</li>
<li>Uzávěrka počká, až se všechny účtenky nahrají.</li>
<li>Přihlášení PINem a otevření pokladny potřebují spojení. Nechte zařízení přihlášené.</li>
<li>Tisk na hlavní kase bez internetu nefunguje, účtenka jde oknem prohlížeče. Bluetooth tiskárna u telefonu tiskne dál.</li>
</ul>
<aside class="note warn"><p>Dokud účtenky čekají, nemažte data prohlížeče. Jsou jen v tom zařízení. Po 24 hodinách pokladna varuje, protože tržbu je nutné do EET odeslat do 48 hodin. Internet připojte co nejdřív.</p></aside>`,
      },
    ],
    faq: [
      ["Může prodavač použít vlastní telefon?", "Ano, ale první přihlášení musí udělat majitel svým e-mailem a heslem. Pak se odhlásí a prodavač zadá PIN."],
      ["Počítá se každý telefon do limitu zařízení?", "Ano. V tarifu je až 10 zařízení. Přehled Majitel na mobilu se do limitu nepočítá."],
      ["Musí být telefon na stejné Wi-Fi jako hlavní kasa?", "Ne. Tisk na hlavní kase jde přes internet, telefon může být klidně na mobilních datech."],
      ["Funguje pokladna na iPhonu?", "Ano, v prohlížeči. Nefunguje jen přímé připojení Bluetooth tiskárny. Tisknout můžete na tiskárně u hlavní kasy."],
      ["Můžu na telefonu tisknout cenovky?", "Ano, když jste vedoucí nebo majitel a telefon má nastavenou tiskárnu. Správa je ale na malé obrazovce méně pohodlná než na počítači."],
    ],
    sources: [],
    related: ["tiskarna-ctecka-zasuvka", "navod-superkasa", "moje-eet-nebo-pokladna"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "pokladna-pro-vietnamske-obchody",
    group: "pokladna",
    kicker: "Obsluha vietnamsky",
    title: "Pokladna ve vietnamštině pro večerky a potraviny",
    metaTitle: "Pokladna vietnamsky pro večerky a potraviny | SuperKasa",
    desc: "Večerka a pokladna vietnamsky: prodavač pracuje ve svém jazyce, doklad zůstane česky. Kategorie, cenovky, názvy zboží a pomoc s EET 2.0 v SuperKase.",
    lead: "Prodavač může mít pokladnu vietnamsky a zákazník přesto dostane účtenku česky. Návod ukáže, jak to nastavit ve večerce nebo v asijských potravinách.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "jak-to-funguje",
        h2: "Jazyk obsluhy a jazyk dokladu",
        html: `
<p>SuperKasa odděluje jazyk prodavače od jazyka dokladu.</p>
<div class="tbl"><table>
<thead><tr><th>Co</th><th>Jazyk</th></tr></thead>
<tbody>
<tr><td>Tlačítka, menu, Správa</td><td>Podle prodavače: česky, vietnamsky, anglicky</td></tr>
<tr><td>Názvy skupin zboží</td><td>Podle prodavače</td></tr>
<tr><td>Účtenka a faktura</td><td>Vždy česky</td></tr>
<tr><td>Cenovky</td><td>Vždy česky</td></tr>
<tr><td>Názvy zboží</td><td>Tak, jak je napíšete. Do pokladny patří česky.</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "nastaveni-jazyka",
        h2: "Jak nastavit vietnamštinu",
        html: `
<p><strong>Při zřízení.</strong> Klepněte na vietnamskou vlajku vpravo nahoře. Vlajka je na stránce registrace <a href="https://app.superkasa.cz/">app.superkasa.cz</a> i na obrazovce zřízení. Po registraci přejdete na adresu svého obchodu a tam je potřeba klepnout na vlajku znovu. Účet majitele se pak uloží ve vietnamštině.</p>
<p><strong>Pro prodavače.</strong></p>
<ol class="steps">
<li>Otevřete <strong>Správa → Prodavači</strong>.</li>
<li>Klepněte na prodavače, nebo na <strong>+ Nový prodavač</strong>.</li>
<li>V poli <strong>Jazyk</strong> vyberte Tiếng Việt.</li>
<li>Klepněte na <strong>Uložit</strong>.</li>
</ol>
<p>Po přihlášení PINem se pokladna přepne do jazyka prodavače. Každý si jazyk změní i sám vlajkou v horní liště, volba se mu uloží. Česká prodavačka a vietnamský majitel tak můžou používat stejnou pokladnu, každý ve svém jazyce.</p>
<p><strong>Tahák na zeď.</strong> Ve <strong>Správě → Prodavači</strong> je tlačítko <strong>Tahák pro prodavače (CZ / VI)</strong>. Vytiskne na A4 přehled nejčastějších postupů česky a vietnamsky.</p>
<aside class="note"><p>Tlačítka, menu i hlášky serveru jsou přeložené do vietnamštiny. Když přesto narazíte na český text, zavolejte nám – doplníme ho.</p></aside>`,
      },
      {
        id: "kategorie",
        h2: "Kategorie zboží",
        html: `
<p>Při zřízení vyberte obor <strong>Večerka, minimarket, potraviny</strong> (vietnamsky Tạp hóa, siêu thị mini), nebo <strong>Asijské potraviny</strong> (Thực phẩm châu Á).</p>
<ul>
<li><strong>Večerka</strong> dostane skupiny jako tabák, alkohol, nápoje, pečivo, ovoce a zelenina, zálohy a tašky.</li>
<li><strong>Asijské potraviny</strong> dostanou i ukázkové položky, třeba koriandr nebo tofu.</li>
</ul>
<p>Můžete také popsat sortiment vlastními slovy vietnamsky, například „thực phẩm châu Á, rượu sake, gạo, rau thơm“. Pokladna navrhne skupiny včetně sazeb DPH. Návrh nic nestojí a funguje i bez internetu. Než pokladnu založíte, návrh si upravíte. Sazby ověřte s účetní.</p>
<p>Názvy skupin, které pokladna založí sama, jsou přeložené. U vlastní skupiny doplňte překlad:</p>
<ol class="steps">
<li>Otevřete <strong>Správa → Skupiny</strong> a klepněte na skupinu.</li>
<li>Vyplňte <strong>Název vietnamsky (pro prodavače)</strong>.</li>
<li>Uložte.</li>
</ol>
<p>Cigarety označte v kartě zboží jako <strong>Pevná cena – bez slev (cigarety)</strong>. Zálohy na láhve jsou připravené pod PLU 0 a 3, přepravky pod PLU 8 a 9.</p>`,
      },
      {
        id: "cestina-uctenka",
        h2: "Čeština na účtence",
        html: `
<p>Na účtence je název zboží přesně tak, jak je v kartě. Pokladna ho nepřekládá. Pište proto názvy česky.</p>
<ul>
<li>Místo „Bún gạo“ napište „Rýžové nudle 200 g“.</li>
<li>Velikost balení dejte do názvu. Pokladna z ní spočítá jednotkovou cenu.</li>
</ul>
<p>Aby prodavač poznal zboží i bez češtiny, přidejte k němu fotku. V kartě zboží klepněte na <strong>Nahrát fotku</strong> nebo <strong>Hledat na internetu</strong>. Fotky ke zboží s čárovým kódem pokladna dohledává sama na pozadí. Jak daleko je, ukáže tlačítko <strong>Fotky podle EAN</strong> ve <strong>Správě → Sklad → Zboží</strong> (dohledávání lze vypnout ve <strong>Správě → Systém</strong>). Dlaždice s obrázkem se pak hledá rychleji než text.</p>
<p>Naskenujete-li neznámý kód, pokladna zkusí najít český název ve sdílené databázi SuperKasa a v Open Food Facts. Název jen zkontrolujete a doplníte cenu. Když to nefunguje, zkontrolujte ve <strong>Správě → Systém → Tisk dokladů</strong> volbu <strong>Dohledávat názvy podle čárového kódu na internetu</strong>.</p>
<p>Popisky na účtence, třeba CELKEM nebo Hotově, jsou pevně česky. Vlastní text si upravíte ve <strong>Správě → Firma</strong> v poli <strong>Text na konci dokladu</strong>. Napište ho česky. Co na účtence musí být, popisuje návod <a href="co-musi-byt-na-uctence.html">Co musí být na účtence</a>.</p>`,
      },
      {
        id: "den-ve-vecerce",
        h2: "Běžný den ve večerce",
        html: `
<p>Tyto situace řeší prodavač každý den.</p>
<div class="tbl"><table>
<thead><tr><th>Situace</th><th>Co udělat</th></tr></thead>
<tbody>
<tr><td>Zákazník vrací láhev</td><td>Napište PLU 3 a Enter. Přidá se záloha −3 Kč. Záporný nákup se vyplatí z pokladny.</td></tr>
<tr><td>Pivo s lahví</td><td>V kartě zboží nastavte <strong>Prodat spolu se</strong>. Záloha se pak přidá sama.</td></tr>
<tr><td>Rohlíky na kusy</td><td>Napište počet, klepněte na <strong>×</strong> a pak na dlaždici.</td></tr>
<tr><td>Ovoce na váhu</td><td>Klepněte na dlaždici. Pokladna se zeptá na hmotnost v kg.</td></tr>
<tr><td>Štítek z váhy</td><td>Naskenujte ho. Pokladna přečte PLU a hmotnost nebo cenu z kódu EAN-13.</td></tr>
<tr><td>Nová cena cigaret</td><td>Klepněte na položku v nákupu a změňte cenu. Platí to jen pro tento prodej, trvale cenu změníte v kartě zboží. Na zboží s pevnou cenou nelze dát slevu.</td></tr>
<tr><td>Zákazník se ptá na cenu</td><td>Stiskněte F2 a naskenujte zboží. Nic se neprodá. F2 kontrolu vypne.</td></tr>
</tbody>
</table></div>
<h3>Zaškolení nové prodavačky</h3>
<ol class="steps">
<li>Založte ji ve <strong>Správě → Prodavači</strong> a nastavte jí jazyk Tiếng Việt.</li>
<li>Vytiskněte <strong>Tahák pro prodavače (CZ / VI)</strong>.</li>
<li>Nechte ji udělat několik nákupů s vámi. Nákup před zaplacením zrušíte tlačítkem <strong>Zrušit</strong> nad nákupem.</li>
<li>Řekněte jí, že storno a vratku potvrzuje vedoucí nebo majitel svým PINem.</li>
</ol>
<aside class="note"><p>Zkušební režim, ve kterém doklady neplatí, lze zapnout, jen dokud pokladna nevydala žádný ostrý doklad. Tlačítko <strong>Zpět do zkušebního režimu</strong> je ve <strong>Správě → Systém</strong> v části <strong>Ostrý provoz</strong>.</p></aside>`,
      },
      {
        id: "cenovky",
        h2: "Cenovky",
        html: `
<p>Cenovky tisknete na pokladní tiskárně, na etiketové tiskárně nebo na A4. Jsou vždy česky, i když má prodavač pokladnu vietnamsky.</p>
<ol class="steps">
<li>Otevřete <strong>Správa → Tisk cenovek</strong>.</li>
<li>Vyberte zboží a velikost.</li>
<li>Nechte zapnuté <strong>Cena za kg / l (vyžaduje zákon)</strong>.</li>
<li>Klepněte na <strong>Tisknout cenovky</strong>.</li>
</ol>
<p>Na cenovce z termotiskárny je název, cena, jednotková cena a čárový kód. Datum tisku se na ni netiskne. Datum se objeví jen u akce, když vyplníte <strong>Akce platí do</strong>. Podrobnosti o tiskárně jsou v návodu <a href="tiskarna-ctecka-zasuvka.html">Pokladní tiskárna, čtečka a zásuvka</a>.</p>`,
      },
      {
        id: "eet",
        h2: "Pomoc s EET 2.0",
        html: `
<p>Evidence tržeb EET 2.0 začíná 1. 1. 2027. Ve <strong>Správě → EET 2.0</strong> je postup v sedmi krocích, vietnamsky i česky. S přihlášením do DIS+ vám pomůže účetní, nebo nám zavolejte.</p>
<ol class="steps">
<li>V DIS+ se přihlaste k evidenci tržeb a založte provozovnu.</li>
<li>Vytvořte pokladní certifikát a stáhněte soubor .p12. Heslo si uložte.</li>
<li>Ve <strong>Správě → EET 2.0</strong> nahrajte soubor a heslo a klepněte na <strong>Ověřit spojení</strong>.</li>
<li>V roce 2026 můžete zvolit režim <strong>Nanečisto</strong>. Ostré EET zapněte k 1. 1. 2027, nejpozději k první tržbě v roce 2027.</li>
</ol>
<p>Ostré EET vyžaduje placený pronájem. Podrobný postup je v návodu <a href="eet-2-0-krok-za-krokem.html">EET 2.0 krok za krokem</a>. Web SuperKasa je i <a href="vi/index.html">ve vietnamštině</a>.</p>
<p>Pomůžeme vám po telefonu, i ve vietnamštině: <a href="tel:+420608886882">+420 608 886 882</a>. Nastavení pokladny projdeme s vámi.</p>`,
      },
    ],
    faq: [
      ["Bude účtenka vietnamsky, když mám pokladnu vietnamsky?", "Ne. Doklad pro zákazníka je vždy česky. Vietnamsky jsou jen tlačítka, menu a skupiny zboží pro prodavače."],
      ["Může mít každý prodavač jiný jazyk?", "Ano. Jazyk je uložený u každého prodavače. Po přihlášení PINem se pokladna přepne sama."],
      ["Přeloží pokladna názvy zboží do vietnamštiny?", "Ne. Překládají se skupiny, názvy zboží zůstávají tak, jak je napíšete. Kvůli účtence je pište česky."],
      ["Je Správa také vietnamsky?", "Ano. Vlajka je i ve Správě a volba se uloží k vašemu účtu."],
      ["Pomůžete mi s nastavením ve vietnamštině?", "Ano. Zavolejte na +420 608 886 882. Pokladnu s vámi nastavíme."],
    ],
    sources: [["Finanční správa: Kdo musí evidovat tržby", "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby"]],
    related: ["navod-superkasa", "tiskarna-ctecka-zasuvka", "eet-2-0-krok-za-krokem"],
  },
];
