(function () {
  "use strict";

  /* ---------------------------------------------------------------
     1) Gimimo metų sąrašo užpildymas (18–75 m., skaičiuojama nuo šiol)
  ------------------------------------------------------------------ */
  var yearSelect = document.getElementById("birth-year");
  if (yearSelect) {
    var thisYear = new Date().getFullYear();
    var minAge = 18, maxAge = 75;
    for (var y = thisYear - minAge; y >= thisYear - maxAge; y--) {
      var opt = document.createElement("option");
      opt.value = String(y);
      opt.textContent = String(y);
      yearSelect.appendChild(opt);
    }
  }

  /* ---------------------------------------------------------------
     2) Tinklelio filtrai (amžius + miestas)
  ------------------------------------------------------------------ */
  var grid = document.getElementById("avatar-grid");
  var statusEl = document.getElementById("grid-status");
  var state = { age: "all", city: "all" };

  function updateGrid() {
    if (!grid) return;
    var cards = grid.querySelectorAll(".lp3-avatar-card");
    var visible = 0;
    cards.forEach(function (card) {
      var matchesAge = state.age === "all" || card.dataset.age === state.age;
      var matchesCity = state.city === "all" || card.dataset.city === state.city;
      var show = matchesAge && matchesCity;
      var li = card.closest("li");
      if (li) li.hidden = !show;
      if (show) visible++;
    });
    if (statusEl) {
      statusEl.textContent = visible === 0
        ? "Nė viena anketa neatitinka pasirinktų filtrų. Pabandykite pakeisti amžių arba miestą."
        : "Rodoma " + visible + " anketų pavyzdžių";
    }
  }

  document.querySelectorAll(".lp3-chip[data-filter]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var group = chip.dataset.filter;
      var value = chip.dataset.value;
      state[group] = value;

      document.querySelectorAll('.lp3-chip[data-filter="' + group + '"]').forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn === chip ? "true" : "false");
      });

      updateGrid();
    });
  });

  /* ---------------------------------------------------------------
     3) Registracijos formos validacija ir sėkmės būsena
  ------------------------------------------------------------------ */
  var form = document.getElementById("signup-form");
  var fieldsView = document.getElementById("form-fields-view");
  var successView = document.getElementById("form-success-view");
  var statusMsg = document.getElementById("form-status");

  function setFieldError(id, message) {
    var input = document.getElementById(id);
    var errorEl = document.getElementById(id + "-error");
    var field = input ? input.closest(".lp3-field") : null;
    if (errorEl) errorEl.textContent = message || "";
    if (field) field.classList.toggle("has-error", Boolean(message));
  }

  function validate() {
    var valid = true;

    var nickname = document.getElementById("nickname");
    if (!nickname.value.trim() || nickname.value.trim().length < 2) {
      setFieldError("nickname", "Įveskite bent 2 simbolių slapyvardį.");
      valid = false;
    } else {
      setFieldError("nickname", "");
    }

    var email = document.getElementById("email");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      setFieldError("email", "Įveskite teisingą el. pašto adresą.");
      valid = false;
    } else {
      setFieldError("email", "");
    }

    var password = document.getElementById("password");
    if (password.value.length < 8) {
      setFieldError("password", "Slaptažodis turi būti bent 8 simbolių.");
      valid = false;
    } else {
      setFieldError("password", "");
    }

    var birthYear = document.getElementById("birth-year");
    if (!birthYear.value) {
      setFieldError("birth-year", "Pasirinkite gimimo metus.");
      valid = false;
    } else {
      var age = new Date().getFullYear() - parseInt(birthYear.value, 10);
      if (age < 18) {
        setFieldError("birth-year", "Registracija galima tik nuo 18 metų.");
        valid = false;
      } else {
        setFieldError("birth-year", "");
      }
    }

    var city = document.getElementById("city");
    if (!city.value) {
      setFieldError("city", "Pasirinkite miestą.");
      valid = false;
    } else {
      setFieldError("city", "");
    }

    var consent = document.getElementById("consent");
    if (!consent.checked) {
      setFieldError("consent", "Reikia patvirtinti amžių ir taisykles, kad tęstumėte.");
      valid = false;
    } else {
      setFieldError("consent", "");
    }

    return valid;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!validate()) {
        if (statusMsg) {
          statusMsg.textContent = "Patikrinkite pažymėtus laukus ir bandykite dar kartą.";
          statusMsg.className = "lp3-form-status is-visible error";
        }
        return;
      }

      if (statusMsg) {
        statusMsg.textContent = "";
        statusMsg.className = "lp3-form-status";
      }

      if (fieldsView) fieldsView.classList.add("is-hidden");
      if (successView) successView.classList.add("is-visible");
      if (successView) successView.setAttribute("tabindex", "-1");
      if (successView) successView.focus();

      // <!-- tracking: lead_form_success -->
    });
  }

  updateGrid();
})();
