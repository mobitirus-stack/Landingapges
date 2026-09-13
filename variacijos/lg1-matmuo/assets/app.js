(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * Helpers
   * ---------------------------------------------------------------- */

  function showError(el, message) {
    if (!el) return;
    el.textContent = message;
    el.hidden = false;
  }

  function clearError(el) {
    if (!el) return;
    el.textContent = "";
    el.hidden = true;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /* ------------------------------------------------------------------
   * Hero mini-form (FORM 1 lauko) — pašto adresas -> pilna forma
   * ---------------------------------------------------------------- */

  var startForm = document.getElementById("entry-start");
  var startEmail = document.getElementById("email-start");
  var startError = document.getElementById("email-start-error");
  var fullEmail = document.getElementById("email");
  var fullForm = document.getElementById("full-form");

  if (startForm) {
    startForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = startEmail.value.trim();

      if (!isValidEmail(value)) {
        showError(
          startError,
          "Pašto adresas neatpažintas. Patikrink formatą — turi būti pvz. vardas@pastas.lt."
        );
        startEmail.setAttribute("aria-invalid", "true");
        startEmail.focus();
        return;
      }

      clearError(startError);
      startEmail.removeAttribute("aria-invalid");

      // tracking: hero_email_entered
      if (fullEmail) {
        fullEmail.value = value;
      }

      var target = document.getElementById("entry-full");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  /* ------------------------------------------------------------------
   * Pilna forma (FORM pilna) — validacija + sėkmės būsena
   * ---------------------------------------------------------------- */

  if (fullForm) {
    var fields = {
      email: {
        input: document.getElementById("email"),
        error: document.getElementById("email-error"),
        validate: function (v) {
          return isValidEmail(v.trim());
        },
        message:
          "Pašto adresas neatpažintas. Patikrink formatą — turi būti pvz. vardas@pastas.lt.",
      },
      nickname: {
        input: document.getElementById("nickname"),
        error: document.getElementById("nickname-error"),
        validate: function (v) {
          return v.trim().length >= 3;
        },
        message: "Žymė per trumpa. Reikia bent 3 simbolių.",
      },
      passcode: {
        input: document.getElementById("passcode"),
        error: document.getElementById("passcode-error"),
        validate: function (v) {
          return v.length >= 8 && /[0-9]/.test(v);
        },
        message: "Kodas per silpnas. Reikia bent 8 simbolių ir bent vieno skaičiaus.",
      },
      "age-range": {
        input: document.getElementById("age-range"),
        error: document.getElementById("age-range-error"),
        validate: function (v) {
          return v !== "";
        },
        message: "Amžiaus intervalas nepasirinktas. Pasirink vieną iš sąrašo.",
      },
      declaration: {
        input: document.getElementById("declaration"),
        error: document.getElementById("declaration-error"),
        validate: function (v, input) {
          return input.checked;
        },
        message: "Deklaracija nepatvirtinta. Be jos duomenų lapo įrašyti negalime.",
      },
    };

    var successBox = document.getElementById("entry-success");

    function validateField(key) {
      var field = fields[key];
      if (!field.input) return true;
      var value = field.input.value;
      var ok = field.validate(value, field.input);
      if (!ok) {
        showError(field.error, field.message);
        field.input.setAttribute("aria-invalid", "true");
      } else {
        clearError(field.error);
        field.input.removeAttribute("aria-invalid");
      }
      return ok;
    }

    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
      if (!field.input) return;
      var eventName = field.input.type === "checkbox" ? "change" : "blur";
      field.input.addEventListener(eventName, function () {
        validateField(key);
      });
    });

    fullForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var allValid = true;
      var firstInvalid = null;

      Object.keys(fields).forEach(function (key) {
        var ok = validateField(key);
        if (!ok) {
          allValid = false;
          if (!firstInvalid) {
            firstInvalid = fields[key].input;
          }
        }
      });

      if (!allValid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // tracking: full_sheet_submitted
      fullForm.hidden = true;
      if (successBox) {
        successBox.hidden = false;
        successBox.scrollIntoView({ behavior: "smooth", block: "start" });
        successBox.focus();
      }
      // tracking: full_sheet_success_view
    });
  }

  /* ------------------------------------------------------------------
   * Matmenų išnaša — realiai išmatuoja h1 aukštį
   * ---------------------------------------------------------------- */

  var heading = document.getElementById("plate-heading");
  var calloutLabel = document.getElementById("callout-h1-value");

  function updateHeadingCallout() {
    if (!heading || !calloutLabel) return;
    var height = Math.round(heading.getBoundingClientRect().height);
    calloutLabel.textContent = "h1 — " + height + "px";
  }

  if (heading && calloutLabel) {
    updateHeadingCallout();
    window.addEventListener("resize", updateHeadingCallout);
    window.addEventListener("load", updateHeadingCallout);
  }

  /* ------------------------------------------------------------------
   * Slapukų juosta (C)
   * ---------------------------------------------------------------- */

  var consent = document.getElementById("consent");
  var consentAccept = document.getElementById("consent-accept");
  var CONSENT_KEY = "matmuo-consent-ack";

  if (consent) {
    try {
      if (window.localStorage.getItem(CONSENT_KEY) === "1") {
        consent.hidden = true;
      }
    } catch (e) {
      /* localStorage nepasiekiamas — juosta lieka matoma */
    }

    if (consentAccept) {
      consentAccept.addEventListener("click", function () {
        consent.hidden = true;
        // tracking: cookie_consent_acknowledged
        try {
          window.localStorage.setItem(CONSENT_KEY, "1");
        } catch (e) {
          /* localStorage nepasiekiamas — nutyliu */
        }
      });
    }
  }
})();
