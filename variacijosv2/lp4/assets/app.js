(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("lp4NavToggle");
  var navPanel = document.getElementById("lp4NavPanel");
  if (navToggle && navPanel) {
    navToggle.addEventListener("click", function () {
      var open = navPanel.getAttribute("data-open") === "true";
      navPanel.setAttribute("data-open", String(!open));
      navToggle.setAttribute("aria-expanded", String(!open));
    });
  }

  /* ---------- Password show/hide ---------- */
  var pwToggle = document.getElementById("lp4PasswordToggle");
  var pwInput = document.getElementById("lp4Password");
  if (pwToggle && pwInput) {
    pwToggle.addEventListener("click", function () {
      var showing = pwInput.type === "text";
      pwInput.type = showing ? "password" : "text";
      pwToggle.setAttribute("aria-pressed", String(!showing));
      pwToggle.setAttribute("aria-label", showing ? "Rodyti slaptažodį" : "Slėpti slaptažodį");
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqButtons = document.querySelectorAll(".lp4-duk__question");
  faqButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  /* ---------- Live feed rotation (single orchestrated moment) ---------- */
  var feedList = document.getElementById("lp4FeedList");
  var extraEntries = [
    { av: "9", cls: "lp4-avatar--9", name: "Neringa", action: "prisijungė iš Klaipėdos", time: "prieš 3 min" },
    { av: "10", cls: "lp4-avatar--10", name: "Justina", action: "atsakė į žinutę", time: "prieš 5 min" },
    { av: "3", cls: "lp4-avatar--3", name: "Odeta ir Raminta", action: "susirado bendrą pomėgį", time: "prieš 8 min" },
    { av: "11", cls: "lp4-avatar--11", name: "Paulina", action: "peržiūrėjo profilius Kaune", time: "prieš 11 min" }
  ];
  var entryIndex = 0;

  function buildFeedItem(entry) {
    var li = document.createElement("li");
    li.className = "lp4-feed__item";
    li.setAttribute("data-entering", "true");
    li.innerHTML =
      '<span class="lp4-avatar ' + entry.cls + ' lp4-avatar--md" aria-hidden="true">' + entry.av2 +
      '<span class="lp4-avatar__pulse" aria-hidden="true"></span></span>' +
      '<span class="lp4-feed__meta">' +
      '<span class="lp4-feed__name">' + entry.name + '</span>' +
      '<span class="lp4-feed__action">' + entry.action + '</span>' +
      '</span>' +
      '<span class="lp4-feed__time">' + entry.time + '</span>';
    return li;
  }

  var initials = { "3": "OD", "9": "NE", "10": "JU", "11": "PA" };
  extraEntries.forEach(function (e) { e.av2 = initials[e.av]; });

  if (feedList && !reduceMotion) {
    setInterval(function () {
      var entry = extraEntries[entryIndex % extraEntries.length];
      entryIndex++;
      var item = buildFeedItem(entry);
      feedList.insertBefore(item, feedList.firstChild);
      if (feedList.children.length > 5) {
        feedList.removeChild(feedList.lastElementChild);
      }
    }, 6000);
  }

  /* ---------- Form validation ---------- */
  var form = document.getElementById("lp4Form");
  var statusEl = document.getElementById("lp4FormStatus");

  function setError(id, message) {
    var el = document.getElementById(id);
    if (el) el.textContent = message || "";
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var valid = true;

      var name = document.getElementById("lp4Name");
      if (!name.value.trim()) {
        setError("lp4NameError", "Įrašyk vardą, kuris bus matomas profilyje.");
        valid = false;
      } else {
        setError("lp4NameError", "");
      }

      var email = document.getElementById("lp4Email");
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!emailOk) {
        setError("lp4EmailError", "Įrašyk galiojantį el. pašto adresą.");
        valid = false;
      } else {
        setError("lp4EmailError", "");
      }

      var city = document.getElementById("lp4City");
      if (!city.value) {
        setError("lp4CityError", "Pasirink miestą iš sąrašo.");
        valid = false;
      } else {
        setError("lp4CityError", "");
      }

      var age = document.getElementById("lp4Age");
      var ageNum = parseInt(age.value, 10);
      if (!ageNum || ageNum < 18 || ageNum > 99) {
        setError("lp4AgeError", "Registracija galima tik nuo 18 metų.");
        valid = false;
      } else {
        setError("lp4AgeError", "");
      }

      var password = document.getElementById("lp4Password");
      if (password.value.length < 8) {
        setError("lp4PasswordError", "Slaptažodis turi būti bent 8 simbolių.");
        valid = false;
      } else {
        setError("lp4PasswordError", "");
      }

      var consent = document.getElementById("lp4Consent");
      if (!consent.checked) {
        setError("lp4ConsentError", "Reikia patvirtinti amžių ir taisykles.");
        valid = false;
      } else {
        setError("lp4ConsentError", "");
      }

      if (!valid) {
        statusEl.setAttribute("data-state", "error");
        statusEl.textContent = "Patikrink paraudonuotus laukus ir bandyk dar kartą.";
        return;
      }

      statusEl.setAttribute("data-state", "success");
      statusEl.textContent = "Ačiū! Profilis sukurtas – patikrink el. paštą patvirtinimo nuorodai.";
      form.reset();
      /* tracking: lp4_signup_success */
    });
  }
})();
