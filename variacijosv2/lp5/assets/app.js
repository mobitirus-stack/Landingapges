(function () {
  "use strict";

  var TIER_LABELS = {
    auksine: "Auksinė narystė (14,90 €/mėn.)",
    platinine: "Platininė narystė (24,90 €/mėn.)"
  };

  /* ---------- narystės (tier) pasirinkimas ---------- */
  var tierButtons = document.querySelectorAll("[data-tier-pick]");
  var tierCards = document.querySelectorAll(".lp5-tier");
  var planSelect = document.getElementById("lp5-narystes-planas");
  var tiersSummary = document.getElementById("lp5-tier-summary");
  var signupNote = document.getElementById("lp5-signup-tier-note");

  function selectTier(tierId) {
    tierCards.forEach(function (card) {
      if (card.getAttribute("data-tier") === tierId) {
        card.setAttribute("data-tier-selected", "true");
      } else {
        card.removeAttribute("data-tier-selected");
      }
    });
    if (planSelect) {
      planSelect.value = tierId;
    }
    var label = TIER_LABELS[tierId] || tierId;
    if (tiersSummary) {
      tiersSummary.textContent = "Pasirinkta narystė: " + label + ". Gali pakeisti bet kada iki registracijos.";
    }
    if (signupNote) {
      signupNote.textContent = "Pasirinkta narystė: " + label + ".";
    }
  }

  tierButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      selectTier(btn.getAttribute("data-tier-pick"));
    });
  });

  if (planSelect) {
    planSelect.addEventListener("change", function () {
      if (planSelect.value) {
        selectTier(planSelect.value);
      }
    });
  }

  /* ---------- slaptažodžio rodymas/slėpimas ---------- */
  var passToggle = document.getElementById("lp5PassToggle");
  var passInput = document.getElementById("lp5-slaptazodis");
  var passIconUse = document.getElementById("lp5PassIconUse");
  var passLabel = document.getElementById("lp5PassToggleLabel");

  if (passToggle && passInput) {
    passToggle.addEventListener("click", function () {
      var isHidden = passInput.getAttribute("type") === "password";
      passInput.setAttribute("type", isHidden ? "text" : "password");
      passToggle.setAttribute("aria-pressed", isHidden ? "true" : "false");
      if (passIconUse) {
        passIconUse.setAttribute("href", isHidden ? "#lp5-icon-eye-off" : "#lp5-icon-eye");
      }
      if (passLabel) {
        passLabel.textContent = isHidden ? "Slėpti slaptažodį" : "Rodyti slaptažodį";
      }
    });
  }

  /* ---------- formos validacija ---------- */
  var form = document.getElementById("lp5Form");
  var formStatus = document.getElementById("lp5FormStatus");
  var formSuccess = document.getElementById("lp5FormSuccess");

  function setError(fieldId, message) {
    var el = document.getElementById(fieldId + "-err");
    if (el) { el.textContent = message || ""; }
  }

  function validate() {
    var ok = true;
    var vardas = document.getElementById("lp5-vardas");
    var amzius = document.getElementById("lp5-amzius");
    var miestas = document.getElementById("lp5-miestas");
    var planas = document.getElementById("lp5-narystes-planas");
    var epastas = document.getElementById("lp5-epastas");
    var slaptazodis = document.getElementById("lp5-slaptazodis");
    var sutikimas = document.getElementById("lp5-sutikimas");

    setError("lp5-vardas", "");
    setError("lp5-amzius", "");
    setError("lp5-miestas", "");
    setError("lp5-planas", "");
    setError("lp5-epastas", "");
    setError("lp5-slaptazodis", "");
    setError("lp5-sutikimas", "");

    if (!vardas.value || vardas.value.trim().length < 2) {
      setError("lp5-vardas", "Įrašyk bent 2 simbolių vardą.");
      ok = false;
    }
    var age = parseInt(amzius.value, 10);
    if (!age || age < 18 || age > 99) {
      setError("lp5-amzius", "Narystė skirta tik nuo 18 metų.");
      ok = false;
    }
    if (!miestas.value) {
      setError("lp5-miestas", "Pasirink miestą.");
      ok = false;
    }
    if (!planas.value) {
      setError("lp5-planas", "Pasirink VIP planą.");
      ok = false;
    }
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epastas.value);
    if (!emailOk) {
      setError("lp5-epastas", "Įrašyk teisingą el. pašto adresą.");
      ok = false;
    }
    if (!slaptazodis.value || slaptazodis.value.length < 8) {
      setError("lp5-slaptazodis", "Slaptažodis turi būti bent 8 simbolių.");
      ok = false;
    }
    if (!sutikimas.checked) {
      setError("lp5-sutikimas", "Reikia patvirtinti amžių ir sutikimą.");
      ok = false;
    }
    return ok;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (formStatus) { formStatus.textContent = ""; }
      if (!validate()) {
        if (formStatus) {
          formStatus.textContent = "Patikrink pažymėtus laukus ir bandyk dar kartą.";
        }
        return;
      }
      form.hidden = true;
      if (formSuccess) { formSuccess.hidden = false; }
      if (formStatus) { formStatus.textContent = ""; }
    });
  }
})();
