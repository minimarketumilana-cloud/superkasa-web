# superkasa.cz – prezentační web pokladny SuperKasa

Statický web: čisté HTML a CSS, jeden malý skript na mobilní menu (`js/menu.js`). Žádný framework, žádné sestavování,
žádné cookies ani sledovací skripty (proto není potřeba cookie lišta). Písmo je systémové, nic se nenačítá z cizích serverů.

## Stránky

| Soubor | Obsah |
| --- | --- |
| `index.html` | Úvod – co SuperKasa je, pro koho, hlavní výhody, jak začít |
| `funkce.html` | Funkce pokladny |
| `cenik.html` | Tarify, 199 Kč měsíčně / 2 149 Kč ročně s DPH, zkouška, pronájem a koupě |
| `eet.html` | EET 2.0 – jak to pokladna dělá, odkazy na Finanční správu |
| `ke-stazeni.html` | Místo pro instalátor pro Windows (zatím „připravujeme“) |
| `kontakt.html` | Kontakt na výrobce (bez DIČ – to se nezveřejňuje) |
| `obchodni-podminky.html` | **Koncept** k právní kontrole (`noindex`, není v sitemap) |
| `ochrana-osobnich-udaju.html` | **Koncept** k právní kontrole (`noindex`, není v sitemap) |
| `404.html` | Chybová stránka (odkazy od kořene webu, funguje jen na serveru) |

Další soubory: `css/style.css`, `img/` (logo, náhled pro sdílení `og.png`), `favicon.ico`, `favicon.svg`,
`apple-touch-icon.png`, `sitemap.xml`, `robots.txt`, `.htaccess` (Apache: 404, bezpečnostní hlavičky, cache, komprese).

## Lokální náhled

Stačí otevřít `index.html` dvojklikem v prohlížeči – všechny odkazy jsou relativní. Jen `404.html` potřebuje server.

## Úpravy

- Hlavička a patička jsou v každé stránce zvlášť – když se mění menu nebo kontakt, upravte všechny `*.html`.
- V hlavičce každé stránky je jeden vložený skript `document.documentElement.className+=" js"`. Jeho SHA-256 je
  v `.htaccess` (Content-Security-Policy). Když ho změníte, přepočítejte hash, jinak se na serveru nespustí:
  `node -e "console.log(require('crypto').createHash('sha256').update('document.documentElement.className+=\" js\"').digest('base64'))"`
- Po změně loga (`img/superkasa-logo.webp` nebo `favicon.svg`) znovu vyrobte obrázky: `node tools/make-images.mjs`
  (potřebuje Node.js a Chrome nebo Edge).
- Po změně stránek upravte `lastmod` v `sitemap.xml`.
- Až bude instalátor veřejný, nahraďte v `ke-stazeni.html` tlačítko „Připravujeme“ odkazem na
  `https://superkasa.cz/aktualizace/SuperKasa-Setup-X.Y.Z.exe` a upravte texty „připravujeme“ na úvodu a v hlavičce stránky.

## Nahrání na hosting

Před zveřejněním: nechat právně zkontrolovat obchodní podmínky a ochranu osobních údajů (do té doby jsou označené jako
koncept), doplnit žlutě označená místa a ověřit texty o EET 2.0.

1. **Hosting a doména.** Stačí nejlevnější webhosting se statickými soubory (PHP ani databáze nejsou potřeba), ideálně
   s Apache, aby fungoval `.htaccess`. U registrátora domény nasměrujte DNS `superkasa.cz` a `www.superkasa.cz` na hosting
   (záznamy A/AAAA nebo CNAME podle návodu hostingu). Změna DNS se projeví do několika hodin.
2. **HTTPS.** V administraci hostingu zapněte certifikát (většinou Let's Encrypt zdarma). Pak v `.htaccess` odkomentujte
   blok „Přesměrování na https“.
3. **Nahrání souborů.** Přes FTP/SFTP (např. WinSCP nebo FileZilla) nebo správce souborů hostingu nahrajte **obsah** této
   složky do kořene webu (často `www`, `public_html` nebo `htdocs`):
   `*.html`, `css/`, `js/`, `img/`, `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `sitemap.xml`, `robots.txt`, `.htaccess`.
   Nenahrávejte `.git/`, `tools/` ani `README.md`.
   `.htaccess` začíná tečkou – ve FileZille zapněte Server → Zobrazit skryté soubory.
4. **Složka `aktualizace/` na serveru je pro pokladny.** Z ní si pokladny stahují `manifest.json` a instalátory
   (výchozí adresa `https://superkasa.cz/aktualizace/manifest.json`). Při nahrávání webu ji nepřepisujte ani nemažte –
   nepoužívejte „synchronizaci se smazáním“ celé složky webu. Postup vydání verze je v README repozitáře pokladny.
5. **Kontrola.** Otevřete https://superkasa.cz, proklikejte menu na telefonu i počítači, zkuste neexistující adresu
   (má se ukázat stránka „Stránku jsme nenašli“) a náhled odkazu např. v Messengeru nebo WhatsAppu (obrázek `og.png`).
6. **Vyhledávače (volitelně).** V Google Search Console a Bing Webmaster Tools ověřte doménu a odešlete
   `https://superkasa.cz/sitemap.xml`.

Pokud hosting nepoužívá Apache (např. nginx nebo statický hosting typu Netlify / Cloudflare Pages), `.htaccess` se ignoruje:
stránku 404 a hlavičky (hlavně Content-Security-Policy z `.htaccess`) je pak potřeba nastavit v jeho administraci.
