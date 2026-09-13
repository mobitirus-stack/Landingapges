/*
  Vakaras — ui/board.js
  Vienas judesio mechanizmas: pasirinkus / patvirtinus bloką, bento lenta
  persitvarko (FLIP: First-Last-Invert-Play). Naudojamas ir vakaro tipo pasirinkimui,
  ir formos tęsinio etapų atskleidimui — tas pats reflow, ne keli skirtingi efektai.
*/
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- FLIP reflow ---------- */

  function flip(gridEl, mutate) {
    var blocks = Array.prototype.slice.call(gridEl.querySelectorAll(".c-block"));
    var before = new Map();

    blocks.forEach(function (el) {
      if (!el.hidden && el.offsetParent !== null) {
        before.set(el, el.getBoundingClientRect());
      }
    });

    mutate();

    if (reduceMotion) return;

    requestAnimationFrame(function () {
      blocks.forEach(function (el) {
        if (el.hidden) return;
        var b = before.get(el);
        if (!b) {
          /* naujas / ką tik atsiradęs blokas — švelnus įėjimas, ne FLIP */
          el.style.transition = "none";
          el.style.opacity = "0";
          el.style.transform = "translateY(10px)";
          requestAnimationFrame(function () {
            el.style.transition = "opacity " + "260ms" + " ease, transform 260ms ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
          return;
        }
        var a = el.getBoundingClientRect();
        var dx = b.left - a.left;
        var dy = b.top - a.top;
        var sx = a.width ? b.width / a.width : 1;
        var sy = a.height ? b.height / a.height : 1;
        if (Math.round(dx) === 0 && Math.round(dy) === 0 && sx === 1 && sy === 1) return;
        el.style.transformOrigin = "top left";
        el.style.transition = "none";
        el.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + sx + "," + sy + ")";
        requestAnimationFrame(function () {
          el.style.transition = "transform 420ms cubic-bezier(.2,.8,.2,1)";
          el.style.transform = "";
        });
      });
    });
  }

  /* ---------- Pagalbinės ---------- */

  function setSpan(el, col, row, order) {
    el.style.setProperty("--span-col", col);
    el.style.setProperty("--span-row", row);
    if (order !== undefined) el.style.setProperty("--order", order);
  }

  function showError(name, message) {
    var p = document.querySelector('[data-error="' + name + '"]');
    if (!p) return;
    if (message) {
      p.textContent = message;
      p.hidden = false;
    } else {
      p.hidden = true;
      p.textContent = "";
    }
  }

  function validateFieldset(fieldset) {
    var inputs = fieldset.querySelectorAll("input[required], select[required]");
    var firstInvalid = null;
    var ok = true;

    inputs.forEach(function (input) {
      showError(input.name, "");
      input.removeAttribute("aria-invalid");

      if (!input.checkValidity()) {
        ok = false;
        var message;
        if (input.validity.valueMissing) {
          message = "Šis blokas dar tuščias — užpildyk, kad galėtume tęsti.";
        } else if (input.type === "email" && input.validity.typeMismatch) {
          message = "Šis paštas neatrodo teisingas — patikrink @ ženklą.";
        } else if (input.type === "password" && input.validity.tooShort) {
          message = "Kombinacija per trumpa — reikia bent 8 simbolių.";
        } else if (input.type === "checkbox") {
          message = "Be šio sutikimo tvarkaraštyje atsirasti negalime.";
        } else {
          message = "Patikrink šį lauką — reikšmė neatrodo teisinga.";
        }
        showError(input.name, message);
        input.setAttribute("aria-invalid", "true");
        if (!firstInvalid) firstInvalid = input;
      }
    });

    if (firstInvalid) firstInvalid.focus();
    return ok;
  }

  /* ---------- Hero bento: vakaro tipas ---------- */

  var pradziaGrid = document.querySelector('[data-board="pradzia"]');
  var tesinysSection = document.getElementById("tesinys");
  var tesinysGrid = document.querySelector('[data-board="tesinys"]');
  var pradziaStatus = document.querySelector("[data-status]");
  var tesinysStatus = document.querySelector("[data-status-tesinys]");
  var introBlock = document.querySelector('[data-block="intro"]');

  var radios = document.querySelectorAll('input[name="vakaro_tipas"]');
  radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      var pickedLabel = radio.closest(".c-block--option");
      var pickedText = pickedLabel.dataset.option;

      flip(pradziaGrid, function () {
        document.querySelectorAll('[data-block^="opt-"]').forEach(function (block) {
          var isPicked = block.querySelector("input").checked;
          block.classList.toggle("is-picked", isPicked);
          if (isPicked) {
            setSpan(block, 2, 2, -10);
          } else {
            setSpan(block, 1, 1, 0);
          }
        });
        setSpan(introBlock, 2, 1, -20);
      });

      pradziaStatus.textContent = "Pasirinkta: " + pickedText + ". Dar trys blokai — ir baigta.";

      if (tesinysSection.hidden) {
        tesinysSection.hidden = false;
        var stepTwo = document.querySelector('[data-step="2"]');
        stepTwo.hidden = false;
        tesinysStatus.textContent = "Dar trys blokai — ir baigta.";
        requestAnimationFrame(function () {
          tesinysSection.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
          var firstField = stepTwo.querySelector("input, select");
          if (firstField) firstField.focus({ preventScroll: true });
        });
        /* tracking: vakaro_tipas_pasirinktas */
      }
    });
  });

  /* ---------- Formos tęsinio etapai ---------- */

  document.querySelectorAll("[data-advance]").forEach(function (button) {
    button.addEventListener("click", function () {
      var currentFieldset = button.closest("[data-step]");
      if (!validateFieldset(currentFieldset)) return;

      var nextStepNumber = button.dataset.advance;
      var nextFieldset = document.querySelector('[data-step="' + nextStepNumber + '"]');

      flip(tesinysGrid, function () {
        currentFieldset.querySelectorAll(".c-block").forEach(function (block) {
          setSpan(block, 1, 1, 0);
        });
        nextFieldset.hidden = false;
      });

      var remaining = nextStepNumber === "4" ? "Paskutinis blokas." : "Dar du blokai — ir baigta.";
      tesinysStatus.textContent = remaining;

      requestAnimationFrame(function () {
        var firstField = nextFieldset.querySelector("input, select");
        if (firstField) firstField.focus({ preventScroll: false });
      });

      /* tracking: zingsnis_" + nextStepNumber + "_atskleistas */
    });
  });

  /* ---------- Slaptažodžio (kombinacijos) rodymo perjungiklis ---------- */

  var passToggle = document.querySelector("[data-toggle-pass]");
  if (passToggle) {
    passToggle.addEventListener("click", function () {
      var input = document.getElementById(passToggle.getAttribute("aria-controls"));
      var shown = input.type === "text";
      input.type = shown ? "password" : "text";
      passToggle.setAttribute("aria-pressed", String(!shown));
      passToggle.setAttribute("aria-label", shown ? "Rodyti kombinaciją" : "Slėpti kombinaciją");
    });
  }

  /* ---------- Formos pateikimas ---------- */

  var form = document.getElementById("vakaroForma");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var lastFieldset = document.querySelector('[data-step="4"]');
    if (!validateFieldset(lastFieldset)) return;

    document.getElementById("vakaras-pradzia").hidden = true;
    tesinysSection.hidden = true;

    var success = document.querySelector("[data-success]");
    success.hidden = false;
    success.focus();
    success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });

    /* tracking: isirasymo_forma_pateikta -> isirasyta_sekme */
  });

  /* ---------- Slapukų sutikimas ---------- */

  var cookieBar = document.querySelector("[data-cookie]");
  var cookieOk = document.querySelector("[data-cookie-ok]");
  if (cookieBar && cookieOk) {
    try {
      if (localStorage.getItem("vakaras_slapukai_ok") === "1") {
        cookieBar.hidden = true;
      }
    } catch (e) { /* privatus naršymas — nesvarbu, juosta lieka matoma */ }

    cookieOk.addEventListener("click", function () {
      cookieBar.hidden = true;
      try {
        localStorage.setItem("vakaras_slapukai_ok", "1");
      } catch (e) { /* nieko nedarome, jei localStorage nepasiekiamas */ }
      /* tracking: slapukai_patvirtinti */
    });
  }
})();
