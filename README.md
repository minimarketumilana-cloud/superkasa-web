# superkasa.cz – prezentační web pokladny SuperKasa

Statický web: hotové HTML a CSS, jeden malý skript na mobilní menu a filtr oborů (`js/site.js`). Žádný framework,
na hosting se nahrávají soubory tak, jak jsou. Žádné cookies ani sledovací skripty (proto není potřeba cookie lišta).
Písmo je systémové, nic se nenačítá z cizích serverů.

Web je ve třech jazycích: **čeština** v kořeni (`/index.html`…), **vietnamština** v `/vi/` a **angličtina** v `/en/` – se stejnými
názvy souborů. Přepínač jazyků v hlavičce (na mobilu v menu) vede na stejnou stránku v jiném jazyce, každá stránka má
`hreflang` odkazy (cs, vi, en, x-default) a `sitemap.xml` obsahuje všechny jazykové adresy. Obchodní podmínky a ochrana
osobních údajů se nepřekládají: ve `vi/` a `en/` je krátká stránka „Závazné znění je české“ s odkazem na české znění.

## Stránky

| Soubor | Obsah |
| --- | --- |
| `index.html` | Úvod – velké karty oborů (výběr jako v aplikaci, filtr Obchody / Gastro / Služby), proč SuperKasa, připraveno na rok 2027, jak začít |
| `obory.html` | Pro koho – stejný výběr oboru |
| `pokladna-*.html` | 26 stránek oborů: jak bude pokladna nastavená (skupiny, dlaždice, ukázkové položky, funkce, tarif) s náhledem |
| `funkce.html` | Funkce pokladny |
| `cenik.html` | Tarify, 199 Kč měsíčně / 2 149 Kč ročně s DPH, placené doplňky, zkouška, pronájem a koupě, časté otázky |
| `eet.html` | EET 2.0 – jak to pokladna dělá, co zařídí podnikatel, odkazy na Finanční správu |
| `ke-stazeni.html` | Místo pro instalátor pro Windows (zatím „připravujeme“) a potřebné vybavení |
| `kontakt.html` | Kontakt na výrobce (bez DIČ – to se nezveřejňuje) |
| `obchodni-podminky.html` | **Koncept** k právní kontrole (`noindex`, není v sitemap) |
| `ochrana-osobnich-udaju.html` | **Koncept** k právní kontrole (`noindex`, není v sitemap) |
| `404.html` | Chybová stránka (odkazy od kořene webu, funguje jen na serveru). GitHub Pages i Apache zobrazí kořenovou českou; `vi/404.html` a `en/404.html` jsou cíle přepínače jazyků |
| `vi/*.html`, `en/*.html` | Tytéž stránky ve vietnamštině a angličtině |

Obory odpovídají typům provozu v pokladně (`src/domain/presets.ts` v repozitáři pokladny), včetně typu
**Hospoda, bar, restaurace** se stoly a účty na stůl (pokladna od commitu f4d5a8d) a 26 typů provozu
z commitu 06a9566 (nové obory jako Asijské potraviny, Květinářství, Cukrárna a zmrzlina, Fitness nebo Autoservis).

