// Texty oborů – vietnamština. Stavba musí odpovídat csOverlay() v obory.mjs.

// Opakované texty (Na místě / S sebou a spropitné, sazby DPH u nápojů, společné body).
const NA_MISTE = [
  "Ăn tại chỗ / Mang đi và tiền boa",
  "Chỉ một nút gạt là bạn bán ăn tại chỗ hoặc mang đi – hóa đơn tự dùng đúng mức thuế DPH, giá bán không đổi. Tiền boa được ghi riêng, không tính vào doanh thu và EET, và máy theo dõi giới hạn 7 % để được miễn thuế (từ 1/1/2027). Cả hai đều đã có trong giá gói.",
];
const NAPOJE_DPH =
  "Nước giải khát và cà phê phục vụ tại quán cà phê, quán bia hay nhà hàng chịu thuế DPH 21 % đến hết năm 2026, từ 1/1/2027 là 12 %. Mang đi vẫn là 21 % – trên máy bạn gạt Ăn tại chỗ / Mang đi và hóa đơn tự dùng đúng mức thuế. Khi cài đặt, máy dùng mức thuế có hiệu lực vào ngày đó – hãy kiểm tra lại với kế toán.";
const TIENG_VIET = [
  "Nhân viên dùng tiếng Việt",
  "Mỗi nhân viên dùng ngôn ngữ của mình – tiếng Séc, tiếng Việt hoặc tiếng Anh. Hóa đơn cho khách luôn bằng tiếng Séc.",
];
const EAN_TEN_ANH = [
  "Tên và ảnh theo mã EAN",
  "Khi quét một mã lạ, máy gợi ý tên và ảnh – từ internet (cơ sở dữ liệu dùng chung của SuperKasa sắp ra mắt).",
];
const QR_THE = [
  "Thanh toán QR và thẻ",
  "Khách trả tiền mặt, quét mã QR trên màn hình hoặc hóa đơn, hoặc quẹt thẻ qua máy POS thẻ của bạn.",
];
const KHACH_THAY = "Khách thấy mình đang trả tiền cho những gì và có thể thanh toán bằng mã QR trên màn hình thứ hai.";

