(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Vienas judesys: fono perėjimas iš dienos į vakarą scroll'inant ---------- */
  (function scrollScene() {
    if (reduceMotion) return; // CSS jau nustato statinę --scroll-progress reikšmę

    var ticking = false;

    function update() {
      var doc = document.documentElement;
      var scrollable = doc.scrollHeight - window.innerHeight;
      var progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      root.style.setProperty("--scroll-progress", progress.toFixed(3));
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    update();
  })();

  /* ---------- Apatinės juostos aukštis, kad turinys nesusiklotų po ja ---------- */
  (function barHeight() {
    var bar = document.querySelector(".silas-bar");
    if (!bar) return;

    function sync() {
      root.style.setProperty("--bar-h", bar.offsetHeight + "px");
    }
    sync();
    window.addEventListener("resize", sync);
  })();

  /* ---------- Slapukų juosta (inline, ne plūduriuojanti kortelė) ---------- */
  (function cookieNotice() {
    var box = document.getElementById("silasConsent");
    var okBtn = document.getElementById("silasConsentOk");
    if (!box || !okBtn) return;

    var KEY = "silas_cookie_ack";
    var already = false;
    try {
      already = window.localStorage.getItem(KEY) === "1";
    } catch (e) {
      /* privati naršyklė / užblokuota — laikome, kad dar nematyta */
    }

    if (!already) {
      box.hidden = false;
    }

    okBtn.addEventListener("click", function () {
      box.hidden = true;
      try {
        window.localStorage.setItem(KEY, "1");
      } catch (e) {
        /* nepavyko įrašyti — nekritiška, tiesiog kitą kartą parodysime vėl */
      }
    });
  })();

  /* ---------- Slapto žodžio rodymas/slėpimas (piktograma, ne tekstas) ---------- */
  (function passwordToggle() {
    var btn = document.querySelector("[data-toggle-password]");
    var input = document.getElementById("f-zodis");
    if (!btn || !input) return;

    btn.addEventListener("click", function () {
      var shown = input.type === "text";
      input.type = shown ? "password" : "text";
      btn.setAttribute("aria-pressed", String(!shown));
      btn.setAttribute("aria-label", shown ? "Rodyti slaptą žodį" : "Slėpti slaptą žodį");
    });
  })();

  /* ---------- Formos validacija ir sėkmės būsena ---------- */
  (function formFlow() {
    var form = document.getElementById("silasForm");
    if (!form) return;

    var messages = {
      ieskoma: "Pasirink, ko ieškai — be to negalime tau parodyti tinkamų vietų.",
      karta: "Pasirink kartą, kad rastume tau tinkamas vietas.",
      krastas: "Įrašyk kraštą — bent apytikslį.",
      vardas: "",
      pastas: "Įrašyk laiškų adresą, kad galėtume atsiliepti.",
      pastas_invalid: "Laiškų adresas neatrodo tikras — peržvelk, ar nėra klaidos.",
      zodis: "Slaptas žodis turi būti bent 8 ženklų.",
      pazadas: "Pažymėk, kad esi pilnametis ir laikysiesi taisyklių, kad galėtume tęsti."
    };

    function setError(fieldName, text) {
      var p = form.querySelector('[data-error-for="' + fieldName + '"]');
      var wrap = form.querySelector('[data-field="' + fieldName + '"]');
      if (p) p.textContent = text || "";
      if (wrap) wrap.setAttribute("data-error", text ? "true" : "false");
    }

    function validate() {
      var ok = true;
      var els = form.elements;

      var ieskoma = els["ieskoma"].value;
      if (!ieskoma) {
        setError("ieskoma", messages.ieskoma);
        ok = false;
      } else {
        setError("ieskoma", "");
      }

      var karta = els["karta"].value;
      if (!karta) {
        setError("karta", messages.karta);
        ok = false;
      } else {
        setError("karta", "");
      }

      var krastas = els["krastas"].value.trim();
      if (!krastas) {
        setError("krastas", messages.krastas);
        ok = false;
      } else {
        setError("krastas", "");
      }

      var pastas = els["pastas"].value.trim();
      if (!pastas) {
        setError("pastas", messages.pastas);
        ok = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pastas)) {
        setError("pastas", messages.pastas_invalid);
        ok = false;
      } else {
        setError("pastas", "");
      }

      var zodis = els["zodis"].value;
      if (!zodis || zodis.length < 8) {
        setError("zodis", messages.zodis);
        ok = false;
      } else {
        setError("zodis", "");
      }

      var pazadas = els["pazadas"].checked;
      if (!pazadas) {
        setError("pazadas", messages.pazadas);
        ok = false;
      } else {
        setError("pazadas", "");
      }

      return ok;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // tracking: form_submit_attempt

      if (!validate()) {
        var firstError = form.querySelector('[data-error][data-error="true"]');
        if (firstError) {
          var field = firstError.querySelector("input, select");
          if (field) field.focus();
        }
        return;
      }

      form.setAttribute("data-state", "success");
      var success = form.querySelector(".silas-form__success");
      if (success) {
        success.focus();
      }
      // tracking: form_submitted
    });
  })();
})();
