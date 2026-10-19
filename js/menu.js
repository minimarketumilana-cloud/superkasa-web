// Menu na mobilu a tabletu: otevře/zavře se tlačítkem (dotykem), nic se neděje jen na najetí myší.
(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (!btn || !nav) return;
  function set(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  btn.addEventListener("click", function () { set(!nav.classList.contains("open")); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
})();
