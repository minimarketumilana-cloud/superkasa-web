// Texty oborů – angličtina. Stavba musí odpovídat csOverlay() v obory.mjs.
// Opakované texty (Na místě / S sebou, sazby nápojů) jsou nahoře jako konstanty.

const EAT_IN_TIPS = [
  "Eat in / Take away and tips",
  "One switch sells eat in or take away – the receipt uses the correct VAT rate and the price stays the same. Tips are recorded outside sales and EET, and the POS watches the 7 % limit for tax exemption (from 1 Jan 2027). Both are included in the plan price.",
];

const DRINKS_VAT =
  "Soft drinks and coffee served in a café, pub or restaurant have a 21 % rate until the end of 2026 and 12 % from 1 Jan 2027. Take-away stays at 21 % – switch Eat in / Take away on the POS and the receipt uses the correct rate. During setup the POS uses the rate valid on that day – check it with your accountant.";

const STAFF_VI = "Vietnamese for your staff";
const NAMES_PHOTOS_EAN = [
  "Names and photos by EAN",
  "When you scan an unknown barcode, the POS suggests a name and photo – from the internet (the shared SuperKasa database is coming soon).",
];
const QR_CARD_CUSTOMER = [
  "QR payment and card",
  "Customers pay in cash, by QR code from the display or receipt, or by card on your card terminal.",
];

