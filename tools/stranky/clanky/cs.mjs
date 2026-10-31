// Články v češtině. Vzor pro překlady: stejné slugy, stejné oddíly (id), stejný počet otázek.
import eet from "./cs-eet.mjs";
import pokladna from "./cs-pokladna.mjs";

export default {
  ui: {
    title: "Návody pro pokladnu a EET 2.0 | SuperKasa",
    desc: "Srozumitelné návody pro malé obchody a provozovny: EET 2.0 krok za krokem, účtenky, pokladní tiskárna, čtečka a první den s pokladnou.",
    h1: "Návody",
    lead: "EET 2.0, doklady, tiskárna i první den s pokladnou. Psané pro majitele malých obchodů, s odkazy na oficiální zdroje.",
    groups: [["eet", "EET 2.0"], ["doklady", "Doklady a povinnosti"], ["pokladna", "Pokladna v praxi"]],
    minutes: "{n} min čtení",
    updated: "Aktualizováno",
    toc: "V tomto návodu",
    faq: "Časté otázky",
    sources: "Zdroje",
    related: "Mohlo by vás zajímat",
    crumbs: "Drobečková navigace",
    disclaimer: "Návod je obecná informace, ne právní ani daňová rada. U své konkrétní situace se poraďte s daňovým poradcem nebo finančním úřadem.",
  },
  items: [...eet, ...pokladna],
};