export default {
  groups: {
    tabak: "Thuốc lá",
    ecig: "Thuốc lá điện tử",
    alkohol: "Rượu bia",
    napoje: "Nước giải khát",
    pecivo: "Bánh mì",
    mlecne: "Sữa và chế phẩm",
    maso: "Thịt và xúc xích",
    ovoce: "Rau quả",
    mrazene: "Đồ đông lạnh",
    sladkosti: "Bánh kẹo, snack",
    potraviny: "Thực phẩm",
    drogerie: "Hóa mỹ phẩm",
    krmivo: "Thức ăn thú cưng",
    tisk: "Báo, tạp chí",
    domaci: "Đồ gia dụng",
    hracky: "Đồ chơi",
    tasky: "Túi",
    zalohy: "Tiền cược vỏ chai",
    kava: "Cà phê, trà",
    jidlo: "Đồ ăn",
    kadernictvi: "Cắt tóc",
    nehty: "Làm móng",
    kosmetika: "Thẩm mỹ",
    opravy: "Sửa chữa",
    sluzby: "Dịch vụ",
    pivo: "Bia",
    nealko: "Đồ uống không cồn",
    kvetiny: "Hoa tươi",
    rostliny: "Cây cảnh",
    darky: "Quà tặng, trang trí",
    papirnictvi: "Văn phòng phẩm",
    knihy: "Sách",
    obleceni: "Quần áo",
    obuv: "Giày dép",
    doplnky: "Phụ kiện thời trang",
    mobily: "Điện thoại, máy tính bảng",
    prislusenstvi: "Phụ kiện điện thoại",
    elektro: "Đồ điện",
    vitaminy: "Thực phẩm chức năng",
    zdrava: "Thực phẩm lành mạnh",
    vino: "Rượu vang",
    lihoviny: "Rượu mạnh",
    chovatel: "Đồ dùng thú cưng",
    asie: "Thực phẩm châu Á",
    zakusky: "Bánh ngọt",
    zmrzlina: "Kem",
    autoservis: "Sửa xe ô tô",
    autodily: "Phụ tùng, vật liệu",
    pneu: "Lốp xe",
    fitness: "Vé vào, thẻ tháng",
    lekce: "Huấn luyện, lớp học",
    masaze: "Mát-xa",
  },
  features: {
    stock: ["Kho", "Nhập hàng, kiểm kê, số tồn hiện ngay trên ô hàng, hàng sắp hết và gợi ý đặt hàng."],
    expiry: ["Hạn dùng", "Hạn dùng trong thẻ hàng và khi nhập hàng, cảnh báo hàng đã hết hạn."],
    labels: ["Nhãn giá", "In nhãn giá trên máy in hóa đơn, máy in tem nhãn hoặc giấy A4."],
    deposits: ["Tiền cược vỏ chai", "Chai và két trả lại được, tiền cược có thể tự cộng vào khi bán bia."],
    scale: ["Cân và mã cân", "Mã vạch trên tem của cân – có trọng lượng hoặc giá."],
    promo: ["Khuyến mãi và giá theo số lượng", "Khuyến mãi đến một ngày nhất định, giá rẻ hơn khi mua từ một số lượng nhất định."],
    display: ["Màn hình khách hàng", "Màn hình thứ hai cho khách xem hàng đã mua và mã thanh toán QR."],
    qr: ["Thanh toán QR", "Khách chuyển khoản bằng mã QR trên màn hình và trên hóa đơn."],
    tables: [
      "Bàn và hóa đơn theo bàn",
      "Hóa đơn theo bàn cho quán bia và nhà hàng: gọi thêm món, tách, chuyển hóa đơn, phiếu cho bếp và quầy bia.",
    ],
    tips: [
      "Tiền boa",
      "Tiền boa ngoài doanh thu và EET: cho ai, bao nhiêu, tiền mặt hay thẻ; tổng kết theo tháng và theo dõi giới hạn 7 % để được miễn thuế.",
    ],
  },
  tariffs: {
    potraviny: "Thực phẩm",
    obchod: "Cửa hàng",
    gastro: "Ăn uống (Gastro)",
    nehty: "Tiệm nail",
    sluzby: "Dịch vụ",
  },
  addons: {
    attendance: [
      "Chấm công và ca làm",
      "Nhân viên chấm công lúc đến và lúc về bằng mã PIN trên máy. Lịch ca làm theo tuần, so sánh kế hoạch với giờ làm thực tế và số liệu để tính lương.",
    ],
    loyalty: [
      "Khách hàng thân thiết và phiếu quà tặng",
      "Thẻ khách hàng hoặc số điện thoại: tích điểm, đổi điểm lấy giảm giá, giảm giá cố định cho khách VIP. Phiếu quà tặng có mã vạch và số dư; gửi EET 2.0 theo § 17 khoản 2 Luật số 180/2026 Sb. – hãy kiểm tra với kế toán.",
    ],
    reservations: [
      "Đặt lịch và lịch hẹn",
      "Lịch hẹn cho tiệm và dịch vụ (ai, khi nào, bao lâu, dịch vụ gì), cả đặt bàn. Máy báo khi lịch bị trùng, dịch vụ từ lịch hẹn bán chỉ bằng một chạm.",
    ],
    recipes: [
      "Công thức và định mức",
      "Nguyên liệu của cà phê, món ăn, cocktail và bánh ngọt: khi bán, máy tự trừ nguyên liệu trong kho, hủy hóa đơn thì cộng lại. Giá vốn, lợi nhuận và còn làm được bao nhiêu phần.",
    ],
    control: [
      "Kiểm soát nhân viên",
      "Hủy hóa đơn, trả hàng, đơn bị bỏ, món bị xóa, giảm giá, mở ngăn kéo và chênh lệch khi chốt ca theo từng nhân viên – máy chỉ ra ai cao hơn hẳn mức trung bình.",
    ],
  },
  kinds: {
    shop: "Cửa hàng",
    food: "Ăn uống",
    service: "Dịch vụ",
  },
  serviceHighlights: [
    [
      "Bảng giá dịch vụ trên ô hàng",
      "Dịch vụ nằm trên các ô lớn – đổi giá và tên ngay trên màn hình bán hàng. Bán một dịch vụ chỉ bằng một chạm.",
    ],
    QR_THE,
    [
      "Bán mỹ phẩm và vật liệu",
      "Ngoài dịch vụ, bạn còn bán được cả hàng hóa. Trong gói có thể bật kho và khuyến mãi.",
    ],
    [
      "Nhân viên dùng tiếng Việt",
      "Tiếng Séc, tiếng Việt và tiếng Anh – mỗi người dùng ngôn ngữ của mình. Hóa đơn cho khách luôn bằng tiếng Séc.",
    ],
  ],
  serviceNotes: [
    "Lịch hẹn của khách không có trong gói – bạn dùng tiện ích trả thêm <a href=\"cenik.html#doplnky\">Đặt lịch và lịch hẹn</a>.",
  ],
  obory: {
    vecerka: {
      card: "Tạp hóa, siêu thị mini",
      cardDesc: "Thực phẩm, đồ uống, thuốc lá, bánh mì",
      title: "Máy tính tiền cho tiệm tạp hóa, siêu thị mini và cửa hàng thực phẩm",
      desc: "Thực phẩm, đồ uống, thuốc lá, rượu bia, bánh mì, rau quả – có tiền cược vỏ chai, cân, kho và nhãn giá.",
      preset: "Tạp hóa, siêu thị mini",
      items: "Tiền cược chai và két (PLU 0, 3, 8, 9), túi, bánh mì và rau quả có hình ảnh – tổng cộng 36 mặt hàng.",
      highlights: [
        [
          "Tiền cược vỏ chai không cần nhớ",
          "Tiền cược có thể gắn với bia – khi đó nó tự cộng vào, bỏ bia ra thì tự mất đi. Thu lại chai và két chỉ trên một ô hàng.",
        ],
        [
          "Rau quả và hàng cân",
          "Với hàng bán theo kg, máy hỏi trọng lượng và đọc được cả mã vạch trên tem của cân.",
        ],
        [
          "Thuốc lá theo giá trên tem",
          "Thuốc lá có giá cố định theo tem thuế thuốc lá, nên không thể lỡ tay giảm giá.",
        ],
        [
          "Hạn dùng và hàng sắp hết",
          "Nhập hạn dùng khi nhập hàng, xem danh sách hàng sắp hết hạn và gợi ý đặt hàng theo lượng bán.",
        ],
        [
          "Nhãn giá trên máy in hóa đơn",
          "Nhãn giá có giá theo kg hoặc lít, giá khuyến mãi và mã vạch. Bạn chỉ chọn những hàng vừa đổi giá.",
        ],
        TIENG_VIET,
      ],
      addons: [
        "nhân viên chấm công lúc đến, lúc về bằng mã PIN, số giờ trong tháng làm căn cứ tính lương.",
        "hủy hóa đơn, trả hàng, giảm giá và mở ngăn kéo theo từng nhân viên, khi nhiều người thay ca nhau.",
      ],
    },
    asie: {
      card: "Thực phẩm châu Á",
      cardDesc: "Gạo, mì, rau thơm, đồ đông lạnh",
      title: "Máy tính tiền cho cửa hàng thực phẩm châu Á",
      desc: "Gạo, mì, nước chấm, gia vị, rau thơm tươi, đồ đông lạnh, đồ uống và rượu bia – có cân, tiền cược vỏ chai, kho, nhãn giá và tiếng Việt cho nhân viên.",
      preset: "Thực phẩm châu Á",
      items: "Rau thơm tươi theo bó (ngò, húng quế Thái, bạc hà), sả, ớt, cải chíp và giá đỗ, đậu phụ tươi và bún – kèm túi và tiền cược chai, két.",
      highlights: [
        [
          "Nhân viên dùng tiếng Việt",
          "Mỗi nhân viên dùng ngôn ngữ của mình – tiếng Việt, tiếng Séc hoặc tiếng Anh, đổi chỉ bằng một nút. Hóa đơn cho khách luôn bằng tiếng Séc.",
        ],
        [
          "Rau thơm theo bó, rau theo kg",
          "Rau thơm tính giá theo bó, còn cải chíp, ớt hay giá đỗ thì cân. Máy đọc được cả mã vạch trên tem của cân.",
        ],
        [
          "Tên hàng theo mã vạch",
          "Gặp mã lạ, máy thử tìm tên trên internet. Cơ sở dữ liệu dùng chung của các máy SuperKasa, biết cả hàng nhập khẩu, sắp ra mắt.",
        ],
        [
          "Hạn dùng của hàng tươi",
          "Nhập hạn dùng của đậu phụ, bún và đồ đông lạnh khi nhập hàng, và xem danh sách hàng sắp hết hạn.",
        ],
        [
          "Tiền cược chai và két",
          "Tiền cược đã được bật. Có thể gắn tiền cược với bia để nó tự cộng vào, thu lại vỏ chai chỉ trên một ô hàng.",
        ],
        [
          "Nhãn giá trên máy in hóa đơn",
          "Nhãn giá có giá theo kg hoặc lít, giá khuyến mãi và mã vạch.",
        ],
      ],
    },
    trafika: {
      card: "Quầy báo, thuốc lá",
      cardDesc: "Thuốc lá, thuốc lá điện tử, báo chí",
      title: "Máy tính tiền cho quầy báo và thuốc lá",
      desc: "Thuốc lá, thuốc lá điện tử, báo và tạp chí, đồ uống và bánh kẹo – giá thuốc lá cố định, có kho và nhãn giá.",
      preset: "Quầy báo, thuốc lá",
      items: "Túi. Hàng hóa bạn quét bằng máy đọc mã – máy thử tìm tên hàng trên internet (cơ sở dữ liệu dùng chung của SuperKasa sắp ra mắt), hoặc bạn lấy từ file CSV.",
      highlights: [
        [
          "Giá thuốc lá cố định",
          "Thuốc lá được bán theo giá in trên tem thuế và không thể giảm giá.",
        ],
        [
          "Tên hàng theo mã vạch",
          "Gặp mã lạ, máy thử tìm tên trên internet. Cơ sở dữ liệu dùng chung của các máy SuperKasa, biết cả các loại thuốc lá, sắp ra mắt.",
        ],
        [
          "Kho và hàng sắp hết",
          "Nhập hàng bằng cách quét mã, kiểm kê kệ và gợi ý đặt hàng theo lượng bán.",
        ],
        [
          "Khuyến mãi và giá theo số lượng",
          "Khuyến mãi đến ngày bạn chọn và giá rẻ hơn khi mua từ một số lượng nhất định.",
        ],
      ],
    },
    pekarna: {
      card: "Tiệm bánh mì",
      cardDesc: "Bánh mì ổ, bánh mì nhỏ, bánh nướng",
      title: "Máy tính tiền cho tiệm bánh mì",
      desc: "Bánh mì ổ, bánh mì nhỏ, bánh nướng, bánh ngọt mang đi và đồ uống – ô hàng bấm nhanh, hạn dùng, xuất hủy bánh không bán hết và nhãn giá.",
      preset: "Tiệm bánh mì",
      items: "Bánh mì tròn, bánh mì sừng, bánh mì ổ, bánh baguette, bánh donut và bánh cuộn bơ, bánh nhân phô mai tươi và nhân hạt anh túc, bánh gấp, bánh su kem và túi – có hình ảnh và số PLU.",
      highlights: [
        [
          "Ô hàng bánh mì bấm nhanh",
          "Loại bánh bán chạy nhất nằm trên các ô lớn có hình ảnh. Nhiều cái thì nhập bằng bàn phím số với phép nhân.",
        ],
        [
          "Xuất hủy bánh không bán hết",
          "Hàng không bán được, hết hạn hoặc bị hỏng bạn xuất hủy khỏi kho mà không cần hóa đơn.",
        ],
        [
          "Hạn dùng",
          "Nhập hạn dùng khi nhập hàng và xem danh sách hàng sắp hết hạn.",
        ],
        [
          "Nhãn giá",
          "Nhãn giá có giá theo kg, giá khuyến mãi và mã vạch, in trên máy in hóa đơn hoặc giấy A4.",
        ],
      ],
      notes: [
        "Bạn chủ yếu bán bánh ngọt, bánh kem và kem? Hãy xem thiết lập <a href=\"pokladna-cukrarna-zmrzlina.html\">Tiệm bánh ngọt, kem</a>.",
      ],
    },
    zelenina: {
      card: "Rau quả",
      cardDesc: "Hàng bán theo kg, cân",
      title: "Máy tính tiền cho cửa hàng rau quả",
      desc: "Hàng cân theo kg, mã vạch trên tem của cân, hình ảnh rau quả và nhãn giá có giá theo kg.",
      preset: "Rau quả",
      items: "23 loại rau quả có hình ảnh (khoai tây, hành tây, cà chua, chuối, táo…) và túi.",
      highlights: [
        [
          "Bán theo kg",
          "Với hàng bán theo kg, máy hỏi trọng lượng và tự tính tiền.",
        ],
        [
          "Tem từ cân",
          "Máy đọc được mã vạch trên tem của cân (có trọng lượng hoặc giá). Định dạng mã bạn cài và thử trong phần Quản lý.",
        ],
        [
          "Nhãn giá có giá theo kg",
          "Nhãn giá có giá theo kg và giá khuyến mãi, in trên máy in hóa đơn hoặc giấy A4.",
        ],
        [
          "Hình ảnh trên ô hàng",
          "Rau quả có hình vẽ minh họa, nên nhân viên tìm được ngay cả khi không đọc chữ.",
        ],
      ],
    },
    reznictvi: {
      card: "Cửa hàng thịt",
      cardDesc: "Thịt theo kg, cân, hạn dùng",
      title: "Máy tính tiền cho cửa hàng thịt và xúc xích",
      desc: "Thịt và xúc xích theo kg, mã cân trên tem của cân, hạn dùng và nhãn giá có giá theo kg.",
      preset: "Cửa hàng thịt",
      items: "Đùi heo và nạc vai heo, ức gà, thịt bò đùi sau, thịt xay, xúc xích, giăm bông và xúc xích nướng theo kg – và túi.",
      highlights: [
        [
          "Thịt theo kg",
          "Máy hỏi trọng lượng, hoặc đọc mã vạch trên tem của cân có trọng lượng hay giá.",
        ],
        [
          "Hạn dùng",
          "Nhập hạn dùng khi nhập hàng, xem danh sách hàng sắp hết hạn và nhãn báo ngay trên ô hàng.",
        ],
        [
          "Nhãn giá có giá theo kg",
          "Nhãn giá có giá theo kg, giá khuyến mãi và mã vạch.",
        ],
        [
          "Khuyến mãi",
          "Giá khuyến mãi đến ngày bạn chọn – máy tự áp dụng.",
        ],
      ],
    },
    drogerie: {
      card: "Hóa mỹ phẩm, đồ gia dụng",
      cardDesc: "Mỹ phẩm, đồ gia dụng, thức ăn thú cưng",
      title: "Máy tính tiền cho cửa hàng hóa mỹ phẩm và đồ gia dụng",
      desc: "Hóa mỹ phẩm, mỹ phẩm, đồ gia dụng và thức ăn thú cưng – tự tìm tên và ảnh hàng theo mã EAN, có kho và nhãn giá.",
      preset: "Hóa mỹ phẩm, đồ gia dụng",
      items: "Túi. Hàng hóa bạn quét bằng máy đọc mã – máy gợi ý tên và ảnh theo mã vạch, hoặc bạn lấy từ file CSV.",
      highlights: [
        EAN_TEN_ANH,
        [
          "Giá cho 100 ml và 100 g",
          "Dung tích hoặc trọng lượng gói được lấy từ tên hàng, và trên nhãn giá có giá theo đơn vị đúng như luật giá của Séc yêu cầu.",
        ],
        [
          "Kho",
          "Nhập hàng bằng cách quét mã kèm giá nhập, kiểm kê kệ và gợi ý đặt hàng theo lượng bán.",
        ],
        [
          "Khuyến mãi và giá theo số lượng",
          "Khuyến mãi đến một ngày nhất định và giá rẻ hơn khi mua từ một số lượng nhất định, nhãn giá có giá cũ bị gạch.",
        ],
      ],
    },
    kvetinarstvi: {
      card: "Cửa hàng hoa",
      cardDesc: "Hoa, bó hoa, cây cảnh, quà tặng",
      title: "Máy tính tiền cho cửa hàng hoa",
      desc: "Hoa tươi bán theo cành, bó hoa và công bó hoa, cây chậu, quà tặng và thiệp – mỗi nhóm có mức thuế DPH riêng, có kho và nhãn giá.",
      preset: "Cửa hàng hoa",
      items: "Hoa hồng, tulip, đồng tiền và cúc bán theo cành, bó hoa nhỏ và lớn, công bó và gói hoa, hoa lan, sen đá, rau thơm trồng chậu, thiệp, túi quà và nến.",
      highlights: [
        [
          "Hoa 21 %, cây 12 %",
          "Từ năm 2024, hoa cắt cành chịu thuế DPH 21 %, còn cây chậu và cây giống vẫn 12 %. Vì vậy máy tạo thành hai nhóm riêng – hãy kiểm tra mức thuế với kế toán.",
        ],
        [
          "Bó hoa chỉ vài chạm",
          "Hoa theo cành, bó hoa và công bó đều nằm trên ô hàng. Bảy bông hồng nhập bằng bàn phím số với phép nhân, giá sửa ngay trên màn hình bán hàng.",
        ],
        [
          "Kho",
          "Nhập hàng, kiểm kê và xem hàng sắp hết – cho hoa, cây cảnh và quà tặng.",
        ],
        [
          "Nhãn giá",
          "Nhãn giá trên máy in hóa đơn, máy in tem nhãn hoặc giấy A4, có cả giá khuyến mãi.",
        ],
      ],
    },
    papirnictvi: {
      card: "Văn phòng phẩm, sách",
      cardDesc: "Vở, sách, photocopy",
      title: "Máy tính tiền cho cửa hàng văn phòng phẩm và nhà sách",
      desc: "Vở, bút và đồ văn phòng, sách với thuế DPH 0 %, báo, thiệp, đồ chơi và photocopy – có kho, tên hàng theo mã vạch và nhãn giá.",
      preset: "Văn phòng phẩm, sách",
      items: "Vở A4 và A5, bút bi, bút chì, photocopy A4 đen trắng và màu, ép plastic, thiệp, giấy gói quà và túi.",
      highlights: [
        [
          "Sách với thuế DPH 0 %",
          "Từ năm 2024 sách không chịu thuế. Vì vậy nhóm Sách có 0 %, văn phòng phẩm 21 %, báo và tạp chí 12 % – hãy kiểm tra mức thuế với kế toán.",
        ],
        [
          "Photocopy trên ô hàng",
          "Photocopy và ép plastic chỉ cần một chạm, hai mươi bản thì nhập bằng bàn phím số với phép nhân.",
        ],
        [
          "Tên sách và hàng theo mã EAN",
          "Khi quét một mã lạ, máy gợi ý tên – từ internet (cơ sở dữ liệu dùng chung của SuperKasa sắp ra mắt).",
        ],
        [
          "Kho cho cả mùa tựu trường",
          "Nhập hàng bằng cách quét mã, kiểm kê kệ và gợi ý đặt hàng theo lượng bán.",
        ],
      ],
    },
    obleceni: {
      card: "Quần áo, giày dép",
      cardDesc: "Thời trang, giày, phụ kiện",
      title: "Máy tính tiền cho cửa hàng quần áo và giày dép",
      desc: "Quần áo, giày dép và phụ kiện thời trang – mỗi cỡ và màu là một thẻ hàng riêng, có kho, khuyến mãi và nhãn giá.",
      preset: "Quần áo, giày dép",
      items: "Áo phông, áo nỉ, quần dài, tất, giày thể thao, dép, mũ, thắt lưng và túi.",
      highlights: [
        [
          "Cỡ và màu",
          "Mỗi cỡ hoặc màu bạn tạo thành một thẻ hàng riêng – có mã vạch, giá và số tồn kho riêng.",
        ],
        [
          "Xả hàng và khuyến mãi",
          "Khuyến mãi đến ngày bạn chọn, nhãn giá có giá cũ bị gạch, giảm giá cho từng món hoặc cả đơn hàng.",
        ],
        [
          "Kho",
          "Nhập hàng bằng cách quét mã, kiểm kê và gợi ý đặt hàng theo lượng bán.",
        ],
        [
          "Hàng từ file CSV",
          "Danh mục hàng bạn lấy từ bảng tính hoặc từ file xuất của máy tính tiền cũ. Nhập lại nhiều lần cũng không bị trùng, chỉ cập nhật giá.",
        ],
      ],
    },
    elektro: {
      card: "Điện thoại, đồ điện",
      cardDesc: "Điện thoại, phụ kiện, sửa chữa",
      title: "Máy tính tiền cho cửa hàng điện thoại và đồ điện",
      desc: "Điện thoại, ốp, kính cường lực, sạc, đồ điện và sửa chữa – hàng hóa và tiền công trên ô hàng, có kho, tên hàng theo mã vạch và nhãn giá.",
      preset: "Điện thoại, đồ điện",
      items: "Kính cường lực, ốp điện thoại, củ sạc và cáp USB-C, tai nghe, dán kính, thay màn hình và pin, kiểm tra lỗi và túi.",
      highlights: [
        [
          "Hàng và dịch vụ trên cùng một hóa đơn",
          "Bán kính rồi dán luôn – phụ kiện và tiền công đều nằm trên ô hàng, khách trả một lần.",
        ],
        EAN_TEN_ANH,
        [
          "Kho phụ kiện",
          "Nhập hàng bằng cách quét mã kèm giá nhập, kiểm kê và cảnh báo tồn kho tối thiểu cho ốp, kính và cáp.",
        ],
        [
          "Nhãn giá",
          "Nhãn giá có giá, giá khuyến mãi và mã vạch, in trên máy in hóa đơn, máy in tem nhãn hoặc giấy A4.",
        ],
      ],
    },
    zdrava: {
      card: "Thực phẩm lành mạnh",
      cardDesc: "Hữu cơ, hàng xá, vitamin",
      title: "Máy tính tiền cho cửa hàng thực phẩm lành mạnh và thực phẩm chức năng",
      desc: "Thực phẩm hữu cơ và không gluten, hàng xá bán theo cân, thực phẩm chức năng và mỹ phẩm thiên nhiên – có cân, hạn dùng, kho và nhãn giá có giá theo kg.",
      preset: "Thực phẩm lành mạnh",
      items: "Hàng xá theo kg – yến mạch cán, hạt chia, chà là, hạt điều, quinoa và gạo lứt – và túi.",
      highlights: [
        [
          "Hàng xá theo cân",
          "Với hàng bán theo kg, máy hỏi trọng lượng và tự tính tiền. Máy đọc được cả mã vạch trên tem của cân.",
        ],
        [
          "Hạn dùng",
          "Nhập hạn dùng khi nhập hàng, xem danh sách hàng sắp hết hạn và xuất hủy hàng đã hết hạn.",
        ],
        [
          "Giá theo kg và 100 g trên nhãn giá",
          "Nhãn giá có giá theo đơn vị, giá khuyến mãi và mã vạch, in trên máy in hóa đơn hoặc giấy A4.",
        ],
        [
          "Mức thuế DPH theo nhóm",
          "Thực phẩm lành mạnh và thực phẩm chức năng được tạo với 12 %, hóa mỹ phẩm và mỹ phẩm thiên nhiên với 21 %. Đây chỉ là gợi ý – hãy kiểm tra với kế toán.",
        ],
      ],
    },
    vinoteka: {
      card: "Cửa hàng rượu vang",
      cardDesc: "Rượu vang, rượu mạnh, rượu rót",
      title: "Máy tính tiền cho cửa hàng rượu vang và đồ uống",
      desc: "Rượu vang chai và rượu rót, rượu mạnh, đồ uống không cồn, hộp quà và tiền cược vỏ chai – có kho, khuyến mãi và nhãn giá.",
      preset: "Cửa hàng rượu vang",
      items: "Rượu vang rót trắng, đỏ và hồng theo lít, chai nhựa PET, nếm thử rượu, hộp quà, tiền cược chai và két, và túi.",
      highlights: [
        [
          "Rượu rót và tiền cược",
          "Rượu rót theo lít và chai PET nằm trên ô hàng. Tiền cược cho chai thủy tinh và két đã được bật.",
        ],
        [
          "Rượu chai theo mã EAN",
          "Bạn quét chai – máy thử tìm tên trên internet (cơ sở dữ liệu dùng chung của SuperKasa sắp ra mắt), hoặc bạn lấy từ file CSV.",
        ],
        [
          "Khuyến mãi và giá theo số lượng",
          "Chai rẻ hơn khi mua từ sáu chai hoặc khuyến mãi đến một ngày nhất định – máy tự áp dụng.",
        ],
        [
          "Kho",
          "Nhập hàng kèm giá nhập, kiểm kê và gợi ý đặt hàng theo lượng bán.",
        ],
      ],
    },
    zverimex: {
      card: "Đồ dùng thú cưng",
      cardDesc: "Thức ăn, đồ ăn vặt, phụ kiện",
      title: "Máy tính tiền cho cửa hàng đồ dùng thú cưng",
      desc: "Thức ăn (cả hàng cân), đồ ăn vặt, cát vệ sinh, vòng cổ, đồ chơi và đồ dùng cho thú cưng – có kho, hạn dùng và nhãn giá.",
      preset: "Đồ dùng thú cưng",
      items: "Hạt cho chó và mèo bán theo cân, đồ ăn vặt theo cân, cỏ khô, vòng cổ, dây dắt, bát ăn và túi.",
      highlights: [
        [
          "Hạt bán theo cân",
          "Với thức ăn bán theo kg, máy hỏi trọng lượng và tự tính tiền.",
        ],
        [
          "Hạn dùng của thức ăn",
          "Nhập hạn dùng khi nhập hàng và xem danh sách hàng sắp hết hạn.",
        ],
        EAN_TEN_ANH,
        [
          "Kho",
          "Nhập hàng bằng cách quét mã, kiểm kê kệ và gợi ý đặt hàng theo lượng bán.",
        ],
      ],
    },
    obchod: {
      card: "Cửa hàng khác",
      cardDesc: "Quà tặng, đồ chơi, đồ sở thích, thể thao…",
      title: "Máy tính tiền cho cửa hàng quà tặng, đồ chơi, đồ sở thích và các cửa hàng khác",
      desc: "Cho cửa hàng quà tặng, đồ chơi, đồ sở thích, thể thao, kim khí và các cửa hàng khác – bạn tự thêm nhóm hàng, để máy gợi ý theo mô tả hàng hóa, hoặc lấy hàng từ file CSV.",
      preset: "Cửa hàng khác",
      items: "Túi. Nhóm hàng và hàng hóa bạn tự thêm, hoặc lấy từ file CSV (cả file xuất từ máy tính tiền khác).",
      highlights: [
        [
          "Nhóm hàng theo mô tả của bạn",
          "Khi cài đặt, bạn tự mô tả bằng lời mình đang bán gì, máy sẽ gợi ý nhóm hàng kèm thuế DPH, hình ảnh và những mặt hàng đầu tiên. Bạn xem và sửa được gợi ý. Mức thuế DPH hãy kiểm tra với kế toán.",
        ],
        [
          "Hàng từ file CSV",
          "Danh sách hàng bạn lấy từ bảng tính hoặc từ file xuất của máy tính tiền cũ. Nhập lại nhiều lần cũng không bị trùng, chỉ cập nhật giá.",
        ],
        [
          "Kho",
          "Nhập hàng bằng cách quét mã, kiểm kê và xem hàng sắp hết.",
        ],
        [
          "Nhãn giá",
          "Nhãn giá trên máy in hóa đơn, máy in tem nhãn hoặc giấy A4, với nhiều kiểu trình bày.",
        ],
      ],
    },
    gastro: {
      card: "Quán cà phê, bistro, quầy",
      cardDesc: "Cà phê, bánh ngọt, đồ ăn, đồ uống",
      title: "Máy tính tiền cho quán cà phê, bistro và quầy bán hàng",
      desc: "Bán nhanh cà phê, bánh ngọt, đồ ăn và đồ uống trên màn hình cảm ứng, có màn hình khách hàng và thanh toán QR. Có thể bật thêm kho, tiền cược vỏ chai và bàn.",
      preset: "Quán cà phê, bistro, quầy",
      items: "Espresso, cappuccino, caffè latte, trà, sô-cô-la nóng, súp trong ngày, suất ăn trong ngày, bánh baguette kẹp nhân, bánh mì nướng toast, bánh ngọt, bánh kem cắt miếng, nước chanh nhà làm, nước khoáng và nước ép.",
      highlights: [
        [
          "Bán nhanh",
          "Cà phê, bánh ngọt và món ăn trên các ô lớn. Không dùng kho, nên chỉ vài chạm là xong một đơn.",
        ],
        ["Màn hình khách hàng", KHACH_THAY],
        [
          "Khuyến mãi",
          "Khuyến mãi đến một ngày nhất định và giá theo số lượng, ví dụ cà phê mang đi rẻ hơn.",
        ],
        [
          "Kho, tiền cược và bàn khi cần",
          "Khi muốn theo dõi hàng tồn, thu lại vỏ chai hay phục vụ tận bàn, bạn bật kho, tiền cược vỏ chai hoặc bàn và hóa đơn theo bàn trong gói Ăn uống (Gastro).",
        ],
        NA_MISTE,
      ],
      addons: [
        "bạn dùng hết bao nhiêu cà phê, sữa và nguyên liệu nấu ăn, giá vốn và lợi nhuận của từng đồ uống.",
      ],
      notes: [
        "Bạn phục vụ khách tại bàn? Hãy xem thiết lập <a href=\"pokladna-hospoda-restaurace.html\">Quán bia, bar, nhà hàng</a> có bàn và hóa đơn theo bàn. Bạn chủ yếu bán bánh ngọt và kem? Vậy hãy xem <a href=\"pokladna-cukrarna-zmrzlina.html\">Tiệm bánh ngọt, kem</a>.",
        NAPOJE_DPH,
      ],
    },
    cukrarna: {
      card: "Tiệm bánh ngọt, kem",
      cardDesc: "Bánh ngọt, bánh kem, kem, cà phê",
      title: "Máy tính tiền cho tiệm bánh ngọt và tiệm kem",
      desc: "Bánh ngọt, bánh kem đặt trước, kem ốc quế và kem ly, cà phê và đồ uống – bán nhanh trên màn hình cảm ứng, có màn hình khách hàng và thanh toán QR.",
      preset: "Tiệm bánh ngọt, kem",
      items: "Kem 1, 2 và 3 viên, kem ly, kem tươi, bánh su kem, bánh trứng đường kẹp kem, bánh kem cắt miếng, bánh su vòng, bánh kem đặt trước theo kg, espresso, cappuccino và nước chanh nhà làm.",
      highlights: [
        [
          "Viên kem chỉ một chạm",
          "Kem theo số viên, kem ly và bánh ngọt trên các ô lớn. Không dùng kho, nên hàng khách chờ ở quầy đi rất nhanh.",
        ],
        [
          "Bánh kem đặt trước",
          "Bánh kem đặt trước được bán theo kg – máy hỏi trọng lượng và tính tiền.",
        ],
        ["Màn hình khách hàng và thanh toán QR", KHACH_THAY],
        [
          "Kho và bàn khi cần",
          "Khi muốn theo dõi hàng tồn hoặc phục vụ tại bàn, bạn bật kho hoặc bàn và hóa đơn theo bàn trong gói Ăn uống (Gastro).",
        ],
        NA_MISTE,
      ],
      addons: [
        "nguyên liệu của bánh ngọt, bánh kem và kem ly, giá vốn, lợi nhuận và còn làm được bao nhiêu phần.",
      ],
      notes: [
        "Bánh ngọt và kem được tạo với thuế DPH 12 %, cả mang đi lẫn ăn tại chỗ.",
        NAPOJE_DPH,
      ],
    },
    hospoda: {
      card: "Quán bia, bar, nhà hàng",
      cardDesc: "Bàn, hóa đơn, phiếu bếp",
      title: "Máy tính tiền cho quán bia, bar và nhà hàng",
      desc: "Bàn và hóa đơn theo bàn, tách và chuyển hóa đơn, phiếu cho bếp và quầy bia, tiền cược vỏ chai – và máy tính bảng cho nhân viên phục vụ.",
      preset: "Quán bia, bar, nhà hàng",
      items: "Thực đơn đồ uống và món ăn – bia 10° và 12°, đồ uống không cồn, rượu rum, Becherovka, rượu vang, cà phê, súp, gulas, phô mai chiên, xúc xích ngâm giấm – và tiền cược vỏ chai. Kèm 13 bàn: Bàn 1–10 trong phòng chính, quầy bar và hai bàn ngoài sân vườn.",
      mockSearch: "Bàn 4 · hóa đơn",
      mockPay: "Thanh toán hóa đơn",
      highlights: [
        [
          "Bàn và hóa đơn theo bàn",
          "Máy tính tiền mở ngay màn hình bàn, chia theo khu vực – phòng chính, quầy bar, sân vườn. Bạn thấy số tiền đã gọi và thời gian từ lần gọi món cuối. Một bàn có thể có nhiều hóa đơn, khách ngồi quầy bar có hóa đơn theo tên.",
        ],
        [
          "Máy tính tiền và máy tính bảng cho phục vụ",
          "Hóa đơn được lưu trên máy tính chính, không phải trong trình duyệt. Bạn thêm món từ máy tính bảng ngay tại bàn và máy ở quầy bia thấy ngay.",
        ],
        [
          "Tách và chuyển",
          "Mỗi khách trả phần của mình – bạn chọn các món của họ. Món hoặc cả hóa đơn có thể chuyển sang bàn khác hoặc sang hóa đơn mới.",
        ],
        [
          "Phiếu cho bếp và quầy bia",
          "Sau khi gọi món, phiếu được in ra trên máy in hóa đơn ở bếp hoặc ở quầy bia, kèm cả ghi chú như “không hành”. Khi xóa món, máy in phiếu hủy.",
        ],
        [
          "Hóa đơn chính thức và EET chỉ khi thanh toán",
          "Hóa đơn mở của bàn chưa phải là hóa đơn chính thức. Hóa đơn chính thức và việc gửi lên EET 2.0 (hệ thống ghi nhận doanh thu điện tử) chỉ được tạo khi khách thanh toán – tiền mặt, thẻ, QR hoặc kết hợp.",
        ],
        [
          "Tiền cược chai và két",
          "Tiền cược đã được bật. Có thể gắn tiền cược với bia chai để nó tự cộng vào.",
        ],
        NA_MISTE,
      ],
      addons: [
        "món ăn và cocktail tự trừ nguyên liệu trong kho, bạn xem được giá vốn và lợi nhuận.",
        "ca làm của nhân viên phục vụ và bếp, số giờ làm việc để tính lương.",
        "hủy hóa đơn, món bị xóa và giảm giá theo từng nhân viên phục vụ – ai cao hơn hẳn mức trung bình.",
      ],
      notes: [
        "Hiện chưa có sơ đồ bàn theo vị trí thực tế trong phòng và chưa có chức năng chia đều hóa đơn. Phiếu được in trực tiếp ra máy in hóa đơn.",
        "Xóa món đã gọi phải có lý do. Món do chính mình nhập thì sửa được trong 3 phút, sau đó phải có quản lý duyệt bằng mã PIN – mọi thứ đều được ghi lại.",
        NAPOJE_DPH + " Rượu và bia chịu 21 %.",
      ],
    },
    kadernictvi: {
      card: "Tiệm cắt tóc",
      cardDesc: "Cắt, nhuộm, mỹ phẩm tóc",
      title: "Máy tính tiền cho tiệm cắt tóc và barber",
      desc: "Bảng giá dịch vụ trên ô hàng, bán mỹ phẩm tóc, thanh toán QR và EET 2.0 – dùng đơn giản trên máy tính bảng hoặc máy tính.",
      preset: "Tiệm cắt tóc",
      items: "Cắt tóc nam, nữ và trẻ em, gội sấy, nhuộm và tỉa râu.",
      addons: [
        "lịch hẹn của khách theo từng thợ, báo khi lịch bị trùng, và bán dịch vụ cắt tóc từ lịch hẹn chỉ bằng một chạm.",
      ],
    },
    nehty: {
      card: "Tiệm làm móng",
      cardDesc: "Làm móng tay, móng gel",
      title: "Máy tính tiền cho tiệm nail",
      desc: "Làm móng tay, móng gel và acrylic, làm móng chân và bán sơn móng – bảng giá trên ô hàng, thanh toán QR, EET 2.0 và tiếng Việt cho nhân viên.",
      preset: "Tiệm làm móng",
      items: "Làm móng tay, móng gel làm mới và dặm lại, sơn gel, móng acrylic, làm móng chân, vẽ trang trí và tháo gel.",
      addons: [
        "lịch hẹn của khách theo từng thợ nail, báo khi lịch bị trùng, và bán dịch vụ từ lịch hẹn chỉ bằng một chạm.",
      ],
    },
    kosmetika: {
      card: "Thẩm mỹ, chăm sóc chân",
      cardDesc: "Da mặt, trang điểm, lông mày, chân",
      title: "Máy tính tiền cho tiệm thẩm mỹ và chăm sóc chân",
      desc: "Chăm sóc da mặt, trang điểm, lông mày và mi, chăm sóc chân và bán mỹ phẩm – bảng giá trên ô hàng, thanh toán QR và EET 2.0.",
      preset: "Thẩm mỹ, chăm sóc chân",
      items: "Chăm sóc da, làm sạch da mặt, trang điểm, chăm sóc chân, tỉa và nhuộm lông mày, uốn mi (lash lifting) và làm móng tay.",
      addons: [
        "lịch chăm sóc có thời lượng và dịch vụ, báo khi lịch bị trùng, ghi khách không đến / đã hủy.",
      ],
      notes: [
        "Bạn chủ yếu làm mát-xa? Hãy xem thiết lập <a href=\"pokladna-masaze-wellness.html\">Mát-xa, chăm sóc sức khỏe</a>.",
      ],
    },
    masaze: {
      card: "Mát-xa, chăm sóc sức khỏe",
      cardDesc: "Mát-xa, phiếu quà tặng, dầu",
      title: "Máy tính tiền cho tiệm mát-xa và chăm sóc sức khỏe",
      desc: "Mát-xa theo thời gian, phiếu quà tặng và bán dầu, mỹ phẩm – bảng giá trên ô hàng, thanh toán QR và EET 2.0.",
      preset: "Mát-xa, chăm sóc sức khỏe",
      items: "Mát-xa cổ điển 30 và 60 phút, mát-xa thư giãn, mát-xa đá nóng, bấm huyệt bàn chân và phiếu quà tặng mát-xa 60 phút.",
      addons: [
        "các buổi mát-xa theo thời lượng và theo từng thợ trên lịch, báo khi lịch bị trùng, ghi khách không đến / đã hủy.",
      ],
    },
    fitness: {
      card: "Phòng gym, thể thao",
      cardDesc: "Vé vào, thẻ tập, lớp học",
      title: "Máy tính tiền cho phòng gym và cơ sở thể thao",
      desc: "Vé vào và thẻ tập, lớp học và huấn luyện cá nhân, thực phẩm chức năng và đồ uống – mỗi nhóm có mức thuế DPH riêng, có kho, thanh toán QR và EET 2.0.",
      preset: "Phòng gym, thể thao",
      items: "Vé vào một lần, vé cho học sinh, sinh viên và người cao tuổi, thẻ 10 lần vào, thẻ tháng, huấn luyện cá nhân, lớp tập nhóm, thanh protein và đồ uống protein, nước và nước điện giải.",
      highlights: [
        [
          "Vé vào 12 %, lớp học 21 %",
          "Vé vào phòng tập và sân thể thao được tạo với thuế DPH 12 %, lớp học và tập với huấn luyện viên 21 %, thực phẩm chức năng 12 % và đồ uống 21 %. Đây chỉ là gợi ý – hãy kiểm tra với kế toán.",
        ],
        [
          "Vé vào và thẻ tập trên ô hàng",
          "Vé vào, thẻ tập hoặc lớp học chỉ cần một chạm, giá đổi ngay trên màn hình bán hàng.",
        ],
        [
          "Kho thanh protein và đồ uống",
          "Kho đã được bật: nhập hàng, kiểm kê và xem hàng sắp hết.",
        ],
        QR_THE,
      ],
      addons: [
        "lịch tập cá nhân và lớp học theo từng huấn luyện viên, báo khi lịch bị trùng.",
      ],
      notes: [
        "Thẻ tập được bán như một mặt hàng – máy không theo dõi số lần vào còn lại hay hội viên.",
      ],
    },
    autoservis: {
      card: "Sửa xe ô tô, lốp xe",
      cardDesc: "Tiền công, thay lốp, phụ tùng",
      title: "Máy tính tiền cho gara sửa xe và dịch vụ lốp",
      desc: "Tiền công theo giờ, thay dầu, chẩn đoán, thay lốp và giữ lốp, phụ tùng và vật liệu – trên ô hàng, có kho, thanh toán QR và EET 2.0.",
      preset: "Sửa xe ô tô, lốp xe",
      items: "Tiền công thợ theo giờ, thay dầu, chẩn đoán, nạp gas điều hòa, thay 4 bánh, cân bằng bánh, vá lốp, giữ lốp theo mùa, dầu động cơ, nước rửa kính và vật liệu.",
      highlights: [
        [
          "Tiền công và phụ tùng trên cùng một hóa đơn",
          "Giờ công, thay lốp và phụ tùng đều nằm trên ô hàng. Số giờ hoặc số bánh nhập bằng bàn phím số với phép nhân.",
        ],
        [
          "Kho phụ tùng và dầu",
          "Kho đã được bật: nhập phụ tùng kèm giá nhập, kiểm kê và cảnh báo tồn kho tối thiểu.",
        ],
        [
          "Phụ tùng theo mã vạch",
          "Gặp mã lạ của dầu hoặc phụ tùng, máy thử tìm trên internet (cơ sở dữ liệu dùng chung của SuperKasa sắp ra mắt).",
        ],
        QR_THE,
      ],
      notes: [
        "Máy không làm phiếu sửa chữa và không quản lý hồ sơ xe – tiền công và phụ tùng bạn nhập khi khách thanh toán.",
      ],
    },
    opravna: {
      card: "Tiệm sửa chữa",
      cardDesc: "Giày dép, quần áo, chìa khóa, đồ điện",
      title: "Máy tính tiền cho tiệm sửa chữa và dịch vụ",
      desc: "Sửa giày dép và quần áo, chìa khóa, xe đạp, đồ điện và điện thoại – tiền công và vật liệu trên ô hàng, có kho, thanh toán QR và EET 2.0.",
      preset: "Tiệm sửa chữa",
      items: "Tiền công theo giờ, thay gót giày, sửa ngắn quần, thay khóa kéo, đánh chìa khóa và vật liệu.",
    },
    sluzby: {
      card: "Dịch vụ khác",
      cardDesc: "Công theo giờ, vận chuyển…",
      title: "Máy tính tiền cho các loại dịch vụ",
      desc: "Công theo giờ, vận chuyển, tư vấn hoặc cho thuê – dịch vụ trên ô hàng, thanh toán QR và EET 2.0.",
      preset: "Dịch vụ khác",
      items: "Công theo giờ, vận chuyển, tư vấn và vật liệu.",
    },
  },
};
