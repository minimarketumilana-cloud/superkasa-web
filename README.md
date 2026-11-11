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
| `cenik.html` | Tarify Obchod, Gastro a Služby: jen pronájem, 189 Kč měsíčně nebo 2 041 Kč ročně s DPH, placené doplňky, 10 dní zkouška, 3 dny tolerance, časté otázky |
| `eet.html` | EET 2.0 – jak to pokladna dělá, termíny (DIS+ od 1. 11. 2026, evidence od 1. 1. 2027), co zařídí podnikatel |
| `jak-zacit.html` | Jak začít: pokladna v prohlížeči bez instalace (registrace na app.superkasa.cz) a potřebné vybavení |
| `ke-stazeni.html` | Jen přesměrování na `jak-zacit.html` (stará adresa; meta refresh, `noindex`, není v sitemap). Nic se nestahuje |
| `prihlaseni.html` | Přihlášení do pokladny e-mailem a heslem majitele: `js/site.js` pošle údaje na `https://app.superkasa.cz/api/cloud/login`, cloud najde obchod a pošle prohlížeč do jeho pokladny (`#prihlasit=` jednorázový kód, zařízení se samo spáruje). Když server neodpovídá, stránka to oznámí |
| `navody.html`, články | Návody k EET 2.0, dokladům a pokladně (zdroje v `tools/stranky/clanky/`) |
| `kontakt.html` | Kontakt na výrobce (bez DIČ – to se nezveřejňuje) |
| `obchodni-podminky.html` | Obchodní podmínky pronájmu (v sitemap jen česky; `vi/` a `en/` mají krátkou `noindex` stránku s odkazem na české znění) |
| `ochrana-osobnich-udaju.html` | Ochrana osobních údajů (stejně jako podmínky) |
| `404.html` | Chybová stránka (odkazy od kořene webu, funguje jen na serveru). GitHub Pages i Apache zobrazí kořenovou českou; `vi/404.html` a `en/404.html` jsou cíle přepínače jazyků |
| `vi/*.html`, `en/*.html` | Tytéž stránky ve vietnamštině a angličtině |

Obory odpovídají typům provozu v pokladně (`src/domain/presets.ts` v repozitáři pokladny), včetně typu
**Hospoda, bar, restaurace** se stoly a účty na stůl (pokladna od commitu f4d5a8d) a 26 typů provozu
z commitu 06a9566 (nové obory jako Asijské potraviny, Květinářství, Cukrárna a zmrzlina, Fitness nebo Autoservis).

