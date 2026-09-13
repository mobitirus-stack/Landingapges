(function () {
  "use strict";

  var form = document.getElementById("lp1-signup-form");
  if (!form) return;

  var successPanel = document.getElementById("lp1-signup-success");
  var statusEl = document.getElementById("lp1-form-status");
  var passwordToggle = document.getElementById("lp1-password-toggle");
  var passwordInput = document.getElementById("lp1-password");

  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener("change", function () {
      passwordInput.setAttribute("type", passwordToggle.checked ? "text" : "password");
    });
  }

  var validators = {
    "lp1-nickname": function (el) {
      return el.value.trim().length >= 2 ? "" : "Įrašyk bent 2 simbolių slapyvardį.";
    },
    "lp1-age": function (el) {
      var v = Number(el.value);
      if (!el.value) return "Nurodyk amžių.";
      if (!Number.isFinite(v) || v < 18) return "Registruotis gali tik nuo 18 metų.";
      if (v > 99) return "Patikrink įrašytą amžių.";
      return "";
    },
    "lp1-gender": function (el) {
      return el.value ? "" : "Pasirink vieną iš variantų.";
    },
    "lp1-seeking": function (el) {
      return el.value ? "" : "Pasirink, ko ieškai.";
    },
    "lp1-city": function (el) {
      return el.value ? "" : "Pasirink miestą.";
    },
    "lp1-email": function (el) {
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(el.value.trim()) ? "" : "Įrašyk teisingą el. pašto adresą.";
    },
    "lp1-password": function (el) {
      return el.value.length >= 8 ? "" : "Slaptažodis turi būti bent 8 simbolių.";
    },
    "lp1-consent": function (el) {
      return el.checked ? "" : "Patvirtink amžių ir sutikimą, kad galėtume tęsti.";
    }
  };

  function setFieldState(id, message) {
    var el = document.getElementById(id);
    var errorEl = document.getElementById(id + "-err");
    var field = el ? el.closest(".lp1-field") : null;
    if (errorEl) errorEl.textContent = message;
    if (field) field.classList.toggle("lp1-field--invalid", Boolean(message));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var firstInvalid = null;
    var hasError = false;

    Object.keys(validators).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var message = validators[id](el);
      setFieldState(id, message);
      if (message) {
        hasError = true;
        if (!firstInvalid) firstInvalid = el;
      }
    });

    if (hasError) {
      statusEl.textContent = "Patikrink pažymėtus laukus ir bandyk dar kartą.";
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    statusEl.textContent = "";
    // tracking: lp1_signup_success
    form.hidden = true;
    successPanel.hidden = false;
    successPanel.focus();
  });
})();
