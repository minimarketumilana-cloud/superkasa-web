// Menu na mobilu a filtr oborů. Všechno se ovládá dotykem nebo klávesnicí, nic jen najetím myší.
// Bez JavaScriptu je menu vidět celé a obory jsou rozdělené nadpisy.
(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    var set = function (open) {
      nav.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    btn.addEventListener("click", function () { set(!nav.classList.contains("open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
  }

  // Přihlášení do pokladny: e-mail a heslo → SuperKasa Cloud najde obchod a pošle prohlížeč do jeho pokladny.
  var form = document.getElementById("login-form");
  if (form && window.fetch) {
    var api = form.getAttribute("data-api");
    var note = document.getElementById("login-note");
    var err = form.querySelector(".login-err");
    var shops = form.querySelector(".login-shops");
    var btn = form.querySelector("button[type=submit]");
    var label = btn.textContent;
    var offline = function () { note.textContent = form.getAttribute("data-offline"); note.hidden = false; };
    // Běží cloud? Upozornění je v HTML vidět předem (i bez JavaScriptu); schová se, až server odpoví.
    fetch(api + "/api/cloud/health", { mode: "no-cors", cache: "no-store" })
      .then(function () { note.hidden = true; }, offline);
    var send = function (slug) {
      err.hidden = true;
      btn.disabled = true;
      btn.textContent = form.getAttribute("data-busy");
      fetch(form.getAttribute("data-api") + "/api/cloud/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-app": "1" },
        body: JSON.stringify({ email: form.email.value, password: form.password.value, slug: slug || undefined })
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (d) {
            if (!r.ok) throw new Error(d.error || form.getAttribute("data-error"));
            if (d.shops) {
              while (shops.firstChild) shops.removeChild(shops.firstChild);
              var p = document.createElement("p");
              p.textContent = form.getAttribute("data-choose");
              shops.appendChild(p);
              d.shops.forEach(function (s) {
                var b = document.createElement("button");
                b.type = "button";
                b.className = "btn btn-ghost";
                b.textContent = s.name;
                b.addEventListener("click", function () { send(s.slug); });
                shops.appendChild(b);
              });
              shops.hidden = false;
              return;
            }
            location.href = d.url;
          });
        }, function () {
          offline();
          throw new Error(form.getAttribute("data-offline"));
        })
        .catch(function (e) { err.textContent = e.message; err.hidden = false; })
        .then(function () { btn.disabled = false; btn.textContent = label; });
    };
    form.addEventListener("submit", function (e) { e.preventDefault(); send(); });
  }

  var seg = document.querySelector(".picker .seg");
  if (seg) {
    var kinds = document.querySelectorAll(".picker .obor-kind");
    seg.hidden = false;
    seg.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      var f = b.getAttribute("data-f");
      seg.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      kinds.forEach(function (k) { k.hidden = f !== "all" && k.getAttribute("data-kind") !== f; });
    });
  }
})();