Další soubory: `css/style.css`, `img/` (logo, náhled pro sdílení `og.png`, `img/obory/` = kreslené obrázky skupin
z pokladny), `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `sitemap.xml`, `robots.txt`, `.htaccess` (Apache: 404,
bezpečnostní hlavičky, cache, komprese).

## Lokální náhled

Stačí otevřít `index.html` dvojklikem v prohlížeči – všechny odkazy jsou relativní. Jen `404.html` potřebuje server.

## Úpravy

HTML stránky se skládají z podkladů ve složce `tools/stranky` (hlavička a patička jsou tak jen na jednom místě).
**Neupravujte HTML ručně** – změňte podklady a spusťte (potřebuje Node.js):

```
node tools/sestavit.mjs
```

| Podklad | Co v něm je |
| --- | --- |
| `tools/stranky/i18n.mjs` | seznam jazyků, adresy jazykových verzí, kontrola úplnosti překladů |
| `tools/stranky/texty/cs.mjs`, `vi.mjs`, `en.mjs` | **texty stránek** po jazycích (stejná stavba – sestavení ohlásí chybějící nebo přebývající klíč) |
| `tools/stranky/texty/vi-obory.mjs`, `en-obory.mjs` | texty oborů ve vietnamštině a angličtině (čeština je v `obory.mjs`), stavba podle `csOverlay()` |
| `tools/stranky/parts.mjs` | hlavička s přepínačem jazyků, menu, patička, ikony |
| `tools/stranky/obory.mjs` | data oborů a jejich české texty: skupiny, dlaždice, ukázkové položky, funkce, tarify a placené doplňky – podle repozitáře pokladny |
| `tools/stranky/obory-stranky.mjs` | výběr oboru (karty) a šablona stránky oboru s náhledem pokladny |
| `tools/stranky/pages1.mjs` | úvod a funkce |
| `tools/stranky/pages2.mjs` | ceník, EET 2.0, ke stažení, kontakt |
| `tools/stranky/pages3.mjs` | koncepty podmínek a ochrany osobních údajů, 404 |

Skript sestaví všechny tři jazyky (108 stránek), zapíše i `sitemap.xml` (s dnešním datem) a `robots.txt` a zkontroluje, že hash vloženého skriptu sedí
s Content-Security-Policy v `.htaccess`.

- Když se v pokladně změní typ provozu, tarif nebo funkce, upravte `tools/stranky/obory.mjs` **a** stejné místo
  v `texty/vi-obory.mjs` a `texty/en-obory.mjs`. Změněný český text stránky upravte i ve `vi.mjs` a `en.mjs`.
  Sestavení odmítne zapsat stránky, když překlad nemá stejnou stavbu jako čeština (vypíše, co chybí).
- Názvy položek na dlaždicích náhledu pokladny zůstávají ve všech jazycích česky (v pokladně jsou česky kvůli dokladu),
  skupiny a texty obrazovky jsou přeložené podle pokladny (`public/js/i18n.js`, `src/domain/starter.ts`).
- Po změně loga (`img/superkasa-logo.webp` nebo `favicon.svg`) znovu vyrobte obrázky: `node tools/make-images.mjs`
  (potřebuje Chrome nebo Edge). Obrázky oborů v `img/obory` jsou zkopírované z `public/img/art` v repozitáři pokladny.
- Až bude instalátor veřejný, nahraďte v `tools/stranky/pages2.mjs` (stránka Ke stažení) tlačítko „Připravujeme“
  odkazem na `https://superkasa.cz/aktualizace/SuperKasa-Setup-X.Y.Z.exe` a upravte texty „připravujeme“
  (úvod, stránky oborů).

## Nahrání na hosting

Před zveřejněním: nechat právně zkontrolovat obchodní podmínky a ochranu osobních údajů (do té doby jsou označené jako
koncept), doplnit žlutě označená místa a ověřit texty o EET 2.0 (stránka uvádí stav k 21. 10. 2026).

**Jaký hosting:** pro samotný web stačí nejlevnější webhosting se statickými soubory (PHP ani databáze nejsou potřeba),
ideálně s Apache, aby fungoval `.htaccess`. Sdílená databáze názvů zboží (`katalog.superkasa.cz`) ale potřebuje
**VPS** s Node.js (viz `docs/sdilena-databaze.md` v repozitáři pokladny). Pokud bude VPS, může na něm běžet i tenhle web
(Caddy zvládne obě domény) – pak se `.htaccess` nepoužije a hlavičky z něj je potřeba přenést do konfigurace Caddy.

1. **Doména.** U registrátora nasměrujte DNS `superkasa.cz` a `www.superkasa.cz` na hosting (záznamy A/AAAA nebo
   CNAME podle návodu hostingu). Změna DNS se projeví do několika hodin.
2. **HTTPS.** V administraci hostingu zapněte certifikát (většinou Let's Encrypt zdarma). Pak v `.htaccess` odkomentujte
   blok „Přesměrování na https“.
3. **Nahrání souborů.** Přes FTP/SFTP (např. WinSCP nebo FileZilla) nebo správce souborů hostingu nahrajte **obsah** této
   složky do kořene webu (často `www`, `public_html` nebo `htdocs`):
   `*.html`, `vi/`, `en/`, `css/`, `js/`, `img/`, `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `sitemap.xml`, `robots.txt`, `.htaccess`.
   Nenahrávejte `.git/`, `tools/` ani `README.md`.
   `.htaccess` začíná tečkou – ve FileZille zapněte Server → Zobrazit skryté soubory.
4. **Složka `aktualizace/` na serveru je pro pokladny.** Z ní si pokladny stahují `manifest.json` a instalátory
   (výchozí adresa `https://superkasa.cz/aktualizace/manifest.json`). Při nahrávání webu ji nepřepisujte ani nemažte –
   nepoužívejte „synchronizaci se smazáním“ celé složky webu. Postup vydání verze je v README repozitáře pokladny.
5. **Kontrola.** Otevřete https://superkasa.cz, proklikejte menu a výběr oboru na telefonu i počítači, zkuste
   neexistující adresu (má se ukázat stránka „Stránku jsme nenašli“) a náhled odkazu např. v Messengeru nebo WhatsAppu
   (obrázek `og.png`).
6. **Vyhledávače (volitelně).** V Google Search Console a Bing Webmaster Tools ověřte doménu a odešlete
   `https://superkasa.cz/sitemap.xml`.

Pokud hosting nepoužívá Apache (nginx, Caddy, statický hosting typu Netlify / Cloudflare Pages), `.htaccess` se ignoruje:
stránku 404 a hlavičky (hlavně Content-Security-Policy z `.htaccess`) je pak potřeba nastavit v jeho konfiguraci.
