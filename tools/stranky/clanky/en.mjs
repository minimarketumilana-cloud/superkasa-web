// Articles in English. Translation of cs.mjs, cs-eet.mjs and cs-pokladna.mjs: same slugs, same sections (id), same number of questions.
// Button and menu names of the POS come from the English column of pokladna/public/js/i18n.js.
const ZAKON = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/Uplne_zneni_Zakon_o_EET.pdf";
const HARMONOGRAM = "https://eet.gov.cz/cs/o-eet/jaky-je-harmonogram-eet-2-0";
const KDO = "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby";
const PRAKTICKE = "https://eet.gov.cz/cs/zacinam-s-eet/prakticke-informace";
const PRIRUCKA = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/Prirucka_EET_2_0.pdf";
const POLOZKY = "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_popis_polozek_datove_zpravy.pdf";

export default {
  ui: {
    title: "Guides for the POS and EET 2.0 | SuperKasa",
    desc: "Clear guides for small shops and businesses: EET 2.0 step by step, receipts, the receipt printer, the barcode scanner and your first day with the POS.",
    h1: "Guides",
    lead: "EET 2.0, receipts, the printer and your first day with the POS. Written for owners of small shops, with links to official sources.",
    groups: [["eet", "EET 2.0 and receipts"], ["pokladna", "The POS in practice"]],
    minutes: "{n} min read",
    updated: "Updated",
    toc: "In this guide",
    faq: "Frequently asked questions",
    sources: "Sources",
    related: "You may also be interested in",
    crumbs: "Breadcrumb navigation",
    disclaimer: "This guide is general information, not legal or tax advice. For your own situation, ask a tax adviser or the tax office (finanční úřad).",
  },
  items: [
  {
    slug: "eet-2-0-pruvodce",
    group: "eet",
    kicker: "Basic guide",
    title: "EET 2.0: what it is, who it applies to and what you must do",
    metaTitle: "EET 2.0: what it is and who it applies to | SuperKasa",
    desc: "EET 2.0 applies from 1 January 2027. Who must register sales, which payments count, what to do in an internet outage, fines and the CZK 5,000 tax credit.",
    lead: "EET 2.0 is the new Czech sales registration, and the duty to register begins on 1 January 2027. It applies to businesses that accept payments in personal contact with the customer or on their premises. Cash is always registered.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 9,
    sections: [
      {
        id: "co-je-eet",
        h2: "What EET 2.0 is and when it starts",
        html: `
<p>EET 2.0 is the Czech electronic sales registration (elektronická evidence tržeb). When a customer pays, your POS or app sends a few details about the payment over the internet to Finanční správa (the Financial Administration, the Czech tax authority). The duty to register sales begins on 1 January 2027. It is set by zákon č. 180/2026 Sb. (Act No. 180/2026 Coll.).</p>
<p>Compared with the original EET, less data is sent, printing a receipt is no longer mandatory and small businesses can use a free state app. Only contact payments (kontaktní platby) are registered.</p>
<ol class="timeline">
  <li><b>1 November 2026</b> In DIS+ (the online tax office) on the MOJE daně (My Taxes) portal you can activate EET, create recording units (evidenční jednotky) and generate a POS certificate (pokladní certifikát).</li>
  <li><b>1 December 2026</b> According to the schedule, the free web app MOJE eet starts running.</li>
  <li><b>1 January 2027</b> The duty to register and normal operation of the system begin.</li>
  <li><b>January 2027</b> Registration runs in pilot mode (pilotní režim), which tests operation in practice. According to the schedule, this is already standard registration.</li>
  <li><b>11 January 2027</b> The last day you can opt into the EET OFF regime for 2027.</li>
</ol>
<aside class="note warn"><p><strong>Pilot mode is not a postponement.</strong> The Finanční správa schedule and the law both count on registration from 1 January 2027. If you find a different start date in an older article, follow the law and the current schedule on eet.gov.cz.</p></aside>`,
      },
      {
        id: "koho-se-tyka",
        h2: "Who EET 2.0 applies to",
        html: `
<p>A business must register sales if it accepts payments for goods or services in the Czech Republic and the payment meets these three conditions:</p>
<ul>
  <li><strong>It is business income.</strong> Wages from employment and rent outside a business are not registered.</li>
  <li><strong>It is a contact payment.</strong> The customer pays in personal contact with you or your staff, or pays on your premises or in your vehicle. Cash is always registered, even without personal contact.</li>
  <li><strong>No exception applies to it.</strong> You will find the exceptions in the next section.</li>
</ul>
<p>It does not matter whether you are a self-employed person (OSVČ) or a limited liability company (s.r.o.). It also does not matter whether you are a VAT payer (plátce DPH). The same rules apply to foreigners who have business income in the Czech Republic and take payments here.</p>
<ul>
  <li><strong>Convenience store:</strong> the customer pays in cash or by card at the till. Both payments are registered.</li>
  <li><strong>Hairdresser:</strong> the customer pays by card in the salon, or in cash at her own home. Both are registered.</li>
  <li><strong>Bistro:</strong> the guest pays on the spot by card, meal voucher or QR code. All these payments are registered.</li>
</ul>`,
      },
      {
        id: "koho-se-netyka",
        h2: "Who and what does not have to be registered",
        html: `
<p>There are few exceptions. The full list is on the page <a href="https://eet.gov.cz/cs/koho-se-eet-tyka/co-je-z-evidence-trzeb-vyjmuto" rel="noopener">Co je z evidence tržeb vyjmuto</a> (What is exempt from sales registration). These are the most common ones for small businesses:</p>
<ul>
  <li><strong>The EET OFF regime.</strong> A self-employed person in band 1 of the flat-rate tax (paušální daň) with income up to CZK 1 million can pay a surcharge instead of registering. The conditions are in the article <a href="eet-off-pausalni-dan.html">The EET OFF regime</a>.</li>
  <li><strong>Vending machines.</strong> For example a machine for coffee, packaged drinks or baguettes, if it is a separate business premises (provozovna) under živnostenský zákon (the Trade Licensing Act). A machine that is only part of your shop has no exception. Self-service checkouts, petrol stations, car washes and laundries have none either.</li>
  <li><strong>Public toilets.</strong></li>
  <li><strong>Freshwater fish before Christmas.</strong> Sales from 18 to 24 December on premises where only this fish and related services are sold in that period.</li>
  <li><strong>Blind business owners.</strong> This applies under the exact conditions of the law, for example without employees. The conditions are in § 11 of the law.</li>
  <li><strong>New legal entity.</strong> Sales until the VAT ID (DIČ) is assigned and for 10 more days after that.</li>
  <li><strong>One-off income.</strong> This is an exceptional and unexpected payment that your normal business does not count on. It does not apply to income that repeats.</li>
</ul>
<p>Sales of the state, municipalities, banks, insurance companies, gambling and postal services are also exempt from registration.</p>
<aside class="note"><p>If you are not sure, register the sale. Finanční správa says on its website that it will not dispute registration beyond the duty. You may register only the data set by law.</p></aside>`,
      },
      {
        id: "co-se-eviduje",
        h2: "Which payments are registered and which are not",
        html: `
<p>What counts is how and where the customer pays. The type of goods does not matter.</p>
<div class="tbl"><table>
  <thead><tr><th>Payment</th><th>Register</th></tr></thead>
  <tbody>
    <tr><td>Cash in a shop, in a salon or at the customer's home</td><td>Yes</td></tr>
    <tr><td>Payment card or phone on a terminal</td><td>Yes</td></tr>
    <tr><td>QR code or transfer paid directly on your premises</td><td>Yes</td></tr>
    <tr><td>Meal vouchers, vouchers, tokens, gift cards and prepaid cards</td><td>Yes</td></tr>
    <tr><td>Cheque, bill of exchange, crypto-assets</td><td>Yes</td></tr>
    <tr><td>E-shop order that the customer pays for only on collection in the shop</td><td>Yes</td></tr>
    <tr><td>Payment through a payment gateway or QR code on the e-shop website</td><td>No</td></tr>
    <tr><td>Transfer for an invoice that the customer sends from home or from the office</td><td>No</td></tr>
    <tr><td>Cash on delivery that a postal service operator takes from the customer and sends to your account</td><td>No</td></tr>
  </tbody>
</table></div>
<h3>Amounts and special cases</h3>
<ul>
  <li><strong>Amount including VAT.</strong> The total amount is registered. VAT is not broken down by rate.</li>
  <li><strong>Amount actually received.</strong> A purchase of CZK 81.60 paid in cash with CZK 82 is registered as CZK 82. CZK 81.60 paid by card is registered exactly. After a discount, the price after the discount is registered.</li>
  <li><strong>Two payment methods.</strong> The customer pays CZK 100 with a meal voucher and CZK 450 by card. You register one sale of CZK 550.</li>
  <li><strong>Refunds.</strong> Returned goods or a void are registered as a negative sale.</li>
  <li><strong>Returnable packaging.</strong> The deposit is part of the sale. A returned deposit is registered as a negative amount, or it is deducted from the purchase.</li>
  <li><strong>Advance payment and balance.</strong> Each payment is a separate sale. An advance sent by transfer from home does not have to be registered. The balance paid in cash in the shop does.</li>
  <li><strong>Security deposit (kauce).</strong> It is not registered when paid in or when returned. Only the amount you use as payment is registered, for example for damage, if you accepted the deposit as a contact payment.</li>
  <li><strong>Gift voucher for specific goods or a specific service.</strong> Buying the voucher is registered. Using the voucher is no longer registered.</li>
  <li><strong>Tips.</strong> It depends on who they belong to. If the business keeps them, they are registered. If employees get them, you do not have to register them, but you may.</li>
</ul>
<h3>What is sent to EET</h3>
<p>The data sent are your VAT ID (DIČ), the recording unit number, the POS device identifier, the sale's serial number, the date and time, the total amount and the message identifier. Loading credit and using credit have their own amounts.</p>
<p>The list of goods, customer details and the payment method are not sent.</p>`,
      },
      {
        id: "jak-probiha",
        h2: "How registration works at the till",
        html: `
<ol class="steps">
  <li>The customer pays and you enter the payment into the POS.</li>
  <li>The POS creates a message, signs it with the POS certificate and sends it to Finanční správa.</li>
  <li>Finanční správa checks the message and returns a confirmation code called POK. If the message contains an error, it returns an error code.</li>
  <li>The sale is registered. You will find an overview in DIS+ under Evidence tržeb (Sales registration).</li>
</ol>
<p>The law says you must register a sale at the latest when it takes place. For a card payment this is usually the moment you enter the payment order. A well-configured POS sends everything by itself and does not slow down the sale.</p>
<p>The POS has a maximum response time (mezní doba odezvy). This is the time the POS waits for the POK. The law sets at least 2 seconds. Set the time according to the quality of your internet connection.</p>
<p>The POK does not have to be on the receipt and the law does not order you to keep it. The EET law also does not impose a duty to issue a receipt. However, another law may require a document. Details are in the article <a href="co-musi-byt-na-uctence.html">What must be on a receipt</a>.</p>`,
      },
      {
        id: "vypadek-48-hodin",
        h2: "Internet outage and the 48-hour deadline",
        html: `
<p>If the internet goes down, keep selling. Send the sales as soon as the connection returns, at the latest within 48 hours of the sale. Most POS systems do this by themselves.</p>
<p>An example from the Finanční správa documentation: a shop accepted cash on 25 April 2027 at 15:30. The internet came back the next day at 9:30 and the sale was sent at that moment. In this case the 48-hour deadline would have ended on 27 April 2027 at 15:30.</p>
<p>After 48 hours the duty does not end. You must still send the sale.</p>
<h3>POS failure</h3>
<p>You do not have to close your premises because of a failure. Finanční správa recommends this procedure:</p>
<ul>
  <li>Call your supplier or service company immediately.</li>
  <li>Write down the sales details so that you can register them later.</li>
  <li>Keep a document about the failure, for example a service report or a confirmation from the electricity supplier.</li>
  <li>After the repair, register all sales. Each one is registered separately. A total amount can be used only exceptionally, by agreement with the tax authority (správce daně).</li>
</ul>
<p>If a sale is sent twice with the same basic data, the system marks it as a duplicate and does not include it in the totals.</p>`,
      },
      {
        id: "pokuty-kontroly",
        h2: "Fines and inspections",
        html: `
<p>For breaking the duty to send sales data, a fine of up to CZK 500,000 can be imposed. The same upper limit applies to seriously obstructing or defeating the registration. This is the highest possible amount, not a fixed rate.</p>
<p>Compliance is checked by tax offices (finanční úřady) and customs offices (celní úřady). A customs office can impose a fine by an on-the-spot order (příkaz na místě).</p>
<p>The EET 2.0 handbook says that in the initial phase Finanční správa will focus mainly on supporting businesses and giving advice, not on penalties. However, the law does not set any period without fines.</p>`,
      },
      {
        id: "sleva-5000",
        h2: "Tax credit of up to CZK 5,000",
        html: `
<p>The tax credit (sleva na dani) is in zákon o daních z příjmů (the Income Tax Act). It can be used by business owners who are natural persons and file a tax return. A limited liability company (s.r.o.) does not have it. You claim it once, for the first year in which you are required to register a sale. For most business owners this will be 2027.</p>
<p>A self-employed person (OSVČ) whose tax equals the flat-rate tax cannot claim it, because they do not file a return. This is our reading of the law. Finanční správa does not state it explicitly. Check it with the tax office (finanční úřad) or your accountant.</p>
<p>The credit does not depend on the number of POS devices or on whether you registered sales in the original EET. It also does not matter whether you are a VAT payer.</p>
<p>The amount of the credit is calculated like this: 15% of the partial tax base from self-employment (dílčí základ daně ze samostatné činnosti) minus the basic taxpayer credit (základní sleva na poplatníka), which is <a href="https://e-sbirka.gov.cz/sb/1992/586/2027-01-01#par_35ba" rel="noopener">CZK 30,840</a>. The credit is at most CZK 5,000.</p>
<div class="tbl"><table>
  <thead><tr><th>Partial tax base</th><th>15%</th><th>After deducting CZK 30,840</th><th>Credit</th></tr></thead>
  <tbody>
    <tr><td>CZK 300,000</td><td>CZK 45,000</td><td>CZK 14,160</td><td>CZK 5,000</td></tr>
    <tr><td>CZK 220,000</td><td>CZK 33,000</td><td>CZK 2,160</td><td>CZK 2,160</td></tr>
    <tr><td>CZK 200,000</td><td>CZK 30,000</td><td>negative number</td><td>CZK 0</td></tr>
  </tbody>
</table></div>
<p>Check how to claim it with your accountant or tax adviser.</p>`,
      },
      {
        id: "co-je-potreba",
        h2: "What you need to register sales",
        html: `
<ul>
  <li><strong>Access to DIS+</strong> on the MOJE daně portal.</li>
  <li><strong>A recording unit (evidenční jednotka).</strong> This is usually your shop or other premises.</li>
  <li><strong>A POS certificate (pokladní certifikát).</strong> It is free. Without it, the POS will not send sales.</li>
  <li><strong>A device with internet.</strong> It can be a POS, a computer, a tablet or a phone with suitable software.</li>
</ul>
<p>You usually do not have to buy a new POS. If you already have one, ask your supplier whether it will support EET 2.0. The exact procedure is in the article <a href="eet-2-0-krok-za-krokem.html">EET 2.0 step by step</a>. The differences between the state app and a POS are described in the article <a href="moje-eet-nebo-pokladna.html">MOJE eet or a POS system</a>.</p>
<p>If you are still choosing a POS, SuperKasa has EET 2.0 in every plan and we have tested the connection in the Finanční správa test environment. You will find prices on the <a href="cenik.html">pricing page</a>.</p>`,
      },
    ],
    faq: [
      ["Must I register sales in January 2027 if pilot mode is running?", "Yes. According to the Finanční správa schedule, January is pilot mode, but it is already standard registration. The law sets the duty from 1 January 2027 and contains no postponement."],
      ["Must I print a receipt because of EET?", "No. The sales registration law does not order a receipt. However, a duty to issue a document may arise under zákon o DPH (the VAT Act) or zákon o ochraně spotřebitele (the Consumer Protection Act)."],
      ["Must I buy a new POS because of EET 2.0?", "In most cases, no. You choose the device yourself. Suitable software and internet are enough. With an old POS, an update from the supplier usually helps."],
      ["Is a card payment registered?", "Yes, when the customer pays by card on your premises or in personal contact. A card payment through a payment gateway on an e-shop website is not registered."],
      ["Are tips registered?", "It depends on who they belong to. Tips kept by the business are registered. Tips for employees do not have to be registered, but you can register them if you want an overview."],
      ["Must a VAT non-payer register sales too?", "Yes. The duty does not depend on VAT registration. The only exception is a self-employed person (OSVČ) who meets the conditions and opts into the EET OFF regime."],
    ],
    sources: [
      ["Zákon č. 180/2026 Sb., o evidenci tržeb (Act on Sales Registration), full text (eet.gov.cz)", ZAKON],
      ["EET 2.0 schedule (Finanční správa)", HARMONOGRAM],
      ["Who must register sales (Finanční správa)", KDO],
      ["Practical information: outage, failure, tax credit (Finanční správa)", PRAKTICKE],
      ["EET 2.0 handbook (Finanční správa)", PRIRUCKA],
      ["Description of data message items with examples (Finanční správa)", POLOZKY],
    ],
    related: ["eet-2-0-krok-za-krokem", "eet-off-pausalni-dan", "moje-eet-nebo-pokladna"],
  },

  {
    slug: "eet-2-0-krok-za-krokem",
    group: "eet",
    kicker: "Step by step",
    title: "EET 2.0 step by step: DIS+, recording unit and POS certificate",
    metaTitle: "EET 2.0 step by step: DIS+ and certificate | SuperKasa",
    desc: "How to set up EET 2.0: logging in to DIS+, creating a recording unit, the .p12 POS certificate and password, uploading it and testing in verification mode.",
    lead: "To register sales you need access to DIS+, a recording unit and a POS certificate. From 1 November 2026 you can arrange this online on the MOJE daně portal, and the certificate is free.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 9,
    sections: [
      {
        id: "prehled-kroku",
        h2: "Six steps in this order",
        html: `
<p>First you create a recording unit (evidenční jednotka), then you generate a POS certificate (pokladní certifikát). You cannot change this order. It is set by law, and DIS+ shows you certificates only after the first unit has been created.</p>
<ol class="steps">
  <li>You log in to DIS+ on the MOJE daně (My Taxes) portal.</li>
  <li>You activate EET in DIS+.</li>
  <li>You create a recording unit.</li>
  <li>You generate a POS certificate and save the .p12 file with its password.</li>
  <li>You upload the certificate to the POS.</li>
  <li>You test the connection with a dry run.</li>
</ol>
<aside class="note"><p>If you will use the state app MOJE eet, you do not have to do steps 4 and 5. According to Finanční správa (the Financial Administration, the Czech tax authority), the app arranges the certificate by itself after it is paired with DIS+. There is a comparison in the article <a href="moje-eet-nebo-pokladna.html">MOJE eet or a POS system</a>.</p></aside>`,
      },
      {
        id: "prihlaseni-dis",
        h2: "Step 1: logging in to DIS+ on mojedane.gov.cz",
        html: `
<p>DIS+ is the daňová informační schránka plus (tax information box plus). It is the online office of Finanční správa. Open <a href="https://mojedane.gov.cz" rel="noopener">mojedane.gov.cz</a> and click the Online finanční úřad (Online tax office) tile. You can log in in three ways:</p>
<ul>
  <li>with a citizen identity (identita občana), for example a bank identity (bankovní identita) or eObčanka (the Czech electronic ID card),</li>
  <li>with your login details for a data box (datová schránka),</li>
  <li>with access details issued to you by Finanční správa.</li>
</ul>
<p>If you have not activated DIS+ yet, click the Aktivovat (Activate) button after logging in. The box will be available within 48 hours at the latest. If the tax office (finanční úřad) does not have you on its records at all yet, the process can take up to 5 working days.</p>
<h3>Without a citizen identity and without a data box</h3>
<p>This procedure is used mainly by foreigners. First you apply for access details:</p>
<ol class="steps">
  <li>On the portal, click Online finanční úřad (Online tax office) and then Jak získat přístup do DIS+ (How to get access to DIS+).</li>
  <li>Under the option Přístupové údaje přidělené Finanční správou ČR (Access details issued by Finanční správa), open Více informací (More information) and fill in the application. You need an e-mail address, a mobile phone and a password that you choose.</li>
  <li>Enter your details exactly as they are in your identity document. Errors in a submitted application cannot be corrected. You must submit a new one.</li>
  <li>Save the username and the application identifier.</li>
  <li>Within 30 days, visit any local branch (územní pracoviště) of a tax office in person. Bring your identity document.</li>
</ol>
<p>The same person who submitted the application must come to the office. They can be represented by an authorised representative (zmocněnec) with an officially certified power of attorney (úředně ověřená plná moc). For a lawyer or tax adviser, official certification is not required.</p>`,
      },
      {
        id: "aktivace-eet",
        h2: "Step 2: activating EET in DIS+",
        html: `
<p>At the top of the DIS+ page, click the AKTIVOVAT EET (Activate EET) button and confirm your choice in the new window. A window with the basic steps then appears. Close it with the ROZUMÍM (I understand) button.</p>
<p>You are now signed up for sales registration. You will find the EVIDENCE TRŽEB (Sales registration) tab next to the magnifying glass icon. At the start you will see only the tiles Údaje o poplatníkovi a správa EET (Taxpayer details and EET management) and Správa evidenčních jednotek (Recording unit management). The exact procedure is in the guide <a href="https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jak-aktivuji-elektronickou-evidenci-trze-4762" rel="noopener">Jak aktivuji elektronickou evidenci tržeb</a> (How do I activate electronic sales registration).</p>`,
      },
      {
        id: "evidencni-jednotka",
        h2: "Step 3: the recording unit and its types",
        html: `
<p>A recording unit (evidenční jednotka) is the place or way in which you sell. For a convenience store it is the shop. For a tradesperson who works at customers' homes, it is the person themselves. In DIS+ you choose from six types:</p>
<div class="tbl"><table>
  <thead><tr><th>Type</th><th>Example</th><th>What you fill in</th></tr></thead>
  <tbody>
    <tr><td>Pevná provozovna (fixed premises)</td><td>Convenience store, hair salon, bistro</td><td>Address of the premises</td></tr>
    <tr><td>Mobilní provozovna (mobile premises)</td><td>Stall without a fixed base, food truck</td><td>Description of the location</td></tr>
    <tr><td>Automat (vending machine)</td><td>Vending machine or self-service device</td><td>Address or description of the location</td></tr>
    <tr><td>Internetová stránka nebo aplikace (website or app)</td><td>E-shop</td><td>URL address</td></tr>
    <tr><td>Dopravní prostředek (vehicle)</td><td>Taxi, sightseeing boat</td><td>Type and registration plate or other identification</td></tr>
    <tr><td>Poplatník (taxpayer)</td><td>Tradesperson or masseur at the customer's place</td><td>Registered address (sídlo)</td></tr>
  </tbody>
</table></div>
<h3>How to create a unit</h3>
<ol class="steps">
  <li>On the EVIDENCE TRŽEB (Sales registration) tab, open Správa evidenčních jednotek (Recording unit management) and click NOVÁ EVIDENČNÍ JEDNOTKA (New recording unit).</li>
  <li>Select the type of unit.</li>
  <li>Fill in the main type of activity. Start typing and suggestions will help you.</li>
  <li>You can add a name, for example “Praha – prodejna” (Prague shop). It is not mandatory, but it will be useful in the sales overview.</li>
  <li>Mark whether registered sales take place in the unit. Most business owners answer Ne (No) to the question about accepting sales on behalf of another taxpayer.</li>
  <li>Fill in the address or other identification of the unit and click DOKONČIT A PŘIDAT (Finish and add).</li>
</ol>
<p>After saving, the system assigns a number to the unit. Your POS needs this number, because it is sent with every sale. Details are in the guide <a href="https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jak-zalozim-evidencni-jednotku-4764" rel="noopener">Jak založím evidenční jednotku</a> (How do I create a recording unit).</p>
<h3>Report all units, including an e-shop</h3>
<p>If you have at least one unit with registered sales, you must report all units through which you have sales. Example: a convenience store has a shop and an e-shop with online payment. It creates two units. For the shop it states that it accepts registered sales. For the e-shop it states that it accepts only payments that are not registered.</p>
<p>If you have no registered sales, the reporting duty does not apply to you. If you have many units, you can import them from a CSV file.</p>
<h3>Changes to a unit</h3>
<p>Report a change of details in DIS+ before the first registered sale after the change, at the latest within 15 days. According to Finanční správa, the same 15-day deadline also applies to interrupting the activity or closing a unit.</p>`,
      },
      {
        id: "pokladni-certifikat",
        h2: "Step 4: the POS certificate, password and .p12 file",
        html: `
<p>A POS certificate (pokladní certifikát) is the electronic signature of your POS. It tells the system that you are sending the message and that nobody has changed it on the way. It is free, and the law requires you to get it before your first registered sale.</p>
<ol class="steps">
  <li>On the EVIDENCE TRŽEB (Sales registration) tab, click the POKLADNÍ CERTIFIKÁTY (POS certificates) tile.</li>
  <li>Click VYTVOŘIT NOVÝ CERTIFIKÁT (Create new certificate).</li>
  <li>Fill in your e-mail address. A warning about the end of validity will come to it. It cannot be added later.</li>
  <li>You can add a certificate label, for example “Pokladna prodejna” (Shop POS). It has at most 64 characters.</li>
  <li>Click VYTVOŘIT CERTIFIKÁT (Create certificate). It is usually ready within 30 seconds.</li>
  <li>Click ZOBRAZIT HESLO A STÁHNOUT CERTIFIKÁT (Show password and download certificate). A file with the .p12 extension downloads to your computer.</li>
  <li>Save the password from the green field. Without it, you cannot use the certificate in the POS.</li>
  <li>Tick the confirmation that you have safely saved both the password and the certificate, and click DOKONČIT (Finish).</li>
</ol>
<aside class="note warn"><p><strong>You can get the file and password only until you confirm the download.</strong> After confirmation the system deletes them and you cannot download them again. If you do not confirm the download, they stay in the application for at most 30 days from the issue of the certificate. Before you click DOKONČIT (Finish), check that you really have both the file and the password saved.</p></aside>
<p>If you do not have your computer with you, choose VYŘÍDÍM POZDĚJI (I will do it later) and come back to the download another time. If the system is overloaded, you will get an e-mail saying the certificate is ready. We take the button names from Finanční správa guides, and they may differ slightly in the application.</p>
<h3>Validity and protection of the certificate</h3>
<ul>
  <li><strong>Validity.</strong> The certificate is valid for 366 days. For automatic renewal, the certification authority recommends a date 2 to 3 weeks before the end of validity. A certificate that has expired cannot be renewed. You must create a new one.</li>
  <li><strong>Renewal.</strong> Some POS systems can do this by themselves. Otherwise, you create a new certificate by hand and upload it.</li>
  <li><strong>Number.</strong> One certificate can be used for one or more POS devices. You can also create several certificates.</li>
  <li><strong>Security.</strong> Protect the file and the password, and do not send them unsecured. This is your legal duty. You must report misuse, or a threat of misuse, to the tax authority (správce daně) without undue delay.</li>
  <li><strong>Loss.</strong> If you lose a POS or suspect misuse, revoke the certificate. This step cannot be undone. Then create a new one.</li>
</ul>`,
      },
      {
        id: "nahrani-do-pokladny",
        h2: "Step 5: uploading the certificate to the POS",
        html: `
<p>The procedure depends on the POS, so follow your supplier's guide. For most solutions you need this information:</p>
<ul>
  <li>the .p12 file,</li>
  <li>the password for the file,</li>
  <li>the recording unit number from DIS+.</li>
</ul>
<p>Check that the POS states the correct unit. If you have two premises, the sales of each must go under its own number. In the overview in DIS+ you will then see whether sales are assigned correctly.</p>
<p>Also check the maximum response time (mezní doba odezvy). It must be at least 2 seconds.</p>`,
      },
      {
        id: "zkouska-nanecisto",
        h2: "Step 6: a dry run in verification mode",
        html: `
<p>Verification mode (ověřovací mód) is a test way of sending. The POS sends a message to the system and the system only checks that it can process it. The message is not accepted as a registered sale.</p>
<p>The test checks your settings and connection. It does not fulfil the duty to register. So before live operation, switch the POS to normal mode.</p>
<p>In SuperKasa, this test is the <strong>Verify connection</strong> button in Admin → EET 2.0. Until the end of 2026 you can also switch on Dry run mode, in which real sales go to verification mode. From 1 January 2027 this mode cannot be switched on. For other POS systems, ask your supplier how to start the test.</p>
<aside class="note"><p>In its <a href="https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_pristupove_provozni_informace_produk-2.pdf" rel="noopener">operating information</a>, Finanční správa states that the live environment is expected to start for the public by 1 January 2027. If the test does not work straight after the certificate is issued and your settings are correct, try again later and contact your supplier if needed.</p></aside>`,
      },
      {
        id: "do-1-ledna",
        h2: "What to do by 1 January 2027",
        html: `
<ol class="timeline">
  <li><b>Now</b> Check whether registration applies to you. Decide between a POS, the MOJE eet app and the EET OFF regime. Ask your POS supplier whether it will support EET 2.0.</li>
  <li><b>November 2026</b> Arrange access to DIS+, activate EET, create units and generate a certificate. New companies and foreigners especially should not wait, because access can take longer.</li>
  <li><b>1 December 2026</b> According to the schedule, MOJE eet starts running.</li>
  <li><b>December 2026</b> Upload the certificate, do a dry run and show your staff what to do in an internet outage.</li>
  <li><b>1 January 2027</b> Start registering from the first sale. Check that the POS is receiving the POK (the confirmation code). After the first sales, the SOUČTY (Totals) and TRŽBY (Sales) tiles become available in DIS+.</li>
</ol>
<p>According to the schedule, the January pilot mode (pilotní režim) is standard registration. So do not leave your preparation until January.</p>`,
      },
      {
        id: "kontrolni-seznam",
        h2: "Checklist",
        html: `
<ul>
  <li>I have access to DIS+.</li>
  <li>I have activated EET in DIS+.</li>
  <li>I have reported all recording units through which I have sales, including an e-shop.</li>
  <li>I have generated a POS certificate with my e-mail address filled in.</li>
  <li>The .p12 file and password are safely stored outside the POS.</li>
  <li>The certificate and recording unit number are in the POS.</li>
  <li>The dry run went without errors.</li>
  <li>The POS is switched to live mode for the first sale of 2027.</li>
  <li>Staff know that during an internet outage they keep selling and that sales must be sent within 48 hours.</li>
  <li>I have the certificate's expiry date in my calendar.</li>
</ul>`,
      },
    ],
    faq: [
      ["How much does a POS certificate cost?", "Nothing. You create the certificate free of charge through DIS+ on the MOJE daně portal."],
      ["How many certificates do I need for two POS devices?", "One is enough. A certificate can be used for one or more POS devices. If you want to keep the devices separate, you can also create several certificates."],
      ["I lost the certificate password. What should I do?", "After you confirm the download, you cannot get the password or the file again. Create a new certificate and upload it to the POS. If there is a risk of misuse of the old one, revoke it in the Správa pokladních certifikátů EET (EET POS certificate management) application."],
      ["How long is a POS certificate valid?", "According to the certificate policy, 366 days. An e-mail warns you about the end of validity, if you filled in your address when creating the certificate."],
      ["Must I create a recording unit for an e-shop?", "Yes, if you have registered sales in another unit, for example in a shop. If you sell only through an e-shop with online payments and have no registered sales, the reporting duty does not apply to you."],
      ["Must a foreigner have a bank identity?", "No. They can apply for access details from Finanční správa. Within 30 days of the application they must visit a local branch (územní pracoviště) of a tax office in person with an identity document."],
    ],
    sources: [
      ["Zákon č. 180/2026 Sb. (Act on Sales Registration), § 14, 15, 19 and 20 (eet.gov.cz)", ZAKON],
      ["How to start registering (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/jak-zacit-evidovat"],
      ["Leaflet: The recording unit in EET 2.0 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-media/Evidencni_jednotka_EET_2.0.pdf"],
      ["Procedures for obtaining a POS certificate (CA EET)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/CAEET_postupy_zadost_certifikat_v2.pdf"],
      ["How do I generate a POS certificate? (MOJE daně)", "https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/pokladni-certifikaty/jak-vygeneruji-pokladni-certifikat_-2-4771"],
      ["Public summary of the certificate policy: 366-day validity (CA EET)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/CAEET_certifikacni_politika_v1.pdf"],
      ["Data interface description: verification mode, chapter 2.2 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_popis_rozhrani_v1.2.pdf"],
    ],
    related: ["eet-2-0-pruvodce", "moje-eet-nebo-pokladna", "navod-superkasa"],
  },

  {
    slug: "eet-off-pausalni-dan",
    group: "eet",
    kicker: "The EET OFF regime",
    title: "The EET OFF regime: who does not have to register sales and what it costs",
    metaTitle: "EET OFF: conditions, deadlines and surcharge | SuperKasa",
    desc: "EET OFF is for self-employed people in flat-rate band 1 with income up to CZK 1 million. Surcharge CZK 1,400 a month. Opt in for 2027 by 11 January 2027.",
    lead: "In the EET OFF regime you do not register sales and you pay a surcharge of CZK 1,400 a month on top of the flat-rate tax. It is only for self-employed people in band 1 of the flat-rate regime with income up to CZK 1 million, and for 2027 you must opt in by 11 January 2027 at the latest.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 8,
    sections: [
      {
        id: "co-je-eet-off",
        h2: "What EET OFF is and what it costs",
        html: `
<p>EET OFF is a voluntary regime for the smallest self-employed people (OSVČ). Instead of registering individual sales, you pay a higher flat-rate tax (paušální daň). You then do not have to register any payments, not even cash.</p>
<p>The flat-rate regime (paušální režim) is a simplified way of paying. Each month you send one advance payment (záloha) that covers tax, pension insurance and health insurance. It is due by the 20th day of the month. If you are in EET OFF, the tax advance is higher by the surcharge (přirážka).</p>
<div class="tbl"><table>
  <thead><tr><th>Item</th><th>Per month</th><th>For a whole year</th></tr></thead>
  <tbody>
    <tr><td>Tax in band 1 without surcharge</td><td>CZK 100</td><td>CZK 1,200</td></tr>
    <tr><td>EET OFF surcharge</td><td>CZK 1,400</td><td>CZK 16,800</td></tr>
    <tr><td>Total tax</td><td>CZK 1,500</td><td>CZK 18,000</td></tr>
    <tr><td>Social and health insurance</td><td>under the current rules</td><td>under the current rules</td></tr>
  </tbody>
</table></div>
<p>So EET OFF costs you CZK 16,800 a year more than normal band 1. Opting in does not change your insurance contributions.</p>`,
      },
      {
        id: "kdo-ma-narok",
        h2: "Who is entitled to EET OFF",
        html: `
<p>You must meet all these conditions:</p>
<ul>
  <li><strong>You are a natural person.</strong> The regime is not for a limited liability company (s.r.o.) or other legal entities.</li>
  <li><strong>You are in band 1 of the flat-rate regime.</strong> Under <a href="https://e-sbirka.gov.cz/sb/1992/586/2027-01-01#par_2a" rel="noopener">§ 2a of zákon o daních z příjmů</a> (the Income Tax Act), the flat-rate regime is, among other things, only for VAT non-payers (neplátci DPH).</li>
  <li><strong>Your income from self-employment for the previous year did not exceed CZK 1,000,000.</strong> For 2027, the year that counts is 2026. It does not matter which self-employed activity the income comes from.</li>
  <li><strong>You file the notice on time.</strong> Without it, the regime does not start.</li>
</ul>
<aside class="note warn"><p><strong>Watch out for the different limits.</strong> Depending on your type of activity, you can be in band 1 of the flat-rate regime even with income up to CZK 1.5 or 2 million. For EET OFF, however, the limit of CZK 1 million applies to everyone.</p></aside>
<p>If you are not in the flat-rate regime yet, also check its other conditions. You must be a self-employed person with pension and health insurance. You must not be a VAT payer (plátce DPH), a partner in a general partnership (veřejná obchodní společnost) or a general partner in a limited partnership (komanditní společnost). There must be no insolvency proceedings against you. You must not have income from employment, except for exceptions in the law. Other income, for example from rent, may be at most CZK 50,000 a year.</p>
<div class="tbl"><table>
  <thead><tr><th>Example</th><th>EET OFF</th></tr></thead>
  <tbody>
    <tr><td>Hairdresser, self-employed in band 1 of the flat-rate regime, total income for 2026 of CZK 800,000</td><td>Can use it</td></tr>
    <tr><td>Stall, self-employed in band 1 of the flat-rate regime, total income for 2026 of CZK 1,200,000</td><td>Cannot, income exceeded the limit</td></tr>
    <tr><td>Convenience store, self-employed and a VAT payer</td><td>Cannot, a VAT payer is not in the flat-rate regime</td></tr>
    <tr><td>Bistro as a limited liability company (s.r.o.)</td><td>Cannot, it is not a natural person</td></tr>
  </tbody>
</table></div>`,
      },
      {
        id: "lhuty",
        h2: "Deadlines for opting in and out",
        html: `
<p>The law gives a deadline of the tenth day of the tax period (zdaňovací období), which means the calendar year. In 2027, 10 January is a Sunday, and Finanční správa (the Financial Administration, the Czech tax authority) gives the date 11 January 2027.</p>
<div class="tbl"><table>
  <thead><tr><th>Situation</th><th>Deadline</th></tr></thead>
  <tbody>
    <tr><td>Opting in for 2027</td><td>By 11 January 2027</td></tr>
    <tr><td>Opting in for later years</td><td>By the tenth day of the year from which you opt in</td></tr>
    <tr><td>Starting your activity during the year and entering band 1</td><td>In the notice of entry into the flat-rate regime, at the latest on the day you start your activity</td></tr>
    <tr><td>Voluntary opting out</td><td>By the tenth day of the following year, so after 2027 by 10 January 2028</td></tr>
    <tr><td>Exceeding CZK 1 million while you stay in band 1</td><td>Notice within 15 days of the day this happened</td></tr>
  </tbody>
</table></div>
<aside class="note warn"><p><strong>A late notice has no effect.</strong> The delay cannot be put right and you can no longer opt in for that year. It is better to file it in December or at the start of January.</p></aside>
<p>Opting in always applies from the start of the year, even if you file the notice in January. The exception is starting your activity during the year, when you can opt in during that year. Opting in continues in later years until you opt out on time or the regime ends for another reason.</p>
<p>Example: a hairdresser files the notice on 15 December 2026 and states the year 2027. From 1 January 2027 she does not register sales and in January she pays the advance with the surcharge for the first time. The same hairdresser would gain nothing from a notice on 12 January 2027, because it would be after the deadline. She would have to register sales for the whole of 2027.</p>`,
      },
      {
        id: "jak-se-prihlasit",
        h2: "How to opt into EET OFF",
        html: `
<p>The way depends on whether you are already in the flat-rate regime:</p>
<ul>
  <li><strong>You are in band 1:</strong> you file an Oznámení o přihlášení k přirážce (notice of opting into the surcharge).</li>
  <li><strong>You are moving from band 2 or 3 to band 1:</strong> you opt in in the oznámení o změně pásma (notice of band change).</li>
  <li><strong>You are only now entering the flat-rate regime:</strong> you opt in in the oznámení o vstupu do paušálního režimu (notice of entry into the flat-rate regime). You must use the prescribed form.</li>
</ul>
<p>The Oznámení o přihlášení k přirážce has no prescribed form. It must state the year from which you opt in. Finanční správa is preparing an optional form, which it will publish on its website.</p>
<p>You file the notice electronically, by post to the relevant tax office (finanční úřad) or in person at the filing office (podatelna). A self-employed person who has a data box (datová schránka) set up by law must file the notice electronically.</p>
<ol class="steps">
  <li>Look at your income from self-employment for the previous year.</li>
  <li>Check that you are in band 1 of the flat-rate regime.</li>
  <li>Work out whether the surcharge is worth it for you.</li>
  <li>File the notice and keep the confirmation of filing.</li>
  <li>Change your regular advance payment, because it goes up by the surcharge.</li>
</ol>`,
      },
      {
        id: "odhlaseni-a-konec",
        h2: "How to opt out and when the regime ends",
        html: `
<p>EET OFF cannot be changed during the year. If you want to end it, you file an Oznámení o odhlášení z přirážky (notice of opting out of the surcharge) and state the year after which you are ending it. The deadline is the tenth day of the following year. A late notice has no effect.</p>
<p>Example: you want to start registering sales in 2028. By 10 January 2028 you file a notice that you are ending the surcharge at the end of 2027. From 1 January 2028 you register sales.</p>
<p>The regime also ends in two other cases:</p>
<ul>
  <li><strong>You exceed CZK 1 million.</strong> You pay the surcharge until the end of the year and start registering sales from the following year. Example: your income exceeds the limit in October 2027. You pay the surcharge until December 2027 and register sales from 1 January 2028.</li>
  <li><strong>You stop being in band 1 of the flat-rate regime.</strong> The surcharge ends at the end of the month or year in which you stopped being in band 1. After that you must register sales. If you leave the flat-rate regime completely, EET OFF and the surcharge end automatically with it.</li>
</ul>
<p>When EET OFF is ending, prepare in time. Before the first registered sale, you must have reported your recording units (evidenční jednotky) and have a POS certificate (pokladní certifikát). The procedure is in the article <a href="eet-2-0-krok-za-krokem.html">EET 2.0 step by step</a>.</p>
<p>If you interrupt your activity during the year and start it again in the same year, you are opted into the surcharge again automatically. However, you must file a notice of entry into the flat-rate regime and state band 1 in it.</p>`,
      },
      {
        id: "na-co-si-dat-pozor",
        h2: "What to watch out for",
        html: `
<ul>
  <li><strong>The surcharge is paid regardless of turnover.</strong> If you have few customers, it is still CZK 16,800 a year. Compare this with what registration would cost you. The state app <a href="moje-eet-nebo-pokladna.html">MOJE eet</a> is to be free for small businesses, and all you need is a device with internet. If you already use a POS, work out the yearly cost of the licence and updates.</li>
  <li><strong>The sales registration tax credit.</strong> In the flat-rate regime the credit is not claimed, whether you register sales or not. Do not include it when comparing with the surcharge. This is our reading of the law. Check it with the tax office or your accountant.</li>
  <li><strong>EET OFF does not cancel receipts.</strong> If a consumer asks, you must issue a proof of purchase (doklad o koupi) under zákon o ochraně spotřebitele (the Consumer Protection Act). There is more in the article <a href="co-musi-byt-na-uctence.html">What must be on a receipt</a>.</li>
  <li><strong>You do not report recording units.</strong> Without registered sales, the reporting duty in DIS+ does not apply to you and you do not need a certificate.</li>
  <li><strong>Watch your income during the year.</strong> Exceeding CZK 1 million means registering sales from the next year and may require a notice within 15 days. The limit does not include tax-exempt income, income outside the scope of the tax and income taxed by withholding.</li>
  <li><strong>Set up your POS.</strong> If you use a POS in EET OFF too, set it so that it does not send sales. In SuperKasa, the option for this is “I do not have to record sales” in Admin → EET 2.0. With it, the POS goes into live mode even without a certificate and recording unit number, during the free trial even without a paid licence. The option cannot be used once live EET has already run.</li>
</ul>
<p>Choosing EET OFF correctly is your responsibility. If you are not sure about your income or band, ask your accountant or the Finanční správa helpline on 953 109 109.</p>`,
      },
    ],
    faq: [
      ["By when must I opt into EET OFF for 2027?", "By 11 January 2027. The law states the tenth day of the year, but 10 January 2027 is a Sunday and Finanční správa gives 11 January. A late notice has no effect."],
      ["Can I use EET OFF if I have a limited liability company (s.r.o.)?", "No. The regime is exclusively for natural persons in band 1 of the flat-rate regime."],
      ["I am a VAT payer. Can I use EET OFF?", "No. EET OFF is only for taxpayers in the flat-rate regime, and only a VAT non-payer can be in that regime."],
      ["What happens if I exceed CZK 1 million during the year?", "You pay the surcharge until the end of the year and start registering sales from the following year. If you stay in band 1, you must tell the tax authority (správce daně) within 15 days."],
      ["Can I leave EET OFF during the year?", "No. A change always applies from the start of the next calendar year, and you file the notice by the tenth day of that year."],
      ["How much will I pay in EET OFF each month?", "The tax is CZK 1,500 a month, made up of CZK 100 base and a CZK 1,400 surcharge. On top of that you pay social and health insurance under the current rules."],
    ],
    sources: [
      ["What the EET OFF regime is (Finanční správa)", "https://eet.gov.cz/cs/eet-off/co-je-rezim-eet-off"],
      ["How and when to opt into the EET OFF regime (Finanční správa)", "https://eet.gov.cz/cs/eet-off/jak-a-kdy-se-prihlasit-k-rezimu-eet-off"],
      ["How to end the EET OFF regime (Finanční správa)", "https://eet.gov.cz/cs/eet-off/jak-ukoncit-rezim-eet-off"],
      ["Specific situations in the EET OFF regime (Finanční správa)", "https://eet.gov.cz/cs/eet-off/specificke-situace"],
      ["Zákon č. 180/2026 Sb. (Act on Sales Registration), § 11 and the amendment of zákon o daních z příjmů (Income Tax Act) in § 30 (eet.gov.cz)", ZAKON],
      ["EET 2.0 handbook, chapter on the voluntary regime (Finanční správa)", PRIRUCKA],
    ],
    related: ["eet-2-0-pruvodce", "moje-eet-nebo-pokladna", "co-musi-byt-na-uctence"],
  },

  {
    slug: "moje-eet-nebo-pokladna",
    group: "eet",
    kicker: "Choosing a solution",
    title: "MOJE eet or a POS system: what the state app can and cannot do",
    metaTitle: "MOJE eet or a POS system: comparison | SuperKasa",
    desc: "MOJE eet is a free state app for up to 2 recording units, starting 1 December 2026. What published information says it can do and when a POS is better.",
    lead: "MOJE eet is a free web app from Finanční správa (the Financial Administration) for registering sales, and its launch is planned for 1 December 2026. It may be enough if you only want to register a few payments. A POS system makes sense when you also need stock, printing and an overview of your business.",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 7,
    sections: [
      {
        id: "pro-koho-ktera-cesta",
        h2: "Which option suits whom",
        html: `
<p>MOJE eet is intended mainly for small businesses with a lower number of payments and at most 2 recording units (evidenční jednotky). A POS system is more suitable when you need more than registration alone. This description is based on information published by Finanční správa (the Financial Administration, the Czech tax authority) up to 31 October 2026.</p>
<div class="tbl"><table>
  <thead><tr><th>Situation</th><th>Sensible choice</th></tr></thead>
  <tbody>
    <tr><td>Hairdresser without employees, a few customers a day, several types of service</td><td>MOJE eet may be enough</td></tr>
    <tr><td>Stall with a small range and a phone or tablet</td><td>MOJE eet may be enough</td></tr>
    <tr><td>Convenience store with hundreds of items and a barcode scanner</td><td>POS system</td></tr>
    <tr><td>Bistro with employees and sales by shift</td><td>POS system</td></tr>
    <tr><td>Three premises</td><td>POS system, MOJE eet is intended for at most 2 units</td></tr>
    <tr><td>Small business that already has a POS</td><td>First ask your supplier about an update</td></tr>
  </tbody>
</table></div>
<p>A self-employed person (OSVČ) in band 1 of the flat-rate tax has a third option, the <a href="eet-off-pausalni-dan.html">EET OFF regime</a>. In this regime they do not register sales and pay a surcharge.</p>`,
      },
      {
        id: "co-moje-eet-umi",
        h2: "What MOJE eet can do according to Finanční správa",
        html: `
<p>The app is not running yet, so we rely on the description from Finanční správa. According to it, the app will be:</p>
<ul>
  <li>free,</li>
  <li>available in an ordinary web browser without installation,</li>
  <li>usable on devices connected to the internet, for example a tablet,</li>
  <li>linked to DIS+ and to the EET certification authority,</li>
  <li>able to register sales as the law requires,</li>
  <li>able to send a message again automatically if needed,</li>
  <li>equipped with the option of creating a catalogue of goods and services with predefined items and prices,</li>
  <li>able to create a document in PDF format.</li>
</ul>
<p>According to Finanční správa, the app arranges the certificate by itself, so you do not have to download or upload it. However, you must pair the app in DIS+. You use the PROFILY MOJE EET (MOJE eet profiles) tile for this, which appears after you create your first recording unit.</p>`,
      },
      {
        id: "limity",
        h2: "Who MOJE eet is intended for and what its limits are",
        html: `
<p>The eet.gov.cz website says the app is intended especially for small businesses with a lower volume of transactions and at most 2 recording units. A presentation for developers from June 2026 also states at most 2 employees and a low volume of transactions.</p>
<p>The exact volume limit has not been published. It is also not clear from the available texts whether the employee limit will apply in the app or whether it can technically be exceeded. Before you build your business on the app, check the conditions directly on eet.gov.cz or on the helpline 953 109 109.</p>`,
      },
      {
        id: "co-neni-dolozene",
        h2: "What is not yet documented about MOJE eet",
        html: `
<p>We did not find the following features in Finanční správa materials. This does not mean the app will never have them. It means you should not rely on them today.</p>
<div class="tbl"><table>
  <thead><tr><th>Feature</th><th>MOJE eet according to published information</th><th>With a POS system</th></tr></thead>
  <tbody>
    <tr><td>Stock and receiving goods</td><td>Not stated. Only a catalogue of items and prices is stated.</td><td>Ask your supplier</td></tr>
    <tr><td>Printing on a receipt printer</td><td>Not stated. A PDF document is stated.</td><td>Ask which printers it supports</td></tr>
    <tr><td>Sales by shift and closings</td><td>Not stated</td><td>Ask your supplier</td></tr>
    <tr><td>Barcode scanner, cash drawer, scales</td><td>Not stated</td><td>Ask your supplier</td></tr>
    <tr><td>Link to a card terminal</td><td>Not stated</td><td>Ask your supplier</td></tr>
    <tr><td>Selling without internet</td><td>Not stated. Automatic repeated sending is stated.</td><td>Ask how it sends sales after an outage</td></tr>
    <tr><td>Data export for your accountant</td><td>Not stated</td><td>Ask in what format</td></tr>
    <tr><td>Employee accounts and permissions</td><td>Not stated</td><td>Ask your supplier</td></tr>
  </tbody>
</table></div>
<p>POS systems differ from each other, so do not take any feature for granted with them either. Choosing one is described in the article <a href="jak-vybrat-pokladnu.html">How to choose a POS</a>.</p>`,
      },
      {
        id: "den-v-provozu",
        h2: "How the two options differ in a normal day",
        html: `
<p>You will notice the difference mainly with a larger number of customers. The following examples are models, because MOJE eet is not running yet.</p>
<p><strong>Hairdresser:</strong> she has five customers a day and eight types of service. She saves the services and prices in the catalogue. After a haircut she selects the item on a tablet, takes the payment and the sale is sent. She creates a PDF receipt if the customer asks for one. She does not deal with stock. A hairdresser like this may manage with the app.</p>
<p><strong>Convenience store:</strong> it has hundreds of items and a queue before closing time. It needs to scan barcodes, work with stock, print documents quickly and check the till at the end of a shift. These things are not in the published description of MOJE eet. That is why a POS system makes sense.</p>
<p><strong>Bistro:</strong> it accepts cash, cards and meal vouchers, employees take turns, and the owner wants to see sales by shift. According to the presentation for developers, the app is intended for businesses with at most 2 employees. So the bistro must check whether it falls within this group at all.</p>`,
      },
      {
        id: "jak-zacit-s-moje-eet",
        h2: "How to start with MOJE eet",
        html: `
<ol class="steps">
  <li>Log in to DIS+ on the MOJE daně (My Taxes) portal and activate EET.</li>
  <li>Create a recording unit, for example your premises.</li>
  <li>After the app launches, open the PROFILY MOJE EET (MOJE eet profiles) tile in DIS+ and link up with the app.</li>
  <li>Create a catalogue of goods and services in the app.</li>
  <li>Before 1 January 2027, try how the app works on your device.</li>
</ol>
<p>We did not find a detailed guide to the app itself by 31 October 2026. Follow eet.gov.cz. According to the schedule, there is one month to try the app before registration begins. So have a backup plan in case it does not suit you.</p>`,
      },
      {
        id: "otazky-pro-dodavatele",
        h2: "What to ask your POS supplier",
        html: `
<p>Finanční správa states that for a POS device from the time of the original EET, a software update is usually enough. Before you decide, ask your supplier about these things:</p>
<ul>
  <li>From when will the POS support EET 2.0, and how much does the update cost?</li>
  <li>How do I upload the .p12 file and password to it?</li>
  <li>Can I test the connection in verification mode (ověřovací mód) before live operation?</li>
  <li>Will it send sales by itself after an internet outage, and will it show me if sending fails?</li>
  <li>Can it handle returned goods as a negative sale?</li>
  <li>Does it watch the end of the certificate's validity, and can it renew it by itself?</li>
  <li>Can it issue the documents I need as a VAT payer or non-payer?</li>
</ul>
<p>If you do not get a clear answer to these questions in time, look for another solution. MOJE eet can be a temporary option if you meet its conditions.</p>
<p>The law does not limit your choice of device, so you may move elsewhere later. If you move from MOJE eet to a POS, you will need a certificate for the POS. Whether data can be exported from the app is not yet documented.</p>`,
      },
      {
        id: "co-je-spolecne",
        h2: "What is the same for both options",
        html: `
<ul>
  <li><strong>Access to DIS+.</strong> You need it in both cases. The procedure is in the article <a href="eet-2-0-krok-za-krokem.html">EET 2.0 step by step</a>.</li>
  <li><strong>Recording unit.</strong> You create it in DIS+ for both the app and the POS.</li>
  <li><strong>Internet.</strong> Finanční správa says the POS device must be connected to the internet.</li>
  <li><strong>The 48-hour deadline.</strong> After an outage you must send the sale without undue delay, at the latest within 48 hours.</li>
  <li><strong>Documents.</strong> Neither the app nor a POS cancels the duty to issue a document under zákon o DPH (the VAT Act) or zákon o ochraně spotřebitele (the Consumer Protection Act).</li>
  <li><strong>Tax credit.</strong> A business owner who is a natural person and files a tax return can claim a tax credit of up to CZK 5,000, regardless of what they use for registration. In the flat-rate regime the credit is not claimed. This is our reading of the law. Check it with the tax office (finanční úřad) or your accountant. The conditions are in the article <a href="eet-2-0-pruvodce.html">EET 2.0: basic guide</a>.</li>
</ul>`,
      },
      {
        id: "jak-se-rozhodnout",
        h2: "How to decide",
        html: `
<ol class="steps">
  <li><strong>Count your payments.</strong> How many payments do you have a day at peak times? Try to imagine entering them on a tablet.</li>
  <li><strong>Count your items.</strong> A few services are easy to enter. Hundreds of types of goods with barcodes need a scanner and stock management.</li>
  <li><strong>Add up your premises and people.</strong> With more than 2 recording units, MOJE eet is not enough.</li>
  <li><strong>Think about receipts.</strong> Is a PDF enough for you, or do you print a document for customers right at the till?</li>
  <li><strong>Ask your accountant.</strong> What data does your accountant need from you, and in what form?</li>
  <li><strong>Work out the costs.</strong> For the app you need a device and internet. For a POS, add the licence and any accessories.</li>
</ol>
<p>If after these questions you want a POS, SuperKasa has EET 2.0 in every plan and we have tested the connection in the Finanční správa test environment. You will find prices on the <a href="cenik.html">pricing page</a>. You can also wait for MOJE eet to launch and see whether it is enough for you. However, do not leave the certificate and POS test until the last minute, because you must register sales from 1 January 2027.</p>`,
      },
    ],
    faq: [
      ["When will MOJE eet be available?", "The Finanční správa schedule states a launch on 1 December 2026. The practical information page says the launch is expected from this date."],
      ["Is MOJE eet really free?", "Yes, Finanční správa describes it as a free app. You only need your own device with internet."],
      ["Do I need a POS certificate for MOJE eet?", "You do not have to download or upload it. According to Finanční správa, the app arranges it automatically after it is paired with DIS+. However, you must create a recording unit."],
      ["Will MOJE eet print a receipt?", "Creating a document in PDF format is documented. Published materials do not mention printing on a receipt printer."],
      ["Does MOJE eet have stock management?", "Published materials mention a catalogue of goods and services with items and prices. They say nothing about stock."],
      ["How many premises can I have in MOJE eet?", "Finanční správa states at most 2 recording units. A recording unit is a premises, but also, for example, an e-shop or a mobile stall."],
    ],
    sources: [
      ["Practical information: When the MOJE eet web app is enough for me (Finanční správa)", PRAKTICKE + "#kdy-mi-postaci-webova-aplikace-moje-eet-821"],
      ["EET in 5 steps (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-media/EET_v_5_krocich.pdf"],
      ["EET 2.0 schedule (Finanční správa)", HARMONOGRAM],
      ["Presentation from the developer seminar, 23 June 2026 (Finanční správa)", "https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET2_Prezentace_Seminar_pro_vyvojare_23-.pdf"],
      ["What information is available on the Evidence tržeb (Sales registration) tab (MOJE daně)", "https://podpora.mojedane.gov.cz/cs/seznam-okruhu/elektronicka-evidence-trzeb-2-0/jake-informace-jsou-dostupne-na-zalozce-4763"],
      ["Press release on the signing of the law, 22 September 2026 (Finanční správa)", "https://eet.gov.cz/cs/pro-media/tiskove-zpravy/2026/prezident-podepsal-zakon-o-eet-2-0-evidence-trzeb-1315"],
    ],
    related: ["eet-2-0-pruvodce", "jak-vybrat-pokladnu", "eet-off-pausalni-dan"],
  },

  {
    slug: "co-musi-byt-na-uctence",
    group: "eet",
    kicker: "Receipts and documents",
    title: "What must be on a receipt: simplified tax receipt and non-payer's receipt",
    metaTitle: "What must be on a receipt: required details | SuperKasa",
    desc: "Receipt details: simplified tax receipt up to CZK 10,000, non-payer's document, POK from EET, corrective document on returns, invoice and 10-year storage.",
    lead: "A VAT payer's receipt must show the seller, VAT ID (DIČ), document number, goods or service, date, VAT rate and total amount. If the customer asks, a VAT non-payer issues a document with the date, goods or service, price, their name or business name and company ID (IČO).",
    published: "2026-10-31",
    updated: "2026-10-31",
    minutes: 8,
    sections: [
      {
        id: "kdy-vydat-doklad",
        h2: "When you must issue a document",
        html: `
<p>EET does not order a receipt. The duty can arise under zákon o DPH (the VAT Act) or zákon o ochraně spotřebitele (the Consumer Protection Act). In this text we use these terms:</p>
<ul>
  <li><strong>A VAT payer (plátce DPH)</strong> is a business registered for VAT. It states the VAT rate on the receipt.</li>
  <li><strong>A VAT non-payer (neplátce DPH)</strong> is not registered.</li>
  <li><strong>VAT ID (DIČ)</strong> is the tax identification number (daňové identifikační číslo).</li>
  <li><strong>Company ID (IČO)</strong> is the identification number (identifikační číslo osoby).</li>
  <li><strong>A consumer (spotřebitel)</strong> is a customer who is not buying for their own business.</li>
</ul>
<div class="tbl"><table>
  <thead><tr><th>Law</th><th>What it says</th><th>In practice</th></tr></thead>
  <tbody>
    <tr><td>Zákon o evidenci tržeb (Act on Sales Registration)</td><td>It does not impose a receipt</td><td>You do not have to print because of EET</td></tr>
    <tr><td>Zákon o DPH (VAT Act), § 28</td><td>A payer issues a tax document (daňový doklad) when selling to a business or legal entity. The deadline is 15 days.</td><td>You must issue a document to a company</td></tr>
    <tr><td>Zákon o ochraně spotřebitele (Consumer Protection Act), § 16</td><td>If a consumer asks, the seller issues a proof of purchase (doklad o koupi)</td><td>Applies to payers and non-payers</td></tr>
  </tbody>
</table></div>
<p>None of these laws orders you to give a document to a consumer who does not want it. Many shops still issue one with every sale, because it is simpler and the customer has proof of purchase.</p>`,
      },
      {
        id: "zjednoduseny-doklad",
        h2: "Simplified tax receipt up to CZK 10,000",
        html: `
<p>A VAT payer's ordinary receipt is a simplified tax receipt (zjednodušený daňový doklad). You may issue it when the total amount for the supply (plnění) on the document is not higher than CZK 10,000.</p>
<div class="tbl"><table>
  <thead><tr><th>Detail</th><th>Must be on the document</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Your business name or personal name and registered address (sídlo)</td><td>Yes</td><td>Name and registered address</td></tr>
    <tr><td>Your VAT ID (DIČ)</td><td>Yes</td><td>The payer's VAT ID</td></tr>
    <tr><td>Document number (evidenční číslo dokladu)</td><td>Yes</td><td>Serial number from the POS</td></tr>
    <tr><td>Scope and subject of the supply (rozsah a předmět plnění)</td><td>Yes</td><td>Rohlík (bread roll) 10 pcs, haircut</td></tr>
    <tr><td>Date of issue (den vystavení)</td><td>Yes</td><td>Date of sale</td></tr>
    <tr><td>Date of supply (den uskutečnění plnění)</td><td>Only if it differs from the date of issue</td><td>Different delivery date</td></tr>
    <tr><td>VAT rate</td><td>Yes</td><td>12% or 21%</td></tr>
    <tr><td>Total amount</td><td>Yes, if the tax amount is not on the document</td><td>Total CZK 250</td></tr>
    <tr><td>Customer and their VAT ID</td><td>No</td><td>Can be left out</td></tr>
    <tr><td>Unit price without VAT and discount</td><td>No</td><td>Can be left out</td></tr>
    <tr><td>Tax base and tax amount</td><td>No</td><td>Can be left out</td></tr>
  </tbody>
</table></div>
<p>Many POS systems also print the tax base and tax amount. This is not a mistake. The law only says they do not have to be on a simplified document.</p>
<aside class="note"><p>A consumer may want a document under the Consumer Protection Act. That law also requires the identification number. So add your company ID (IČO) to the receipt, if you have one.</p></aside>
<h3>When a simplified document cannot be issued</h3>
<ul>
  <li>You sell tobacco products at a price other than the fixed price for the final consumer.</li>
  <li>The tax is declared by the customer, so not by you.</li>
  <li>You sell goods with an exemption to another EU state.</li>
  <li>It is a distance sale of goods or a distance sale of imported goods with the place of supply in the Czech Republic.</li>
</ul>
<h3>Bistros and rates from 1 January 2027</h3>
<p>From 1 January 2027 there is a change for food services. Soft drinks served on site have a rate of 12%. Serving alcoholic drinks stays at the higher rate of 21%. Confirm your rate settings with your accountant.</p>`,
      },
      {
        id: "nad-10000",
        h2: "Sales over CZK 10,000",
        html: `
<p>Over CZK 10,000 you must not issue a simplified tax receipt. If you sell to a company, you issue an ordinary tax document (daňový doklad), which in practice is called an invoice (faktura). The deadline is 15 days. Example: a construction company buys materials for CZK 12,000 in a shop. The shop issues it a document with the company's name and VAT ID (DIČ).</p>
<p>When a consumer buys, the VAT Act does not order you to issue them a tax document. If they ask, however, they get a proof of purchase (doklad o koupi) under the Consumer Protection Act.</p>`,
      },
      {
        id: "doklad-neplatce",
        h2: "A VAT non-payer's document",
        html: `
<p>A non-payer does not issue a tax document. If a consumer asks, the non-payer issues a proof of purchase under § 16 of the Consumer Protection Act. The document must show:</p>
<ul>
  <li>the date of the sale or service,</li>
  <li>what goods or service it is for,</li>
  <li>the price,</li>
  <li>your first name and surname, or your name or business name,</li>
  <li>your company ID (IČO).</li>
</ul>
<p>Example from a hairdresser without VAT: “Doklad o prodeji, Jana Nováková, IČO, 31. 1. 2027, střih a foukaná, 450 Kč.” (Sales document, Jana Nováková, company ID, 31 January 2027, cut and blow-dry, CZK 450.) She does not have to put her VAT ID (DIČ) on the document. She states neither a VAT rate nor a VAT amount, because she does not pay VAT.</p>
<p>The law requires further details in two cases:</p>
<ul>
  <li><strong>Used or modified goods and goods with a defect:</strong> this must be clearly marked on the document. The same applies to goods whose usability is otherwise limited.</li>
  <li><strong>A sale with later delivery:</strong> the document must also show the place of destination and the delivery date.</li>
</ul>`,
      },
      {
        id: "eet-a-pok",
        h2: "A sale registered in EET and the POK on the receipt",
        html: `
<p>POK is a confirmation code. Finanční správa (the Financial Administration, the Czech tax authority) sends it to the POS as confirmation that it has received the sale. You do not have to have it on the receipt. You can put it there voluntarily.</p>
<ul>
  <li>The document does not have to contain any sentence about the sale being registered.</li>
  <li>The law does not impose a duty to keep the POK.</li>
  <li>The content of the receipt is not sent to EET, only the total amount and basic data.</li>
  <li>You will find an overview of registered sales in DIS+.</li>
</ul>
<p>A receipt can also be electronic. For an electronic tax document, the customer must agree to this form. Details about registration are in the article <a href="eet-2-0-pruvodce.html">EET 2.0: basic guide</a>.</p>`,
      },
      {
        id: "opravny-doklad",
        h2: "Returned goods: corrective document and negative sale",
        html: `
<p>You deal with a refund in two places. For a payer this is VAT, and for every business with registered sales this is EET.</p>
<h3>VAT for a payer</h3>
<p>When goods are returned, a payer corrects the tax base. The payer issues a corrective tax document (opravný daňový doklad) within 15 days of the day of the correction. The corrective document shows the details and VAT IDs of the seller and customer, the number of the original document, the number of the corrective document, the reason for the correction, the difference in the tax base, in the tax and in the total amount, and the day of the correction.</p>
<p>If the original document was simplified and you do not know the customer sufficiently, the corrective document does not have to contain the customer's details or the difference in the base and tax.</p>
<p>You do not have to issue a corrective document if you had no duty to issue a tax document, or if the customer is not sufficiently known to you. You then make the correction in your own VAT records. Agree the procedure with your accountant.</p>
<h3>EET</h3>
<p>A refunded sale is registered as negative. A convenience store customer returns goods worth CZK 40 and gets the money back. The POS sends a sale of −CZK 40. The same procedure applies to a complaint about goods (reklamace), a sale registered by mistake or a card payment that did not go through in the end. This applies to payers and non-payers. However, a corrective tax document only concerns a payer.</p>`,
      },
      {
        id: "faktura",
        h2: "An invoice on request",
        html: `
<p>An invoice is usually wanted by a business owner or company. A payer issues a tax document for them within 15 days. Up to CZK 10,000 the law allows you to use a simplified document. Over CZK 10,000 you must issue an ordinary tax document.</p>
<p>An ordinary tax document contains these details under § 29 of the VAT Act:</p>
<ul>
  <li>your business name or personal name, registered address and VAT ID (DIČ),</li>
  <li>the customer and their VAT ID, if they have one,</li>
  <li>the document number,</li>
  <li>the scope and subject of the supply,</li>
  <li>the date of issue and the date of supply, if they differ,</li>
  <li>the unit price without tax and the discount, if it is not included in the price,</li>
  <li>the tax base, tax rate and tax amount in Czech crowns.</li>
</ul>
<p>The VAT Act does not order you to issue a tax document to a consumer. A proof of purchase under the Consumer Protection Act is enough for them.</p>
<p>If you have already issued a receipt for a sale and the customer later wants an invoice, agree the procedure with your accountant, so that the same sale does not appear in the documents twice. A non-payer issues an invoice without VAT.</p>`,
      },
      {
        id: "uchovavani",
        h2: "How long to keep documents",
        html: `
<div class="tbl"><table>
  <thead><tr><th>What</th><th>How long</th><th>Regulation</th></tr></thead>
  <tbody>
    <tr><td>Tax documents of a VAT payer, including issued receipts</td><td>10 years from the end of the tax period (zdaňovací období) in which the supply took place</td><td>§ 35 of zákon o DPH (VAT Act)</td></tr>
    <tr><td>Accounting documents, if you keep accounts</td><td>5 years from the end of the accounting period</td><td>§ 31 of zákon o účetnictví (Accounting Act)</td></tr>
    <tr><td>Records of a non-payer without accounts</td><td>Decide the period with your accountant. The deadline for assessing tax is 3 years and may change.</td><td><a href="https://www.zakonyprolidi.cz/cs/2009-280#p148" rel="noopener">§ 148 of daňový řád</a> (Tax Procedure Code)</td></tr>
    <tr><td>POK</td><td>The law does not impose storage</td><td>eet.gov.cz</td></tr>
  </tbody>
</table></div>
<p>Example: a payer who files VAT monthly sold goods on 15 March 2027. The tax period ends on 31 March 2027, so the payer keeps the document until 31 March 2037.</p>
<p>For the whole period, a payer must ensure the authenticity of origin, integrity of content and legibility of the document. You may keep documents electronically. They should be in the Czech Republic, or stored so that you have continuous remote access to them. Tax documents issued in a foreign language must be translated into Czech if the tax authority (správce daně) asks.</p>
<p>The thermal paper of receipts fades over time. It is more reliable to have documents stored in the POS or on a computer and in your own backup.</p>
<p>SuperKasa has EET 2.0 in every plan and we have tested the connection in the Finanční správa test environment. You will find prices on the <a href="cenik.html">pricing page</a>.</p>`,
      },
    ],
    faq: [
      ["Must I give a receipt to every customer?", "Not because of EET. You must give one to a consumer who asks for it. A payer must issue a tax document when selling to a business or legal entity."],
      ["Must the POK be on the receipt?", "No. The confirmation code does not have to be stated on the receipt or on any other document. You can put it there voluntarily."],
      ["Up to what amount is a simplified tax receipt enough?", "Up to CZK 10,000. To be exact, the total amount for the supply on the document must not be higher than CZK 10,000. An exception is, for example, tobacco sold at a price other than the fixed price."],
      ["Must a VAT non-payer put a VAT ID (DIČ) on the document?", "The Consumer Protection Act does not require a VAT ID (DIČ). The document must show the date, goods or service, price, the seller's name or business name and company ID (IČO)."],
      ["Can a receipt be only on a phone or by e-mail?", "Yes, a document can be electronic. For a tax document in electronic form, the customer must agree to this form. A customer who does not agree gets a paper document."],
      ["How long must I keep receipts?", "A VAT payer must keep them for 10 years from the end of the tax period in which the sale took place. Deadlines differ for other records, so follow your accountant's instructions."],
    ],
    sources: [
      ["Zákon č. 235/2004 Sb., o DPH (VAT Act), § 26 to 35a, 42, 45 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/2004-235"],
      ["Zákon č. 634/1992 Sb., o ochraně spotřebitele (Consumer Protection Act), § 16 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/1992-634#p16"],
      ["Zákon č. 180/2026 Sb., o evidenci tržeb (Act on Sales Registration), § 8 and the amendment of the annex to the VAT Act (eet.gov.cz)", ZAKON],
      ["Sales registration in practice and the POK (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/evidence-trzeb-v-praxi"],
      ["Errors and how to solve them: voiding and correcting a sale (Finanční správa)", "https://eet.gov.cz/cs/zacinam-s-eet/chyby-a-jejich-reseni#storno-nebo-oprava-trzby-636"],
      ["Zákon č. 563/1991 Sb., o účetnictví (Accounting Act), § 31 (Zákony pro lidi)", "https://www.zakonyprolidi.cz/cs/1991-563#p31"],
    ],
    related: ["eet-2-0-pruvodce", "tiskarna-ctecka-zasuvka", "eet-off-pausalni-dan"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "navod-superkasa",
    group: "pokladna",
    kicker: "Guide from the start",
    title: "SuperKasa POS guide: from sign-up to closing",
    metaTitle: "POS guide: from sign-up to closing | SuperKasa",
    desc: "How to use the SuperKasa POS step by step: sign-up, items, your first sale, payments, refunds, closing, cashiers, backups and paying for the licence.",
    lead: "You create an account on app.superkasa.cz, add items by scanning or from a file and can try your first sale today. The guide continues with payments, refunds, closing, cashiers and paying for the licence.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 7,
    sections: [
      {
        id: "jak-zacit",
        h2: "How to start",
        html: `
<p>SuperKasa runs in the browser on a computer, tablet or phone. Nothing to download or install. The first 10 days are free and you do not need a payment card.</p>
<ul>
<li><strong>Data:</strong> on the SuperKasa server in the Czech Republic, backed up every day.</li>
<li><strong>Devices:</strong> up to 10 in the plan (computer, tablet, phone), all selling into one shared shift.</li>
</ul>`,
      },
      {
        id: "registrace",
        h2: "Sign-up or Buy now",
        html: `
<ol class="steps">
<li>Open <a href="https://app.superkasa.cz/">app.superkasa.cz</a>.</li>
<li>Fill in the fields <strong>Shop name</strong> and <strong>Your register address</strong>, for example vecerka-u-lipy.</li>
<li>Type your <strong>Company ID (IČO)</strong>. The POS checks it in the ARES register.</li>
<li>Fill in your <strong>E-mail</strong>. A phone number is optional.</li>
<li>Tick the box to accept the terms.</li>
<li>Tap <strong>Create for free</strong>. If you want to pay straight away, tap <strong>Buy now</strong>. After setup the POS sends you straight to payment, and you keep the 10 free days on top.</li>
</ol>
<p>Lost the link to finish? Fill in the sign-up again with the same address, e-mail and company ID (IČO).</p>
<p><strong>Nothing to download:</strong> the till runs in the browser. On a Windows computer it prints to the receipt printer without a dialog (through a Chrome shortcut) or through the print window. Android phones and tablets print to a Bluetooth or USB printer, an iPhone prints on the main till's printer. See the guide <a href="tiskarna-ctecka-zasuvka.html">Receipt printer, barcode scanner and cash drawer</a>.</p>`,
      },
      {
        id: "zrizeni",
        h2: "Setting up the shop",
        html: `
<ol class="steps">
<li>On the <strong>What kind of business?</strong> screen, choose your type of business, for example Convenience store, minimarket or Hairdresser and barber.</li>
<li>Did not find your type of business? Type in the field <strong>Describe in your own words what you sell</strong> and tap <strong>Suggest groups</strong>. You can edit the suggestion.</li>
<li>Fill in <strong>Your name</strong> and enter your <strong>PIN</strong> twice (4 to 8 digits).</li>
<li>Fill in your <strong>E-mail</strong> and <strong>Password</strong> (at least 8 characters). You will need them on every new device.</li>
<li>Tap <strong>Create POS</strong>.</li>
</ol>
<p>The POS creates product groups, VAT rates and sample items. The VAT rates are only a suggestion. Check them with your accountant in <strong>Admin → Groups</strong>.</p>`,
      },
      {
        id: "firma",
        h2: "Business details from the company ID (IČO)",
        html: `
<p>If something is missing on the receipt, the owner sees a bar at the top, <strong>The receipt is missing</strong>, with a <strong>Fill in</strong> button.</p>
<ol class="steps">
<li>Tap <strong>Fill in</strong>, or open <strong>Admin → Business</strong>.</li>
<li>Type your <strong>Company ID (IČO)</strong>. The business name and registered address (sídlo) are filled in from ARES.</li>
<li>For <strong>VAT payer</strong>, choose Yes or No.</li>
<li>Check the <strong>Shop address</strong> field. It should show the address of the shop, not the registered address. A self-employed person often has their registered address at home.</li>
<li>Tap <strong>Save</strong>.</li>
</ol>
<aside class="note"><p>You set up EET 2.0 in <strong>Admin → EET 2.0</strong>. The procedure is in the guide <a href="eet-2-0-krok-za-krokem.html">EET 2.0 step by step</a>.</p></aside>`,
      },
      {
        id: "zbozi",
        h2: "Items in the POS",
        html: `
<p>There are three ways to add items:</p>
<ul>
<li><strong>By scanning during a sale.</strong> Scan an unknown code. The POS tries to find the name. Fill in the price and tap <strong>Add item and sell</strong>.</li>
<li><strong>By hand.</strong> Open <strong>Admin → Stock → Items</strong> and tap <strong>+ New item</strong>.</li>
<li><strong>From a file.</strong> Open <strong>Admin → Import CSV</strong> and select a CSV file or an Excel .xlsx file. The <strong>Try (nothing saved)</strong> button shows what will change. Then tap <strong>Import</strong>.</li>
</ul>
<p>The owner or a manager can change the price of a sample item directly during a sale: right-click the tile, or hold it on a touchscreen.</p>`,
      },
      {
        id: "prvni-prodej",
        h2: "First sale",
        html: `
<p>After you log in with your PIN, the POS opens by itself. An example from a convenience store: a customer wants 6 bread rolls (rohlíky) and one Kofola.</p>
<ol class="steps">
<li>On the keypad enter 6, tap <strong>×</strong> and then the Rohlík tile.</li>
<li>Scan the Kofola, or tap its tile.</li>
<li>Check the sale on the right. Tap an item to change the quantity, price or discount.</li>
<li>Tap <strong>Pay</strong> (F4 key).</li>
</ol>
<p>You can sell goods without an item card through a group: type the price on the keypad and tap the group. For goods sold by the kilogram, the POS asks <strong>Enter weight (kg)</strong>. If the customer has forgotten something, tap <strong>Park</strong>. You will find the sale in <strong>Parked</strong>.</p>`,
      },
      {
        id: "platba",
        h2: "Paying by cash, card and QR",
        html: `
<p><strong>Cash.</strong> Tap the notes the customer gave you. The amounts add up. The POS shows <strong>Change</strong>. Cash is rounded to whole crowns. Confirm with the <strong>Confirm payment</strong> button.</p>
<p><strong>Card.</strong> Tap <strong>Card</strong>. Enter the amount by hand on your card terminal, because the POS is not connected to it. When the payment goes through, tap <strong>Card payment approved</strong>.</p>
<p><strong>QR payment.</strong> The <strong>QR payment</strong> button appears only when the IBAN is filled in. You enter it in <strong>Admin → Business</strong> in the <strong>IBAN for QR payments</strong> field. The customer scans the code in their banking app. Tap <strong>Payment received</strong> when you see the money in the account. A “sent” screen on the customer's phone does not guarantee payment.</p>
<p><strong>Split.</strong> Part by card or QR, the rest in cash. It is a small icon at the end of the row of payment methods.</p>
<p>The receipt prints by itself. If you do not have a printer yet, the POS sends you to the wizard. The guide <a href="tiskarna-ctecka-zasuvka.html">Receipt printer, barcode scanner and cash drawer</a> will help.</p>`,
      },
      {
        id: "vratka-storno",
        h2: "Refunds and voids",
        html: `
<div class="tbl"><table>
<thead><tr><th></th><th>Void</th><th>Refund</th></tr></thead>
<tbody>
<tr><td>When</td><td>A whole receipt from the currently open register</td><td>Selected items, even from an older purchase</td></tr>
<tr><td>Button</td><td>Void whole receipt</td><td>Refund items</td></tr>
<tr><td>Money</td><td>Returned the same way it was paid</td><td>You choose Cash, Card or, if available, Bank transfer</td></tr>
</tbody>
</table></div>
<ol class="steps">
<li>Tap <strong>History</strong> and find the receipt. Search for an older receipt by its number.</li>
<li>Open the receipt and choose <strong>Refund items</strong> or <strong>Void whole receipt</strong>.</li>
<li>For a refund, enter the quantity and the way the money is returned, and tap <strong>Confirm</strong>.</li>
<li>Select a reason.</li>
<li>A cashier must enter a manager's or owner's PIN.</li>
</ol>
<p>Nothing is deleted. A new receipt is always created. You make a refund to a card by hand on the terminal.</p>`,
      },
      {
        id: "uzaverka",
        h2: "Closing and the next day",
        html: `
<ol class="steps">
<li>Open <strong>Menu → Closing (close register)</strong>.</li>
<li>Count the money and enter the numbers of notes and coins.</li>
<li>The POS shows the rows <strong>Counted cash</strong>, <strong>Expected in drawer</strong> and <strong>Difference</strong>. From a difference of CZK 100, a note is mandatory.</li>
<li>Tap <strong>Close register</strong> and confirm.</li>
<li>Print the overview with the <strong>Print</strong> button.</li>
</ol>
<p>Then <strong>Open register</strong> appears. In the <strong>Cash in drawer at start</strong> field, type how much stayed in the drawer.</p>
<aside class="note warn"><p>If you close the window, the POS opens by itself at the next login with the amount from the last closing, even if you took the takings away. So in <strong>Admin → System → Cash control</strong>, switch on the option <strong>Ask for the cash in the drawer when opening</strong>. During the day, record money through <strong>Menu → Cash in / out</strong>.</p></aside>
<p>To see the state without closing, use <strong>Interim report</strong> in the Menu.</p>
<p>There is one closing for the whole shop: all devices sell into one shared shift. After 20 hours the POS reminds you to close, and if nobody does, it closes by itself at 23:59.</p>`,
      },
      {
        id: "prodavaci",
        h2: "Cashiers and PINs",
        html: `
<ol class="steps">
<li>Open <strong>Admin → Staff</strong> and tap <strong>+ New staff member</strong>.</li>
<li>Fill in the name, role and language.</li>
<li>Enter a PIN. Each person has a different one, and it must not be 1111 or a sequence like 1234.</li>
<li>Tap <strong>Save</strong>.</li>
</ol>
<div class="tbl"><table>
<thead><tr><th>Role</th><th>What they can do</th></tr></thead>
<tbody>
<tr><td>Cashier</td><td>Sales and Menu, cannot see Admin</td></tr>
<tr><td>Manager</td><td>Also items, stock, reports and approving with a PIN</td></tr>
<tr><td>Owner</td><td>Everything, including Business, Devices, EET 2.0 and System</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "zarizeni-zalohy",
        h2: "Devices and backups",
        html: `
<p>The plan includes up to 10 devices. A new device signs in with the owner's e-mail and password. The procedure is in the guide <a href="prodej-z-telefonu.html">The POS on a phone or tablet</a>.</p>
<p>The server backs up the shop's data every day, and a copy is also kept off the server. There is nothing to set up.</p>
<p>You can download your own copy at any time in <strong>Admin → System → Data export</strong>. Export still works for 12 months after the rental ends.</p>`,
      },
      {
        id: "licence-jazyk",
        h2: "Licence, payment and language",
        html: `
<p>The licence costs <strong>CZK 189 a month or CZK 2,041 a year, including VAT</strong>. The first 10 days are free. If you pay during the trial, you keep the remaining days and the paid period starts only after them.</p>
<ol class="steps">
<li>Tap <strong>Pay</strong> in the top bar, or open <strong>Admin → System → Licence and plan</strong>.</li>
<li>Select add-ons if you want them, and tap <strong>Create QR payment</strong>.</li>
<li>Choose <strong>Month</strong> or <strong>Year (−10 %)</strong> and pay with the QR code in your banking app.</li>
<li>Tap <strong>I've paid – check now</strong>.</li>
</ol>
<aside class="note warn"><p>For now we match licence payments by hand, so the licence is not extended straight after payment. If you do not see the QR payment in the POS, call us. You enter the licence key in the <strong>Licence key</strong> field and tap <strong>Activate</strong>.</p></aside>
<p>After the trial ends you can still sell for 3 days with a warning, and after a paid period ends also for 3 days (time for the payment to arrive). Then new sales stop. Data, receipts, closings, refunds and export keep working.</p>
<p><strong>Language.</strong> The flag at the top switches between Czech, Vietnamese and English. Each cashier has their own language. The customer receipt is always in Czech.</p>`,
      },
    ],
    faq: [
      ["Must I pay straight after signing up?", "No. The first 10 days are free and you do not enter a card. You can also pay during the trial, and you keep the remaining days."],
      ["I forgot my password. What now?", "Open your shop's address on a device that is not signed in and tap Forgot password. You enter your e-mail, the owner's PIN and a new password."],
      ["Are receipts valid during the trial period?", "A POS created by the end of 2026 issues valid receipts straight away. A POS created from 1 January 2027 starts in training mode, in which receipts are not valid. It goes into live mode only with a certificate from DIS+, a recording unit number (číslo evidenční jednotky), a verified connection and a paid licence. If you do not have to register sales, choose “I do not have to record sales” in Admin → EET 2.0 and you do not need a certificate. Training mode can be switched on only before the first live receipt."],
      ["Can a cashier refund money without a manager?", "No. A cashier must confirm a void or a refund with a manager's or owner's PIN. Managers and owners do not enter a PIN again."],
      ["Must I do a closing every day?", "After 20 hours the POS reminds you, and at 23:59 it closes by itself, so sales from several days do not run together. Only you can count the cash in the drawer, though, so it is better to close by hand at the end of the day."],
    ],
    sources: [],
    related: ["tiskarna-ctecka-zasuvka", "prodej-z-telefonu", "eet-2-0-krok-za-krokem"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "jak-vybrat-pokladnu",
    group: "pokladna",
    kicker: "Choosing a POS",
    title: "How to choose a POS system for a small shop",
    metaTitle: "How to choose a POS system for a small shop | SuperKasa",
    desc: "What to look at when choosing a POS for a small shop: real price with VAT, extra devices, EET 2.0, stock, internet outages, language and a list of questions.",
    lead: "A convenience store needs a barcode scanner and stock, a hairdresser mainly tiles with services. Work out the price for a whole year for your business and ask the seller the 14 questions from the list at the end of this article.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "zacnete-provozem",
        h2: "Start with your business",
        html: `
<p>First write down how you sell. Each business needs something different.</p>
<div class="tbl"><table>
<thead><tr><th>Business</th><th>What matters most</th></tr></thead>
<tbody>
<tr><td>Convenience store, grocery shop</td><td>Barcode scanner, fast selling, stock, deposits, price labels, weighed goods</td></tr>
<tr><td>Bistro, café</td><td>Fast tiles, eat in and take away, tables and bills if needed</td></tr>
<tr><td>Hairdresser, beauty salon</td><td>Services on tiles, little equipment, reservations if needed</td></tr>
</tbody>
</table></div>
<p>Try out a normal purchase, not only the seller's demo.</p>`,
      },
      {
        id: "cena",
        h2: "What a POS really costs",
        html: `
<p>The price in an advert is often only part of the cost. Work it out for a whole year.</p>
<h3>Price with or without VAT</h3>
<p>Price lists for businesses are often without VAT. If you are not a VAT payer (plátce DPH), you cannot deduct the tax and you pay the price with VAT. Example: CZK 250 without VAT comes to CZK 302.50 in total at a 21% rate. Always ask for the final price.</p>
<h3>Extra devices</h3>
<p>Find out how many devices are included in the price. A second till, a tablet for receiving goods and a phone for a temporary worker may each be paid for separately.</p>
<h3>Hardware</h3>
<p>Work out what you already have and what you must buy: a computer or tablet, a receipt printer, a barcode scanner, a cash drawer and a card terminal. Ask whether the system works with your equipment, or only with the seller's.</p>
<h3>Add-ons and fees</h3>
<p>Attendance, a loyalty programme or reservations often cost extra. Also ask about fees on sales and card payments, about any contract commitment and about the cost of ending it.</p>
<h3>Example calculation</h3>
<p>With SuperKasa the price is CZK 189 a month or CZK 2,041 a year, always including VAT. A café that also wants Recipes and portion costing for CZK 79 pays CZK 268 a month. It buys its hardware itself.</p>
<div class="tbl"><table>
<thead><tr><th>Add-on</th><th>CZK a month incl. VAT</th></tr></thead>
<tbody>
<tr><td>Attendance and shifts</td><td>79</td></tr>
<tr><td>Loyalty and gift vouchers</td><td>69</td></tr>
<tr><td>Reservations and appointments</td><td>99</td></tr>
<tr><td>Recipes and portion costing</td><td>79</td></tr>
<tr><td>Staff control</td><td>69</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "eet",
        h2: "EET 2.0",
        html: `
<p>The EET 2.0 sales registration begins on 1 January 2027. The POS must be able to send a sale to EET. It helps if it can also issue a receipt during an outage. Ask about these things:</p>
<ul>
<li>Is EET included in the price, or does it cost extra?</li>
<li>What happens if the internet goes down? The POS must send the sale later. The law gives 48 hours.</li>
<li>Will someone help me with the certificate from DIS+?</li>
<li>Will the POS warn me that the certificate is about to expire?</li>
</ul>
<p>You download the POS certificate (pokladní certifikát) yourself in DIS+. The full procedure is in the guide <a href="eet-2-0-krok-za-krokem.html">EET 2.0 step by step</a>. If you may not have to register sales, you can find out in the article <a href="eet-off-pausalni-dan.html">EET OFF and the flat-rate tax</a>.</p>`,
      },
      {
        id: "sklad-ctecka",
        h2: "Stock and scanner",
        html: `
<p>If you have a lot of goods with barcodes, try these situations:</p>
<ul>
<li><strong>Unknown code.</strong> What does the POS do when the scanner reads an item that is not in it? A good POS offers to create it on the spot.</li>
<li><strong>Moving your goods.</strong> Can you upload the list from your old POS or from Excel? Must you type thousands of items by hand?</li>
<li><strong>Receiving goods and stock counts.</strong> Can you put a delivery into stock by scanning?</li>
<li><strong>Scanner.</strong> Does an ordinary USB scanner work, or only one model? Can you scan with the camera on a tablet?</li>
</ul>
<p>A hairdresser may not need stock at all. Stock is one of the things you should be able to switch off, so that the POS stays clear.</p>`,
      },
      {
        id: "vypadek",
        h2: "Internet outage",
        html: `
<p>Before you decide, find out how the POS behaves without internet:</p>
<ul>
<li>Can you keep selling and printing receipts?</li>
<li>Which payments work without internet?</li>
<li>Where is the data stored and how does it upload after an outage?</li>
<li>Can you open the POS after restarting the computer or tablet?</li>
</ul>
<p>A POS installed on a computer in the shop usually does not need internet for selling itself. A POS in a browser must have an offline mode. With SuperKasa in a browser you can take cash and card payments without internet, but not QR payments. Details are in the guide <a href="prodej-z-telefonu.html">The POS on a phone or tablet</a>.</p>`,
      },
      {
        id: "jazyk-data",
        h2: "Language and your data",
        html: `
<p>A cashier makes fewer mistakes when the POS is in their own language. At the same time you want the customer receipt in Czech. Ask whether the staff language can be set separately. There is more in the guide <a href="pokladna-pro-vietnamske-obchody.html">The POS in Vietnamese</a>.</p>
<p>Also check how you can get to your data. Can you download receipts, sales and items to Excel? Does this work even after the contract ends? Can you download the data when you move to another supplier?</p>`,
      },
      {
        id: "vyzkouset",
        h2: "A half-hour test in your shop",
        html: `
<p>A seller's demo is not enough. During the free trial, do this test right at your till, ideally with a cashier who will use the POS.</p>
<ol class="steps">
<li>Scan ten ordinary products and create one that the POS does not know.</li>
<li>Sell a purchase for cash and measure how long it takes.</li>
<li>Print a receipt and check what is on it.</li>
<li>Refund one item.</li>
<li>Switch off the Wi-Fi and try to sell another purchase.</li>
<li>Do a closing and compare it with the money in the drawer.</li>
<li>Download the receipts to Excel and show them to your accountant.</li>
</ol>
<p>If a step does not work, write it down and ask the supplier. The answer will also show you how their support works.</p>`,
      },
      {
        id: "seznam",
        h2: "Checklist of questions",
        html: `
<p>Ask every seller these questions. Write down the answers.</p>
<ol>
<li>How much will I pay in total for a year, including VAT?</li>
<li>How many devices are included in the price?</li>
<li>Which features cost extra?</li>
<li>Do you take a fee on sales or card payments?</li>
<li>How long is the free trial and must I enter a card?</li>
<li>What is the notice period?</li>
<li>Must I buy your hardware?</li>
<li>Which receipt printer and barcode scanner work?</li>
<li>How does EET 2.0 work and who will help me set it up?</li>
<li>What happens in an internet outage?</li>
<li>How do I upload my goods?</li>
<li>Can the POS be used in my language?</li>
<li>How do I download my data when I leave?</li>
<li>Who will help me when the POS is not working and the shop is full?</li>
</ol>`,
      },
      {
        id: "superkasa",
        h2: "How SuperKasa answers the questions",
        html: `
<div class="tbl"><table>
<thead><tr><th>Question</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>Price</td><td>CZK 189 a month or CZK 2,041 a year incl. VAT</td></tr>
<tr><td>Trial</td><td>10 days free, no card</td></tr>
<tr><td>Devices included</td><td>Up to 10</td></tr>
<tr><td>Fee on sales</td><td>None</td></tr>
<tr><td>Card terminal</td><td>Your own. The POS is not connected to it, you enter the amount by hand.</td></tr>
<tr><td>Hardware</td><td>Your own. The receipt printer must support ESC/POS, the scanner acts as a USB keyboard.</td></tr>
<tr><td>QR payment</td><td>Only with the IBAN filled in. The cashier confirms that the payment has arrived.</td></tr>
<tr><td>Staff language</td><td>Czech, Vietnamese, English. The receipt is always in Czech.</td></tr>
<tr><td>Data export</td><td>CSV, for 12 months after the rental ends</td></tr>
</tbody>
</table></div>
<p>You will find a full comparison of plans on the <a href="cenik.html">pricing page</a>.</p>`,
      },
    ],
    faq: [
      ["Do I need an expensive POS for a small shop?", "Not necessarily. What counts is what you do every day. But work out the price for a whole year, including extra devices and add-ons."],
      ["Is a tablet enough instead of a computer?", "It depends on your business. For a hairdresser or a stall, a tablet is often enough. In a convenience store with a barcode scanner and a cash drawer, a computer with a touchscreen monitor is more suitable."],
      ["Must I have a POS because of EET?", "Not necessarily. You can register sales from a tablet, computer or phone with suitable software, and the state app MOJE eet is meant to be enough for small businesses. To find out who registration applies to, check with Finanční správa (the Financial Administration, the Czech tax authority) or your accountant."],
      ["Can I try a POS before paying?", "With SuperKasa, yes. The first 10 days are free and you do not enter a card. With other suppliers, ask whether the trial requires a contract."],
    ],
    sources: [["Finanční správa: Who must register sales", "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby"]],
    related: ["navod-superkasa", "tiskarna-ctecka-zasuvka", "eet-2-0-pruvodce"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "tiskarna-ctecka-zasuvka",
    group: "pokladna",
    kicker: "POS equipment",
    title: "Receipt printer, barcode scanner and cash drawer",
    metaTitle: "Receipt printer and barcode scanner | SuperKasa",
    desc: "Which receipt printer and barcode scanner work with SuperKasa: 58 and 80 mm, USB, Bluetooth, network, drawer, price labels and what to do if nothing prints.",
    lead: "Direct receipt printing needs a printer with ESC/POS commands, the scanner should work as a USB keyboard and the cash drawer plugs into the printer. This guide describes how to connect them and what to do when a receipt does not print.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 7,
    sections: [
      {
        id: "co-potrebujete",
        h2: "What you need",
        html: `
<p>You buy the equipment yourself. It is not included in the plan price.</p>
<div class="tbl"><table>
<thead><tr><th>Equipment</th><th>What it should do</th></tr></thead>
<tbody>
<tr><td>Receipt printer</td><td>Thermal paper 80 or 58 mm, ESC/POS commands</td></tr>
<tr><td>Barcode scanner</td><td>“USB keyboard (HID)” mode</td></tr>
<tr><td>Cash drawer</td><td>Connection to the receipt printer</td></tr>
<tr><td>Tablet or phone</td><td>Browser and camera</td></tr>
</tbody>
</table></div>
<aside class="note"><p>We have not yet tested all types of printer, so we do not give a list of verified models. ESC/POS is the language of receipt printers. Before you buy a cheap printer, check with the seller that it supports this language. Label printers (Zebra, TSC, Brother, Dymo) have their own language. Receipts will not go to them directly.</p></aside>`,
      },
      {
        id: "sirka",
        h2: "58 or 80 mm printer",
        html: `
<div class="tbl"><table>
<thead><tr><th></th><th>80 mm</th><th>58 mm</th></tr></thead>
<tbody>
<tr><td>Characters per line</td><td>42</td><td>32</td></tr>
<tr><td>For whom</td><td>Convenience store, bistro, main till</td><td>Portable printer, stall, hairdresser</td></tr>
<tr><td>Price labels on a roll</td><td>58 × 40 mm design, enlarged to the roll width</td><td>40 × 30 mm design</td></tr>
<tr><td>Connection</td><td>Usually USB or network</td><td>Often Bluetooth</td></tr>
</tbody>
</table></div>
<p>You set the width in the wizard in the <strong>Receipt paper</strong> field. It must match the roll you have in the printer.</p>`,
      },
      {
        id: "pripojeni",
        h2: "How to connect the printer",
        html: `
<p>Open the wizard in <strong>Menu → Printer</strong>, or in <strong>Admin → Devices → Add a printer</strong>. It offers only what is possible on your device. A cashier sees fewer options than the owner.</p>
<div class="tbl"><table>
<thead><tr><th>You have</th><th>Option in the wizard</th></tr></thead>
<tbody>
<tr><td>Windows computer and a receipt printer</td><td>Print via the browser dialog (without a dialog through a Chrome shortcut, see below)</td></tr>
<tr><td>Android and a Bluetooth printer</td><td>Bluetooth printer</td></tr>
<tr><td>Android and a printer on a cable (OTG)</td><td>USB printer for phone / tablet</td></tr>
<tr><td>Older printer with a serial cable</td><td>Printer on a COM port</td></tr>
<tr><td>Phone or tablet, printer at the main till</td><td>Print on the main till's printer</td></tr>
<tr><td>Office printer or PDF</td><td>No receipt printer; in a browser on a computer, Print via the browser dialog</td></tr>
</tbody>
</table></div>
<h3>Driver in Windows</h3>
<p>For a USB printer, the driver must be installed first.</p>
<ol class="steps">
<li>Connect the printer with a USB cable and switch it on.</li>
<li>Wait until Windows installs it. An Epson TM needs a driver from the Epson website (EPSON Advanced Printer Driver). Other brands have a driver on a CD or on the seller's website.</li>
<li>In Windows, set the receipt printer as the default printer.</li>
<li>In the POS wizard, choose <strong>Print via the browser dialog</strong> and tap <strong>Save</strong>. The print window opens right away with a test slip.</li>
<li>In the print window, choose the receipt printer and set Margins to <strong>None</strong>. The browser remembers the choice.</li>
</ol>
<h3>Printing without a dialog</h3>
<p>Nothing is downloaded. You just open the POS with a Chrome shortcut that prints straight to the default printer without the print window.</p>
<ol class="steps">
<li>In Windows, set the receipt printer as the default printer.</li>
<li>Right-click the Google Chrome shortcut and choose <strong>Properties</strong>.</li>
<li>In the <strong>Target</strong> field, enter <code>"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --kiosk-printing --user-data-dir="C:\\SuperKasaChrome"</code> followed by your shop's address.</li>
<li>Always open the POS with this shortcut. Sign in once the first time.</li>
</ol>
<p>SuperKasa then opens in its own Chrome window, separate from your normal Chrome. You will also find the steps in the POS under <strong>Admin → Peripherals → Printing without the confirmation window</strong>. Only the owner sees Admin → Peripherals.</p>
<h3>Bluetooth</h3>
<ol class="steps">
<li>Switch on the printer and switch on Bluetooth on the phone. If Android asks, switch on location too.</li>
<li>Tap <strong>Connect printer</strong> and select it in the list.</li>
<li>A test prints.</li>
</ol>
<aside class="note warn"><p>After a page refresh, a Bluetooth printer does not reconnect by itself. The POS shows a <strong>Printing failed</strong> window. Tap <strong>Connect printer</strong>. On iPhone and iPad, Bluetooth printing from a browser does not work.</p></aside>
<h3>Network printer</h3>
<p>A browser cannot send data straight to a network printer. Add the printer to Windows (Settings → Printers &amp; scanners) and print to it like any other Windows printer – without a dialog or through the print window.</p>`,
      },
      {
        id: "zasuvka",
        h2: "Cash drawer",
        html: `
<p>The drawer plugs into the receipt printer, not into the computer. The POS sends a command to the printer and the printer opens the drawer.</p>
<ol class="steps">
<li>Connect the drawer cable to the printer.</li>
<li>In the printer wizard, tick <strong>Open the drawer on cash payments (drawer plugged into the printer)</strong>.</li>
<li>Try a cash sale.</li>
</ol>
<p>To open the drawer by hand, use <strong>Menu → Open the drawer</strong>. Each opening is recorded. When printing through the browser window, the POS does not control the drawer directly. The printer driver must open it, and the option is in the driver's settings.</p>`,
      },
      {
        id: "ctecka",
        h2: "Barcode scanner",
        html: `
<p>A USB scanner works as a keyboard. You just plug it in and nothing is installed.</p>
<ol class="steps">
<li>Plug the scanner into USB.</li>
<li>Open <strong>Menu → Barcode scanner</strong>.</li>
<li>Scan a code from any package.</li>
<li>The POS shows <strong>The scanner works</strong> and the code.</li>
</ol>
<p>The scanner should send Enter after the code. If it does not, the POS still manages, only a little more slowly. In the scanner's manual, look for the option “Enter suffix”. A Czech keyboard is not a problem. The POS converts the characters ě, š, č into digits by itself.</p>
<p>If the scanner writes strange characters, switch it to “USB keyboard (HID)” mode according to its manual. The POS does not use “COM / serial port” mode. A wireless scanner needs its USB receiver.</p>`,
      },
      {
        id: "tablet-telefon",
        h2: "Tablet or phone and printing at the main till",
        html: `
<p>On phones and tablets, the camera reads the codes. You pair a Bluetooth scanner in the phone's settings.</p>
<p>Selling on a phone with the printer at the main till? The main till must have the printer set up first.</p>
<ol class="steps">
<li>On the phone, open <strong>Menu → Printer</strong>.</li>
<li>Choose <strong>Print on the main till's printer</strong>.</li>
<li>Select the device that the printer is at.</li>
<li>Switch on the drawer at the main till with the option <strong>Open the main till's drawer on cash payment</strong>.</li>
<li>Tap <strong>Use it and print a test</strong>.</li>
</ol>
<p>If the main till has its printer connected through Bluetooth or USB in the browser, it must have the POS open. In the background is enough. Otherwise the phone shows “The main till is not open”. There is more in the guide <a href="prodej-z-telefonu.html">The POS on a phone or tablet</a>.</p>`,
      },
      {
        id: "cenovky",
        h2: "Printing price labels",
        html: `
<p>Price labels are in the Shop plan. A hairdresser or café does not have them in the POS. The owner or a manager prints them.</p>
<ol class="steps">
<li>Open <strong>Admin → Print price labels</strong>.</li>
<li>Select the goods. You can find changed prices with the <strong>Price changed since</strong> filter.</li>
<li>In the <strong>Size</strong> field, choose an 80 or 58 mm roll.</li>
<li>Leave <strong>Price per kg / l (required by law)</strong> switched on.</li>
<li>Tap <strong>Print labels</strong>.</li>
</ol>
<p>Under <strong>Other printers (label printer, A4)</strong> you will find thermal labels and A4 sheets. Label printers print through the browser window. Set the label size in the printer driver, for example 58 × 40 mm. Colour designs print only on A4.</p>
<p>For price labels to go directly to the receipt printer, <strong>Also print price labels here</strong> must be ticked in <strong>Admin → Devices → Set up</strong>.</p>`,
      },
      {
        id: "netiskne",
        h2: "When nothing prints",
        html: `
<div class="tbl"><table>
<thead><tr><th>What you see</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>A blank slip came out</td><td>Turn the roll round. The print side of the thermal paper must face the head.</td></tr>
<tr><td>Nothing came out</td><td>Check that the printer is switched on, has paper and its lid is closed. Switch it off and on, then tap <strong>Try again</strong>.</td></tr>
<tr><td>The receipt is cut off</td><td>Set the correct width in the <strong>Receipt paper</strong> field.</td></tr>
<tr><td>The receipt printer is missing in the print window</td><td>Install the driver in Windows and open the print window again.</td></tr>
<tr><td>Bluetooth after a page refresh</td><td>Tap <strong>Connect printer</strong>, or <strong>Print via the dialog</strong>.</td></tr>
<tr><td>The system (driver) is using the USB printer</td><td>On a Windows computer, print through the system: in the wizard choose <strong>Print via the browser dialog</strong>, or print without a dialog through a Chrome shortcut.</td></tr>
<tr><td>Selling without internet through the main till</td><td>The receipt prints through the browser window. Without internet, the main till does not accept printing from a phone.</td></tr>
</tbody>
</table></div>
<aside class="note warn"><p>Invoices print on A4. On a POS running in full screen (kiosk) an invoice would go to the narrow receipt printer, so the POS offers it for download with the <strong>Download invoice</strong> button. Open the file and print it on an A4 printer.</p></aside>
<p>If nothing helps, call us. You will find our details on the <a href="kontakt.html">Contact</a> page.</p>`,
      },
    ],
    faq: [
      ["Does SuperKasa work with my printer?", "Direct printing needs a printer that understands ESC/POS commands. We have not tested all types, so check with a test print during the 10 free days. Without a receipt printer you can print through the browser window."],
      ["Do I need a driver for the scanner?", "An ordinary USB scanner does not need a driver. It must be in USB keyboard (HID) mode. You can try it in Menu → Barcode scanner."],
      ["Can the drawer open without a printer?", "No. The drawer opens through the receipt printer it is connected to."],
      ["Can I print from an iPhone?", "An iPhone does not connect a Bluetooth printer in the browser. Use the printer at the main till, or an Android tablet."],
      ["Must I use a receipt printer for price labels?", "No. Price labels can also go to a label printer through the browser or to an ordinary printer on A4 sheets."],
    ],
    sources: [],
    related: ["navod-superkasa", "prodej-z-telefonu", "co-musi-byt-na-uctence"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "prodej-z-telefonu",
    group: "pokladna",
    kicker: "Phone and tablet",
    title: "The POS on a phone or tablet and printing at the main till",
    metaTitle: "POS on a phone and printing at the main till | SuperKasa",
    desc: "How to sell with the POS on a phone or tablet: signing in, cashier PINs, number of devices, camera as scanner, printing at the main till and internet outages.",
    lead: "A phone or tablet signs in to the POS the first time with the owner's e-mail and password, and after that a cashier needs only a PIN. Receipts can come out of the printer at the main till, and the browser register can sell even without internet.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "co-potrebujete",
        h2: "What you need",
        html: `
<p>You do not have to install anything. The POS runs in the browser.</p>
<div class="tbl"><table>
<thead><tr><th>Business</th><th>What the phone or tablet is for</th></tr></thead>
<tbody>
<tr><td>Bistro</td><td>Selling on the terrace, the receipt comes out at the main till</td></tr>
<tr><td>Hairdresser</td><td>Tablet by the chair as the only till</td></tr>
<tr><td>Stall</td><td>Phone and a portable Bluetooth printer</td></tr>
<tr><td>Convenience store</td><td>Tablet for receiving goods and stock counts in the storeroom</td></tr>
</tbody>
</table></div>
<p>A phone or tablet connects to the POS over the internet at your shop's address, for example your-shop.superkasa.cz. The main computer does not have to be running, and you can sell outside the shop too.</p>`,
      },
      {
        id: "prihlaseni",
        h2: "Signing in with e-mail and password",
        html: `
<p>A new device is always signed in by the owner. You do not enter any pairing code.</p>
<ol class="steps">
<li>In the phone's browser, open the POS address or the <a href="prihlaseni.html">Sign-in page</a>.</li>
<li>Enter the owner's <strong>E-mail</strong> and <strong>Password</strong>.</li>
<li>Tap <strong>Sign in</strong>.</li>
</ol>
<p>The device pairs by itself and the owner is signed in straight away. Add the address to your phone's home screen so that the cashier can find it.</p>
<aside class="note"><p>You can see the account e-mail and change the password in <strong>Admin → System → Owner account</strong>. If you forget the password, tap <strong>Forgot password</strong> on the sign-in screen. You enter your e-mail, the owner's PIN and a new password.</p></aside>`,
      },
      {
        id: "pin",
        h2: "A cashier logs in with a PIN",
        html: `
<p>A cashier does not need the owner's password. However, the owner must first sign in the device, even if it is the cashier's phone.</p>
<ol class="steps">
<li>After the owner has signed in, open <strong>Menu → Log out</strong>.</li>
<li>The POS shows a keypad. The cashier enters their PIN and confirms.</li>
<li>The device stays paired. Next time, the PIN is enough.</li>
</ol>
<p>With the browser register, a cashier can also go to the address from <a href="https://app.superkasa.cz/">app.superkasa.cz</a>: in the <strong>Staff: shop address and PIN</strong> section they type the address and tap <strong>Open my register</strong>. On a device that is not signed in, however, the owner's sign-in appears.</p>
<p>After 10 wrong PINs, login on the device is locked for 5 minutes.</p>`,
      },
      {
        id: "kolik-zarizeni",
        h2: "How many devices the plan includes",
        html: `
<p>Every plan includes <strong>up to 10 devices</strong>. Each computer, tablet, phone and each browser that signs in as a new device counts. You can see how many you have in <strong>Admin → System → Licence and plan</strong> in the <strong>Devices</strong> row.</p>
<ul>
<li>When the limit is full, the POS shows <strong>Replace an old device</strong>. You select the one you no longer use.</li>
<li>You remove an old device in <strong>Admin → Devices</strong> with the <strong>Revoke</strong> button.</li>
<li>Need more than 10? <a href="kontakt.html">Call us</a>.</li>
</ul>
<p>The sales overview for the owner does not take up a device in the plan. You create the link in <strong>Admin → System → Owner on mobile</strong>. It is read-only and works from anywhere.</p>
<aside class="note"><p>All devices sell into one shared shift of the shop. There is one closing for the whole shop, and cash taken on a phone is added up together with the main till.</p></aside>`,
      },
      {
        id: "prodej",
        h2: "Selling on a phone",
        html: `
<p>At the top are search and the camera button, and below them the sale. The <strong>Categories</strong> and <strong>Main products</strong> buttons open the goods. The <strong>Done</strong> button takes you back to the sale. Payment works the same as on a computer.</p>
<h3>Camera as a scanner</h3>
<ol class="steps">
<li>Tap the camera icon in the search field.</li>
<li>Allow the browser to use the camera.</li>
<li>Point it at a barcode. It reads by itself.</li>
</ol>
<p>The camera reads EAN-13, EAN-8 and UPC codes. You will find a test in <strong>Menu → Barcode scanner</strong>.</p>
<p>If the camera does not read the code, tap <strong>Take photo</strong> and photograph the code up close, sharp and whole, including the white edge.</p>
<p>Pair a Bluetooth scanner in the phone's settings. It then acts as a keyboard.</p>
<h3>Receiving goods on a tablet</h3>
<p>The owner or a manager opens <strong>Admin → Stock → Receive goods</strong>. Each further scan adds one piece. The camera works here too. At the end, tap <strong>Add to stock</strong>. <strong>Shelf count</strong> works the same way.</p>`,
      },
      {
        id: "tisk",
        h2: "Printing at the main till",
        html: `
<ol class="steps">
<li>Set up the printer at the main till. The procedure is in the guide <a href="tiskarna-ctecka-zasuvka.html">Receipt printer, barcode scanner and cash drawer</a>.</li>
<li>On the phone, open <strong>Menu → Printer</strong>.</li>
<li>Choose <strong>Print on the main till's printer</strong> and select the device.</li>
<li>Tap <strong>Use it and print a test</strong>.</li>
</ol>
<p>Printing goes over the internet, so the phone does not have to be on the same Wi-Fi as the main till.</p>
<p>The wizard also opens by itself at the first print. If you close it, receipts do not print automatically. You print them through <strong>Last</strong> and <strong>Print copy</strong>.</p>
<aside class="note warn"><p>A Bluetooth printer connected to a phone works only on Android. On iPhone and iPad the browser does not connect a Bluetooth printer, so use the printer at the main till. After a page refresh you need to tap <strong>Connect printer</strong> again.</p></aside>`,
      },
      {
        id: "ztraceny-telefon",
        h2: "Lost or replaced phone",
        html: `
<p>If a phone is lost or a cashier leaves, remove the device. This keeps strangers out of the POS.</p>
<ol class="steps">
<li>At the main till, open <strong>Admin → Devices</strong>.</li>
<li>For that device, tap <strong>Revoke</strong> and confirm.</li>
<li>If the device has an open register, the POS asks whether to close it remotely. The cash will then not be counted, so check it.</li>
</ol>
<p>When a cashier leaves, switch off their <strong>Active</strong> option in <strong>Admin → Staff</strong>.</p>`,
      },
      {
        id: "vypadek",
        h2: "Internet outage",
        html: `
<p>Selling continues and above the sale the message <strong>Offline – keep selling, receipts upload automatically</strong> appears.</p>
<ul>
<li>You can take only cash and card payments. QR payments, loyalty points and table bills do not work.</li>
<li>The device has receipt numbers reserved in advance. Without them, a sale cannot be saved.</li>
<li>Receipts are stored on the device and upload by themselves once connected, with their original time, including to EET.</li>
<li>The <strong>Waiting</strong> button shows the waiting receipts. <strong>Upload now</strong> sends them immediately.</li>
<li>The closing waits until all receipts have uploaded.</li>
<li>PIN login and opening the register need a connection. Leave the device logged in.</li>
<li>Printing at the main till does not work without internet, so the receipt goes through the browser window. A Bluetooth printer connected to the phone keeps printing.</li>
</ul>
<aside class="note warn"><p>While receipts are waiting, do not delete the browser data. They exist only on that device. After 24 hours the POS warns you, because a sale must be sent to EET within 48 hours. Connect to the internet as soon as possible.</p></aside>`,
      },
    ],
    faq: [
      ["Can a cashier use their own phone?", "Yes, but the first sign-in must be done by the owner with their e-mail and password. The owner then logs out and the cashier enters a PIN."],
      ["Does each phone count towards the device limit?", "Yes. The plan includes up to 10 devices. The Owner on mobile overview does not count towards the limit."],
      ["Must the phone be on the same Wi-Fi as the main till?", "No. Printing at the main till goes over the internet, so the phone can even be on mobile data."],
      ["Does the POS work on an iPhone?", "Yes, in the browser. Only the direct connection of a Bluetooth printer does not work. You can print on the printer at the main till."],
      ["Can I print price labels on a phone?", "Yes, if you are a manager or owner and the phone has a printer set up. However, Admin is less convenient on a small screen than on a computer."],
    ],
    sources: [],
    related: ["tiskarna-ctecka-zasuvka", "navod-superkasa", "moje-eet-nebo-pokladna"],
  },

  // ------------------------------------------------------------------------------------------------
  {
    slug: "pokladna-pro-vietnamske-obchody",
    group: "pokladna",
    kicker: "Staff in Vietnamese",
    title: "The POS in Vietnamese for convenience stores and grocery shops",
    metaTitle: "POS in Vietnamese for convenience stores | SuperKasa",
    desc: "SuperKasa in Vietnamese for convenience stores: cashiers use their language, receipts stay in Czech. Groups, price labels, item names and EET 2.0 help.",
    lead: "A cashier can have the POS in Vietnamese and the customer still gets a receipt in Czech. This guide shows how to set this up in a convenience store or Asian food store.",
    published: "2026-10-31",
    updated: "2026-11-05",
    minutes: 6,
    sections: [
      {
        id: "jak-to-funguje",
        h2: "Staff language and receipt language",
        html: `
<p>SuperKasa separates the cashier's language from the language of the receipt.</p>
<div class="tbl"><table>
<thead><tr><th>What</th><th>Language</th></tr></thead>
<tbody>
<tr><td>Buttons, menu, Admin</td><td>According to the cashier: Czech, Vietnamese, English</td></tr>
<tr><td>Names of product groups</td><td>According to the cashier</td></tr>
<tr><td>Receipt and invoice</td><td>Always Czech</td></tr>
<tr><td>Price labels</td><td>Always Czech</td></tr>
<tr><td>Item names</td><td>As you write them. In the POS they should be in Czech.</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "nastaveni-jazyka",
        h2: "How to set up Vietnamese",
        html: `
<p><strong>During setup.</strong> Tap the Vietnamese flag at the top right. The flag is on the sign-up page <a href="https://app.superkasa.cz/">app.superkasa.cz</a> and on the setup screen. After sign-up you go to your shop's address, where you need to tap the flag again. The owner account is then saved in Vietnamese.</p>
<p><strong>For cashiers.</strong></p>
<ol class="steps">
<li>Open <strong>Admin → Staff</strong>.</li>
<li>Tap a cashier, or <strong>+ New staff member</strong>.</li>
<li>In the <strong>Language</strong> field, select Tiếng Việt.</li>
<li>Tap <strong>Save</strong>.</li>
</ol>
<p>After PIN login, the POS switches to the cashier's language. Each person can also change the language with the flag in the top bar, and the choice is saved for them. A Czech cashier and a Vietnamese owner can thus use the same POS, each in their own language.</p>
<p><strong>Cheat sheet for the wall.</strong> In <strong>Admin → Staff</strong> there is a <strong>Cheat sheet for cashiers (CZ / VI)</strong> button. It prints an overview of the most common procedures on A4, in Czech and Vietnamese.</p>
<aside class="note"><p>Buttons, menus and server messages are translated into Vietnamese. If you still come across Czech text, give us a call and we will add the translation.</p></aside>`,
      },
      {
        id: "kategorie",
        h2: "Product groups",
        html: `
<p>During setup, choose the type of business <strong>Convenience store, minimarket</strong> (in Vietnamese Tạp hóa, siêu thị mini), or <strong>Asian food store</strong> (Thực phẩm châu Á).</p>
<ul>
<li><strong>Convenience store</strong> gets groups such as tobacco, alcohol, drinks, bakery, fruit and vegetables, deposits and bags.</li>
<li><strong>Asian food store</strong> also gets sample items, for example coriander or tofu.</li>
</ul>
<p>You can also describe your range in your own words in Vietnamese, for example “thực phẩm châu Á, rượu sake, gạo, rau thơm”. The POS suggests groups with VAT rates, free and without internet. You can edit the suggestion before you create the POS. Check the rates with your accountant.</p>
<p>The names of groups that the POS creates by itself are translated. For your own group, add a translation:</p>
<ol class="steps">
<li>Open <strong>Admin → Groups</strong> and tap the group.</li>
<li>Fill in <strong>Vietnamese name (for staff)</strong>.</li>
<li>Save.</li>
</ol>
<p>Mark cigarettes in the item card as <strong>Fixed price – no discounts (cigarettes)</strong>. Deposits on bottles are ready under PLU 0 and 3, crates under PLU 8 and 9.</p>`,
      },
      {
        id: "cestina-uctenka",
        h2: "Czech on the receipt",
        html: `
<p>The receipt shows the item name exactly as it is in the item card. The POS does not translate it. So write names in Czech.</p>
<ul>
<li>Instead of “Bún gạo”, write “Rýžové nudle 200 g” (rice noodles 200 g).</li>
<li>Put the pack size in the name. The POS uses it to calculate the unit price.</li>
</ul>
<p>So that a cashier can recognise goods even without Czech, add a photo. In the item card, tap <strong>Upload photo</strong> or <strong>Search the internet</strong>. The POS looks up photos for goods with a barcode automatically in the background. The <strong>Photos by EAN</strong> button in <strong>Admin → Stock → Items</strong> shows how far it has got (the lookup can be switched off in <strong>Admin → System</strong>). A tile with a picture is then quicker to find than text.</p>
<p>If you scan an unknown code, the POS tries to find a Czech name in the SuperKasa shared database and in Open Food Facts. You just check the name and fill in the price. If this does not work, check the option <strong>Look up names by barcode online</strong> in <strong>Admin → System → Receipt printing</strong>.</p>
<p>Labels on the receipt, such as CELKEM (total) or Hotově (cash), are fixed in Czech. You can edit your own text in <strong>Admin → Business</strong> in the <strong>Receipt footer</strong> field. Write it in Czech. What must be on a receipt is described in the guide <a href="co-musi-byt-na-uctence.html">What must be on a receipt</a>.</p>`,
      },
      {
        id: "den-ve-vecerce",
        h2: "A normal day in a convenience store",
        html: `
<p>A cashier deals with these situations every day.</p>
<div class="tbl"><table>
<thead><tr><th>Situation</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>A customer returns a bottle</td><td>Type PLU 3 and Enter. A deposit of −CZK 3 is added. A negative sale is paid out of the till.</td></tr>
<tr><td>Beer with a bottle</td><td>In the item card, set <strong>Sell together with</strong>. The deposit is then added by itself.</td></tr>
<tr><td>Bread rolls by the piece</td><td>Type the number, tap <strong>×</strong> and then the tile.</td></tr>
<tr><td>Fruit by weight</td><td>Tap the tile. The POS asks for the weight in kg.</td></tr>
<tr><td>Label from a scale</td><td>Scan it. The POS reads the PLU and the weight or price from the EAN-13 code.</td></tr>
<tr><td>New cigarette price</td><td>Tap the item in the sale and change the price. This applies only to this sale. You change the price permanently in the item card. A discount on goods with a fixed price is not possible.</td></tr>
<tr><td>A customer asks about a price</td><td>Press F2 and scan the item. Nothing is sold. F2 switches the check off.</td></tr>
</tbody>
</table></div>
<h3>Training a new cashier</h3>
<ol class="steps">
<li>Add her in <strong>Admin → Staff</strong> and set her language to Tiếng Việt.</li>
<li>Print the <strong>Cheat sheet for cashiers (CZ / VI)</strong>.</li>
<li>Let her do a few sales with you. You cancel a sale before payment with the <strong>Cancel</strong> button above the sale.</li>
<li>Tell her that a void or refund is confirmed by a manager or the owner with their PIN.</li>
</ol>
<aside class="note"><p>Training mode, in which receipts are not valid, can be switched on only as long as the POS has not issued any live receipt. The <strong>Back to training</strong> button is in <strong>Admin → System</strong> in the <strong>Live</strong> section.</p></aside>`,
      },
      {
        id: "cenovky",
        h2: "Price labels",
        html: `
<p>You print price labels on the receipt printer, on a label printer or on A4. They are always in Czech, even if the cashier has the POS in Vietnamese.</p>
<ol class="steps">
<li>Open <strong>Admin → Print price labels</strong>.</li>
<li>Select the goods and the size.</li>
<li>Leave <strong>Price per kg / l (required by law)</strong> switched on.</li>
<li>Tap <strong>Print labels</strong>.</li>
</ol>
<p>A thermal price label shows the name, price, unit price and barcode. The print date is not printed on it. A date appears only for a promotion, when you fill in <strong>Promo valid until</strong>. Details about the printer are in the guide <a href="tiskarna-ctecka-zasuvka.html">Receipt printer, barcode scanner and cash drawer</a>.</p>`,
      },
      {
        id: "eet",
        h2: "Help with EET 2.0",
        html: `
<p>The EET 2.0 sales registration begins on 1 January 2027. In <strong>Admin → EET 2.0</strong> there is a procedure in seven steps, in Vietnamese and Czech. Your accountant can help you log in to DIS+, or you can call us.</p>
<ol class="steps">
<li>In DIS+, sign up for sales registration and create your shop as a recording unit (evidenční jednotka).</li>
<li>Generate a POS certificate (pokladní certifikát) and download the .p12 file. Save the password.</li>
<li>In <strong>Admin → EET 2.0</strong>, upload the file and password and tap <strong>Verify connection</strong>.</li>
<li>In 2026 you can choose <strong>Dry run</strong> mode. Switch on live EET on 1 January 2027, at the latest for the first sale in 2027.</li>
</ol>
<p>Live EET requires a paid licence. The detailed procedure is in the guide <a href="eet-2-0-krok-za-krokem.html">EET 2.0 step by step</a>. The SuperKasa website is also available <a href="../vi/index.html">in Vietnamese</a>.</p>
<p>We can help you by phone, in Vietnamese too: <a href="tel:+420608886882">+420 608 886 882</a>. We will go through the setup with you.</p>`,
      },
    ],
    faq: [
      ["Will the receipt be in Vietnamese if I have the POS in Vietnamese?", "No. The customer receipt is always in Czech. Only the buttons, menus and product groups for the cashier are in Vietnamese."],
      ["Can each cashier have a different language?", "Yes. The language is saved for each cashier. After PIN login, the POS switches by itself."],
      ["Will the POS translate item names into Vietnamese?", "No. Groups are translated, but item names stay as you write them. Because of the receipt, write them in Czech."],
      ["Is Admin in Vietnamese too?", "Yes. The flag is also in Admin and the choice is saved to your account."],
      ["Will you help me with setup in Vietnamese?", "Yes. Call +420 608 886 882. We will set up the POS with you."],
    ],
    sources: [["Finanční správa: Who must register sales", "https://eet.gov.cz/cs/koho-se-eet-tyka/kdo-musi-evidovat-trzby"]],
    related: ["navod-superkasa", "tiskarna-ctecka-zasuvka", "eet-2-0-krok-za-krokem"],
  },
  ],
};
