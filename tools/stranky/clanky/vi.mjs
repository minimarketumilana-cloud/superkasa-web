// Články ve vietnamštině. Stavba odpovídá češtině (cs.mjs, cs-eet.mjs, cs-pokladna.mjs): stejné slugy, oddíly, počet otázek, zdroje.
// České úřední názvy (EET 2.0, DIS+, MOJE daně, zákony, úřady, tlačítka DIS+) zůstávají česky s vysvětlením.
// Názvy tlačítek a menu SuperKasy odpovídají vietnamštině v pokladně (public/js/i18n.js).
const ZAKON = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/Uplne_zneni_Zakon_o_EET.pdf";
const HARMONOGRAM = "https://eet.gov.cz/cs/o-eet/jaky-je-harmonogram-eet-2-0";
const KDO = "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby";
const PRAKTICKE = "https://eet.gov.cz/cs/zacinam-s-eet/prakticke-informace";
const PRIRUCKA = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/Prirucka_EET_2_0.pdf";
const POLOZKY = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_popis_polozek_datove_zpravy.pdf";

export default {
  ui: {
    title: "Hướng dẫn máy tính tiền và EET 2.0 | SuperKasa",
    desc: "Hướng dẫn dễ hiểu cho cửa hàng nhỏ: EET 2.0 từng bước, hóa đơn, máy in hóa đơn, máy quét mã vạch và ngày đầu tiên dùng máy tính tiền.",
    h1: "Hướng dẫn",
    lead: "EET 2.0, hóa đơn, máy in và ngày đầu tiên dùng máy tính tiền. Viết cho chủ cửa hàng nhỏ, có đường dẫn đến nguồn chính thức.",
    groups: [["eet", "EET 2.0 và hóa đơn"], ["pokladna", "Máy tính tiền trong thực tế"]],
    minutes: "{n} phút đọc",
    updated: "Cập nhật ngày",
    toc: "Trong hướng dẫn này",
    faq: "Câu hỏi thường gặp",
    sources: "Nguồn",
    related: "Có thể bạn quan tâm",
    crumbs: "Đường dẫn trang",
    disclaimer: "Hướng dẫn này là thông tin chung, không phải tư vấn pháp lý hay tư vấn thuế. Với trường hợp cụ thể của bạn, hãy hỏi tư vấn thuế (daňový poradce) hoặc finanční úřad (cơ quan thuế).",
  },
  items: [
  {
    slug: "eet-2-0-pruvodce",
    group: "eet",
    kicker: "Hướng dẫn cơ bản",
    title: "EET 2.0: là gì, áp dụng cho ai và bạn phải làm gì",
    metaTitle: "EET 2.0 là gì và áp dụng cho ai | SuperKasa",
    desc: "EET 2.0 áp dụng từ 1/1/2027. Ai phải ghi nhận doanh thu, khoản thu nào phải ghi, mất internet thì làm gì, mức phạt và khoản giảm thuế 5 000 Kč.",
    lead: "EET 2.0 là hệ thống ghi nhận doanh thu mới, nghĩa vụ ghi nhận bắt đầu từ ngày 1 tháng 1 năm 2027. Hệ thống này áp dụng cho người kinh doanh nhận tiền khi gặp trực tiếp khách hoặc tại cơ sở kinh doanh. Tiền mặt thì luôn phải ghi nhận.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 9,
    sections: [
      {
        id: "co-je-eet",
        h2: "EET 2.0 là gì và áp dụng từ khi nào",
        html: `
<p>EET 2.0 là hệ thống ghi nhận doanh thu điện tử (elektronická evidence tržeb). Khi khách trả tiền, máy tính tiền hoặc ứng dụng của bạn gửi qua internet cho Finanční správa (Cục Thuế Séc) một vài thông tin về khoản thanh toán đó. Nghĩa vụ ghi nhận bắt đầu từ ngày 1 tháng 1 năm 2027, theo luật Zákon č. 180/2026 Sb.</p>
<p>So với EET trước đây, thông tin phải gửi ít hơn, không còn bắt buộc in hóa đơn, và người kinh doanh nhỏ có thể dùng ứng dụng miễn phí của nhà nước. Chỉ các khoản thanh toán trực tiếp (kontaktní platby) mới phải ghi nhận.</p>
<ol class="timeline">
  <li><b>Ngày 1 tháng 11 năm 2026</b> Trong DIS+ (hộp thư thuế điện tử) trên cổng MOJE daně, bạn đã có thể kích hoạt EET, tạo đơn vị ghi nhận (evidenční jednotka) và tạo chứng chỉ máy tính tiền (pokladní certifikát).</li>
  <li><b>Ngày 1 tháng 12 năm 2026</b> Theo lịch trình, ứng dụng web miễn phí MOJE eet bắt đầu chạy.</li>
  <li><b>Ngày 1 tháng 1 năm 2027</b> Nghĩa vụ ghi nhận bắt đầu và hệ thống vận hành bình thường.</li>
  <li><b>Tháng 1 năm 2027</b> Việc ghi nhận chạy ở chế độ thí điểm (pilotní režim) để kiểm tra hoạt động trong thực tế. Theo lịch trình, đây đã là ghi nhận tiêu chuẩn.</li>
  <li><b>Ngày 11 tháng 1 năm 2027</b> Ngày cuối cùng bạn có thể đăng ký chế độ EET OFF cho năm 2027.</li>
</ol>
<aside class="note warn"><p><strong>Chế độ thí điểm không phải là hoãn.</strong> Cả lịch trình của Finanční správa lẫn luật đều tính việc ghi nhận từ ngày 1 tháng 1 năm 2027. Nếu bài viết cũ nào ghi ngày bắt đầu khác, hãy làm theo luật và lịch trình mới nhất trên eet.gov.cz.</p></aside>`,
      },
      {
        id: "koho-se-tyka",
        h2: "EET 2.0 áp dụng cho ai",
        html: `
<p>Người kinh doanh nhận tiền bán hàng hoặc dịch vụ tại Séc phải ghi nhận, nếu khoản tiền đó đáp ứng cả ba điều kiện sau:</p>
<ul>
  <li><strong>Đó là thu nhập từ kinh doanh.</strong> Tiền lương từ công việc làm thuê và tiền cho thuê ngoài hoạt động kinh doanh thì không ghi nhận.</li>
  <li><strong>Đó là thanh toán trực tiếp (kontaktní platba).</strong> Khách trả tiền khi gặp trực tiếp bạn hoặc nhân viên của bạn, hoặc trả tại cơ sở kinh doanh (provozovna) hay trên phương tiện vận tải của bạn. Tiền mặt thì luôn phải ghi nhận, kể cả khi không gặp trực tiếp.</li>
  <li><strong>Khoản đó không thuộc trường hợp ngoại lệ nào.</strong> Các ngoại lệ có ở phần tiếp theo.</li>
</ul>
<p>Bạn là người kinh doanh tự do (OSVČ) hay công ty trách nhiệm hữu hạn (s.r.o.) đều như nhau. Bạn có là người nộp thuế DPH (thuế giá trị gia tăng, tiếng Séc là plátce DPH) hay không cũng không ảnh hưởng. Quy định này áp dụng tương tự cho người nước ngoài có thu nhập kinh doanh tại Séc và nhận doanh thu ở đây.</p>
<ul>
  <li><strong>Tiệm tạp hóa:</strong> khách trả tiền mặt hoặc thẻ tại quầy. Cả hai khoản đều phải ghi nhận.</li>
  <li><strong>Thợ làm tóc:</strong> khách trả thẻ tại tiệm, hoặc trả tiền mặt tại nhà khách. Cả hai đều phải ghi nhận.</li>
  <li><strong>Quán ăn nhanh (bistro):</strong> khách trả tại chỗ bằng thẻ, phiếu ăn hoặc mã QR. Tất cả các khoản này đều phải ghi nhận.</li>
</ul>`,
      },
      {
        id: "koho-se-netyka",
        h2: "Ai và khoản nào không phải ghi nhận",
        html: `
<p>Ngoại lệ không nhiều. Danh sách đầy đủ có ở trang <a href="https://eet.gov.cz/cs/koho-se-eet-tyka/co-je-z-evidence-trzeb-vyjmuto" rel="noopener">Co je z evidence tržeb vyjmuto</a> (những gì được loại trừ khỏi việc ghi nhận doanh thu). Với người kinh doanh nhỏ, thường gặp nhất là các trường hợp sau:</p>
<ul>
  <li><strong>Chế độ EET OFF.</strong> OSVČ ở bậc 1 của thuế khoán (paušální daň) có thu nhập đến 1 triệu Kč có thể trả thêm một khoản phụ thu (přirážka) thay vì ghi nhận. Điều kiện có trong bài <a href="eet-off-pausalni-dan.html">Chế độ EET OFF</a>.</li>
  <li><strong>Máy bán hàng tự động.</strong> Ví dụ máy bán cà phê, đồ uống đóng gói hoặc bánh mì, nếu máy là một cơ sở kinh doanh riêng theo luật Živnostenský zákon (luật về kinh doanh có giấy phép). Máy chỉ là một phần của cửa hàng bạn thì không được miễn. Quầy tự thanh toán, cây xăng, khu rửa xe và tiệm giặt cũng không được miễn.</li>
  <li><strong>Nhà vệ sinh công cộng.</strong></li>
  <li><strong>Cá nước ngọt trước Giáng sinh.</strong> Bán từ ngày 18 đến ngày 24 tháng 12 tại cơ sở mà trong thời gian này chỉ bán loại cá đó và các dịch vụ liên quan.</li>
  <li><strong>Người kinh doanh khiếm thị.</strong> Áp dụng theo đúng các điều kiện của luật, ví dụ không có nhân viên. Điều kiện nằm ở § 11 của luật.</li>
  <li><strong>Pháp nhân mới thành lập.</strong> Doanh thu cho đến khi được cấp DIČ (mã số thuế) và thêm 10 ngày sau đó.</li>
  <li><strong>Khoản thu bất thường.</strong> Đó là khoản tiền hiếm hoi và không lường trước, nằm ngoài hoạt động thường ngày của bạn. Không áp dụng cho các khoản thu lặp lại.</li>
</ul>
<p>Doanh thu của nhà nước, chính quyền địa phương (obce), ngân hàng, công ty bảo hiểm, cờ bạc và dịch vụ bưu chính cũng được loại trừ khỏi việc ghi nhận.</p>
<aside class="note"><p>Nếu không chắc, hãy ghi nhận khoản doanh thu đó. Finanční správa viết trên trang của mình rằng sẽ không phản đối việc ghi nhận vượt quá nghĩa vụ. Bạn chỉ được ghi nhận những thông tin mà luật quy định.</p></aside>`,
      },
      {
        id: "co-se-eviduje",
        h2: "Khoản thanh toán nào phải ghi nhận, khoản nào không",
        html: `
<p>Điều quyết định là khách trả tiền bằng cách nào và ở đâu. Loại hàng hóa không quan trọng.</p>
<div class="tbl"><table>
  <thead><tr><th>Khoản thanh toán</th><th>Ghi nhận</th></tr></thead>
  <tbody>
    <tr><td>Tiền mặt tại cửa hàng, tại tiệm hoặc tại nhà khách</td><td>Có</td></tr>
    <tr><td>Thẻ thanh toán hoặc điện thoại trên máy quẹt thẻ</td><td>Có</td></tr>
    <tr><td>Mã QR hoặc chuyển khoản trả ngay tại cơ sở của bạn</td><td>Có</td></tr>
    <tr><td>Phiếu ăn (stravenky), phiếu mua hàng (poukázky), thẻ xu (žetony), thẻ quà tặng và thẻ trả trước</td><td>Có</td></tr>
    <tr><td>Ngân phiếu (šek), hối phiếu (směnka), tài sản mã hóa (kryptoaktiva)</td><td>Có</td></tr>
    <tr><td>Đơn hàng từ cửa hàng online, khách chỉ trả tiền khi đến nhận tại cửa hàng</td><td>Có</td></tr>
    <tr><td>Thanh toán qua cổng thanh toán hoặc mã QR trên trang web cửa hàng online</td><td>Không</td></tr>
    <tr><td>Chuyển khoản theo hóa đơn (faktura), khách gửi từ nhà hoặc từ văn phòng</td><td>Không</td></tr>
    <tr><td>Tiền thu hộ khi giao hàng (dobírka), do đơn vị bưu chính nhận từ khách rồi chuyển vào tài khoản của bạn</td><td>Không</td></tr>
  </tbody>
</table></div>
<h3>Số tiền và các trường hợp đặc biệt</h3>
<ul>
  <li><strong>Số tiền đã gồm DPH.</strong> Ghi nhận tổng số tiền. Không chia DPH theo từng thuế suất.</li>
  <li><strong>Số tiền thực nhận.</strong> Đơn hàng 81,60 Kč khách trả tiền mặt 82 Kč thì ghi nhận 82 Kč. Trả thẻ 81,60 Kč thì ghi nhận đúng số đó. Sau khi giảm giá thì ghi nhận giá đã giảm.</li>
  <li><strong>Hai cách trả tiền.</strong> Khách trả 100 Kč bằng phiếu ăn và 450 Kč bằng thẻ. Bạn ghi nhận một khoản doanh thu 550 Kč.</li>
  <li><strong>Trả lại tiền.</strong> Hàng trả lại hoặc hủy hóa đơn được ghi nhận là doanh thu âm.</li>
  <li><strong>Vỏ chai có tiền cược.</strong> Tiền cược là một phần của doanh thu. Tiền cược trả lại khách được ghi nhận là số âm, hoặc trừ vào đơn hàng.</li>
  <li><strong>Tiền đặt trước và tiền trả nốt.</strong> Mỗi lần trả là một khoản doanh thu riêng. Tiền đặt trước chuyển khoản từ nhà thì không phải ghi nhận, còn tiền trả nốt bằng tiền mặt tại cửa hàng thì phải ghi nhận.</li>
  <li><strong>Tiền ký quỹ (kauce).</strong> Khi nhận và khi trả lại đều không ghi nhận. Chỉ ghi nhận phần tiền bạn dùng để thanh toán, ví dụ bù thiệt hại, nếu trước đó bạn nhận tiền ký quỹ bằng thanh toán trực tiếp.</li>
  <li><strong>Phiếu quà tặng cho một món hàng hoặc dịch vụ cụ thể.</strong> Ghi nhận lúc mua phiếu. Lúc dùng phiếu thì không ghi nhận nữa.</li>
  <li><strong>Tiền boa.</strong> Tùy tiền boa thuộc về ai. Nếu cơ sở giữ lại thì phải ghi nhận. Nếu nhân viên nhận thì bạn không bắt buộc ghi nhận, nhưng được phép ghi nhận.</li>
</ul>
<h3>Những gì được gửi lên EET</h3>
<p>Thông tin gửi đi gồm DIČ của bạn, số đơn vị ghi nhận, mã thiết bị tính tiền, số thứ tự của khoản doanh thu, ngày giờ, tổng số tiền và mã nhận dạng bản tin. Việc nạp tiền vào thẻ trả trước (kredit) và việc dùng số tiền đó có các dòng số tiền riêng.</p>
<p>Danh sách hàng hóa, thông tin về khách và cách thanh toán không được gửi đi.</p>`,
      },
      {
        id: "jak-probiha",
        h2: "Việc ghi nhận diễn ra thế nào tại quầy",
        html: `
<ol class="steps">
  <li>Khách trả tiền và bạn nhập khoản thanh toán vào máy tính tiền.</li>
  <li>Máy tính tiền tạo một bản tin, ký bản tin bằng chứng chỉ máy tính tiền (pokladní certifikát) và gửi cho Finanční správa.</li>
  <li>Finanční správa kiểm tra bản tin và gửi lại mã xác nhận, gọi là POK. Nếu bản tin có lỗi, hệ thống gửi lại mã lỗi.</li>
  <li>Doanh thu đã được ghi nhận. Bạn xem tổng hợp trong DIS+, ở phần Evidence tržeb (ghi nhận doanh thu).</li>
</ol>
<p>Luật quy định bạn phải ghi nhận doanh thu chậm nhất là vào lúc doanh thu phát sinh. Với thanh toán thẻ, đó thường là lúc bạn nhập lệnh thanh toán. Máy tính tiền cài đặt đúng sẽ tự gửi mọi thứ và không làm chậm việc bán hàng.</p>
<p>Trong máy tính tiền có cài thời gian chờ phản hồi tối đa (mezní doba odezvy). Đó là khoảng thời gian máy đợi mã POK. Luật quy định ít nhất 2 giây. Hãy cài thời gian này theo chất lượng internet của bạn.</p>
<p>Mã POK không nhất thiết phải in trên hóa đơn, và luật không buộc phải lưu giữ mã này. Luật về EET cũng không bắt buộc phải xuất hóa đơn (účtenka). Tuy nhiên luật khác có thể yêu cầu chứng từ. Chi tiết có trong bài <a href="co-musi-byt-na-uctence.html">Trên hóa đơn phải ghi những gì</a>.</p>`,
      },
      {
        id: "vypadek-48-hodin",
        h2: "Mất internet và thời hạn 48 giờ",
        html: `
<p>Khi mất internet, bạn cứ bán hàng tiếp. Hãy gửi doanh thu ngay khi có kết nối trở lại, chậm nhất trong vòng 48 giờ kể từ khi doanh thu phát sinh. Đa số máy tính tiền tự làm việc này.</p>
<p>Ví dụ trong tài liệu của Finanční správa: cửa hàng nhận tiền mặt ngày 25 tháng 4 năm 2027 lúc 15:30. Internet có lại vào ngày hôm sau lúc 9:30 và doanh thu được gửi đi ngay lúc đó. Trong trường hợp này, thời hạn 48 giờ sẽ hết vào ngày 27 tháng 4 năm 2027 lúc 15:30.</p>
<p>Sau 48 giờ, nghĩa vụ không mất đi. Bạn vẫn phải gửi doanh thu đó.</p>
<h3>Máy tính tiền bị hỏng</h3>
<p>Bạn không phải đóng cửa hàng vì máy hỏng. Finanční správa khuyên làm như sau:</p>
<ul>
  <li>Gọi ngay cho nhà cung cấp hoặc đơn vị sửa chữa.</li>
  <li>Ghi lại thông tin các khoản doanh thu để ghi nhận sau.</li>
  <li>Giữ giấy tờ về sự cố, ví dụ biên bản sửa chữa hoặc xác nhận của nhà cung cấp điện.</li>
  <li>Sau khi sửa xong, ghi nhận tất cả các khoản doanh thu. Mỗi khoản ghi nhận riêng. Chỉ trong trường hợp đặc biệt và có thỏa thuận với cơ quan thuế (správce daně) mới được dùng một số tiền tổng.</li>
</ul>
<p>Nếu một khoản doanh thu được gửi hai lần với cùng các thông tin cơ bản, hệ thống đánh dấu là trùng lặp và không tính vào tổng.</p>`,
      },
      {
        id: "pokuty-kontroly",
        h2: "Tiền phạt và kiểm tra",
        html: `
<p>Vi phạm nghĩa vụ gửi thông tin doanh thu có thể bị phạt đến 500 000 Kč. Mức trần này cũng áp dụng cho hành vi gây khó khăn nghiêm trọng hoặc cản trở việc ghi nhận. Đây là mức cao nhất có thể, không phải mức phạt cố định.</p>
<p>Việc thực hiện nghĩa vụ do finanční úřady (cơ quan thuế) và celní úřady (hải quan) kiểm tra. Celní úřad có thể phạt ngay tại chỗ bằng quyết định gọi là příkaz na místě.</p>
<p>Trong sổ tay EET 2.0 có ghi rằng ở giai đoạn đầu, Finanční správa chủ yếu chú trọng hỗ trợ người kinh doanh và tư vấn, không chú trọng xử phạt. Nhưng luật không quy định khoảng thời gian nào được miễn phạt.</p>`,
      },
      {
        id: "sleva-5000",
        h2: "Giảm thuế đến 5 000 Kč",
        html: `
<p>Khoản giảm này được quy định trong zákon o daních z příjmů (luật thuế thu nhập). Người được hưởng là người kinh doanh cá nhân (fyzická osoba) có nộp tờ khai thuế (daňové přiznání). Công ty s.r.o. không có khoản giảm này. Bạn chỉ dùng được một lần, cho năm đầu tiên bạn bắt buộc ghi nhận doanh thu. Với đa số người kinh doanh, đó sẽ là năm 2027.</p>
<p>OSVČ có số thuế bằng thuế khoán (paušální daň) thì không được hưởng, vì người đó không nộp tờ khai. Đây là cách hiểu luật của chúng tôi, Finanční správa không nêu rõ điều này. Hãy kiểm tra lại với finanční úřad (cơ quan thuế) hoặc kế toán.</p>
<p>Khoản giảm không phụ thuộc vào số máy tính tiền, cũng không phụ thuộc vào việc bạn đã từng ghi nhận trong EET cũ hay chưa. Bạn có phải là người nộp thuế DPH hay không cũng không ảnh hưởng.</p>
<p>Cách tính khoản giảm như sau: 15 % cơ sở tính thuế thành phần từ hoạt động kinh doanh độc lập (dílčí základ daně ze samostatné činnosti) trừ đi khoản giảm cơ bản cho người nộp thuế (základní sleva na poplatníka), là <a href="https://e-sbirka.gov.cz/sb/1992/586/2027-01-01#par_35ba" rel="noopener">30 840 Kč</a>. Khoản giảm tối đa là 5 000 Kč.</p>
<div class="tbl"><table>
  <thead><tr><th>Cơ sở tính thuế thành phần</th><th>15 %</th><th>Sau khi trừ 30 840 Kč</th><th>Khoản giảm</th></tr></thead>
  <tbody>
    <tr><td>300 000 Kč</td><td>45 000 Kč</td><td>14 160 Kč</td><td>5 000 Kč</td></tr>
    <tr><td>220 000 Kč</td><td>33 000 Kč</td><td>2 160 Kč</td><td>2 160 Kč</td></tr>
    <tr><td>200 000 Kč</td><td>30 000 Kč</td><td>số âm</td><td>0 Kč</td></tr>
  </tbody>
</table></div>
<p>Việc áp dụng khoản giảm, bạn hãy kiểm tra với kế toán hoặc tư vấn thuế (daňový poradce) của mình.</p>`,
      },
      {
        id: "co-je-potreba",
        h2: "Bạn cần gì để ghi nhận doanh thu",
        html: `
<ul>
  <li><strong>Quyền truy cập DIS+</strong> trên cổng MOJE daně.</li>
  <li><strong>Đơn vị ghi nhận (evidenční jednotka).</strong> Thường chính là cửa hàng của bạn.</li>
  <li><strong>Chứng chỉ máy tính tiền (pokladní certifikát).</strong> Chứng chỉ này miễn phí. Không có nó, máy tính tiền không gửi được doanh thu.</li>
  <li><strong>Thiết bị có internet.</strong> Có thể là máy tính tiền, máy tính, máy tính bảng hoặc điện thoại có phần mềm phù hợp.</li>
</ul>
<p>Thường bạn không cần mua máy tính tiền mới. Nếu đã có máy, hãy hỏi nhà cung cấp xem máy có chạy được EET 2.0 không. Cách làm chi tiết có trong bài <a href="eet-2-0-krok-za-krokem.html">EET 2.0 từng bước</a>. Sự khác nhau giữa ứng dụng nhà nước và máy tính tiền có trong bài <a href="moje-eet-nebo-pokladna.html">MOJE eet hay hệ thống máy tính tiền</a>.</p>
<p>Nếu bạn đang chọn máy tính tiền, SuperKasa có EET 2.0 trong mọi gói và chúng tôi đã thử kết nối trong môi trường thử của Finanční správa. Giá có trong <a href="cenik.html">bảng giá</a>.</p>`,
      },
    ],
    faq: [
      ["Tháng 1 năm 2027 có chế độ thí điểm thì tôi có phải ghi nhận không?", "Có. Theo lịch trình của Finanční správa, tháng 1 là chế độ thí điểm (pilotní režim), nhưng đã là ghi nhận tiêu chuẩn. Luật quy định nghĩa vụ từ ngày 1 tháng 1 năm 2027 và không có khoản hoãn nào."],
      ["Vì EET tôi có phải in hóa đơn không?", "Không. Luật về ghi nhận doanh thu (zákon o evidenci tržeb) không bắt buộc in hóa đơn. Tuy nhiên nghĩa vụ xuất chứng từ có thể phát sinh theo zákon o DPH (luật thuế giá trị gia tăng) hoặc zákon o ochraně spotřebitele (luật bảo vệ người tiêu dùng)."],
      ["Vì EET 2.0 tôi có phải mua máy tính tiền mới không?", "Đa số trường hợp là không. Bạn tự chọn thiết bị, chỉ cần phần mềm phù hợp và internet. Với máy cũ, thường chỉ cần nhà cung cấp cập nhật."],
      ["Thanh toán thẻ có phải ghi nhận không?", "Có, khi khách trả thẻ tại cơ sở của bạn hoặc khi gặp trực tiếp. Thanh toán thẻ qua cổng thanh toán trên trang web cửa hàng online thì không ghi nhận."],
      ["Tiền boa có phải ghi nhận không?", "Tùy tiền boa thuộc về ai. Tiền boa cơ sở giữ lại thì phải ghi nhận. Tiền boa cho nhân viên thì bạn không bắt buộc ghi nhận, nhưng có thể ghi nếu muốn theo dõi."],
      ["Người không nộp thuế DPH (neplátce DPH) có phải ghi nhận không?", "Có. Nghĩa vụ này không phụ thuộc vào việc đăng ký DPH. Ngoại lệ chỉ là OSVČ đáp ứng điều kiện và đăng ký chế độ EET OFF."],
    ],
    sources: [
      ["Luật Zákon č. 180/2026 Sb. về ghi nhận doanh thu, toàn văn (eet.gov.cz)", ZAKON],
      ["Lịch trình EET 2.0 (Finanční správa)", HARMONOGRAM],
      ["Ai phải ghi nhận doanh thu (Finanční správa)", KDO],
      ["Thông tin thực tế: mất mạng, hỏng máy, giảm thuế (Finanční správa)", PRAKTICKE],
      ["Sổ tay EET 2.0 (Finanční správa)", PRIRUCKA],
      ["Mô tả các mục của bản tin dữ liệu, có ví dụ (Finanční správa)", POLOZKY],
    ],
    related: ["eet-2-0-krok-za-krokem", "eet-off-pausalni-dan", "moje-eet-nebo-pokladna"],
  },

  {
    slug: "eet-2-0-krok-za-krokem",
    group: "eet",
    kicker: "Từng bước",
    title: "EET 2.0 từng bước: DIS+, đơn vị ghi nhận và chứng chỉ máy tính tiền",
    metaTitle: "EET 2.0 từng bước: DIS+ và chứng chỉ | SuperKasa",
    desc: "Các bước làm EET 2.0: đăng nhập DIS+, tạo đơn vị ghi nhận, chứng chỉ .p12 và mật khẩu, tải lên máy tính tiền, thử bằng chế độ kiểm tra (ověřovací mód).",
    lead: "Để ghi nhận doanh thu, bạn cần quyền truy cập DIS+, một đơn vị ghi nhận (evidenční jednotka) đã tạo và chứng chỉ máy tính tiền (pokladní certifikát). Từ ngày 1 tháng 11 năm 2026, bạn làm online trên cổng MOJE daně và chứng chỉ miễn phí.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 9,
    sections: [
      {
        id: "prehled-kroku",
        h2: "Sáu bước theo đúng thứ tự này",
        html: `
<p>Trước tiên bạn tạo đơn vị ghi nhận (evidenční jednotka), sau đó mới tạo chứng chỉ máy tính tiền (pokladní certifikát). Không đổi được thứ tự này. Luật quy định như vậy, và DIS+ (hộp thư thuế điện tử) chỉ hiện phần chứng chỉ sau khi bạn đã tạo đơn vị đầu tiên.</p>
<ol class="steps">
  <li>Đăng nhập vào DIS+ trên cổng MOJE daně.</li>
  <li>Kích hoạt EET trong DIS+.</li>
  <li>Tạo đơn vị ghi nhận.</li>
  <li>Tạo chứng chỉ máy tính tiền, lưu tệp .p12 và mật khẩu.</li>
  <li>Tải chứng chỉ lên máy tính tiền.</li>
  <li>Thử kết nối mà chưa ghi nhận thật.</li>
</ol>
<aside class="note"><p>Ai dùng ứng dụng nhà nước MOJE eet thì không phải làm bước 4 và 5. Theo Finanční správa (Cục Thuế Séc), sau khi ghép nối với DIS+, ứng dụng tự lo chứng chỉ. So sánh có trong bài <a href="moje-eet-nebo-pokladna.html">MOJE eet hay hệ thống máy tính tiền</a>.</p></aside>`,
      },
      {
        id: "prihlaseni-dis",
        h2: "Bước 1: đăng nhập DIS+ trên mojedane.gov.cz",
        html: `
<p>DIS+ là viết tắt của daňová informační schránka plus, tức hộp thư thuế điện tử. Đây là cơ quan thuế trực tuyến của Finanční správa. Hãy mở <a href="https://mojedane.gov.cz" rel="noopener">mojedane.gov.cz</a> và bấm vào ô Online finanční úřad (cơ quan thuế trực tuyến). Có ba cách đăng nhập:</p>
<ul>
  <li>bằng danh tính công dân (identita občana), ví dụ danh tính ngân hàng (bankovní identita) hoặc thẻ căn cước điện tử (eObčanka),</li>
  <li>bằng thông tin đăng nhập hộp thư dữ liệu (datová schránka),</li>
  <li>bằng thông tin truy cập do Finanční správa cấp.</li>
</ul>
<p>Nếu chưa kích hoạt DIS+, sau khi đăng nhập hãy bấm nút Aktivovat (kích hoạt). Hộp thư sẽ mở chậm nhất trong 48 giờ. Nếu finanční úřad (cơ quan thuế) chưa có hồ sơ của bạn, quá trình này có thể mất đến 5 ngày làm việc.</p>
<h3>Không có danh tính công dân và không có hộp thư dữ liệu</h3>
<p>Cách này chủ yếu dành cho người nước ngoài. Trước tiên bạn xin thông tin truy cập:</p>
<ol class="steps">
  <li>Trên cổng, bấm vào Online finanční úřad rồi vào Jak získat přístup do DIS+ (cách lấy quyền truy cập DIS+).</li>
  <li>Ở mục Přístupové údaje přidělené Finanční správou ČR (thông tin truy cập do Finanční správa cấp), mở Více informací (thông tin thêm) và điền đơn. Bạn cần e-mail, số điện thoại di động và mật khẩu do bạn tự chọn.</li>
  <li>Điền thông tin đúng chính xác theo giấy tờ tùy thân. Đơn đã gửi thì không sửa được lỗi, bạn phải nộp đơn mới.</li>
  <li>Lưu lại tên người dùng (název uživatele) và mã đơn (identifikátor žádosti).</li>
  <li>Trong vòng 30 ngày, hãy đến trực tiếp bất kỳ chi nhánh nào của finanční úřad (územní pracoviště). Mang theo giấy tờ tùy thân.</li>
</ol>
<p>Người đến cơ quan phải là chính người đã nộp đơn. Người được ủy quyền (zmocněnec) có giấy ủy quyền đã chứng thực (úředně ověřená plná moc) có thể đi thay. Với luật sư hoặc tư vấn thuế (daňový poradce) thì không cần chứng thực.</p>`,
      },
      {
        id: "aktivace-eet",
        h2: "Bước 2: kích hoạt EET trong DIS+",
        html: `
<p>Ở phần trên của trang DIS+, bấm nút AKTIVOVAT EET (kích hoạt EET) và xác nhận trong cửa sổ mới. Sau đó hiện ra cửa sổ nêu các bước cơ bản. Đóng cửa sổ này bằng nút ROZUMÍM (tôi hiểu).</p>
<p>Như vậy là bạn đã đăng ký ghi nhận doanh thu. Thẻ EVIDENCE TRŽEB (ghi nhận doanh thu) nằm cạnh biểu tượng kính lúp. Lúc đầu trong thẻ này bạn chỉ thấy hai ô Údaje o poplatníkovi a správa EET (thông tin người nộp thuế và quản lý EET) và Správa evidenčních jednotek (quản lý đơn vị ghi nhận). Cách làm chính xác có trong hướng dẫn <a href="https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jak-aktivuji-elektronickou-evidenci-trze-4762" rel="noopener">Jak aktivuji elektronickou evidenci tržeb</a> (cách kích hoạt ghi nhận doanh thu điện tử).</p>`,
      },
      {
        id: "evidencni-jednotka",
        h2: "Bước 3: đơn vị ghi nhận và các loại đơn vị",
        html: `
<p>Đơn vị ghi nhận (evidenční jednotka) là nơi hoặc cách bạn bán hàng. Với tiệm tạp hóa, đó là cửa hàng. Với thợ làm việc tại nhà khách, đó là chính người thợ. Trong DIS+ bạn chọn một trong sáu loại:</p>
<div class="tbl"><table>
  <thead><tr><th>Loại</th><th>Ví dụ</th><th>Bạn điền gì</th></tr></thead>
  <tbody>
    <tr><td>Pevná provozovna (cơ sở cố định)</td><td>Tiệm tạp hóa, tiệm cắt tóc, quán ăn nhanh</td><td>Địa chỉ cơ sở</td></tr>
    <tr><td>Mobilní provozovna (cơ sở lưu động)</td><td>Sạp không có móng cố định, xe bán đồ ăn (food truck)</td><td>Mô tả vị trí</td></tr>
    <tr><td>Automat (máy tự động)</td><td>Máy bán hàng tự động hoặc thiết bị tự phục vụ</td><td>Địa chỉ hoặc mô tả vị trí</td></tr>
    <tr><td>Internetová stránka nebo aplikace (trang web hoặc ứng dụng)</td><td>Cửa hàng online</td><td>Địa chỉ URL</td></tr>
    <tr><td>Dopravní prostředek (phương tiện vận tải)</td><td>Taxi, tàu du ngoạn</td><td>Loại xe và biển số hoặc thông tin nhận dạng khác</td></tr>
    <tr><td>Poplatník (người nộp thuế)</td><td>Thợ hoặc người xoa bóp làm tại nhà khách</td><td>Địa chỉ trụ sở</td></tr>
  </tbody>
</table></div>
<h3>Cách tạo</h3>
<ol class="steps">
  <li>Trên thẻ EVIDENCE TRŽEB, mở Správa evidenčních jednotek (quản lý đơn vị ghi nhận) và bấm NOVÁ EVIDENČNÍ JEDNOTKA (đơn vị ghi nhận mới).</li>
  <li>Chọn loại đơn vị.</li>
  <li>Điền ngành hoạt động chính. Bắt đầu gõ, hệ thống sẽ tự gợi ý.</li>
  <li>Bạn có thể thêm tên, ví dụ “Praha – prodejna” (Praha – cửa hàng). Tên không bắt buộc, nhưng sẽ có ích khi xem tổng hợp doanh thu.</li>
  <li>Đánh dấu xem tại đơn vị này có phát sinh doanh thu phải ghi nhận không. Với câu hỏi về việc nhận doanh thu thay cho người nộp thuế khác, đa số người kinh doanh trả lời Ne (không).</li>
  <li>Điền địa chỉ hoặc thông tin xác định khác của đơn vị rồi bấm DOKONČIT A PŘIDAT (hoàn tất và thêm).</li>
</ol>
<p>Sau khi lưu, hệ thống cấp cho đơn vị một số. Máy tính tiền của bạn cần số này, vì số được gửi kèm mỗi khoản doanh thu. Chi tiết có trong hướng dẫn <a href="https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jak-zalozim-evidencni-jednotku-4764" rel="noopener">Jak založím evidenční jednotku</a> (cách tạo đơn vị ghi nhận).</p>
<h3>Hãy khai báo tất cả các đơn vị, kể cả cửa hàng online</h3>
<p>Khi có ít nhất một đơn vị có doanh thu phải ghi nhận, bạn phải khai báo tất cả các đơn vị mà bạn có doanh thu qua đó. Ví dụ: tiệm tạp hóa có cửa hàng và một cửa hàng online thanh toán qua mạng. Chủ tiệm tạo hai đơn vị. Với cửa hàng, chủ tiệm ghi là có nhận doanh thu phải ghi nhận. Với cửa hàng online, chủ tiệm ghi là chỉ nhận các khoản không phải ghi nhận.</p>
<p>Nếu bạn không có doanh thu phải ghi nhận nào, nghĩa vụ khai báo không áp dụng cho bạn. Khi có nhiều đơn vị, bạn có thể nhập từ tệp CSV.</p>
<h3>Thay đổi đơn vị</h3>
<p>Thông tin thay đổi thì khai báo trong DIS+ trước khoản doanh thu ghi nhận đầu tiên sau khi thay đổi, chậm nhất trong 15 ngày. Theo Finanční správa, thời hạn 15 ngày này cũng áp dụng khi tạm ngừng hoạt động hoặc hủy đơn vị.</p>`,
      },
      {
        id: "pokladni-certifikat",
        h2: "Bước 4: chứng chỉ máy tính tiền, mật khẩu và tệp .p12",
        html: `
<p>Chứng chỉ máy tính tiền (pokladní certifikát) là chữ ký điện tử của máy tính tiền. Nhờ đó hệ thống biết bản tin do bạn gửi và không ai sửa trên đường đi. Chứng chỉ miễn phí, và luật yêu cầu bạn phải có trước khoản doanh thu ghi nhận đầu tiên.</p>
<ol class="steps">
  <li>Trên thẻ EVIDENCE TRŽEB, bấm vào ô POKLADNÍ CERTIFIKÁTY (chứng chỉ máy tính tiền).</li>
  <li>Bấm VYTVOŘIT NOVÝ CERTIFIKÁT (tạo chứng chỉ mới).</li>
  <li>Điền e-mail. Thông báo sắp hết hạn sẽ gửi vào đây. Không thể bổ sung e-mail sau.</li>
  <li>Bạn có thể đặt tên cho chứng chỉ, ví dụ “Pokladna prodejna” (máy tính tiền cửa hàng). Tối đa 64 ký tự.</li>
  <li>Bấm VYTVOŘIT CERTIFIKÁT (tạo chứng chỉ). Thường xong trong 30 giây.</li>
  <li>Bấm ZOBRAZIT HESLO A STÁHNOUT CERTIFIKÁT (hiện mật khẩu và tải chứng chỉ). Một tệp có đuôi .p12 sẽ tải về máy tính.</li>
  <li>Lưu lại mật khẩu trong ô màu xanh lá. Không có mật khẩu, bạn không dùng được chứng chỉ trên máy tính tiền.</li>
  <li>Tích xác nhận rằng bạn đã lưu an toàn cả mật khẩu và chứng chỉ, rồi bấm DOKONČIT (hoàn tất).</li>
</ol>
<aside class="note warn"><p><strong>Bạn chỉ lấy được tệp và mật khẩu cho đến khi xác nhận đã tải.</strong> Sau khi xác nhận, hệ thống xóa chúng và bạn không tải lại được. Nếu không xác nhận, chúng ở lại trong ứng dụng tối đa 30 ngày kể từ ngày cấp chứng chỉ. Trước khi bấm DOKONČIT, hãy kiểm tra chắc chắn bạn đã lưu cả tệp và mật khẩu.</p></aside>
<p>Nếu không có máy tính bên cạnh, hãy chọn VYŘÍDÍM POZDĚJI (làm sau) và quay lại tải vào lúc khác. Khi hệ thống quá tải, bạn sẽ nhận e-mail báo chứng chỉ đã sẵn sàng. Tên các nút lấy từ hướng dẫn của Finanční správa, trong ứng dụng có thể hơi khác.</p>
<h3>Thời hạn và bảo vệ chứng chỉ</h3>
<ul>
  <li><strong>Thời hạn.</strong> Chứng chỉ có hiệu lực 366 ngày. Với gia hạn tự động, cơ quan cấp chứng chỉ khuyên làm trước khi hết hạn 2 đến 3 tuần. Chứng chỉ đã hết hạn thì không gia hạn được nữa, bạn phải tạo chứng chỉ mới.</li>
  <li><strong>Gia hạn.</strong> Một số máy tính tiền tự làm được. Nếu không, bạn tự tạo chứng chỉ mới và tải lên.</li>
  <li><strong>Số lượng.</strong> Một chứng chỉ dùng được cho một hoặc nhiều thiết bị tính tiền. Bạn cũng có thể tạo nhiều chứng chỉ.</li>
  <li><strong>An toàn.</strong> Hãy bảo vệ tệp và mật khẩu, không gửi đi theo cách không an toàn. Đây là nghĩa vụ theo luật. Nếu bị lạm dụng hoặc có nguy cơ bị lạm dụng, bạn phải báo cho cơ quan thuế (správce daně) không chậm trễ.</li>
  <li><strong>Mất máy.</strong> Khi mất máy tính tiền hoặc nghi ngờ bị lạm dụng, hãy vô hiệu hóa chứng chỉ. Bước này không hoàn tác được. Sau đó bạn tạo chứng chỉ mới.</li>
</ul>`,
      },
      {
        id: "nahrani-do-pokladny",
        h2: "Bước 5: tải chứng chỉ lên máy tính tiền",
        html: `
<p>Cách làm tùy từng máy tính tiền, nên hãy theo hướng dẫn của nhà cung cấp. Với đa số phần mềm, bạn cần các thông tin sau:</p>
<ul>
  <li>tệp .p12,</li>
  <li>mật khẩu của tệp,</li>
  <li>số đơn vị ghi nhận từ DIS+.</li>
</ul>
<p>Hãy kiểm tra máy tính tiền ghi đúng đơn vị. Nếu có hai cửa hàng, doanh thu của mỗi nơi phải đi theo số của nơi đó. Trong phần tổng hợp của DIS+, bạn sẽ thấy doanh thu có được gán đúng không.</p>
<p>Hãy kiểm tra cả thời gian chờ phản hồi tối đa (mezní doba odezvy). Thời gian này phải ít nhất 2 giây.</p>`,
      },
      {
        id: "zkouska-nanecisto",
        h2: "Bước 6: thử bằng chế độ kiểm tra (ověřovací mód)",
        html: `
<p>Chế độ kiểm tra (ověřovací mód) là cách gửi thử. Máy tính tiền gửi bản tin vào hệ thống, và hệ thống chỉ kiểm tra là xử lý được. Bản tin không được chấp nhận là doanh thu đã ghi nhận.</p>
<p>Lần thử này giúp bạn kiểm tra cài đặt và kết nối. Nó không thay cho nghĩa vụ ghi nhận. Vì vậy trước khi vận hành thật, hãy chuyển máy tính tiền sang chế độ bình thường.</p>
<p>Trong SuperKasa, lần thử này là nút <strong>Kiểm tra kết nối</strong> trong Quản lý → EET 2.0. Đến hết năm 2026, bạn còn có thể bật chế độ Chạy thử, trong đó các đơn bán thật được gửi vào chế độ kiểm tra. Từ ngày 1 tháng 1 năm 2027 không bật được chế độ này nữa. Với máy tính tiền khác, hãy hỏi nhà cung cấp cách chạy thử.</p>
<aside class="note"><p>Trong <a href="https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_pristupove_provozni_informace_produk-2.pdf" rel="noopener">thông tin vận hành</a>, Finanční správa nêu dự kiến mở môi trường thật cho công chúng trước ngày 1 tháng 1 năm 2027. Nếu lần thử ngay sau khi cấp chứng chỉ không thành công dù cài đặt đúng, hãy thử lại sau và nếu cần thì liên hệ nhà cung cấp.</p></aside>`,
      },
      {
        id: "do-1-ledna",
        h2: "Cần làm gì trước ngày 1 tháng 1 năm 2027",
        html: `
<ol class="timeline">
  <li><b>Ngay bây giờ</b> Kiểm tra xem việc ghi nhận có áp dụng cho bạn không. Quyết định chọn máy tính tiền, ứng dụng MOJE eet hay chế độ EET OFF. Hỏi nhà cung cấp máy tính tiền xem máy có chạy được EET 2.0 không.</li>
  <li><b>Tháng 11 năm 2026</b> Lo quyền truy cập DIS+, kích hoạt EET, tạo các đơn vị ghi nhận và tạo chứng chỉ. Nhất là công ty mới và người nước ngoài không nên chờ, vì việc lấy quyền truy cập có thể lâu hơn.</li>
  <li><b>Ngày 1 tháng 12 năm 2026</b> Theo lịch trình, MOJE eet bắt đầu chạy.</li>
  <li><b>Tháng 12 năm 2026</b> Tải chứng chỉ lên, chạy thử và chỉ cho nhân viên phải làm gì khi mất internet.</li>
  <li><b>Ngày 1 tháng 1 năm 2027</b> Bắt đầu ghi nhận từ khoản doanh thu đầu tiên. Kiểm tra xem máy tính tiền có nhận được mã POK không. Sau những khoản doanh thu đầu tiên, trong DIS+ sẽ mở ra các ô SOUČTY (tổng cộng) và TRŽBY (doanh thu).</li>
</ol>
<p>Theo lịch trình, chế độ thí điểm tháng 1 là ghi nhận tiêu chuẩn. Vì vậy đừng để việc chuẩn bị sang tháng 1.</p>`,
      },
      {
        id: "kontrolni-seznam",
        h2: "Danh sách kiểm tra",
        html: `
<ul>
  <li>Tôi có quyền truy cập DIS+.</li>
  <li>Tôi đã kích hoạt EET trong DIS+.</li>
  <li>Tôi đã khai báo tất cả các đơn vị ghi nhận mà tôi có doanh thu qua đó, kể cả cửa hàng online.</li>
  <li>Tôi đã tạo chứng chỉ máy tính tiền và đã điền e-mail.</li>
  <li>Tệp .p12 và mật khẩu được lưu an toàn ở ngoài máy tính tiền.</li>
  <li>Chứng chỉ và số đơn vị ghi nhận đã có trong máy tính tiền.</li>
  <li>Lần chạy thử không có lỗi.</li>
  <li>Máy tính tiền đã chuyển sang chế độ thật cho khoản doanh thu đầu tiên năm 2027.</li>
  <li>Nhân viên biết rằng khi mất internet vẫn bán tiếp, và doanh thu phải được gửi trong vòng 48 giờ.</li>
  <li>Tôi đã ghi ngày hết hạn chứng chỉ vào lịch.</li>
</ul>`,
      },
    ],
    faq: [
      ["Chứng chỉ máy tính tiền giá bao nhiêu?", "Không mất tiền. Bạn tự tạo chứng chỉ miễn phí qua DIS+ trên cổng MOJE daně."],
      ["Hai máy tính tiền cần mấy chứng chỉ?", "Một là đủ. Một chứng chỉ dùng được cho một hoặc nhiều thiết bị tính tiền. Nếu muốn tách riêng các máy, bạn cũng có thể tạo nhiều chứng chỉ."],
      ["Tôi mất mật khẩu chứng chỉ. Phải làm gì?", "Sau khi đã xác nhận tải, bạn không lấy lại được mật khẩu hay tệp. Hãy tạo chứng chỉ mới và tải lên máy tính tiền. Nếu chứng chỉ cũ có nguy cơ bị lạm dụng, hãy vô hiệu hóa nó trong ứng dụng Správa pokladních certifikátů EET (quản lý chứng chỉ máy tính tiền EET)."],
      ["Chứng chỉ máy tính tiền có hiệu lực bao lâu?", "Theo chính sách chứng chỉ (certifikační politika) là 366 ngày. Bạn sẽ nhận e-mail báo sắp hết hạn, nếu đã điền e-mail khi tạo chứng chỉ."],
      ["Tôi có phải tạo đơn vị ghi nhận cho cửa hàng online không?", "Có, nếu bạn có doanh thu phải ghi nhận ở một đơn vị khác, ví dụ ở cửa hàng. Nếu chỉ bán qua cửa hàng online thanh toán qua mạng và không có doanh thu phải ghi nhận nào, nghĩa vụ khai báo không áp dụng cho bạn."],
      ["Người nước ngoài có bắt buộc phải có danh tính ngân hàng (bankovní identita) không?", "Không. Bạn có thể xin thông tin truy cập từ Finanční správa. Trong vòng 30 ngày kể từ ngày nộp đơn, bạn phải đến trực tiếp chi nhánh của finanční úřad (cơ quan thuế) và mang theo giấy tờ tùy thân."],
    ],
    sources: [
      ["Luật Zákon č. 180/2026 Sb., § 14, 15, 19 và 20 (eet.gov.cz)", ZAKON],
      ["Bắt đầu ghi nhận thế nào (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/jak-zacit-evidovat"],
      ["Tờ thông tin về đơn vị ghi nhận trong EET 2.0 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-media/Evidencni_jednotka_EET_2.0.pdf"],
      ["Quy trình lấy chứng chỉ máy tính tiền (CA EET)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/CAEET_postupy_zadost_certifikat_v2.pdf"],
      ["Cách tạo chứng chỉ máy tính tiền (MOJE daně)", "https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/pokladni-certifikaty/jak-vygeneruji-pokladni-certifikat_-2-4771"],
      ["Tóm tắt công khai của chính sách chứng chỉ: hiệu lực 366 ngày (CA EET)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/CAEET_certifikacni_politika_v1.pdf"],
      ["Mô tả giao diện dữ liệu: chế độ kiểm tra, chương 2.2 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_popis_rozhrani_v1.2.pdf"],
    ],
    related: ["eet-2-0-pruvodce", "moje-eet-nebo-pokladna", "navod-superkasa"],
  },

  {
    slug: "eet-off-pausalni-dan",
    group: "eet",
    kicker: "Chế độ EET OFF",
    title: "Chế độ EET OFF: ai không phải ghi nhận doanh thu và tốn bao nhiêu",
    metaTitle: "EET OFF: điều kiện, thời hạn, phụ thu | SuperKasa",
    desc: "EET OFF dành cho OSVČ ở bậc 1 thuế khoán, thu nhập đến 1 triệu Kč. Phụ thu 1 400 Kč/tháng, phải đăng ký cho năm 2027 chậm nhất ngày 11 tháng 1 năm 2027.",
    lead: "Ở chế độ EET OFF, bạn không ghi nhận doanh thu và trả thêm khoản phụ thu (přirážka) 1 400 Kč/tháng cùng với thuế khoán. Chế độ này chỉ dành cho OSVČ (người kinh doanh tự do) ở bậc 1 của chế độ thuế khoán, có thu nhập đến 1 triệu Kč, và phải đăng ký cho năm 2027 chậm nhất vào ngày 11 tháng 1 năm 2027.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 8,
    sections: [
      {
        id: "co-je-eet-off",
        h2: "EET OFF là gì và tốn bao nhiêu",
        html: `
<p>EET OFF là chế độ tự nguyện dành cho những người kinh doanh nhỏ nhất (živnostníci). Thay vì ghi nhận từng khoản doanh thu, bạn trả mức thuế khoán cao hơn. Khi đó bạn không phải ghi nhận khoản thanh toán nào, kể cả tiền mặt.</p>
<p>Chế độ thuế khoán (paušální režim) là cách nộp thuế đơn giản. Mỗi tháng bạn gửi một khoản nộp trước (záloha) gồm thuế, bảo hiểm hưu trí (důchodové pojištění) và bảo hiểm y tế (zdravotní pojištění). Hạn nộp là ngày 20 trong tháng. Nếu bạn đã đăng ký EET OFF, phần thuế trong khoản nộp sẽ cao hơn đúng bằng khoản phụ thu (přirážka).</p>
<div class="tbl"><table>
  <thead><tr><th>Khoản</th><th>Mỗi tháng</th><th>Cả năm</th></tr></thead>
  <tbody>
    <tr><td>Thuế ở bậc 1, chưa có phụ thu</td><td>100 Kč</td><td>1 200 Kč</td></tr>
    <tr><td>Phụ thu EET OFF</td><td>1 400 Kč</td><td>16 800 Kč</td></tr>
    <tr><td>Tổng thuế</td><td>1 500 Kč</td><td>18 000 Kč</td></tr>
    <tr><td>Bảo hiểm xã hội và bảo hiểm y tế</td><td>theo quy định hiện hành</td><td>theo quy định hiện hành</td></tr>
  </tbody>
</table></div>
<p>Như vậy so với bậc 1 thông thường, EET OFF khiến bạn trả thêm 16 800 Kč mỗi năm. Việc đăng ký không làm thay đổi tiền bảo hiểm.</p>`,
      },
      {
        id: "kdo-ma-narok",
        h2: "Ai được dùng EET OFF",
        html: `
<p>Bạn phải đáp ứng tất cả các điều kiện sau:</p>
<ul>
  <li><strong>Bạn là cá nhân (fyzická osoba).</strong> Chế độ này không dành cho công ty trách nhiệm hữu hạn (s.r.o.) và các pháp nhân khác.</li>
  <li><strong>Bạn ở bậc 1 (1. pásmo) của chế độ thuế khoán.</strong> Theo <a href="https://e-sbirka.gov.cz/sb/1992/586/2027-01-01#par_2a" rel="noopener">§ 2a của zákon o daních z příjmů</a> (luật thuế thu nhập), chế độ thuế khoán chỉ dành cho người không nộp thuế DPH (neplátce DPH), ngoài các điều kiện khác.</li>
  <li><strong>Thu nhập từ hoạt động kinh doanh độc lập (samostatná činnost) của năm trước không vượt quá 1 000 000 Kč.</strong> Với năm 2027 thì xét năm 2026. Thu nhập đến từ hoạt động độc lập nào cũng tính như nhau.</li>
  <li><strong>Bạn nộp thông báo đúng hạn.</strong> Không có thông báo thì chế độ không bắt đầu.</li>
</ul>
<aside class="note warn"><p><strong>Chú ý các hạn mức khác nhau.</strong> Tùy loại hoạt động, bạn có thể ở bậc 1 thuế khoán với thu nhập đến 1,5 triệu Kč hoặc 2 triệu Kč. Nhưng với EET OFF, hạn mức là 1 triệu Kč cho tất cả mọi người.</p></aside>
<p>Nếu chưa ở chế độ thuế khoán, bạn hãy kiểm tra cả các điều kiện khác của chế độ này. Bạn phải là OSVČ có bảo hiểm hưu trí và bảo hiểm y tế, không được là người nộp thuế DPH (plátce DPH), không được là thành viên công ty hợp danh (veřejná obchodní společnost) hay thành viên chịu trách nhiệm vô hạn của công ty hợp vốn (komplementář komanditní společnosti), không được đang trong thủ tục phá sản (insolvenční řízení) và không được có thu nhập từ làm thuê, trừ các ngoại lệ theo luật. Các thu nhập khác, ví dụ từ cho thuê, tối đa 50 000 Kč một năm.</p>
<div class="tbl"><table>
  <thead><tr><th>Ví dụ</th><th>EET OFF</th></tr></thead>
  <tbody>
    <tr><td>Thợ làm tóc, OSVČ ở bậc 1 thuế khoán, tổng thu nhập năm 2026 là 800 000 Kč</td><td>Được</td></tr>
    <tr><td>Sạp hàng, OSVČ ở bậc 1 thuế khoán, tổng thu nhập năm 2026 là 1 200 000 Kč</td><td>Không được, thu nhập vượt hạn mức</td></tr>
    <tr><td>Tiệm tạp hóa, OSVČ và là người nộp thuế DPH (plátce DPH)</td><td>Không được, người nộp thuế DPH không ở chế độ thuế khoán</td></tr>
    <tr><td>Quán ăn nhanh là công ty s.r.o.</td><td>Không được, không phải cá nhân</td></tr>
  </tbody>
</table></div>`,
      },
      {
        id: "lhuty",
        h2: "Thời hạn đăng ký và hủy đăng ký",
        html: `
<p>Luật cho thời hạn đến ngày thứ mười của kỳ tính thuế (zdaňovací období), tức năm dương lịch. Năm 2027, ngày 10 tháng 1 là Chủ nhật, và Finanční správa (Cục Thuế Séc) nêu thời hạn là ngày 11 tháng 1 năm 2027.</p>
<div class="tbl"><table>
  <thead><tr><th>Trường hợp</th><th>Thời hạn</th></tr></thead>
  <tbody>
    <tr><td>Đăng ký cho năm 2027</td><td>Đến hết ngày 11 tháng 1 năm 2027</td></tr>
    <tr><td>Đăng ký cho các năm sau</td><td>Đến hết ngày thứ mười của năm bạn bắt đầu đăng ký</td></tr>
    <tr><td>Bắt đầu kinh doanh giữa năm và vào bậc 1</td><td>Ghi trong thông báo vào chế độ thuế khoán, chậm nhất vào ngày bắt đầu kinh doanh</td></tr>
    <tr><td>Tự nguyện hủy đăng ký</td><td>Đến hết ngày thứ mười của năm sau, tức là sau năm 2027 thì đến hết ngày 10 tháng 1 năm 2028</td></tr>
    <tr><td>Vượt 1 triệu Kč khi bạn vẫn ở bậc 1</td><td>Thông báo trong 15 ngày kể từ ngày việc đó xảy ra</td></tr>
  </tbody>
</table></div>
<aside class="note warn"><p><strong>Thông báo nộp muộn không có hiệu lực.</strong> Không thể khắc phục việc chậm trễ, và bạn không đăng ký được cho năm đó nữa. Tốt nhất hãy nộp vào tháng 12 hoặc đầu tháng 1.</p></aside>
<p>Việc đăng ký luôn có hiệu lực từ đầu năm, kể cả khi bạn nộp thông báo vào tháng 1. Ngoại lệ là khi bắt đầu kinh doanh giữa năm, bạn có thể đăng ký trong năm đó. Đăng ký vẫn tiếp tục trong các năm sau, cho đến khi bạn hủy đúng hạn hoặc chế độ kết thúc vì lý do khác.</p>
<p>Ví dụ: một thợ làm tóc nộp thông báo ngày 15 tháng 12 năm 2026 và ghi năm 2027. Từ ngày 1 tháng 1 năm 2027 chị không ghi nhận doanh thu, và trong tháng 1 lần đầu nộp khoản nộp trước có phụ thu. Nếu cũng người thợ đó nộp thông báo ngày 12 tháng 1 năm 2027 thì không được gì, vì đã quá hạn. Chị sẽ phải ghi nhận cả năm 2027.</p>`,
      },
      {
        id: "jak-se-prihlasit",
        h2: "Cách đăng ký EET OFF",
        html: `
<p>Cách làm tùy vào việc bạn đã ở chế độ thuế khoán hay chưa:</p>
<ul>
  <li><strong>Bạn đang ở bậc 1:</strong> nộp Oznámení o přihlášení k přirážce (thông báo đăng ký khoản phụ thu).</li>
  <li><strong>Bạn chuyển từ bậc 2 hoặc bậc 3 xuống bậc 1:</strong> đăng ký trong thông báo đổi bậc.</li>
  <li><strong>Bạn mới vào chế độ thuế khoán:</strong> đăng ký trong thông báo vào chế độ thuế khoán. Bạn phải dùng mẫu đơn quy định.</li>
</ul>
<p>Oznámení o přihlášení k přirážce không có mẫu bắt buộc. Trong đó phải ghi năm bạn bắt đầu đăng ký. Finanční správa đang chuẩn bị một mẫu không bắt buộc và sẽ công bố trên trang của mình.</p>
<p>Bạn nộp thông báo qua mạng, gửi bưu điện đến finanční úřad (cơ quan thuế) phụ trách, hoặc nộp trực tiếp tại quầy nhận hồ sơ (podatelna). OSVČ có hộp thư dữ liệu (datová schránka) được lập theo luật thì phải nộp qua mạng.</p>
<ol class="steps">
  <li>Xem thu nhập từ hoạt động kinh doanh độc lập của năm trước.</li>
  <li>Kiểm tra xem bạn có ở bậc 1 của chế độ thuế khoán không.</li>
  <li>Tính xem khoản phụ thu có đáng không.</li>
  <li>Nộp thông báo và giữ lại xác nhận đã nộp.</li>
  <li>Điều chỉnh khoản nộp trước hằng tháng, vì khoản này tăng thêm đúng bằng khoản phụ thu.</li>
</ol>`,
      },
      {
        id: "odhlaseni-a-konec",
        h2: "Cách hủy đăng ký và khi nào chế độ kết thúc",
        html: `
<p>EET OFF không đổi được giữa năm. Muốn kết thúc, bạn nộp Oznámení o odhlášení z přirážky (thông báo hủy đăng ký khoản phụ thu) và ghi năm mà sau khi năm đó qua đi bạn sẽ kết thúc. Thời hạn là đến hết ngày thứ mười của năm sau. Thông báo nộp muộn không có hiệu lực.</p>
<p>Ví dụ: bạn muốn bắt đầu ghi nhận từ năm 2028. Đến hết ngày 10 tháng 1 năm 2028, bạn nộp thông báo rằng khoản phụ thu kết thúc khi hết năm 2027. Từ ngày 1 tháng 1 năm 2028, bạn ghi nhận doanh thu.</p>
<p>Chế độ này còn kết thúc trong hai trường hợp khác:</p>
<ul>
  <li><strong>Bạn vượt 1 triệu Kč.</strong> Bạn trả phụ thu đến hết năm và bắt đầu ghi nhận từ năm sau. Ví dụ: thu nhập vượt hạn mức vào tháng 10 năm 2027. Bạn trả phụ thu đến tháng 12 năm 2027 và ghi nhận từ ngày 1 tháng 1 năm 2028.</li>
  <li><strong>Bạn không còn ở bậc 1 của chế độ thuế khoán.</strong> Khoản phụ thu kết thúc khi hết tháng hoặc hết năm mà bạn không còn ở bậc 1. Sau đó bạn phải ghi nhận. Nếu bạn rời hẳn chế độ thuế khoán, EET OFF và khoản phụ thu tự động kết thúc cùng với chế độ đó.</li>
</ul>
<p>Khi EET OFF kết thúc, hãy chuẩn bị sớm. Trước khoản doanh thu ghi nhận đầu tiên, bạn phải khai báo các đơn vị ghi nhận (evidenční jednotky) và có chứng chỉ máy tính tiền (pokladní certifikát). Cách làm có trong bài <a href="eet-2-0-krok-za-krokem.html">EET 2.0 từng bước</a>.</p>
<p>Nếu bạn tạm ngừng kinh doanh trong năm rồi bắt đầu lại ngay trong năm đó, bạn tự động được đăng ký lại khoản phụ thu. Nhưng bạn phải nộp thông báo vào chế độ thuế khoán và ghi bậc 1 trong đó.</p>`,
      },
      {
        id: "na-co-si-dat-pozor",
        h2: "Những điều cần chú ý",
        html: `
<ul>
  <li><strong>Khoản phụ thu phải trả dù doanh số thế nào.</strong> Khi ít khách, bạn vẫn trả 16 800 Kč mỗi năm. Hãy so với chi phí ghi nhận doanh thu. Ứng dụng nhà nước <a href="moje-eet-nebo-pokladna.html">MOJE eet</a> dự kiến miễn phí cho người kinh doanh nhỏ, bạn chỉ cần thiết bị có internet. Nếu đã dùng máy tính tiền, hãy tính giá giấy phép và cập nhật trong một năm.</li>
  <li><strong>Khoản giảm thuế cho việc ghi nhận doanh thu.</strong> Ở chế độ thuế khoán, khoản giảm thuế này không được áp dụng, dù bạn có ghi nhận hay không. Đừng tính nó vào khi so với khoản phụ thu. Đây là cách hiểu luật của chúng tôi, hãy kiểm tra lại với finanční úřad hoặc kế toán.</li>
  <li><strong>EET OFF không bỏ nghĩa vụ chứng từ.</strong> Khi người tiêu dùng yêu cầu, bạn phải xuất chứng từ mua hàng (doklad o koupi) theo zákon o ochraně spotřebitele (luật bảo vệ người tiêu dùng). Xem thêm trong bài <a href="co-musi-byt-na-uctence.html">Trên hóa đơn phải ghi những gì</a>.</li>
  <li><strong>Bạn không phải khai báo đơn vị ghi nhận.</strong> Không có doanh thu phải ghi nhận thì nghĩa vụ khai báo trong DIS+ không áp dụng cho bạn và bạn không cần chứng chỉ.</li>
  <li><strong>Theo dõi thu nhập trong năm.</strong> Vượt 1 triệu Kč nghĩa là phải ghi nhận từ năm sau và có thể phải thông báo trong 15 ngày. Hạn mức không tính các khoản thu nhập được miễn thuế, thu nhập không thuộc đối tượng chịu thuế và thu nhập đã bị khấu trừ thuế tại nguồn (srážková daň).</li>
  <li><strong>Hãy cài đặt máy tính tiền.</strong> Nếu vẫn dùng máy tính tiền khi ở EET OFF, hãy cài để máy không gửi doanh thu. Trong SuperKasa có tùy chọn Tôi không phải ghi nhận doanh thu trong Quản lý → EET 2.0. Với tùy chọn này, máy chuyển sang vận hành thật mà không cần chứng chỉ và số đơn vị ghi nhận, trong thời gian dùng thử miễn phí cũng không cần giấy phép trả phí. Không dùng được tùy chọn này nếu EET thật đã từng chạy.</li>
</ul>
<p>Việc chọn EET OFF có đúng hay không là trách nhiệm của bạn. Nếu không chắc về thu nhập hay bậc thuế khoán, hãy hỏi kế toán hoặc tổng đài (infolinka) của Finanční správa theo số 953 109 109.</p>`,
      },
    ],
    faq: [
      ["Tôi phải đăng ký EET OFF cho năm 2027 trước khi nào?", "Đến hết ngày 11 tháng 1 năm 2027. Luật ghi ngày thứ mười của năm, nhưng ngày 10 tháng 1 năm 2027 là Chủ nhật và Finanční správa nêu ngày 11 tháng 1. Thông báo nộp muộn không có hiệu lực."],
      ["Tôi có công ty s.r.o. thì có dùng được EET OFF không?", "Không. Chế độ này chỉ dành cho cá nhân (fyzické osoby) ở bậc 1 của chế độ thuế khoán."],
      ["Tôi là người nộp thuế DPH (plátce DPH). Tôi có dùng được EET OFF không?", "Không. EET OFF chỉ dành cho người nộp thuế theo chế độ thuế khoán, mà chế độ này chỉ dành cho người không nộp thuế DPH (neplátce DPH)."],
      ["Chuyện gì xảy ra nếu trong năm tôi vượt 1 triệu Kč?", "Bạn trả phụ thu đến hết năm và bắt đầu ghi nhận từ năm sau. Nếu bạn vẫn ở bậc 1, bạn phải báo cho cơ quan thuế (správce daně) trong 15 ngày."],
      ["Tôi có rời EET OFF giữa năm được không?", "Không. Thay đổi luôn có hiệu lực từ đầu năm dương lịch tiếp theo, và bạn nộp thông báo đến hết ngày thứ mười của năm đó."],
      ["Ở EET OFF mỗi tháng tôi trả bao nhiêu?", "Thuế là 1 500 Kč mỗi tháng, gồm 100 Kč cơ bản và 1 400 Kč phụ thu. Ngoài ra bạn trả bảo hiểm xã hội và bảo hiểm y tế theo quy định hiện hành."],
    ],
    sources: [
      ["Chế độ EET OFF là gì (Finanční správa)", "https://eet.gov.cz/cs/eet-off/co-je-rezim-eet-off"],
      ["Đăng ký chế độ EET OFF thế nào và khi nào (Finanční správa)", "https://eet.gov.cz/cs/eet-off/jak-a-kdy-se-prihlasit-k-rezimu-eet-off"],
      ["Cách kết thúc chế độ EET OFF (Finanční správa)", "https://eet.gov.cz/cs/eet-off/jak-ukoncit-rezim-eet-off"],
      ["Các trường hợp đặc biệt ở chế độ EET OFF (Finanční správa)", "https://eet.gov.cz/cs/eet-off/specificke-situace"],
      ["Luật Zákon č. 180/2026 Sb., § 11 và sửa đổi zákon o daních z příjmů ở § 30 (eet.gov.cz)", ZAKON],
      ["Sổ tay EET 2.0, chương về chế độ tự nguyện (Finanční správa)", PRIRUCKA],
    ],
    related: ["eet-2-0-pruvodce", "moje-eet-nebo-pokladna", "co-musi-byt-na-uctence"],
  },

  {
    slug: "moje-eet-nebo-pokladna",
    group: "eet",
    kicker: "Chọn giải pháp",
    title: "MOJE eet hay hệ thống máy tính tiền: ứng dụng nhà nước làm được gì và không làm được gì",
    metaTitle: "MOJE eet hay máy tính tiền: so sánh | SuperKasa",
    desc: "MOJE eet là ứng dụng nhà nước miễn phí cho tối đa 2 đơn vị ghi nhận, từ 1/12/2026. Làm được gì và khi nào nên dùng máy tính tiền.",
    lead: "MOJE eet là ứng dụng web miễn phí của Finanční správa (Cục Thuế Séc) để ghi nhận doanh thu, dự kiến chạy từ ngày 1 tháng 12 năm 2026. Ứng dụng có thể đủ nếu bạn chỉ cần ghi nhận ít khoản thanh toán, còn hệ thống máy tính tiền hợp lý khi bạn cần cả kho, in ấn và theo dõi hoạt động cửa hàng.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 7,
    sections: [
      {
        id: "pro-koho-ktera-cesta",
        h2: "Cách nào hợp với ai",
        html: `
<p>MOJE eet chủ yếu dành cho người kinh doanh nhỏ, có ít khoản thanh toán và tối đa 2 đơn vị ghi nhận (evidenční jednotky). Hệ thống máy tính tiền phù hợp hơn khi bạn cần nhiều hơn việc ghi nhận đơn thuần. Mô tả này dựa trên thông tin Finanční správa công bố đến ngày 31 tháng 10 năm 2026.</p>
<div class="tbl"><table>
  <thead><tr><th>Trường hợp</th><th>Lựa chọn hợp lý</th></tr></thead>
  <tbody>
    <tr><td>Thợ làm tóc không có nhân viên, vài khách mỗi ngày, vài loại dịch vụ</td><td>MOJE eet có thể đủ</td></tr>
    <tr><td>Sạp hàng ít mặt hàng, dùng điện thoại hoặc máy tính bảng</td><td>MOJE eet có thể đủ</td></tr>
    <tr><td>Tiệm tạp hóa có hàng trăm mặt hàng và máy quét mã</td><td>Hệ thống máy tính tiền</td></tr>
    <tr><td>Quán ăn nhanh có nhân viên và doanh thu theo ca</td><td>Hệ thống máy tính tiền</td></tr>
    <tr><td>Ba cửa hàng</td><td>Hệ thống máy tính tiền, MOJE eet chỉ dành cho tối đa 2 đơn vị</td></tr>
    <tr><td>Người kinh doanh nhỏ đã có máy tính tiền</td><td>Trước tiên hãy hỏi nhà cung cấp về bản cập nhật</td></tr>
  </tbody>
</table></div>
<p>OSVČ (người kinh doanh tự do) ở bậc 1 thuế khoán còn có lựa chọn thứ ba, <a href="eet-off-pausalni-dan.html">chế độ EET OFF</a>. Ở chế độ này, họ không ghi nhận doanh thu và trả thêm khoản phụ thu.</p>`,
      },
      {
        id: "co-moje-eet-umi",
        h2: "Theo Finanční správa, MOJE eet làm được gì",
        html: `
<p>Ứng dụng chưa chạy, nên chúng tôi dựa vào mô tả của Finanční správa. Theo mô tả đó, ứng dụng sẽ:</p>
<ul>
  <li>miễn phí,</li>
  <li>dùng được trên trình duyệt web thông thường, không cần cài đặt,</li>
  <li>dùng được trên thiết bị có internet, ví dụ máy tính bảng,</li>
  <li>kết nối với DIS+ (hộp thư thuế điện tử) và cơ quan cấp chứng chỉ EET,</li>
  <li>ghi nhận được doanh thu theo luật,</li>
  <li>tự động gửi lại bản tin khi cần,</li>
  <li>cho phép tạo danh mục hàng hóa và dịch vụ với các mục và giá định sẵn,</li>
  <li>tạo được chứng từ dạng PDF.</li>
</ul>
<p>Theo Finanční správa, ứng dụng tự lo chứng chỉ, nên bạn không phải tải về hay tải lên. Tuy nhiên bạn phải ghép nối ứng dụng trong DIS+. Việc này làm ở ô PROFILY MOJE EET (hồ sơ MOJE EET), ô này hiện ra sau khi bạn tạo đơn vị ghi nhận đầu tiên.</p>`,
      },
      {
        id: "limity",
        h2: "MOJE eet dành cho ai và có giới hạn gì",
        html: `
<p>Trang eet.gov.cz ghi rằng ứng dụng chủ yếu dành cho người kinh doanh nhỏ có khối lượng giao dịch thấp và tối đa 2 đơn vị ghi nhận. Bài thuyết trình cho lập trình viên tháng 6 năm 2026 còn nêu tối đa 2 nhân viên và khối lượng giao dịch thấp.</p>
<p>Ngưỡng khối lượng cụ thể chưa được công bố. Từ các tài liệu hiện có cũng chưa rõ giới hạn nhân viên có áp dụng trong ứng dụng không và có thể vượt về mặt kỹ thuật không. Trước khi dựa hẳn vào ứng dụng để vận hành, hãy kiểm tra điều kiện trực tiếp trên eet.gov.cz hoặc gọi tổng đài (infolinka) 953 109 109.</p>`,
      },
      {
        id: "co-neni-dolozene",
        h2: "Những gì về MOJE eet chưa được xác nhận",
        html: `
<p>Các chức năng dưới đây chúng tôi không tìm thấy trong tài liệu của Finanční správa. Điều đó không có nghĩa là ứng dụng sẽ không bao giờ làm được. Chỉ có nghĩa là hiện nay đừng trông cậy vào chúng.</p>
<div class="tbl"><table>
  <thead><tr><th>Chức năng</th><th>MOJE eet theo thông tin đã công bố</th><th>Ở hệ thống máy tính tiền</th></tr></thead>
  <tbody>
    <tr><td>Kho và nhập hàng</td><td>Không nêu. Chỉ nêu danh mục mặt hàng và giá.</td><td>Hãy hỏi nhà cung cấp</td></tr>
    <tr><td>In trên máy in hóa đơn</td><td>Không nêu. Chỉ nêu chứng từ PDF.</td><td>Hãy hỏi máy hỗ trợ những máy in nào</td></tr>
    <tr><td>Doanh thu theo ca và chốt ca</td><td>Không nêu</td><td>Hãy hỏi nhà cung cấp</td></tr>
    <tr><td>Máy quét mã, ngăn kéo đựng tiền, cân</td><td>Không nêu</td><td>Hãy hỏi nhà cung cấp</td></tr>
    <tr><td>Kết nối với máy quẹt thẻ</td><td>Không nêu</td><td>Hãy hỏi nhà cung cấp</td></tr>
    <tr><td>Bán hàng khi không có internet</td><td>Không nêu. Chỉ nêu việc tự động gửi lại.</td><td>Hãy hỏi máy gửi doanh thu thế nào sau khi mất mạng</td></tr>
    <tr><td>Xuất dữ liệu cho kế toán</td><td>Không nêu</td><td>Hãy hỏi xuất ra định dạng nào</td></tr>
    <tr><td>Tài khoản nhân viên và phân quyền</td><td>Không nêu</td><td>Hãy hỏi nhà cung cấp</td></tr>
  </tbody>
</table></div>
<p>Các hệ thống máy tính tiền khác nhau, nên ngay cả với chúng cũng đừng coi chức năng nào là đương nhiên có. Cách chọn có trong bài <a href="jak-vybrat-pokladnu.html">Cách chọn máy tính tiền</a>.</p>`,
      },
      {
        id: "den-v-provozu",
        h2: "Hai cách khác nhau thế nào trong một ngày bình thường",
        html: `
<p>Bạn sẽ thấy khác biệt chủ yếu khi đông khách. Các ví dụ dưới đây chỉ là mô phỏng, vì MOJE eet chưa chạy.</p>
<p><strong>Thợ làm tóc:</strong> mỗi ngày có năm khách và tám loại dịch vụ. Chị lưu dịch vụ và giá vào danh mục. Cắt xong, chị chọn mục trên máy tính bảng, nhận tiền và doanh thu được gửi đi. Khi khách yêu cầu, chị tạo hóa đơn dạng PDF. Chị không cần lo về kho. Một người thợ như vậy có thể chỉ cần ứng dụng là đủ.</p>
<p><strong>Tiệm tạp hóa:</strong> có hàng trăm mặt hàng và khách xếp hàng trước giờ đóng cửa. Tiệm cần quét mã vạch, quản lý tồn kho, in hóa đơn nhanh và cuối ca kiểm tra tiền trong quầy. Những việc này không có trong mô tả đã công bố của MOJE eet. Vì vậy hệ thống máy tính tiền là hợp lý.</p>
<p><strong>Quán ăn nhanh:</strong> nhận tiền mặt, thẻ và phiếu ăn, nhân viên thay ca nhau và chủ quán muốn xem doanh thu theo ca. Theo bài thuyết trình cho lập trình viên, ứng dụng dành cho người kinh doanh có tối đa 2 nhân viên. Vì vậy quán phải kiểm tra xem mình có thuộc nhóm này không.</p>`,
      },
      {
        id: "jak-zacit-s-moje-eet",
        h2: "Cách bắt đầu với MOJE eet",
        html: `
<ol class="steps">
  <li>Đăng nhập vào DIS+ trên cổng MOJE daně và kích hoạt EET.</li>
  <li>Tạo đơn vị ghi nhận, ví dụ cửa hàng của bạn.</li>
  <li>Sau khi ứng dụng chạy, mở ô PROFILY MOJE EET trong DIS+ và kết nối với ứng dụng.</li>
  <li>Tạo danh mục hàng hóa và dịch vụ trong ứng dụng.</li>
  <li>Trước ngày 1 tháng 1 năm 2027, hãy thử xem ứng dụng chạy thế nào trên thiết bị của bạn.</li>
</ol>
<p>Đến ngày 31 tháng 10 năm 2026, chúng tôi chưa tìm thấy hướng dẫn chi tiết cho chính ứng dụng. Hãy theo dõi eet.gov.cz. Theo lịch trình, bạn chỉ có một tháng để thử ứng dụng trước khi bắt đầu ghi nhận. Vì vậy hãy có phương án dự phòng phòng khi ứng dụng không phù hợp.</p>`,
      },
      {
        id: "otazky-pro-dodavatele",
        h2: "Nên hỏi nhà cung cấp máy tính tiền những gì",
        html: `
<p>Finanční správa cho biết với thiết bị tính tiền từ thời EET cũ, thường chỉ cần cập nhật phần mềm. Trước khi quyết định, hãy hỏi nhà cung cấp những điều sau:</p>
<ul>
  <li>Từ khi nào máy chạy được EET 2.0 và bản cập nhật giá bao nhiêu?</li>
  <li>Tải tệp .p12 và mật khẩu vào máy thế nào?</li>
  <li>Trước khi vận hành thật có thử được kết nối ở chế độ kiểm tra (ověřovací mód) không?</li>
  <li>Sau khi mất internet, máy có tự gửi doanh thu và báo cho tôi khi gửi không được không?</li>
  <li>Máy có xử lý được trả hàng dưới dạng doanh thu âm không?</li>
  <li>Máy có theo dõi ngày hết hạn chứng chỉ và tự gia hạn được không?</li>
  <li>Máy có làm được các loại chứng từ tôi cần với tư cách người nộp thuế DPH (plátce DPH) hoặc không nộp thuế DPH (neplátce DPH) không?</li>
</ul>
<p>Nếu không nhận được câu trả lời rõ ràng kịp thời, hãy tìm giải pháp khác. MOJE eet có thể là phương án tạm thời nếu bạn đáp ứng điều kiện của ứng dụng.</p>
<p>Luật không hạn chế bạn chọn thiết bị nào, nên sau này bạn được phép chuyển sang cách khác. Khi chuyển từ MOJE eet sang máy tính tiền, bạn sẽ cần chứng chỉ cho máy tính tiền. Có xuất được dữ liệu từ ứng dụng hay không thì hiện chưa được xác nhận.</p>`,
      },
      {
        id: "co-je-spolecne",
        h2: "Những điều giống nhau ở cả hai cách",
        html: `
<ul>
  <li><strong>Quyền truy cập DIS+.</strong> Cả hai trường hợp đều cần. Cách làm có trong bài <a href="eet-2-0-krok-za-krokem.html">EET 2.0 từng bước</a>.</li>
  <li><strong>Đơn vị ghi nhận.</strong> Bạn tạo trong DIS+ cho cả ứng dụng lẫn máy tính tiền.</li>
  <li><strong>Internet.</strong> Finanční správa viết rằng thiết bị tính tiền phải kết nối internet.</li>
  <li><strong>Thời hạn 48 giờ.</strong> Sau khi mất mạng, bạn phải gửi doanh thu không chậm trễ, chậm nhất trong 48 giờ.</li>
  <li><strong>Chứng từ.</strong> Cả ứng dụng lẫn máy tính tiền đều không bỏ nghĩa vụ xuất chứng từ theo zákon o DPH (luật thuế giá trị gia tăng) hoặc zákon o ochraně spotřebitele (luật bảo vệ người tiêu dùng).</li>
  <li><strong>Giảm thuế.</strong> Người kinh doanh cá nhân có nộp tờ khai thuế (daňové přiznání) có thể được giảm thuế đến 5 000 Kč, dù dùng gì để ghi nhận. Ở chế độ thuế khoán, khoản giảm này không được áp dụng. Đây là cách hiểu luật của chúng tôi, hãy kiểm tra lại với finanční úřad (cơ quan thuế) hoặc kế toán. Điều kiện có trong bài <a href="eet-2-0-pruvodce.html">EET 2.0: hướng dẫn cơ bản</a>.</li>
</ul>`,
      },
      {
        id: "jak-se-rozhodnout",
        h2: "Cách quyết định",
        html: `
<ol class="steps">
  <li><strong>Đếm số khoản thanh toán.</strong> Giờ cao điểm trong ngày bạn có bao nhiêu khoản? Hãy thử hình dung nhập chúng trên máy tính bảng.</li>
  <li><strong>Đếm số mặt hàng.</strong> Vài dịch vụ thì nhập dễ. Hàng trăm loại hàng có mã vạch thì cần máy quét và kho.</li>
  <li><strong>Cộng số cửa hàng và số người.</strong> Với hơn 2 đơn vị ghi nhận, MOJE eet không đủ.</li>
  <li><strong>Nghĩ về hóa đơn.</strong> PDF là đủ với bạn, hay bạn in hóa đơn cho khách ngay tại quầy?</li>
  <li><strong>Hỏi kế toán.</strong> Kế toán cần dữ liệu gì từ bạn và ở dạng nào?</li>
  <li><strong>Tính chi phí.</strong> Với ứng dụng, bạn cần thiết bị và internet. Với máy tính tiền, cộng thêm giấy phép và phụ kiện nếu có.</li>
</ol>
<p>Nếu sau các câu hỏi này bạn muốn dùng máy tính tiền, SuperKasa có EET 2.0 trong mọi gói và chúng tôi đã thử kết nối trong môi trường thử của Finanční správa. Giá có trong <a href="cenik.html">bảng giá</a>. Bạn cũng có thể chờ MOJE eet chạy rồi xem có đủ với mình không. Nhưng đừng để chứng chỉ và việc thử máy tính tiền đến phút cuối, vì bạn phải ghi nhận từ ngày 1 tháng 1 năm 2027.</p>`,
      },
    ],
    faq: [
      ["Khi nào MOJE eet dùng được?", "Lịch trình của Finanční správa nêu ngày chạy là 1 tháng 12 năm 2026. Trên trang thông tin thực tế có ghi dự kiến chạy từ ngày này."],
      ["MOJE eet có thật sự miễn phí không?", "Có, Finanční správa mô tả đây là ứng dụng miễn phí. Bạn chỉ cần thiết bị riêng có internet."],
      ["Dùng MOJE eet có cần chứng chỉ máy tính tiền không?", "Bạn không phải tải về hay tải lên. Theo Finanční správa, sau khi ghép nối với DIS+, ứng dụng tự động lo chứng chỉ. Nhưng bạn vẫn phải tạo đơn vị ghi nhận."],
      ["MOJE eet có in được hóa đơn không?", "Đã xác nhận là tạo được chứng từ dạng PDF. Các tài liệu đã công bố không nêu việc in trên máy in hóa đơn."],
      ["MOJE eet có kho không?", "Các tài liệu đã công bố nêu danh mục hàng hóa và dịch vụ với các mục và giá. Không nói gì về kho."],
      ["MOJE eet dùng được cho bao nhiêu cửa hàng?", "Finanční správa nêu tối đa 2 đơn vị ghi nhận. Đơn vị ghi nhận là cửa hàng, nhưng cũng có thể là cửa hàng online hay sạp lưu động."],
    ],
    sources: [
      ["Thông tin thực tế: khi nào ứng dụng web MOJE eet là đủ (Finanční správa)", PRAKTICKE + "#kdy-mi-postaci-webova-aplikace-moje-eet-821"],
      ["EET trong 5 bước (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-media/EET_v_5_krocich.pdf"],
      ["Lịch trình EET 2.0 (Finanční správa)", HARMONOGRAM],
      ["Bài thuyết trình hội thảo cho lập trình viên, ngày 23 tháng 6 năm 2026 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET2_Prezentace_Seminar_pro_vyvojare_23-.pdf"],
      ["Những thông tin có trên thẻ Evidence tržeb (MOJE daně)", "https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jake-informace-jsou-dostupne-na-zalozce-4763"],
      ["Thông cáo báo chí về việc ký luật, ngày 22 tháng 9 năm 2026 (Finanční správa)", "https://eet.gov.cz/cs/pro-media/tiskove-zpravy/2026/prezident-podepsal-zakon-o-eet-2-0-evidence-trzeb-1315"],
    ],
    related: ["eet-2-0-pruvodce", "jak-vybrat-pokladnu", "eet-off-pausalni-dan"],
  },

  {
    slug: "co-musi-byt-na-uctence",
    group: "eet",
    kicker: "Hóa đơn và chứng từ",
    title: "Trên hóa đơn phải ghi những gì: hóa đơn thuế rút gọn và chứng từ của người không nộp thuế DPH",
    metaTitle: "Trên hóa đơn phải ghi những gì | SuperKasa",
    desc: "Nội dung bắt buộc của hóa đơn: hóa đơn thuế rút gọn đến 10 000 Kč, chứng từ khi không nộp DPH, mã POK, chứng từ điều chỉnh, faktura, lưu giữ 10 năm.",
    lead: "Hóa đơn (účtenka) của người nộp thuế DPH (plátce DPH) phải có người bán, DIČ, số chứng từ, hàng hóa hoặc dịch vụ, ngày, thuế suất DPH và tổng số tiền. Người không nộp thuế DPH (neplátce DPH) thì khi khách yêu cầu sẽ xuất chứng từ có ngày, hàng hóa hoặc dịch vụ, giá, họ tên hoặc tên công ty và IČO.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 8,
    sections: [
      {
        id: "kdy-vydat-doklad",
        h2: "Khi nào bạn phải xuất chứng từ",
        html: `
<p>EET không bắt buộc xuất hóa đơn (účtenka). Nghĩa vụ này có thể phát sinh theo zákon o DPH (luật thuế giá trị gia tăng) hoặc zákon o ochraně spotřebitele (luật bảo vệ người tiêu dùng). Trong bài này chúng tôi dùng các khái niệm sau:</p>
<ul>
  <li><strong>Người nộp thuế DPH (plátce DPH)</strong> là người kinh doanh đã đăng ký DPH. Trên hóa đơn có ghi thuế suất DPH.</li>
  <li><strong>Người không nộp thuế DPH (neplátce DPH)</strong> là người chưa đăng ký.</li>
  <li><strong>DIČ</strong> là mã số thuế (daňové identifikační číslo).</li>
  <li><strong>IČO</strong> là mã số doanh nghiệp (identifikační číslo osoby).</li>
  <li><strong>Người tiêu dùng (spotřebitel)</strong> là khách mua không phải cho việc kinh doanh của mình.</li>
</ul>
<div class="tbl"><table>
  <thead><tr><th>Luật</th><th>Luật nói gì</th><th>Thực tế</th></tr></thead>
  <tbody>
    <tr><td>Zákon o evidenci tržeb (luật ghi nhận doanh thu)</td><td>Không bắt buộc hóa đơn</td><td>Không phải in vì EET</td></tr>
    <tr><td>Zákon o DPH, § 28</td><td>Người nộp thuế DPH lập hóa đơn thuế (daňový doklad) khi bán cho người kinh doanh hoặc pháp nhân. Thời hạn 15 ngày.</td><td>Bạn phải xuất chứng từ cho công ty</td></tr>
    <tr><td>Zákon o ochraně spotřebitele, § 16</td><td>Khi người tiêu dùng yêu cầu, người bán xuất chứng từ mua hàng (doklad o koupi)</td><td>Áp dụng cho cả người nộp và người không nộp thuế DPH</td></tr>
  </tbody>
</table></div>
<p>Với người tiêu dùng không muốn lấy chứng từ, không luật nào trong số này bắt bạn phải đưa. Tuy vậy nhiều cửa hàng vẫn xuất cho mỗi lần bán, vì đơn giản hơn và khách có bằng chứng đã mua hàng.</p>`,
      },
      {
        id: "zjednoduseny-doklad",
        h2: "Hóa đơn thuế rút gọn đến 10 000 Kč",
        html: `
<p>Hóa đơn thông thường của người nộp thuế DPH là hóa đơn thuế rút gọn (zjednodušený daňový doklad). Bạn được lập loại này khi tổng số tiền cho hàng hóa, dịch vụ trên hóa đơn không cao hơn 10 000 Kč.</p>
<div class="tbl"><table>
  <thead><tr><th>Thông tin</th><th>Phải có trên hóa đơn</th><th>Ví dụ</th></tr></thead>
  <tbody>
    <tr><td>Tên công ty hoặc họ tên và trụ sở của bạn</td><td>Có</td><td>Tên và địa chỉ trụ sở</td></tr>
    <tr><td>DIČ của bạn</td><td>Có</td><td>DIČ của người nộp thuế DPH</td></tr>
    <tr><td>Số chứng từ (evidenční číslo dokladu)</td><td>Có</td><td>Số thứ tự từ máy tính tiền</td></tr>
    <tr><td>Khối lượng và nội dung hàng hóa, dịch vụ</td><td>Có</td><td>Rohlík 10 ks (bánh mì que, 10 cái), cắt tóc</td></tr>
    <tr><td>Ngày lập</td><td>Có</td><td>Ngày bán</td></tr>
    <tr><td>Ngày thực hiện giao dịch (den uskutečnění plnění)</td><td>Chỉ khi khác với ngày lập</td><td>Ngày giao hàng khác</td></tr>
    <tr><td>Thuế suất DPH</td><td>Có</td><td>12 % hoặc 21 %</td></tr>
    <tr><td>Tổng số tiền</td><td>Có, khi trên hóa đơn không có số tiền thuế</td><td>Tổng 250 Kč</td></tr>
    <tr><td>Khách hàng và DIČ của khách</td><td>Không</td><td>Có thể không có</td></tr>
    <tr><td>Đơn giá chưa DPH và giảm giá</td><td>Không</td><td>Có thể không có</td></tr>
    <tr><td>Giá tính thuế và số tiền thuế</td><td>Không</td><td>Có thể không có</td></tr>
  </tbody>
</table></div>
<p>Nhiều máy tính tiền vẫn in giá tính thuế và số tiền thuế. Đó không phải là lỗi, luật chỉ nói hai thông tin này không bắt buộc trên hóa đơn rút gọn.</p>
<aside class="note"><p>Người tiêu dùng có thể muốn lấy chứng từ theo zákon o ochraně spotřebitele. Luật này còn yêu cầu mã số doanh nghiệp. Vì vậy hãy thêm IČO vào hóa đơn, nếu bạn có.</p></aside>
<h3>Khi nào không được lập hóa đơn rút gọn</h3>
<ul>
  <li>Bạn bán sản phẩm thuốc lá với giá khác với giá cố định dành cho người tiêu dùng cuối cùng.</li>
  <li>Thuế do khách kê khai, không phải do bạn.</li>
  <li>Bạn bán hàng được miễn thuế sang nước EU khác.</li>
  <li>Đó là bán hàng từ xa hoặc bán hàng nhập khẩu từ xa có nơi thực hiện tại Séc.</li>
</ul>
<h3>Quán ăn nhanh và thuế suất từ ngày 1 tháng 1 năm 2027</h3>
<p>Từ ngày 1 tháng 1 năm 2027, dịch vụ ăn uống có thay đổi. Đồ uống không cồn phục vụ tại chỗ chịu thuế suất 12 %. Phục vụ đồ uống có cồn vẫn ở thuế suất cao 21 %. Hãy xác nhận cài đặt thuế suất với kế toán.</p>`,
      },
      {
        id: "nad-10000",
        h2: "Bán trên 10 000 Kč",
        html: `
<p>Trên 10 000 Kč, bạn không được lập hóa đơn thuế rút gọn. Nếu bán cho công ty, bạn lập hóa đơn thuế thông thường (běžný daňový doklad), trong thực tế gọi là faktura (hóa đơn VAT). Thời hạn là 15 ngày. Ví dụ: một công ty xây dựng mua vật liệu tại cửa hàng hết 12 000 Kč. Cửa hàng lập hóa đơn có tên và DIČ của công ty đó.</p>
<p>Khi người mua là người tiêu dùng, zákon o DPH không bắt buộc lập hóa đơn thuế cho họ. Nhưng nếu họ yêu cầu, họ được nhận chứng từ mua hàng (doklad o koupi) theo zákon o ochraně spotřebitele.</p>`,
      },
      {
        id: "doklad-neplatce",
        h2: "Chứng từ của người không nộp thuế DPH",
        html: `
<p>Người không nộp thuế DPH (neplátce DPH) không lập hóa đơn thuế. Khi người tiêu dùng yêu cầu, họ xuất chứng từ mua hàng (doklad o koupi) theo § 16 của zákon o ochraně spotřebitele. Trên chứng từ phải có:</p>
<ul>
  <li>ngày bán hàng hoặc cung cấp dịch vụ,</li>
  <li>đó là hàng hóa hay dịch vụ gì,</li>
  <li>giá,</li>
  <li>họ và tên của bạn, hoặc tên, tên thương mại (obchodní firma),</li>
  <li>IČO của bạn.</li>
</ul>
<p>Ví dụ của một thợ làm tóc không nộp DPH: “Doklad o prodeji, Jana Nováková, IČO, 31. 1. 2027, střih a foukaná, 450 Kč.” (chứng từ bán hàng, ngày 31 tháng 1 năm 2027, cắt và sấy tóc). Chị không cần ghi DIČ lên chứng từ. Chị không ghi thuế suất DPH hay số tiền DPH, vì chị không nộp DPH.</p>
<p>Luật yêu cầu thêm thông tin trong hai trường hợp:</p>
<ul>
  <li><strong>Hàng đã qua sử dụng, hàng đã sửa đổi và hàng có lỗi:</strong> phải ghi rõ trên chứng từ. Điều này cũng áp dụng cho hàng có công dụng bị hạn chế theo cách khác.</li>
  <li><strong>Bán hàng giao sau:</strong> trên chứng từ còn phải có nơi giao và ngày giao.</li>
</ul>`,
      },
      {
        id: "eet-a-pok",
        h2: "Doanh thu ghi nhận trong EET và mã POK trên hóa đơn",
        html: `
<p>POK là mã xác nhận. Finanční správa (Cục Thuế Séc) gửi mã này cho máy tính tiền để xác nhận đã nhận doanh thu. Bạn không bắt buộc phải có mã này trên hóa đơn. Bạn có thể tự nguyện ghi.</p>
<ul>
  <li>Trên chứng từ không cần có câu nào về việc ghi nhận doanh thu.</li>
  <li>Luật không bắt buộc lưu giữ mã POK.</li>
  <li>Nội dung hóa đơn không được gửi lên EET, chỉ gửi tổng số tiền và các thông tin cơ bản.</li>
  <li>Tổng hợp doanh thu đã ghi nhận có trong DIS+ (hộp thư thuế điện tử).</li>
</ul>
<p>Hóa đơn cũng có thể ở dạng điện tử. Với hóa đơn thuế điện tử, khách phải đồng ý với hình thức này. Chi tiết về ghi nhận có trong bài <a href="eet-2-0-pruvodce.html">EET 2.0: hướng dẫn cơ bản</a>.</p>`,
      },
      {
        id: "opravny-doklad",
        h2: "Trả hàng: chứng từ điều chỉnh và doanh thu âm",
        html: `
<p>Khi trả lại tiền, bạn xử lý ở hai nơi. Với người nộp thuế DPH là DPH, còn với mọi người kinh doanh có doanh thu phải ghi nhận là EET.</p>
<h3>DPH của người nộp thuế DPH</h3>
<p>Khi khách trả hàng, người nộp thuế DPH điều chỉnh giá tính thuế (základ daně). Chứng từ thuế điều chỉnh (opravný daňový doklad) được lập trong 15 ngày kể từ ngày phát sinh việc điều chỉnh. Trên chứng từ điều chỉnh có thông tin và DIČ của người bán và của khách, số hóa đơn gốc, số chứng từ điều chỉnh, lý do điều chỉnh, phần chênh lệch về giá tính thuế, về thuế và về tổng số tiền, và ngày phát sinh việc điều chỉnh.</p>
<p>Nếu hóa đơn gốc là hóa đơn rút gọn và bạn không biết đủ về khách, chứng từ điều chỉnh không cần có thông tin về khách cũng như phần chênh lệch về giá tính thuế và về thuế.</p>
<p>Bạn không phải lập chứng từ điều chỉnh nếu trước đó bạn không có nghĩa vụ lập hóa đơn thuế, hoặc bạn không biết đủ về khách. Khi đó bạn điều chỉnh trong sổ theo dõi DPH của mình. Hãy thống nhất cách làm với kế toán.</p>
<h3>EET</h3>
<p>Doanh thu trả lại được ghi nhận là số âm. Khách của tiệm tạp hóa trả hàng 40 Kč và nhận lại tiền. Máy tính tiền gửi doanh thu −40 Kč. Làm tương tự khi khiếu nại hàng (reklamace), khi ghi nhận nhầm doanh thu hoặc khi thanh toán thẻ cuối cùng không thành công. Điều này áp dụng cho cả người nộp và người không nộp thuế DPH. Nhưng chứng từ thuế điều chỉnh chỉ liên quan đến người nộp thuế DPH.</p>`,
      },
      {
        id: "faktura",
        h2: "Faktura (hóa đơn VAT) khi khách yêu cầu",
        html: `
<p>Faktura (hóa đơn VAT) thường do người kinh doanh hoặc công ty yêu cầu. Người nộp thuế DPH lập hóa đơn thuế cho họ trong 15 ngày. Đến 10 000 Kč, luật cho phép dùng hóa đơn rút gọn. Trên 10 000 Kč, bạn phải lập hóa đơn thuế thông thường.</p>
<p>Trên hóa đơn thuế thông thường có các thông tin sau theo § 29 của zákon o DPH:</p>
<ul>
  <li>tên công ty hoặc họ tên, trụ sở và DIČ của bạn,</li>
  <li>khách hàng và DIČ của khách, nếu khách có,</li>
  <li>số chứng từ (evidenční číslo dokladu),</li>
  <li>khối lượng và nội dung hàng hóa, dịch vụ,</li>
  <li>ngày lập và ngày thực hiện giao dịch, nếu hai ngày này khác nhau,</li>
  <li>đơn giá chưa thuế và giảm giá, nếu giảm giá chưa tính vào giá,</li>
  <li>giá tính thuế, thuế suất và số tiền thuế bằng koruna Séc.</li>
</ul>
<p>Với người tiêu dùng, zákon o DPH không bắt buộc lập hóa đơn thuế. Chứng từ mua hàng theo zákon o ochraně spotřebitele là đủ.</p>
<p>Nếu bạn đã xuất hóa đơn (účtenka) cho lần bán đó mà sau đó khách muốn thêm faktura, hãy thống nhất cách làm với kế toán, để cùng một lần bán không xuất hiện hai lần trong chứng từ. Người không nộp thuế DPH lập faktura không có DPH.</p>`,
      },
      {
        id: "uchovavani",
        h2: "Lưu giữ chứng từ trong bao lâu",
        html: `
<div class="tbl"><table>
  <thead><tr><th>Loại</th><th>Bao lâu</th><th>Quy định</th></tr></thead>
  <tbody>
    <tr><td>Hóa đơn thuế của người nộp thuế DPH, kể cả hóa đơn (účtenky) đã xuất</td><td>10 năm kể từ cuối kỳ tính thuế (zdaňovací období) có giao dịch</td><td>§ 35 của zákon o DPH</td></tr>
    <tr><td>Chứng từ kế toán, khi bạn làm sổ kế toán (účetnictví)</td><td>5 năm kể từ cuối kỳ kế toán</td><td>§ 31 của zákon o účetnictví (luật kế toán)</td></tr>
    <tr><td>Giấy tờ của người không nộp thuế DPH không làm sổ kế toán</td><td>Hãy xác định thời gian với kế toán. Thời hạn ấn định thuế là 3 năm và có thể thay đổi.</td><td><a href="https://www.zakonyprolidi.cz/cs/2009-280#p148" rel="noopener">§ 148 của daňový řád (luật quản lý thuế)</a></td></tr>
    <tr><td>Mã POK</td><td>Luật không bắt buộc lưu giữ</td><td>eet.gov.cz</td></tr>
  </tbody>
</table></div>
<p>Ví dụ: một người nộp thuế DPH kê khai DPH theo tháng, bán hàng ngày 15 tháng 3 năm 2027. Kỳ tính thuế kết thúc ngày 31 tháng 3 năm 2027, vì vậy phải lưu chứng từ đến ngày 31 tháng 3 năm 2037.</p>
<p>Trong suốt thời gian đó, người nộp thuế DPH phải bảo đảm chứng từ có nguồn gốc đáng tin cậy, nội dung nguyên vẹn và đọc được. Bạn được lưu chứng từ ở dạng điện tử. Chứng từ phải ở Séc, hoặc được lưu sao cho bạn có thể truy cập từ xa liên tục. Hóa đơn thuế lập bằng tiếng nước ngoài thì khi cơ quan thuế (správce daně) yêu cầu, bạn phải cho dịch sang tiếng Séc.</p>
<p>Giấy nhiệt của hóa đơn theo thời gian sẽ phai. Chắc chắn hơn là lưu chứng từ trong máy tính tiền hoặc máy tính và trong bản sao lưu của riêng bạn.</p>
<p>SuperKasa có EET 2.0 trong mọi gói và chúng tôi đã thử kết nối trong môi trường thử của Finanční správa. Giá có trong <a href="cenik.html">bảng giá</a>.</p>`,
      },
    ],
    faq: [
      ["Tôi có phải đưa hóa đơn cho mọi khách không?", "Vì EET thì không. Với người tiêu dùng, bạn phải đưa khi họ yêu cầu. Người nộp thuế DPH phải lập hóa đơn thuế khi bán cho người kinh doanh hoặc pháp nhân."],
      ["Trên hóa đơn có bắt buộc ghi mã POK không?", "Không. Mã xác nhận không cần ghi trên hóa đơn hay chứng từ khác. Bạn có thể tự nguyện ghi."],
      ["Hóa đơn thuế rút gọn dùng được đến số tiền nào?", "Đến 10 000 Kč. Nói chính xác: tổng số tiền cho hàng hóa, dịch vụ trên hóa đơn không được cao hơn 10 000 Kč. Ngoại lệ là ví dụ thuốc lá bán với giá khác giá cố định."],
      ["Người không nộp thuế DPH có phải ghi DIČ trên chứng từ không?", "Zákon o ochraně spotřebitele (luật bảo vệ người tiêu dùng) không yêu cầu DIČ. Trên chứng từ phải có ngày, hàng hóa hoặc dịch vụ, giá, họ tên hoặc tên của người bán và IČO."],
      ["Hóa đơn có thể chỉ ở trên điện thoại hoặc gửi qua e-mail không?", "Có, chứng từ có thể ở dạng điện tử. Với hóa đơn thuế dạng điện tử, khách phải đồng ý với hình thức này. Ai không đồng ý thì nhận chứng từ giấy."],
      ["Tôi phải giữ hóa đơn bao lâu?", "Người nộp thuế DPH giữ 10 năm kể từ cuối kỳ tính thuế có giao dịch bán. Với các giấy tờ khác, thời hạn khác nhau, nên hãy làm theo hướng dẫn của kế toán."],
    ],
    sources: [
      ["Luật Zákon č. 235/2004 Sb. về DPH, § 26 đến 35a, 42, 45 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/2004-235"],
      ["Luật số 634/1992 Sb. về bảo vệ người tiêu dùng, § 16 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/1992-634#p16"],
      ["Luật Zákon č. 180/2026 Sb. về ghi nhận doanh thu, § 8 và sửa đổi phụ lục của zákon o DPH (eet.gov.cz)", ZAKON],
      ["Ghi nhận doanh thu trong thực tế và mã POK (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/evidence-trzeb-v-praxi"],
      ["Lỗi và cách xử lý: hủy và sửa doanh thu (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/chyby-a-jejich-reseni#storno-nebo-oprava-trzby-636"],
      ["Luật số 563/1991 Sb. về kế toán, § 31 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/1991-563#p31"],
    ],
    related: ["eet-2-0-pruvodce", "tiskarna-ctecka-zasuvka", "eet-off-pausalni-dan"],
  },

  {
    slug: "navod-superkasa",
    group: "pokladna",
    kicker: "Hướng dẫn từ đầu",
    title: "Hướng dẫn dùng máy tính tiền SuperKasa: từ đăng ký đến chốt ca",
    metaTitle: "Hướng dẫn máy tính tiền từ đăng ký đến chốt ca | SuperKasa",
    desc: "Cách dùng SuperKasa từng bước: đăng ký, hàng hóa, lần bán đầu tiên, thanh toán, trả hàng, chốt ca, nhân viên, sao lưu và trả tiền thuê.",
    lead: "Bạn tạo tài khoản trên app.superkasa.cz, thêm hàng bằng cách quét mã hoặc từ tệp, và thử đơn hàng đầu tiên ngay trong hôm nay. Hướng dẫn tiếp tục với thanh toán, trả hàng, chốt ca, nhân viên và trả tiền giấy phép.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 7,
    sections: [
      {
        id: "jak-zacit",
        h2: "Bắt đầu thế nào",
        html: `
<p>SuperKasa chạy trên trình duyệt ở máy tính, máy tính bảng và điện thoại. Không cần tải hay cài gì. 10 ngày đầu miễn phí và không cần thẻ thanh toán.</p>
<ul>
<li><strong>Dữ liệu:</strong> trên máy chủ SuperKasa tại Cộng hòa Séc, sao lưu mỗi ngày.</li>
<li><strong>Thiết bị:</strong> tối đa 10 trong gói (máy tính, máy tính bảng, điện thoại), tất cả bán chung một ca.</li>
</ul>`,
      },
      {
        id: "registrace",
        h2: "Đăng ký hoặc Mua ngay",
        html: `
<ol class="steps">
<li>Mở <a href="https://app.superkasa.cz/">app.superkasa.cz</a>.</li>
<li>Điền các ô <strong>Tên cửa hàng</strong> và <strong>Địa chỉ máy tính tiền</strong>, ví dụ vecerka-u-lipy.</li>
<li>Nhập <strong>IČO</strong> (mã số doanh nghiệp). Máy tính tiền sẽ kiểm tra trong sổ đăng ký ARES.</li>
<li>Điền <strong>E-mail</strong>. Số điện thoại không bắt buộc.</li>
<li>Tích đồng ý với điều khoản.</li>
<li>Chạm vào <strong>Tạo miễn phí</strong>. Nếu muốn trả tiền ngay, chạm vào <strong>Mua ngay</strong>. Sau khi tạo xong, máy tính tiền đưa bạn thẳng đến bước thanh toán và bạn vẫn được giữ thêm 10 ngày miễn phí.</li>
</ol>
<p>Mất đường dẫn để hoàn tất đăng ký? Hãy điền lại đăng ký với cùng địa chỉ, e-mail và IČO.</p>
<p><strong>Không cần tải gì:</strong> máy tính tiền chạy trên trình duyệt. Trên máy tính Windows, hóa đơn in ra máy in hóa đơn không cần hộp thoại (qua lối tắt Chrome) hoặc qua cửa sổ in. Điện thoại và máy tính bảng Android in ra máy in Bluetooth hoặc USB, iPhone in ở máy in của quầy chính. Xem hướng dẫn <a href="tiskarna-ctecka-zasuvka.html">Máy in hóa đơn, máy quét mã và ngăn kéo đựng tiền</a>.</p>`,
      },
      {
        id: "zrizeni",
        h2: "Thiết lập cửa hàng",
        html: `
<ol class="steps">
<li>Ở màn hình <strong>Bạn kinh doanh gì?</strong> hãy chọn ngành hàng, ví dụ Tạp hóa hoặc Tiệm cắt tóc.</li>
<li>Không thấy ngành hàng của bạn? Hãy viết vào ô <strong>Mô tả bằng lời của bạn: bạn bán gì?</strong> rồi chạm vào <strong>Gợi ý nhóm hàng</strong>. Bạn có thể sửa gợi ý.</li>
<li>Điền ô <strong>Tên của bạn</strong> và nhập <strong>PIN</strong> hai lần (4 đến 8 số).</li>
<li>Điền <strong>E-mail</strong> và <strong>Mật khẩu</strong> (ít nhất 8 ký tự). Bạn sẽ cần chúng trên mỗi thiết bị mới.</li>
<li>Chạm vào <strong>Tạo máy tính tiền</strong>.</li>
</ol>
<p>Máy tính tiền tạo nhóm hàng, thuế suất DPH (thuế giá trị gia tăng) và các mặt hàng mẫu. Thuế suất DPH chỉ là gợi ý, hãy kiểm tra với kế toán trong <strong>Quản lý → Nhóm hàng</strong>.</p>`,
      },
      {
        id: "firma",
        h2: "Thông tin công ty theo IČO",
        html: `
<p>Khi trên hóa đơn còn thiếu thông tin, chủ cửa hàng sẽ thấy ở phía trên thanh <strong>Hóa đơn còn thiếu</strong> với nút <strong>Bổ sung</strong>.</p>
<ol class="steps">
<li>Chạm vào <strong>Bổ sung</strong>, hoặc mở <strong>Quản lý → Công ty</strong>.</li>
<li>Nhập <strong>IČO</strong>. Tên thương mại và trụ sở sẽ tự điền từ ARES.</li>
<li>Ở mục <strong>Người nộp thuế VAT</strong> (plátce DPH), chọn Có hoặc Không.</li>
<li>Kiểm tra ô <strong>Địa chỉ cửa hàng</strong>. Ở đây phải là địa chỉ cửa hàng, không phải trụ sở. Người kinh doanh tự do (živnostník) thường có trụ sở ở nhà.</li>
<li>Chạm vào <strong>Lưu</strong>.</li>
</ol>
<aside class="note"><p>Bạn cài đặt EET 2.0 trong <strong>Quản lý → EET 2.0</strong>. Cách làm có trong hướng dẫn <a href="eet-2-0-krok-za-krokem.html">EET 2.0 từng bước</a>.</p></aside>`,
      },
      {
        id: "zbozi",
        h2: "Hàng hóa trong máy tính tiền",
        html: `
<p>Có ba cách thêm hàng:</p>
<ul>
<li><strong>Quét mã khi bán.</strong> Quét một mã chưa có trong máy. Máy sẽ thử tìm tên hàng. Bạn điền giá và chạm vào <strong>Thêm hàng và bán</strong>.</li>
<li><strong>Thêm tay.</strong> Mở <strong>Quản lý → Kho hàng → Hàng hóa</strong> và chạm vào <strong>+ Thêm hàng</strong>.</li>
<li><strong>Từ tệp.</strong> Mở <strong>Quản lý → Nhập từ CSV</strong> và chọn tệp CSV hoặc Excel .xlsx. Nút <strong>Thử (không lưu)</strong> cho thấy những gì sẽ thay đổi. Sau đó chạm vào <strong>Nhập</strong>.</li>
</ul>
<p>Chủ cửa hàng hoặc quản lý đổi giá hàng mẫu ngay khi bán: bấm chuột phải vào ô hàng, trên màn hình cảm ứng thì chạm và giữ.</p>`,
      },
      {
        id: "prvni-prodej",
        h2: "Lần bán đầu tiên",
        html: `
<p>Sau khi đăng nhập bằng mã PIN, máy tính tiền tự mở. Ví dụ ở tiệm tạp hóa: khách muốn 6 bánh mì que (rohlík) và một chai Kofola.</p>
<ol class="steps">
<li>Trên bàn phím số nhập 6, chạm vào <strong>×</strong> rồi chạm vào ô Rohlík.</li>
<li>Quét Kofola, hoặc chạm vào ô hàng của nó.</li>
<li>Kiểm tra đơn hàng ở bên phải. Chạm vào một món để đổi số lượng, giá hoặc giảm giá.</li>
<li>Chạm vào <strong>Thanh toán</strong> (phím F4).</li>
</ol>
<p>Hàng chưa có thẻ hàng thì bán qua nhóm hàng: nhập giá trên bàn phím số và chạm vào nhóm. Với hàng bán theo kg, máy tính tiền sẽ hỏi <strong>Nhập khối lượng (kg)</strong>. Khi khách quên gì đó, chạm vào <strong>Lưu tạm</strong>. Đơn hàng nằm trong <strong>Đơn lưu tạm</strong>.</p>`,
      },
      {
        id: "platba",
        h2: "Thanh toán tiền mặt, thẻ và QR",
        html: `
<p><strong>Tiền mặt.</strong> Chạm vào các tờ tiền khách đưa. Số tiền được cộng dồn. Máy hiện <strong>Tiền thối lại</strong>. Tiền mặt được làm tròn đến koruna. Xác nhận bằng nút <strong>Xác nhận thanh toán</strong>.</p>
<p><strong>Thẻ.</strong> Chạm vào <strong>Thẻ</strong>. Nhập số tiền bằng tay trên máy quẹt thẻ của bạn, vì máy tính tiền không nối với máy quẹt thẻ. Khi thanh toán xong, chạm vào <strong>Thanh toán thẻ thành công</strong>.</p>
<p><strong>Thanh toán QR.</strong> Nút <strong>Thanh toán QR</strong> chỉ hiện khi đã điền IBAN. Bạn ghi IBAN trong <strong>Quản lý → Công ty</strong>, ô <strong>IBAN tài khoản nhận QR</strong>. Khách quét mã trong ứng dụng ngân hàng. Chỉ chạm vào <strong>Đã nhận tiền</strong> khi đã thấy tiền vào tài khoản. Màn hình “đã gửi” trên điện thoại của khách không bảo đảm là tiền đã được trả.</p>
<p><strong>Kết hợp.</strong> Một phần bằng thẻ hoặc QR, phần còn lại tiền mặt. Đó là biểu tượng nhỏ ở cuối hàng các cách thanh toán.</p>
<p>Hóa đơn tự in ra. Nếu bạn chưa có máy in, máy tính tiền sẽ đưa bạn đến trình hướng dẫn. Bạn có thể xem thêm hướng dẫn <a href="tiskarna-ctecka-zasuvka.html">Máy in hóa đơn, máy quét mã và ngăn kéo đựng tiền</a>.</p>`,
      },
      {
        id: "vratka-storno",
        h2: "Trả hàng và hủy hóa đơn",
        html: `
<div class="tbl"><table>
<thead><tr><th></th><th>Hủy hóa đơn</th><th>Trả hàng</th></tr></thead>
<tbody>
<tr><td>Khi nào</td><td>Cả hóa đơn của ca đang mở</td><td>Những món được chọn, kể cả từ lần mua trước</td></tr>
<tr><td>Nút</td><td>Hủy toàn bộ hóa đơn</td><td>Trả lại hàng</td></tr>
<tr><td>Tiền</td><td>Trả lại theo cách đã thanh toán</td><td>Bạn chọn Tiền mặt, Thẻ, hoặc Chuyển khoản</td></tr>
</tbody>
</table></div>
<ol class="steps">
<li>Chạm vào <strong>Lịch sử</strong> và tìm hóa đơn. Hóa đơn cũ thì tìm theo số.</li>
<li>Mở hóa đơn và chọn <strong>Trả lại hàng</strong> hoặc <strong>Hủy toàn bộ hóa đơn</strong>.</li>
<li>Với trả hàng, nhập số lượng và cách trả tiền rồi chạm vào <strong>Xác nhận</strong>.</li>
<li>Chọn lý do.</li>
<li>Nhân viên phải nhập mã PIN của quản lý hoặc chủ cửa hàng.</li>
</ol>
<p>Không có gì bị xóa, luôn có một hóa đơn mới được tạo. Trả tiền vào thẻ thì bạn làm tay trên máy quẹt thẻ.</p>`,
      },
      {
        id: "uzaverka",
        h2: "Chốt ca và ngày hôm sau",
        html: `
<ol class="steps">
<li>Mở <strong>Menu → Chốt ca (đóng máy)</strong>.</li>
<li>Đếm tiền và ghi số tờ tiền, đồng xu.</li>
<li>Máy hiện các dòng <strong>Tiền mặt đã đếm</strong>, <strong>Tiền phải có trong ngăn kéo</strong> và <strong>Chênh lệch</strong>. Từ mức chênh lệch 100 Kč trở lên thì bắt buộc ghi chú.</li>
<li>Chạm vào <strong>Đóng ca</strong> và xác nhận.</li>
<li>In báo cáo bằng nút <strong>In</strong>.</li>
</ol>
<p>Sau đó hiện ra <strong>Mở ca</strong>. Trong ô <strong>Tiền mặt đầu ca trong ngăn kéo</strong>, hãy ghi số tiền còn lại trong ngăn kéo.</p>
<aside class="note warn"><p>Nếu bạn đóng cửa sổ này, lần đăng nhập sau máy sẽ tự mở với số tiền từ lần chốt ca trước, kể cả khi bạn đã mang doanh thu đi. Vì vậy hãy bật tùy chọn <strong>Nhập tiền mặt trong ngăn kéo khi mở máy</strong> trong <strong>Quản lý → Hệ thống → Kiểm soát tiền mặt</strong>. Tiền trong ngày thì ghi qua <strong>Menu → Nộp / rút tiền</strong>.</p></aside>
<p>Muốn xem tình hình mà không chốt ca, dùng <strong>Báo cáo tạm</strong> trong Menu.</p>
<p>Cả cửa hàng chỉ có một lần chốt ca: mọi thiết bị bán chung một ca. Sau 20 giờ máy tính tiền nhắc chốt ca, và nếu không ai chốt, lúc 23:59 máy tự chốt.</p>`,
      },
      {
        id: "prodavaci",
        h2: "Nhân viên và mã PIN",
        html: `
<ol class="steps">
<li>Mở <strong>Quản lý → Nhân viên</strong> và chạm vào <strong>+ Thêm nhân viên</strong>.</li>
<li>Điền tên, vai trò và ngôn ngữ.</li>
<li>Nhập mã PIN. Mỗi người một mã khác nhau và không được là 1111 hay dãy số như 1234.</li>
<li>Chạm vào <strong>Lưu</strong>.</li>
</ol>
<div class="tbl"><table>
<thead><tr><th>Vai trò</th><th>Được làm gì</th></tr></thead>
<tbody>
<tr><td>Nhân viên</td><td>Bán hàng và Menu, không thấy phần Quản lý</td></tr>
<tr><td>Quản lý</td><td>Thêm hàng hóa, kho, báo cáo và duyệt bằng mã PIN</td></tr>
<tr><td>Chủ</td><td>Tất cả, kể cả Công ty, Thiết bị, EET 2.0 và Hệ thống</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "zarizeni-zalohy",
        h2: "Thiết bị và sao lưu",
        html: `
<p>Trong gói có tối đa 10 thiết bị. Thiết bị mới đăng nhập bằng e-mail và mật khẩu của chủ cửa hàng, cách làm có trong hướng dẫn <a href="prodej-z-telefonu.html">Máy tính tiền trên điện thoại và máy tính bảng</a>.</p>
<p>Máy chủ sao lưu dữ liệu cửa hàng mỗi ngày, và có thêm một bản sao bên ngoài máy chủ. Bạn không cần cài đặt gì.</p>
<p>Bạn tải bản sao riêng về bất cứ lúc nào trong <strong>Quản lý → Hệ thống → Xuất dữ liệu</strong>. Xuất dữ liệu vẫn dùng được thêm 12 tháng sau khi hết thuê.</p>`,
      },
      {
        id: "licence-jazyk",
        h2: "Giấy phép, thanh toán và ngôn ngữ",
        html: `
<p>Giấy phép có giá <strong>189 Kč/tháng hoặc 2 041 Kč/năm, đã gồm thuế DPH</strong>. 10 ngày đầu miễn phí. Ai trả tiền trong thời gian dùng thử thì vẫn giữ những ngày còn lại, và thời gian trả phí chỉ bắt đầu sau đó.</p>
<ol class="steps">
<li>Chạm vào <strong>Thanh toán</strong> ở thanh phía trên, hoặc mở <strong>Quản lý → Hệ thống → Giấy phép và gói</strong>.</li>
<li>Chọn tiện ích trả thêm nếu bạn muốn, rồi chạm vào <strong>Tạo mã QR thanh toán</strong>.</li>
<li>Chọn <strong>Tháng</strong> hoặc <strong>Năm (−10 %)</strong> và quét mã QR trong ứng dụng ngân hàng để thanh toán.</li>
<li>Chạm vào <strong>Tôi đã trả – kiểm tra</strong>.</li>
</ol>
<aside class="note warn"><p>Hiện chúng tôi đối chiếu tiền giấy phép bằng tay, nên giấy phép không gia hạn ngay sau khi bạn trả. Nếu bạn không thấy thanh toán QR trong máy tính tiền, hãy gọi cho chúng tôi. Mã giấy phép thì bạn dán vào ô <strong>Mã giấy phép</strong> và chạm vào <strong>Kích hoạt</strong>.</p></aside>
<p>Sau khi hết thời gian dùng thử, bạn còn bán được 3 ngày kèm thông báo nhắc, sau khi hết thời gian đã trả cũng là 3 ngày (để kịp nhận tiền). Sau đó việc bán hàng mới sẽ dừng. Dữ liệu, hóa đơn, chốt ca, trả hàng và xuất dữ liệu vẫn hoạt động.</p>
<p><strong>Ngôn ngữ.</strong> Lá cờ ở phía trên chuyển giữa tiếng Séc, tiếng Việt và tiếng Anh. Mỗi nhân viên có ngôn ngữ riêng. Hóa đơn cho khách luôn bằng tiếng Séc.</p>`,
      },
    ],
    faq: [
      ["Sau khi đăng ký tôi có phải trả tiền ngay không?", "Không. 10 ngày đầu miễn phí và bạn không cần nhập thẻ. Bạn cũng có thể trả tiền trong thời gian dùng thử, những ngày còn lại vẫn được giữ."],
      ["Tôi quên mật khẩu. Phải làm sao?", "Mở địa chỉ cửa hàng của bạn trên thiết bị chưa đăng nhập và chạm vào Quên mật khẩu. Bạn nhập e-mail, mã PIN của chủ và mật khẩu mới."],
      ["Hóa đơn trong thời gian dùng thử có hợp lệ không?", "Máy tính tiền tạo đến hết năm 2026 xuất hóa đơn hợp lệ ngay. Máy tạo từ ngày 1 tháng 1 năm 2027 bắt đầu ở chế độ thử, trong đó hóa đơn không có giá trị. Máy chỉ chuyển sang vận hành thật khi có chứng chỉ từ DIS+, số đơn vị ghi nhận (evidenční jednotka), kết nối đã kiểm tra và giấy phép trả phí. Ai không phải ghi nhận doanh thu thì chọn Tôi không phải ghi nhận doanh thu trong Quản lý → EET 2.0 và không cần chứng chỉ. Chế độ thử chỉ bật được trước hóa đơn thật đầu tiên."],
      ["Nhân viên có trả tiền lại cho khách mà không có quản lý được không?", "Không. Với hủy hóa đơn và trả hàng, nhân viên phải xác nhận bằng mã PIN của quản lý hoặc chủ. Quản lý và chủ không phải nhập lại mã PIN."],
      ["Tôi có phải chốt ca mỗi ngày không?", "Sau 20 giờ máy nhắc, và lúc 23:59 máy tự chốt ca, nên doanh thu của nhiều ngày không bị gộp lại. Nhưng tiền mặt trong ngăn kéo thì chỉ bạn đếm được, vì vậy tốt hơn là cuối ngày tự chốt ca."],
    ],
    sources: [],
    related: ["tiskarna-ctecka-zasuvka", "prodej-z-telefonu", "eet-2-0-krok-za-krokem"],
  },

  {
    slug: "jak-vybrat-pokladnu",
    group: "pokladna",
    kicker: "Chọn máy tính tiền",
    title: "Cách chọn hệ thống máy tính tiền cho cửa hàng nhỏ",
    metaTitle: "Chọn máy tính tiền cho cửa hàng nhỏ | SuperKasa",
    desc: "Cần xem gì khi chọn máy tính tiền cho cửa hàng nhỏ: giá thật có DPH, thiết bị thêm, EET 2.0, kho, mất internet, ngôn ngữ và danh sách câu hỏi.",
    lead: "Tiệm tạp hóa cần máy quét mã và kho, thợ làm tóc chủ yếu cần ô dịch vụ. Hãy tính giá cả năm theo cách bạn kinh doanh và hỏi người bán 14 câu trong danh sách ở cuối bài.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "zacnete-provozem",
        h2: "Bắt đầu từ cửa hàng của bạn",
        html: `
<p>Trước tiên hãy viết ra cách bạn bán hàng. Mỗi loại hình cần những thứ khác nhau.</p>
<div class="tbl"><table>
<thead><tr><th>Loại hình</th><th>Điều quan trọng nhất</th></tr></thead>
<tbody>
<tr><td>Tiệm tạp hóa, thực phẩm</td><td>Máy quét mã, bán nhanh, kho, tiền cược vỏ chai, nhãn giá, hàng cân</td></tr>
<tr><td>Quán ăn nhanh, quán cà phê</td><td>Ô hàng nhanh, ăn tại chỗ và mang đi, nếu cần thì bàn và hóa đơn theo bàn</td></tr>
<tr><td>Thợ làm tóc, thẩm mỹ</td><td>Dịch vụ trên ô hàng, ít thiết bị, nếu cần thì đặt lịch</td></tr>
</tbody>
</table></div>
<p>Hãy thử một đơn hàng bình thường, không chỉ xem bản giới thiệu của người bán.</p>`,
      },
      {
        id: "cena",
        h2: "Máy tính tiền thật sự tốn bao nhiêu",
        html: `
<p>Giá quảng cáo thường chỉ là một phần chi phí. Hãy tính cả năm.</p>
<h3>Giá có DPH hay chưa có DPH</h3>
<p>Bảng giá cho người kinh doanh thường ghi giá chưa có DPH (thuế giá trị gia tăng). Nếu bạn không phải người nộp thuế DPH (plátce DPH), bạn không được khấu trừ thuế và phải trả giá có DPH. Ví dụ: 250 Kč chưa DPH, với thuế suất 21 %, là tổng cộng 302,50 Kč. Hãy luôn hỏi giá cuối cùng.</p>
<h3>Thiết bị thêm</h3>
<p>Hãy hỏi giá đã gồm bao nhiêu thiết bị. Quầy thứ hai, máy tính bảng để nhập hàng và điện thoại cho nhân viên làm thời vụ có thể mỗi cái phải trả riêng.</p>
<h3>Phần cứng</h3>
<p>Hãy tính những gì bạn đã có và những gì phải mua: máy tính hoặc máy tính bảng, máy in hóa đơn, máy quét mã, ngăn kéo đựng tiền và máy quẹt thẻ. Hãy hỏi hệ thống có chạy với thiết bị của bạn không, hay chỉ chạy với thiết bị của người bán.</p>
<h3>Tiện ích và phí</h3>
<p>Chấm công, chương trình khách hàng thân thiết hay đặt lịch thường phải trả thêm. Hãy hỏi cả phí trên doanh thu và trên thanh toán thẻ, ràng buộc hợp đồng và chi phí khi chấm dứt.</p>
<h3>Ví dụ tính</h3>
<p>Với SuperKasa, giá là 189 Kč/tháng hoặc 2 041 Kč/năm, luôn đã gồm thuế DPH. Quán cà phê muốn thêm Công thức và định mức giá 79 Kč sẽ trả 268 Kč/tháng. Phần cứng quán tự mua.</p>
<div class="tbl"><table>
<thead><tr><th>Tiện ích trả thêm</th><th>Kč/tháng, đã gồm DPH</th></tr></thead>
<tbody>
<tr><td>Chấm công và ca làm</td><td>79</td></tr>
<tr><td>Khách hàng thân thiết và phiếu quà tặng</td><td>69</td></tr>
<tr><td>Đặt lịch và lịch hẹn</td><td>99</td></tr>
<tr><td>Công thức và định mức</td><td>79</td></tr>
<tr><td>Kiểm soát nhân viên</td><td>69</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "eet",
        h2: "EET 2.0",
        html: `
<p>Việc ghi nhận doanh thu EET 2.0 bắt đầu từ ngày 1 tháng 1 năm 2027. Máy tính tiền phải gửi được doanh thu lên EET. Sẽ có ích nếu máy xuất được hóa đơn cả khi mất mạng. Hãy hỏi những điều sau:</p>
<ul>
<li>EET đã có trong giá hay phải trả thêm?</li>
<li>Chuyện gì xảy ra khi mất internet? Máy phải gửi doanh thu sau, luật cho 48 giờ.</li>
<li>Có ai giúp tôi lấy chứng chỉ từ DIS+ không?</li>
<li>Máy có báo khi chứng chỉ sắp hết hạn không?</li>
</ul>
<p>Chứng chỉ máy tính tiền (pokladní certifikát) bạn tự tải trong DIS+ (hộp thư thuế điện tử). Toàn bộ cách làm có trong hướng dẫn <a href="eet-2-0-krok-za-krokem.html">EET 2.0 từng bước</a>. Ai có thể không phải ghi nhận thì xem bài <a href="eet-off-pausalni-dan.html">EET OFF và thuế khoán</a>.</p>`,
      },
      {
        id: "sklad-ctecka",
        h2: "Kho và máy quét mã",
        html: `
<p>Nếu bạn có nhiều hàng có mã vạch, hãy thử các tình huống sau:</p>
<ul>
<li><strong>Mã lạ.</strong> Máy tính tiền làm gì khi máy quét đọc được hàng chưa có trong máy? Máy tốt sẽ cho tạo hàng ngay tại chỗ.</li>
<li><strong>Chuyển hàng hóa.</strong> Có nhập được danh sách từ máy cũ hoặc từ Excel không? Bạn có phải gõ tay hàng nghìn mặt hàng không?</li>
<li><strong>Nhập hàng và kiểm kê.</strong> Có nhập kho một lô hàng bằng cách quét mã được không?</li>
<li><strong>Máy quét.</strong> Máy quét USB thông thường có chạy không, hay chỉ một loại máy? Trên máy tính bảng có quét bằng camera được không?</li>
</ul>
<p>Thợ làm tóc có thể không cần lo về kho. Kho là một trong những thứ nên tắt được, để máy tính tiền vẫn gọn gàng dễ nhìn.</p>`,
      },
      {
        id: "vypadek",
        h2: "Mất internet",
        html: `
<p>Trước khi quyết định, hãy tìm hiểu máy hoạt động thế nào khi không có internet:</p>
<ul>
<li>Có bán tiếp và in hóa đơn được không?</li>
<li>Những cách thanh toán nào dùng được khi không có internet?</li>
<li>Dữ liệu lưu ở đâu và sau khi mất mạng được tải lên thế nào?</li>
<li>Có mở được máy tính tiền sau khi khởi động lại máy tính hoặc máy tính bảng không?</li>
</ul>
<p>Máy tính tiền cài trên máy tính tại cửa hàng thường không cần internet để bán hàng. Máy tính tiền trên trình duyệt thì phải có chế độ ngoại tuyến. Với SuperKasa trên trình duyệt, khi không có internet vẫn trả được bằng tiền mặt và thẻ, nhưng không trả được bằng QR. Chi tiết có trong hướng dẫn <a href="prodej-z-telefonu.html">Máy tính tiền trên điện thoại và máy tính bảng</a>.</p>`,
      },
      {
        id: "jazyk-data",
        h2: "Ngôn ngữ và dữ liệu của bạn",
        html: `
<p>Nhân viên ít nhầm hơn khi dùng máy bằng ngôn ngữ của mình. Trong khi đó bạn muốn hóa đơn cho khách bằng tiếng Séc. Hãy hỏi có cài ngôn ngữ cho nhân viên riêng được không. Xem thêm trong hướng dẫn <a href="pokladna-pro-vietnamske-obchody.html">Máy tính tiền bằng tiếng Việt</a>.</p>
<p>Hãy kiểm tra cả cách lấy dữ liệu của bạn. Có tải được hóa đơn, doanh thu và hàng hóa ra Excel không? Sau khi hết hợp đồng có làm được không? Khi chuyển sang nhà cung cấp khác, bạn có tải được dữ liệu không?</p>`,
      },
      {
        id: "vyzkouset",
        h2: "Nửa giờ thử ngay tại cửa hàng",
        html: `
<p>Bản giới thiệu của người bán là chưa đủ. Trong thời gian dùng thử miễn phí, hãy làm bài thử này ngay tại quầy của bạn, tốt nhất cùng nhân viên sẽ dùng máy.</p>
<ol class="steps">
<li>Quét mười sản phẩm thông thường và tạo một sản phẩm máy chưa biết.</li>
<li>Bán một đơn hàng bằng tiền mặt và đo xem mất bao lâu.</li>
<li>In hóa đơn và kiểm tra trên đó ghi gì.</li>
<li>Trả lại một món hàng.</li>
<li>Tắt Wi-Fi và thử bán thêm một đơn.</li>
<li>Chốt ca và so sánh với tiền trong ngăn kéo.</li>
<li>Tải hóa đơn ra Excel và đưa cho kế toán xem.</li>
</ol>
<p>Nếu bước nào không làm được, hãy ghi lại và hỏi nhà cung cấp. Qua câu trả lời, bạn cũng biết bộ phận hỗ trợ của họ làm việc thế nào.</p>`,
      },
      {
        id: "seznam",
        h2: "Danh sách câu hỏi",
        html: `
<p>Hãy hỏi những câu này với mọi người bán. Ghi lại câu trả lời.</p>
<ol>
<li>Cả năm tôi phải trả tổng cộng bao nhiêu, đã gồm DPH?</li>
<li>Giá đã gồm bao nhiêu thiết bị?</li>
<li>Những chức năng nào phải trả thêm?</li>
<li>Bạn có lấy phí trên doanh thu hoặc trên thanh toán thẻ không?</li>
<li>Dùng thử miễn phí bao lâu và tôi có phải nhập thẻ không?</li>
<li>Thời hạn báo chấm dứt hợp đồng là bao lâu?</li>
<li>Tôi có phải mua phần cứng của bạn không?</li>
<li>Máy in hóa đơn và máy quét mã nào dùng được?</li>
<li>EET 2.0 hoạt động thế nào và ai giúp tôi cài đặt?</li>
<li>Chuyện gì xảy ra khi mất internet?</li>
<li>Tôi nhập hàng hóa của mình vào thế nào?</li>
<li>Có dùng máy bằng ngôn ngữ của tôi được không?</li>
<li>Khi ngừng dùng, tôi tải dữ liệu về thế nào?</li>
<li>Ai giúp tôi khi máy không chạy mà cửa hàng đang đông khách?</li>
</ol>`,
      },
      {
        id: "superkasa",
        h2: "SuperKasa trả lời các câu hỏi này thế nào",
        html: `
<div class="tbl"><table>
<thead><tr><th>Câu hỏi</th><th>Trả lời</th></tr></thead>
<tbody>
<tr><td>Giá</td><td>189 Kč/tháng hoặc 2 041 Kč/năm, đã gồm thuế DPH</td></tr>
<tr><td>Dùng thử</td><td>10 ngày miễn phí, không cần thẻ</td></tr>
<tr><td>Thiết bị trong giá</td><td>Tối đa 10</td></tr>
<tr><td>Phí trên doanh thu</td><td>Không có</td></tr>
<tr><td>Máy quẹt thẻ</td><td>Của riêng bạn. Máy tính tiền không nối với máy quẹt thẻ, bạn nhập số tiền bằng tay.</td></tr>
<tr><td>Phần cứng</td><td>Của riêng bạn. Máy in hóa đơn phải hiểu ESC/POS, máy quét mã hoạt động như bàn phím USB.</td></tr>
<tr><td>Thanh toán QR</td><td>Chỉ dùng được khi đã điền IBAN. Việc tiền đã đến do nhân viên xác nhận.</td></tr>
<tr><td>Ngôn ngữ cho nhân viên</td><td>Tiếng Séc, tiếng Việt, tiếng Anh. Hóa đơn luôn bằng tiếng Séc.</td></tr>
<tr><td>Xuất dữ liệu</td><td>CSV, thêm 12 tháng sau khi hết thuê</td></tr>
</tbody>
</table></div>
<p>So sánh đầy đủ các gói có trong <a href="cenik.html">bảng giá</a>.</p>`,
      },
    ],
    faq: [
      ["Cửa hàng nhỏ có cần máy tính tiền đắt không?", "Không nhất thiết. Điều quyết định là bạn làm gì mỗi ngày. Nhưng hãy tính giá cả năm, gồm cả thiết bị thêm và tiện ích trả thêm."],
      ["Tôi dùng máy tính bảng thay máy tính có được không?", "Tùy cửa hàng. Với thợ làm tóc hoặc sạp hàng, máy tính bảng thường là đủ. Với tiệm tạp hóa có máy quét mã và ngăn kéo đựng tiền, máy tính có màn hình cảm ứng phù hợp hơn."],
      ["Vì EET tôi có bắt buộc phải có máy tính tiền không?", "Không nhất thiết. Bạn có thể ghi nhận từ máy tính bảng, máy tính hoặc điện thoại có phần mềm phù hợp, và ứng dụng nhà nước MOJE eet dự kiến đủ cho người kinh doanh nhỏ. Ai thuộc diện ghi nhận thì hãy kiểm tra với Finanční správa (Cục Thuế Séc) hoặc kế toán."],
      ["Có thử máy tính tiền trước khi trả tiền được không?", "Với SuperKasa thì có, 10 ngày đầu miễn phí và bạn không cần nhập thẻ. Với nhà cung cấp khác, hãy hỏi việc dùng thử có cần ký hợp đồng không."],
    ],
    sources: [["Finanční správa: Ai phải ghi nhận doanh thu", "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby"]],
    related: ["navod-superkasa", "tiskarna-ctecka-zasuvka", "eet-2-0-pruvodce"],
  },

  {
    slug: "tiskarna-ctecka-zasuvka",
    group: "pokladna",
    kicker: "Thiết bị cho máy tính tiền",
    title: "Máy in hóa đơn, máy quét mã vạch và ngăn kéo đựng tiền",
    metaTitle: "Máy in hóa đơn và máy quét mã vạch | SuperKasa",
    desc: "Máy in hóa đơn và máy quét mã nào dùng được với SuperKasa: khổ 58 và 80 mm, USB, Bluetooth, mạng, ngăn kéo, nhãn giá và khi không in được.",
    lead: "In hóa đơn trực tiếp cần máy in hiểu lệnh ESC/POS, máy quét mã nên hoạt động như bàn phím USB, còn ngăn kéo đựng tiền cắm vào máy in. Hướng dẫn này mô tả cách kết nối và cách xử lý khi hóa đơn không in ra.",
    published: "2026-10-31",
    updated: "2026-11-11",
    minutes: 7,
    sections: [
      {
        id: "co-potrebujete",
        h2: "Bạn cần những gì",
        html: `
<p>Thiết bị do bạn tự mua, không có trong giá gói.</p>
<div class="tbl"><table>
<thead><tr><th>Thiết bị</th><th>Cần có</th></tr></thead>
<tbody>
<tr><td>Máy in hóa đơn</td><td>Giấy nhiệt 80 hoặc 58 mm, lệnh ESC/POS</td></tr>
<tr><td>Máy quét mã vạch</td><td>Chế độ “bàn phím USB (HID)”</td></tr>
<tr><td>Ngăn kéo đựng tiền</td><td>Cắm vào máy in hóa đơn</td></tr>
<tr><td>Máy tính bảng hoặc điện thoại</td><td>Trình duyệt và camera</td></tr>
</tbody>
</table></div>
<aside class="note"><p>Chúng tôi chưa thử hết mọi loại máy in, nên chưa đưa ra danh sách các model đã kiểm tra. ESC/POS là ngôn ngữ của máy in hóa đơn. Trước khi mua máy in rẻ, hãy hỏi người bán xem máy có hiểu ngôn ngữ này không. Máy in tem nhãn (Zebra, TSC, Brother, Dymo) có ngôn ngữ riêng. Hóa đơn không in trực tiếp ra các máy này được.</p></aside>`,
      },
      {
        id: "sirka",
        h2: "Máy in 58 mm hay 80 mm",
        html: `
<div class="tbl"><table>
<thead><tr><th></th><th>80 mm</th><th>58 mm</th></tr></thead>
<tbody>
<tr><td>Số ký tự mỗi dòng</td><td>42</td><td>32</td></tr>
<tr><td>Dành cho ai</td><td>Tiệm tạp hóa, quán ăn nhanh, quầy chính</td><td>Máy in di động, sạp hàng, thợ làm tóc</td></tr>
<tr><td>Nhãn giá trên cuộn giấy</td><td>Mẫu 58 × 40 mm, phóng to theo chiều rộng cuộn</td><td>Mẫu 40 × 30 mm</td></tr>
<tr><td>Kết nối</td><td>Thường là USB hoặc mạng</td><td>Thường là Bluetooth</td></tr>
</tbody>
</table></div>
<p>Bạn cài chiều rộng trong trình hướng dẫn, ở ô <strong>Giấy in hóa đơn</strong>. Chiều rộng phải đúng với cuộn giấy trong máy in.</p>`,
      },
      {
        id: "pripojeni",
        h2: "Cách kết nối máy in",
        html: `
<p>Mở trình hướng dẫn trong <strong>Menu → Máy in</strong>, hoặc trong <strong>Quản lý → Thiết bị → Thêm máy in</strong>. Trình hướng dẫn chỉ đưa ra những gì dùng được trên thiết bị của bạn. Nhân viên thấy ít lựa chọn hơn chủ cửa hàng.</p>
<div class="tbl"><table>
<thead><tr><th>Bạn có</th><th>Lựa chọn trong trình hướng dẫn</th></tr></thead>
<tbody>
<tr><td>Máy tính Windows và máy in hóa đơn</td><td>In qua hộp thoại trình duyệt (không cần hộp thoại khi mở bằng lối tắt Chrome, xem bên dưới)</td></tr>
<tr><td>Android và máy in Bluetooth</td><td>Máy in Bluetooth</td></tr>
<tr><td>Android và máy in dùng cáp (OTG)</td><td>Máy in USB cho điện thoại / máy tính bảng</td></tr>
<tr><td>Máy in cũ dùng cáp nối tiếp</td><td>Máy in qua cổng COM</td></tr>
<tr><td>Điện thoại hoặc máy tính bảng, máy in ở quầy chính</td><td>In bằng máy in ở quầy chính</td></tr>
<tr><td>Máy in văn phòng hoặc PDF</td><td>Không có máy in hóa đơn, trên máy tính dùng trình duyệt thì chọn In qua hộp thoại trình duyệt</td></tr>
</tbody>
</table></div>
<h3>Trình điều khiển (driver) trong Windows</h3>
<p>Với máy in USB, trước tiên phải cài driver.</p>
<ol class="steps">
<li>Cắm máy in bằng cáp USB và bật máy.</li>
<li>Chờ Windows cài máy in. Epson TM cần driver từ trang của Epson (EPSON Advanced Printer Driver). Các hãng khác có driver trên đĩa CD hoặc trên trang của người bán.</li>
<li>Trong Windows, đặt máy in hóa đơn làm máy in mặc định.</li>
<li>Trong trình hướng dẫn của máy tính tiền, chọn <strong>In qua hộp thoại trình duyệt</strong> và chạm <strong>Lưu</strong>. Cửa sổ in mở ra ngay với tờ in thử.</li>
<li>Trong cửa sổ in, chọn máy in hóa đơn và đặt Lề là <strong>Không có</strong>. Trình duyệt sẽ nhớ lựa chọn này.</li>
</ol>
<h3>In không cần hộp thoại</h3>
<p>Không cần tải gì. Bạn chỉ mở máy tính tiền bằng một biểu tượng Chrome in thẳng ra máy in mặc định, không hiện hộp thoại in.</p>
<ol class="steps">
<li>Trong Windows, đặt máy in hóa đơn làm máy in mặc định.</li>
<li>Nhấp phải vào biểu tượng Google Chrome và chọn <strong>Thuộc tính</strong>.</li>
<li>Trong ô <strong>Đích</strong>, nhập <code>"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --kiosk-printing --user-data-dir="C:\\SuperKasaChrome"</code> rồi thêm địa chỉ cửa hàng của bạn.</li>
<li>Luôn mở máy tính tiền bằng biểu tượng này. Lần đầu hãy đăng nhập trong đó.</li>
</ol>
<p>SuperKasa sẽ mở trong cửa sổ Chrome riêng, tách khỏi Chrome bình thường. Các bước này cũng có trong máy tính tiền ở <strong>Quản lý → Thiết bị ngoại vi → In không cần cửa sổ xác nhận</strong>. Chỉ chủ cửa hàng mới thấy mục Thiết bị ngoại vi.</p>
<h3>Bluetooth</h3>
<ol class="steps">
<li>Bật máy in và bật Bluetooth trên điện thoại. Khi Android hỏi, hãy bật cả vị trí.</li>
<li>Chạm vào <strong>Kết nối máy in</strong> và chọn máy in trong danh sách.</li>
<li>Một tờ in thử sẽ in ra.</li>
</ol>
<aside class="note warn"><p>Sau khi tải lại trang, máy in Bluetooth không tự kết nối lại. Máy tính tiền hiện cửa sổ <strong>In không thành công</strong>. Chạm vào <strong>Kết nối máy in</strong>. Trên iPhone và iPad, in Bluetooth từ trình duyệt không hoạt động.</p></aside>
<h3>Máy in mạng</h3>
<p>Trình duyệt không gửi dữ liệu thẳng tới máy in mạng được. Hãy thêm máy in vào Windows (Cài đặt → Máy in và máy quét) rồi in như mọi máy in khác trong Windows – không cần hộp thoại hoặc qua hộp thoại in.</p>`,
      },
      {
        id: "zasuvka",
        h2: "Ngăn kéo đựng tiền",
        html: `
<p>Ngăn kéo cắm vào máy in hóa đơn, không cắm vào máy tính. Cáp của ngăn kéo cắm vào cổng có ghi <strong>DK</strong> trên máy in. Cáp mạng (internet) trông giống nhưng không mở được ngăn kéo. Đừng cắm cáp mạng vào cổng DK.</p>
<p><strong>In qua hộp thoại của trình duyệt</strong> (cài đặt thông thường trên máy tính): driver máy in trong Windows mở ngăn kéo mỗi lần in.</p>
<ol class="steps">
<li>Cắm cáp của ngăn kéo vào cổng DK trên máy in.</li>
<li>Trong Windows mở <strong>Cài đặt → Máy in và máy quét</strong>, chọn máy in hóa đơn rồi <strong>Tùy chọn in</strong>. Trong driver, bật mở ngăn kéo khi bắt đầu in. Với driver Epson, tùy chọn nằm ở thẻ <strong>Peripherals → Cash Drawer → Start of Document</strong> (trong driver tiếng Séc: <span lang="cs">Perif. zař. → Pokladní zásuvka → Začátek dokumentu</span>).</li>
<li>Trong máy tính tiền mở <strong>Quản lý → Thiết bị ngoại vi → Ngăn kéo tiền</strong>, bật <strong>Ngăn kéo tiền cắm vào máy in của máy tính này</strong> rồi bấm <strong>Thử ngăn kéo</strong>.</li>
</ol>
<p>Khi in hóa đơn, ngăn kéo tự mở. Khi không in hóa đơn (nút <strong>Ngăn kéo</strong>, trả tiền mặt không in), máy tính tiền gửi một lệnh in trống ngắn để mở ngăn kéo. Driver mở ngăn kéo mỗi lần in, kể cả khi in hóa đơn trả bằng thẻ.</p>
<p><strong>Máy in kết nối trực tiếp</strong> (Bluetooth, USB hoặc cổng nối tiếp trong trình duyệt): trong trình hướng dẫn máy in, tích <strong>Mở ngăn kéo khi trả tiền mặt (ngăn kéo cắm vào máy in)</strong>. Khi đó máy tính tiền chỉ mở ngăn kéo khi trả tiền mặt.</p>
<p>Mỗi lần mở ngăn kéo bằng tay đều được ghi lại.</p>`,
      },
      {
        id: "ctecka",
        h2: "Máy quét mã vạch",
        html: `
<p>Máy quét USB hoạt động như bàn phím. Chỉ cần cắm vào, không phải cài gì.</p>
<ol class="steps">
<li>Cắm máy quét vào cổng USB.</li>
<li>Mở <strong>Menu → Máy quét mã vạch</strong>.</li>
<li>Quét mã trên bất kỳ bao bì nào.</li>
<li>Máy tính tiền hiện <strong>Máy quét hoạt động</strong> và mã vừa quét.</li>
</ol>
<p>Sau mã, máy quét nên gửi phím Enter. Nếu không gửi, máy tính tiền vẫn xử lý được, chỉ chậm hơn một chút. Trong sách hướng dẫn của máy quét, hãy tìm tùy chọn “Enter suffix”. Bàn phím tiếng Séc không sao, máy tính tiền tự đổi các ký tự ě, š, č thành chữ số.</p>
<p>Khi máy quét gõ ra ký tự lạ, hãy chuyển máy sang chế độ “bàn phím USB (HID)” theo sách hướng dẫn của máy. Máy tính tiền không dùng chế độ “COM / cổng nối tiếp”. Máy quét không dây cần đầu thu USB đi kèm.</p>`,
      },
      {
        id: "tablet-telefon",
        h2: "Máy tính bảng, điện thoại và in ở quầy chính",
        html: `
<p>Trên điện thoại và máy tính bảng, camera đọc mã. Máy quét Bluetooth thì ghép nối trong cài đặt của điện thoại.</p>
<p>Bạn bán trên điện thoại còn máy in ở quầy chính? Quầy chính phải cài máy in trước.</p>
<ol class="steps">
<li>Trên điện thoại, mở <strong>Menu → Máy in</strong>.</li>
<li>Chọn <strong>In bằng máy in ở quầy chính</strong>.</li>
<li>Chọn thiết bị đặt cạnh máy in.</li>
<li>Muốn mở ngăn kéo ở quầy chính, bật tùy chọn <strong>Mở ngăn kéo ở quầy chính khi trả tiền mặt</strong>.</li>
<li>Chạm vào <strong>Dùng và in thử</strong>.</li>
</ol>
<p>Nếu quầy chính nối máy in qua Bluetooth hoặc USB trong trình duyệt, quầy đó phải mở máy tính tiền. Chạy nền là đủ. Nếu không, điện thoại sẽ hiện “Quầy chính chưa mở”. Xem thêm trong hướng dẫn <a href="prodej-z-telefonu.html">Máy tính tiền trên điện thoại và máy tính bảng</a>.</p>`,
      },
      {
        id: "cenovky",
        h2: "In nhãn giá",
        html: `
<p>Nhãn giá có trong gói Cửa hàng. Tiệm cắt tóc hoặc quán cà phê thì không có chức năng này trong máy. Chủ cửa hàng hoặc quản lý in nhãn.</p>
<ol class="steps">
<li>Mở <strong>Quản lý → In nhãn giá</strong>.</li>
<li>Chọn hàng. Hàng đã đổi giá thì tìm bằng bộ lọc <strong>Đổi giá từ</strong>.</li>
<li>Ở ô <strong>Kích thước</strong>, chọn cuộn 80 hoặc 58 mm.</li>
<li>Giữ tùy chọn <strong>Giá theo kg / l (luật yêu cầu)</strong> ở trạng thái bật.</li>
<li>Chạm vào <strong>In nhãn giá</strong>.</li>
</ol>
<p>Trong <strong>Máy in khác (máy in nhãn, A4)</strong> có nhãn nhiệt và giấy A4. Máy in tem nhãn in qua hộp thoại của trình duyệt. Kích thước nhãn cài trong driver máy in, ví dụ 58 × 40 mm. Các kiểu nhãn có màu chỉ in trên A4.</p>
<p>Để nhãn giá in thẳng ra máy in hóa đơn, phải tích <strong>In cả nhãn giá vào đây</strong> (cuộn 80/58 mm) trong <strong>Quản lý → Thiết bị → Cài đặt</strong>.</p>`,
      },
      {
        id: "netiskne",
        h2: "Khi không in được",
        html: `
<div class="tbl"><table>
<thead><tr><th>Bạn thấy gì</th><th>Cần làm gì</th></tr></thead>
<tbody>
<tr><td>Tờ giấy ra trắng</td><td>Lật cuộn giấy lại. Mặt in của giấy nhiệt phải hướng vào đầu in.</td></tr>
<tr><td>Không ra gì cả</td><td>Kiểm tra máy in đã bật, còn giấy và nắp đã đóng. Tắt máy, bật lại rồi chạm vào <strong>Thử lại</strong>.</td></tr>
<tr><td>Hóa đơn bị cắt mất chữ</td><td>Cài đúng chiều rộng ở ô <strong>Giấy in hóa đơn</strong>.</td></tr>
<tr><td>Máy in hóa đơn không có trong cửa sổ in</td><td>Cài driver trong Windows và mở lại cửa sổ in.</td></tr>
<tr><td>Bluetooth sau khi tải lại trang</td><td>Chạm vào <strong>Kết nối máy in</strong>, hoặc <strong>In qua hộp thoại</strong>.</td></tr>
<tr><td>Máy in USB đang được hệ thống sử dụng</td><td>Trên máy tính Windows, hãy in qua hệ thống: trong trình hướng dẫn chọn <strong>In qua hộp thoại trình duyệt</strong>, hoặc in không cần hộp thoại qua lối tắt Chrome.</td></tr>
<tr><td>Bán khi không có internet, in qua quầy chính</td><td>Hóa đơn in qua hộp thoại của trình duyệt. Khi không có internet, quầy chính không nhận lệnh in từ điện thoại.</td></tr>
</tbody>
</table></div>
<aside class="note warn"><p>Hóa đơn VAT (faktura) in trên khổ A4. Trên máy tính tiền chạy toàn màn hình (kiosk), hóa đơn này sẽ ra máy in hóa đơn khổ hẹp, nên máy tính tiền cho bạn tải về bằng nút <strong>Tải hóa đơn</strong>. Hãy mở tệp và in trên máy in A4.</p></aside>
<p>Nếu vẫn không được, hãy gọi cho chúng tôi. Thông tin liên hệ có ở trang <a href="kontakt.html">Liên hệ</a>.</p>`,
      },
    ],
    faq: [
      ["SuperKasa có chạy với máy in của tôi không?", "In trực tiếp cần máy in hiểu lệnh ESC/POS. Chúng tôi chưa thử hết mọi loại, nên hãy kiểm tra bằng cách in thử trong 10 ngày miễn phí. Không có máy in hóa đơn thì bạn có thể in qua hộp thoại của trình duyệt."],
      ["Máy quét mã có cần driver không?", "Máy quét USB thông thường không cần driver. Máy phải ở chế độ bàn phím USB (HID). Bạn thử máy trong Menu → Máy quét mã vạch."],
      ["Có mở ngăn kéo được khi không có máy in không?", "Không. Ngăn kéo mở qua máy in hóa đơn mà nó được cắm vào."],
      ["Tôi có in được từ iPhone không?", "Trong trình duyệt, iPhone không kết nối được máy in Bluetooth. Hãy dùng máy in ở quầy chính, hoặc máy tính bảng Android."],
      ["Tôi có bắt buộc dùng máy in hóa đơn để in nhãn giá không?", "Không. Nhãn giá cũng in được trên máy in tem nhãn qua trình duyệt hoặc trên máy in thường với giấy A4."],
    ],
    sources: [],
    related: ["navod-superkasa", "prodej-z-telefonu", "co-musi-byt-na-uctence"],
  },

  {
    slug: "prodej-z-telefonu",
    group: "pokladna",
    kicker: "Điện thoại và máy tính bảng",
    title: "Máy tính tiền trên điện thoại hoặc máy tính bảng và in ở quầy chính",
    metaTitle: "Máy tính tiền trên điện thoại, in ở quầy chính | SuperKasa",
    desc: "Bán hàng trên điện thoại, máy tính bảng: đăng nhập, mã PIN nhân viên, số thiết bị, camera làm máy quét, in ở quầy chính và khi mất internet.",
    lead: "Lần đầu, điện thoại hoặc máy tính bảng đăng nhập vào máy tính tiền bằng e-mail và mật khẩu của chủ cửa hàng, sau đó nhân viên chỉ cần mã PIN. Hóa đơn có thể in ra ở máy in của quầy chính, và máy tính tiền trên trình duyệt vẫn bán được khi không có internet.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "co-potrebujete",
        h2: "Bạn cần những gì",
        html: `
<p>Bạn không phải cài gì, máy tính tiền chạy trên trình duyệt.</p>
<div class="tbl"><table>
<thead><tr><th>Loại hình</th><th>Điện thoại hoặc máy tính bảng dùng để làm gì</th></tr></thead>
<tbody>
<tr><td>Quán ăn nhanh</td><td>Bán hàng ở khu ngoài trời, hóa đơn in ra ở quầy chính</td></tr>
<tr><td>Thợ làm tóc</td><td>Máy tính bảng cạnh ghế, là máy tính tiền duy nhất</td></tr>
<tr><td>Sạp hàng</td><td>Điện thoại và máy in Bluetooth di động</td></tr>
<tr><td>Tiệm tạp hóa</td><td>Máy tính bảng để nhập hàng và kiểm kê trong kho</td></tr>
</tbody>
</table></div>
<p>Điện thoại hoặc máy tính bảng kết nối với máy tính tiền qua internet, tại địa chỉ cửa hàng của bạn, ví dụ vas-obchod.superkasa.cz. Máy tính chính không cần chạy và bạn bán được cả bên ngoài cửa hàng.</p>`,
      },
      {
        id: "prihlaseni",
        h2: "Đăng nhập bằng e-mail và mật khẩu",
        html: `
<p>Thiết bị mới luôn do chủ cửa hàng đăng nhập. Bạn không phải nhập mã ghép nối nào.</p>
<ol class="steps">
<li>Trong trình duyệt của điện thoại, mở địa chỉ máy tính tiền, hoặc <a href="prihlaseni.html">trang Đăng nhập</a>.</li>
<li>Nhập <strong>E-mail</strong> và <strong>Mật khẩu</strong> của chủ cửa hàng.</li>
<li>Chạm vào <strong>Đăng nhập</strong>.</li>
</ol>
<p>Thiết bị tự ghép nối và chủ cửa hàng được đăng nhập luôn. Hãy thêm địa chỉ này ra màn hình chính của điện thoại để nhân viên dễ tìm.</p>
<aside class="note"><p>Xem e-mail tài khoản và đổi mật khẩu trong <strong>Quản lý → Hệ thống → Tài khoản chủ</strong>. Nếu quên mật khẩu, ở màn hình đăng nhập hãy chạm vào <strong>Quên mật khẩu</strong>. Bạn nhập e-mail, mã PIN của chủ và mật khẩu mới.</p></aside>`,
      },
      {
        id: "pin",
        h2: "Nhân viên đăng nhập bằng mã PIN",
        html: `
<p>Nhân viên không cần mật khẩu của chủ. Nhưng thiết bị phải do chủ đăng nhập trước, kể cả khi đó là điện thoại của nhân viên.</p>
<ol class="steps">
<li>Sau khi chủ đăng nhập, mở <strong>Menu → Đăng xuất</strong>.</li>
<li>Máy hiện bàn phím số. Nhân viên nhập mã PIN của mình và xác nhận.</li>
<li>Thiết bị vẫn được ghép nối. Lần sau chỉ cần mã PIN.</li>
</ol>
<p>Với máy tính tiền trên trình duyệt, nhân viên cũng có thể vào địa chỉ này từ <a href="https://app.superkasa.cz/">app.superkasa.cz</a>: ở phần <strong>Nhân viên: địa chỉ cửa hàng và mã PIN</strong>, nhập địa chỉ và chạm vào <strong>Vào máy tính tiền</strong>. Nhưng trên thiết bị chưa đăng nhập, màn hình đăng nhập của chủ sẽ hiện ra.</p>
<p>Sau 10 lần nhập sai mã PIN, việc đăng nhập trên thiết bị đó bị khóa 5 phút.</p>`,
      },
      {
        id: "kolik-zarizeni",
        h2: "Trong gói có bao nhiêu thiết bị",
        html: `
<p>Mỗi gói có <strong>tối đa 10 thiết bị</strong>. Mỗi máy tính, máy tính bảng, điện thoại và mỗi trình duyệt đăng nhập như một thiết bị mới đều được tính. Bạn xem số thiết bị đang có trong <strong>Quản lý → Hệ thống → Giấy phép và gói</strong>, ở dòng <strong>Thiết bị</strong>.</p>
<ul>
<li>Khi đã hết hạn mức, máy hiện <strong>Thay thiết bị cũ</strong>. Bạn chọn thiết bị không còn dùng.</li>
<li>Bạn gỡ thiết bị cũ trong <strong>Quản lý → Thiết bị</strong> bằng nút <strong>Gỡ bỏ</strong>.</li>
<li>Cần hơn 10 thiết bị? <a href="kontakt.html">Hãy gọi cho chúng tôi</a>.</li>
</ul>
<p>Báo cáo doanh thu cho chủ cửa hàng không chiếm thiết bị trong gói. Bạn tạo đường dẫn trong <strong>Quản lý → Hệ thống → Chủ cửa hàng trên điện thoại</strong>. Đường dẫn này chỉ để xem và dùng được ở bất cứ đâu.</p>
<aside class="note"><p>Mọi thiết bị bán chung một ca của cửa hàng. Cả cửa hàng chỉ có một lần chốt ca, và tiền mặt nhận trên điện thoại được cộng chung với quầy chính.</p></aside>`,
      },
      {
        id: "prodej",
        h2: "Bán hàng trên điện thoại",
        html: `
<p>Phía trên là ô tìm kiếm và nút camera, bên dưới là đơn hàng. Các nút <strong>Danh mục</strong> và <strong>Hàng chính</strong> mở danh sách hàng. Nút <strong>Xong</strong> đưa bạn về đơn hàng. Thanh toán giống như trên máy tính.</p>
<h3>Camera làm máy quét mã</h3>
<ol class="steps">
<li>Chạm vào biểu tượng camera trong ô tìm kiếm.</li>
<li>Cho phép trình duyệt dùng camera.</li>
<li>Hướng vào mã vạch. Mã sẽ tự được đọc.</li>
</ol>
<p>Camera đọc mã EAN-13, EAN-8 và UPC. Bạn thử trong <strong>Menu → Máy quét mã vạch</strong>.</p>
<p>Nếu camera không đọc được mã, hãy chạm vào <strong>Chụp ảnh</strong> và chụp mã từ gần, rõ nét và trọn vẹn, cả phần viền trắng.</p>
<p>Máy quét Bluetooth thì ghép nối trong cài đặt của điện thoại. Sau đó nó hoạt động như bàn phím.</p>
<h3>Nhập hàng trên máy tính bảng</h3>
<p>Chủ cửa hàng hoặc quản lý mở <strong>Quản lý → Kho hàng → Nhập hàng</strong>. Mỗi lần quét thêm một cái. Camera cũng dùng được ở đây. Cuối cùng chạm vào <strong>Nhập kho</strong>. <strong>Kiểm kê kệ</strong> cũng hoạt động như vậy.</p>`,
      },
      {
        id: "tisk",
        h2: "In ở quầy chính",
        html: `
<ol class="steps">
<li>Cài máy in ở quầy chính. Cách làm có trong hướng dẫn <a href="tiskarna-ctecka-zasuvka.html">Máy in hóa đơn, máy quét mã và ngăn kéo đựng tiền</a>.</li>
<li>Trên điện thoại, mở <strong>Menu → Máy in</strong>.</li>
<li>Chọn <strong>In bằng máy in ở quầy chính</strong> và chọn thiết bị.</li>
<li>Chạm vào <strong>Dùng và in thử</strong>.</li>
</ol>
<p>Lệnh in đi qua internet, nên điện thoại không cần cùng Wi-Fi với quầy chính.</p>
<p>Trình hướng dẫn cũng tự mở khi in lần đầu. Nếu bạn đóng nó, hóa đơn sẽ không tự in. Bạn in bằng <strong>HĐ cuối</strong> và <strong>In bản sao</strong>.</p>
<aside class="note warn"><p>Máy in Bluetooth nối với điện thoại chỉ hoạt động trên Android. Trên iPhone và iPad, trình duyệt không kết nối được máy in Bluetooth, hãy dùng máy in ở quầy chính. Sau khi tải lại trang, cần chạm lại vào <strong>Kết nối máy in</strong>.</p></aside>`,
      },
      {
        id: "ztraceny-telefon",
        h2: "Mất hoặc đổi điện thoại",
        html: `
<p>Khi mất điện thoại hoặc nhân viên nghỉ việc, hãy gỡ thiết bị đó. Như vậy người lạ không vào được máy tính tiền.</p>
<ol class="steps">
<li>Ở quầy chính, mở <strong>Quản lý → Thiết bị</strong>.</li>
<li>Ở thiết bị đó, chạm vào <strong>Gỡ bỏ</strong> và xác nhận.</li>
<li>Nếu thiết bị đang có ca mở, máy sẽ hỏi có đóng ca từ xa không. Khi đó tiền mặt sẽ không được đếm, nên hãy kiểm tra lại.</li>
</ol>
<p>Khi nhân viên nghỉ việc, hãy tắt tùy chọn <strong>Đang dùng</strong> của người đó trong <strong>Quản lý → Nhân viên</strong>.</p>`,
      },
      {
        id: "vypadek",
        h2: "Mất internet",
        html: `
<p>Việc bán hàng vẫn chạy tiếp và phía trên đơn hàng hiện <strong>Mất mạng – vẫn bán bình thường, hóa đơn sẽ tự gửi lên</strong>.</p>
<ul>
<li>Chỉ trả được bằng tiền mặt và thẻ. Thanh toán QR, điểm thưởng và hóa đơn theo bàn không dùng được.</li>
<li>Thiết bị có sẵn các số hóa đơn được giữ trước. Không có số này thì không lưu được đơn bán.</li>
<li>Hóa đơn được lưu trên thiết bị và khi có kết nối sẽ tự tải lên với thời gian gốc, kể cả lên EET.</li>
<li>Nút <strong>Đang chờ</strong> cho thấy các hóa đơn đang chờ. <strong>Gửi ngay</strong> gửi chúng đi ngay.</li>
<li>Việc chốt ca phải chờ đến khi mọi hóa đơn đã tải lên.</li>
<li>Đăng nhập bằng mã PIN và mở ca cần có kết nối. Hãy để thiết bị luôn đăng nhập.</li>
<li>In ở quầy chính không hoạt động khi không có internet, hóa đơn in qua hộp thoại của trình duyệt. Máy in Bluetooth nối với điện thoại vẫn in tiếp.</li>
</ul>
<aside class="note warn"><p>Khi hóa đơn còn đang chờ, đừng xóa dữ liệu trình duyệt. Hóa đơn chỉ nằm trên thiết bị đó. Sau 24 giờ máy tính tiền sẽ cảnh báo, vì doanh thu phải được gửi lên EET trong vòng 48 giờ. Hãy kết nối internet càng sớm càng tốt.</p></aside>`,
      },
    ],
    faq: [
      ["Nhân viên có dùng được điện thoại riêng không?", "Được, nhưng lần đăng nhập đầu phải do chủ cửa hàng làm bằng e-mail và mật khẩu của mình. Sau đó chủ đăng xuất và nhân viên nhập mã PIN."],
      ["Mỗi điện thoại có tính là một thiết bị không?", "Có. Trong gói có tối đa 10 thiết bị. Báo cáo Chủ cửa hàng trên điện thoại không tính vào hạn mức."],
      ["Điện thoại có phải cùng Wi-Fi với quầy chính không?", "Không. Lệnh in ra quầy chính đi qua internet, nên điện thoại dùng dữ liệu di động cũng được."],
      ["Máy tính tiền có chạy trên iPhone không?", "Có, trên trình duyệt. Chỉ có việc kết nối trực tiếp máy in Bluetooth là không được. Bạn có thể in ở máy in của quầy chính."],
      ["Có in nhãn giá trên điện thoại được không?", "Được, nếu bạn là quản lý hoặc chủ cửa hàng và điện thoại đã cài máy in. Nhưng phần Quản lý trên màn hình nhỏ kém tiện hơn trên máy tính."],
    ],
    sources: [],
    related: ["tiskarna-ctecka-zasuvka", "navod-superkasa", "moje-eet-nebo-pokladna"],
  },

  {
    slug: "pokladna-pro-vietnamske-obchody",
    group: "pokladna",
    kicker: "Dùng bằng tiếng Việt",
    title: "Máy tính tiền bằng tiếng Việt cho tiệm tạp hóa và cửa hàng thực phẩm",
    metaTitle: "Máy tính tiền tiếng Việt cho tiệm tạp hóa | SuperKasa",
    desc: "Máy tính tiền bằng tiếng Việt cho tiệm tạp hóa: nhân viên dùng tiếng mẹ đẻ, hóa đơn vẫn bằng tiếng Séc. Nhóm hàng, nhãn giá, tên hàng và hỗ trợ EET 2.0.",
    lead: "Nhân viên có thể dùng máy tính tiền bằng tiếng Việt, còn khách vẫn nhận hóa đơn bằng tiếng Séc. Bài này chỉ bạn cách cài đặt cho tiệm tạp hóa hoặc cửa hàng thực phẩm châu Á.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "jak-to-funguje",
        h2: "Ngôn ngữ của nhân viên và ngôn ngữ trên hóa đơn",
        html: `
<p>SuperKasa tách riêng ngôn ngữ của nhân viên và ngôn ngữ trên hóa đơn.</p>
<div class="tbl"><table>
<thead><tr><th>Phần nào</th><th>Ngôn ngữ</th></tr></thead>
<tbody>
<tr><td>Nút bấm, menu, phần Quản lý</td><td>Theo từng nhân viên: tiếng Séc, tiếng Việt, tiếng Anh</td></tr>
<tr><td>Tên nhóm hàng</td><td>Theo từng nhân viên</td></tr>
<tr><td>Hóa đơn cho khách và hóa đơn VAT (faktura)</td><td>Luôn bằng tiếng Séc</td></tr>
<tr><td>Nhãn giá</td><td>Luôn bằng tiếng Séc</td></tr>
<tr><td>Tên hàng</td><td>Đúng như bạn nhập. Trong máy nên ghi tên tiếng Séc.</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "nastaveni-jazyka",
        h2: "Cách chuyển sang tiếng Việt",
        html: `
<p><strong>Khi thiết lập máy.</strong> Chạm vào lá cờ Việt Nam ở góc trên bên phải. Lá cờ có ở trang đăng ký <a href="https://app.superkasa.cz/">app.superkasa.cz</a> và cả trên màn hình thiết lập. Sau khi đăng ký, bạn chuyển sang địa chỉ cửa hàng của mình và ở đó phải chạm vào lá cờ thêm một lần nữa. Khi đó tài khoản chủ sẽ được lưu bằng tiếng Việt.</p>
<p><strong>Cho nhân viên.</strong></p>
<ol class="steps">
<li>Mở <strong>Quản lý → Nhân viên</strong>.</li>
<li>Chạm vào tên nhân viên, hoặc vào <strong>+ Thêm nhân viên</strong>.</li>
<li>Ở ô <strong>Ngôn ngữ</strong>, chọn Tiếng Việt.</li>
<li>Chạm vào <strong>Lưu</strong>.</li>
</ol>
<p>Khi nhân viên đăng nhập bằng mã PIN, máy tự chuyển sang ngôn ngữ của người đó. Mỗi người cũng tự đổi được bằng lá cờ trên thanh phía trên, và máy sẽ nhớ lựa chọn này. Nhờ vậy nhân viên người Séc và chủ cửa hàng người Việt dùng chung một máy, mỗi người một ngôn ngữ.</p>
<p><strong>Bảng hướng dẫn dán tường.</strong> Trong <strong>Quản lý → Nhân viên</strong> có nút <strong>Hướng dẫn nhanh cho nhân viên (CZ / VI)</strong>. Nút này in ra tờ A4 tóm tắt những thao tác hay dùng nhất, bằng cả tiếng Séc và tiếng Việt.</p>
<aside class="note"><p>Nút bấm, menu và thông báo từ máy chủ đều đã được dịch sang tiếng Việt. Nếu vẫn gặp chữ tiếng Séc, hãy gọi cho chúng tôi để bổ sung bản dịch.</p></aside>`,
      },
      {
        id: "kategorie",
        h2: "Nhóm hàng",
        html: `
<p>Khi thiết lập máy, hãy chọn ngành <strong>Tạp hóa, siêu thị mini</strong> (tiếng Séc là Večerka, minimarket, potraviny) hoặc <strong>Thực phẩm châu Á</strong> (tiếng Séc là Asijské potraviny).</p>
<ul>
<li><strong>Tạp hóa</strong> có sẵn các nhóm như thuốc lá, rượu bia, đồ uống, bánh mì, rau quả, tiền cược vỏ và túi.</li>
<li><strong>Thực phẩm châu Á</strong> có thêm cả hàng mẫu, ví dụ rau mùi hoặc đậu phụ.</li>
</ul>
<p>Bạn cũng có thể tự mô tả mặt hàng bằng tiếng Việt, ví dụ “thực phẩm châu Á, rượu sake, gạo, rau thơm”. Máy sẽ gợi ý nhóm hàng kèm thuế suất DPH (thuế giá trị gia tăng), miễn phí và không cần internet. Trước khi tạo máy, bạn sửa được gợi ý này. Thuế suất thì hãy kiểm tra lại với kế toán.</p>
<p>Tên các nhóm hàng do máy tự tạo đã được dịch sẵn. Với nhóm bạn tự tạo, hãy thêm bản dịch:</p>
<ol class="steps">
<li>Mở <strong>Quản lý → Nhóm hàng</strong> và chạm vào nhóm đó.</li>
<li>Điền ô <strong>Tên tiếng Việt (cho nhân viên)</strong>.</li>
<li>Lưu lại.</li>
</ol>
<p>Với thuốc lá điếu, trong thẻ hàng hãy đánh dấu <strong>Giá cố định – không giảm (thuốc lá)</strong>. Tiền cược chai đã có sẵn ở mã PLU 0 và 3, két ở mã PLU 8 và 9.</p>`,
      },
      {
        id: "cestina-uctenka",
        h2: "Tiếng Séc trên hóa đơn",
        html: `
<p>Tên hàng trên hóa đơn in đúng như trong thẻ hàng. Máy không dịch tên hàng. Vì vậy hãy ghi tên bằng tiếng Séc.</p>
<ul>
<li>Thay vì “Bún gạo”, hãy ghi “Rýžové nudle 200 g”.</li>
<li>Ghi cả quy cách vào tên. Máy dựa vào đó để tính đơn giá.</li>
</ul>
<p>Để nhân viên nhận ra hàng dù không biết tiếng Séc, hãy thêm ảnh cho hàng. Trong thẻ hàng, chạm vào <strong>Tải ảnh lên</strong> hoặc <strong>Tìm trên internet</strong>. Ảnh cho hàng có mã vạch được máy tự tìm. Nút <strong>Ảnh theo EAN</strong> trong <strong>Quản lý → Kho hàng → Hàng hóa</strong> cho biết đã tìm đến đâu (có thể tắt trong <strong>Quản lý → Hệ thống</strong>). Khi đó nhìn ô hàng có hình sẽ tìm nhanh hơn đọc chữ.</p>
<p>Khi bạn quét một mã chưa có trong máy, máy sẽ thử tìm tên tiếng Séc trong cơ sở dữ liệu dùng chung của SuperKasa và trong Open Food Facts. Bạn chỉ cần kiểm tra tên và điền giá. Nếu không được, hãy kiểm tra tùy chọn <strong>Tìm tên theo mã vạch trên internet</strong> trong <strong>Quản lý → Hệ thống → In hóa đơn</strong>.</p>
<p>Các dòng chữ cố định trên hóa đơn, ví dụ CELKEM (tổng) hoặc Hotově (tiền mặt), luôn bằng tiếng Séc. Dòng chữ riêng thì bạn sửa trong <strong>Quản lý → Công ty</strong>, ở ô <strong>Dòng cuối hóa đơn</strong>. Hãy viết bằng tiếng Séc. Trên hóa đơn phải có những gì, bạn xem trong hướng dẫn <a href="co-musi-byt-na-uctence.html">Trên hóa đơn phải ghi những gì</a>.</p>`,
      },
      {
        id: "den-ve-vecerce",
        h2: "Một ngày bình thường ở tiệm tạp hóa",
        html: `
<p>Đây là những việc nhân viên gặp mỗi ngày.</p>
<div class="tbl"><table>
<thead><tr><th>Tình huống</th><th>Cần làm gì</th></tr></thead>
<tbody>
<tr><td>Khách trả vỏ chai</td><td>Nhập PLU 3 và Enter. Máy thêm tiền cược −3 Kč. Đơn hàng âm thì trả tiền cho khách từ quầy.</td></tr>
<tr><td>Bia có chai tính cược</td><td>Trong thẻ hàng, cài <strong>Bán kèm</strong>. Khi đó tiền cược sẽ tự thêm vào.</td></tr>
<tr><td>Bánh mì que bán theo cái</td><td>Nhập số lượng, chạm vào <strong>×</strong> rồi chạm vào ô hàng.</td></tr>
<tr><td>Trái cây bán theo cân</td><td>Chạm vào ô hàng. Máy sẽ hỏi khối lượng theo kg.</td></tr>
<tr><td>Tem từ cân</td><td>Quét tem. Máy đọc mã PLU và khối lượng hoặc giá từ mã EAN-13.</td></tr>
<tr><td>Thuốc lá đổi giá mới</td><td>Chạm vào món trong đơn hàng và đổi giá. Giá này chỉ áp dụng cho lần bán đó, muốn đổi hẳn thì sửa trong thẻ hàng. Hàng giá cố định thì không giảm giá được.</td></tr>
<tr><td>Khách hỏi giá</td><td>Nhấn F2 và quét hàng. Không có gì được bán. Nhấn F2 lần nữa để tắt kiểm tra giá.</td></tr>
</tbody>
</table></div>
<h3>Hướng dẫn nhân viên mới</h3>
<ol class="steps">
<li>Tạo tài khoản cho nhân viên trong <strong>Quản lý → Nhân viên</strong> và đặt ngôn ngữ Tiếng Việt.</li>
<li>In <strong>Hướng dẫn nhanh cho nhân viên (CZ / VI)</strong>.</li>
<li>Cho nhân viên làm vài đơn hàng cùng bạn. Đơn chưa thanh toán thì bỏ bằng nút <strong>Hủy đơn</strong> phía trên đơn hàng.</li>
<li>Dặn nhân viên rằng hủy hóa đơn và trả hàng phải do quản lý hoặc chủ xác nhận bằng mã PIN của họ.</li>
</ol>
<aside class="note"><p>Chế độ thử, trong đó hóa đơn không có giá trị, chỉ bật được khi máy chưa xuất hóa đơn thật nào. Nút <strong>Quay lại chế độ thử</strong> nằm trong <strong>Quản lý → Hệ thống</strong>, ở phần <strong>Vận hành thật</strong>.</p></aside>`,
      },
      {
        id: "cenovky",
        h2: "Nhãn giá",
        html: `
<p>Bạn in nhãn giá trên máy in hóa đơn, máy in tem nhãn hoặc giấy A4. Nhãn luôn bằng tiếng Séc, kể cả khi nhân viên dùng máy bằng tiếng Việt.</p>
<ol class="steps">
<li>Mở <strong>Quản lý → In nhãn giá</strong>.</li>
<li>Chọn hàng và kích thước.</li>
<li>Giữ tùy chọn <strong>Giá theo kg / l (luật yêu cầu)</strong> ở trạng thái bật.</li>
<li>Chạm vào <strong>In nhãn giá</strong>.</li>
</ol>
<p>Trên nhãn giá in nhiệt có tên hàng, giá, đơn giá và mã vạch. Ngày in không có trên nhãn. Ngày chỉ hiện với hàng khuyến mãi, khi bạn điền ô <strong>Khuyến mãi đến</strong>. Chi tiết về máy in có trong hướng dẫn <a href="tiskarna-ctecka-zasuvka.html">Máy in hóa đơn, máy quét mã và ngăn kéo đựng tiền</a>.</p>`,
      },
      {
        id: "eet",
        h2: "Hỗ trợ về EET 2.0",
        html: `
<p>Việc ghi nhận doanh thu EET 2.0 bắt đầu từ ngày 1 tháng 1 năm 2027. Trong <strong>Quản lý → EET 2.0</strong> có quy trình bảy bước, bằng cả tiếng Việt và tiếng Séc. Việc đăng nhập vào DIS+ (hộp thư thuế điện tử) thì kế toán có thể giúp bạn, hoặc hãy gọi cho chúng tôi.</p>
<ol class="steps">
<li>Trong DIS+, đăng ký ghi nhận doanh thu và tạo cửa hàng của bạn là đơn vị ghi nhận (evidenční jednotka).</li>
<li>Tạo chứng chỉ máy tính tiền (pokladní certifikát) và tải tệp .p12. Lưu lại mật khẩu.</li>
<li>Trong <strong>Quản lý → EET 2.0</strong>, tải tệp và mật khẩu lên rồi chạm vào <strong>Kiểm tra kết nối</strong>.</li>
<li>Trong năm 2026, bạn có thể chọn chế độ <strong>Chạy thử</strong>. Hãy bật EET thật vào ngày 1 tháng 1 năm 2027, chậm nhất là lúc có khoản doanh thu đầu tiên của năm 2027.</li>
</ol>
<p>EET thật cần trả tiền thuê. Cách làm chi tiết có trong hướng dẫn <a href="eet-2-0-krok-za-krokem.html">EET 2.0 từng bước</a>.</p>
<p>Chúng tôi hỗ trợ qua điện thoại, cả bằng tiếng Việt: <a href="tel:+420608886882">+420 608 886 882</a>. Chúng tôi sẽ cùng bạn thiết lập máy.</p>`,
      },
    ],
    faq: [
      ["Tôi dùng máy tính tiền bằng tiếng Việt thì hóa đơn có bằng tiếng Việt không?", "Không. Hóa đơn cho khách luôn bằng tiếng Séc. Tiếng Việt chỉ có ở nút bấm, menu và nhóm hàng dành cho nhân viên."],
      ["Mỗi nhân viên có dùng ngôn ngữ khác nhau được không?", "Được. Ngôn ngữ được lưu riêng cho từng nhân viên. Sau khi đăng nhập bằng mã PIN, máy tự chuyển."],
      ["Máy có dịch tên hàng sang tiếng Việt không?", "Không. Máy chỉ dịch tên nhóm hàng, còn tên hàng giữ nguyên như bạn nhập. Vì hóa đơn, hãy ghi tên hàng bằng tiếng Séc."],
      ["Phần Quản lý có tiếng Việt không?", "Có. Trong phần Quản lý cũng có lá cờ, và lựa chọn được lưu vào tài khoản của bạn."],
      ["Các bạn có giúp tôi cài đặt bằng tiếng Việt không?", "Có. Hãy gọi số +420 608 886 882. Chúng tôi sẽ cùng bạn thiết lập máy tính tiền."],
    ],
    sources: [["Finanční správa: Ai phải ghi nhận doanh thu", "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby"]],
    related: ["navod-superkasa", "tiskarna-ctecka-zasuvka", "eet-2-0-krok-za-krokem"],
  },
  {
    slug: "srovnani-pokladnich-systemu",
    group: "pokladna",
    kicker: "Chọn máy tính tiền",
    title: "SuperKasa, Dotykačka, Storyous, helloCash và MOJE eet: so sánh giá và chức năng",
    metaTitle: "So sánh máy tính tiền: giá, chức năng | SuperKasa",
    desc: "Giá và chức năng của SuperKasa, Dotykačka, Storyous, helloCash và ứng dụng nhà nước MOJE eet. Số liệu từ bảng giá công khai, tính đến 12/11/2026.",
    lead: "Chúng tôi so sánh bảng giá công khai của bốn hệ thống máy tính tiền và ứng dụng nhà nước MOJE eet. Mỗi số liệu đều có nguồn và ngày. Giá của đối thủ được ghi cả chưa gồm và đã gồm thuế DPH để dễ so sánh.",
    published: "2026-11-12",
    updated: "2026-11-12",
    minutes: 6,
    sections: [
      {
        id: "prehled",
        h2: "Tổng quan giá và chức năng",
        html: `
<p>Số liệu lấy từ bảng giá công khai, tính đến 12/11/2026. Giá tính theo tháng khi trả từng tháng. Nhà cung cấp có thể đổi giá, hãy kiểm tra lại trước khi đặt.</p>
<div class="tbl"><table>
  <thead><tr><th>Hệ thống</th><th>Gói thấp nhất</th><th>Gói có kho</th><th>Thiết bị thêm</th><th>EET 2.0</th></tr></thead>
  <tbody>
    <tr><td>SuperKasa</td><td>189 Kč đã gồm DPH (156,20 Kč chưa gồm DPH)</td><td>Cùng một gói, kho đã có trong giá</td><td>Tối đa 10 thiết bị trong giá</td><td>Có, trong giá</td></tr>
    <tr><td>Dotykačka</td><td>SNADNO 590 Kč chưa gồm DPH (713,90 Kč đã gồm DPH)</td><td>NAPLNO 1 190 Kč chưa gồm DPH (1 439,90 Kč đã gồm DPH)</td><td>Bảng giá không ghi</td><td>Có, trong mọi giấy phép từ 1/1/2027</td></tr>
    <tr><td>Storyous (bảng giá O2)</td><td>Mini 390 Kč chưa gồm DPH (471,90 Kč đã gồm DPH)</td><td>Kho là phần thêm, 990 Kč chưa gồm DPH (1 197,90 Kč đã gồm DPH)</td><td>740 Kč chưa gồm DPH (895,40 Kč đã gồm DPH)</td><td>Nhà sản xuất cho biết đã sẵn sàng</td></tr>
    <tr><td>helloCash</td><td>Basic 69 Kč chưa gồm DPH (83,49 Kč đã gồm DPH)</td><td>Prémiová 219 Kč chưa gồm DPH (264,99 Kč đã gồm DPH)</td><td>Bảng giá không ghi</td><td>Chúng tôi không tìm thấy thông tin trên trang web</td></tr>
    <tr><td>MOJE eet</td><td>Miễn phí</td><td>Finanční správa không nhắc đến kho</td><td>Nhiều nhất 2 đơn vị ghi nhận</td><td>Có, ứng dụng nhà nước từ 1/12/2026</td></tr>
  </tbody>
</table></div>`,
      },
      {
        id: "dotykacka",
        h2: "Dotykačka",
        html: `
<p>Dotykačka bán giấy phép và thiết bị máy tính tiền riêng. Theo <a href="https://dotykacka.cz/cenik/" rel="noopener">bảng giá trên dotykacka.cz</a>, tính đến 12/11/2026:</p>
<ul>
  <li>Giấy phép SNADNO giá 590 Kč mỗi tháng chưa gồm DPH, NAPLNO 1 190 Kč và NEOMEZENĚ 1 990 Kč. Đây là giá không kèm máy quẹt thẻ, khi trả từng tháng.</li>
  <li>Trả cả năm được giảm 15 %. Nếu dùng máy quẹt thẻ của Dotykačka, giấy phép rẻ hơn tùy theo doanh số thanh toán bằng thẻ.</li>
  <li>Quản lý kho có từ giấy phép NAPLNO. Với SNADNO, bảng giá ghi là không có.</li>
  <li>Chấm công và hệ thống đặt hàng có trong giấy phép NEOMEZENĚ.</li>
  <li>Bảng giá ghi EET 2.0 ở mọi giấy phép từ 1/1/2027.</li>
  <li>Thiết bị máy tính tiền trong bảng giá có giá từ 6 990 Kč đến 22 990 Kč chưa gồm DPH.</li>
</ul>
<p>Phù hợp với cửa hàng muốn có máy tính tiền, thiết bị và máy quẹt thẻ từ cùng một nhà cung cấp, kèm hỗ trợ kỹ thuật suốt ngày đêm.</p>`,
      },
      {
        id: "storyous",
        h2: "Storyous",
        html: `
<p>Storyous là máy tính tiền chủ yếu dành cho nhà hàng, quán ăn. Chúng tôi không tìm thấy bảng giá công khai trên trang web của Storyous, nên dựa vào <a href="https://www.o2.cz/podnikatele-a-firmy/pokladni-reseni" rel="noopener">chào bán của nhà phân phối O2</a>, tính đến 12/11/2026:</p>
<ul>
  <li>Gói Business giá 690 Kč mỗi tháng chưa gồm DPH với thiết bị All-in-One và 890 Kč với máy tính bảng Medium 10".</li>
  <li>Storyous Mini giá 390 Kč mỗi tháng chưa gồm DPH. Theo O2, gói này không có các chức năng dành cho nhà hàng, ví dụ sơ đồ bàn.</li>
  <li>Mỗi thiết bị hoạt động thêm giá 740 Kč chưa gồm DPH.</li>
  <li>O2 còn ghi kèm các gói: quản lý kho 990 Kč, tích hợp (Foodora, Wolt, hệ thống khách sạn) 490 Kč và chương trình khách hàng thân thiết 590 Kč, đều chưa gồm DPH.</li>
  <li>Thiết bị giá 4 990 Kč (All-in-One) hoặc 9 990 Kč (máy tính bảng Medium 10") chưa gồm DPH.</li>
  <li>Về EET 2.0, Storyous viết <a href="https://www.storyous.com/cs/post/eet-2-0-my-jsme-p%C5%99ipraveni" rel="noopener">trên trang web của mình</a> rằng họ đã sẵn sàng và chức năng cùng các bản cập nhật sẽ miễn phí.</li>
</ul>
<p>Phù hợp với nhà hàng và quán cà phê cần kết nối với dịch vụ giao đồ ăn và hệ thống khách sạn.</p>`,
      },
      {
        id: "hellocash",
        h2: "helloCash",
        html: `
<p>helloCash là máy tính tiền trên đám mây, có giá khởi điểm thấp nhất trong các hệ thống trả phí ở bài so sánh này. Theo <a href="https://hellocash.cz/cena" rel="noopener">bảng giá trên hellocash.cz</a>, tính đến 12/11/2026:</p>
<ul>
  <li>Basic giá 69 Kč mỗi tháng chưa gồm DPH, Střední 99 Kč, Prémiová 219 Kč và Gastro 329 Kč.</li>
  <li>Quản lý kho, kiểm kê và kết nối máy quét mã vạch có từ bản Prémiová. Với kho, bảng giá có ghi chú về phí 120,90 Kč cho mỗi mô-đun.</li>
  <li>Sơ đồ bàn và tách hóa đơn có trong bản Gastro.</li>
  <li>Hỗ trợ tính phí riêng: 849 Kč mỗi năm chưa gồm DPH, hoặc 3 500 Kč chưa gồm DPH mỗi giờ.</li>
  <li>Tính đến 12/11/2026, chúng tôi không tìm thấy thông tin về EET 2.0 trên trang web của helloCash. Hãy hỏi nhà cung cấp.</li>
</ul>
<p>Phù hợp với ngành dịch vụ và người bán nhỏ chỉ cần máy tính tiền cơ bản với giá thấp.</p>`,
      },
      {
        id: "moje-eet",
        h2: "MOJE eet",
        html: `
<p>MOJE eet là ứng dụng web miễn phí của Finanční správa (Cục Thuế Séc). Theo <a href="https://eet.gov.cz/cs/o-eet/jaky-je-harmonogram-eet-2-0" rel="noopener">lịch trình</a>, ứng dụng dự kiến chạy từ 1/12/2026. Ứng dụng chủ yếu dành cho người kinh doanh nhỏ có ít khoản thanh toán và nhiều nhất 2 đơn vị ghi nhận. Theo mô tả đã công bố, ứng dụng ghi nhận doanh thu, có danh mục mặt hàng kèm giá và tạo hóa đơn dạng PDF. Mô tả không nhắc đến kho, máy in hóa đơn hay máy quét mã.</p>
<p>Xem chi tiết trong bài <a href="moje-eet-nebo-pokladna.html">MOJE eet hay hệ thống máy tính tiền</a>.</p>`,
      },
      {
        id: "superkasa",
        h2: "SuperKasa",
        html: `
<ul>
  <li>Giá 189 Kč mỗi tháng hoặc 2 041 Kč mỗi năm, đã gồm thuế DPH, như nhau cho mọi ngành hàng. 10 ngày đầu miễn phí.</li>
  <li>Mọi gói đều có kho, nhãn giá, EET 2.0 và tối đa 10 thiết bị.</li>
  <li>Chạy trên trình duyệt ở máy tính, máy tính bảng hoặc điện thoại của bạn.</li>
  <li>Giao diện có tiếng Séc, tiếng Việt và tiếng Anh.</li>
  <li>Mất internet bạn vẫn bán tiếp được.</li>
</ul>
<p><strong>Những gì SuperKasa không có:</strong></p>
<ul>
  <li>Máy quẹt thẻ riêng. Khách trả thẻ qua máy quẹt thẻ của bạn từ ngân hàng và bạn tự nhập số tiền trên máy đó.</li>
  <li>Kết nối với dịch vụ giao đồ ăn như Wolt hay Foodora.</li>
  <li>Thiết bị máy tính tiền riêng và dịch vụ sửa chữa thiết bị.</li>
</ul>
<p>Phù hợp với cửa hàng, quán ăn và dịch vụ muốn có máy tính tiền kèm kho với giá thấp, chạy trên thiết bị sẵn có. <a href="cenik.html">Bảng giá SuperKasa</a></p>`,
      },
      {
        id: "jak-cist",
        h2: "Cách đọc bài so sánh",
        html: `
<ul>
  <li>Đối thủ ghi giá chưa gồm thuế DPH trong bảng giá. Phần quy đổi đã gồm DPH 21 % là do chúng tôi tự tính.</li>
  <li>Chúng tôi chỉ so sánh những gì nhà sản xuất công bố công khai. Chỗ nào thiếu thông tin, chúng tôi ghi rõ.</li>
  <li>Chúng tôi không so sánh chất lượng hỗ trợ, tốc độ hay sự tiện lợi khi dùng. Bạn hãy tự thử bằng bản dùng thử.</li>
  <li>Giá và chức năng có thể thay đổi. Chào bán hiện tại của nhà cung cấp mới là căn cứ.</li>
</ul>
<p>Cách chọn nói chung có trong bài <a href="jak-vybrat-pokladnu.html">Cách chọn hệ thống máy tính tiền</a>.</p>`,
      },
    ],
    faq: [
      ["Máy tính tiền nào rẻ nhất?","Ứng dụng nhà nước MOJE eet là miễn phí. Trong các hệ thống trả phí, theo bảng giá tính đến 12/11/2026, helloCash Basic có giá khởi điểm thấp nhất: 69 Kč mỗi tháng chưa gồm DPH. Nếu cần kho thì SuperKasa rẻ nhất: 189 Kč mỗi tháng đã gồm DPH."],
      ["Vì sao giá của đối thủ ghi cả chưa gồm và đã gồm DPH?","Các nhà sản xuất ghi giá chưa gồm DPH, còn SuperKasa ghi giá đã gồm DPH. Để so sánh được, chúng tôi ghi cả hai số cho đối thủ."],
      ["Số liệu trong bài so sánh có từ khi nào?","Từ bảng giá công khai, tính đến 12/11/2026. Nguồn được ghi ở cuối bài. Trước khi đặt, hãy kiểm tra giá với nhà cung cấp."],
    ],
    sources: [["Dotykačka: bảng giá","https://dotykacka.cz/cenik/"],["O2: giải pháp máy tính tiền Storyous","https://www.o2.cz/podnikatele-a-firmy/pokladni-reseni"],["Storyous: EET 2.0? My jsme připraveni","https://www.storyous.com/cs/post/eet-2-0-my-jsme-p%C5%99ipraveni"],["helloCash: giá và phí","https://hellocash.cz/cena"],["Finanční správa: lịch trình EET 2.0","https://eet.gov.cz/cs/o-eet/jaky-je-harmonogram-eet-2-0"]],
    related: ["jak-vybrat-pokladnu", "moje-eet-nebo-pokladna", "navod-superkasa"],
  },
  ],
};
