// Návody krok za krokem se snímky obrazovky: každý snímek má zakroužkovaná čísla a pod ním vysvětlení k číslům.
// Snímky (img/navody/*.webp) jsou z ukázkové pokladny (smyšlená Večerka U Lípy), pořízené skriptem ve scratchpadu.
// Texty jsou tady ve všech třech jazycích; snímky jsou z české verze pokladny (jazyk obsluhy se přepíná vlajkou).
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cta, plain } from "./parts.mjs";
import { pageUrl, SITE } from "./i18n.mjs";

const IMG_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../img/navody");

/** Rozměry obrázku WebP (VP8, VP8L, VP8X) – kvůli width/height v HTML (stránka při načítání neposkakuje). */
function webpSize(file) {
  const b = readFileSync(path.join(IMG_DIR, file));
  const kind = b.toString("ascii", 12, 16);
  if (kind === "VP8X") return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
  if (kind === "VP8L") {
    const bits = b.readUInt32LE(21);
    return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
  }
  return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
}

const T = {
  cs: {
    file: "navod-krok-za-krokem.html",
    title: "Návody krok za krokem se snímky – SuperKasa",
    desc: "Prodej, platba, nové zboží, cenovky, uzávěrka, tržba s DPH, storno a mobil majitele – postup na snímcích obrazovky SuperKasy.",
    h1: "Návody krok za krokem",
    lead: "Nejčastější práce v pokladně na snímcích obrazovky. Čísla v červených kroužcích najdete pod obrázkem s vysvětlením.",
    note: "Snímky jsou z ukázkové pokladny. Vaše pokladna může mít jiné zboží a skupiny, tlačítka jsou ale na stejném místě.",
    toc: "Obsah",
    step: "Krok",
    alt: "Snímek obrazovky SuperKasa: ",
    more: "Podrobný textový návod",
  },
  vi: {
    file: "navod-krok-za-krokem.html",
    title: "Hướng dẫn từng bước có hình ảnh – SuperKasa",
    desc: "Bán hàng, thanh toán, thêm hàng, in nhãn giá, chốt ca, doanh thu kèm thuế DPH, hủy hóa đơn và điện thoại của chủ – từng bước trên ảnh màn hình SuperKasa.",
    h1: "Hướng dẫn từng bước",
    lead: "Các thao tác thường dùng nhất trên ảnh màn hình. Số trong vòng tròn đỏ được giải thích ngay dưới ảnh.",
    note: "Ảnh chụp từ máy tính tiền mẫu bằng tiếng Séc. Ngôn ngữ của nhân viên đổi bằng nút lá cờ ở thanh trên – các nút vẫn ở cùng vị trí.",
    toc: "Nội dung",
    step: "Bước",
    alt: "Ảnh màn hình SuperKasa: ",
    more: "Hướng dẫn chi tiết bằng chữ",
  },
  en: {
    file: "navod-krok-za-krokem.html",
    title: "Step-by-step guides with screenshots – SuperKasa",
    desc: "Selling, payment, new items, price labels, closing, sales with VAT, voids and the owner's phone – step by step on SuperKasa screenshots.",
    h1: "Step-by-step guides",
    lead: "The most common tasks on screenshots. The numbers in red circles are explained right below each picture.",
    note: "Screenshots come from a demo till in Czech. Staff switch the language with the flag button in the top bar – the buttons stay in the same place.",
    toc: "Contents",
    step: "Step",
    alt: "SuperKasa screenshot: ",
    more: "Detailed text guide",
  },
};

