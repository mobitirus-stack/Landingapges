/* ==========================================================================
   Pultas — static/panel.js
   Vienintelis orkestruotas judesys: pasirinkus zoną, pulto rodyklė
   perbėga į tos vietovės padalą (reakcija į veiksmą, ne užkrovimo animacija).
   Be framework'ų, be build žingsnio.
   ========================================================================== */

(function () {
  "use strict";

  var GAUGE_CENTER_X = 120;
  var GAUGE_CENTER_Y = 120;
  var NEEDLE_LENGTH = 92;

  var zoneSelect = document.getElementById("pultas-zona");
  var needleLine = document.querySelector("[data-gauge-needle-line]");
  var readout = document.querySelector("[data-gauge-readout]");
  var openStage2Btn = document.querySelector("[data-open-stage2]");
  var stage1 = document.querySelector('[data-stage-panel="1"]');
  var stage2 = document.querySelector('[data-stage-panel="2"]');
  var form = document.getElementById("pultas-form");
  var successBox = document.querySelector("[data-form-success]");

  /* ---------- rodyklė reaguoja į pasirinktą zoną ---------- */

  function activityLabel(value) {
    if (value < 50) return "žemas";
    if (value <= 75) return "vidutinis";
    return "aukštas";
  }

  function updateNeedle(value) {
    if (!needleLine) return;
    // vertė 0–100 -> kampas per pusapskritimį (180deg kairėje -> 0deg dešinėje)
    var angleDeg = 180 - (value / 100) * 180;
    var angleRad = (angleDeg * Math.PI) / 180;
    var tipX = GAUGE_CENTER_X + NEEDLE_LENGTH * Math.cos(angleRad);
    var tipY = GAUGE_CENTER_Y - NEEDLE_LENGTH * Math.sin(angleRad);
    needleLine.setAttribute("x2", tipX.toFixed(1));
    needleLine.setAttribute("y2", tipY.toFixed(1));

    if (readout) {
      readout.textContent = value + " % · " + activityLabel(value);
    }
  }

  if (zoneSelect) {
    zoneSelect.addEventListener("change", function () {
      var opt = zoneSelect.options[zoneSelect.selectedIndex];
      var activity = opt ? parseInt(opt.getAttribute("data-activity"), 10) : NaN;
      if (!isNaN(activity)) {
        updateNeedle(activity);
        // tracking: zone_selected
        clearFieldError("pultas-zona");
      }
    });
  }

  /* ---------- 2 etapas: likusių laukų atvėrimas ---------- */

  if (openStage2Btn) {
    openStage2Btn.addEventListener("click", function () {
      if (!zoneSelect || !zoneSelect.value) {
        showFieldError("pultas-zona");
        zoneSelect && zoneSelect.focus();
        return;
      }
      stage2.hidden = false;
      openStage2Btn.hidden = true;
      var panelEl = document.getElementById("pultas-panel");
      if (panelEl) panelEl.setAttribute("data-stage", "2");
      var firstField = stage2.querySelector("input, select");
      if (firstField) firstField.focus();
      // tracking: stage2_opened
    });
  }

  /* ---------- klaidų valdymas (tekstu, ne vien spalva) ---------- */

  function showFieldError(fieldId) {
    var err = document.getElementById(fieldId + "-err");
    if (err) err.hidden = false;
  }

  function clearFieldError(fieldId) {
    var err = document.getElementById(fieldId + "-err");
    if (err) err.hidden = true;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /* ---------- formos pateikimas + validacija + sėkmė ---------- */

  if (form) {
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      // tracking: form_submit_attempt

      var valid = true;

      var zona = document.getElementById("pultas-zona");
      var saukinys = document.getElementById("pultas-saukinys");
      var diapazonas = document.getElementById("pultas-diapazonas");
      var adresas = document.getElementById("pultas-adresas");
      var raktas = document.getElementById("pultas-raktas");
      var leidimas = document.getElementById("pultas-leidimas");

      if (!zona.value) {
        showFieldError("pultas-zona");
        valid = false;
      } else {
        clearFieldError("pultas-zona");
      }

      if (!saukinys.value || saukinys.value.trim().length < 3) {
        showFieldError("pultas-saukinys");
        valid = false;
      } else {
        clearFieldError("pultas-saukinys");
      }

      if (!diapazonas.value) {
        showFieldError("pultas-diapazonas");
        valid = false;
      } else {
        clearFieldError("pultas-diapazonas");
      }

      if (!adresas.value || !isValidEmail(adresas.value)) {
        showFieldError("pultas-adresas");
        valid = false;
      } else {
        clearFieldError("pultas-adresas");
      }

      if (!raktas.value || raktas.value.length < 8) {
        showFieldError("pultas-raktas");
        valid = false;
      } else {
        clearFieldError("pultas-raktas");
      }

      if (!leidimas.checked) {
        showFieldError("pultas-leidimas");
        valid = false;
      } else {
        clearFieldError("pultas-leidimas");
      }

      if (!valid) {
        form.setAttribute("data-form-state", "invalid");
        var firstInvalid = form.querySelector(
          '.pultas-error:not([hidden])'
        );
        if (firstInvalid) {
          var relatedField = firstInvalid.id
            ? document.getElementById(firstInvalid.id.replace("-err", ""))
            : null;
          if (relatedField) relatedField.focus();
        }
        return;
      }

      form.setAttribute("data-form-state", "success");
      form.hidden = true;
      if (successBox) {
        successBox.hidden = false;
        successBox.focus && successBox.focus();
      }
      // tracking: channel_activated
    });
  }

  /* ---------- slapukų būsena (statinė juosta, ne plūduriuojanti) ---------- */

  var COOKIE_KEY = "pultas-cookie-choice";
  var cookieBar = document.querySelector("[data-cookie-bar]");
  var cookieAccept = document.querySelector("[data-cookie-accept]");
  var cookieEssential = document.querySelector("[data-cookie-essential]");

  function getCookieChoice() {
    try {
      return window.localStorage.getItem(COOKIE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setCookieChoice(value) {
    try {
      window.localStorage.setItem(COOKIE_KEY, value);
    } catch (e) {
      /* privatus langas ar blokuoti duomenys — tiesiog paslepiame juostą */
    }
  }

  if (cookieBar) {
    if (!getCookieChoice()) {
      cookieBar.hidden = false;
    }
    if (cookieAccept) {
      cookieAccept.addEventListener("click", function () {
        setCookieChoice("all");
        cookieBar.hidden = true;
        // tracking: cookie_choice
      });
    }
    if (cookieEssential) {
      cookieEssential.addEventListener("click", function () {
        setCookieChoice("essential");
        cookieBar.hidden = true;
        // tracking: cookie_choice
      });
    }
  }
})();
