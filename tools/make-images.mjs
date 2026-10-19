// Obrázky webu (spouští se jen při změně loga, výsledek je v Gitu):
//   img/logo.png              logo do hlavičky, oříznuté od bílých okrajů (2× pro ostré displeje)
//   img/og.png                náhled pro sdílení na sociálních sítích (1200×630)
//   apple-touch-icon.png      ikona na plochu telefonu (180×180)
// Zdroj: img/superkasa-logo.webp a favicon.svg. Vykreslí je Chrome (nebo Edge) bez okna.
//   node tools/make-images.mjs
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const icon = readFileSync(path.join(ROOT, "favicon.svg"), "utf8");
const logoUrl = pathToFileURL(path.join(ROOT, "img", "superkasa-logo.webp")).href;

const browser = [
  path.join(process.env.ProgramFiles ?? "", "Google", "Chrome", "Application", "chrome.exe"),
  path.join(process.env["ProgramFiles(x86)"] ?? "", "Google", "Chrome", "Application", "chrome.exe"),
  path.join(process.env.LOCALAPPDATA ?? "", "Google", "Chrome", "Application", "chrome.exe"),
  path.join(process.env["ProgramFiles(x86)"] ?? "", "Microsoft", "Edge", "Application", "msedge.exe"),
].find((p) => existsSync(p));
if (!browser) throw new Error("Nenašel jsem Chrome ani Edge.");

const tmp = mkdtempSync(path.join(tmpdir(), "superkasa-web-"));
let n = 0;
function render(html, w, h, out) {
  const page = path.join(tmp, `p${++n}.html`);
  const png = path.join(tmp, `p${n}.png`);
  writeFileSync(page, `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:${w}px;height:${h}px;overflow:hidden;background:transparent;font-family:"Segoe UI",system-ui,sans-serif}</style>${html}`);
  const r = spawnSync(browser, ["--headless=new", "--disable-gpu", `--user-data-dir=${path.join(tmp, "profil")}`, "--allow-file-access-from-files", "--hide-scrollbars", "--default-background-color=00000000", `--window-size=${w},${h}`, `--screenshot=${png}`, pathToFileURL(page).href], { stdio: "ignore", timeout: 60_000 });
  if (r.status !== 0 || !existsSync(png)) throw new Error(`Vykreslení selhalo (${out}).`);
  writeFileSync(path.join(ROOT, out), readFileSync(png));
  console.log("✓", out);
}

// Logo 2000×694 má kolem nápisu bílý okraj – vyřízneme pás 90..1920 × 165..530.
const crop = (w) => {
  const s = w / 1830;
  return `<div style="width:${w}px;height:${Math.round(365 * s)}px;overflow:hidden;background:#fff"><img src="${logoUrl}" style="display:block;width:${2000 * s}px;margin:${-165 * s}px 0 0 ${-90 * s}px"></div>`;
};
render(crop(520), 520, Math.round(365 * (520 / 1830)), "img/logo.png");

render(`<div style="width:180px;height:180px">${icon.replace("<svg ", '<svg width="180" height="180" ').replace('rx="14"', 'rx="0"')}</div>`, 180, 180, "apple-touch-icon.png");

render(`
<div style="width:1200px;height:630px;box-sizing:border-box;padding:70px 80px;background:linear-gradient(135deg,#5c1a46 0%,#3a0f2c 100%);color:#fff;display:flex;flex-direction:column;justify-content:space-between">
  <div style="display:inline-flex;align-self:flex-start;background:#fff;border-radius:22px;padding:22px 30px">${crop(520)}</div>
  <div>
    <div style="font-size:62px;font-weight:700;line-height:1.1;letter-spacing:-1px">Pokladna pro obchody,<br>gastro a služby</div>
    <div style="margin-top:26px;font-size:32px;color:#e2b48a;font-weight:600">EET 2.0 · dotyková obrazovka · sklad a cenovky</div>
  </div>
  <div style="font-size:28px;color:#f3dfca">superkasa.cz · 199 Kč měsíčně s DPH · 30 dní zdarma</div>
</div>`, 1200, 630, "img/og.png");

rmSync(tmp, { recursive: true, force: true });