/** Návody: [id, nadpis, úvod, kroky [[obrázek, popis obrázku, [[nadpis, text] k číslům]]]] – po jazycích. */
const GUIDES = {
  cs: [
    ["prodej", "Prodej a platba", "Zboží do nákupu dáte čtečkou, dlaždicí nebo hledáním. Zaplatit můžete tlačítkem nebo klávesou Enter.", [
      ["prodej-1-obrazovka", "Prodejní obrazovka", [
        ["Hledání a čtečka", "Naskenujte čárový kód nebo napište část názvu. Čtečka zboží přidá vždy, ať je kurzor kdekoli."],
        ["Dlaždice zboží", "Klepnutím přidáte jeden kus. Nahoře přepínáte skupiny, dole Časté položky a Nejprodávanější."],
        ["Lišta nad nákupem", "Odložit a Odložené nákupy, Historie dokladů, Poslední doklad, Zásuvka, Tisk zap./vyp. a Zrušit nákup."],
        ["Zaplatit", "Otevře placení. Stejně funguje klávesa Enter, když v hledání nic není."],
      ]],
      ["prodej-2-nakup", "Rozpracovaný nákup", [
        ["Nákup", "Každý řádek je jedna položka. Klepnutím na řádek změníte počet kusů, cenu nebo dáte slevu."],
        ["Celkem", "Částka k zaplacení včetně DPH. Hotovost pokladna zaokrouhlí na celé koruny."],
        ["Tisk zap./vyp.", "Vypnutý tisk (přeškrtnutý) znamená, že se účtenka netiskne. Pokladna si volbu pamatuje, vytisknout ji můžete vždy dodatečně přes Poslední."],
        ["Zaplatit", "Klepněte, nebo stiskněte Enter."],
      ]],
      ["prodej-3-platba", "Placení", [
        ["Způsob platby", "Hotově, Kartou (přes váš terminál), QR platba nebo kombinovaně (ikona vpravo)."],
        ["Kolik zákazník dal", "Klepněte na bankovky a mince, které vám zákazník podal, nebo částku napište do pole."],
        ["Vrátit", "Pokladna spočítá, kolik vrátit."],
        ["Potvrdit platbu", "Doklad se uloží a vytiskne (je-li tisk zapnutý). S nastaveným EET 2.0 se tržba odešle na pozadí. Funguje i klávesa Enter."],
      ]],
      ["prodej-4-hotovo", "Hotovo – další zákazník", [
        ["Potvrzení", "Dole se ukáže zaplacená částka a kolik vrátit. Nákup je prázdný pro dalšího zákazníka."],
        ["Poslední", "Otevře poslední doklad – vytisknete kopii, fakturu nebo uděláte storno."],
      ]],
    ]],
    ["zbozi", "Nové zboží a cenovka", "Nové zboží založíte z menu ☰ → Nové zboží, nebo hned při prodeji, když pokladna kód nezná.", [
      ["zbozi-1-karta", "Karta nového zboží", [
        ["Čárový kód", "Naskenujte kód. Když ho zná sdílená databáze SuperKasa, název a fotka se doplní samy. Bez kódu použijte Vytvořit kód."],
        ["Název", "Jak se má zboží jmenovat na účtence a na cenovce. Při psaní se nabízí podobné zboží."],
        ["Cena", "Prodejní cena včetně DPH."],
        ["Skupina a DPH", "Skupina určí sazbu DPH a dlaždici, kde zboží najdete. Sazbu DPH zkontrolujte vedle."],
        ["Uložit a tisk", "Uložit zboží uloží, Tisknout cenovku ho uloží a rovnou vytiskne cenovku."],
      ]],
    ]],
    ["cenovky", "Tisk cenovek", "Ve Správě → Tisk cenovek vytisknete cenovky pro víc zboží najednou – na pokladní tiskárnu, termoetikety i archy A4.", [
      ["cenovky-1-vyber", "Výběr zboží", [
        ["Zboží", "Zaškrtněte zboží. Pomůže hledání, výběr skupiny nebo datum v poli „Změna ceny od“ (cenovky jen pro zboží, kterému se změnila cena)."],
        ["Náhled", "Přesně tak, jak se cenovky vytisknou, i s cenou za 100 g nebo 1 l."],
        ["Tisknout cenovky", "Vytiskne vybrané cenovky."],
      ]],
      ["cenovky-2-velikost", "Velikost a vzhled", [
        ["Velikost", "Role 80 nebo 58 mm. Termoetikety a archy A4 jsou pod „Jiné tiskárny“."],
        ["Vzhled", "Přepínači zapnete tučné písmo, hůlková písmena, čárový kód, cenu za kg nebo l (i za 100 g) a název obchodu."],
      ]],
    ]],
    ["uzaverka", "Uzávěrka", "Na konci dne spočítáte peníze v zásuvce a pokladnu uzavřete. Pokladna je jedna pro celý obchod, uzavírá se jednou za všechna zařízení.", [
      ["uzaverka-1-pocitani", "Uzávěrka z menu ☰", [
        ["Průběžná uzávěrka", "Přehled tržby během dne bez zavření pokladny."],
        ["Spočítejte peníze", "Zadejte počet bankovek a mincí. Pokladna sečte hotovost a ukáže rozdíl proti tomu, co má být v zásuvce."],
        ["Uzavřít pokladnu", "Uzavře den a ukáže uzávěrku, tlačítkem Tisk ji vytisknete. Když na uzávěrku zapomenete, pokladna se ve 23:59 uzavře sama."],
      ]],
    ]],
    ["prehled", "Denní tržba a DPH pro účetní", "Tržbu za den, období nebo jednu uzávěrku vytisknete i s rozpisem podle sazeb DPH.", [
      ["prehled-1-den", "Správa → Přehled", [
        ["Vytisknout přehled", "Otevře tisk přehledu tržeb."],
      ]],
      ["prehled-2-tisk", "Co vytisknout", [
        ["Denní, souhrnný nebo za směnu", "Vyberte den, období (třeba měsíc) nebo jednu uzávěrku a co v přehledu ukázat."],
        ["Tisk", "Vytiskne přehled na pokladní nebo obyčejnou tiskárnu."],
      ]],
      ["prehled-3-dph", "Náhled přehledu", [
        ["Tržba celkem", "Počet dokladů, storna, vratky a tržba – pod ní rozpis hotově, kartou a převodem."],
        ["Rekapitulace DPH", "Základ, DPH a celkem podle sazeb – podklad pro účetní."],
      ]],
    ]],
    ["storno", "Storno a vratka", "Chybný nákup stornujete, vrácené zboží vyřešíte vratkou. Obojí najdete v Historii dokladů.", [
      ["storno-1-historie", "Historie dokladů", [
        ["Doklad", "V liště nad nákupem klepněte na Historie a vyberte doklad."],
      ]],
      ["storno-2-doklad", "Detail dokladu", [
        ["Stornovat celý doklad", "Zruší celý nákup – lze jen u dokladu z dnešní otevřené pokladny (před uzávěrkou), ze kterého se ještě nic nevracelo."],
        ["Vratka položek", "Zákazník vrací jen něco, nebo jde o starší nákup. Vyberete kusy a způsob vrácení peněz."],
        ["Tisk kopie", "Vytiskne kopii dokladu, vedle je Faktura."],
      ]],
    ]],
    ["telefon", "Pokladna v telefonu majitele", "Ve Správě → Systém zapnete upozornění na každý prodej, přehled tržeb v mobilu a denní souhrn e-mailem.", [
      ["telefon-1-upozorneni", "Upozornění do telefonu", [
        ["Posílat upozornění sem", "Klepněte na telefonu, kam mají upozornění chodit. Na iPhonu nejdřív přidejte SuperKasu na plochu (Sdílet → Přidat na plochu) a otevřete ji z ikony."],
      ]],
      ["telefon-2-majitel", "Majitel na mobilu", [
        ["Vytvořit odkaz", "Na počítači se ukáže QR kód k naskenování telefonem, na telefonu tlačítko Otevřít. Stránku si uložte na plochu. Přehled je jen pro čtení a odkaz se ukáže jen jednou."],
      ]],
      ["telefon-3-souhrn", "Denní souhrn e-mailem", [
        ["Posílat každý den", "Tržba, platby a nejprodávanější zboží každý den na e-mail vašeho účtu."],
        ["Čas odeslání", "Kdy souhrn přijde – třeba po zavírací době."],
      ]],
    ]],
  ],
  vi: [
    ["prodej", "Bán hàng và thanh toán", "Thêm hàng bằng máy quét, ô hàng hoặc tìm kiếm. Thanh toán bằng nút hoặc phím Enter.", [
      ["prodej-1-obrazovka", "Màn hình bán hàng", [
        ["Tìm kiếm và máy quét", "Quét mã vạch hoặc gõ một phần tên. Máy quét luôn thêm hàng, dù con trỏ ở đâu."],
        ["Ô hàng", "Chạm để thêm một món. Phía trên chuyển nhóm hàng, phía dưới là Hàng chính và Bán chạy nhất."],
        ["Thanh trên đơn hàng", "Lưu tạm và đơn lưu tạm, Lịch sử hóa đơn, Hóa đơn cuối, Ngăn kéo, In bật/tắt và Hủy đơn."],
        ["Thanh toán", "Mở màn hình thanh toán. Phím Enter cũng vậy khi ô tìm kiếm trống."],
      ]],
      ["prodej-2-nakup", "Đơn hàng đang bán", [
        ["Đơn hàng", "Mỗi dòng là một món. Chạm vào dòng để đổi số lượng, giá hoặc giảm giá."],
        ["Tổng cộng", "Số tiền phải trả đã gồm thuế DPH. Tiền mặt được làm tròn đến koruna."],
        ["In bật/tắt", "Khi tắt (gạch ngang), hóa đơn không in. Máy nhớ lựa chọn này; in lại luôn được qua nút HĐ cuối."],
        ["Thanh toán", "Chạm hoặc nhấn Enter."],
      ]],
      ["prodej-3-platba", "Thanh toán", [
        ["Hình thức thanh toán", "Tiền mặt, Thẻ (qua máy quẹt thẻ của bạn), QR hoặc kết hợp (biểu tượng bên phải)."],
        ["Khách đưa bao nhiêu", "Chạm vào tờ tiền và đồng xu khách đưa, hoặc gõ số tiền."],
        ["Tiền thối lại", "Máy tính số tiền trả lại khách."],
        ["Xác nhận thanh toán", "Hóa đơn được lưu và in (nếu bật in). Khi đã thiết lập EET 2.0, doanh thu được gửi đi ở chế độ nền. Phím Enter cũng được."],
      ]],
      ["prodej-4-hotovo", "Xong – khách tiếp theo", [
        ["Xác nhận", "Phía dưới hiện số tiền đã trả và tiền trả lại. Đơn hàng trống cho khách tiếp theo."],
        ["HĐ cuối", "Mở hóa đơn cuối – in bản sao, hóa đơn VAT hoặc hủy."],
      ]],
    ]],
    ["zbozi", "Hàng mới và nhãn giá", "Thêm hàng mới từ menu ☰ → Thêm hàng mới, hoặc ngay khi bán nếu máy chưa biết mã.", [
      ["zbozi-1-karta", "Thẻ hàng mới", [
        ["Mã vạch", "Quét mã. Nếu cơ sở dữ liệu chung SuperKasa biết mã, tên và ảnh tự điền. Không có mã thì bấm Tạo mã."],
        ["Tên", "Tên hàng trên hóa đơn và nhãn giá. Khi gõ sẽ gợi ý hàng tương tự."],
        ["Giá", "Giá bán đã gồm thuế DPH."],
        ["Nhóm và DPH", "Nhóm quyết định thuế suất DPH và ô chứa hàng. Kiểm tra thuế suất DPH bên cạnh."],
        ["Lưu và in", "Lưu sẽ lưu hàng, In nhãn giá sẽ lưu và in nhãn ngay."],
      ]],
    ]],
    ["cenovky", "In nhãn giá", "Trong Quản lý → In nhãn giá bạn in nhãn cho nhiều mặt hàng cùng lúc – máy in hóa đơn, nhãn nhiệt hoặc giấy A4.", [
      ["cenovky-1-vyber", "Chọn hàng", [
        ["Hàng", "Đánh dấu hàng. Có thể tìm, chọn nhóm hoặc chọn ngày ở ô “Đổi giá từ” (chỉ hàng đã đổi giá)."],
        ["Xem trước", "Đúng như nhãn sẽ in, cả giá cho 100 g hoặc 1 l."],
        ["In nhãn giá", "In các nhãn đã chọn."],
      ]],
      ["cenovky-2-velikost", "Kích thước và kiểu", [
        ["Kích thước", "Cuộn 80 hoặc 58 mm. Nhãn nhiệt và giấy A4 ở mục “Máy in khác”."],
        ["Kiểu", "Bật chữ đậm, chữ in hoa, mã vạch, giá theo kg hoặc l (cả theo 100 g) và tên cửa hàng bằng công tắc."],
      ]],
    ]],
    ["uzaverka", "Chốt ca", "Cuối ngày đếm tiền trong ngăn kéo và chốt ca. Cả cửa hàng có một ca chung cho mọi thiết bị.", [
      ["uzaverka-1-pocitani", "Chốt ca từ menu ☰", [
        ["Báo cáo tạm", "Xem doanh thu trong ngày mà không đóng ca."],
        ["Đếm tiền", "Nhập số tờ tiền và đồng xu. Máy cộng lại và báo chênh lệch so với số phải có."],
        ["Đóng ca", "Đóng ngày và hiện báo cáo chốt ca, bấm In để in. Nếu quên, máy tự chốt lúc 23:59."],
      ]],
    ]],
    ["prehled", "Doanh thu ngày và thuế DPH cho kế toán", "In doanh thu theo ngày, theo kỳ hoặc theo một ca, có chia theo thuế suất DPH.", [
      ["prehled-1-den", "Quản lý → Tổng quan", [
        ["In báo cáo", "Mở màn hình in báo cáo doanh thu."],
      ]],
      ["prehled-2-tisk", "In gì", [
        ["Ngày, tổng hợp hoặc theo ca", "Chọn ngày, khoảng thời gian (ví dụ một tháng) hoặc một ca và những gì hiển thị."],
        ["In", "In báo cáo ra máy in hóa đơn hoặc máy in thường."],
      ]],
      ["prehled-3-dph", "Xem trước báo cáo", [
        ["Tổng doanh thu", "Số hóa đơn, hủy, trả hàng và doanh thu – bên dưới chia theo tiền mặt, thẻ và chuyển khoản."],
        ["Tổng hợp VAT", "Tiền trước thuế, thuế DPH và tổng theo từng thuế suất – tài liệu cho kế toán."],
      ]],
    ]],
    ["storno", "Hủy hóa đơn và trả hàng", "Đơn sai thì hủy, khách trả hàng thì làm trả hàng. Cả hai ở Lịch sử hóa đơn.", [
      ["storno-1-historie", "Lịch sử hóa đơn", [
        ["Hóa đơn", "Trên thanh đơn hàng chạm Lịch sử và chọn hóa đơn."],
      ]],
      ["storno-2-doklad", "Chi tiết hóa đơn", [
        ["Hủy toàn bộ hóa đơn", "Hủy cả đơn – chỉ với hóa đơn trong ca đang mở hôm nay (trước khi chốt ca) và chưa trả lại món nào."],
        ["Trả lại hàng", "Khách chỉ trả một phần hoặc đơn cũ hơn. Chọn món và cách trả tiền."],
        ["In bản sao", "In bản sao hóa đơn; bên cạnh là Hóa đơn VAT."],
      ]],
    ]],
    ["telefon", "Máy tính tiền trên điện thoại của chủ", "Trong Quản lý → Hệ thống bật thông báo mỗi lần bán, xem doanh thu trên điện thoại và tổng kết ngày qua e-mail.", [
      ["telefon-1-upozorneni", "Thông báo về điện thoại", [
        ["Gửi thông báo tới đây", "Bấm trên điện thoại muốn nhận thông báo. Trên iPhone trước tiên thêm SuperKasa ra màn hình chính (Chia sẻ → Thêm vào MH chính) và mở từ biểu tượng."],
      ]],
      ["telefon-2-majitel", "Chủ cửa hàng trên điện thoại", [
        ["Tạo liên kết", "Trên máy tính hiện mã QR để quét bằng điện thoại, trên điện thoại có nút Mở. Lưu trang ra màn hình chính. Chỉ xem, liên kết chỉ hiện một lần."],
      ]],
      ["telefon-3-souhrn", "Tổng kết ngày qua e-mail", [
        ["Gửi mỗi ngày", "Doanh thu, thanh toán và hàng bán chạy mỗi ngày tới e-mail tài khoản của bạn."],
        ["Giờ gửi", "Khi nào nhận tổng kết – ví dụ sau giờ đóng cửa."],
      ]],
    ]],
  ],
  en: [
    ["prodej", "Selling and payment", "Add items with the scanner, a tile or search. Pay with the button or the Enter key.", [
      ["prodej-1-obrazovka", "Sales screen", [
        ["Search and scanner", "Scan a barcode or type part of the name. The scanner always adds the item, wherever the cursor is."],
        ["Item tiles", "Tap to add one piece. Switch groups at the top; Main products and Best sellers at the bottom."],
        ["Bar above the sale", "Park and parked sales, Receipt history, Last receipt, Drawer, Print on/off and Cancel sale."],
        ["Pay", "Opens payment. The Enter key does the same when the search is empty."],
      ]],
      ["prodej-2-nakup", "Sale in progress", [
        ["Sale", "Each line is one item. Tap a line to change quantity, price or give a discount."],
        ["Total", "Amount to pay including VAT. Cash is rounded to whole crowns."],
        ["Print on/off", "When off (crossed out), the receipt is not printed. The till remembers it; you can always reprint via Last."],
        ["Pay", "Tap, or press Enter."],
      ]],
      ["prodej-3-platba", "Payment", [
        ["Payment method", "Cash, Card (via your own terminal), QR payment or Split (the stacked icon on the right)."],
        ["Customer gave", "Tap the notes and coins the customer handed over, or type the amount."],
        ["Change", "The till calculates the change."],
        ["Confirm payment", "The receipt is saved and printed (if printing is on). With EET 2.0 set up, the sale is sent in the background. Enter works too."],
      ]],
      ["prodej-4-hotovo", "Done – next customer", [
        ["Confirmation", "The paid amount and change show at the bottom. The sale is empty for the next customer."],
        ["Last", "Opens the last receipt – print a copy, an invoice or void it."],
      ]],
    ]],
    ["zbozi", "New item and price label", "Create a new item from the menu ☰ → New item, or right while selling when the till doesn't know the code.", [
      ["zbozi-1-karta", "New item card", [
        ["Barcode", "Scan the code. If the SuperKasa shared database knows it, name and photo fill in by themselves. No code? Use Create code."],
        ["Name", "The name on the receipt and price label. Similar items are suggested as you type."],
        ["Price", "Selling price including VAT."],
        ["Group and VAT", "The group sets the VAT rate and the tile where you find the item. Check the VAT rate next to it."],
        ["Save and print", "Save stores the item, Print label saves it and prints the label right away."],
      ]],
    ]],
    ["cenovky", "Printing price labels", "In Admin → Print price labels you print labels for many items at once – on the receipt printer, thermal labels or A4 sheets.", [
      ["cenovky-1-vyber", "Choosing items", [
        ["Items", "Tick the items. Use search, a group or a date in the “Price changed since” field (labels only for repriced items)."],
        ["Preview", "Exactly as the labels will print, including the price per 100 g or 1 l."],
        ["Print labels", "Prints the selected labels."],
      ]],
      ["cenovky-2-velikost", "Size and look", [
        ["Size", "80 or 58 mm roll. Thermal labels and A4 sheets are under “Other printers”."],
        ["Look", "Switch on bold, capital letters, barcode, price per kg or l (or per 100 g) and the shop name."],
      ]],
    ]],
    ["uzaverka", "Closing the till", "At the end of the day count the cash in the drawer and close. There is one till for the whole shop, closed once for all devices.", [
      ["uzaverka-1-pocitani", "Closing from the menu ☰", [
        ["Interim report", "Sales during the day without closing."],
        ["Count the cash", "Enter the number of notes and coins. The till adds them up and shows the difference."],
        ["Close register", "Closes the day and shows the closing report. Press Print to print it. If someone forgets, the till closes itself at 23:59."],
      ]],
    ]],
    ["prehled", "Daily sales and VAT for the accountant", "Print sales for a day, a period or one closing, with a breakdown by VAT rate.", [
      ["prehled-1-den", "Admin → Overview", [
        ["Print a report", "Opens report printing."],
      ]],
      ["prehled-2-tisk", "What to print", [
        ["Daily, summary or shift", "Choose a day, a period (e.g. a month) or one closing, and what to show."],
        ["Print", "Prints on the receipt printer or an ordinary printer."],
      ]],
      ["prehled-3-dph", "Report preview", [
        ["Net sales", "Number of receipts, voids, refunds and sales – below by cash, card and transfer."],
        ["VAT summary", "Base, VAT and total per rate – for your accountant."],
      ]],
    ]],
    ["storno", "Voids and refunds", "Void a wrong sale, handle returned goods with a refund. Both are in the Receipt history.", [
      ["storno-1-historie", "Receipt history", [
        ["Receipt", "Tap History in the bar above the sale and pick the receipt."],
      ]],
      ["storno-2-doklad", "Receipt detail", [
        ["Void whole receipt", "Cancels the whole sale – only for receipts from today's open till (before closing) with nothing refunded yet."],
        ["Refund items", "The customer returns only part, or it's an older sale. Choose pieces and how the money goes back."],
        ["Print copy", "Prints a copy; Invoice is next to it."],
      ]],
    ]],
    ["telefon", "The till on the owner's phone", "In Admin → System turn on notifications for every sale, sales on your phone and a daily e-mail summary.", [
      ["telefon-1-upozorneni", "Phone notifications", [
        ["Send notifications here", "Tap it on the phone that should get them. On iPhone first add SuperKasa to the home screen (Share → Add to Home Screen) and open it from the icon."],
      ]],
      ["telefon-2-majitel", "Owner on mobile", [
        ["Create link", "On a computer it shows a QR code to scan with your phone; on a phone, an Open button. Add the page to the home screen. Read-only; the link is shown only once."],
      ]],
      ["telefon-3-souhrn", "Daily summary by e-mail", [
        ["Send every day", "Sales, payments and best sellers every day to your account e-mail."],
        ["Send time", "When the summary arrives – e.g. after closing time."],
      ]],
    ]],
  ],
};

