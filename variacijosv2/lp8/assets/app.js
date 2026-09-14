(function () {
  "use strict";

  var daySelect = document.getElementById("lp8-day");
  var yearSelect = document.getElementById("lp8-year");
  var form = document.getElementById("lp8-form");
  var errorBox = document.getElementById("lp8-form-error");
  var successBox = document.getElementById("lp8-success");

  // Gimimo diena: 1-31
  if (daySelect) {
    for (var d = 1; d <= 31; d++) {
      var opt = document.createElement("option");
      opt.value = String(d);
      opt.textContent = String(d);
      daySelect.appendChild(opt);
    }
  }

  // Gimimo metai: nuo (šie metai - 19) žemyn iki (šie metai - 82) — visada 18+.
  if (yearSelect) {
    var currentYear = new Date().getFullYear();
    var maxYear = currentYear - 19; // saugi riba, kad pasirinkimas visada reikštų 18+
    var minYear = currentYear - 82;
    for (var y = maxYear; y >= minYear; y--) {
      var yOpt = document.createElement("option");
      yOpt.value = String(y);
      yOpt.textContent = String(y);
      yearSelect.appendChild(yOpt);
    }
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var gender = form.querySelector('input[name="gender"]:checked');
      var day = document.getElementById("lp8-day").value;
      var month = document.getElementById("lp8-month").value;
      var year = document.getElementById("lp8-year").value;

      if (!gender || !day || !month || !year) {
        if (errorBox) {
          errorBox.textContent = "Prašome nurodyti lytį ir pilną gimimo datą.";
          errorBox.hidden = false;
        }
        return;
      }

      if (errorBox) errorBox.hidden = true;

      // Realaus backend'o nėra — tik kliento pusės demonstracinė "sėkmės" būsena.
      form.hidden = true;
      if (successBox) successBox.hidden = false;
    });
  }
})();