export default {
  groups: {
    tabak: "Tobacco",
    ecig: "E-cigarettes",
    alkohol: "Alcohol",
    napoje: "Soft drinks",
    pecivo: "Bakery",
    mlecne: "Dairy",
    maso: "Meat &amp; sausages",
    ovoce: "Fruit &amp; veg",
    mrazene: "Frozen food",
    sladkosti: "Sweets &amp; snacks",
    potraviny: "Groceries",
    drogerie: "Drugstore",
    krmivo: "Pet food",
    tisk: "Newspapers",
    domaci: "Household",
    hracky: "Toys",
    tasky: "Bags",
    zalohy: "Deposits",
    kava: "Coffee &amp; tea",
    jidlo: "Food",
    kadernictvi: "Hairdressing",
    nehty: "Nails",
    kosmetika: "Beauty",
    opravy: "Repairs",
    sluzby: "Services",
    pivo: "Beer",
    nealko: "Soft drinks",
    kvetiny: "Cut flowers",
    rostliny: "Plants",
    darky: "Gifts &amp; decor",
    papirnictvi: "Stationery",
    knihy: "Books",
    obleceni: "Clothing",
    obuv: "Footwear",
    doplnky: "Accessories",
    mobily: "Phones &amp; tablets",
    prislusenstvi: "Phone accessories",
    elektro: "Electronics",
    vitaminy: "Supplements",
    zdrava: "Health food",
    vino: "Wine",
    lihoviny: "Spirits",
    chovatel: "Pet supplies",
    asie: "Asian food",
    zakusky: "Cakes &amp; pastries",
    zmrzlina: "Ice cream",
    autoservis: "Car service",
    autodily: "Parts &amp; materials",
    pneu: "Tyres",
    fitness: "Entry &amp; passes",
    lekce: "Training &amp; classes",
    masaze: "Massage",
  },
  features: {
    stock: ["Stock", "Receiving goods, stock counts, stock level on the tile, what's running low and order suggestions."],
    expiry: ["Expiry", "Best-before date on the item card and when receiving goods, alerts for expired goods."],
    labels: ["Price labels", "Print price labels on the receipt printer, a label printer or A4."],
    deposits: ["Deposits", "Returnable bottles and crates; the deposit can be added to beer automatically."],
    scale: ["Scales and weighed-item barcodes", "Barcodes from scale labels – with weight or price."],
    promo: ["Promotions and quantity prices", "Promotions until a set date, a lower unit price from a certain quantity."],
    display: ["Customer display", "A second screen for the customer showing the purchase and the QR payment."],
    qr: ["QR payments", "Bank transfer payment via a QR code on the display and on the receipt."],
    tables: ["Tables and bills", "Table bills for pubs and restaurants: adding items, splitting, moving, kitchen and bar tickets."],
    tips: ["Tips", "Tips outside sales and EET: who, how much, cash or card; a monthly overview that watches the 7 % limit for tax exemption."],
  },
  tariffs: {
    potraviny: "Grocery",
    obchod: "Shop",
    gastro: "Food service (Gastro)",
    nehty: "Nail studio",
    sluzby: "Services",
  },
  addons: {
    attendance: [
      "Attendance and shifts",
      "Cashiers clock in and out with a PIN on the POS. A weekly shift schedule, planned vs. worked hours and a report for payroll.",
    ],
    loyalty: [
      "Loyalty and gift vouchers",
      "A customer card or phone number: points for purchases, a discount for points, a permanent discount for VIPs. Gift vouchers with a barcode and balance; reported to EET 2.0 under § 17(2) of Act No. 180/2026 Coll. – check with your accountant.",
    ],
    reservations: [
      "Reservations and appointments",
      "An appointment calendar for salons and services (who, when, how long, which service) and table reservations. It watches for overlaps, and you sell the booked service with one tap.",
    ],
    recipes: [
      "Recipes and portion costing",
      "Ingredients for coffee, meals, cocktails and cakes: a sale deducts the ingredients from stock, a void puts them back. Cost price, margin and how many more portions you can make.",
    ],
    control: [
      "Staff control",
      "Voids, refunds, cancelled sales, removed items, discounts, cash drawer openings and closing differences per cashier – the POS shows who is well above average.",
    ],
  },
  kinds: {
    shop: "Shops",
    food: "Food &amp; drink",
    service: "Services",
  },
  serviceHighlights: [
    [
      "Service price list on tiles",
      "Your services are on large tiles – change the price and name right from the sales screen. Ring up a service with one tap.",
    ],
    [
      "QR payment and card",
      "Clients pay in cash, by QR code from the display or receipt, or by card on your card terminal.",
    ],
    [
      "Selling cosmetics and materials",
      "Alongside services you can sell goods too. Stock and promotions can be switched on in your plan.",
    ],
    [
      STAFF_VI,
      "Czech, Vietnamese and English – everyone uses their own language. The customer's receipt is always in Czech.",
    ],
  ],
  serviceNotes: [
    "A client appointment calendar is not part of the plan – it comes with the paid add-on <a href=\"cenik.html#doplnky\">Reservations and appointments</a>.",
  ],
  obory: {
    vecerka: {
      card: "Convenience store, minimarket",
      cardDesc: "Groceries, drinks, tobacco, bakery",
      title: "POS for convenience stores, minimarkets and grocery shops",
      desc: "Groceries, drinks, tobacco, alcohol, bakery, fruit and veg – with deposits, scales, stock and price labels.",
      preset: "Convenience store, minimarket",
      items: "Deposits for bottles and crates (PLU 0, 3, 8, 9), bags, bakery products and fruit and veg with pictures – 36 items in total.",
      highlights: [
        [
          "Hassle-free deposits",
          "A deposit can be linked to beer – it is then added automatically and removed again when the beer is removed. Buying back bottles and crates is on a single tile.",
        ],
        [
          "Fruit, veg and goods sold by weight",
          "For goods sold by the kilogram the POS asks for the weight, and it also reads barcodes from scale labels.",
        ],
        [
          "Cigarettes at the tax-stamp price",
          "Tobacco has a fixed price from the tax stamp, so it cannot be discounted by mistake.",
        ],
        [
          "Expiry and what's running low",
          "Best-before dates when receiving goods, an overview of goods that will soon expire, and order suggestions based on sales.",
        ],
        [
          "Price labels on the receipt printer",
          "Price labels with the price per kilogram or litre, promotional price and barcode. Select only the goods whose price has changed.",
        ],
        [
          STAFF_VI,
          "Every cashier has their own language – Czech, Vietnamese or English. The customer's receipt is always in Czech.",
        ],
      ],
      addons: [
        "cashiers clock in and out with a PIN, and monthly hours serve as a basis for payroll.",
        "voids, refunds, discounts and cash drawer openings per cashier, when several people take turns.",
      ],
    },
    asie: {
      card: "Asian food store",
      cardDesc: "Rice, noodles, herbs, frozen food",
      title: "POS for Asian food stores",
      desc: "Rice, noodles, sauces, spices, fresh herbs, frozen goods, drinks and alcohol – with scales, deposits, stock, price labels and Vietnamese for your staff.",
      preset: "Asian food store",
      items: "Fresh herbs in bunches (coriander, Thai basil, mint), lemongrass, chilli peppers, pak choi and mung bean sprouts, fresh tofu and rice noodles – plus bags and deposits for bottles and crates.",
      highlights: [
        [
          STAFF_VI,
          "Every cashier has their own language – Vietnamese, Czech or English, switched with one button. The customer's receipt is always in Czech.",
        ],
        [
          "Herbs by the bunch, vegetables by the kg",
          "Bunches of herbs are priced per piece; pak choi, chillies and sprouts are weighed. The POS also reads barcodes from scale labels.",
        ],
        [
          "Product names from the barcode",
          "The POS tries to look up an unknown barcode on the internet. A shared database of SuperKasa tills that also knows imported goods is coming soon.",
        ],
        [
          "Expiry of fresh goods",
          "Best-before dates for tofu, noodles and frozen goods when receiving them, and an overview of goods that will soon expire.",
        ],
        [
          "Bottle and crate deposits",
          "Deposits are switched on. A deposit can be linked to beer so that it is added automatically; buying back bottles is on a single tile.",
        ],
        [
          "Price labels on the receipt printer",
          "Price labels with the price per kilogram or litre, promotional price and barcode.",
        ],
      ],
    },
    trafika: {
      card: "Newsagent",
      cardDesc: "Tobacco, e-cigarettes, press",
      title: "POS for newsagents and tobacconists",
      desc: "Cigarettes, e-cigarettes, newspapers and magazines, drinks and sweets – with fixed tobacco prices, stock and price labels.",
      preset: "Newsagent and tobacco",
      items: "Bags. You scan the goods with a barcode scanner – the POS tries to look the name up on the internet (the shared SuperKasa database is coming soon), or you import it from a CSV.",
      highlights: [
        [
          "Fixed tobacco prices",
          "Cigarettes are sold at the price on the tax stamp and cannot be discounted.",
        ],
        [
          "Names from the barcode",
          "The POS tries to look up an unknown barcode on the internet. A shared database of SuperKasa tills that also knows cigarettes is coming soon.",
        ],
        [
          "Stock and what's running low",
          "Receiving goods by scanning, shelf stock counts and order suggestions based on sales.",
        ],
        [
          "Promotions and quantity prices",
          "Promotions until a chosen date and a lower unit price from a certain quantity.",
        ],
      ],
    },
    pekarna: {
      card: "Bakery",
      cardDesc: "Bread, rolls, pastries",
      title: "POS for bakeries",
      desc: "Bread, rolls, pastries and cakes to take away, and drinks – with quick tiles, expiry dates, write-offs of unsold bread and price labels.",
      preset: "Bakery",
      items: "Round rolls, crescent rolls, bread, baguettes, doughnuts and butter rolls, curd-cheese and poppy-seed kolaches, pastry turnovers, cream puffs and bags – with pictures and PLU numbers.",
      highlights: [
        [
          "Quick tiles for bakery products",
          "Your best-selling bakery products are on large tiles with pictures. Enter several pieces on the keypad with multiplication.",
        ],
        [
          "Writing off unsold bread",
          "Write off unsold, expired or damaged goods from stock without a receipt.",
        ],
        [
          "Expiry",
          "Best-before dates when receiving goods and an overview of goods that will soon expire.",
        ],
        [
          "Price labels",
          "Price labels with the price per kilogram, promotional price and barcode on the receipt printer or A4.",
        ],
      ],
      notes: [
        "Selling mainly cakes, gâteaux and ice cream? Have a look at the <a href=\"pokladna-cukrarna-zmrzlina.html\">Patisserie and ice cream</a> setup.",
      ],
    },
    zelenina: {
      card: "Fruit and vegetables",
      cardDesc: "Goods by the kilogram, scales",
      title: "POS for fruit and vegetable shops",
      desc: "Goods sold by the kilogram, barcodes from scale labels, pictures of fruit and vegetables and price labels with the price per kg.",
      preset: "Fruit and vegetables",
      items: "23 kinds of fruit and vegetables with pictures (potatoes, onions, tomatoes, bananas, apples…) and bags.",
      highlights: [
        [
          "Selling by the kilogram",
          "For goods sold by the kg the POS asks for the weight and works out the price itself.",
        ],
        [
          "Scale labels",
          "The POS reads barcodes from scale labels (with weight or price). You set up and test the format in Admin.",
        ],
        [
          "Price labels with the price per kg",
          "Price labels with the price per kilogram and promotional price on the receipt printer or A4.",
        ],
        [
          "Pictures on the tiles",
          "Fruit and vegetables have drawn pictures, so staff can find them without reading.",
        ],
      ],
    },
    reznictvi: {
      card: "Butcher's shop",
      cardDesc: "Meat by the kg, scales, expiry",
      title: "POS for butcher's shops and charcuterie",
      desc: "Meat and sausages by the kilogram, weighed-item barcodes from scale labels, expiry dates and price labels with the price per kg.",
      preset: "Butcher's shop",
      items: "Pork leg and neck, chicken breast, beef hindquarter, minced meat, frankfurters, ham and grilling sausages by the kg – and bags.",
      highlights: [
        [
          "Meat by the kilogram",
          "The POS asks for the weight, or reads the barcode from a scale label with the weight or price.",
        ],
        [
          "Expiry",
          "Best-before dates when receiving goods, an overview of goods that will soon expire, and a badge right on the tile.",
        ],
        [
          "Price labels with the price per kg",
          "Price labels with the price per kilogram, promotional price and barcode.",
        ],
        [
          "Promotions",
          "Promotional prices until a chosen date – the POS applies them itself.",
        ],
      ],
    },
    drogerie: {
      card: "Drugstore",
      cardDesc: "Cosmetics, household, pet food",
      title: "POS for drugstores and household goods shops",
      desc: "Toiletries, cosmetics, household goods and pet food – with name and photo lookup by EAN, stock and price labels.",
      preset: "Drugstore and household",
      items: "Bags. You scan the goods with a barcode scanner – the POS suggests the name and photo from the barcode, or you import them from a CSV.",
      highlights: [
        NAMES_PHOTOS_EAN,
        [
          "Price per 100 ml and 100 g",
          "The pack size is filled in from the name, and the price label shows the unit price required by the Czech Price Act.",
        ],
        [
          "Stock",
          "Receiving goods by scanning with the purchase price, shelf stock counts and order suggestions based on sales.",
        ],
        [
          "Promotions and quantity prices",
          "Promotions until a set date and a lower unit price from a certain quantity, with the old price crossed out on the label.",
        ],
      ],
    },
    kvetinarstvi: {
      card: "Florist",
      cardDesc: "Flowers, bouquets, plants, gifts",
      title: "POS for florists",
      desc: "Cut flowers by the stem, bouquets and arrangements, potted plants, gifts and greeting cards – each group with its own VAT rate, with stock and price labels.",
      preset: "Florist",
      items: "Roses, tulips, gerberas and chrysanthemums by the stem, small and large bouquets, arranging and wrapping, orchids, succulents, potted herbs, greeting cards, gift bags and candles.",
      highlights: [
        [
          "Flowers 21 %, plants 12 %",
          "Since 2024 cut flowers have a 21 % rate, while potted plants and seedlings have stayed at 12 %. That is why the POS sets them up as two groups – check the rates with your accountant.",
        ],
        [
          "Bouquets in a few taps",
          "Flowers by the stem, bouquets and arranging are all on tiles. Enter seven roses on the keypad with multiplication and change prices right from the sales screen.",
        ],
        [
          "Stock",
          "Receiving goods, stock counts and an overview of what's running low – for flowers, plants and gifts.",
        ],
        [
          "Price labels",
          "Price labels on the receipt printer, a label printer or A4, including the promotional price.",
        ],
      ],
    },
    papirnictvi: {
      card: "Stationery and books",
      cardDesc: "Notebooks, books, copying",
      title: "POS for stationers and bookshops",
      desc: "Notebooks, writing and office supplies, books at 0 % VAT, newspapers, greeting cards, toys and copying – with stock, names from the barcode and price labels.",
      preset: "Stationery and books",
      items: "A4 and A5 notebooks, ballpoint pens, pencils, black-and-white and colour A4 copies, laminating, greeting cards, wrapping paper and bags.",
      highlights: [
        [
          "Books at 0 % VAT",
          "Since 2024 books have been tax-free. That is why the Books group has 0 %, stationery 21 % and newspapers and magazines 12 % – check the rates with your accountant.",
        ],
        [
          "Copying on a tile",
          "Ring up copies and laminating with one tap; enter twenty copies on the keypad with multiplication.",
        ],
        [
          "Book and product names by EAN",
          "When you scan an unknown barcode, the POS suggests a name – from the internet (the shared SuperKasa database is coming soon).",
        ],
        [
          "Stock, even for back-to-school season",
          "Receiving goods by scanning, shelf stock counts and order suggestions based on sales.",
        ],
      ],
    },
    obleceni: {
      card: "Clothing and shoes",
      cardDesc: "Fashion, shoes, accessories",
      title: "POS for clothing and shoe shops",
      desc: "Clothing, footwear and fashion accessories – sizes and colours as separate item cards, stock, promotions and price labels.",
      preset: "Clothing and shoes",
      items: "T-shirts, hoodies, trousers, socks, trainers, slippers, caps, belts and bags.",
      highlights: [
        [
          "Sizes and colours",
          "Set up each size or colour as a separate item card – with its own barcode, price and stock level.",
        ],
        [
          "Sales and promotions",
          "Promotions until a chosen date with the old price crossed out on the label, and discounts on a single item or the whole purchase.",
        ],
        [
          "Stock",
          "Receiving goods by scanning, stock counts and order suggestions based on sales.",
        ],
        [
          "Products from CSV",
          "Import your range from a spreadsheet or an export from your old POS. Importing again duplicates nothing, it only updates prices.",
        ],
      ],
    },
    elektro: {
      card: "Phones and electronics",
      cardDesc: "Phones, accessories, repairs",
      title: "POS for phone and electronics shops",
      desc: "Phones, cases, screen protectors, chargers, electronics and repairs – goods and labour on tiles, stock, names from the barcode and price labels.",
      preset: "Phones and electronics",
      items: "Tempered glass, phone cases, USB-C chargers and cables, headphones, screen protector fitting, display and battery replacement, diagnostics and bags.",
      highlights: [
        [
          "Goods and service on one receipt",
          "Sell a screen protector and fit it straight away – accessories and labour are both on tiles and paid for together.",
        ],
        NAMES_PHOTOS_EAN,
        [
          "Accessory stock",
          "Receiving goods by scanning with the purchase price, stock counts and minimum stock alerts for cases, screen protectors and cables.",
        ],
        [
          "Price labels",
          "Price labels with the price, promotional price and barcode on the receipt printer, a label printer or A4.",
        ],
      ],
    },
    zdrava: {
      card: "Health food and supplements",
      cardDesc: "Organic, bulk goods, vitamins",
      title: "POS for health food and supplement shops",
      desc: "Organic and gluten-free food, bulk goods by weight, supplements and natural cosmetics – with scales, expiry dates, stock and price labels with the price per kg.",
      preset: "Health food and supplements",
      items: "Bulk goods by the kilogram – rolled oats, chia seeds, dates, cashew nuts, quinoa and brown rice – and bags.",
      highlights: [
        [
          "Bulk goods by weight",
          "For goods sold by the kilogram the POS asks for the weight and works out the price itself. It also reads barcodes from scale labels.",
        ],
        [
          "Expiry",
          "Best-before dates when receiving goods, an overview of goods that will soon expire, and write-offs of expired goods.",
        ],
        [
          "Price per kg and 100 g on the label",
          "Price labels with the unit price, promotional price and barcode on the receipt printer or A4.",
        ],
        [
          "VAT rates by group",
          "Health food and supplements are set up at 12 %, toiletries and natural cosmetics at 21 %. The rates are a suggestion – check them with your accountant.",
        ],
      ],
    },
    vinoteka: {
      card: "Wine shop and drinks",
      cardDesc: "Wine, spirits, draught wine",
      title: "POS for wine shops and drinks stores",
      desc: "Bottled and draught wine, spirits, soft drinks, gift packs and bottle deposits – with stock, promotions and price labels.",
      preset: "Wine shop",
      items: "Draught white, red and rosé wine by the litre, PET bottles, tastings, gift boxes, deposits for bottles and crates, and bags.",
      highlights: [
        [
          "Draught wine and deposits",
          "Draught wine by the litre and PET bottles are on tiles. Deposits for glass bottles and crates are switched on.",
        ],
        [
          "Bottled wines by EAN",
          "Scan a bottle – the POS tries to look the name up on the internet (the shared SuperKasa database is coming soon), or you import it from a CSV.",
        ],
        [
          "Promotions and quantity prices",
          "A cheaper price per bottle from six bottles, or a promotion until a set date – the POS applies them itself.",
        ],
        [
          "Stock",
          "Receiving goods with the purchase price, stock counts and order suggestions based on sales.",
        ],
      ],
    },
    zverimex: {
      card: "Pet shop",
      cardDesc: "Pet food, treats, supplies",
      title: "POS for pet shops",
      desc: "Pet food (also by weight), treats, litter, collars, toys and pet supplies – with stock, expiry dates and price labels.",
      preset: "Pet shop",
      items: "Dog and cat kibble by weight, treats by weight, hay, collars, leads, bowls and bags.",
      highlights: [
        [
          "Kibble by weight",
          "For pet food sold by the kilogram the POS asks for the weight and works out the price itself.",
        ],
        [
          "Pet food expiry",
          "Best-before dates when receiving goods and an overview of goods that will soon expire.",
        ],
        NAMES_PHOTOS_EAN,
        [
          "Stock",
          "Receiving goods by scanning, shelf stock counts and order suggestions based on sales.",
        ],
      ],
    },
    obchod: {
      card: "Other shop",
      cardDesc: "Gifts, toys, hobby, sport…",
      title: "POS for gift, toy, hobby and other shops",
      desc: "For gifts, toys, hobby, sport, hardware and other shops – add groups yourself, have them suggested from a description of your range, or import products from a CSV.",
      preset: "Other shop",
      items: "Bags. You add groups and products yourself, or import them from a CSV (even from another POS's export).",
      highlights: [
        [
          "Groups from your description",
          "During setup you describe in your own words what you sell, and the POS suggests groups with VAT, pictures and first items. You see the suggestion and can edit it. Check the VAT rates with your accountant.",
        ],
        [
          "Products from CSV",
          "Import your product list from a spreadsheet or an export from your old POS. Importing again duplicates nothing, it only updates prices.",
        ],
        [
          "Stock",
          "Receiving goods by scanning, stock counts and an overview of what's running low.",
        ],
        [
          "Price labels",
          "Price labels on the receipt printer, a label printer or A4, in several designs.",
        ],
      ],
    },
    gastro: {
      card: "Café, bistro, stand",
      cardDesc: "Coffee, cakes, food, drinks",
      title: "POS for cafés, bistros and food stands",
      desc: "Quick sales of coffee, cakes, food and drinks on a touchscreen, a customer display and QR payments. Stock, deposits and tables can be switched on.",
      preset: "Café, bistro, stand",
      items: "Espresso, cappuccino, caffè latte, tea, hot chocolate, soup of the day, daily menu, filled baguettes, toasties, cakes, gâteau slices, homemade lemonade, mineral water and juice.",
      highlights: [
        [
          "Quick sales",
          "Coffee, cakes and meals on large tiles. No stock tracking, so you ring up an order in a few taps.",
        ],
        [
          "Customer display",
          "Customers see what they are paying for and can pay by QR code from the second screen.",
        ],
        [
          "Promotions",
          "Promotions until a set date and prices from a certain quantity, such as cheaper takeaway coffee.",
        ],
        [
          "Stock, deposits and tables when you need them",
          "If you want to keep track of stock, buy back bottles or serve at tables, switch on stock, deposits or tables and bills in the Food service (Gastro) plan.",
        ],
        EAT_IN_TIPS,
      ],
      addons: [
        "how much coffee, milk and meal ingredients you use, and the cost price and margin of every drink.",
      ],
      notes: [
        "Serving guests at tables? Have a look at the <a href=\"pokladna-hospoda-restaurace.html\">Pub, bar, restaurant</a> setup with tables and bills. Selling mainly cakes and ice cream? Then try <a href=\"pokladna-cukrarna-zmrzlina.html\">Patisserie and ice cream</a>.",
        DRINKS_VAT,
      ],
    },
    cukrarna: {
      card: "Patisserie and ice cream",
      cardDesc: "Cakes, gâteaux, ice cream, coffee",
      title: "POS for patisseries and ice cream parlours",
      desc: "Cakes, gâteaux to order, ice cream in cones and sundaes, coffee and drinks – quick sales on a touchscreen, a customer display and QR payments.",
      preset: "Patisserie and ice cream",
      items: "Ice cream with 1, 2 and 3 scoops, ice cream sundaes, soft-serve ice cream, cream puffs, almond meringue cakes, gâteau slices, choux rings, gâteaux to order by the kilogram, espresso, cappuccino and homemade lemonade.",
      highlights: [
        [
          "Scoops in one tap",
          "Ice cream by the number of scoops, sundaes and cakes on large tiles. No stock tracking, so the queue at the window moves fast.",
        ],
        [
          "Gâteaux to order",
          "A gâteau made to order is sold by the kilogram – the POS asks for the weight and works out the price.",
        ],
        [
          "Customer display and QR payment",
          "Customers see what they are paying for and can pay by QR code from the second screen.",
        ],
        [
          "Stock and tables when you need them",
          "If you want to keep track of stock or serve at tables, switch on stock or tables and bills in the Food service (Gastro) plan.",
        ],
        EAT_IN_TIPS,
      ],
      addons: [
        "ingredients for cakes, gâteaux and ice cream sundaes, cost price, margin and how many more portions you can make.",
      ],
      notes: [
        "Cakes and ice cream are set up at 12 % VAT, for both take-away and eat-in.",
        DRINKS_VAT,
      ],
    },
    hospoda: {
      card: "Pub, bar, restaurant",
      cardDesc: "Tables, bills, tickets",
      title: "POS for pubs, bars and restaurants",
      desc: "Tables and table bills, splitting and moving bills, kitchen and bar tickets, bottle deposits – and a tablet for your staff.",
      preset: "Pub, bar, restaurant",
      items: "A drinks menu and meals – 10° and 12° beer, soft drinks, rum, Becherovka, wine, coffee, soup, goulash, fried cheese, pickled sausages – and deposits. Plus 13 tables: Tables 1–10 in the main room, the Bar and two tables in the beer garden.",
      mockSearch: "Table 4 · bill",
      mockPay: "Pay bill",
      highlights: [
        [
          "Tables and table bills",
          "The POS starts on the tables screen, organised by room – main room, bar, beer garden. You see the amount spent and the time since the last order. A table can have several bills, and a guest at the bar can have a bill under their name.",
        ],
        [
          "POS and waiter's tablet",
          "Bills are stored on the main computer, not in the browser. Add an order from a tablet at the table and the POS at the bar sees it straight away.",
        ],
        [
          "Split and move",
          "Each guest pays for their own – just select their items. Move items or the whole bill to another table or to a new bill.",
        ],
        [
          "Kitchen and bar tickets",
          "After ordering, a ticket prints on the receipt printer in the kitchen or at the bar, including a note such as “no onion”. When an item is removed, a void ticket prints.",
        ],
        [
          "Receipt and EET only on payment",
          "A table bill is not a receipt. The receipt and the EET 2.0 submission are only created on payment – in cash, by card, by QR or combined.",
        ],
        [
          "Bottle and crate deposits",
          "Deposits are switched on. A deposit can be linked to bottled beer so that it is added automatically.",
        ],
        EAT_IN_TIPS,
      ],
      addons: [
        "meals and cocktails deduct ingredients from stock, and you see the cost price and margin.",
        "shifts for floor and kitchen staff, hours worked as a basis for payroll.",
        "voids, removed items and discounts per waiter – who is well above average.",
      ],
      notes: [
        "Not available yet: a table plan matching your room layout and splitting a bill into equal parts. Tickets are printed by direct printing on a receipt printer.",
        "Removing an ordered item requires a reason. Staff can correct their own item within 3 minutes; after that a manager approves it with a PIN – everything is logged.",
        `${DRINKS_VAT} Alcohol and beer are 21 %.`,
      ],
    },
    kadernictvi: {
      card: "Hairdresser and barber",
      cardDesc: "Haircuts, colouring, hair products",
      title: "POS for hairdressers and barbers",
      desc: "Service price list on tiles, hair care product sales, QR payments and EET 2.0 – simple, on a tablet or computer.",
      preset: "Hairdresser and barber",
      items: "Men's, women's and children's haircuts, wash and blow-dry, colouring and beard trim.",
      addons: [
        "client appointments per hairdresser, overlap checks, and you sell a haircut from the booking with one tap.",
      ],
    },
    nehty: {
      card: "Nail studio",
      cardDesc: "Manicure, gel nails",
      title: "POS for nail studios",
      desc: "Manicure, gel and acrylic nails, pedicure and nail polish sales – price list on tiles, QR payments, EET 2.0 and Vietnamese for your staff.",
      preset: "Nail studio",
      items: "Manicure, new gel nails and infills, gel polish, acrylic nails, pedicure, nail art and gel removal.",
      addons: [
        "client appointments per nail technician, overlap checks, and you sell the booked service with one tap.",
      ],
    },
    kosmetika: {
      card: "Beauty salon and pedicure",
      cardDesc: "Skin, make-up, brows, pedicure",
      title: "POS for beauty salons and pedicure",
      desc: "Facials, make-up, brows and lashes, pedicure and cosmetics sales – price list on tiles, QR payments and EET 2.0.",
      preset: "Beauty salon and pedicure",
      items: "Facial treatments, deep skin cleansing, make-up, pedicure, brow shaping and tinting, lash lifting and manicure.",
      addons: [
        "a treatment calendar with duration and service, overlap checks, no-show / cancelled.",
      ],
      notes: [
        "Do you mainly offer massages? Have a look at the <a href=\"pokladna-masaze-wellness.html\">Massage and wellness</a> setup.",
      ],
    },
    masaze: {
      card: "Massage and wellness",
      cardDesc: "Massages, vouchers, oils",
      title: "POS for massage and wellness",
      desc: "Massages by length, gift vouchers and sales of oils and cosmetics – price list on tiles, QR payments and EET 2.0.",
      preset: "Massage and wellness",
      items: "Classic massage for 30 and 60 minutes, relaxing massage, hot stone massage, foot reflexology and a gift voucher for a 60-minute massage.",
      addons: [
        "massages by length and therapist in the calendar, overlap checks, no-show / cancelled.",
      ],
    },
    fitness: {
      card: "Gym and sport",
      cardDesc: "Entry, passes, classes",
      title: "POS for gyms and sports facilities",
      desc: "Entry and passes, classes and personal training, supplements and drinks – each group with its own VAT rate, stock, QR payments and EET 2.0.",
      preset: "Gym and sport",
      items: "Single entry, student and senior entry, 10-visit pass, monthly pass, personal training, group class, protein bar and protein drink, water and isotonic drink.",
      highlights: [
        [
          "Entry 12 %, classes 21 %",
          "Entry to the gym and sports facilities is set up at 12 %, classes and training with a trainer at 21 %, supplements at 12 % and drinks at 21 %. The rates are a suggestion – check them with your accountant.",
        ],
        [
          "Entry and passes on tiles",
          "Ring up an entry, a pass or a class with one tap, and change the price right from the sales screen.",
        ],
        [
          "Stock of bars and drinks",
          "Stock is switched on: receiving goods, stock counts and an overview of what's running low.",
        ],
        QR_CARD_CUSTOMER,
      ],
      addons: [
        "personal training and class appointments per trainer, overlap checks.",
      ],
      notes: [
        "A pass is sold as an item – the POS does not track remaining visits or memberships.",
      ],
    },
    autoservis: {
      card: "Car service and tyres",
      cardDesc: "Labour, tyre change, parts",
      title: "POS for car service and tyre shops",
      desc: "Labour by the hour, oil changes, diagnostics, tyre changes and tyre storage, parts and materials – on tiles, with stock, QR payments and EET 2.0.",
      preset: "Car service and tyres",
      items: "Mechanic's labour per hour, oil change, diagnostics, air-con recharge, tyre change for 4 wheels, wheel balancing, puncture repair, seasonal tyre storage, engine oil, screenwash and materials.",
      highlights: [
        [
          "Labour and parts on one receipt",
          "Hours of labour, tyre changes and parts are all on tiles. Enter the number of hours or wheels on the keypad with multiplication.",
        ],
        [
          "Parts and oil stock",
          "Stock is switched on: receiving parts with the purchase price, stock counts and minimum stock alerts.",
        ],
        [
          "Parts by barcode",
          "The POS looks up an unknown oil or part barcode on the internet (the shared SuperKasa database is coming soon).",
        ],
        QR_CARD_CUSTOMER,
      ],
      notes: [
        "The POS does not keep job cards or a vehicle register – you ring up labour and parts at payment.",
      ],
    },
    opravna: {
      card: "Repair shop",
      cardDesc: "Shoes, clothes, keys, electronics",
      title: "POS for repair shops and services",
      desc: "Shoe and clothing repairs, keys, bikes, electronics and phones – labour and materials on tiles, stock, QR payments and EET 2.0.",
      preset: "Repair shop",
      items: "Labour per hour, heel replacement, trouser shortening, zip replacement, key cutting and materials.",
    },
    sluzby: {
      card: "Other services",
      cardDesc: "Hourly work, transport…",
      title: "POS for services",
      desc: "Hourly work, transport, consulting or rental – services on tiles, QR payments and EET 2.0.",
      preset: "Other services",
      items: "Labour per hour, transport, consulting and materials.",
    },
  },
};
