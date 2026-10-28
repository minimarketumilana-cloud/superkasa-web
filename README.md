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
| `ke-stazeni.html` | Instalátor pro Windows (`aktualizace/SuperKasa-Setup-0.2.1.exe`, velikost a SHA-256) a potřebné vybavení |
| `prihlaseni.html` | Přihlášení do pokladny e-mailem a heslem majitele: `js/site.js` pošle údaje na `https://app.superkasa.cz/api/cloud/login`, cloud najde obchod a pošle prohlížeč do jeho pokladny (`#prihlasit=` jednorázový kód, zařízení se samo spáruje). Dokud cloud neběží, stránka to oznámí; vedle je návod pro pokladnu v obchodě (Windows, tablet ve stejné síti) |
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

Skript sestaví všechny tři jazyky (111 stránek), zapíše i `sitemap.xml` (s dnešním datem) a `robots.txt` a zkontroluje, že hash vloženého skriptu sedí
s Content-Security-Policy v `.htaccess`.

- Když se v pokladně změní typ provozu, tarif nebo funkce, upravte `tools/stranky/obory.mjs` **a** stejné místo
  v `texty/vi-obory.mjs` a `texty/en-obory.mjs`. Změněný český text stránky upravte i ve `vi.mjs` a `en.mjs`.
  Sestavení odmítne zapsat stránky, když překlad nemá stejnou stavbu jako čeština (vypíše, co chybí).
- Názvy položek na dlaždicích náhledu pokladny zůstávají ve všech jazycích česky (v pokladně jsou česky kvůli dokladu),
  skupiny a texty obrazovky jsou přeložené podle pokladny (`public/js/i18n.js`, `src/domain/starter.ts`).
- Po změně loga (`img/superkasa-logo.webp` nebo `favicon.svg`) znovu vyrobte obrázky: `node tools/make-images.mjs`
  (potřebuje Chrome nebo Edge). Obrázky oborů v `img/obory` jsou zkopírované z `public/img/art` v repozitáři pokladny.
- Při vydání nové verze pokladny upravte v `tools/stranky/pages2.mjs` (stránka Ke stažení) odkaz na
  `aktualizace/SuperKasa-Setup-X.Y.Z.exe` a kontrolní součet SHA-256 a ve slovnících (`stazeni.appMeta`) číslo verze a velikost.

## Zveřejnění (GitHub Pages)

Web běží zdarma na **GitHub Pages** z repozitáře `minimarketumilana-cloud/superkasa-web` (větev `main`, kořen repozitáře),
s vlastní doménou `superkasa.cz` (soubor `CNAME`, HTTPS vynucené v nastavení Pages). DNS je u WEDOS:
`superkasa.cz` → záznamy A na adresy GitHub Pages, `www` → CNAME na `minimarketumilana-cloud.github.io`.

1. **Úprava:** změnit podklady v `tools/stranky/`, spustit `node tools/sestavit.mjs` (zkontroluje i stavbu překladů).
2. **Zveřejnění:** commit a `git push` – GitHub Pages web přestaví do minuty.
3. **Složka `aktualizace/` je pro pokladny** (manifest a instalátory, `https://superkasa.cz/aktualizace/manifest.json`).
   Nemazat ani nepřepisovat ručně; postup vydání verze je v README repozitáře pokladny.
4. **Kontrola:** otevřít https://superkasa.cz na telefonu i počítači, přepnout jazyky (vlajky v hlavičce), zkusit
   neexistující adresu (stránka „Stránku jsme nenašli“) a náhled odkazu v Messengeru nebo WhatsAppu (`og.png`).
5. **Vyhledávače (volitelně):** v Google Search Console a Bing Webmaster Tools ověřit doménu a odeslat
   `https://superkasa.cz/sitemap.xml`.

GitHub Pages neumí vlastní hlavičky: `.htaccess` (Content-Security-Policy, cache) se nepoužije. Je v repozitáři pro
případný přechod na Apache; na serveru s Caddy by se hlavičky přenesly do jeho konfigurace. Stránku 404 GitHub Pages
zobrazí kořenovou českou `404.html`.

Před ostrým spuštěním prodeje: nechat právně zkontrolovat obchodní podmínky a ochranu osobních údajů (jsou označené jako
koncept) – po spuštění SuperKasa Cloud musí ochrana osobních údajů popsat i zpracování dat obchodů na serveru.
