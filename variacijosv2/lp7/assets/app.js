(function () {
  "use strict";

  var form = document.getElementById("lp7-form");
  var yearSelect = document.getElementById("lp7-year");
  var errorBox = document.getElementById("lp7-error");
  var successBox = document.getElementById("lp7-success");

  // Metų sąrašas: 18+ nuo šiandien, iki 75 metų atgal.
  if (yearSelect) {
    var now = new Date();
    var maxYear = now.getFullYear() - 18;
    var minYear = now.getFullYear() - 75;
    for (var y = maxYear; y >= minYear; y--) {
      var opt = document.createElement("option");
      opt.value = String(y);
      opt.textContent = String(y);
      yearSelect.appendChild(opt);
    }
  }

  function showError(message) {
    if (!errorBox) return;
    errorBox.textContent = message;
    errorBox.hidden = false;
  }

  function clearError() {
    if (!errorBox) return;
    errorBox.hidden = true;
    errorBox.textContent = "";
  }

  function calcAge(day, month, year) {
    var today = new Date();
    var birth = new Date(year, month - 1, day);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearError();

      var gender = form.querySelector('input[name="lp7-gender"]:checked');
      var day = form.querySelector("#lp7-day").value;
      var month = form.querySelector("#lp7-month").value;
      var year = form.querySelector("#lp7-year").value;

      if (!gender) {
        showError("Pasirink, kuo prisistatai.");
        return;
      }
      if (!day || !month || !year) {
        showError("Nurodyk pilną gimimo datą.");
        return;
      }

      var age = calcAge(parseInt(day, 10), parseInt(month, 10), parseInt(year, 10));
      if (age < 18) {
        showError("Registracija galima tik nuo 18 metų.");
        return;
      }

      // <!-- tracking: lp7_signup_submit -->
      form.hidden = true;
      if (successBox) {
        successBox.hidden = false;
        successBox.focus && successBox.focus();
      }
    });
  }
})();
