// Obrázky webu (spouští se jen při změně loga nebo textů náhledu, výsledek je v Gitu):
//   img/logo.png              logo do hlavičky, oříznuté od bílých okrajů (2× pro ostré displeje)
//   img/og.jpg, og-vi.jpg, og-en.jpg   náhled pro sdílení v jazyce stránky (1200×630, JPEG pod 150 kB – WhatsApp
//                             větší náhled nezobrazí). Starý img/og.png zůstává kvůli odkazům, které už sdílené jsou.
//   apple-touch-icon.png      ikona na plochu telefonu (180×180)
// Zdroj: img/superkasa-logo.webp a favicon.svg. Vykreslí je Chrome (nebo Edge) bez okna, JPEG uloží Windows
// (PowerShell, System.Drawing) – žádný balíček z npm.
//   node tools/make-images.mjs        všechno
//   node tools/make-images.mjs og     jen náhledy pro sdílení
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const icon = readFileSync(path.join(ROOT, "favicon.svg"), "utf8");
const logoUrl = pathToFileURL(path.join(ROOT, "img", "superkasa-logo.webp")).href;
const only = process.argv[2];

const browser = [
  path.join(process.env.ProgramFiles ?? "", "Google", "Chrome", "Application", "chrome.exe"),
  path.join(process.env["ProgramFiles(x86)"] ?? "", "Google", "Chrome", "Application", "chrome.exe"),
  path.join(process.env.LOCALAPPDATA ?? "", "Google", "Chrome", "Application", "chrome.exe"),
  path.join(process.env["ProgramFiles(x86)"] ?? "", "Microsoft", "Edge", "Application", "msedge.exe"),
].find((p) => existsSync(p));
if (!browser) throw new Error("Nenašel jsem Chrome ani Edge.");

const tmp = mkdtempSync(path.join(tmpdir(), "superkasa-web-"));
let n = 0;
/** Vykreslí HTML do PNG; `out` = cesta ve webu (PNG), nebo null = jen vrátí dočasný PNG. */
function render(html, w, h, out) {
  const page = path.join(tmp, `p${++n}.html`);
  const png = path.join(tmp, `p${n}.png`);
  writeFileSync(page, `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:${w}px;height:${h}px;overflow:hidden;background:transparent;font-family:"Segoe UI",system-ui,sans-serif}</style>${html}`);
  const r = spawnSync(browser, ["--headless=new", "--disable-gpu", `--user-data-dir=${path.join(tmp, "profil")}`, "--allow-file-access-from-files", "--hide-scrollbars", "--default-background-color=00000000", `--window-size=${w},${h}`, `--screenshot=${png}`, pathToFileURL(page).href], { stdio: "ignore", timeout: 60_000 });
  if (r.status !== 0 || !existsSync(png)) throw new Error(`Vykreslení selhalo (${out ?? png}).`);
  if (out) {
    writeFileSync(path.join(ROOT, out), readFileSync(png));
    console.log("✓", out);
  }
  return png;
}

/** PNG → JPEG (kvalita 0–100) přes System.Drawing ve Windows. */
function toJpeg(png, out, quality = 86) {
  const dest = path.join(ROOT, out);
  const ps = `Add-Type -AssemblyName System.Drawing; $i=[Drawing.Image]::FromFile('${png}'); $c=[Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()|?{$_.MimeType -eq 'image/jpeg'}; $p=New-Object Drawing.Imaging.EncoderParameters 1; $p.Param[0]=New-Object Drawing.Imaging.EncoderParameter([Drawing.Imaging.Encoder]::Quality,[long]${quality}); $i.Save('${dest}',$c,$p); $i.Dispose()`;
  const r = spawnSync("powershell", ["-NoProfile", "-Command", ps], { stdio: "inherit" });
  if (r.status !== 0 || !existsSync(dest)) throw new Error(`JPEG se neuložil (${out}).`);
  console.log("✓", out, `${Math.round(statSync(dest).size / 1024)} kB`);
}

// Logo 2000×694 má kolem nápisu bílý okraj – vyřízneme pás 90..1920 × 165..530.
const crop = (w) => {
  const s = w / 1830;
  return `<div style="width:${w}px;height:${Math.round(365 * s)}px;overflow:hidden;background:#fff"><img src="${logoUrl}" style="display:block;width:${2000 * s}px;margin:${-165 * s}px 0 0 ${-90 * s}px"></div>`;
};
if (only !== "og") {
  render(crop(520), 520, Math.round(365 * (520 / 1830)), "img/logo.png");
  render(`<div style="width:180px;height:180px">${icon.replace("<svg ", '<svg width="180" height="180" ').replace('rx="14"', 'rx="0"')}</div>`, 180, 180, "apple-touch-icon.png");
}

/** Náhled pro sdílení: [nadpis, podnadpis, patička, velikost písma nadpisu]. */
const OG = {
  cs: ["Pokladna pro obchody,<br>gastro a služby", "EET 2.0 · dotyková obrazovka · sklad a cenovky", "superkasa.cz · 189 Kč měsíčně s DPH · 10 dní zdarma", 62],
  vi: ["Máy tính tiền cho cửa hàng,<br>quán ăn và dịch vụ", "EET 2.0 · màn hình cảm ứng · kho và nhãn giá", "superkasa.cz · 189 Kč/tháng gồm DPH · 10 ngày miễn phí", 54],
  en: ["POS for shops,<br>food service and services", "EET 2.0 · touchscreen · stock and price labels", "superkasa.cz · CZK 189 a month incl. VAT · 10 days free", 62],
};
for (const [lang, [h, sub, foot, size]] of Object.entries(OG)) {
  const png = render(`
<div style="width:1200px;height:630px;box-sizing:border-box;padding:70px 80px;background:linear-gradient(135deg,#5c1a46 0%,#3a0f2c 100%);color:#fff;display:flex;flex-direction:column;justify-content:space-between">
  <div style="display:inline-flex;align-self:flex-start;background:#fff;border-radius:22px;padding:22px 30px">${crop(520)}</div>
  <div>
    <div style="font-size:${size}px;font-weight:700;line-height:1.12;letter-spacing:-1px">${h}</div>
    <div style="margin-top:26px;font-size:32px;color:#e2b48a;font-weight:600">${sub}</div>
  </div>
  <div style="font-size:28px;color:#f3dfca">${foot}</div>
</div>`, 1200, 630, null);
  toJpeg(png, `img/og${lang === "cs" ? "" : "-" + lang}.jpg`);
}

rmSync(tmp, { recursive: true, force: true });