Další soubory: `css/style.css`, `img/` (logo, náhled pro sdílení `og.png`, `img/obory/` = kreslené obrázky skupin
z pokladny), `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `manifest.webmanifest` (v každém
jazyce: název, ikona a barva při přidání webu na plochu; `display: browser`, protože web je prezentace – pokladna má
vlastní manifest na adrese obchodu), `sitemap.xml`, `robots.txt`, `llms.txt` (přehled webu pro jazykové modely, generuje se z titulků a popisků stránek),
`_headers` (bezpečnostní hlavičky pro hosting, který je umí).

Stránky nemají žádný vložený styl (`style="…"` ani `<style>`): Content-Security-Policy je bez `'unsafe-inline'`.
Drobné mezery a zarovnání řeší třídy `u-*` na konci `css/style.css`; kontrola webu vložený styl nepustí.

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
| `tools/stranky/pages2.mjs` | ceník, EET 2.0, jak začít, přihlášení, kontakt |
| `tools/stranky/pages3.mjs` | obchodní podmínky, ochrana osobních údajů, 404 |
| `tools/stranky/clanky.mjs`, `clanky/*.mjs` | šablona a texty návodů (čeština v `cs-eet.mjs` a `cs-pokladna.mjs`, překlady ve `vi.mjs` a `en.mjs`) |

Skript sestaví všechny tři jazyky (144 stránek a 3 přesměrování), zapíše i `sitemap.xml` (s dnešním datem, jen indexovatelné
stránky) a `robots.txt`, manifesty (`manifest.webmanifest`, `vi/`, `en/`) a `_headers` se stejnou Content-Security-Policy jako ve stránkách.
Staré adresy, které mají jen přesměrovat, jsou v `REDIRECTS` v `tools/sestavit.mjs`.

- Když se v pokladně změní typ provozu, tarif nebo funkce, upravte `tools/stranky/obory.mjs` **a** stejné místo
  v `texty/vi-obory.mjs` a `texty/en-obory.mjs`. Změněný český text stránky upravte i ve `vi.mjs` a `en.mjs`.
  Sestavení odmítne zapsat stránky, když překlad nemá stejnou stavbu jako čeština (vypíše, co chybí).
- Názvy položek na dlaždicích náhledu pokladny zůstávají ve všech jazycích česky (v pokladně jsou česky kvůli dokladu),
  skupiny a texty obrazovky jsou přeložené podle pokladny (`public/js/i18n.js`, `src/domain/starter.ts`).
- Po změně loga (`img/superkasa-logo.webp` nebo `favicon.svg`) znovu vyrobte obrázky: `node tools/make-images.mjs`
  (potřebuje Chrome nebo Edge). Obrázky oborů v `img/obory` jsou zkopírované z `public/img/art` v repozitáři pokladny.
- SuperKasa běží jen v prohlížeči (SuperKasa Cloud). Web nesmí nabízet nic ke stažení ani instalaci – žádný instalátor,
  tiskový pomocník ani skript. Nové funkce pokladny doplňte na `funkce.html` (`funkce.*` ve slovnících) a případně do
  „Novinek v pokladně“ na úvodu (`index.newCards`).

## Kontrola SEO a identity produktu

Po sestavení spusťte `node tools/overit.mjs`. Kontrola projde canonical URL, sitemap, obousměrné jazykové odkazy,
místní odkazy a kotvy, obrázky včetně srcset, H1, titulky a JSON-LD. Při chybě skončí nenulovým návratovým kódem.

Identita produktu, provozovatele a webu je společná v `tools/stranky/parts.mjs`: `ORG`, `PRODUCT`, `software(c)`
a `entityGraph(c, ...)`. Úvod a ceník používají totožnou definici produktu v daném jazyce. Popis `index.ldDesc`
ve slovnících se zobrazuje také na stránce Kontakt. Ceny strukturovaných nabídek jsou v `PRODUCT`; při jejich
změně upravte také viditelné texty ceníku a ostatních stránek a ověřte shodu s licenčním kódem pokladny.
Nepřidávejte vymyšlené recenze, hodnocení, kontakty, certifikace ani odkazy `sameAs` na neověřené profily.

Přístup pro vyhledávací roboty už umožňuje pravidlo `User-agent: *` v robots.txt. Samotná strukturovaná data
nejsou zárukou indexace ani citování v AI odpovědích. Pro Google AI platí stejné základy jako pro běžné vyhledávání:
https://developers.google.com/search/docs/appearance/ai-features

## Zveřejnění (GitHub Pages)

Web běží zdarma na **GitHub Pages** z repozitáře `minimarketumilana-cloud/superkasa-web` (větev `main`, kořen repozitáře),
s vlastní doménou `superkasa.cz` (soubor `CNAME`, HTTPS vynucené v nastavení Pages). DNS je u WEDOS:
`superkasa.cz` → záznamy A na adresy GitHub Pages, `www` → CNAME na `minimarketumilana-cloud.github.io`.

1. **Úprava:** změnit podklady v `tools/stranky/`, spustit `node tools/sestavit.mjs` (zkontroluje i stavbu překladů).
2. **Zveřejnění:** commit a `git push` – GitHub Pages web přestaví do minuty.
3. **Složka `aktualizace/` je jen pro dříve nainstalované pokladny pro Windows** (`manifest.json`, robots ji blokuje).
   Zákazníkům se nic ke stažení nenabízí. Manifest nemazat ani neměnit bez rozhodnutí majitele, ať se nerozbijí běžící instalace.
4. **Kontrola:** otevřít https://superkasa.cz na telefonu i počítači, přepnout jazyky (vlajky v hlavičce), zkusit
   neexistující adresu (stránka „Stránku jsme nenašli“) a náhled odkazu v Messengeru nebo WhatsAppu (`og.png`).
5. **Vyhledávače (volitelně):** v Google Search Console a Bing Webmaster Tools ověřit doménu a odeslat
   `https://superkasa.cz/sitemap.xml`.

GitHub Pages neumí vlastní hlavičky: platí jen `<meta>` Content-Security-Policy ve stránkách a ochrana proti vložení do
cizího rámu v `js/site.js`; HSTS, `X-Content-Type-Options` a `frame-ancestors` tam nastavit nejdou. Soubor `_headers`
(generuje ho `tools/sestavit.mjs`) je připravený pro hosting, který hlavičky umí (Netlify, Cloudflare Pages) – tam se
použije sám; na serveru s Caddy nebo nginx by se stejné hlavičky přenesly do jeho konfigurace. Stránku 404 GitHub Pages
zobrazí kořenovou českou `404.html`.

Obchodní podmínky a ochrana osobních údajů jsou v konečném znění pro pronájem v prohlížeči (`pages3.mjs`); chybí v nich
jen kontaktní e-mail (`CONTACT_EMAIL`).
