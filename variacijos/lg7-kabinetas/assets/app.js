(function () {
  "use strict";

  /* ---------- Prašymo forma: validacija + sėkmė ---------- */
  var form = document.querySelector(".Form_sentence");
  var successBox = document.querySelector(".Form_success");

  if (form) {
    var fields = [
      { input: form.querySelector("#f-kreipinys"), error: "#err-kreipinys",
        test: function (el) { return el.value.trim().length >= 2; } },
      { input: form.querySelector("#f-amzius"), error: "#err-amzius",
        test: function (el) { return el.value !== ""; } },
      { input: form.querySelector("#f-sritis"), error: "#err-sritis",
        test: function (el) { return el.value.trim().length >= 2; } },
      { input: form.querySelector("#f-adresas"), error: "#err-adresas",
        test: function (el) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()); } },
      { input: form.querySelector("#f-zodis"), error: "#err-zodis",
        test: function (el) { return el.value.length >= 8; } },
      { input: form.querySelector("#f-taisykles"), error: "#err-taisykles",
        test: function (el) { return el.checked; } }
    ];

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      /* tracking: form_submit_attempt */

      var firstInvalid = null;

      fields.forEach(function (field) {
        if (!field.input) { return; }

        var errEl = document.querySelector(field.error);
        var ok = field.test(field.input);

        if (ok) {
          field.input.setAttribute("aria-invalid", "false");
          if (errEl) { errEl.hidden = true; }
        } else {
          field.input.setAttribute("aria-invalid", "true");
          if (errEl) { errEl.hidden = false; }
          if (!firstInvalid) { firstInvalid = field.input; }
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      form.hidden = true;
      if (successBox) {
        successBox.hidden = false;
        successBox.focus();
      }
      /* tracking: form_submitted */
    });
  }

  /* ---------- Slapukų juosta ---------- */
  var COOKIE_KEY = "kabinetas-cookie-consent";
  var cookieBar = document.getElementById("cookie");

  if (cookieBar) {
    var alreadyChosen = null;
    try {
      alreadyChosen = window.localStorage.getItem(COOKIE_KEY);
    } catch (e) {
      alreadyChosen = null;
    }

    if (!alreadyChosen) {
      cookieBar.hidden = false;
    }

    cookieBar.querySelectorAll("button[data-cookie]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        try {
          window.localStorage.setItem(COOKIE_KEY, btn.getAttribute("data-cookie"));
        } catch (e) {
          /* privatus naršymo režimas ar užblokuota saugykla — tiesiog paslepiame juostą */
        }
        cookieBar.hidden = true;
        /* tracking: cookie_choice */
      });
    });
  }
})();
