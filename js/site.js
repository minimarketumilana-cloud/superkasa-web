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