/** Stránka „Návody krok za krokem“. */
export function navodyObrazkyPage(c) {
  const t = T[c.lang];
  const guides = GUIDES[c.lang];
  const img = (name) => {
    const { w, h } = webpSize(`${name}.webp`);
    return { src: `${c.up}img/navody/${name}.webp`, w, h };
  };
  return {
    file: t.file,
    current: "navody.html",
    title: t.title,
    desc: t.desc,
    // Každý návod je samostatný postup (HowTo) a každý krok má text i obrázek.
    jsonld: {
      "@context": "https://schema.org",
      "@graph": guides.map(([id, title, intro, steps]) => ({
        "@type": "HowTo",
        "@id": `${pageUrl(c.lang, t.file)}#${id}`,
        name: plain(title),
        description: plain(intro),
        inLanguage: c.lang,
        url: `${pageUrl(c.lang, t.file)}#${id}`,
        step: steps.map(([name, stepTitle, points], i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: plain(stepTitle),
          text: points.map(([h, p]) => `${plain(h)}: ${plain(p)}`).join(" "),
          image: `${SITE}/img/navody/${name}.webp`,
          url: `${pageUrl(c.lang, t.file)}#${id}`,
        })),
      })),
    },
    body: `
<section class="page-head">
  <div class="wrap">
    <h1>${t.h1}</h1>
    <p class="lead">${t.lead}</p>
    <nav class="howto-toc" aria-label="${t.toc}">
      ${guides.map(([id, title]) => `<a href="#${id}">${title}</a>`).join("\n      ")}
    </nav>
    <p class="howto-note">${t.note}</p>
    <p class="howto-more"><a href="navod-superkasa.html">${t.more} →</a></p>
  </div>
</section>
${guides
  .map(
    ([id, title, intro, steps], gi) => `<section class="section${gi % 2 ? " alt" : ""}" id="${id}">
  <div class="wrap">
    <div class="section-head"><h2>${title}</h2><p>${intro}</p></div>
    ${steps
      .map(([name, stepTitle, points], si) => {
        const im = img(name);
        return `<figure class="howto-step">
      <figcaption><span class="howto-kicker">${t.step} ${si + 1}</span> ${stepTitle}</figcaption>
      <a class="howto-shot" href="${im.src}"><img src="${im.src}" width="${im.w}" height="${im.h}" loading="lazy" decoding="async" alt="${t.alt}${stepTitle}"></a>
      <ol class="howto-points">
        ${points.map(([h, p]) => `<li><b>${h}</b> ${p}</li>`).join("\n        ")}
      </ol>
    </figure>`;
      })
      .join("\n    ")}
  </div>
</section>`,
  )
  .join("\n")}
${cta(c)}`,
  };
}
