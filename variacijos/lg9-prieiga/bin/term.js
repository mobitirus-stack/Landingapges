/* ==========================================================================
   lg9-prieiga — bin/term.js
   Komandų prompt'as: po vieną klausimą eilutėje, atsakymai lieka matomi
   virš kaip išvestis. Be jokių priklausomybių.

   Progresyvus patobulinimas: HTML be JS rodo visus 5 laukus kaip vieną
   formą su native HTML5 validacija (required/pattern/minlength/type).
   Su JS — laukai slepiami po vieną, validacija ir klaidos rodomos kaip
   terminalo išvesties eilutės.
   ========================================================================== */
(function () {
  "use strict";

  var form = document.getElementById("tm-form-el");
  if (!form) return;

  var steps = Array.prototype.slice.call(form.querySelectorAll(".tm-step"));
  var historyEl = document.getElementById("tm-history");
  var statusEl = document.getElementById("tm-status");
  var successEl = document.getElementById("tm-success");
  var successEmailEl = document.getElementById("tm-success-email");

  var RESERVED = ["admin", "root", "test", "prieiga", "naudotojas", "mazgas"];
  var LABELS = {
    user: "prisijungimo vardas",
    age: "amžiaus rėžis",
    region: "regionas",
    email: "e-adresas",
    pass: "prieigos frazė"
  };

  var answers = {};
  var currentStep = 1;

  function fieldOf(stepEl) {
    return stepEl.querySelector("input, select");
  }

  function stepByNumber(n) {
    for (var i = 0; i < steps.length; i++) {
      if (Number(steps[i].dataset.step) === n) return steps[i];
    }
    return null;
  }

  function announce(msg) {
    if (statusEl) statusEl.textContent = msg;
  }

  function showStep(n) {
    steps.forEach(function (s) {
      s.hidden = Number(s.dataset.step) !== n;
    });
    var active = stepByNumber(n);
    if (active) {
      var f = fieldOf(active);
      if (f) f.focus();
    }
  }

  function validate(name, value) {
    if (name === "user") {
      if (!value) return "klaida: prisijungimo vardas privalomas.";
      if (!/^[A-Za-z0-9_]{3,20}$/.test(value)) {
        return "klaida: vardas per trumpas arba su neleistinais simboliais. naudok 3–20 raidžių, skaičių ar apatinį brūkšnį.";
      }
      if (RESERVED.indexOf(value.toLowerCase()) !== -1) {
        return "klaida: šis vardas užimtas. bandyk kitą.";
      }
      return "";
    }
    if (name === "age") {
      return value ? "" : "klaida: pasirink amžiaus rėžį.";
    }
    if (name === "region") {
      return value && value.length >= 2 ? "" : "klaida: parašyk regioną (bent 2 simboliai).";
    }
    if (name === "email") {
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      return ok ? "" : "klaida: e-adresas neatrodo teisingas. patikrink @ ir domeną.";
    }
    if (name === "pass") {
      return value && value.length >= 8 ? "" : "klaida: prieigos frazė per trumpa. bent 8 simboliai.";
    }
    return "";
  }

  function addHistoryLine(name, displayValue, stepNum) {
    var li = document.createElement("li");
    li.dataset.step = String(stepNum);
    li.className = "tm-just-added";

    var text = document.createElement("span");
    text.textContent = LABELS[name] + ": " + displayValue;
    li.appendChild(text);

    var editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "tm-history-edit";
    editBtn.textContent = "keisti";
    editBtn.setAttribute("aria-label", "keisti atsakymą: " + LABELS[name]);
    editBtn.addEventListener("click", function () {
      editStep(stepNum);
    });
    li.appendChild(editBtn);

    historyEl.appendChild(li);
    window.setTimeout(function () {
      li.classList.remove("tm-just-added");
    }, 400);
  }

  function editStep(stepNum) {
    Array.prototype.slice.call(historyEl.querySelectorAll("li")).forEach(function (li) {
      if (Number(li.dataset.step) >= stepNum) li.remove();
    });

    steps.forEach(function (s) {
      var sn = Number(s.dataset.step);
      if (sn === stepNum) {
        s.hidden = false;
      } else if (sn > stepNum) {
        s.hidden = true;
        var f = fieldOf(s);
        if (f) f.value = "";
        var err = s.querySelector(".tm-err");
        if (err) err.hidden = true;
      } else {
        s.hidden = true;
      }
    });

    currentStep = stepNum;
    var target = stepByNumber(stepNum);
    var input = fieldOf(target);
    if (input) input.focus();
    announce("keiti atsakymą: " + LABELS[fieldOf(target).name] + ".");
  }

  function finish() {
    form.hidden = true;
    if (successEmailEl) {
      successEmailEl.textContent = "validacija prasidėjo. patvirtinimą gausi adresu " + (answers.email || "") + ".";
    }
    if (successEl) successEl.hidden = false;
    announce("paskyra paleista.");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var stepEl = stepByNumber(currentStep);
    if (!stepEl) return;

    var field = fieldOf(stepEl);
    var errEl = stepEl.querySelector(".tm-err");
    var value = (field.value || "").trim();
    var msg = validate(field.name, value);

    if (msg) {
      if (errEl) {
        errEl.textContent = msg;
        errEl.hidden = false;
      }
      field.setAttribute("aria-invalid", "true");
      field.focus();
      return;
    }

    if (errEl) errEl.hidden = true;
    field.removeAttribute("aria-invalid");

    answers[field.name] = value;
    var displayValue = field.name === "pass" ? "●●●●●●●●" : value;
    addHistoryLine(field.name, displayValue, currentStep);

    stepEl.hidden = true;

    if (currentStep < steps.length) {
      currentStep += 1;
      showStep(currentStep);
      var nextField = fieldOf(stepByNumber(currentStep));
      announce(
        "atsakyta: " + LABELS[field.name] + ". klausimas " + currentStep + " iš " + steps.length + ": " + LABELS[nextField.name] + "."
      );
    } else {
      finish();
    }
  });

  // progresyvus patobulinimas: slepiame 2–5 tik kai JS iš tikrųjų veikia
  steps.forEach(function (s) {
    if (Number(s.dataset.step) !== 1) s.hidden = true;
  });
  form.noValidate = true;

  // slapukų juosta
  var bar = document.getElementById("tm-cookies");
  var okBtn = document.getElementById("tm-cookies-ok");
  if (bar && okBtn) {
    var alreadyOk = false;
    try {
      alreadyOk = localStorage.getItem("tm_cookies_ok") === "1";
    } catch (err) {
      alreadyOk = false;
    }
    if (!alreadyOk) bar.hidden = false;

    okBtn.addEventListener("click", function () {
      bar.hidden = true;
      try {
        localStorage.setItem("tm_cookies_ok", "1");
      } catch (err) {
        /* privatus naršymas — tiesiog paslepiame juostą šiai sesijai */
      }
    });
  }
})();
