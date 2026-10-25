// Jazykové verze webu: čeština v kořeni, vietnamština v /vi/, angličtina v /en/ – stejné názvy souborů.
// Texty stránek jsou ve slovnících tools/stranky/texty/<jazyk>.mjs, texty oborů v texty/<jazyk>-obory.mjs
// (čeština oborů je přímo v obory.mjs). Šablony stránek jsou jen jedny pro všechny jazyky.
import cs from "./texty/cs.mjs";
import vi from "./texty/vi.mjs";
import en from "./texty/en.mjs";
import viObory from "./texty/vi-obory.mjs";
import enObory from "./texty/en-obory.mjs";

export const SITE = "https://superkasa.cz";
export const LANGS = ["cs", "vi", "en"];
export const LANG_INFO = {
  cs: { dir: "", short: "CZ", name: "Čeština", og: "cs_CZ" },
  vi: { dir: "vi/", short: "VI", name: "Tiếng Việt", og: "vi_VN" },
  en: { dir: "en/", short: "EN", name: "English", og: "en_GB" },
};
export const TEXTS = { cs, vi, en };
export const OBORY_TEXTS = { cs: null, vi: viObory, en: enObory };

/** Veřejná adresa stránky v daném jazyce (úvod bez index.html). */
export const pageUrl = (lang, file) => `${SITE}/${LANG_INFO[lang].dir}${file === "index.html" || file === "" ? "" : file}`;

/** Relativní odkaz ze stránky v jazyce `from` na stejný soubor v jazyce `to`. */
export const langHref = (from, to, file) => (from === "cs" ? "" : "../") + LANG_INFO[to].dir + file;

/**
 * Kontrola, že překlad má stejnou stavbu jako čeština: stejné klíče, stejně dlouhá pole, funkce tam, kde je funkce.
 * Vrací seznam rozdílů (prázdný = v pořádku).
 */
export function compareShape(ref, other, path = "") {
  const out = [];
  const kind = (v) => (Array.isArray(v) ? "array" : v === null ? "null" : typeof v);
  if (kind(ref) !== kind(other)) return [`${path || "(kořen)"}: čekám ${kind(ref)}, je ${kind(other)}`];
  if (Array.isArray(ref)) {
    if (ref.length !== other.length) out.push(`${path}: délka ${other.length}, čekám ${ref.length}`);
    ref.forEach((v, i) => i < other.length && out.push(...compareShape(v, other[i], `${path}[${i}]`)));
  } else if (kind(ref) === "object") {
    for (const k of Object.keys(ref)) {
      if (!(k in other)) out.push(`${path}.${k}: chybí`);
      else out.push(...compareShape(ref[k], other[k], `${path}.${k}`));
    }
    for (const k of Object.keys(other)) if (!(k in ref)) out.push(`${path}.${k}: navíc (v češtině není)`);
  }
  return out;
}
